---
name: LikeLion
colors:
  primary: '#ff6000'
  foreground: '#222222'
  muted: '#a3a3a3'
  muted-secondary: '#737373'
  hairline: '#e5e5e5'
  promo: '#fcf4ee'
  nav-border: '#d4d4d4'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Observed home body copy; the computed Pretendard Variable face is unresolved, so no UI-family token is assigned.
  section-heading:
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.5
    use: Observed home course-section heading.
  search:
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.2
    use: Observed home course-search input (2026-07-13; the input was absent on 2026-09-29).
rounded:
  promo: 16px
components:
  promo-tile:
    type: button
    backgroundColor: '#fcf4ee'
    textColor: '#222222'
    rounded: 16px
    padding: 40px
    typography: 16px / 400 / unresolved computed stack
    hover: no change among the compared properties (measured 2026-09-29)
    pressed: no change among the compared properties (measured 2026-09-29)
    focus: outline-style none on the control; no visible focus indication among the compared properties (measured 2026-09-29)
    states: default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on the BUSINESS tile (real :hover, :active, and Tab to :focus-visible); transition 0s
    use: home::[data-omd-capture="13"] clickable warm promotional tile; 310px rendered height.
    height: 310px
  account-pill:
    type: button
    backgroundColor: transparent
    textColor: '#222222'
    border: '1px solid #d4d4d4'
    rounded: 9999px
    padding: 10px 16px
    typography: 14px / 600 (label span; the button's own font is 16px / 400)
    hover: no change among the compared properties (measured 2026-09-29)
    pressed: no change among the compared properties (measured 2026-09-29)
    focus: outline-style none on the control; no visible focus indication among the compared properties (measured 2026-09-29)
    states: default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 (the mouse release was swallowed, so no login flow opened)
    use: home::[data-omd-capture="6"] 로그인/회원가입 control; 43px rendered height; low-confidence collector classification.
  course-search:
    type: input
    textColor: '#ff6000'
    typography: 20px / 600 / unresolved computed stack
    pressed: 'border-color #2563eb (border-width 0, nothing drawn; 2026-07-13 pseudo-state sample)'
    focus: 'border-color #2563eb (border-width 0, nothing drawn; 2026-07-13 pseudo-state sample)'
    states: default plus focus and pressed pseudo-state samples captured 2026-07-13 only; the input was absent from https://likelion.net/ and /catalog on 2026-09-29, so nothing was re-measured
    use: home::[data-omd-capture="7"] course-search input observed 2026-07-13; no complete interaction or result state was captured.
  nav-link:
    type: tab
    backgroundColor: transparent
    textColor: '#262626'
    rounded: 0px
    padding: 20px 16px
    height: 63px
    typography: '15px / 600 (label span; the anchor''s own computed style is #222222 16px / 400)'
    hover: no change among the compared properties (measured 2026-09-29)
    pressed: no change among the compared properties (measured 2026-09-29)
    focus: outline-style none on the control; no visible focus indication among the compared properties (measured 2026-09-29)
    states: default captured 2026-07-13 (전체강의; four more header links at padding 20px 12px); hover, pressed and keyboard focus measured 2026-09-29 on 전체강의
    use: Header course-navigation link (전체강의, 부트캠프국비지원, AI교육, 기업교육, AX 해커톤)
  section-detail-link:
    type: tab
    backgroundColor: transparent
    textColor: '#a3a3a3'
    padding: 0px
    height: 24px
    typography: '16px / 500 (label span; the anchor''s own computed style is #222222 16px / 400)'
    hover: no change among the compared properties (measured 2026-09-29)
    pressed: no change among the compared properties (measured 2026-09-29)
    focus: outline-style none on the control; no visible focus indication among the compared properties (measured 2026-09-29)
    states: default captured 2026-07-13 (two links); hover, pressed and keyboard focus measured 2026-09-29 on the first
    use: Section-heading 자세히 보기 link (to /catalog and the bootcamp site)
  tile-detail-button:
    type: button
    backgroundColor: transparent
    textColor: '#a3a3a3'
    padding: 0px
    height: 21px
    typography: 16px / 600
    states: default captured 2026-07-13 and present in the 2026-09-29 survey; nested inside each promo-tile anchor; no pointer-state sample
    use: 자세히 보기 label button inside each promo tile
  footer-link:
    type: tab
    backgroundColor: transparent
    textColor: '#222222'
    height: 16px
    typography: 14px / 600 / 21px
    states: default captured 2026-07-13 (11 links); the 2026-09-29 survey reads the same style; no pointer-state sample
    use: Footer column link (전체 강의, 국비지원 부트캠프, AI교육, 기업교육, AX 해커톤 … in the 2026-09-29 survey)
  social-icon-link:
    type: button
    backgroundColor: transparent
    size: 24px x 24px
    states: default captured 2026-07-13 (five icon links); no pointer-state sample
    use: Footer social icon link (Instagram, YouTube, a Kakao channel, Brunch and Facebook in the 2026-09-29 survey); icon colour not read
  filter-pill:
    type: tab
    backgroundColor: transparent
    textColor: '#222222'
    border: '1px #e5e5e5'
    rounded: 9999px
    padding: 8px 12px
    height: 42px
    typography: 16px / 400
    selected: 'bg #1e1e1e fg #ffffff, no border (40px tall)'
    states: default and selected captured 2026-07-13 (one selected and four unselected list items); no pointer-state sample; the 2026-09-29 survey did not list them
    use: Home course-list filter pill (li)
  section-tab:
    type: tab
    backgroundColor: rgba(255,243,235,0.1)
    textColor: '#222222'
    rounded: 12px
    padding: 12px 16px
    height: 48px
    typography: 16px / 400
    states: default captured 2026-07-13 (three list items, 257px wide); no pointer-state sample; the 2026-09-29 survey did not list them
    use: Home three-way tab row (li); its labels were not captured
  category-button:
    type: button
    backgroundColor: transparent
    textColor: '#737373'
    rounded: 0px
    padding: 0px
    size: 96px x 96px
    typography: '16px / 400 (label; the button''s own colour is #222222)'
    hover: no change among the compared properties (measured 2026-09-29)
    pressed: no change among the compared properties (measured 2026-09-29)
    focus: outline-style none on the control; no visible focus indication among the compared properties (measured 2026-09-29)
    states: measured 2026-09-29 only, on /catalog (a surface added to this reference that day); an image sits above the label
    use: Course-catalog category button (프로그래밍 …)
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of LikeLion

## Overview

### Visual Theme & Atmosphere

LikeLion (멋쟁이사자처럼) is a Korean programming-education brand whose public home surface currently groups course discovery, K-Digital Training bootcamps, AI education, and business education. Its official history page traces the brand to 2013 and the “HACK YOUR LIFE!” idea of turning an individual’s idea into something they can make; its current business page frames learning around practical problems, mentoring, and shared experience. The supplied desktop homepage translates that welcoming, action-oriented positioning into a restrained field of `#222222` copy and `#e5e5e5` hairlines, with `#ff6000` concentrated in the search/attention treatment and `#fcf4ee` warming a large promotional tile. The public design-system URL is retained as official documentation, but this collector run reached its Storybook documentation chrome rather than component stories; it is not used to fill in a generic component library. On 2026-09-29 the homepage no longer carried the course-search input (§4).

The reference deliberately keeps the two domains distinct. Homepage measurements describe a public course-marketing/catalog surface. Documentation chrome establishes only that the public documentation route exists; its controls, colors, and loaded font observation do not authorize product or marketing component tokens.

**Key Characteristics:**

- Orange `#ff6000` is an observed attention/search color on the captured homepage, not a universal semantic palette.
- Homepage foreground is `#222222`, with `#a3a3a3` and `#737373` as observed lower-emphasis text.
- An observed warm `#fcf4ee` promo tile supplies the strongest surfaced color block.
- The verified geometry is local: a 16px promo tile, a 9999px navigation-account pill, 9999px filter pills and a 12px-radius tab row.
- The observed marketing computed face is unresolved; a loaded Pretendard observation on documentation chrome is not promoted to a homepage UI-family token.

### Primary tasks

- Browse courses, bootcamps, and AI education in one place
- Search the homepage for a course to take (the July 2026 search input; absent on 2026-09-29)
- Weigh up a business education program for a team

### Brand Narrative

LikeLion’s official history page describes an online/offline programming-education brand that began in 2013 around the value of realizing one’s own idea. It presents “HACK YOUR LIFE!” as the through-line, then describes a move into a commercial corporation and additional education initiatives. The current public home surface shows the present offer as a mix of courses, bootcamps, AI education, and business education; the business surface describes AX learning as problem-led, mentored, and collaborative. [Official history](https://k-digital.likelion.net/364c521d-31d4-425e-a281-7d056ce3f8a6) · [Business education](https://likelion.net/b2b)

The orange-and-warm-neutral homepage is a separately observed public course-marketing expression of that educational role. It should not be read as proof of a single interface across the learner product, business program, or documentation site.

### Principles

1. **Make ideas buildable.** The official history frames programming as a means to realize an individual idea. *UI implication:* describe a learning path in concrete terms; do not manufacture product features or outcomes.
2. **Start from practical problems.** The business surface says its AI learning begins with members’ work problems. *UI implication:* lead educational copy with the task or problem being addressed.
3. **Learn through repetition and sharing.** The published process names repeated problem solving and experience sharing. *UI implication:* where learning progress is evidenced, make the next activity and shared context legible.
4. **Keep domains honest.** Homepage, business education, and documentation serve different contexts. *UI implication:* do not carry a token or component from one domain into another without direct evidence.

### Personas

The first-party sources in this pass establish learner and organisation-facing education contexts, but do not supply enough persona research to support invented demographic archetypes.

- **Individual learners:** public course and bootcamp visitors. Task, constraints, and needs are not established without user-provided research.
- **Organisation learning teams:** business/AX education decision-makers and participants. Task, constraints, and needs are not established without user-provided research.
- **Documentation readers:** public Storybook/documentation visitors. Task and component-story evidence are not established here.

## Colors

### Observed homepage roles

- **Attention / search** (`#ff6000`): observed as the course-search input foreground at `home::[data-omd-capture="7"]` (2026-07-13; the input was absent on 2026-09-29).
- **Primary foreground** (`#222222`): repeated homepage text color, including the warm promo tile.
- **Muted text** (`#a3a3a3`): repeated lower-emphasis homepage text.
- **Secondary muted text** (`#737373`): observed on the homepage search-input border sample and other low-emphasis text; on 2026-09-29 it is also the `/catalog` category-button label.
- **Hairline** (`#e5e5e5`): repeated homepage border color in the collector output.
- **Warm promo surface** (`#fcf4ee`): `home::[data-omd-capture="13"]` background.
- **Account-pill border** (`#d4d4d4`): observed on the navigation account control.

### Boundary

The supplied homepage evidence does not establish a filled orange CTA, orange hover color, semantic success/error palette, a neutral scale, or a general canvas token. Two component-level values are not palette roles: the selected filter pill's `#1e1e1e` fill (2026-07-13) and the header link label `#262626` (2026-09-29). Documentation-chrome values such as `#6b7583`, `#4e5967`, `#f3f4f6`, and `#e5e7ea` are not marketed as LikeLion product tokens here.

## Typography

### Evidence classes

- **Live product/marketing computed use — unresolved:** the homepage computes `Pretendard Variable` on 193 visible captured elements. The collector found no matching loaded FontFaceSet record or source URL for that exact family, so it is not a `tokens.typography.family` token.
- **Documentation-chrome computed use — loaded:** the Storybook documentation route computes `pretendard` / `Pretendard` on 34 visible elements; it has loaded FontFaceSet corroboration and 22 source URLs, including LikeLion-hosted static Pretendard files and the Pretendard CDN. This verifies the documentation-chrome observation only, not course-product use.
- **Declared-only:** Gotham, HeirofLight, Noto Sans Mono, Nunito Sans, and slick have declared font-face assets with zero visible captured use. They are not family tokens or specimens.
- **Official font and licence context:** the upstream Pretendard project publishes its files under SIL Open Font License 1.1. That licence describes Pretendard’s upstream distribution; it does not establish that the declared Gotham, HeirofLight, or Noto Sans Mono files are reusable assets. [Pretendard licence](https://github.com/orioncactus/pretendard/blob/main/LICENSE)
- **System fallback:** the homepage’s fallback list is a fallback list, not evidence for a substitute branded family.

### Measured homepage hierarchy

| Role | Size | Weight | Line height | Provenance |
|---|---:|---:|---:|---|
| Default body | 16px | 400 | 24px | `home::body` |
| Course-section heading | 32px | 700 | 48px | Homepage `h3` samples |
| Course-search input (2026-07-13; absent 2026-09-29) | 20px | 600 | 24px | `home::[data-omd-capture="7"]` |
| Course-card title | 20px | 600 | 30px | Captured homepage card text |

Do not substitute a system font and call it Pretendard. The exact marketing computed family remains unresolved until matching FontFaceSet/source evidence is captured on that surface.

## Layout

The supplied home surface is a 1440×900 desktop capture. Its reliable layout observations are local: the course-search input rendered 731px wide in the 2026-07-13 capture (it was absent on 2026-09-29), the promo tile rendered 310px high with 40px padding, and the account pill rendered 43px high. No public mobile viewport, course-grid rule, carousel behavior, sticky header behavior, or breakpoint was captured, so none is specified.

### Responsive Behavior

No mobile viewport or responsive transition was captured. Touch-target, grid, menu-collapse, carousel-scroll, and breakpoint rules require a public responsive observation before they can be specified.

## Elevation & Depth

Representative homepage and documentation-chrome samples report `box-shadow: none`. The observed promo tile is distinguished by `#fcf4ee`, type, and a 16px radius rather than an elevation value. No global shadow scale or overlay treatment is established.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

No motion, transition, or user-flow state was supplied for the homepage. Selector-backed public motion evidence is required before any is specified. The five controls probed on 2026-09-29 compute `transition: all 0s`.

## Components

Rest values below come from the supplied `home` desktop capture of `https://likelion.net/` (2026-07-13) unless marked. Hover, pressed and keyboard focus come from a live probe on 2026-09-29 (real `:hover`, `:active`, and Tab to `:focus-visible`) on the homepage and on `/catalog`, which is added as its own surface for the one control measured there. On the five probed controls, hover and press change nothing among the compared properties, and keyboard focus removes the browser ring (`outline-style: none`) with no other visible indication among the compared properties; these are dated measured absences, not tokens. The embedded third-party chat widget is excluded. Documentation-chrome controls are excluded, and the course-search focus/pressed rows are July pseudo-state samples, not a product-state contract.

### Promotional tile

**Warm promotional tile — observed default**
- Background: `#fcf4ee`
- Text: `#222222`
- Radius: `16px`
- Padding: `40px`
- Font: `16px / 400 / unresolved computed stack`
- Hover and pressed: no change among the compared properties (measured 2026-09-29)
- Focus: `outline-style: none` on the control
- No visible focus indication among the compared properties (measured 2026-09-29)
- Use: `home::[data-omd-capture="13"]`; clickable warm promotional tile, 310px rendered height; probed on the BUSINESS tile (`/b2b`)

### Navigation account control

**Login / sign-up pill — observed default**
- Text: `#222222`
- Border: `1px solid #d4d4d4`
- Radius: `9999px`
- Padding: `10px 16px`
- Label: `14px / 600 / unresolved computed stack` (the visible span, measured 2026-09-29); the button's own computed font is 16px / 400
- Hover and pressed: no change among the compared properties (measured 2026-09-29)
- Focus: `outline-style: none` on the control
- No visible focus indication among the compared properties (measured 2026-09-29)
- Use: `home::[data-omd-capture="6"]`; 로그인/회원가입 control, 43px rendered height. The collector’s component classification is low confidence, so no further variant is inferred.

### Course search

**Course-search input — July 2026 pseudo-state samples; absent on 2026-09-29**
- Text: `#ff6000`
- Font: `20px / 600 / unresolved computed stack`
- Focus: border-color `#2563eb` in the captured pseudo-state sample while border width remains `0px`, so nothing is drawn
- Pressed: the same border-color sample
- Use: `home::[data-omd-capture="7"]`; course-search input, 731px wide in the 2026-07-13 capture. No result list, validation, disabled, or complete focus-flow state is specified.
- On 2026-09-29 the input was not in the DOM of `https://likelion.net/` or `/catalog` (no input, textarea, select or search-role element in either), so these values are a July observation and were not re-measured.

### Header navigation link

**전체강의 and the other header links — measured 2026-09-29**
- Label: `#262626`, 15px / 600 (the visible span); the anchor's own computed style is `#222222` 16px / 400
- Padding: `20px 16px` (the four other header links use `20px 12px`); 63px tall
- Hover and pressed: no change among the compared properties (measured 2026-09-29)
- Focus: `outline-style: none` on the control
- No visible focus indication among the compared properties (measured 2026-09-29)
- Use: `home::[data-omd-capture="1"]`; header links 전체강의, 부트캠프국비지원, AI교육, 기업교육, AX 해커톤

### Section detail link
- Label: `#a3a3a3`, 16px / 500 (the visible span); the anchor's own computed style is `#222222` 16px / 400
- 24px tall, no padding
- Hover and pressed: no change among the compared properties (measured 2026-09-29)
- Focus: `outline-style: none` on the control
- No visible focus indication among the compared properties (measured 2026-09-29)
- Use: `home::[data-omd-capture="10"]` and `[12]`; 자세히 보기 beside a section heading

### Tile detail button
- Text: `#a3a3a3`, 16px / 600, 21px tall, no fill
- Nested inside each promo-tile anchor
- No pointer-state sample
- Use: `home::[data-omd-capture="14"]` and `[16]`; 자세히 보기, present again in the 2026-09-29 survey

### Filter pill
- Unselected: transparent, text `#222222`, 1px `#e5e5e5` border, 9999px radius, `8px 12px`, 42px tall, 16px / 400
- Selected: `#1e1e1e` fill, text `#ffffff`, no border, 40px tall
- No pointer-state sample; not listed in the 2026-09-29 survey
- Use: a row of five list-item pills on the homepage course list (2026-07-13)

### Tab row
- Fill `rgba(255,243,235,0.1)` (a warm white at 10% alpha), text `#222222`, 12px radius, `12px 16px`, 48px tall, 16px / 400; three items, 257px wide each
- No pointer-state sample; the labels were not captured; not listed in the 2026-09-29 survey
- Use: a three-way tab row on the homepage (2026-07-13)

### Footer link
- Text: `#222222`, 14px / 600 / 21px, 16px tall
- No pointer-state sample
- Use: `home::[data-omd-capture="17"]` and ten more footer column links (전체 강의, 국비지원 부트캠프, AI교육, 기업교육, AX 해커톤 … in the 2026-09-29 survey)

### Footer social icon link
- 24px × 24px, icon only; the icon's colour was not read
- No pointer-state sample
- Use: `home::[data-omd-capture="28"]` to `[32]`; Instagram, YouTube, a Kakao channel, Brunch and Facebook in the 2026-09-29 survey

### Catalog category button (`/catalog`, measured 2026-09-29)
- Label: `#737373`, 16px / 400, under an image; the button's own computed colour is `#222222`
- 96px × 96px, transparent, no radius
- Hover and pressed: no change among the compared properties (measured 2026-09-29)
- Focus: `outline-style: none` on the control
- No visible focus indication among the compared properties (measured 2026-09-29)
- Use: 프로그래밍 and the other category buttons on `https://likelion.net/catalog`, a surface added to this reference on 2026-09-29

The homepage pills and tab row are live-site elements measured on likelion.net, not the design system's published Chip or Tab components. No ActionButton, TextField, tag, toast, dialog, card, or responsive variant is specified: the supplied design-system route is documentation chrome rather than a component-story capture.

---
**Verified:** 2026-07-13 · states re-measured 2026-09-29 (live probe of the homepage and /catalog)
**Tier 1 sources:** https://likelion.net/; https://likelion.net/catalog; https://designsystem.likelion.net/?path=/docs/intro-introduction--docs; https://k-digital.likelion.net/364c521d-31d4-425e-a281-7d056ce3f8a6; https://likelion.net/b2b
**Tier 2 sources:** https://getdesign.md/likelion (attempted; no usable LikeLion record extracted); https://styles.refero.design/?q=likelion (attempted; no usable LikeLion record extracted)
**Conflicts unresolved:** none

### Published component roster (18 published, none measured here)

Likelion's design system is a Storybook, and its own index (`/index.json`, read 2026-09-19 from
`https://designsystem.likelion.net/`) declares **18 components** under its `components-*` ids.
The slash-separated names are Storybook's own hierarchy, kept as published:

Badge, Button/ActionButton, Button/IconButton, Chip, Controls/Checkbox, Controls/RadioButton, Controls/Toggle, DatePicker, Dialog, Pagination, Select/SelectBox, Select/SelectHeader, Select/SelectMenu, Tab, Tag, TextField, Toast, Tooltip

Storybook lists 36 entries under `components-*`; the other 18 are `/Properties` sub-documents,
one per component, and are not separate components.

**Why a sitemap could not have found these.** Every Storybook page is the same URL with a
different query string — `?path=/docs/components-badge--docs` — so the roster lives in the query,
where path-based crawling does not look. The machine-readable answer was `/index.json`, which
Storybook publishes for exactly this purpose.

### What this reference measured

The three stylings in §4 are identified by anonymous selector position
(`home::[data-omd-capture=…]`) on the public homepage `https://likelion.net/` (the bundle's
`home` surface), plus one control on `/catalog`, not on the Storybook site: the Storybook route
is the separate `docs` surface, and only its documentation chrome was captured. None of the 18
above carries a measured value here. (Corrected 2026-09-29; this note previously placed the
§4 captures on the Storybook host.)

### States

No course-product empty, loading, success, disabled, or error state was captured. The only recorded interaction is a form-error sample on documentation chrome, which is not promoted to the course surface.

| Category | Evidence status |
|---|---|
| Empty | Not observed — a public course-surface observation is required |
| Loading | Not observed — a public course-surface observation is required |
| Error | Not observed — a public course-surface observation is required |
| Success | Not observed — a public course-surface observation is required |
| Skeleton | Not observed — a public course-surface observation is required |
| Disabled | Not observed — a public course-surface observation is required |
| Hover | Measured 2026-09-29 on five controls: no change among the compared properties |
| Pressed | Measured 2026-09-29 on five controls: no change among the compared properties |
| Focus | Measured 2026-09-29 on five controls: `outline-style: none`; no visible focus indication among the compared properties |

The 2026-09-29 probe read hover, pressed and keyboard focus on the promo tile, the account pill, the header link, the section detail link and the `/catalog` category button. These are recorded on each component as dated measured absences, not as tokens.

## Do's and Don'ts

### Do

- Keep the observed homepage scope separate from documentation chrome and official narrative sources.
- Use `#ff6000` only for the observed attention/search treatment unless another component has its own selector-backed evidence.
- Preserve the warm promo tile’s `#fcf4ee`, 16px radius, and 40px padding only in its captured homepage context.
- Treat `Pretendard Variable` on the homepage as unresolved until exact loaded-face/source corroboration exists.

### Don't

- Do not turn the public Storybook’s documentation controls into LikeLion product components.
- Do not recreate historical ActionButton, chip, tab, tag, toast, dialog, hover, disabled, or error variants without current selector and state provenance.
- Do not label Gotham, HeirofLight, Noto Sans Mono, Nunito Sans, or slick as a live UI family.
- Do not derive a semantic palette, breakpoint, or motion system from this two-surface desktop bundle.

## Voice & Tone

LikeLion’s official materials are practical, encouraging, and learning-oriented. The history page’s “HACK YOUR LIFE!” framing pairs self-directed making with programming education; the current business page describes learning through repeated problem solving, experience sharing, and a shift from AI as a tool to AI as a collaborator. These are brand and educational-context sources, not homepage microcopy rules.

| Do | Don't |
|---|---|
| State the learner’s practical next step plainly. | Attribute unobserved error, enrollment, or support copy to the product. |
| Connect technical learning to a problem the learner or team can work on. | Convert corporate-training language into a visual token. |
| Keep the distinction between public course, business, and documentation surfaces. | Invent urgency, guarantees, or personal outcomes. |

**Source-grounded samples.**

- “HACK YOUR LIFE!” — official history-page slogan. <!-- verified: k-digital.likelion.net 2026-07-13 -->
- “문제 해결 반복 및 경험 공유” — official business-education process label. <!-- verified: likelion.net/b2b 2026-07-13 -->
- “AI = 동료” — official business-education process label. <!-- verified: likelion.net/b2b 2026-07-13 -->

## Agent Prompt Guide

### Verified prompt boundary

“Recreate only the observed LikeLion desktop homepage elements: `#222222` foreground with `#e5e5e5` hairlines, a warm `#fcf4ee` promotional tile with 16px radius and 40px padding, the outlined login pill, and rounded filter pills (`#1e1e1e` fill when selected). Add the `#ff6000` 20px/600 course-search input only when recreating the July 2026 homepage; it was absent on 2026-09-29. Do not add an orange CTA, Storybook component set, mobile layout, semantic states, or a Pretendard substitution.”

## Governance

### Known Gaps

- **Contrast, `account-pill`.** Text `#222222` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `nav-link`.** Text `#262626` on `#00000000` measures 1.39:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-link`.** Text `#222222` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `filter-pill`.** Text `#222222` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `category-button`.** Text `#737373` on `#00000000` measures 4.43:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
