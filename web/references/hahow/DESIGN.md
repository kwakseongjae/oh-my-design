---
name: Hahow
colors:
  primary: '#00ccb4'
  canvas: '#ffffff'
  soft-surface: '#f5f7f9'
  foreground: '#595959'
  emphasis: '#262626'
  muted: '#8c8c8c'
  primary-tint: '#dcf9f3'
  badge-ink: '#05ada2'
  chip: '#eff2f6'
  promo-orange: '#fa8c16'
  coral: '#f65f55'
  link-hover: '#078886'
typography:
  action:
    fontSize: 16px
    fontWeight: 600
    use: 42px CTA and tooltip action; measured line height 26px; font family remains declared-only
  card-base:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Inherited course-card anchor metrics; not a paragraph measurement
  chip:
    fontSize: 14px
    fontWeight: 400
    use: Category link; measured line height 22px
  link:
    fontSize: 14px
    fontWeight: 400
    use: Section navigation link and search input; measured line height 22px
rounded:
  none: 0px
  sm: 8px
  md: 8px
  lg: 20px
  promo: 16px
components:
  more-link:
    type: button
    textColor: '#595959'
    rounded: 0px
    height: 22px
    padding: 0px
    typography: 14px / 400
    hover: 'fg #078886'
    pressed: 'fg #00ccb4'
    focus: fg rgba(0, 0, 0, 0.65)
    use: 'Section navigation link 更多 to the latest crowdfunding list; transparent on white #ffffff. The label and arrow share these changes. Pointer states measured with fixed overlays hidden.'
  course-card:
    type: card
    textColor: rgba(0, 0, 0, 0.65)
    rounded: 0px
    height: 383.2px
    padding: 0px
    typography: 16px / 400
    hover: descendant gradient opacity 0.25; bookmark transform none, from matrix(1, 0, 0, 1, 0, 32)
    pressed: descendant gradient opacity 0.25; bookmark transform none, from matrix(1, 0, 0, 1, 0, 32)
    use: 'Link to /courses/6a56ec0752c6b9bac40cd9b1 on white #ffffff. Root stays transparent; title is #262626, sale badge is #fa8c16 with #ffffff ink. Pointer states measured with fixed overlays hidden; media was a lazy-load placeholder.'
  category-chip:
    type: button
    backgroundColor: '#eff2f6'
    textColor: '#595959'
    rounded: 20px
    height: 32px
    padding: 4px 15px
    typography: 14px / 400
    focus: fg rgba(0, 0, 0, 0.65)
    use: 'Category link #投資理財; its separate hash stays #00ccb4. Keyboard focus and restoration after blur measured in computed styles; control remained outside the captured viewport. Hover and pressed remain unmeasured.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of Hahow

## Overview

### Visual Theme & Atmosphere

Hahow 好學校 is a Taiwanese online-course marketplace founded in 2015. Its own company profile describes knowledge and skill sharing through crowdfunded courses, allowing people with a skill to earn through teaching. The name comes from the Taiwanese pronunciation of “school”. The current About page connects exploration and shared learning with creating more choices and becoming the person one wants to be. [Company profile](https://hahow.in/@officialhahowcourse), [About Hahow](https://hahow.in/about/hahow).

The 2023 rebrand with IF OFFICE replaced the graduation-cap symbol with a door. Turquoise, blue, arches and directional forms broadened the learning identity beyond formal schooling. [Hahow brand team](https://medium.com/hahow/hahow-全新視覺亮相-if-office-團隊操刀設計-設計概念回應品牌多元價值-d570ccaf591).

On the measured homepage, white surfaces, turquoise #00ccb4, gray #595959 reading text and rounded actions support a course-led layout. The orange #fa8c16 sale labels and large, colourful campaign artwork give promotions considerably more visual weight than the smaller navigation controls. The captured edition is the Traditional-Chinese homepage (`hahow.in/`, HTML `lang="zh-TW"`), without a regional redirect.

#### Primary tasks

- Browse or search courses and follow a course card to its detail page.
- Compare crowdfunding status, creator, price and sale labels within course rows.
- Begin offering a course through “我要開課”.
- Return to already purchased learning: the official profile explicitly says a withdrawn course remains viewable by its original purchasers after login. No member session was measured.

### Brand Narrative

The 2023 design story links the door symbol with learning beyond established academic imagery. Its illustration update uses lines and colour blocks, human characters and a frog mascot acting as a companion or teaching assistant. [Brand-team writing](https://medium.com/hahow/hahow-全新視覺亮相-if-office-團隊操刀設計-設計概念回應品牌多元價值-d570ccaf591).

The current About page continues to emphasise multiple possibilities, respect for individuality and learning as a route toward a self-defined ideal life. In the product, that range is expressed through course imagery and topic variety; the measured interface supplies a neutral base and small turquoise signals around them. [About Hahow](https://hahow.in/about/hahow).

### Principles

- **Exploration and shared learning:** the company's About page presents them as ways to create more choices.
- **Respect for individuality:** the same page explicitly connects diverse learning with self-defined value.
- **Observed hierarchy:** use white and gray for course comparison, turquoise for specific actions and progress, and orange for sale labels.
- **Element-specific geometry:** retain the measured 8px actions, 20px category links and square anchor roots.

The first two are company statements; the latter two are implementation guidance derived from the measured homepage.

### Personas

The documented brand persona is “有點特別的普通人”, expressing accessible learning and individuality. The homepage addresses learners and prospective instructors. No separate UX persona profiles were verified. [Brand-team writing](https://medium.com/hahow/hahow-全新視覺亮相-if-office-團隊操刀設計-設計概念回應品牌多元價值-d570ccaf591).

## Colors

The live palette below combines computed control styles, the rendered-colour census and component-local CSS declarations. The homepage does not expose a first-party global colour-variable scale at `:root`.

| Role | Measured value | Concrete evidence |
|---|---|---|
| Primary turquoise | #00ccb4 | Filled “我要開課” action, crowdfunding text/progress and the category chip's hash |
| Canvas | #ffffff | White homepage surface; measured backing of the card and “更多” link |
| Soft surface | #f5f7f9 | Background of the creator CTA's enclosing panel; 15 census backgrounds |
| Foreground | #595959 | Most frequent paragraph ink, 26 paragraphs; “更多” and category-link labels |
| Emphasis | #262626 | Course title and search-input ink; local `--emphasize-color` |
| Muted ink | #8c8c8c | Course creator and original-price text; 193 census text occurrences |
| Pale turquoise | #dcf9f3 | Course-type badge fill and outline-action border |
| Course-type badge ink | #05ada2 | “課程” badge inside the measured card |
| Category fill | #eff2f6 | “#投資理財” link at rest |
| Promotional orange | #fa8c16 | “限時優惠” badge with #ffffff text |
| Coral accent | #f65f55 | Ten text-colour occurrences in the census; no specific semantic role assigned |
| Link hover | #078886 | Settled hover colour of the latest-crowdfunding “更多” link |

Alpha values remain literal: the card anchor inherits `rgba(0, 0, 0, 0.65)`; the media placeholder and progress track use `rgba(0, 0, 0, 0.06)`. A local border declaration is `#00000026`, and local countdown surfaces declare `#ffffff14`; these are alpha colours, not opaque neutral tokens. The local countdown highlight is declared as #f59300.

### Confirmed historical theme, with a separate product scope

The original reference's Primary 100 #a3ffe8, Primary 400 #23d9bd, Primary 500 #00ccb4, Primary 800 #006166, Primary 900 #00444d and Secondary 500 #ffb940 all remain in the published `src/theme.js`. The repository now labels itself deprecated and describes its scope as **Hahow for Business**. Preserve these as historical distributed theme values; they do not establish current consumer-site hover, pressed or fill roles. [Theme source](https://raw.githubusercontent.com/hahow/hahow-design/master/src/theme.js), [repository](https://github.com/hahow/hahow-design).

## Typography

The evidence classes are distinct:

- **Official product use:** no opened company source names a product text typeface.
- **Live-loaded:** the census reports only `FontAwesome normal normal`. This is an icon face, linked through the Font Awesome CDN stylesheet, and supplies no text-font specimen.
- **Official distributed text-font assets:** none verified.
- **Declared-only:** body, h1 and button declarations are `"PingFang TC", 微軟正黑體, sans-serif`. Individual measured controls compute to `PingFang TC`. Neither named text face appears in the census's loaded-face list; no specimen or typography-family token is published.
- **Unresolved:** the actual rendered text face, the former monospace assignment and a global heading/paragraph scale.

Substitute: none chosen.

Keep the verified metrics even though the text face remains unresolved. The filled CTA and outline tooltip action are 16px/600 with 26px line height. The course-card anchor inherits 16px/400 with 24px line height. The category link, “更多” link and search input are 14px/400 with 22px line height. These identify the measured elements; the anchor's inherited metrics do not prove the size or weight of every child title or price.

The card's title ink is #262626; creator and original-price text use #8c8c8c; current price uses #595959. The sale badge uses white and the course-type badge uses #05ada2 on #dcf9f3.

## Layout

At 1440×1000, the homepage has a fixed 60px navigation header below a 45px promotional bar. The bar was closed before state measurement. A large campaign carousel precedes the course rows. The latest-crowdfunding row starts with three 360px-wide cards visible across the main area; the surveyed x positions are 143, 533 and 923px. Other surveyed course rows use 267px-wide anchors. These are desktop observations, not responsive breakpoints.

Component-local declarations include `--max-content-width: 1140px`, `--width: 280px`, `--gap: 9px`, `--padding-top: 12px` and `--shadow-space: 36px`. They belong to different selectors and do not form a global spacing scale. Keep padding with its component: `1px 4px` on the two course actions and `4px 15px` on category links. The navigation “探索” button separately uses `8px 4px 8px 12px` padding.

Use the measured rounding by element: 8px action buttons, 20px category links, 16px large promotional tiles and square card-link/input roots. Rounded card media is visible in the screenshot, but its exact inner radius was not extracted.

### Responsive Behavior

Not measured: one 1440×1000 desktop viewport; no mobile layout or breakpoint claims are verified.

## Elevation & Depth

The measured card anchor, navigation link, chip and two action buttons all have `box-shadow: none`. The hidden course tooltip's white ancestor computes to `filter: drop-shadow(rgba(0, 0, 0, 0.04) 0px 0px 8px) drop-shadow(rgba(0, 0, 0, 0.12) 0px 6px 20px)`. This is tooltip elevation, not the visible course card's rest shadow.

The card hover creates depth through a lower-edge gradient at opacity 0.25 and a revealed bookmark. Preserve that layered treatment when reproducing this measured interaction.

## Motion & Easing

The measured action transition is `all 0.3s ease-in 0s`. The “更多” link and card anchor declare `color 0.3s ease 0s`; the search input declares `all 0s ease 0s`. The category link's raw transition string is `color, background-color, border-color 0.3s, 0.3s, 0.3s ease-in, ease-in, ease-in 0s, 0s, 0s`.

These are computed declarations, not a global motion scale. Card hover's measured result is the gradient opacity and bookmark translation described above; no independent descendant easing curve was extracted.

---

**Verified:** 2026-11-03. Live evidence: homepage survey and two state captures; supporting company, legal and historical theme sources are linked above. Exact controls, raw transitions, source quotes and changes since the prior reference are in `verification.md`.

## Components

### Filled creator action — “我要開課”

A 232×42px button nested inside a link, with #00ccb4 background, #ffffff text, 8px radius, `1px 4px` padding, 16px/600 type and 26px line height. Its border is `2px solid rgba(0, 0, 0, 0)`, and its shadow is `none`. Its enclosing creator panel is #f5f7f9. This is a measured rest style; hover and pressed were not reached. Keyboard focus adds only the browser's `auto` outline, so this action has no machine component entry.

### Outline tooltip action — “瞭解課程內容”

The prior outline geometry is confirmed: 232×42px, transparent over white, #00ccb4 ink, `2px solid #dcf9f3` border, 8px radius, `1px 4px` padding and 16px/600 type. The measured instance belongs to a course tooltip whose ancestor opacity is `0`; the action has `pointer-events:none`. Its metrics describe that hidden instance, not a visible primary action. No interactive component entry is published from its browser-only focus ring.

### Section navigation link — “更多”

The link to `/group?category=COURSE&filter=INCUBATING&sort=PUBLISHED_AT` is 42×22px, radius 0, padding 0, 14px/400 with 22px line height. It is transparent over #ffffff, with #595959 text and arrow, no border and no shadow. Hover changes the label and arrow to #078886; press changes them to #00ccb4. Keyboard focus changes them to `rgba(0, 0, 0, 0.65)` and restores the original colour after blur. Pointer measurements used hidden fixed overlays.

### Course-card link

The first crowdfunding card, `/courses/6a56ec0752c6b9bac40cd9b1`, has a 360×383.2px transparent anchor, radius 0, padding 0 and no root border or shadow. Its root ink is `rgba(0, 0, 0, 0.65)` on white; the visible title is #262626. A #fa8c16 sale badge carries white text, while a #dcf9f3 course-type badge carries #05ada2 ink.

Hover leaves the anchor's own fill and shadow unchanged. Instead, an empty gradient layer moves from opacity `0` to `0.25`, and the bookmark layer moves from `matrix(1, 0, 0, 1, 0, 32)` to `none`. The gradient is `linear-gradient(rgba(0, 0, 0, 0) calc(100% - 56px), rgb(0, 0, 0) 100%)`. Press retains these two changes. Keyboard focus produced no style change within the compared scope. The captured media remained a lazy-load placeholder; pointer measurements used hidden fixed overlays.

### Category-link chip — “#投資理財”

The chip is a link, 100.4×32px, with #eff2f6 fill, #595959 text, 20px radius, `4px 15px` padding, a `1px solid rgba(0, 0, 0, 0)` border, no shadow and 14px/400 type with 22px line height. Its separate hash is #00ccb4. Keyboard focus changes the label to `rgba(0, 0, 0, 0.65)` while preserving the hash colour, and blur restores the label. This was a computed focus measurement outside the captured viewport; hover and pressed remain unmeasured.

### Search input

The actual input is 575×22px with radius 0, padding 0, transparent fill, #262626 text, no border or shadow and 14px/400 type. Its white enclosing wrapper has a `1px solid rgba(0, 0, 0, 0.06)` border. Hover, press and keyboard focus changed none of the compared styles. Search focus did reveal a suggestion panel and fixed backdrop outside the input comparison; this is a behavioural observation, not “search does nothing on focus”. It has no component token entry.

### Published component roster

The deprecated Business library still contains exactly four directories under `src/components/`: **Button, Rate, RatingModal, Spinner**. These are distributed library components, not an inventory of consumer-site instances. The measured live entries above are identified independently by label, href and DOM path. [Directory listing](https://api.github.com/repos/hahow/hahow-design/contents/src/components).

### States

| Control | Rest | Hover | Pressed | Keyboard focus |
|---|---|---|---|---|
| Filled creator action | #00ccb4 / #ffffff | UNMEASURED: outside viewport | UNMEASURED: outside viewport | Browser `auto` outline only |
| Outline tooltip action | Transparent / #00ccb4; #dcf9f3 border | UNMEASURED: `pointer-events:none` | UNMEASURED: `pointer-events:none` | Browser `auto` outline only; hidden ancestor |
| 更多 link | Transparent / #595959 on white | Text and arrow #078886 | Text and arrow #00ccb4 | Text and arrow `rgba(0, 0, 0, 0.65)`; restored after blur |
| Course-card link | Transparent; inherited `rgba(0, 0, 0, 0.65)`; title #262626 | Gradient opacity 0→0.25; bookmark transform to `none` | Same two descendant changes | No change within the compared scope |
| #投資理財 link | #eff2f6 / #595959; hash #00ccb4 | UNMEASURED: outside viewport | UNMEASURED: outside viewport | Label `rgba(0, 0, 0, 0.65)`; hash unchanged; restored after blur |
| Search input | Transparent / #262626 | No change within scope | No change within scope | No change within scope; suggestion layer opens outside it |

The comparison includes each control and its pseudo-elements, descendants and their pseudo-elements, plus three ancestor levels. The card includes 29 descendants, three empty layers, one SVG and two paths. The link includes three descendants, one SVG and one path; search has no descendants. Sibling layers and pixel-only effects are outside this scope. The recovered link/card pointer states required hiding fixed overlays; lower-page pointer states remain unmeasured after the second call.

## Do's and Don'ts

### Do

- Use turquoise #00ccb4 for the observed filled action, progress indicator and category hash.
- Separate white canvas, pale creator panels and #eff2f6 category fills.
- Keep the card's text hierarchy: #262626 title, #595959 current price and #8c8c8c creator/original price.
- Use the measured orange-and-white sale badge.
- Give card hover its gradient layer and bookmark movement.

### Don't

- Treat the historical Business theme scale as measured consumer-site state colours.
- Apply 8px rounding to every wrapper; the measured card-link root is square.
- Turn the browser's `auto` outline into a Hahow focus-ring token.
- Render a declared-only text face or an invented substitute as a verified brand specimen.

## Voice & Tone

Hahow's brand team specifies communication that is firm and clear, humorous and humble, optimistic and encouraging. [Brand-team writing](https://medium.com/hahow/hahow-全新視覺亮相-if-office-團隊操刀設計-設計概念回應品牌多元價值-d570ccaf591).

The measured controls use direct verbs: “我要開課” and “瞭解課程內容”. The captured promotion uses discount figures, a deadline and emoji. Match the plain action labels in navigation and reserve the observed promotional energy for campaigns; the live surface does not support a blanket claim that all selling is gentle.

## Agent Prompt Guide

“Build a Traditional-Chinese course-browsing surface with a white canvas, #f5f7f9 creator panel, #00ccb4 filled creator action and #595959 reading text. Give the 42px action an 8px radius and 16px/600 metrics. Use 32px category links with a 20px radius, #eff2f6 fill, #595959 labels and a turquoise hash. Keep the course-card anchor transparent and square; distinguish #262626 titles from #8c8c8c creator labels. Add #fa8c16 sale badges with white text. On card hover, raise the gradient-layer opacity to 0.25 and clear the bookmark's 32px vertical translation. On the measured 更多 link, use #078886 on hover, #00ccb4 on press and rgba(0, 0, 0, 0.65) on keyboard focus. Use the measured type metrics; the text face is unresolved. Substitute: none chosen.”
