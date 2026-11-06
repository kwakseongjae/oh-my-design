---
name: Raksul
colors:
  primary: '#0264bf'
  primary-hover: '#00529e'
  accent: '#e7560d'
  accent-hover: '#d14904'
  focus-ring: '#3fa2f3'
  background: '#ffffff'
  foreground: '#000000'
  surface: '#fafafa'
  price: '#009fe7'
  link: '#00a0e8'
  input-hover: '#eef0f4'
  search-category: '#a6afba'
  search-category-hover: '#8e98a3'
  search-border: '#c0c7d1'
  label-ink: '#222222'
typography:
  body:
    fontSize: 14px
    fontWeight: 400
    use: Measured product-card container, line-height 16.8px; Roboto is live-loaded, while Japanese glyph attribution remains unresolved.
  button:
    fontSize: 14px
    fontWeight: 600
    use: Header signup and login labels, line-height 14px; their declared Japanese family is not promoted to a loaded-face token.
rounded:
  square: 0px
  button: 4px
components:
  signup-link:
    type: button
    backgroundColor: '#e7560d'
    textColor: '#ffffff'
    rounded: 4px
    height: 32px
    padding: 4.8px 8px
    typography: 14px / 600
    hover: 'bg #d14904'
    pressed: 'bg #d14904; outline 2px solid #3fa2f3; outline-offset 2px'
    focus: 'outline 2px solid #3fa2f3; outline-offset 2px'
    use: 新規会員登録 — header registration link, measured 100px wide. No border or shadow at rest. Pressed observation includes pointer focus.
  login-button:
    type: button
    backgroundColor: '#0264bf'
    textColor: '#ffffff'
    rounded: 4px
    height: 32px
    padding: 4.8px 12px
    typography: 14px / 600
    hover: 'bg #00529e'
    pressed: 'bg #00529e; outline 2px solid #3fa2f3; outline-offset 2px'
    focus: 'outline 2px solid #3fa2f3; outline-offset 2px'
    use: ログイン — header button, measured 79.2px wide. No border or shadow at rest. Pressed observation includes pointer focus.
  search-input:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#000000'
    height: 33px
    padding: 12.8px 47px 12.8px 12.8px
    typography: 16px / 400
    hover: 'bg #eef0f4'
    pressed: 'bg #eef0f4; outline 2px solid #3fa2f3; outline-offset 2px'
    focus: 'outline 2px solid #3fa2f3; outline-offset 2px'
    use: Header search input with placeholder チラシ、Tシャツ、ダンボール; measured 759.3px wide. Radius is 0px 4px 4px 0px, retained here because a uniform radius would misdescribe it. The input itself has no border or shadow.
  search-category:
    type: button
    backgroundColor: '#a6afba'
    textColor: '#ffffff'
    height: 33px
    padding: 12.8px
    typography: 12px / 600
    hover: 'bg #8e98a3'
    pressed: 'bg #8e98a3'
    use: すべて — search category button, measured 89.6px wide. Visible label is 12px/600 inside a 14px/600 container. Radius is 3px 0px 0px 3px. No border or shadow at rest; keyboard focus was browser auto, so no focus token is declared.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Roboto
---

# Design System Inspiration of Raksul

## Overview

### Visual Theme & Atmosphere

Raksul is a Japanese online printing and customer-acquisition platform. It connects orders to spare capacity at partner printing companies, and also offers newspaper inserts and posting services. Its company history records establishment in September 2009 and the launch of the printing and customer-acquisition platform in March 2013. [Official service description](https://corp.raksul.com/news/press/260603_raksul_design/), [history](https://corp.raksul.com/about/history/).

The corporate identity connects that business to printing history. In its September 2021 logo announcement, Raksul described retaining the B42 lettering behind its R symbol while refining its shape for visibility across sizes and applications. The uppercase corporate logotype was intended to convey stable quality; rounded letterforms and space express approachability and openness. Those are documented corporate-logo intentions, distinct from the measured storefront's interface typography. [Official logo announcement](https://corp.raksul.com/news/press/210917_raksul_logo/).

The live storefront is dense, white and practical: a wide search field, two compact account actions, blue navigation, a left product directory, promotional imagery and a three-column product grid. The measured account pair gives that density a clear hierarchy: blue **`#0264bf`** for login and orange **`#e7560d`** for registration. Product prices use cyan **`#009fe7`** on very light grey cards. This is an interpretation of the captured homepage, rather than a published brand principle.

The product continues to expand around the preparation of print work. Raksul's June 2026 announcement introduced a design-production service for enterprise customers, with editable delivered designs and templates shared across locations. That provides current product context; the component measurements below come from the public storefront. [Official announcement](https://corp.raksul.com/news/press/260603_raksul_design/).

The measured homepage is the Japanese storefront at `raksul.com/`, with HTML `lang="ja"`; the capture did not redirect to another regional edition.

### Brand Narrative

Raksul's stated vision is “仕組みを変えれば、世界はもっと良くなる” — changing systems can make the world better. Its corporate site connects that vision to bringing the internet into traditional industries. The B42-derived corporate symbol gives the printing business a historical reference, while the present storefront puts search, prices and specifications close together. [Corporate site](https://corp.raksul.com/), [logo announcement](https://corp.raksul.com/news/press/210917_raksul_logo/).

### Principles

For an implementation based on this measured surface, distinguish account actions by colour, expose product details alongside prices, and keep product panels flat. These are design observations from the homepage. The corporate logo's documented intentions are stable quality, approachability and openness. [Official logo announcement](https://corp.raksul.com/news/press/210917_raksul_logo/).

### Personas

No persona study was opened; no persona model is inferred from this capture.

## Colors

These names describe measured reference roles. Raksul did not expose a global first-party colour-token scale in the captured custom-property census. The values below come from computed product controls, their children and the rendered census, rather than from framework or widget variables.

| Role | Value | Observed use |
|---|---|---|
| Primary | `#0264bf` | Login button and design-service navigation label |
| Primary hover | `#00529e` | Login hover and pressed background |
| Accent | `#e7560d` | Header registration link |
| Accent hover | `#d14904` | Registration hover and pressed background |
| Focus ring | `#3fa2f3` | Authored solid outline on signup, login and search input |
| Background | `#ffffff` | Header navigation and search-input rest background |
| Foreground | `#000000` | Product-name and descriptive paragraphs; search input's computed text colour |
| Surface | `#fafafa` | Popular-product card background |
| Price | `#009fe7` | Product-card price paragraphs and their number spans |
| Link | `#00a0e8` | Link colour captured on the homepage logo anchor and several content links |
| Input hover | `#eef0f4` | Search-input hover and pressed background |
| Search category | `#a6afba` | Search-category button at rest |
| Search category hover | `#8e98a3` | Search-category button on hover and press |
| Search border | `#c0c7d1` | The search assembly's ancestor border, 1px solid |
| Label ink | `#222222` | Product card's small outlined print-category label |

The paragraph census is mixed: `rgb(0, 159, 231)` appears on 73 paragraphs, black on 59 and white on 6. The cyan count includes price paragraphs; it should not replace black as the descriptive-copy colour. Census totals also include embedded content and are not a clean brand palette.

## Typography

**Official product use:** no opened first-party source names a storefront text face. The official logo announcement documents **B42** in the corporate symbol; that establishes logo context, without establishing an interface-font role. B42 was not in the live loaded-face list and receives no specimen.

**Live-loaded:** the census reports **Roboto 400 normal**, **Roboto 700 normal**, and **kamii-icon normal normal**. Roboto is the only text family promoted to the family token. A measured product-card container declares Roboto; the capture does not establish the font rendering each Japanese glyph. Roboto's serving URL was not resolved by this census. The icon face has an `@font-face` source list containing relative `@raksul/kamii-icon/dist/kamii-icon.woff2` and `.woff` URLs; it is an icon resource, with no text-family role.

**Official distributed assets:** no font distribution or licence page was opened and verified.

**Declared-only faces and stack context:** body and h1 declare `Roboto, "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, Arial, sans-serif`; Roboto's loaded status is established above. The census's button declaration is `"Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, Arial, sans-serif`. The measured header controls declare `Hiragino Kaku Gothic ProN`. Those Japanese families and Arial were absent from the loaded-face list and receive no specimen. A KARTE ranking control also declares Noto Sans JP; it is excluded with that embed and was not reported loaded.

**Unresolved:** Japanese glyph-level rendering, Roboto's serving mechanism and storefront font licensing. **Substitute: none chosen.**

| Measured location | Size / weight | Line height |
|---|---|---|
| Signup and login labels | 14px / 600 | 14px |
| Design navigation container | 16px / 400 | 16px |
| Design navigation visible label | 16px / 600 | In the 16px-high label box |
| Search input | 16px / 400 | `normal` |
| Search category container / visible label | 14px / 600; 12px / 600 | Container `normal` |
| Product-card container | 14px / 400 | 16.8px |
| Small print-category label | 10px / 600 | Not separately recorded |

The loaded 700 face does not prove that the measured 600 declarations use a separately loaded 600 face. No heading scale is inferred from these controls.

## Layout

The captured desktop has a sticky header measured at 1440 × 109px. Search and account controls form its upper row; service navigation occupies the next row. The first-party root property `--width-container-outer` is `1156px`; this is a declared container setting, rather than a measurement of every rendered section.

The survey places a 220px-wide left directory at x=158 and an 880px main heading/link at x=402. Popular-product cards begin at x=402, 698 and 995, each approximately 287.5px wide. Preserve the distinction between the left directory, the promotional region and the product grid when using this desktop composition as a reference.

### Responsive Behavior

Only the 1440 × 1000 desktop viewport was measured; mobile layouts, breakpoints and touch states are unverified.

## Elevation & Depth

The six selected product controls are shadowless at rest. The search assembly has a 1px solid `#c0c7d1` border on an ancestor. The measured account actions use a 4px radius; the navigation link and product card are square. No general elevation scale was verified.

## Motion & Easing

The design-navigation link's raw computed transition is `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s`; the business-card link's is `all 0.1s linear 0s`. These are declarations captured at rest. The card's transition does not establish its unmeasured pointer-state effect. Signup, login, the search input and search category each report `all 0s ease 0s` at rest. No site-wide motion scale is inferred.

## Components

The four declared components each have a measured authored state. The following dimensions are the observed desktop identities, rather than a responsive sizing prescription. All six selected controls have `border: none` and `box-shadow: none` on the element itself at rest.

| Control | Geometry | Rest appearance |
|---|---|---|
| `signup-link` — 新規会員登録 | 100 × 32px; 4px radius; padding 4.8px 8px; 14px/600 | Orange `#e7560d`, white `#ffffff` |
| `login-button` — ログイン | 79.2 × 32px; 4px radius; padding 4.8px 12px; 14px/600 | Blue `#0264bf`, white `#ffffff` |
| `search-input` — チラシ、Tシャツ、ダンボール | 759.3 × 33px; radius 0px 4px 4px 0px; padding 12.8px 47px 12.8px 12.8px; 16px/400 | White `#ffffff`, computed text `#000000` |
| `search-category` — すべて | 89.6 × 33px; radius 3px 0px 0px 3px; padding 12.8px; container 14px/600, label 12px/600 | Grey `#a6afba`, white `#ffffff` |

The registration action is a link. Its hover background is `#d14904`; login uses `#00529e`. The search field changes to `#eef0f4`, and its category button to `#8e98a3`. Exact pressed and keyboard-focus observations appear in the States table.

Two further controls remain useful visual references in prose. The **デザインサービス** navigation link is 143.4 × 40px, square, with 12.8px 8px padding, a white background and blue label. Its container is 16px/400, while its visible label is 16px/600. Its only measured focus change was browser `auto`, and hover and press showed no computed change within the probe's comparison scope.

The **名刺** popular-product card link is 287.5 × 131px, square, with 9px padding, a `#fafafa` background and a 14px/400 container. Product-name and descriptive children are black; the price paragraph is `#009fe7`; the 10px/600 print-category label is `#222222`. Both state calls left its hover and press unmeasured. Its keyboard ring was browser `auto`, so it is absent from the structured component list.

### States

| Control | Hover | Pressed pointer observation | Keyboard focus |
|---|---|---|---|
| Signup link | Background `#d14904` | Same darker background plus solid outline | Rest orange background plus 2px solid `#3fa2f3`, offset 2px |
| Login button | Background `#00529e` | Same darker background plus solid outline | Rest blue background plus the same solid outline |
| Search input | Background `#eef0f4` | Same grey background plus solid outline | Rest white background plus the same solid outline |
| Search category | Background `#8e98a3` | Same darker grey; no additional compared change | Browser `auto` outline, excluded from brand tokens |
| Design navigation link | No compared change | No compared change | Browser `auto` outline, excluded from brand tokens |
| Business-card link | UNMEASURED | UNMEASURED | Browser `auto` outline, excluded from brand tokens |

The solid outlines disappear after blur; the probe records no persistent focus changes. Pressed results combine `:active`, pointer hover and the focus acquired on pointer down; they do not establish a separate active-only colour rule. For the navigation link, “no compared change” covers self, its pseudo-elements, one descendant and its pseudo-elements, and three ancestor levels with pseudo-elements. The comparison includes colours, border, drawn outline, shadow, opacity, transform, filter, visibility, size, text decoration, backgrounds, masks and image/SVG attributes. It does not establish pixel-level absence of change outside that scope.

Disabled states were not captured as measured states.

## Do's and Don'ts

- Use the measured blue login and orange registration pair with white labels and compact 32px heights.
- Keep price cyan separate from black product descriptions.
- Preserve the search assembly's asymmetric corners and the distinction between container and visible-label typography.
- Retain the solid authored focus ring on the three controls where it was measured.
- Exclude Tailwind internals, KARTE rankings, the survey popup and chat widgets from the product-token palette.
- Leave unavailable font faces without specimens. Substitute: none chosen.

## Voice & Tone

The captured labels are task-specific: “商品一覧”, “デザインサービス”, “印刷テンプレート”, “再注文・増刷” and the search examples “チラシ、Tシャツ、ダンボール”. Product cards combine the product name, quantity, price, tax notation and print specifications. Use that concrete information hierarchy as the writing reference; no separate voice guideline was verified.

## Agent Prompt Guide

“Create a Raksul storefront header using the measured 32px account actions: a 100px orange registration link at `#e7560d` and a 79.2px blue login button at `#0264bf`, both with white 14px/600 labels and 4px corners. Darken their hover backgrounds to `#d14904` and `#00529e`; preserve the measured solid focus outline. Keep Japanese font selection unresolved. Substitute: none chosen.”

“Build a product-information layout using square `#fafafa` panels, black descriptions and `#009fe7` price paragraphs. The measured card identity is 287.5 × 131px with 9px padding. Card hover and pressed behaviour remain unspecified.”

## Governance

### Known Gaps

- **Contrast, `signup-link`.** Text `#ffffff` on `#e7560d` measures 3.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `search-category`.** Text `#ffffff` on `#a6afba` measures 2.22:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
