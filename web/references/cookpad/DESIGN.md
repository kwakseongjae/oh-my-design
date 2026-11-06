---
name: Cookpad
colors:
  primary: '#ff9933'
  brand: '#ff9933'
  canvas: '#f8f6f2'
  surface: '#ffffff'
  layer: '#fcfcfb'
  layer-gray: '#f4f1ec'
  warm-gray: '#ecebe9'
  foreground: '#000000'
  charcoal: '#4a4a4a'
  muted: '#767676'
  tertiary: '#939290'
  border: '#cececd'
  on-primary: '#fcfcfb'
  accent-yellow: '#e9b83f'
  premium-tint: '#fff3d8'
  accent-light: '#fdf1e2'
typography:
  section:
    fontSize: 18px
    fontWeight: 600
    use: Popular-ingredient and category headings; live markup and the linked product CSS, not a measured heading control
  title:
    fontSize: 16px
    fontWeight: 600
    use: Premium collection headings in live markup; the carousel recipe title instead uses the 18px/700 CSS rule
  button:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    use: Measured Search submit label
  secondary:
    fontSize: 16px
    fontWeight: 500
    use: Measured visible Login button span inside a link
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Measured hero search input and the product's body-large CSS rule; recipe-detail text was not measured
  category:
    fontSize: 14px
    fontWeight: 400
    use: Measured visible label inside the Vegetable category link
  navigation:
    fontSize: 18px
    fontWeight: 400
    use: Measured Recipe Challenge sidebar link
rounded:
  square: 0px
  trending-photo: 6px
  control: 8px
  recipe-frame: 8px
  full: 9999px
spacing:
  xs: 4
  sm: 8
  md: 16
  base: 16
  lg: 24
components:
  button-primary:
    type: button
    backgroundColor: '#ff9933'
    textColor: '#fcfcfb'
    rounded: 8px
    height: 48px
    padding: 0px 16px
    typography: 16px / 600
    hover: box-shadow rgba(0, 0, 0, 0.06) 0px 0px 0px 999px inset
    pressed: box-shadow rgba(0, 0, 0, 0.16) 0px 0px 0px 999px inset
    focus: box-shadow rgba(0, 0, 0, 0.12) 0px 0px 0px 999px inset
    use: '検索: input[type=submit][name=commit], the orange special variant. Focus records only the authored inset shadow; Chrome''s auto outline is excluded. The CSS primary variant is black.'
  button-secondary:
    type: button
    textColor: '#4a4a4a'
    border: '1px solid #cececd'
    rounded: 8px
    height: 48px
    typography: 16px / 500
    hover: visible child box-shadow rgba(0, 0, 0, 0.06) 0px 0px 0px 999px inset
    pressed: visible child box-shadow rgba(0, 0, 0, 0.16) 0px 0px 0px 999px inset
    use: 'Link: header ログイン at /jp/login, transparent on white. These are the visible span''s measured size, label and border; its 8px radius is from the linked product CSS. The anchor itself is 23px high with 0px radius and #939290 colour, changing to #000000 on hover/press; visible text stays #4a4a4a.'
  button-text:
    type: button
    textColor: '#767676'
    rounded: 0px
    height: 28px
    padding: 0px
    typography: 18px / 400
    hover: 'fg #000000, including the visible label and inline SVG strokes'
    pressed: 'fg #000000, including the visible label and inline SVG strokes'
    use: 'Link: sidebar レシピチャレンジ at /jp/challenges, transparent on the white navigation panel. Its auto focus outline is browser supplied.'
  category-tile:
    type: button
    textColor: '#000000'
    rounded: 8px
    height: 64px
    padding: 16px
    typography: 14px / 400
    shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px 0px
    hover: 'bg #f8f6f2'
    pressed: 'bg #f8f6f2'
    use: 'Link: 野菜 at /jp/categories/10, transparent on the white content panel. The anchor''s inherited font is 16px/400; its visible label is 14px/400. Its auto focus outline is browser supplied.'
fonts:
  roles:
    sans: noto-sans
---

# Design System Inspiration of Cookpad

## Overview

### Visual Theme & Atmosphere

Cookpad is a recipe posting and search service whose community also shares **つくれぽ**, recommendations of dishes people have cooked. Its mission is **「毎日の料理を楽しみにする」**, to make everyday cooking fun. Ingredient search, browsing and contributors' food photographs give the product a practical starting point: deciding what to cook. These product and mission descriptions come from Cookpad's [service page](https://info.cookpad.com/service) and [company philosophy](https://info.cookpad.com/about).

The measured desktop design puts large **white panels (`#ffffff`) inside a warm cream frame (`#f8f6f2`)**. Orange `#ff9933` appears on Search, the recipe-writing action and the active discovery navigation. The chef-hat logo, generous food images and small author portraits make the recipe community visible. This is an observation of the page's composition, rather than a claim that Cookpad prescribes a home-kitchen metaphor. The measured homepage is the Japanese edition (`cookpad.com/jp`), reached from `https://cookpad.com`, with HTML `lang="ja"`.

Cookpad's published design work has evolved beyond a single visual layer. A [2021 account by its design-strategy team](https://note.com/fjkn/n/nf73742ec925a) describes Apron, guidelines joining iOS, Android and Web after earlier Sara and Citrus work. Separately, the company's [2022 Organic announcement](https://prtimes.jp/main/html/rd/p/000000255.000027849.html) introduced corporate branding and Cookpad Sans. That announcement concerns corporate communications; the product font evidence below comes from the live recipe site. The current homepage combines a persistent discovery sidebar, a central ingredient search, a recommendation carousel, category navigation and a premium-service strip.

#### Primary tasks

- Search by an ingredient, using **「つかいたい食材は？」** and **「検索」**.
- Browse ingredient photographs, popular keywords and categories such as 野菜, お肉, 魚介 and たまご.
- Save or create recipes after logging in; the sidebar explicitly explains that requirement.
- Post recipes and exchange つくれぽ, as described on the official service page.

### Brand Narrative

Cookpad's [official history](https://info.cookpad.com/corporate) dates the company to **October 1997 in Fujisawa**, the recipe posting/search service **`kitchen@coin` to March 1998**, and the change to **クックパッド to June 1999**. It records the premium service and conversion to the current company form in September 2004. The current mission centres the value of everyday cooking for people, communities and the environment, as explained on the company philosophy page.

The 2021 Apron article describes a move from the older Web framework Sara and the 2018 Citrus system toward guidelines shared across iOS, Android and Web, and then a React component library. It is historical design-development evidence, not proof that all 2026 classes or tokens belong to Apron. The 2022 corporate Organic identity used warm organic shapes and colours; its Latin Cookpad Sans was developed from the logotype with Fontworks. These corporate facts retain their own context alongside the live product measurements.

The legal notice identifies **「クックパッド株式会社」**, **「東京都目黒区大橋2-22-44」**. The company history records its headquarters moving to Meguro in May 2024. Its corporate page also lists a Bristol office and describes the UK operation as a second headquarters in its 2016 history; the Japanese product's legal operator and Tokyo address support the country proposal **JP**. No parent company is named in the opened Japanese legal notice.

### Principles

- **Make everyday cooking fun.** This is the company's stated mission, not an inferred visual principle.
- **Help people help each other.** The company philosophy describes a platform that supports mutual help; its service description provides the concrete mechanism of shared recipes and つくれぽ.
- **Make reusable product design available across platforms.** The historical Apron account describes shared guidelines and implementation libraries as a way to improve design quality and give developers more time with users.
- **For this reference, keep the measured roles distinct.** White content, cream frame, orange special actions, gray quiet navigation and gold premium labels come from the current page; this last point is implementation guidance derived from the measurements.

### Personas

No sourced persona study was opened; the prior fictional biographies are not retained as product facts.

## Colors

The survey found **90 computed `--cookpad-*` custom properties**. The values below are either those first-party properties or colours observed on the product controls. Spaced RGB triplets are converted to six-digit hex without changing the channels. Framework and carousel defaults are excluded.

| Role | Value | Direct evidence |
|---|---|---|
| Brand / orange action | `#ff9933` | `--cookpad-base-orange`, `--cookpad-button-special-background`; Search background |
| Outer canvas | `#f8f6f2` | `--cookpad-surface-canvas-default`; category hover/press |
| White product panels | `#ffffff` | `--cookpad-base-white`; navigation ancestors and search field |
| Default layer / inverse content | `#fcfcfb` | `--cookpad-surface-layer-default`, `--cookpad-text-inverse`; Search label |
| Gray layer | `#f4f1ec` | `--cookpad-surface-layer-gray` |
| Subtle border / gray4 | `#ecebe9` | `--cookpad-border-secondary`, `--cookpad-gray4` |
| Foreground | `#000000` | `--cookpad-text-primary`; most frequent paragraph ink, 52 paragraphs |
| Charcoal | `#4a4a4a` | `--cookpad-gray9`; search input and visible Login label |
| Secondary / muted | `#767676` | `--cookpad-text-secondary`; inactive Recipe Challenge navigation |
| Tertiary | `#939290` | `--cookpad-text-tertiary`; Login anchor's own colour |
| Main border | `#cececd` | `--cookpad-border-primary`; visible Login border |
| Premium gold | `#e9b83f` | `--cookpad-premium-gold`; premium icon inside the recipe card |
| Premium attention fill | `#fff3d8` | `--cookpad-premium-attention-background`; premium label inside the recipe card |
| Light orange accent | `#fdf1e2` | `--cookpad-background-accent-primary-light`; token existence, not a measured component assignment |

The actual orange Search label is **`#fcfcfb`**, while the recipe title and author name over the photograph use **`#ffffff`**. These are different roles. The site also declares `--cookpad-button-primary-background: 0 0 0`: its named primary CSS variant is black, and the measured orange action uses `mise-btn--special`.

Authored interaction layers include `--cookpad-background-hover: #0000000f`, `--cookpad-background-focused: #0000001f` and `--cookpad-background-ripple: #00000029`. The measured inset shadows resolve these to black at 6%, 12% and 16%. The overlay token `--cookpad-surface-overlay: #0003` is a declared 20% black scrim; it is not the measured recipe-photo gradient described in §6.

## Typography

### Evidence classes

- **Official product-use statement:** no opened company publication identifies a prescribed recipe-product typeface. Product use is instead established by the live font census and linked stylesheet.
- **Live-loaded:** `document.fonts` reports **`noto-sans 400 normal`**, **`noto-sans 500 normal`** and **`noto-sans 600 normal`**. The machine family is therefore the exact CSS name **`noto-sans`**. The homepage links the [Adobe Typekit kit `zbz2cyk`](https://use.typekit.net/zbz2cyk.css); its opened CSS supplies these normal faces through WOFF2, WOFF and OpenType source alternatives with `font-display: swap`. No font binary was downloaded for this report.
- **Official distributed assets:** the product-linked Adobe kit is a delivery source for `noto-sans`. Cookpad's corporate announcement documents **Cookpad Sans**, a Latin typeface developed from its logotype with Fontworks. It does not establish recipe-product use or a public font download or redistribution licence. Cookpad Sans was not loaded in this product capture and receives no specimen.
- **Declared-only:** body, h1 and button declarations all list `noto-sans, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, arial, sans-serif`. Only `noto-sans` is in the loaded-face census; the other names remain fallback declarations, not additional verified product faces. The Adobe kit also declares italic 400/500/600 faces, but none was loaded. Product CSS contains weight 700 rules; no loaded 700 face appears in the census, so those metrics do not justify a 700-face specimen.
- **Unresolved:** the actual face supplying individual Japanese Kana and Han glyphs was not resolved. No script-specific rendering claim is made. **Substitute: none chosen.**

### Measured text and authored scale

| Use | Size / weight | Line height | Evidence |
|---|---|---|---|
| Search submit | `16px / 600` | `24px` | Control identity and visible label |
| Hero search input | `16px / 400` | `24px` | Control identity |
| Visible Login span | `16px / 500` | CSS `24px` | Probe label font; `.mise-btn--secondary` CSS line height |
| Sidebar Recipe Challenge | `18px / 400` | `28px` | Control identity and visible label |
| Vegetable category label | `14px / 400` | CSS `20px` | Probe label font; `.text-cookpad-body-medium` CSS |
| Popular-ingredient section heading | CSS `18px / 600` | CSS `28px` | Live h1 classes `text-cookpad-18 font-semibold leading-7` |
| Recommendation heading / large carousel recipe title | CSS `18px / 700` | CSS `28px` / `24px` respectively | Live classes and their product CSS; not a loaded 700 face |
| Premium collection headings | CSS `16px / 600` | Inherited CSS `24px` | Live h2 `font-semibold` and body declaration |
| Product CSS `title-large` rule | CSS `22px / 700` | CSS `30px` | Rule exists; not the measured homepage's section-heading treatment |

The measured Search and input have `-0.4px` letter spacing; the navigation link has `-0.45px`. A category anchor inherits `16px / 400`, but its visible child label is `14px / 400`. Preserve that distinction when reproducing the tile.

## Layout

At `1440 × 1000`, the survey records a `270px` sticky sidebar and a `1131 × 72px` sticky header. The hero logo is `224 × 61.2px`. A centred ingredient field and orange submit sit above the recommendations. The recommendation group combines one large photograph with two smaller ones; subsequent ingredient and category sections use four columns. These are the captured desktop arrangements, not a tested breakpoint specification.

Eight-pixel and sixteen-pixel spacing are directly present in the measured input and category padding and Search's horizontal padding. The opened product CSS and live classes also establish a `4px` small gap and `24px` section margins. These documented values support the normalized spacing entries; they do not establish the old draft's entire spacing scale. Category tiles keep their icon and label within a `64px` row. The page's white panels, cream frame, image crops and restrained dividers carry the hierarchy.

### Responsive Behavior

Rendered mobile and tablet behavior was not measured; this capture is desktop `1440 × 1000` only. Source CSS separately declares a three-column category grid, `16px` grid gaps and padded tiles at `970px`, and four columns at `1034px`; those are authored rules, not verified mobile rendering. Pinned mobile search, scrollable categories and mobile usage proportions remain unverified.

## Elevation & Depth

Depth varies by element. Search has **no rest shadow**; the Vegetable tile has the measured `rgba(0, 0, 0, 0.1) 0px 1px 5px 0px` shadow. Search and Login use very large **inset** shadows for state overlays, rather than an elevated outer shadow.

The recipe image contains an empty overlay layer with `linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))` and layer opacity `0.4`. This raw combination supports the white recipe title and author name. It is not a uniform 20% overlay. Dropdown or modal elevation was not measured.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.category`: `rgba(0, 0, 0, 0.1) 0px 1px 5px 0px`

## Motion & Easing

Every measured control's raw computed transition is **`all 0s ease 0s`**. No nonzero transition duration or authored easing curve was established for these controls. The homepage HTML declares a carousel autoplay interval of **`5000` milliseconds** through `data-slider-redux-autoplay-value`; that is an interval declaration, not a measured transition duration. Card image fades, heart scaling, modal motion, springs and reduced-motion behavior remain unverified.

---

**Evidence:** live homepage survey and keyboard-state capture, 2026-11-06; the linked [product stylesheet](https://global-web-assets.cpcdn.com/packs/css/application-v2-e3bfe30d.css); the linked [font delivery CSS](https://use.typekit.net/zbz2cyk.css). Company and design-history sources are linked at their claims. Raw control identities, census counts, source quotations and changes from the prior reference are in `verification.md` and `report.md`.

## Components

### Buttons

**Search — orange special variant**

- Background: `#ff9933`
- Text: `#fcfcfb`
- Border: none
- Radius: `8px`
- Padding: `0px 16px`
- Height: `48px` (`63.2px` wide in the capture)
- Font: `16px / 600 / noto-sans`
- Shadow: none at rest
- Hover: `rgba(0, 0, 0, 0.06) 0px 0px 0px 999px inset`
- Pressed: `rgba(0, 0, 0, 0.16) 0px 0px 0px 999px inset`
- Focus: authored `rgba(0, 0, 0, 0.12) 0px 0px 0px 999px inset`; it clears after blur
- Use: the central `検索` submit, `input[type="submit"][name="commit"]`; states were measured without submitting the form

Chrome additionally draws an `auto` outline on keyboard focus. That outline is not a Cookpad focus token. The authored inset shadow above is separate evidence.

**Login — secondary link with a styled span**

- Text: visible label `#4a4a4a`
- Border: visible span `1px solid #cececd`, as computed by the probe
- Radius: CSS `8px` on `.mise-btn--secondary`
- Height: visible span `48px`, approximately `95px` wide
- Font: visible label `16px / 500 / noto-sans`
- Hover: the span gains `rgba(0, 0, 0, 0.06) 0px 0px 0px 999px inset`
- Pressed: the span gains `rgba(0, 0, 0, 0.16) 0px 0px 0px 999px inset`
- Use: link `ログイン` in the header, transparent over its white panel

The focusable anchor itself is `94.8 × 23px`, radius `0px`, padding `0px`, `16px / 400`, transparent, without a border. Its own colour changes from `#939290` to `#000000` on hover/press; the visible child text stays `#4a4a4a`. Keyboard focus changes only the anchor's browser `auto` outline. The linked CSS specifies `16px` horizontal padding and a `1.5px` authored border for the child; the raw computed child border is `1px`, so the component record uses the computed result.

**Recipe Challenge — quiet navigation link**

- Text: `#767676` at rest
- Border: none
- Radius: `0px`
- Padding: `0px`
- Height: `28px` (`230px` wide)
- Font: `18px / 400 / noto-sans`
- Hover: label and inline SVG strokes become `#000000`
- Pressed: same colour change while hovered and pressed
- Use: sidebar link `レシピチャレンジ` at `/jp/challenges`, transparent on white; focus is the browser `auto` outline

### Category Tiles

**Vegetable — category link**

- Text: `#000000`
- Border: none
- Radius: `8px`
- Padding: `16px`
- Height: `64px` (`262.8px` wide)
- Font: visible child `14px / 400 / noto-sans`; anchor `16px / 400`
- Shadow: `rgba(0, 0, 0, 0.1) 0px 1px 5px 0px`
- Hover: transparent rest background becomes `#f8f6f2`
- Pressed: same `#f8f6f2` fill; no further change relative to hover
- Use: link `野菜` at `/jp/categories/10`, over the white content panel; includes a measured `32 × 32px` ingredient icon

Its focus treatment is a browser `auto` outline. Other category links in the survey share the `64px` height and `8px` radius; only 野菜 received state measurements.

### Cards

The measured recommendation link is **「スルメイカで2品！イカ焼きとゲソのホイル焼き」**, at `/jp/recipes/26713911?ref=search_top&via=recommended_top_recipe`. Its anchor is `604.4 × 293.1px`, transparent, radius `0px`, padding `0px`, without border or shadow. Its clipping wrapper has the live classes `overflow-hidden rounded-lg`, which supply an **8px photo-frame radius** in the opened product CSS. The visible title and author name are white over the image, not the anchor's inherited black. A premium label has `#fff3d8` fill, orange text and a gold icon. The carousel recipe title uses the source CSS's `18px / 700` rule. This layout overlays text on the photograph; it does not place that title in a separate strip below it.

Hover and press were **UNMEASURED** because this carousel link was outside the viewport during the pointer pass. Tab #17 changed only its browser `auto` outline; the focus crop was also outside the viewport. It is documented here without an interactive component token. Elsewhere, live trending-image markup uses `.rounded-md`, whose opened CSS is `6px`. Keep that treatment distinct from the recommendation's 8px clipping frame and the links' own square geometry.

### Inputs

The hero ingredient input is `359.5 × 24px`, white `#ffffff`, with `#4a4a4a` computed text, radius `0px`, no border or shadow, `0px 0px 0px 8px` padding and `16px / 400` type. Its parent supplies the visible white field container and a computed `1px solid #939290` border. Live markup and source CSS specify a `400px` wide, `48px` high container with `8px` radius and `8px` padding.

Hover, held press and real Tab focus all produced **no computed change within the probe's scope**: self, both pseudo-elements and three ancestor levels, with zero descendants. Focus landed at Tab #12. No orange focus ring was measured. The placeholder colour is declared as `#767676` by the product CSS; no typed text was entered. This all-unchanged input stays out of `tokens.components`.

### Badges and disabled styles

The recipe card's visible premium label establishes the fill, orange label and gold icon above. Its radius and interaction were not measured, so there is no badge component token. No rating or つくれぽ-count badge was measured.

The first-party CSS declares disabled special/primary content `#767676` on `#cececd`. These are **declared disabled values**, not measurements of a disabled control; no disabled component or measured disabled state is exported.

### States

| Control | Hover | Held press | Keyboard focus |
|---|---|---|---|
| Search | Black 6% inset shadow | Black 16% inset shadow, beyond hover | Black 12% inset shadow plus browser `auto` outline; both clear on blur |
| Login header link | Child 6% inset shadow; anchor own colour becomes black | Child 16% inset shadow; anchor remains black | Browser `auto` outline on anchor only |
| Recipe Challenge nav | Visible label and SVG strokes become black | Same change as hover | Browser `auto` outline only |
| Ingredient input | Measured, no computed change | Measured, no computed change | Tab #12, measured, no computed change |
| Recipe carousel link | UNMEASURED: outside viewport | UNMEASURED: outside viewport | Tab #17, browser `auto` outline only; no visible crop |
| Vegetable category link | Cream fill `#f8f6f2` | Same fill as hover | Browser `auto` outline only |

All six controls were enabled when read. No disabled state, empty state, loading skeleton, form error or saved/posted confirmation was measured. The no-change statements are limited to the probe's computed-style and DOM comparison scope: self and pseudo-elements, descendants and their pseudo-elements, and three ancestor levels. The input has zero descendants; navigation includes its inline SVG; the recipe comparison includes the image/source strings and empty gradient layer. Pixels inside image assets, canvas/video, external sprites, closed shadow trees, cross-origin frames and unrelated siblings are outside that scope.

## Do's and Don'ts

The following are implementation guidance derived from this capture, not quotations from an official brand manual.

- Preserve the cream outer frame **and white content panels**.
- Reproduce the orange Search action with its `#fcfcfb` label and inset interaction layers.
- Keep food photography and contributor identity visible in recommendation cards.
- Use the measured `8px` corners for Search and category controls; retain the distinct `6px` photo treatment, square anchors and circular carousel controls where evidenced.
- Use black paragraph ink, charcoal input/Login labels and the measured gray navigation roles separately.
- Keep the Vegetable tile's `64px` height and `16px` padding, with its visible `14px` label.
- Use only the loaded `noto-sans` family as a verified font token. Preserve the declared fallback stack as evidence without presenting its members as loaded faces.

## Voice & Tone

The official mission supplies an encouraging purpose, while the homepage's task labels are short and concrete: **「さがす」**, **「検索」**, **「レシピを書く」** and **「つかいたい食材は？」**. The sidebar explains that saving and creating recipes require login. These are observed product strings, rather than invented examples of success, error or onboarding copy.

The [official service description](https://info.cookpad.com/service) connects recipe contributions with つくれぽ and everyday cooking. That supports community-oriented context. A complete authored voice guide, forbidden-word policy and emotional treatments for empty, error or success states were not established.

## Agent Prompt Guide

Use these prompts to reproduce the measured surface:

- “Build the Cookpad desktop discovery composition with a cream `#f8f6f2` outer frame, white panels, a left sidebar, central ingredient search and large recipe photographs. Use `#000000` body ink and keep premium gold `#e9b83f` distinct from action orange `#ff9933`.”
- “Create the observed Search submit: `48px` high, `8px` radius, `0px 16px` padding, `16px / 600` `noto-sans`, orange background and `#fcfcfb` text. Add black inset shadows at 6% on hover, 16% on press and 12% on keyboard focus.”
- “Create the Vegetable category link: `64px` high, `16px` padding, `8px` radius, a `32px` icon and black `14px / 400` visible label. Start transparent over white; fill it with `#f8f6f2` on hover and held press.”
- “Keep the ingredient input's white container and gray border, using the measured input geometry in §4. Do not add an unmeasured orange focus treatment.”

Check the actual visible label when a transparent anchor contains a separately styled child. Keep declarations, loaded fonts and measured states distinct throughout implementation.

## Governance

### Known Gaps

- **Contrast, `button-primary`.** Text `#fcfcfb` on `#ff9933` measures 2.08:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
