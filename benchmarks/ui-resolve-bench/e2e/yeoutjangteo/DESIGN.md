# 이웃장터 Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

이웃장터는 동네 직거래를 구경거리가 아니라 스캔 작업으로 본다. 밀도·신뢰·시간성을 얻기 위해 히어로 갤러리, 장식 크롬, 영구 카탈로그 느낌을 희생한다. 한 행에서 제목·가격·동네·시간·상태가 시선 한 번에 읽혀야 한다.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

- Filter the home feed by neighborhood and category

- Scan listing rows for title, price, neighborhood, relative time, and status

- Inspect one listing including images, seller trust, and chat preview

- Open a seller profile and read trust score with its basis

- Browse free listings only
<!-- design-md:claim-end -->

### Design direction

- D-P1-1 Surface: hairline-rule bands. Rest-state rows stay unfilled. Thumbnail radius 4px. Painted hover plates use radius.row per D-P4-1.

- D-P1-2 Density: row min-height pairs with thumb + 4-side row padding (D-P4-1). Title then price (space.2), meta (space.1), status and time in one glance column.

- D-P1-3 Wide viewport: add a second listing-row column at 1100px. Do not leave a left-max empty rail.

- D-P1-4 Type: one Hangul gothic family. Display step at least 2x body. word-break keep-all.

- D-P1-5 Home hero: eyebrow, display, lede, one action, then a data-computed neighborhood count list that fills the wide right half. Fold padding bottom is at least 1.3× top.

- D-P2-1 Color: warm paper and ink, one terracotta accent used as a signal under 5 percent.

- D-P2-2 Status tokens: selling, reserved, sold mapped to 판매중, 예약중, 거래완료.

- D-P2-3 Elevation: none. Separation is the hairline rule token.

- D-P2-4 Trust: numeric score, label, deal count, join age, and badges together.

- D-P3-1 Relative time hierarchy: minutes and hours in ink, yesterday and days muted, week-plus faint label.

- D-P3-2 Sold treatment: media at 0.62 opacity, muted text, link and focus-visible remain.

- D-P3-3 Motion: 120, 200, 320 ms and two easing curves. Animate transform and opacity only.

- D-P3-4 Copy: neighbor-to-neighbor Korean. Price 0 renders as 나눔. Disclosure lives only on the footer meta line (D-P4-4).

- D-P4-1 Painted row plates (listing, seller, neighborhood counts): 4-side space.3 padding, matching negative inline margin, inset hairline, radius.row 4px on the tint. Media-to-edge gap equals that padding. min-height = size.thumb + 2×space.3.

- D-P4-2 Brand mark: 24×24 currentColor geometry — a square lot (동네 자리) with one scan band through it. The mark compresses the proposition that this market is scanned as a row inside a place, not shown as a gallery. Lockup with the wordmark; mark is aria-hidden.

- D-P4-3 Masthead: fixed size.masthead, lockup + tagline cluster, nav current via weight and inset fill (no decorative underline). Home lockup hit ≥44px.

- D-P4-4 Footer: inverse token pair only. Brand lockup + tagline positioning, one nav group derived from the two real routes, meta line for disclosure. Asymmetric two columns, link hit ≥44px.

- D-P3-5 Sold scan: sold thumbs are grayscale at 0.62 opacity and title/price use ink-muted; contrast stays; the row remains a keyboard-accessible link.

### Principles

- P1 Density over showcase: sacrifice hero galleries so thirty listings scan as thumbnail rows.

- P2 Trust over decoration: sacrifice ornamental chrome so seller score, badges, and status tokens carry the signal.

- P3 Temporality over permanence: sacrifice a timeless catalog so relative time and sold dimming dominate.

### Avoid

- Three-column icon cards, purple gradients, and unstyled native form controls.

- Developer state switchers and implementation vocabulary in the interface.

- Inventing listings, prices, sellers, or a live send-message endpoint.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color.accent**: `#b34416` — Terracotta signal for 나눔 and focus. D-P2-1.
- **color.ink**: `#241f18` — Primary ink. D-P2-1. Avoids #000 as a base.
- **color.ink-faint**: `#6a6358` — Week-plus time and sold status. D-P3-1.
- **color.ink-muted**: `#5f574c` — Secondary ink for meta and sold text. D-P3-1 D-P3-2.
- **color.inset**: `#e8e1d3` — Recessed empty and error plates. D-P1-1.
- **color.inverse-ink**: `#f3eee4` — Footer inverted ink. D-P2-1. 14.1:1 on inverse-paper.
- **color.inverse-ink-muted**: `#948c7e` — Footer meta and group labels. D-P4-4. 4.91:1 on inverse-paper.
- **color.inverse-inset**: `#3a342c` — Footer link hover plate. D-P4-4.
- **color.inverse-paper**: `#241f18` — Footer inverted surface. D-P2-1.
- **color.inverse-rule**: `#746c60` — Footer meta hairline. D-P4-4.
- **color.on-accent**: `#f3eee4` — Ink on accent fill. D-P2-1.
- **color.paper**: `#f3eee4` — Warm paper. D-P2-1. Avoids #fff as a base.
- **color.rule**: `#d4cbb8` — Hairline rule. D-P1-1 D-P2-3.
- **color.status-reserved**: `#9a4d0d` — 예약중. D-P2-2.
- **color.status-selling**: `#1a6b43` — 판매중. D-P2-2.
- **color.status-sold**: `#6a6358` — 거래완료. D-P2-2 D-P3-2.
- **motion.base**: `200ms` — Hover and enter. D-P3-3.
- **motion.ease-enter**: `cubic-bezier(0.2, 0, 0, 1)` — Enter curve. D-P3-3.
- **motion.ease-exit**: `cubic-bezier(0.4, 0, 1, 1)` — Exit curve. D-P3-3.
- **motion.fast**: `120ms` — Press and focus. D-P3-3.
- **motion.slow**: `320ms` — Section fade. D-P3-3.
- **radius.none**: `0px` — Unfilled plates and rest-state chrome. D-P1-1.
- **radius.pill**: `999px` — Filter chips. D-P1-1.
- **radius.row**: `4px` — Painted hover plates on listing, seller, and count rows. D-P4-1.
- **radius.thumb**: `4px` — Photo thumbs. D-P1-1.
- **size.hit**: `44px` — Minimum hit target. C2.
- **size.masthead**: `4.5rem` — Masthead min-height. D-P4-3.
- **size.row-min**: `calc(72px + 12px * 2)` — Listing row minimum paired with thumb and 4-side padding. D-P1-2 D-P4-1.
- **size.thumb**: `72px` — Listing thumb. D-P1-2.
- **space.1**: `4px` — Tight row internals. D-P1-2.
- **space.2**: `8px` — Title-to-price gap. D-P1-2.
- **space.3**: `12px` — Row padding and icon gap. D-P1-2.
- **space.4**: `16px` — Control padding. D-P1-2.
- **space.5**: `24px` — Cluster gap. D-P1-2.
- **space.6**: `32px` — Block gap. D-P1-2.
- **space.gutter**: `clamp(16px, 4vw, 40px)` — Viewport gutter. D-P1-3.
- **space.section**: `4rem` — Default section air. D-P1-2.
- **space.section-l**: `6rem` — Large section air. D-P1-2.
- **space.section-s**: `2.5rem` — Small section air. D-P1-2.
- **type.body**: `1rem` — Body size. D-P1-4.
- **type.display**: `clamp(2rem, 1.6rem + 1.2vw, 2.75rem)` — Display at least 2x 1rem body. D-P1-4.
- **type.family**: `"Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif` — Hangul-covering gothic stack. D-P1-4.
- **type.label**: `0.75rem` — Label role, wide tracking on Latin fragments only. D-P1-4.

### Contrast pairs

- color.ink on color.paper: minimum 4.5:1
- color.ink-muted on color.paper: minimum 4.5:1
- color.ink-faint on color.paper: minimum 4.5:1
- color.status-selling on color.paper: minimum 4.5:1
- color.status-reserved on color.paper: minimum 4.5:1
- color.status-sold on color.paper: minimum 4.5:1
- color.accent on color.paper: minimum 4.5:1
- color.on-accent on color.accent: minimum 4.5:1
- color.inverse-ink on color.inverse-paper: minimum 4.5:1
- color.inverse-ink-muted on color.inverse-paper: minimum 4.5:1
- color.inverse-ink on color.inverse-inset: minimum 4.5:1
- color.ink on color.inset: minimum 4.5:1
- color.ink-muted on color.inset: minimum 4.5:1
- color.accent on color.inset: minimum 3:1

### Reduced motion

Required.

### Foundation rules

- Every component color is a color.* token pair. Hex values live only inside tokens.

- Accent coverage stays a small signal: focus ring, 나눔 word, selected chip mark.

- Sold listings dim media to 0.62 and switch text to color.ink-muted while remaining a focusable link.

- Relative time uses color.ink for minutes and hours, color.ink-muted for yesterday and days, color.ink-faint for week-plus.

- Motion uses only transform and opacity, and every animation has a prefers-reduced-motion freeze.

- Section rhythm uses space.section-s, space.section, and space.section-l rather than a single gap.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|---|
| display | Page titles and wordmark | Pretendard gothic stack | clamp(2rem, 1.6rem + 1.2vw, 2.75rem) | 800 | 1.2 | 0em |
| body | Descriptions and chat text | Pretendard gothic stack | 1rem | 400 | 1.7 | 0em |
| title | Listing titles in rows | Pretendard gothic stack | 1rem | 700 | 1.35 | 0em |
| price | Price and 나눔 word | Pretendard gothic stack | 1.125rem | 700 | 1.3 | 0em |
| label | Status, time, and meta | Pretendard gothic stack | 0.75rem | 600 | 1.4 | 0.02em |

### Assets

| Asset | Kind | Source status | License status | Source | Notes |
|---|---|---|---|---|---|
| hangul-stack | font | official | not-required | Installed system Hangul gothic faces with Pretendard first if present | No webfont network request. |
| brand-mark | svg | project-owned | not-required | Inline 24×24 currentColor lockup | Square lot + one scan band: the market is a place scanned as a row, not a gallery. D-P4-2. |
| listing-photos | image | project-owned | not-required | public/assets item photo pairs | Sixty fixture photographs, two per listing. |

### Rules

- word-break: keep-all on Korean prose and headings. overflow-wrap: anywhere on display headings.

- Do not apply Latin display tracking below -0.01em on Hangul.

- Prices use thousands separators and the 원 unit after the number. Zero price is the word 나눔.

- Provided images declare width and height. Below-the-fold images use loading lazy.

- 브랜드 마크는 동네를 자리 낸 사각 구획과 그 안을 가로지르는 한 줄 스캔 밴드로, 구경 갤러리가 아니라 행 단위로 훑는다는 명제를 압축한다. D-P4-2.

<!-- design-md:section components-states -->
## 4. Components & States

### Component: app-skip-link

**Semantics:** First focusable control. Moves keyboard focus to #main, never to a primary CTA.

- Anatomy: skip text, target #main
- Variants: hidden-until-focus
- States: default, focus-visible
- Token references: color.accent, color.on-accent, size.hit

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | not-applicable | Skip link is not a hover affordance. |
| focus-visible | applicable |  |
| disabled | not-applicable | Skip link is always available. |
| loading | not-applicable | Skip link does not wait on data. |
| error | not-applicable | Skip link has no validation. |
| success | not-applicable | Destination focus is handled by the main landmark. |

### Component: app-nav

**Semantics:** Single site navigation rendered identically on every page with aria-current on the active link.

- Anatomy: brand lockup (mark + wordmark), tagline, home link, free link
- Variants: home-current, free-current
- States: default, hover, focus-visible
- Token references: color.ink, color.paper, color.rule, color.inset, size.masthead, size.hit, type.family

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Navigation destinations stay available. |
| loading | not-applicable | Route changes do not disable chrome. |
| error | not-applicable | Nav is not a form. |
| success | not-applicable | Current page is aria-current, not a success state. |

### Component: neighborhood-select

**Semantics:** Custom select-only combobox that filters listings by neighborhood and exposes the committed value on the trigger.

- Anatomy: visible label, trigger button, listbox, options
- Variants: all-neighborhoods, one-neighborhood
- States: default, hover, focus-visible, disabled
- Token references: color.ink, color.paper, color.rule, size.hit, radius.none

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | Neighborhoods are local fixture data. |
| error | not-applicable | Filter errors are empty results, not field errors. |
| success | not-applicable | Committed filter is announced by a live status region. |

### Component: category-filter-chip

**Semantics:** Exclusive category filter chips with aria-pressed. Static badges never share this component.

- Anatomy: pressed mark, category name
- Variants: idle, pressed
- States: default, hover, focus-visible
- Token references: color.ink, color.inset, color.accent, radius.pill, size.hit

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Every fixture category remains choosable. |
| loading | not-applicable | Categories are local fixture data. |
| error | not-applicable | A chip does not validate. |
| success | not-applicable | Selection is the pressed mark plus live status text. |

### Component: listing-row

**Semantics:** Whole-row link to a listing. Title, price, neighborhood, time, and status share one scan line. Sold stays focusable.

- Anatomy: thumbnail, title, price, neighborhood, relative-time, status-badge
- Variants: selling, reserved, sold, free
- States: default, hover, focus-visible
- Token references: color.ink, color.ink-muted, color.paper, color.rule, color.inset, size.thumb, size.row-min, radius.thumb, radius.row, space.3

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Sold rows stay accessible links. |
| loading | not-applicable | Rows render from the local fixture. |
| error | not-applicable | Missing listings use the error-panel, not a row state. |
| success | not-applicable | Opening a row is a route change. |

### Component: status-badge

**Semantics:** Non-interactive status mark for 판매중, 예약중, 거래완료.

- Anatomy: status label
- Variants: selling, reserved, sold
- States: default
- Token references: color.status-selling, color.status-reserved, color.status-sold, type.label

- Interaction kind: non-interactive
- Interaction reason: Status is a read-only mark. Clicking belongs to the listing row.

### Component: seller-card

**Semantics:** Link to the seller profile carrying trust score, label, deal count, and badges.

- Anatomy: nickname, trust score, trust label, deal count, badges
- Variants: compact, profile
- States: default, hover, focus-visible
- Token references: color.ink, color.paper, color.rule, color.accent, color.inset, radius.row, space.3

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Seller cards always resolve to a fixture seller. |
| loading | not-applicable | Seller records are local. |
| error | not-applicable | Unknown sellers use the error-panel. |
| success | not-applicable | Navigation is the success of the link. |

### Component: trust-meter

**Semantics:** Visualizes trust_score with trust_label and states the fixture basis in user language.

- Anatomy: numeric score, label, basis sentence, fill
- Variants: sprout, ordinary, warm
- States: default
- Token references: color.accent, color.inset, color.ink

- Interaction kind: non-interactive
- Interaction reason: Trust is a static fixture visualization, not a control.

### Component: chat-bubble

**Semantics:** Read-only preview bubble. Buyer left, seller right. Rendered only when a chat exists for the listing.

- Anatomy: author alignment, message text, relative time
- Variants: buyer, seller
- States: default
- Token references: color.inset, color.accent, color.on-accent, radius.thumb

- Interaction kind: non-interactive
- Interaction reason: Chat history is a preview. Sending is an unavailable-information node, not this component.

### Component: primary-button

**Semantics:** The single visible primary action of a view, marked data-cta=primary.

- Anatomy: label
- Variants: on-paper, on-accent
- States: default, hover, focus-visible, disabled
- Token references: color.accent, color.on-accent, size.hit, motion.fast

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | This front has no network mutation to wait on. |
| error | not-applicable | Errors belong to missing records, not this button. |
| success | not-applicable | Navigation and filter status regions announce outcomes. |

### Component: empty-panel

**Semantics:** Distinct empty surface when a filter combination yields no listings.

- Anatomy: heading, explanation, reset hint
- Variants: empty-filter, empty-free
- States: default
- Token references: color.inset, color.ink, color.rule

- Interaction kind: non-interactive
- Interaction reason: Empty copy is a display region. Reset is a separate filter control.

### Component: error-panel

**Semantics:** Honest missing-record surface for unknown listing or seller ids.

- Anatomy: heading, explanation, home link
- Variants: missing-item, missing-seller
- States: default, error
- Token references: color.inset, color.ink, color.accent

- Interaction kind: non-interactive
- Interaction reason: Error copy is a display region. The home link is a separate nav control.

### Rules

- Interactive components implement the applicable visual matrix in CSS: default, hover, focus-visible, and disabled when declared.

- Hover changes surface color or rule, not translation alone. Focus-visible is an immediate outline, never a fade.

- Listing rows and seller cards are whole-target links with no nested primary button.

- One primary CTA per view. Repeated per-item controls use data-cta=local and a different verb.

- Unavailable information renders as a named node with data-state=unavailable, not only a footer sentence.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Responsive constraints

- Minimum supported width: 320px
- Reflow target: 200% zoom

### Layout rules

- Home grammar: hero (eyebrow → display → lede → one action → neighborhood count rows) then filter band plus high-density listing-row list. At 1100px add a second row column. Gutters use space.gutter. Overflow-x is clip. Hero bottom padding is at least 1.3× top.

- Detail grammar: two-cut media on a 1/1 split at 720px, then seller, chat, and same-neighborhood rows. Measure for description stays near 40 Korean characters.

- Seller grammar: identity plate with trust meter, then status-grouped listing rows.

- Free grammar: same listing-row list as home, copy framed around 나눔, price column always the 나눔 word.

- Exactly one main and one h1 per view. Skip link targets #main. Primary controls stay inside the viewport and at least 44px.

- 320px and 200 percent reflow keep document scrollWidth less than or equal to clientWidth. Display headings use min-width 0 and overflow-wrap anywhere.

### Platform: web

- React + Vite SPA. Route changes scroll to top, move focus to the new h1, and update document.title.
- Touch targets are at least 44 CSS pixels. Hover elevation is limited to hover:hover and pointer:fine.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

- Speak as a neighbor in the alley, not as an admin console.

- Use fixture words: 판매중, 예약중, 거래완료, 나눔, 신뢰지수.

- Never show file names, field names, or framework terms.

### Terminology

| Term | Preferred form |
|---|---|
| free | 나눔 |
| listing | 매물 |
| neighborhood | 동네 |
| reserved | 예약중 |
| selling | 판매중 |
| sold | 거래완료 |
| trust | 신뢰지수 |

### Locale: ko (supported)

- html lang is ko. Body line-height 1.6 to 1.8. Display line-height 1.15 to 1.3.
- Prices: 129,000원. Free listings use 나눔 rather than 0원 as the primary price.
- Disclosure is one quiet footer meta line from service.disclosure. The footer above it is lockup, positioning, and a single nav group.

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

1. Prompt facts for routes, fixture-only data, and the four pages.

2. Repository facts from src/data/data.json and public/assets.

3. This established system contract.

4. Reference inspiration never overrides fixture fields.

### Additional change rules

- Token or component changes go through the decision table with a new D-id before product code.

- Do not invent records or endpoints that the fixture does not contain. The brand mark is system-drawn geometry from D-P4-2, not a fixture asset.

### Decision provenance

- identity.kind — prompt-fact; value: "project-system"; evidence: task.md, .benchmark/PROMPT.md
- experience.summary — agent-proposed-greenfield-decision; value: "이웃장터는 동네 직거래를 구경거리가 아니라 스캔 작업으로 본다. 밀도·신뢰·시간성을 얻기 위해 히어로 갤러리, 장식 크롬, 영구 카탈로그 느낌을 희생한다. 한 행에서 제목·가격·동네·시간·상태가 시선 한 번에 읽혀야 한다."; evidence: .omd/runs/yeoutjangteo/philosophy.md, .omd/runs/yeoutjangteo/council/design-system/result.json
- foundations.tokens.color.paper.$value — agent-proposed-greenfield-decision; value: "#f3eee4"; evidence: .omd/runs/yeoutjangteo/philosophy.md, .omd/runs/yeoutjangteo/council/design-system/result.json
- foundations.reduced_motion — prompt-fact; value: true; evidence: task.md, .benchmark/PROMPT.md
- layout_platforms.minimum_width_px — prompt-fact; value: 320; evidence: task.md
- content_locales.locales.0.locale — repository-fact; value: "ko"; evidence: src/data/data.json, .omd/runs/yeoutjangteo/data-inventory.md
- experience.live_inquiry_send — unresolved; evidence: src/data/data.json, .omd/runs/yeoutjangteo/council/interaction/result.json
- foundations.tokens.radius.row.$value — agent-proposed-greenfield-decision; value: "4px"; evidence: P-FN-07 painted-surface radius, D-P4-1
- foundations.tokens.size.masthead.$value — agent-proposed-greenfield-decision; value: "4.5rem"; evidence: P-FN-08 masthead height token, D-P4-3
- foundations.tokens.color.inverse-ink-muted.$value — agent-proposed-greenfield-decision; value: "#948c7e"; evidence: P-FN-10 / C45 4.91:1 on inverse-paper
- foundations.tokens.color.inverse-inset.$value — agent-proposed-greenfield-decision; value: "#3a342c"; evidence: P-FN-10 inverse hover plate
- foundations.tokens.color.inverse-rule.$value — agent-proposed-greenfield-decision; value: "#746c60"; evidence: P-FN-10 footer meta hairline
- foundations.tokens.size.row-min.$value — agent-proposed-greenfield-decision; value: "calc(72px + 12px * 2)"; evidence: P-FN-07 padding/min-height pair, D-P4-1
- identity.brand-mark — agent-proposed-greenfield-decision; value: "square lot + scan band"; evidence: P-FN-08, D-P4-2, experience.summary
