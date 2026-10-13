---
name: Naver Webtoon
colors:
  primary: '#00dc64'
  surface: '#ffffff'
  foreground: '#000000'
  muted: '#666666'
  tag-surface: '#f6f6f6'
  on-primary: '#ffffff'
typography:
  brand-title:
    fontSize: 24px
    fontWeight: 700
    use: Product header wordmark area
  section-title:
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.05
    use: Product-home section heading
  tab:
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.4
    use: Product content tab
  tag:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 2.14
    use: Product-home tag link
rounded:
  square: 0px
  compact: 4px
components:
  content-tab:
    type: tab
    textColor: '#666666'
    typography: 15px / 500 Pretendard
    selected: 'fg #00dc64'
    states: 'rest (aria-selected=false) #666666 and selected (aria-selected=true) #00dc64 captured on all three routes; the seven tab interactions record fg #00dc64 on each newly selected tab; no state frame. Corrected 2026-09-29: fg previously held the selected #00dc64'
    use: Product content tabs, selectors home::[data-omd-capture=16] and home::[data-omd-capture=17]
  tag-link:
    type: badge
    backgroundColor: '#f6f6f6'
    textColor: '#666666'
    rounded: 4px
    padding: 0px 10px
    typography: 14px / 500 Pretendard
    use: Product-home tag link, selector home::[data-omd-capture=64]
  pagination:
    type: button
    textColor: '#000000'
    typography: 14px / 500 Pretendard
    states: 'ten page buttons captured at rest: the first (capture 133) computes fg #00dc64 and the other nine #000000; no aria-current is recorded, so the green is described, not declared as a selected state. The previous control (capture 132) is disabled and computes #000000; it is not read as a rest value. No state frame. Corrected 2026-09-29: fg previously held the first page''s #00dc64'
    use: Best Challenge page buttons (button.Paginate__page, 28 x 28), selector surface-3::[data-omd-capture=134]; the green first page is surface-3::[data-omd-capture=133]
  header-search:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 0px
    padding: 0px 65px 0px 10px
    size: 268px x 35px
    typography: 14px / 400 / Pretendard
    states: default captured on all three routes; no state frame
    use: Product header search field (input.SearchBar__search_input) at home::[data-omd-capture="4"]; the 35 x 35 search button beside it (capture 5) has no fill
  creator-entry:
    type: button
    backgroundColor: '#00dc64'
    textColor: '#000000'
    rounded: 4px
    padding: 11px 33px
    height: 39px
    typography: 12px / 400 / Pretendard
    states: default captured on all three routes; no state frame
    use: Global navigation creator entry (button.GlobalNavigationBar__button_creators) at home::[data-omd-capture="14"], 151 px wide
  gnb-link:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 0px 18px
    height: 55px
    typography: 16px / 600 / Pretendard
    selected: 'bg #00dc64, fg #ffffff'
    states: 'six links per route; on each captured route exactly one link computes a #00dc64 fill with #ffffff text, and it moves with the route: the first link on /index (capture 8), the second on /webtoon (capture 9), the fourth on /bestChallenge (capture 11). No aria-current is recorded; the selected value rests on that route-by-route agreement. No state frame'
    use: Product global navigation link (a.GlobalNavigationBar__link) at home::[data-omd-capture="9"]; line height 55px, tracking -0.5px
  sub-nav-link:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 0px 5px
    height: 49px
    typography: 15px / 600 / Pretendard
    states: 'twelve links on /webtoon and eleven on /bestChallenge; on both routes the first link (capture 16) computes fg #00dc64 and the rest #000000. No aria-selected or aria-current is recorded, so the green first link is described, not declared as a selected state; no state frame'
    use: Product sub-navigation link (a.SubNavigationBar__link) at surface-2::[data-omd-capture="17"]; line height 49px, tracking -0.5px
  weekday-heading:
    type: card
    backgroundColor: transparent
    textColor: '#000000'
    size: 169px x 45px
    typography: 14.04px / 700 / Pretendard
    states: 'non-interactive; two headings captured on /webtoon: one computes a #00dc64 fill with #ffffff text, the other transparent with #000000; the capture does not record what the green one marks'
    use: Weekday column heading (h3.WeekdayMainView__heading) at surface-2::h3
  tag-link-large:
    type: badge
    backgroundColor: '#f6f6f6'
    textColor: '#666666'
    rounded: 4px
    padding: 0px 10px
    height: 37px
    typography: 16px / 500 / Pretendard
    states: default captured; no state frame
    use: 'The common size of the TagGroup__tag class at home::[data-omd-capture="130"]: 184 of the 191 home tag links compute 16px / 500 / 37px (tracking -0.42px); the 14px / 30px tag-link covers the other seven'
  qr-code-button:
    type: button
    backgroundColor: transparent
    textColor: '#666666'
    border: '1px #ebebeb'
    rounded: 4px
    padding: 0px
    size: 172px x 43px
    typography: 13px / 500 / Pretendard
    states: default captured on home (captures 364-365) and /bestChallenge (captures 210-211); no state frame
    use: Outline QR-code button (button.QrCode__button) at home::[data-omd-capture="364"]; tracking -0.5px
  author-link:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    height: 20px
    typography: 14px / 500 / Pretendard
    states: default captured on all three routes (82 occurrences); no state frame
    use: Author-name link (a.ContentAuthor__author) at home::[data-omd-capture="23"]; line height 20px
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    ui: Pretendard
---

# Design System Inspiration of Naver Webtoon (네이버웹툰)

## Overview

### Visual Theme & Atmosphere

NAVER WEBTOON is WEBTOON Entertainment's Korean webcomic platform. The company describes it as Korea's largest webcomic platform, launched in 2005 to let both emerging and established creators build an audience and earn from webcomics; its BEST CHALLENGE route is the self-publishing path for up-and-coming creators. In the supplied public capture, that creator-and-reader service is expressed with a compact white product shell, black text, a bright green creator entry, and image/content-led browsing rather than a marketing campaign system.

The captured product surfaces share a short, practical visual vocabulary: white `#FFFFFF`, black `#000000`, muted `#666666`, pale tag fills `#F6F6F6`, and green `#00DC64` on a creator entry, selected tabs, selected pagination, and a browse heading. This is a record of the current captured routes—not a claim that every NAVER, WEBTOON Entertainment, mobile, reader, payment, or logged-in surface follows the same contract. NAVER account/service utility chrome appears in the artifact as a separate inherited shell and is not promoted into these product tokens.

### Primary tasks

- Discover a webcomic story to follow as a reader
- Search from the product-home header field
- Self-publish a webcomic through the BEST CHALLENGE route
- Build an audience and earn from your webcomics

### Brand Narrative

WEBTOON Entertainment describes NAVER WEBTOON as Korea's largest webcomic platform. Its official brands page says it launched in 2005 and enables new and established creators to build an audience and make money from webcomics; it distinguishes BEST CHALLENGE as the self-publishing path for emerging creators. The official company site frames the wider organization as a story-oriented entertainment service and a platform where creators and users discover, create, and share stories. These are service and company facts, not proof of a visual or interaction system beyond the captured routes.

### Principles

1. **Creator participation.** Official material says the service gives new and established creators ways to build an audience and make money. *UI implication:* the captured global product navigation includes a green creator entry; no broader creator-flow pattern is inferred.
2. **Discovery, creation, and sharing.** WEBTOON Entertainment describes its platform around those three participant activities. *UI implication:* no unmeasured navigation, recommendation, or sharing pattern is prescribed here.
3. **Emerging-creator publishing.** The official brands page identifies BEST CHALLENGE as the self-publishing path for up-and-coming creators. *UI implication:* the captured Best Challenge route is retained as a distinct product surface rather than generalized to reader browsing.

### Personas

This reference does not invent demographic personas. The official context identifies three stakeholder groups: readers/users who discover stories, new and established webcomic creators who build audiences and monetize work, and emerging self-publishers using BEST CHALLENGE. No motivations, demographics, or task flows beyond those official descriptions are asserted.

## Colors

- **Product green** (`#00DC64`): Observed on the creator-entry button, selected content tabs, the current route's global-navigation link (as a fill), the first sub-navigation link and first pagination button (as text), and a weekday browse heading.
- **Surface white** (`#FFFFFF`): Observed header-search background and the text on the captured green weekday heading.
- **Foreground black** (`#000000`): Observed search text, product headings, and creator-entry text.
- **Muted gray** (`#666666`): Observed unselected content-tab text and tag-link text.
- **Tag surface** (`#F6F6F6`): Observed tag-link background on the product home.
- **Outline gray** (`#EBEBEB`): Observed as the 1px border of the QR-code button (§4).

No hover color, error color, dark reader surface, shadow ladder, or universal brand palette is promoted because it was not established by the supplied product capture.

## Typography

### Font evidence classes

- **Live product computed use:** `Pretendard` is the computed family on 1,371 captured elements across the three product routes. The collector reports a high-confidence loaded FontFaceSet match, so it is the sole `tokens.typography.family.ui` family.
- **Declared-only font asset:** `Pretendard Variable` has 92 captured `@font-face` source URLs but zero visible computed uses. It remains a declared asset, not a substituted UI-family token.
- **Declared-only faces:** `hind`, `NanumBarunGothic`, `NanumSquare`, and `Volte` have zero visible uses in this artifact. They remain declared-only.
- **Unresolved shell family:** `나눔고딕` occurs in 12 global NAVER utility-shell observations but has no matching loaded FontFace in the artifact. It remains unresolved and is excluded from the product family token.
- **Upstream asset and licence:** Pretendard's upstream README describes its cross-platform, multilingual family and variable distribution. Its upstream LICENSE is SIL Open Font License 1.1. These sources explain the font asset; the product-use conclusion comes from computed use plus the loaded FontFaceSet match above.

### Observed hierarchy

| Role | Size | Weight | Line height | Captured use |
|---|---:|---:|---:|---|
| Header wordmark area | 24px | 700 | normal | `home::h1` |
| Section title | 20px | 600 | 21px | `ComponentHead__title` on product home |
| Content tab | 15px | 500 | 21px | selected and unselected `ComponentHead__button_tab` |
| Tag link | 14px | 500 | 30px | `TagGroup__tag` on product home |

## Layout

The capture establishes a 1440×900 view of three public product routes, not a responsive layout system. Observed geometry includes a 35px header search input, a 39px creator entry, 21px content tabs, 30px and 37px tag links, and a 45px green weekday heading. It does not establish breakpoints, a reusable grid, poster aspect ratios, sticky behavior, or reader layout rules.

### Responsive Behavior

No responsive viewport comparison was supplied. The reference makes no breakpoint, touch-target, image-ratio, or mobile-reader assertion.

## Elevation & Depth

The documented search, creator entry, tabs, tags, weekday heading, and pagination samples all report `box-shadow: none`. No elevation token is promoted.

## Motion & Easing

No duration, easing, animation, or reduced-motion behavior was captured. Tab selection is the only observed interaction kind; it establishes state provenance, not a motion token.

## Components

### Header search

**Default**
- Background: `#FFFFFF`
- Text: `#000000`
- Radius: `0px`
- Padding: `0px 65px 0px 10px`
- Font: `14px / 400 Pretendard`
- Use: Product-home header search input; `home::[data-omd-capture="4"]`.

### Creator entry

**Default**
- Background: `#00DC64`
- Text: `#000000`
- Radius: `4px`
- Padding: `11px 33px`
- Font: `12px / 400 Pretendard`
- Use: Product global-navigation creator entry; `home::[data-omd-capture="14"]`.

### Content tab

**Default**
- Text: `#666666`
- Font: `15px / 500 Pretendard`
- Use: Unselected product content tab; `home::[data-omd-capture="16"]`.
- Selected: Text `#00DC64`; observed at `home::[data-omd-capture="17"]` and in the captured tab interaction.
- Evidence check (2026-09-29): every tab with `aria-selected=false` in the bundle computes `#666666` and every tab with `aria-selected=true` computes `#00DC64`, on all three routes; the seven tab interactions record `#00DC64` on each newly selected tab. Corrected 2026-09-29: the frontmatter token stored the selected `#00DC64` as the rest text colour; it now carries `#666666` at rest and the green as its selected value.

### Tag link

**Default**
- Background: `#F6F6F6`
- Text: `#666666`
- Radius: `4px`
- Padding: `0px 10px`
- Font: `14px / 500 Pretendard`
- Use: Product-home tag link; `home::[data-omd-capture="64"]`.

The same class also appears at 16px/500/37px on the home route; 184 of the 191 home tag links compute that size, so it is the common one and is recorded as the large tag link below. It remains a route-local record, not a generalized size scale. Corrected 2026-09-29: the July text presented the 16px size as a secondary record.

### Pagination

**Page buttons**
- Text: `#000000`
- Font: `14px / 500 Pretendard`, line height 20px, tracking -0.5px
- Size: 28px × 28px
- Use: Best Challenge page buttons (`button.Paginate__page`); `surface-3::[data-omd-capture="134"]` to `"142"`.

**First page**
- Text: `#00DC64`
- Use: the first of the ten page buttons; `surface-3::[data-omd-capture="133"]`. The capture records no `aria-current`, so the green is described as the first page's variant, not declared as a selected state.
- Disabled: A disabled previous control is statically observed at `surface-3::[data-omd-capture="132"]` with `#000000`; no reusable disabled treatment is inferred from that single observation, and it is not read as a rest value.

Corrected 2026-09-29: the frontmatter token stored the first page's `#00DC64` as the pagination's rest text colour; the other nine page buttons compute `#000000`.

The components below were transcribed on 2026-09-29 from the same 2026-07-13 bundle; nothing was re-measured. The header search field and creator entry above are now also frontmatter components (`header-search`, `creator-entry`) with claims; rechecked against `home::[data-omd-capture="4"]` (268px × 35px) and `"14"` (151px × 39px).

### Global navigation link

- Background: transparent
- Text: `#000000`
- Font: `16px / 600 Pretendard`, line height 55px, tracking -0.5px
- Padding: `0px 18px`; height 55px
- Current route: `#00DC64` fill with `#FFFFFF` text. On each captured route exactly one of the six links computes this, and it moves with the route: the first link on `/index` (`home::[data-omd-capture="8"]`), the second on `/webtoon` (`surface-2::[data-omd-capture="9"]`), the fourth on `/bestChallenge` (`surface-3::[data-omd-capture="11"]`). No `aria-current` is recorded; the selected value rests on that route-by-route agreement.
- Use: `a.GlobalNavigationBar__link`; rest evidence `home::[data-omd-capture="9"]`.

### Sub-navigation link

- Background: transparent
- Text: `#000000`
- Font: `15px / 600 Pretendard`, line height 49px, tracking -0.5px
- Padding: `0px 5px`; height 49px
- First link: on both `/webtoon` (twelve links) and `/bestChallenge` (eleven) the first link (capture 16) computes `#00DC64`. No `aria-selected` or `aria-current` is recorded, so it is described, not declared as a selected state.
- Use: `a.SubNavigationBar__link`; evidence `surface-2::[data-omd-capture="17"]`.

### Weekday heading

- Text: `#000000`, `14.04px / 700 Pretendard`
- Size: 169px × 45px
- Variant: one of the two headings captured on `/webtoon` computes a `#00DC64` fill with `#FFFFFF` text; the capture does not record what it marks.
- Use: non-interactive `h3.WeekdayMainView__heading`; evidence `surface-2::h3`.

### Large tag link

- Background: `#F6F6F6`
- Text: `#666666`
- Radius: `4px`; padding `0px 10px`; height 37px
- Font: `16px / 500 Pretendard`, tracking -0.42px
- Use: the common size of `TagGroup__tag` on the product home (184 of 191); evidence `home::[data-omd-capture="130"]`.

### QR-code button

- Background: transparent
- Text: `#666666`
- Border: 1px `#EBEBEB`
- Radius: `4px`; padding `0px`; size 172px × 43px
- Font: `13px / 500 Pretendard`, tracking -0.5px
- Use: outline `button.QrCode__button` on home and `/bestChallenge`; evidence `home::[data-omd-capture="364"]`.

### Author link

- Text: `#000000`
- Font: `14px / 500 Pretendard`, line height 20px
- Use: `a.ContentAuthor__author`, 82 occurrences across the three routes; evidence `home::[data-omd-capture="23"]`.

Only tab selection has interaction provenance in the supplied bundle (`interactionCount: 7`). The bundle's `surfaces[].elements[]` hold no `::state-hover`, `::state-pressed`, or `::state-focus` frame (checked 2026-09-29), so no hover, pressed, or focus value is declared. No menu, dialog, error, toast, responsive, card, thumbnail, reading-viewer, or checkout variant is asserted.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://comic.naver.com/index` (product home), `https://comic.naver.com/webtoon` (product browse), `https://comic.naver.com/bestChallenge` (product creator discovery), `https://about.webtoon.com/` and `https://about.webtoon.com/our-brands?company=naverWebtoon` (official company and service context), `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` (upstream font distribution/design), `https://github.com/orioncactus/pretendard/blob/main/LICENSE` (upstream font licence)
**Tier 2 sources:** `https://getdesign.md/naverwebtoon` (attempted; built-in web open safe-open failure and no search record), `https://styles.refero.design/?q=naver%20webtoon` (attempted; built-in web open safe-open failure and no search record)
**Conflicts unresolved:** none

The legacy prose-derived token sheet, hover/pressed/focus treatments, reader and payment states, logo-color assertions, shadow ladder, universal spacing/radius rules, and unobserved component variants were removed because the supplied 2026 capture does not substantiate them.

### States

| State | Captured treatment |
|---|---|
| Content tab, unselected | `#666666`, 15px/500, `home::[data-omd-capture="16"]` |
| Content tab, selected | `#00DC64`, 15px/500, `home::[data-omd-capture="17"]`; tab interaction provenance exists |
| Pagination, first page | `#00DC64`, 14px/500, `surface-3::[data-omd-capture="133"]`; the other nine page buttons compute `#000000`; no `aria-current` is recorded |
| Global navigation link, current route | `#00DC64` fill with `#FFFFFF` text on one link per route, moving with the route (§4) |
| Pagination, disabled previous | Statically disabled with `#000000`, 14px/500, `surface-3::[data-omd-capture="132"]`; not a generalized disabled rule |

No loading, empty, success, error, toast, skeleton, focus, hover, or pressed state was captured for promotion.

## Do's and Don'ts

### Do

- Reuse only the selector-backed white, black, gray, and green treatments documented above when recreating these specific public-route patterns.
- Preserve the selected/unselected tab color split only in contexts with the captured tab semantics.
- Keep `Pretendard` as the product UI family only where a compatible loaded-font path is available.

### Don't

- Don't treat the inherited NAVER utility shell as a NAVER WEBTOON product-token source.
- Don't substitute `Pretendard Variable`, `NanumSquare`, or another declared font for the verified computed `Pretendard` family.
- Don't infer card, reader, payment, hover, focus, error, or responsive contracts from this three-route capture.

## Voice & Tone

The supplied evidence contains Korean product labels but no official voice guide or verified product-copy inventory. No reusable tone rule, do/don't table, or sample copy is asserted.

## Agent Prompt Guide

For a captured content-tab pattern, use `15px / 500 Pretendard`, `#666666` unselected text, and `#00DC64` selected text; retain the state only where tab-selection behavior exists. For the captured header search, use a white, square-cornered 35px field with `0px 65px 0px 10px` padding and `14px / 400 Pretendard`. Do not extend these snippets into a generic WEBTOON app system.

## Governance

### Known Gaps

- **Contrast, `gnb-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `sub-nav-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `weekday-heading`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `qr-code-button`.** Text `#666666` on `#00000000` measures 3.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `author-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
