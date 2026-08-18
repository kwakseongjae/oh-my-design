# 온집 Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

온집은 가상의 홈 인테리어 커머스와 집들이 커뮤니티다. 사용자는 샘플 카탈로그를 둘러보고, 카테고리와 재고로 걸러 보고, 상품과 집들이 기록을 서로 조인해 확인한다.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

- 서비스 소개와 인기 상품, 집들이 프리뷰, 카테고리 진입을 홈에서 둘러본다

- 스토어에서 카테고리와 재고 상태로 거르고 가격 또는 평점으로 정렬한다

- 상품 한 건의 실제 레코드와 그 상품이 등장한 집들이를 확인한다

- 집들이를 집 유형으로 거른다

- 집들이 한 건의 요약과 조인된 사용 상품을 확인한다
<!-- design-md:claim-end -->

### Design direction

- Hairline-rule bands on warm paper, not identical radius-border widget cards

- Clay accent as a thin signal occupying little of any viewport

- Editorial commerce density: display statement plus provided product or tour imagery in a copy/figure diptych

- Dataset honesty is part of the chrome, not a footnote

### Principles

- Every number and list is computed from src/data/data.json at runtime

- stock_status and home_type are system token sets, not ad-hoc colors

- Aggregates state their definition beside the figure

- Unknown fields stay absent; unavailable information is a visible node

### Avoid

- Invented prices, dates, inventory counts, testimonials, or live network data

- Developer state switchers

- Unstyled native form controls

- Purple gradient genre defaults and full-bleed accent fills

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color-accent**: `#B4532A` — Clay accent signal. Use as a rule, mark, or inverted chip, not a wash.
- **color-accent-ink**: `#FAF6EF` — Ink on clay accent fills.
- **color-band**: `#E8DFD2` — Inverted band fill for section transitions.
- **color-danger**: `#8A2E28` — Error and sold-out action ink.
- **color-disabled**: `#6E655C` — Disabled ink on paper.
- **color-focus**: `#2A231C` — Focus-visible outline color.
- **color-home-apt**: `#3F3C52` — home_type token for 아파트.
- **color-home-house**: `#5A4534` — home_type token for 주택.
- **color-home-oneroom**: `#2F5346` — home_type token for 원룸.
- **color-home-tworoom**: `#4A5340` — home_type token for 투룸.
- **color-ink**: `#2A231C` — Warm ink. OKLCH approximately 0.24 0.018 65. Not pure black.
- **color-ink-muted**: `#5C5349` — Secondary ink for meta and labels.
- **color-paper**: `#F3EDE3` — Warm paper base. OKLCH approximately 0.94 0.015 85.
- **color-paper-raised**: `#FAF6EF` — Raised plate on paper. OKLCH approximately 0.97 0.012 85.
- **color-rule**: `#D4CBBE` — Hairline rule on paper.
- **color-stock-in**: `#215C41` — stock_status token for 판매중.
- **color-stock-low**: `#8A4A12` — stock_status token for 품절임박.
- **color-stock-out**: `#8A322C` — stock_status token for 품절.
- **elevation-hover**: `hairline rule darkens; plate does not gain a drop shadow`
- **elevation-rest**: `none`
- **motion-duration-base**: `200ms`
- **motion-duration-fast**: `120ms`
- **motion-duration-slow**: `320ms`
- **motion-easing-enter**: `cubic-bezier(0.2, 0.8, 0.2, 1)`
- **motion-easing-exit**: `cubic-bezier(0.4, 0, 1, 1)`
- **space-2**: `0.5rem`
- **space-3**: `0.75rem`
- **space-4**: `1rem`
- **space-5**: `1.25rem`
- **space-6**: `1.5rem`
- **space-8**: `2rem`
- **space-gutter**: `clamp(1rem, 4vw, 2.5rem)`
- **space-section**: `2.5rem`
- **space-section-lg**: `4rem`
- **space-section-xl**: `6rem`
- **type-body-size**: `1.0625rem`
- **type-display-size**: `clamp(2.5rem, 6vw, 4.5rem)`
- **type-display-tracking**: `-0.03em`
- **type-label-size**: `0.75rem`
- **type-label-tracking**: `0.14em`
- **type-title-size**: `clamp(1.75rem, 3vw, 2.5rem)`

### Contrast pairs

- color-ink on color-paper: minimum 4.5:1
- color-ink on color-paper-raised: minimum 4.5:1
- color-ink on color-band: minimum 4.5:1
- color-ink-muted on color-paper: minimum 4.5:1
- color-accent-ink on color-accent: minimum 4.5:1
- color-stock-in on color-paper: minimum 4.5:1
- color-stock-low on color-paper: minimum 4.5:1
- color-stock-out on color-paper: minimum 4.5:1
- color-disabled on color-paper: minimum 4.5:1
- color-danger on color-paper: minimum 4.5:1
- color-home-oneroom on color-paper: minimum 4.5:1
- color-home-tworoom on color-paper: minimum 4.5:1
- color-home-apt on color-paper: minimum 4.5:1
- color-home-house on color-paper: minimum 4.5:1

### Reduced motion

Required.

### Foundation rules

- All color, space, type, and motion values in product CSS come from these tokens as custom properties.

- Hover changes surface (background, border, or rule), not translation alone.

- Animate only transform and opacity, using motion duration and easing tokens.

- Reduced-motion users receive the equivalent static state with no entrance or hover motion.

- Accent coverage stays a small signal on any viewport.

- Section transitions use space-section steps and occasional color-band inversion, not identical gaps.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|---|
| display | Hero and page titles | Iowan Old Style, Palatino Linotype, Palatino, Songti SC, Apple SD Gothic Neo, serif | clamp(2.5rem, 6vw, 4.5rem) | 700 | 1.05 | -0.03em |
| title | Section headings | Iowan Old Style, Palatino Linotype, Palatino, Songti SC, Apple SD Gothic Neo, serif | clamp(1.75rem, 3vw, 2.5rem) | 700 | 1.15 | -0.02em |
| body | Prose, cards, and form copy | Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, sans-serif | 1.0625rem | 400 | 1.55 |  |
| label | Eyebrows, filter names, and aggregate definitions | Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, sans-serif | 0.75rem | 600 | 1.3 | 0.14em |

### Assets

| Asset | Kind | Source status | License status | Source | Notes |
|---|---|---|---|---|---|
| display-stack | font | project-owned | not-required | Local OS serif stack with Korean gothic fallback. No webfont file is shipped. | No official ONZIP typeface was provided. |
| body-stack | font | project-owned | not-required | Local OS gothic stack. No webfont file is shipped. |  |
| catalog-images | image | user-provided | not-required | public/assets/*.jpg — 24 product and 6 post photographs listed in public/assets/assets-manifest.json | Every img element declares width and height. |

### Rules

- Display step is at least twice body size through clamp.

- One display family and one body family; label uses the body family.

- Prose measure stays between 45 and 75 characters.

- Display headings use overflow-wrap anywhere and min-width 0.

- Provided images keep explicit width and height; motion applies to the frame, never the raw img.

<!-- design-md:section components-states -->
## 4. Components & States

### Component: skip-link

**Semantics:** First focusable control. Moves keyboard focus to #main. Never the primary CTA.

- Anatomy: visible-on-focus text, target #main
- Variants: default
- States: default, hover, focus-visible
- Token references: color-paper, color-ink, color-focus, motion-duration-fast

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | The skip link is always available. |
| loading | not-applicable | Navigation is immediate. |
| error | not-applicable | The skip link has no validation. |
| success | not-applicable | Arrival at main is not a success chrome state. |

### Component: app-nav

**Semantics:** Single site nav, identical on every page. Active destination uses aria-current=page.

- Anatomy: wordmark, primary links, disclosure of sample dataset
- Variants: home, store, posts
- States: default, hover, focus-visible
- Token references: color-paper, color-ink, color-rule, color-accent, type-label-size

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | All primary destinations exist. |
| loading | not-applicable | Client routing is synchronous. |
| error | not-applicable | Broken routes are page-level, not nav-level. |
| success | not-applicable | Current page is marked with aria-current, not a success state. |

### Component: button

**Semantics:** Exactly one visible primary CTA per view uses data-cta=primary. Per-item actions use data-cta=local and a different verb.

- Anatomy: label, optional mark
- Variants: primary, local, quiet
- States: default, hover, focus-visible, disabled
- Token references: color-ink, color-paper, color-accent, color-accent-ink, color-disabled, motion-duration-fast

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | No asynchronous submit exists. |
| error | not-applicable | Errors belong to missing records or empty filters. |
| success | not-applicable | Success is a status region, not a button skin. |

### Component: filter-chip

**Semantics:** Toggle filter. Selected option sets aria-pressed=true and a visible live summary names the active filter.

- Anatomy: native button, pressed mark, label from dataset
- Variants: category, stock, home-type
- States: default, hover, focus-visible
- Token references: color-ink, color-paper, color-rule, color-accent, color-stock-in, color-stock-low, color-stock-out

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Every dataset enum value remains choosable. |
| loading | not-applicable | Filtering is local and synchronous. |
| error | not-applicable | An empty intersection is an empty state, not a chip error. |
| success | not-applicable | Outcome is announced by a status region. |

### Component: sort-select

**Semantics:** Native select restyled from tokens. The selected option is both the programmatic and visible active sort.

- Anatomy: visible label, restyled native select, selected option
- Variants: price, rating
- States: default, hover, focus-visible
- Token references: color-ink, color-paper, color-rule, color-focus

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Sort remains available whenever the catalog is shown. |
| loading | not-applicable | Sorting is local and synchronous. |
| error | not-applicable | Sort has no invalid value in the closed option set. |
| success | not-applicable | The committed option text is the success evidence. |

### Component: product-card

**Semantics:** Links to /store/:id. Price is KRW with thousands separators. Stock uses the system token set.

- Anatomy: media frame, brand, name, price, rating, stock badge, local action
- Variants: grid, joined
- States: default, hover, focus-visible
- Token references: color-paper, color-ink, color-rule, color-stock-in, color-stock-low, color-stock-out

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Every catalog record remains openable, including sold-out items. |
| loading | not-applicable | Images and records are local. |
| error | not-applicable | Missing ids use the error-notice, not the card. |
| success | not-applicable | Opening a record is a route change. |

### Component: post-card

**Semantics:** Links to /posts/:id. Home type uses the system token set. Area and likes come from the record.

- Anatomy: cover, home-type badge, area, likes, title
- Variants: grid, preview
- States: default, hover, focus-visible
- Token references: color-paper, color-ink, color-home-oneroom, color-home-tworoom, color-home-apt, color-home-house

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Every post record remains openable. |
| loading | not-applicable | Covers are local files. |
| error | not-applicable | Missing ids use the error-notice. |
| success | not-applicable | Opening a post is a route change. |

### Component: stock-badge

**Semantics:** Non-interactive status from products.stock_status. Color and label map 1:1 to the enum.

- Anatomy: mark, status label
- Variants: 판매중, 품절임박, 품절
- States: default
- Token references: color-stock-in, color-stock-low, color-stock-out

- Interaction kind: non-interactive
- Interaction reason: Stock status is a read-only token mark. It is not a control.

### Component: home-type-badge

**Semantics:** Non-interactive home_type token mark.

- Anatomy: mark, type label
- Variants: 원룸, 투룸, 아파트, 주택
- States: default
- Token references: color-home-oneroom, color-home-tworoom, color-home-apt, color-home-house

- Interaction kind: non-interactive
- Interaction reason: Home type is a read-only token mark. Filtering uses filter-chip.

### Component: media-frame

**Semantics:** Provided photographs sit in a framed figure. Decorative treatment is aria-hidden when the img already has alt.

- Anatomy: img with width and height, frame
- States: default
- Token references: color-band, color-rule

- Interaction kind: non-interactive
- Interaction reason: Media is a figure, not a control. Motion applies to the frame only.

### Component: empty-state

**Semantics:** Distinct dashed surface for a filter intersection of zero records. Names the active filters.

- Anatomy: dashed plate, title, definition of the empty query
- States: default
- Token references: color-paper, color-ink, color-rule

- Interaction kind: non-interactive
- Interaction reason: Empty is a display surface produced by filters, not a focusable widget.

### Component: error-notice

**Semantics:** Honest missing-record region. Visible id is the requested param. role=alert when the view is an error.

- Anatomy: region, missing id, recovery link
- States: default, error
- Token references: color-danger, color-paper, color-ink

- Interaction kind: non-interactive
- Interaction reason: Error copy is a display region. Recovery is a standard link, not this surface.

### Component: disclosure-banner

**Semantics:** Renders data.json disclosure on every page in a visible, accessible position.

- Anatomy: sample mark, verbatim dataset disclosure
- States: default
- Token references: color-band, color-ink

- Interaction kind: non-interactive
- Interaction reason: Disclosure is required chrome copy, not a control.

### Component: unavailable-info

**Semantics:** Visible unavailable-information node. Names the withheld category. data-state=unavailable.

- Anatomy: node, named withheld category, dataset field that is absent
- States: default
- Token references: color-band, color-ink-muted

- Interaction kind: non-interactive
- Interaction reason: Unavailable information is an honesty node, not a control.

### Rules

- Pages consume these components and do not invent local color or type values.

- Interactive components implement only applicable states; non-interactive components do not claim focus contracts.

- Focus is an instant outline using color-focus, never a fading ring.

- Native inputs stay in the tree under restyled chrome.

- Primary CTA uniqueness: one data-cta=primary per view.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Responsive constraints

- Minimum supported width: 320px
- Reflow target: 200% zoom

### Layout rules

- Document scrollWidth must not exceed clientWidth at 320, 390, and 1440.

- Primary action stays inside the viewport.

- Touch targets are at least 44 by 44 CSS pixels except inline prose links.

- Fixed-count grids use authored 1/2/3 column breakpoints, never auto-fit.

- Grid tracks are minmax(0, 1fr). overflow-x is clip.

- Nav and CTA labels do not wrap at any supported width.

### Platform: web

- React 18 and react-router-dom 6 routes: /, /store, /store/:id, /posts, /posts/:id.
- One shared stylesheet owns tokens and components.
- html lang is ko.
- No runtime network requests.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

- Calm, specific, and editorial. Address the reader in polite Korean.

- Name definitions next to aggregates. Do not market fictional scarcity.

- Label sample records as sample through the dataset disclosure.

### Terminology

| Term | Preferred form |
|---|---|
| home tour | 집들이 |
| in stock | 판매중 |
| low stock | 품절임박 |
| pyeong | 평 |
| sold out | 품절 |
| store | 스토어 |

### Locale: ko (supported)

- All product chrome, filters, and honesty copy are Korean.
- Prices use 원 with thousands separators from price_krw.
- Ratings display rating_x10 divided by 10 with one decimal.

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

1. Prompt facts and the dataset outrank visual preference

2. Repository files outrank agent proposals

3. Unresolved values stay absent from tokens, copy, and code

### Additional change rules

- Change tokens in the system module first, then pages consume them.

- Do not add routes, fields, or packages outside package.json.

### Decision provenance

- /identity/name — prompt-fact; value: "온집"; evidence: .benchmark/PROMPT.md
- /identity/kind — agent-proposed-greenfield-decision; value: "project-system"; evidence: .omd/runs/onzip-home/design-system-decision.json
- /identity/scope — prompt-fact; value: "Korean-language web storefront for the fictional ONZIP home-interior commerce and community service inside this React and Vite workspace."; evidence: .benchmark/PROMPT.md
- /experience/summary — prompt-fact; value: "온집은 가상의 홈 인테리어 커머스와 집들이 커뮤니티다. 사용자는 샘플 카탈로그를 둘러보고, 카테고리와 재고로 걸러 보고, 상품과 집들이 기록을 서로 조인해 확인한다."; evidence: .benchmark/PROMPT.md, src/data/data.json
- /foundations/reduced_motion — prompt-fact; value: true; evidence: .benchmark/PROMPT.md
- /foundations/tokens/color-ink/$value — agent-proposed-greenfield-decision; value: "#2A231C"; evidence: .omd/runs/onzip-home/council/design-system/result.json
- /foundations/tokens/color-paper/$value — agent-proposed-greenfield-decision; value: "#F3EDE3"; evidence: .omd/runs/onzip-home/council/design-system/result.json
- /foundations/tokens/color-stock-in/$description — repository-fact; value: "stock_status token for 판매중."; evidence: src/data/data.json, .omd/runs/onzip-home/data-inventory.md
- /layout_platforms/minimum_width_px — prompt-fact; value: 320; evidence: .benchmark/PROMPT.md
- /content_locales/locales/0/locale — prompt-fact; value: "ko"; evidence: .benchmark/PROMPT.md, index.html
- /typography_assets/official-brand-typeface — unresolved; evidence: .omd/runs/onzip-home/data-inventory.md
- /experience/published-at-field — unresolved; evidence: src/data/data.json, .omd/runs/onzip-home/data-inventory.md
- /experience/live-stock-quantity — unresolved; evidence: src/data/data.json, .omd/runs/onzip-home/data-inventory.md
