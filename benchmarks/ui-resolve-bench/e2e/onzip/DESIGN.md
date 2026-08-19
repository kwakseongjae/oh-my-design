# 온집 Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

온집은 물건을 늘어놓지 않는다. 그 물건이 만든 자리를 먼저 보여 준다. Lived-room photography and housewarming stories lead; the catalog follows. Every number on screen is a sample from the shipped dataset, named once in the footer.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

- 기획전과 인기 상품, 최신 집들이가 한 화면에 보이는 홈을 훑는다

- 카테고리와 재고로 스토어를 거르고 가격이나 평점으로 정렬한다

- 상품의 세 컷과 스펙, 후기, 실린 집들이를 한 화면에서 확인한다

- 집 유형으로 집들이 목록을 거른다

- 집들이 본문과 갤러리, 쓰인 상품을 매거진으로 읽는다
<!-- design-md:claim-end -->

### Design direction

- P1 Lived room first — lifestyle cuts and housewarmings precede studio SKUs; sacrifice comparison density and cart urgency. D-P1-1 through D-P1-5.

- P2 Quiet paper shop — warm linen paper, hairline rest, shallow tile hover, terracotta signal under 5 percent of the viewport; sacrifice sale-red and gradient heroes. D-P2-1 through D-P2-9.

- P3 Catalog honesty — render only dataset fields; one footer disclosure; missing reverse housewarmings become an unavailable-information node. D-P3-1 through D-P3-4.

- Home uses P-CM-07 bento (curations 2 + popular 4 + latest posts 3). Store uses P-FN-04 chips, P-FN-01 listbox, P-CM-01 cards. Product uses P-CM-02 gallery, never a three-slide carousel. Posts detail uses P-ED-01 magazine well.

### Principles

- Lived room first: lifestyle image and one-line pitch lead every product card (D-P1-1). Studio cuts wait for the detail gallery.

- Wide viewports gain columns, not empty paper. Home is a nine-cell bento; product detail is a two-pane information split; only the magazine well centers (D-P1-2, D-P1-5).

- One surface genre: paper tiles with hairline rest and hover elevation. Controls use a smaller radius so the kit does not repeat one boxed shape (D-P2-1, D-P2-2, D-P2-3).

- Accent is a signal — terracotta on linen, used for the primary action, selected chip, and focus ring, never a full-card wash (D-P2-4).

- Korean gothic stack, word-break keep-all, body line-height 1.7, display tracking no tighter than -0.01em (D-P2-7, D-P2-8).

- Honesty over flourish: stock enums become tokens, aggregates are defined in user language, unavailable reverse-references stay visible (D-P3-1, D-P3-2, D-P3-3).

### Avoid

- Native unstyled select, radio, or checkbox chrome.

- Developer state switchers or Show loading radios.

- Carousel grammar on a three-cut product gallery.

- Implementation vocabulary such as field names or dataset file names in the UI.

- Repeating the dataset disclosure as a hero banner.

- Invented cart, checkout, or live inventory.

- Pure black or pure white as base paper and ink.

- auto-fit card grids that stretch a leftover last row.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color.accent**: `#8B4529` — Terracotta signal. D-P2-4. 6.1:1 on paper. Area budget under 5 percent.
- **color.accent-ink**: `#F3EEE4` — Ink on terracotta fills. D-P2-4.
- **color.chip**: `#E7DFD1` — Tinted chip and filter rest fill. D-P2-3.
- **color.focus**: `#2B251E` — Focus ring shares ink, reserved outline slot, no fade-in. D-P2-3.
- **color.ink**: `#2B251E` — Warm espresso ink. D-P2-5. Body text on paper 13.1:1.
- **color.inverse**: `#2B251E` — Inverted plate for campaign tiles. D-P2-5.
- **color.inverse-ink**: `#F3EEE4` — Ink on inverted plates. D-P2-5.
- **color.muted**: `#5E564C` — Secondary ink for meta and labels. D-P2-5. 6.2:1 on paper.
- **color.paper**: `#F3EEE4` — Warm linen paper. D-P2-5. Not #ffffff.
- **color.raised**: `#FAF7F1` — Raised plate inside paper. D-P2-3.
- **color.rule**: `#D0C6B4` — Hairline rest border. D-P2-3.
- **color.stock-in**: `#2F5A3D` — 판매중 token from stock_status enum. D-P3-1.
- **color.stock-low**: `#7A4E1D` — 품절임박 token. D-P3-1.
- **color.stock-out**: `#7A3535` — 품절 token. D-P3-1.
- **elevation.hover**: `0 10px 24px rgba(43, 37, 30, 0.12)` — Hover tile lift via shadow token; motion still uses opacity on a pseudo. D-P2-3.
- **elevation.rest**: `0 0 0 1px #D0C6B4` — Hairline rest, not a drop shadow. D-P2-3.
- **elevation.selected**: `0 0 0 2px #2B251E` — Persistent selected ring, distinct from hover. D-P2-3.
- **motion.duration-base**: `200ms` — Hover and chip. D-P2-6.
- **motion.duration-fast**: `120ms` — Press and focus. D-P2-6.
- **motion.duration-slow**: `320ms` — Section entrance. D-P2-6.
- **motion.easing-enter**: `0.2, 0.8, 0.2, 1` — Enter curve. D-P2-6.
- **motion.easing-exit**: `0.4, 0, 1, 1` — Exit curve. D-P2-6.
- **radius.card**: `12px` — Media tile only. D-P2-1.
- **radius.control**: `8px` — Buttons, listbox, chips. D-P2-2.
- **radius.pill**: `999px` — Selected filter chip. D-P2-2.
- **space.1**: `4px` — Control micro-gap. D-P2-9. 4pt base.
- **space.2**: `8px` — In-card tight row. D-P2-9. Price sits this close to the title.
- **space.3**: `12px` — In-card default row. D-P2-9.
- **space.4**: `16px` — Card padding and control height inset. D-P2-9.
- **space.5**: `24px` — Cluster gap. D-P2-9.
- **space.6**: `2.5rem` — Section air small. D-P2-9.
- **space.7**: `4rem` — Section air medium. D-P2-9.
- **space.8**: `6rem` — Section air large. D-P2-9.
- **space.gutter**: `clamp(1rem, 4vw, 2.5rem)` — Viewport gutter. D-P2-9.
- **type.body-leading**: `1.7` — Hangul body leading 1.6–1.8. D-P2-7.
- **type.body-size**: `1rem` — Body size. D-P2-7.
- **type.display-size**: `clamp(2rem, 4vw, 3.25rem)` — Display at least 2× body 1rem. D-P2-8.
- **type.family**: `"Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif` — Hangul gothic stack for every role. D-P2-7.
- **type.label-size**: `0.75rem` — Label role, muted, not fake-small. D-P2-7.

### Contrast pairs

- color.ink on color.paper: minimum 4.5:1
- color.muted on color.paper: minimum 4.5:1
- color.accent on color.paper: minimum 4.5:1
- color.accent-ink on color.accent: minimum 4.5:1
- color.ink on color.chip: minimum 4.5:1
- color.muted on color.chip: minimum 4.5:1
- color.stock-in on color.paper: minimum 4.5:1
- color.stock-low on color.paper: minimum 4.5:1
- color.stock-out on color.paper: minimum 4.5:1
- color.inverse-ink on color.inverse: minimum 4.5:1
- color.ink on color.raised: minimum 4.5:1

### Reduced motion

Required.

### Foundation rules

- Every component reads var(--color-*), var(--space-*), var(--radius-*), var(--motion-*). Inline hex outside the token file is a defect.

- Animate only transform and opacity. Every motion pair cites a duration and easing token and collapses under prefers-reduced-motion (D-P2-6).

- Section gaps use space.6, space.7, or space.8. Repeating one gap across the page fails the rhythm rule (D-P2-9).

- Accent fill is reserved for the single primary CTA, the selected filter chip, and the selected gallery thumb (D-P2-4).

- Foreground/background pairs are declared below; disabled chips keep muted-on-chip contrast at or above 4.5:1.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|---|
| display | Page titles and home manifesto. Weight 800, line-height 1.2, tracking -0.01em, overflow-wrap anywhere. D-P2-8. | "Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif | clamp(2rem, 4vw, 3.25rem) | 800 | 1.2 | -0.01em |
| title | Section and card titles, two-line clamp on cards. | "Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif | 1.25rem | 700 | 1.3 | 0 |
| body | Korean prose and UI copy. word-break keep-all. Measure about 40 Hangul characters in the magazine well. | "Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif | 1rem | 400 | 1.7 | 0 |
| label | Eyebrows, filter legends, spec keys. Smaller and muted. Do not uppercase Hangul. | "Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif | 0.75rem | 600 | 1.4 | 0.04em |
| price | Dominant weight inside a product card. Thousands separators, 원 after the number. | "Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif | 1.125rem | 700 | 1.3 | 0 |

### Assets

| Asset | Kind | Source status | License status | Source | Notes |
|---|---|---|---|---|---|
| hangul-gothic-stack | font | project-owned | not-required | Local Korean gothic stack declared in tokens. No webfont files ship in this repository. | Display hierarchy is weight and size inside the same gothic family. D-P2-7. |
| catalog-photography | image | user-provided | not-required | public/assets JPEG fixtures that accompany src/data/data.json. | Studio, lifestyle, and detail cuts plus housewarming galleries and two curation banners. |

### Rules

- word-break: keep-all on Korean prose and headings; overflow-wrap: anywhere on display headings.

- Prices and counts use thousands separators and the unit after the number.

- Provided images declare width and height. Below-the-fold images use loading lazy. The LCP image does not.

- Decorative media is aria-hidden. Informative SVG uses role img with a title.

<!-- design-md:section components-states -->
## 4. Components & States

### Component: skip-link

**Semantics:** First focusable control. Moves keyboard focus to #main, never to the primary CTA.

- Anatomy: visible-on-focus label, in-page target #main
- Variants: default
- States: default, hover, focus-visible
- Token references: color.accent, color.accent-ink, radius.control, motion.duration-fast

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Navigation links stay available on every route. |
| loading | not-applicable | Route chrome does not wait on a network fetch. |
| error | not-applicable | Broken destinations are handled by the page error region, not the link control. |
| success | not-applicable | Current route uses aria-current, not a success state. |

### Component: site-nav

**Semantics:** Single navigation landmark, identical on every route, aria-current on the active destination. Mobile uses a disclosure button, not a separate app shell.

- Anatomy: wordmark, primary links, mobile disclosure
- Variants: desktop-inline, mobile-disclosure
- States: default, hover, focus-visible
- Token references: color.ink, color.paper, type.family, space.gutter

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Navigation links stay available on every route. |
| loading | not-applicable | Route chrome does not wait on a network fetch. |
| error | not-applicable | Broken destinations are handled by the page error region, not the link control. |
| success | not-applicable | Current route uses aria-current, not a success state. |

### Component: button-primary

**Semantics:** Exactly one visible primary CTA per view, marked data-cta=primary. Ghost is local. Minimum 44px on touch.

- Anatomy: label, optional trailing mark
- Variants: primary, ghost
- States: default, hover, focus-visible, disabled
- Token references: color.accent, color.accent-ink, radius.control, elevation.hover, motion.duration-fast

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | This surface has no asynchronous submit. |
| error | not-applicable | Validation lives on filter and route states, not the primary button. |
| success | not-applicable | Arrival at the destination is the success; the button does not persist a success style. |

### Component: listbox

**Semantics:** P-FN-01 custom listbox. Native select popup is forbidden. Trigger owns DOM focus. Options use aria-activedescendant. Escape cancels. Enter Space and Tab commit.

- Anatomy: eyebrow label, trigger with current value and caret, listbox popup, options
- Variants: sort
- States: default, hover, focus-visible, disabled
- Token references: color.ink, color.chip, color.rule, radius.control, elevation.selected

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | Sort options are a fixed local list. |
| error | not-applicable | Sort has no invalid value; the last committed option remains selected. |
| success | not-applicable | The trigger shows the committed label; no separate success flash. |

### Component: filter-chip

**Semantics:** P-FN-04. Entire is the default chip. Selected is a persistent inverted fill, not a hover wash. A chip that would yield zero rows under the current complementary filter is disabled.

- Anatomy: legend, chip button, selected mark
- Variants: category, stock, home-type
- States: default, hover, focus-visible, disabled
- Token references: color.chip, color.ink, color.accent, color.accent-ink, radius.pill

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | Filters apply to the in-memory catalog without a pending fetch. |
| error | not-applicable | Invalid filter combinations become an empty result, not a chip error. |
| success | not-applicable | The committed filter is the selected chip, announced by the live result line. |

### Component: product-card

**Semantics:** P-CM-01. Lifestyle cut and one-line pitch required. Price is the heaviest text. Whole-card link, no inner competing CTA. Anatomy order is fixed.

- Anatomy: lifestyle media, brand eyebrow, name, price, short pitch, meta row
- Variants: grid, join
- States: default, hover, focus-visible
- Token references: radius.card, space.4, color.paper, elevation.rest, elevation.hover, color.stock-in, color.stock-low, color.stock-out

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | A sold-out item still opens its detail page; stock is a badge, not a disabled card. |
| loading | not-applicable | Card media uses explicit width and height; the card itself is not a pending control. |
| error | not-applicable | Missing records are a route error region, not a card error. |
| success | not-applicable | Opening a card is navigation, not a success state on the card. |

### Component: post-card

**Semantics:** Housewarming teaser. Index uses P-FN-03 horizontal media when two columns would leave a hole. Cover is not reused as the first magazine well cut when the gallery already includes it as a distinct frame.

- Anatomy: cover, home-type eyebrow, title, summary, meta
- Variants: bento, index-row
- States: default, hover, focus-visible
- Token references: radius.card, color.ink, space.3, elevation.rest

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | A sold-out item still opens its detail page; stock is a badge, not a disabled card. |
| loading | not-applicable | Card media uses explicit width and height; the card itself is not a pending control. |
| error | not-applicable | Missing records are a route error region, not a card error. |
| success | not-applicable | Opening a card is navigation, not a success state on the card. |

### Component: campaign-tile

**Semantics:** Home bento large tiles for the two curations. Banner is unique to the tile and does not repeat as a product card hero on the same screen.

- Anatomy: banner, title, subtitle, joined product names
- Variants: wide, narrow
- States: default, hover, focus-visible
- Token references: color.inverse, color.inverse-ink, radius.card, space.5

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | A sold-out item still opens its detail page; stock is a badge, not a disabled card. |
| loading | not-applicable | Card media uses explicit width and height; the card itself is not a pending control. |
| error | not-applicable | Missing records are a route error region, not a card error. |
| success | not-applicable | Opening a card is navigation, not a success state on the card. |

### Component: gallery

**Semantics:** P-CM-02. Stage plus thumbnail radiogroup. Three product cuts are a gallery, not a carousel. Loading until the selected image fires load. Error if the cut fails. Success when the cut is visible.

- Anatomy: stage, thumb radiogroup, status text
- Variants: product-3, post-cover
- States: default, hover, focus-visible, loading, error, success
- Token references: radius.card, color.accent, color.rule, motion.duration-base

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | All three product cuts are always choosable when the record exists. |
| loading | applicable |  |
| error | applicable |  |
| success | applicable |  |

### Component: spec-table

**Semantics:** P-CM-03. Dataset spec keys 소재 크기 색상 구성 become labels. No invented rows.

- Anatomy: caption, label cell, value cell
- States: default
- Token references: color.muted, color.rule, type.label-size

- Interaction kind: non-interactive
- Interaction reason: Read-only specification table with no operable cells.

### Component: rating-distribution

**Semantics:** P-CM-04. Definition line first. Tracks normalize to the column, not the viewport. Named counts come from listed reviews for this product.

- Anatomy: definition line, score rows, track, count
- States: default
- Token references: color.accent, color.chip, color.muted

- Interaction kind: non-interactive
- Interaction reason: Summary graphic and counts, not a control.

### Component: review-list

**Semantics:** P-CM-05. Title, then nick rating time helpful, then body. Subtle rules between items.

- Anatomy: title, meta, body
- States: default
- Token references: color.ink, color.muted, color.rule, space.5

- Interaction kind: non-interactive
- Interaction reason: Quoted sample reviews are readable text, not a form.

### Component: magazine-well

**Semantics:** P-ED-01. Figures near 960px, prose near 40 Hangul characters, joined products in the same well.

- Anatomy: wide figure, prose measure, join grid
- States: default
- Token references: space.7, type.body-leading, color.paper

- Interaction kind: non-interactive
- Interaction reason: Editorial layout region. Links inside use product-card.

### Component: empty-panel

**Semantics:** P-FN-05. Dashed plate, no illustration. Used when a filter combination yields zero rows.

- Anatomy: honest sentence, reset action slot
- States: default
- Token references: color.muted, color.rule, space.6

- Interaction kind: non-interactive
- Interaction reason: The panel is a region; the reset control inside is button-primary ghost.

### Component: live-status

**Semantics:** P-FN-06. role=status announces the active filters and the visible count in user language.

- Anatomy: condition summary, count
- States: default
- Token references: color.muted, type.label-size

- Interaction kind: non-interactive
- Interaction reason: Live region only.

### Component: unavailable-note

**Semantics:** Visible unavailable-information node. Names the missing category, for example housewarmings that do not include this product. data-state=unavailable.

- Anatomy: named absence, optional next step
- States: default
- Token references: color.muted, color.rule, space.4

- Interaction kind: non-interactive
- Interaction reason: Honest absence copy, not an operable control.

### Component: footer-colophon

**Semantics:** Single sample-data disclosure from the dataset, one quiet line, identical on every page.

- Anatomy: disclosure sentence
- States: default
- Token references: color.muted, space.6

- Interaction kind: non-interactive
- Interaction reason: Colophon text only.

### Rules

- Interactive components implement the applicability table above. Hover changes surface. Selection is a persistent mark distinct from hover.

- Touch targets are at least 44px unless the control is an inline prose link.

- Never hide focusable descendants with aria-hidden alone.

- Presets: P-CM-01/02/03/04/05/07, P-FN-01/02/03/04/05/06, P-ED-01. Anatomy order is frozen unless a new D-ID is added.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Responsive constraints

- Minimum supported width: 320px
- Reflow target: 200% zoom

### Layout rules

- Home P-CM-07: 12-column bento. Curation tiles 7 and 5. Popular products four equal columns. Latest housewarmings three horizontal cards. Authored 1/2/3/4 column breakpoints, never auto-fit. D-P1-2, D-P1-5.

- Store: chip row, listbox, result line, then product-card grid 1-2-3-4 columns. documentElement.scrollWidth must not exceed clientWidth at 320, 390, and 1440. D-P1-5.

- Product detail: gallery and buy-info 6/6 from 960px up; reviews and reverse housewarmings share the second band so the wide pane is not empty. One or two reverse posts use P-FN-03. D-P1-3.

- Posts index: home-type chips plus two-column rows, one column below 640px.

- Post detail P-ED-01: cover, then four figure/prose pairs, then joined products. Figures about 960px, prose about 40 Hangul characters. D-P1-4.

- 200 percent zoom keeps task order, unclips primary actions, and wraps display headings with overflow-wrap anywhere.

- One shared stylesheet owns tokens and components. Pages add only layout. Overflow-x is clip.

### Platform: web

- React and Vite SPA with react-router-dom. html lang=ko. One main and one h1 per view.
- Route changes update document.title, scroll to top, and move focus to the page h1 with the P-FN-02 suppressed ring.
- Touch viewports collapse the nav into a disclosure. Primary task controls stay inside the viewport.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

- Speak as a careful shop clerk who has been in the room. Short Korean sentences. Sound them out; drop weeds.

- User language only. Never say data.json, review_count, product_ids, or component names.

- Aggregates are defined beside the number: 후기 많은 순 상위 4개, 이 화면에 실린 후기 N건.

- Sample disclosure is one footer line taken from the dataset disclosure field.

### Terminology

| Term | Preferred form |
|---|---|
| 기획전 | The two curations on the home bento. |
| 스토어 | The product catalog. |
| 스펙 | The four specification rows from the dataset. |
| 집들이 | Housewarming stories, never posts in the UI. |
| 후기 | Customer reviews listed for a product. |

### Locale: ko (supported)

- html lang is ko on every route.
- Hangul gothic stack on every role. word-break keep-all. Body leading 1.7. Display tracking no tighter than -0.01em.
- Currency is 1,234,000원. Areas use 평 after the number.
- No second locale is claimed.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=project-system lang=en -->
### Authority

This document is the project design contract for the declared scope.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Project priority details

1. Prompt facts and the shipped dataset outrank agent proposals.

2. The adopted Core v2 graph is the only project system. Pages consume tokens; they do not invent hex or radii.

3. Unknown values stay absent at the smallest boundary. Do not fill official brand colors or webfont files.

### Additional change rules

- Add a D-ID to the decision table before adding a token or breaking a preset anatomy.

- Only the external authority controller may compile, approve, adopt, or rebind hashes.

- A second mission must not replace an active run.

### Decision provenance

- /identity/name — prompt-fact; evidence: .benchmark/PROMPT.md
- /identity/kind — agent-proposed-greenfield-decision; evidence: .omd/runs/onzip-home/system/proposal.md, .omd/runs/onzip-home/council/design-system/result.json
- /experience/summary — agent-proposed-greenfield-decision; evidence: .omd/runs/onzip-home/derivation.md, .omd/runs/onzip-home/council/design-system/result.json
- /experience/primary_tasks — prompt-fact; evidence: .benchmark/PROMPT.md
- /foundations/tokens/color.paper — agent-proposed-greenfield-decision; evidence: .omd/runs/onzip-home/derivation.md, .omd/runs/onzip-home/council/design-system/result.json
- /foundations/tokens/color.ink — agent-proposed-greenfield-decision; evidence: .omd/runs/onzip-home/derivation.md, .omd/runs/onzip-home/council/design-system/result.json
- /foundations/tokens/color.accent — agent-proposed-greenfield-decision; evidence: .omd/runs/onzip-home/derivation.md, .omd/runs/onzip-home/council/design-system/result.json
- /foundations/tokens/color.stock-in — repository-fact; evidence: src/data/data.json, .omd/runs/onzip-home/data-inventory.md
- /foundations/reduced_motion — prompt-fact; evidence: .benchmark/PROMPT.md, .omd/runs/onzip-home/derivation.md
- /typography_assets/roles — agent-proposed-greenfield-decision; evidence: .omd/runs/onzip-home/derivation.md, .omd/runs/onzip-home/system/proposal.md
- /components_states/components — verified-reference-inspiration; evidence: .agents/skills/omd-autopilot/references/presets/commerce.md, .agents/skills/omd-autopilot/references/presets/fundamentals.md, .agents/skills/omd-autopilot/references/presets/editorial.md, .omd/runs/onzip-home/council/interaction/result.json
- /layout_platforms/minimum_width_px — prompt-fact; evidence: .benchmark/PROMPT.md
- /layout_platforms/reflow_zoom_percent — prompt-fact; evidence: .benchmark/PROMPT.md
- /content_locales/locales — prompt-fact; evidence: .benchmark/PROMPT.md, src/data/data.json
- /governance/unknown_policy — prompt-fact; evidence: .benchmark/PROMPT.md
- /foundations/tokens/color.brand-official — unresolved; evidence: .omd/runs/onzip-home/derivation.md
