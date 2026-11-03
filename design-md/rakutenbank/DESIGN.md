---
name: Rakuten Bank
colors:
  primary: '#bf0000'
  background: '#ffffff'
  foreground: '#424242'
  link: '#006ea7'
  muted: '#686868'
  border: '#d9d9d9'
  surface-hover: '#f7f7f7'
  card-ink: '#000000'
  header-hover: '#ec0606'
  header-pressed: '#8c0000'
  hero-hover: '#ff1212'
  hero-pressed: '#960000'
  link-hover: '#d80000'
typography:
  body:
    fontSize: 14px
    fontWeight: 400
    use: Live-loaded Noto Sans JP; base content-link metrics, not a claim about every paragraph or the header font.
rounded:
  header: 4px
  nav: 5px
  card: 10px
  hero: 100px
components:
  header-open:
    type: button
    backgroundColor: '#bf0000'
    textColor: '#ffffff'
    rounded: 4px
    height: 44px
    padding: 0px 16px
    typography: 14px / 400
    hover: 'background-color: #ec0606'
    pressed: 'background-color: #8c0000; border: 1px solid #ffffff; box-shadow: 0px 0px 0px 1px #8c0000'
    focus: 'background-color: #8c0000; border: 1px solid #ffffff; box-shadow: 0px 0px 0px 1px #8c0000'
    use: Header account-opening link, 口座開設. Width 114px; line-height 22.4px. Rest border is 1px solid rgba(0, 0, 0, 0), with no shadow. Its declared Hiragino Sans face is not verified as loaded; retain geometry without inventing a font specimen.
  header-login:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#bf0000'
    border: '1px solid #bf0000'
    rounded: 4px
    height: 44px
    padding: 0px 16px
    typography: 14px / 400
    hover: 'background-color: #f7f7f7'
    pressed: 'background-color: #bf0000; color: #ffffff; border: 1px solid #ffffff; box-shadow: 0px 0px 0px 1px #bf0000'
    focus: 'background-color: #bf0000; color: #ffffff; border: 1px solid #ffffff; box-shadow: 0px 0px 0px 1px #bf0000'
    use: Header login link, ログイン; destination was not opened. Width 112.8px; line-height 22.4px. Rest shadow none. Its declared Hiragino Sans face is not verified as loaded.
  nav-yen:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#006ea7'
    border: '1px solid #d9d9d9'
    rounded: 5px
    height: 26.5px
    padding: 0px 8px
    typography: 14px / 400
    hover: 'color: #d80000; text-decoration: underline solid #d80000'
    pressed: 'color: #8c0000; text-decoration: underline solid #8c0000'
    use: Yen-deposit navigation link, 円預金, 60px wide, Noto Sans JP, line-height 24.5px. Browser auto outline observed on press and focus; excluded from tokens. Focus also changes text to the hover red and adds an underline; full observation stays in the body.
  hero-open:
    type: button
    backgroundColor: '#bf0000'
    textColor: '#ffffff'
    border: '1px solid #bf0000'
    rounded: 100px
    height: 37.2px
    padding: 8px 24px
    typography: 16px / 700
    hover: 'background-color: #ff1212; border: 1px solid rgba(0, 0, 0, 0)'
    pressed: 'background-color: #960000; border: 1px solid rgba(0, 0, 0, 0)'
    focus: 'background-color: #ff1212; border: 1px solid rgba(0, 0, 0, 0)'
    use: Hero free-account-opening link, 口座開設（無料）はこちら, specifically /account/?l-id=top_z_190422_CO965. Width 268px; Noto Sans JP; line-height 19.2px. Rest shadow none.
  search-toggle:
    type: button
    textColor: '#686868'
    rounded: 4px
    height: 47px
    padding: 4px 8px
    typography: 14px / 400
    hover: 'background-color: #f7f7f7; color: #bf0000'
    pressed: 'background-color: #ffffff; color: #bf0000; border: 1px solid #bf0000'
    focus: 'background-color: #ffffff; color: #bf0000; border: 1px solid #bf0000'
    use: Site-search trigger button, サイト内検索, on the white header; its own rest background is transparent and is deliberately omitted. Width 89.6px; label 12px/400 within the 14px/400 control; self line-height 14px. Rest border 1px solid rgba(0, 0, 0, 0), shadow none. Declared Hiragino Sans is not verified as loaded. No search input was exposed in the survey.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Noto Sans JP
---

# Design System Inspiration of Rakuten Bank

## Overview

### Visual Theme & Atmosphere

Rakuten Bank is a Japanese bank whose company profile describes its activity as banking through electronic media. It was established on 14 January 2000 and began banking operations in July 2001. Its 2010 renaming notice announced changes to service names, the domain and the corporate logo alongside the change from eBANK to Rakuten Bank; the bank explicitly linked the move to its place in the Rakuten group and cooperation between group services. [Company](https://www.rakuten-bank.co.jp/corp/about/profile.html), [history](https://www.rakuten-bank.co.jp/corp/about/history.html), [2010 notice](https://www.rakuten-bank.co.jp/business/info/2010/100409-2.html).

The measured homepage pairs a white information surface with **Rakuten red `#bf0000`**, blue service links and colourful campaign artwork. The desktop survey screenshot shows several navigation layers, a campaign carousel, a six-card benefits row, service directories and support links. Small rectangular header actions coexist with a pill-shaped account-opening link in the hero. This is an observation of the public homepage, not an official design principle.

Its current expression also carries a 25-year anniversary mark beside the bank logo. The official anniversary page records a logo update in 2018; the separate logo notice dates the rollout from 2 July 2018. In 2026, the anniversary site frames the next stage around safety, security and convenience, while its timeline records such practical additions as smartphone ATM access in 2025. [Logo change](https://www.rakuten-bank.co.jp/info/2018/180618.html), [25th anniversary](https://www.rakuten-bank.co.jp/corp/25th_anniversary/).

The measured homepage is the Japanese edition at `www.rakuten-bank.co.jp/` (`lang="ja"`); the capture did not redirect to a regional path. Measurements describe its public desktop surface, without extending them to signed-in banking or the app.

### Brand Narrative

The bank's history connects its 2010 identity to the Rakuten group. The 2018 notice describes a logo change spanning the website, cards, apps and partner ATMs; the anniversary timeline identifies that change as the current logo. The 2026 anniversary presentation combines this history with concrete service development. It is not evidence of a new 2026 visual-system redesign. [2010 notice](https://www.rakuten-bank.co.jp/business/info/2010/100409-2.html), [2018 notice](https://www.rakuten-bank.co.jp/info/2018/180618.html), [anniversary](https://www.rakuten-bank.co.jp/corp/25th_anniversary/).

An official logo-use guideline governs use by eligible corporate service users; it is not a public UI token specification. [Logo guideline](https://www.rakuten-bank.co.jp/rules/logo.html).

### Principles

The bank's management philosophy explicitly commits to putting customers first and describes banking's public role, sound operations and depositor protection. Those are documented company principles; the interface observations above do not establish a separate set of official design principles. [Management philosophy](https://www.rakuten-bank.co.jp/corp/about/philosophy.html).

### Personas

No research-backed personas were verified.

## Colors

These are aliases for measured CSS values, not names from a published bank token library. No first-party custom-property palette was verified.

| Role | Value | Direct evidence |
|---|---|---|
| Primary | `#bf0000` | Header and hero account-opening fills; login text and border |
| Background | `#ffffff` | White controls and the leading background census entry, 100 elements |
| Foreground | `#424242` | Paragraph-ink sample, 2 visible paragraphs; this is not a universal paragraph rule |
| Link | `#006ea7` | Yen-deposit link at rest; 132 text-census entries |
| Muted | `#686868` | Search-trigger text at rest; 42 text-census entries |
| Border | `#d9d9d9` | Yen-deposit link's 1px border |
| Hover surface | `#f7f7f7` | Login and search-trigger hover backgrounds |
| Card ink | `#000000` | Debit-card link and its title at rest |
| Header hover | `#ec0606` | Header account-opening fill on hover |
| Header pressed/focused | `#8c0000` | Header account-opening fill and outer shadow; also the pressed nav ink |
| Hero hover/focused | `#ff1212` | Hero account-opening fill |
| Hero pressed | `#960000` | Hero account-opening fill |
| Link hover | `#d80000` | Yen-deposit link ink and underline |

The paragraph census contains white ×4, link blue ×3 and `#424242` ×2. Retain that context when choosing text on a light surface; the most frequent paragraph colour comes from mixed page roles. Transparent backgrounds and borders are recorded as `rgba(0, 0, 0, 0)` in the evidence, without assigning a solid background token.

## Typography

| Evidence class | What is verified |
|---|---|
| Official product use | No opened bank document names an official product font. |
| Live-loaded | `Noto Sans JP` 400 and 700, both normal, appear in `document.fonts` as loaded. The measured content nav, hero action and debit-card link declare this family. It is the only text family admitted to the typography tokens. |
| Official distributed assets | The live CSS exposes bank-hosted `rbNotoSansJP-Regular.woff2` / `.woff` and `rbNotoSansJP-Bold.woff2` / `.woff` URLs under `/shared/fonts/`. Their rules start with `local(...)`. No font package or licence was opened; the census does not resolve whether a local face or a URL supplied the loaded face. |
| Declared-only | Body and h1 stacks additionally name `Noto Sans`; the generic button stack names `Helvetica Neue`, `Helvetica` and `Arial`. The measured header controls declare `Hiragino Sans`. None of those named faces appears in the loaded-face list. They receive no specimen or family token. |
| Unresolved | Actual platform-font resolution in the header, font licensing and any app-wide type specification. Substitute: none chosen. |

Loaded icon faces are `bankicon`, `rex-icon`, `swiper-icons` and `rex-icon-font`. They are icon resources, excluded from the text-family token. The census records bank-hosted WOFF/TTF declarations for the first two and data URLs for the latter two.

| Measured element | Size / weight | Line height |
|---|---|---|
| Header opening and login links | 14px / 400 | 22.4px |
| Search trigger / visible label | 14px / 400 self; 12px / 400 label | 14px self |
| Yen-deposit nav link | 14px / 400 | 24.5px |
| Hero opening link | 16px / 700 | 19.2px |
| Debit-card link / title | 14px / 400 self; 18px / 400 title | 16.8px self |

These metrics remain useful where a family is unresolved. Do not render a different face as the header's verified font.

## Layout

In the 1440 × 1000 desktop survey, the top navigation is layered: customer type and corporate links, a logo/action row, five broad menu triggers, then a compact row of product links. The five menu triggers each measure 238.4 × 52px; the header opening link begins at x=1074, y=113. The hero campaign links measure 1344 × 280px in the survey. Below the introduction, six benefit-card links each measure 160 × 232.5px.

Use the captured hierarchy as the reference: dense navigation, a large campaign area, then grouped benefits and service information. No shared grid or spacing scale was verified.

### Responsive Behavior

Not measured; the evidence covers a 1440 × 1000 desktop viewport only.

## Elevation & Depth

The measured controls are flat at rest. The header opening link's pressed and keyboard-focus treatment combines a 1px white border with `box-shadow: rgb(140, 0, 0) 0px 0px 0px 1px`. The login link uses the same geometry with `rgb(191, 0, 0)` as the outer shadow. These are interaction indicators, not a general panel-elevation scale.

## Motion & Easing

The header actions and search trigger report a 300ms transition for background colour, colour and outline. Nav, hero and card report a 200ms transition for colour only. Both computed strings use `cubic-bezier(0.25, 0, 0.45, 1)`. The raw strings are preserved verbatim in verification.md. In particular, the hero's observed background-colour change is not listed as a transitioned property in its own computed string; do not infer a background animation from the colour duration. No carousel timing or broader motion scale was measured.

---

Live evidence: homepage survey and states, captured 2026-11-03; full paths, raw samples, source excerpts and exclusions are recorded in verification.md and report.md. The nonsense-path curl control was blocked with HTTP 403, so catch-all behaviour remains unresolved.

## Components

Five components are published from a single state capture. Each has an authored, measured hover or pressed change. Account opening, login and the deposit destination are links. No destination was activated.

| Control | Identity at rest |
|---|---|
| `header-open` — 口座開設 | 114 × 44px; radius 4px; padding `0px 16px`; `#bf0000` / `#ffffff`; 1px transparent border; 14px/400 |
| `header-login` — ログイン | 112.8 × 44px; radius 4px; padding `0px 16px`; `#ffffff` / `#bf0000`; 1px `#bf0000` border; 14px/400 |
| `nav-yen` — 円預金 | 60 × 26.5px; radius 5px; padding `0px 8px`; `#ffffff` / `#006ea7`; 1px `#d9d9d9` border; 14px/400 |
| `hero-open` — 口座開設（無料）はこちら | 268 × 37.2px; radius 100px; padding `8px 24px`; `#bf0000` / `#ffffff`; 1px `#bf0000` border; 16px/700 |
| `search-toggle` — サイト内検索 | 89.6 × 47px; radius 4px; padding `4px 8px`; transparent on the white header / `#686868`; 1px transparent border; 14px/400 self, 12px/400 label |

All five have `box-shadow: none` at rest. Their state changes appear in §14.

The measured debit-card promotional link is 250 × 250px, radius 10px, padding 8px, white with black text, no border or shadow. Its title is 18px/400 inside a 14px/400 control. The probe records a change to `text-decoration: underline solid rgb(0, 0, 0)` on hover, but the crop does not clearly show an underline on the nested copy. Press and focus also expose a browser `auto` ring. This card remains a documented raw observation, with no machine component published.

### States

All hover samples matched `:hover`; pressed samples matched `:active`. Focus used real Tab landings with `:focus-visible` true and the pointer away. Changes did not persist after blur.

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| `header-open` | Fill `#ec0606` | Fill `#8c0000`; 1px white border; 1px outer shadow `#8c0000` | Same as pressed; Tab #13; no browser ring |
| `header-login` | Fill `#f7f7f7` | Fill `#bf0000`; text/icon and 1px border white; 1px outer shadow `#bf0000` | Same as pressed; Tab #14; no browser ring |
| `nav-yen` | Text and underline `#d80000` | Text and underline `#8c0000`; browser `auto` outline | Text and underline `#d80000`; browser `auto` outline; Tab #20; no focus token |
| `hero-open` | Fill `#ff1212`; border becomes 1px transparent | Fill `#960000`; border becomes 1px transparent | Same as hover; Tab #49; no drawn outline |
| `search-toggle` | Fill `#f7f7f7`; text and search icon `#bf0000` | Fill white; text and search icon `#bf0000`; 1px `#bf0000` border | Same as pressed; Tab #10; no drawn outline |
| `debit-card` (prose only) | Computed black underline; visible effect unresolved | Same computed underline plus browser `auto` outline | Same raw properties; Tab #135; no component/focus token |

The browser outline reads `rgb(0, 95, 204) auto 5px off -2px` on the nav and card; it is not a brand ring. All measured controls were enabled. Disabled, error, loading and validation states were not measured.

The probe compares each control, its pseudo-elements, descendants and their pseudo-elements, plus three ancestor levels. Descendant counts are 3 for each header action, 0 for nav and hero, 9 for the card and 5 for search. It compares styles and DOM attributes, including image/SVG fields; it does not establish pixel equality or cover canvas/video changes, closed shadow roots or cross-origin iframe contents.

## Do's and Don'ts

Use red for the measured account actions, blue for service links at rest, and the observed neutral surfaces. Preserve the 4px header corners, 5px product-link corners and 100px hero radius in their respective contexts. Keep the measured content typography separate from the unresolved header family.

Avoid applying one action's hover red to every action: header and hero fills differ. Do not turn the browser's blue `auto` outline into a bank colour token. No substitute font is chosen.

## Voice & Tone

The captured labels use short task names such as account opening and login, then explicit guidance such as “利用開始までの流れ” (the flow until starting use). The official anniversary writing thanks customers and describes making finance familiar and convenient. These are observed examples, not a published tone-of-voice specification. [Anniversary writing](https://www.rakuten-bank.co.jp/corp/25th_anniversary/).

## Agent Prompt Guide

“Build a Rakuten Bank public-homepage style action row: a 44px-high account-opening link with 4px corners, red `#bf0000` fill and white text; its white login companion has red text and a 1px red border. Apply the separate hover, pressed and focus values from §14. Preserve the documented type metrics and leave the header family unresolved.”

“For the measured content hero action, use loaded Noto Sans JP 16px/700, padding 8px 24px, a 100px radius and a 37.2px measured height. Use its own bright hover red and darker pressed red.”
