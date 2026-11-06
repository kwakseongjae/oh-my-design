---
name: 피터팬의 좋은방 구하기
colors:
  primary: '#1db177'
  surface: '#ffffff'
  nav-ink: '#555558'
  filter-ink: '#898990'
  input-ink: '#0c0c0d'
  control-border: '#dadadc'
  account-border: '#e7e7e9'
  map-icon: '#535c68'
typography:
  control:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    use: Measured search input and filter labels; not a measurement of the body element.
  navigation:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 22.8571px
    use: 피터팬 카페 link at rest; weight becomes 500 on hover and hovered press.
  account:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    use: 로그인 및 회원가입 button.
rounded:
  map-control: 8px
  account-control: 24px
components:
  login-entry:
    type: button
    textColor: '#0c0c0d'
    border: '1px solid #e7e7e9'
    rounded: 24px
    height: 48px
    padding: 8px 16px 8px 8px
    typography: 14px / 500
    hover: 'box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 6px 0px'
    pressed: 'box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 6px 0px'
    focus: 'outline: 2px solid #1db177; outline-offset: 2px'
    use: 로그인 및 회원가입 header button; transparent over the white header. Entry control only; authentication was not opened or performed. Width 177.3px, line-height 20px.
  trade-filter:
    type: button
    textColor: '#898990'
    border: '1px solid #dadadc'
    rounded: 80px
    height: 40px
    padding: 9px 16px
    typography: 14px / 400
    focus: 'outline: 2px solid #1db177; outline-offset: 2px'
    use: 거래방식 secondary filter button; transparent over the white filter bar. Width 108.3px, line-height 20px, letter-spacing -0.3px. Hover and hovered press had no computed change in the documented scope.
  nav-cafe:
    type: button
    textColor: '#555558'
    rounded: 0px
    height: 22.8px
    padding: 0px
    typography: 16px / 400
    hover: 'color: #1db177; font-weight: 500'
    pressed: 'color: #1db177; font-weight: 500'
    focus: 'outline: 2px solid #1db177; outline-offset: 2px'
    use: 피터팬 카페 is a link to https://cafe.naver.com/kig, rendered transparently on the white header; it was not followed. Width 77.2px, line-height 22.8571px. Press measured while hovered, with no additional change beyond hover.
  all-filters:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#898990'
    border: '1px solid #dadadc'
    rounded: 80px
    height: 40px
    padding: 9px 16px
    typography: 14px / 400
    focus: 'outline: 2px solid #1db177; outline-offset: 2px'
    use: 전체필터 button, width 108.3px, line-height 20px, letter-spacing -0.3px. Hover and hovered press had no computed change in the documented scope.
  map-location:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#535c68'
    rounded: 8px
    height: 48px
    padding: 0px
    typography: 14px / 400
    shadow: rgba(0, 0, 0, 0.12) 0px 2px 14px 0px
    opacity: '0.9'
    focus: 'outline: 2px solid #1db177; outline-offset: 2px'
    use: Application current-location icon button above the map, width 48px. fg is the visible SVG fill; its parent has black computed color and no text label. The product bundle defines this overlay; no map-tile colors are included. Hover and hovered press had no computed change in the documented scope.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    ui: Spoqa Han Sans Neo
    numeric: Roboto
---

# Design System Inspiration of Peterpanz

## Overview

### Visual Theme & Atmosphere

피터팬의 좋은방 구하기 is a Korean property-finding service operated by 주식회사 두꺼비세상. Its [official product introduction](https://about.peterpanz.com/intro) traces it to a Naver café for direct property transactions and describes its present scope as homes from one-room accommodation to apartments. The same page emphasizes verified listings and filters for practical needs such as parking, pets and elevators: a documented evolution from a transaction community into a broader home-finding platform.

The measured homepage is the Korean-language product surface at `/villa?...` on `www.peterpanz.com` (`lang="ko"`), reached automatically from `/`. At 1440×1000, a property list occupies the left side and a map occupies the right. The green active property category, green listing counts and compact white filter bar give the interface its observed visual identity. **`#1db177` green** also connects a community link's hover treatment to the keyboard focus ring.

The [terms](https://www.peterpanz.com/use_of_terms) identify the operator and publish a Seoul address. The [company history](https://www.duse.co.kr/company/history.php) records the acquisition of 피터팬의 좋은방 구하기 in September 2017.

#### Primary tasks

Search by neighborhood, station, university or listing number; narrow results with filters; compare property photos and prices alongside their location. The header also exposes the café link and an account-entry button. No account or listing-submission workflow was entered.

### Brand Narrative

The [official introduction](https://about.peterpanz.com/intro) describes a direct-transaction community that now serves a broader search for a home. Its emphasis on verified listings and everyday conditions is expressed in the captured product by certification labels, filter controls, property imagery and geographic context. This connection is an interpretation of the stated product proposition and observed interface, not a quoted brand strategy.

### Principles

The official introduction explicitly emphasizes listing reliability and finding a home that fits one's lifestyle. It is product positioning; no official design-principles document was verified.

### Personas

No researched personas were established; no demographic or behavioral persona is inferred from the capture.

## Colors

The palette below comes from computed styles on identified product controls. These role labels describe the measurements; they are not published CSS custom-property names.

| Role | Value | Observed use |
|---|---|---|
| Primary | `#1db177` | Active 빌라∙주택 category in the survey; café-link hover; authored keyboard outlines |
| Surface | `#ffffff` | Search input, all-filters button and application map-location button; also the background behind transparent header controls |
| Navigation ink | `#555558` | 피터팬 카페 link at rest |
| Filter ink | `#898990` | 거래방식 and 전체필터 labels |
| Input/account ink | `#0c0c0d` | Search input's computed text color and account-entry label |
| Control border | `#dadadc` | Search and filter borders, 1px solid |
| Account border | `#e7e7e9` | Account-entry border, 1px solid |
| Map-control icon | `#535c68` | Visible SVG fill inside the current-location application overlay |

The map-location button's parent has computed color `#000000`; its visible icon is `#535c68`. Use the icon fill when reproducing it. Its overall opacity is 0.9.

The paragraph-ink census reports `rgb(232, 48, 48)` ×39, `rgb(137, 137, 144)` ×38 and `rgb(29, 177, 119)` ×33. It does not establish a universal paragraph foreground, so no global body-text color token is assigned. The census includes map content, badges and a customer-support embed; frequency alone does not establish a brand color.

The root exposes only two computed custom properties, both `--swiper-*`. Of 211 declared properties, 5 are Swiper and 206 are an unattributed `:root, :host` palette that is absent from the computed document root. Those 206 declarations co-occur with a Channel Talk shadow-root widget, but the survey does not record stylesheet ownership. Both groups are excluded from product tokens.

## Typography

### Evidence classes

- **Official product-use statement:** no page opened in this research names an official product font. Live use is the basis for the families below.
- **Live-loaded:** `document.fonts` reports **Spoqa Han Sans Neo 400, 500 and 700 normal**, and **Roboto 400 normal**. The measured search, filter, account and café controls use Spoqa Han Sans Neo. The survey's map-count buttons declare `roboto` at 16px/400.
- **Official distributed assets:** no separate brand font kit or redistribution license was verified. The product ships runtime assets: the opened [font stylesheet](https://www.peterpanz.com/css/fonts.css?version=1793955412) and census register same-origin WOFF files under `/mobile/assets/fonts/`: `SpoqaHanSansNeo-Regular.woff`, `SpoqaHanSansNeo-Medium.woff`, `SpoqaHanSansNeo-Bold.woff` and `Roboto-Regular.woff` for the loaded faces. The binary files were not downloaded.
- **Declared-only:** Roboto 500/700 and NanumSquare are registered but absent from the loaded list. The body's declared stack is `"Helvetica Neue", Helvetica, Arial, sans-serif`; those names are not evidence that any of those faces loaded. They receive no specimens or family tokens. FontAwesome, Glyphicons Halflings, fontello and swiper-icons are registered icon faces, not product text-family evidence. The support widget's NotoSansKR declaration is outside product typography.
- **Unresolved:** a general heading size, paragraph scale, font version and font redistribution rights were not established. **Substitute: none chosen.**

### Measured metrics

| Context | Size / weight | Line height | Letter spacing |
|---|---|---|---|
| Search input | 14px / 400 | 20px | normal |
| 거래방식 and 전체필터 | 14px / 400 | 20px | -0.3px |
| Account-entry button | 14px / 500 | 20px | normal |
| Café link at rest | 16px / 400 | 22.8571px | normal |
| Survey map-count buttons, Roboto | 16px / 400 | 34px | not measured |

The 14px metrics describe these controls, not the body's computed font size. The census declares Spoqa Han Sans Neo on the first h1 and button; it does not give the h1's size.

## Layout

At the measured 1440×1000 viewport, the left result panel is 560px wide and the map begins at x=560. The top navigation controls sit at y=24; the filter row's 40px controls begin at y=82; the map area begins at y=132. The location search begins at x=32 and is 260px wide. These are one-viewport measurements, not responsive breakpoints.

The viewport shows two columns of photo-led listing cards in the left panel, with prices and short property details below each image. Panel headers are sticky; the survey records them as 560×59px. Preserve the result/map relationship and compact control density when using this surface as a reference. No global spacing scale was extracted.

### Responsive Behavior

Not measured: only the 1440×1000 desktop surface was captured; no mobile or breakpoint behavior is specified.

## Elevation & Depth

Measured depth is local: the header account button adds a soft, zero-offset 6px shadow on hover and hovered press; the map-location overlay has a 2px-down, 14px-blur shadow at rest. Their raw alpha values are 0.1 and 0.12 respectively, as listed in §4. Search and filter controls have `box-shadow: none` at rest. No general elevation ladder is established.

## Motion & Easing

The account button's raw computed transition is `box-shadow, -webkit-box-shadow 0.3s, 0.3s ease, ease 0s, 0s`. The other five sampled controls report `all 0s ease 0s`. These strings are copied verbatim in the verification Proof block. The nonzero account shadow transition does not establish a general animation scale. No measured cubic-bezier curve, reduced-motion behavior or navigation animation is specified.

## Components

All six controls were measured at rest, pointer hover, hovered press and keyboard focus after closing the advertisement with **“닫기”**. No filled primary CTA was exposed by this survey; the account button is the header action sampled. The product stylesheet corroborates its hover shadow and the café link's hover color/weight. Pointer snapshots satisfy `:hover`/`:active`, but the later pointer-state crops have capture errors; the computed observations below remain subject to reviewer remeasurement.

| Control | Identity and rest | Measured state treatment |
|---|---|---|
| `login-entry` — 로그인 및 회원가입 | 177.3×48px; radius 24px; padding 8px 16px 8px 8px; 14px/500; transparent over white; `#0c0c0d`; 1px `#e7e7e9` border | Hover and hovered press add `rgba(0, 0, 0, 0.1) 0px 0px 6px 0px` shadow. Keyboard focus adds the green outline described below. |
| `trade-filter` — 거래방식 | 108.3×40px; CSS radius 80px; padding 9px 16px; 14px/400; transparent over white; `#898990`; 1px `#dadadc` border | Hover and hovered press: no computed change in scope. Keyboard focus: green outline. |
| `nav-cafe` — 피터팬 카페 | Link; 77.2×22.8px; radius/padding 0; 16px/400; transparent over white; `#555558`; no border | Hover and hovered press: `#1db177`, weight 500. Keyboard focus: green outline, with rest text color and weight. |
| `location-search` — 동, 지하철역, 대학교, 매물번호 | 260×40px; CSS radius 29px; padding 10px 12px 10px 38px; 14px/400; white; `#0c0c0d`; 1px `#dadadc` border | No computed change on hover, hovered press or actual keyboard focus in scope. Kept in prose; omitted from the interactive component registry. |
| `all-filters` — 전체필터 | 108.3×40px; CSS radius 80px; padding 9px 16px; 14px/400; white; `#898990`; 1px `#dadadc` border | Hover and hovered press: no computed change in scope. Keyboard focus: green outline. |
| `map-location` — `button.current-location.gps` | 48×48px; radius 8px; padding 0; computed 14px/400 but no text label; white; visible icon `#535c68`; opacity 0.9 | Rest shadow `rgba(0, 0, 0, 0.12) 0px 2px 14px 0px`. Hover and hovered press: no computed change in scope. Keyboard focus: green outline. |

The **keyboard outline is 2px solid `#1db177`, offset 2px** on the five non-input controls. It disappears after blur; no persistent change was found. The opened [product stylesheet](https://www.peterpanz.com/css/custom_login_join.css?version=1793955412) explicitly authors this treatment with `html :focus-visible:not(input):not(select):not(textarea)`. It is a solid author rule, not an `auto` browser ring.

### Shape and comparison scope

The account action is a pill using 24px CSS radius at 48px height. Search uses 29px and filters 80px CSS radii at 40px height; preserve these as the measured pill treatments rather than inventing a global radius scale. The square café hit box and 8px map-control corner serve different contexts.

“No computed change” is limited to self, its pseudo-elements, descendants and their pseudo-elements, and three ancestor levels. Descendants compared: account 1 image; transaction filter 4 including one SVG/path; café and search 0; all-filters 6 including one SVG/two paths; map-location 4 including one SVG/two paths. Styles, backgrounds, masks, images and SVG geometry/paint were compared. This does not establish absence of changes in siblings, canvas/video pixels, closed shadow roots or cross-origin frames. No disabled state or card-link state was measured.

### States

The five non-input controls have reversible authored keyboard outlines; the search input has actual `:focus-visible` with no compared visual change. Café hover and hovered press change color and weight. The account button's hover and hovered press add its shadow. Pressed observations were taken while the pointer remained hovered; neither changed control had any additional pressed difference versus hover. No error, selected-filter, disabled or submitted-form state is specified.

The pointer snapshots are raw computed observations with matching state flags. Their PNG crops failed the later pointer-state guard; the keyboard-focus crops and blur checks succeeded. See verification notes for the error strings and exact comparison scopes.

## Do's and Don'ts

- Reuse the measured green for the café hover and non-input keyboard outline; preserve the 400→500 café weight change.
- Keep transparent controls on their measured white context, with the light borders and dimensions in §4.
- Keep the search geometry even though its state styling is not promoted to a component token.
- Keep map tiles, the support widget, advertisements and unattributed shadow-root variables outside the product palette.
- Do not apply the non-input outline rule to every input, invent a disabled treatment, or present a fallback font as the loaded UI face.

These are implementation directions derived from this capture, not a published company design manifesto.

## Voice & Tone

The live UI uses short Korean task labels: “거래방식”, “전체필터” and the place-oriented search placeholder. The official introduction uses the invitation “좋은방 구할 때는 피터팬에서 시작하세요!” and explains filters with everyday needs such as parking and pets. Reproduce that concrete housing vocabulary; no broader authored voice guide was verified.

## Agent Prompt Guide

“Build a Korean property-search desktop interface using the measured Peterpanz product surface: a 560px left result panel beside a map at the 1440px reference width, a compact white filter row, 40px search/filter controls and loaded Spoqa Han Sans Neo at 14px. Use `#1db177` for the café hover and a 2px keyboard outline with 2px offset on the measured non-input buttons and link. Keep the café label 16px/400 at rest and 16px/500 on hover. Follow the component table for borders, radii, shadows and input behavior. Leave unmeasured mobile and disabled states unspecified.”

## Governance

### Known Gaps

- **Contrast, `all-filters`.** Text `#898990` on `#ffffff` measures 3.47:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
