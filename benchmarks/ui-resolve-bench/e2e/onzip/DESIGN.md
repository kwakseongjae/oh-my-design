# 온집 Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

온집은 가상 샘플 카탈로그로 가구와 집들이를 둘러보는 커머스 커뮤니티다. 사용자는 카테고리와 재고로 상품을 거르고, 가격·평점으로 정렬하며, 상품과 집들이를 서로 조인해 살펴본다.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

- 홈에서 서비스 소개와 리뷰 수 상위 상품, 수록 순서 집들이, 카테고리 입구를 본다

- 스토어에서 여섯 카테고리와 재고 상태로 거르고 가격 또는 평점으로 정렬한다

- 상품 상세에서 레코드와 그 상품이 등장한 집들이를 본다

- 집들이 목록을 집 유형으로 거르고 상세에서 사용된 상품을 조인해 본다

- 없는 상품·게시글 주소와 빈 필터, 제공되지 않는 정보를 정직하게 본다
<!-- design-md:claim-end -->

### Design direction

- Shadowed-tile commerce catalog with generous product media and a dominant price hierarchy

- Warm paper and ink neutrals with one terracotta accent used as a small signal

- Enum tokens for stock_status and home_type so status is readable at a glance

- Korean gothic display and body pair; restrained compositor-only motion behind reduced-motion

### Principles

- Numbers and lists are computed from the imported dataset at runtime

- Every shown aggregate states its definition next to the figure

- Unknown fields stay absent; withheld categories become a visible unavailable-information node

- Pages consume system tokens and shared components only

### Avoid

- Invented prices, review text, shipping, live quantities, or timestamps

- Developer state switchers

- Unstyled native form controls

- Implementation vocabulary in the user interface

- Network requests or extra packages

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color.accent**: `#b44a24` — Single terracotta accent signal
- **color.accent-ink**: `#fff6ee` — Ink counterpart on accent fills
- **color.home-apt**: `#4a4f6b` — home_type 아파트
- **color.home-house**: `#6b4a32` — home_type 주택
- **color.home-oneroom**: `#3d5a4a` — home_type 원룸
- **color.home-tworoom**: `#4a5560` — home_type 투룸
- **color.ink**: `#2c261f` — Warm ink oklch(0.27 0.018 60)
- **color.line**: `#e2d8c8` — Hairline on paper
- **color.muted**: `#6a6158` — Secondary ink for meta copy
- **color.paper**: `#f4efe6` — Warm paper ground oklch(0.96 0.014 85)
- **color.stock-in**: `#2c6a4d` — stock_status 판매중
- **color.stock-low**: `#8f4f10` — stock_status 품절임박
- **color.stock-out**: `#8a3535` — stock_status 품절
- **color.surface**: `#fffaf3` — Raised tile surface
- **color.tint**: `#ebe3d6` — Tinted neutral band
- **elevation.hover**: `0 16px 36px oklch(0.27 0.018 60 / 0.14)` — Tile hover
- **elevation.rest**: `0 10px 28px oklch(0.27 0.018 60 / 0.08)` — Tile rest
- **motion.base**: `200ms` — Hover elevation
- **motion.enter**: `0.22 1 0.36 1` — Enter easing
- **motion.exit**: `0.4 0 1 1` — Exit easing
- **motion.fast**: `120ms` — Press and focus
- **motion.slow**: `320ms` — Section entrance
- **radius.control**: `0.5rem` — Control radius, distinct from tiles
- **radius.tile**: `1.25rem` — Tile radius for media and cards
- **space.1**: `4px` — Tight meta gap
- **space.2**: `8px` — In-card row gap
- **space.3**: `12px` — Control padding
- **space.4**: `16px` — Card body padding
- **space.5**: `24px` — Cluster gap
- **space.6**: `2.5rem` — Section air small
- **space.7**: `4rem` — Section air medium
- **space.8**: `6rem` — Section air large
- **space.gutter**: `clamp(1rem, 4vw, 2.5rem)` — Viewport gutter
- **type.body**: `1rem` — Body size
- **type.display**: `clamp(2rem, 5vw, 3.25rem)` — Display step at least 2x body
- **type.label**: `0.75rem` — Label role

### Contrast pairs

- color.ink on color.paper: minimum 4.5:1
- color.ink on color.surface: minimum 4.5:1
- color.muted on color.paper: minimum 4.5:1
- color.accent on color.paper: minimum 4.5:1
- color.accent-ink on color.accent: minimum 4.5:1
- color.stock-in on color.paper: minimum 4.5:1
- color.stock-low on color.paper: minimum 4.5:1
- color.stock-out on color.paper: minimum 4.5:1
- color.paper on color.ink: minimum 4.5:1

### Reduced motion

Required.

### Foundation rules

- One surface genre: shadowed tiles. Accent coverage stays a small signal.

- Color tokens are hex bindings of warm OKLCH recipes; product CSS mirrors them as custom properties.

- Stock and home-type enums each map to one color token and a persistent mark.

- Motion animates only transform and opacity, always behind prefers-reduced-motion.

- Section spacing uses space.6 through space.8; control padding uses space.2 through space.4.

- Never animate layout properties or use transition:all.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|---|
| display | Page titles and hero statement | Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, sans-serif | clamp(2rem, 5vw, 3.25rem) | 800 | 1.22 | -0.01em |
| body | Prose, summaries, and card copy | Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, sans-serif | 1rem | 400 | 1.7 | 0 |
| label | Section eyebrows, filter labels, badges | Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, sans-serif | 0.75rem | 700 | 1.3 | 0.08em |

### Assets

| Asset | Kind | Source status | License status | Source | Notes |
|---|---|---|---|---|---|
| korean-gothic-stack | font | user-provided | not-required | Local Korean gothic fallback stack; no webfont package is installed | Hangul coverage via Pretendard if present, otherwise Apple SD Gothic Neo / Noto Sans KR / Malgun Gothic |
| catalog-photographs | image | user-provided | not-required | public/assets/*.jpg (24 product, 6 post) | Explicit width and height from each JPEG; decorative wrappers stay aria-hidden when the adjacent text names the record |

### Rules

- All Korean prose and headings use word-break: keep-all; display headings also use overflow-wrap: anywhere.

- No Latin serif face is allowed to carry Hangul.

- Prices use tabular figures and thousands separators with 원 after the number.

- Provided images always declare width and height; motion applies to the container, never the raw img.

<!-- design-md:section components-states -->
## 4. Components & States

### Component: skip-link

**Semantics:** First focusable control; skips to #main, never to the primary CTA.

- Anatomy: visible-on-focus label
- Variants: to-main
- States: default, hover, focus-visible
- Token references: color.accent-ink, color.accent, motion.fast

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Skip link is always available. |
| loading | not-applicable | No remote work. |
| error | not-applicable | Navigation only. |
| success | not-applicable | Navigation only. |

### Component: button

**Semantics:** Primary chrome or hero CTA uses data-cta=primary once per view; per-item actions use data-cta=local.

- Anatomy: label, optional leading mark
- Variants: primary, secondary, ghost
- States: default, hover, focus-visible, disabled
- Token references: color.accent, color.accent-ink, color.ink, color.paper, radius.control, motion.fast

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | Catalog is a local import with no mutation. |
| error | not-applicable | Buttons do not validate remote writes. |
| success | not-applicable | Success is a detail region, not a button state. |

### Component: nav-link

**Semantics:** Shared primary navigation; the active route sets aria-current=page.

- Anatomy: label, current mark
- Variants: header
- States: default, hover, focus-visible
- Token references: color.ink, color.paper, color.accent, type.label

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Routes stay reachable; current is marked, not disabled. |
| loading | not-applicable | Client-side routing of local views. |
| error | not-applicable | Broken ids are handled by the destination page. |
| success | not-applicable | Current page mark is not a success state. |

### Component: filter-chip

**Semantics:** Restyled radio or checkbox; selected option is both programmatic and visible; filters announce a live summary.

- Anatomy: native input, visible label, selected mark
- Variants: category, stock, home-type
- States: default, hover, focus-visible
- Token references: color.ink, color.surface, color.accent, color.line, radius.control

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Every enum value in the dataset remains choosable. |
| loading | not-applicable | Filtering is synchronous over the imported file. |
| error | not-applicable | Invalid combinations produce an empty collection, not a field error. |
| success | not-applicable | Result count is announced by a status region. |

### Component: select-control

**Semantics:** Restyled native select for price and rating sort; selected option stays visible.

- Anatomy: label, native select, custom chevron
- Variants: sort
- States: default, hover, focus-visible
- Token references: color.ink, color.surface, color.line, radius.control

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Sort remains available whenever the grid is shown. |
| loading | not-applicable | Sort is synchronous. |
| error | not-applicable | Only the provided sort keys exist. |
| success | not-applicable | Sorted grid is the default collection view. |

### Component: product-card

**Semantics:** Catalog tile linking to /store/:id with data-cta=local. Price sits next to the title; action is separated.

- Anatomy: media, brand, name, price, rating-meta, stock-badge, local-action
- Variants: grid, join
- States: default, hover, focus-visible
- Token references: color.surface, color.ink, color.muted, elevation.rest, elevation.hover, radius.tile, space.4

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Sold-out records remain inspectable; only the purchase verb disables. |
| loading | not-applicable | Images are local assets. |
| error | not-applicable | Missing records use the error-panel, not a broken card. |
| success | not-applicable | Selection navigates to the detail route. |

### Component: post-card

**Semantics:** Housewarming tile linking to /posts/:id.

- Anatomy: cover, home-type-badge, title, area, likes
- Variants: grid, preview
- States: default, hover, focus-visible
- Token references: color.surface, color.ink, color.muted, elevation.rest, radius.tile

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Every listed post is openable. |
| loading | not-applicable | Covers are local assets. |
| error | not-applicable | Unknown ids use the error-panel. |
| success | not-applicable | Opening the post is a route change. |

### Component: stock-badge

**Semantics:** Non-interactive stock_status token. Color and label always travel together.

- Anatomy: swatch, label
- Variants: 판매중, 품절임박, 품절
- States: default
- Token references: color.stock-in, color.stock-low, color.stock-out, type.label

- Interaction kind: non-interactive
- Interaction reason: Status display only; filtering uses filter-chip.

### Component: home-type-badge

**Semantics:** Non-interactive home_type token.

- Anatomy: swatch, label
- Variants: 원룸, 투룸, 아파트, 주택
- States: default
- Token references: color.home-oneroom, color.home-tworoom, color.home-apt, color.home-house, type.label

- Interaction kind: non-interactive
- Interaction reason: Type display only; filtering uses filter-chip.

### Component: empty-panel

**Semantics:** Distinct dashed empty surface when a filter combination returns zero records.

- Anatomy: title, definition, reset-action-slot
- Variants: filter
- States: default
- Token references: color.tint, color.ink, radius.tile

- Interaction kind: non-interactive
- Interaction reason: Empty collection panel; reset is a nested button.

### Component: error-panel

**Semantics:** Honest missing-id region with role=alert naming the requested identifier.

- Anatomy: title, requested-id, recovery-link-slot
- Variants: missing-record
- States: default, error
- Token references: color.stock-out, color.paper, color.ink

- Interaction kind: non-interactive
- Interaction reason: Error display; recovery is a nested link.

### Component: unavailable-panel

**Semantics:** Visible unavailable-information node that names withheld categories: live quantity, shipping, calendar recency, network loading.

- Anatomy: category-name, honest-absence-sentence
- Variants: information
- States: default
- Token references: color.tint, color.ink, type.label

- Interaction kind: non-interactive
- Interaction reason: Honesty ledger surface, not a control.

### Component: disclosure

**Semantics:** Dataset disclosure rendered as visible accessible copy on every page.

- Anatomy: sample-sentence
- Variants: footer, detail
- States: default
- Token references: color.muted, color.paper

- Interaction kind: non-interactive
- Interaction reason: Legal-honest copy, not a control.

### Component: price-display

**Semantics:** Formats price_krw with thousands separators and a trailing 원.

- Anatomy: amount, won-unit
- Variants: card, detail
- States: default
- Token references: color.ink

- Interaction kind: non-interactive
- Interaction reason: Numeric display.

### Rules

- Interactive components implement applicable states in code; hover changes surface, not only transform.

- Native inputs stay functional under restyled marks; appearance is removed.

- Exactly one visible primary CTA per view; repeated item actions use a different verb.

- data-state markers live on the real component that entered the state.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Responsive constraints

- Minimum supported width: 320px
- Reflow target: 200% zoom

### Layout rules

- Supported viewports are 320, 390, and 1440 CSS pixels plus 200 percent reflow.

- Document scrollWidth must not exceed clientWidth; overflow-x is clip.

- Primary actions stay inside the viewport; touch targets are at least 44 by 44 CSS pixels except inline prose links.

- Store and post grids use authored 1/2/3 column tracks with minmax(0, 1fr), never auto-fit.

- Hero is a copy/figure diptych; nav labels do not wrap.

- One main landmark and one h1 per rendered view.

### Platform: web

- React Router 6 client routes in a Vite SPA.
- Route changes scroll to top, move focus to the new h1, and update document.title.
- Below-the-fold images use loading=lazy; the hero image does not.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

- Warm, concrete Korean. Name objects the shopper can see.

- Aggregate definitions use shopper language, never file or field names.

- Disclosure is one quiet footer line, plus the money-bearing detail pages.

### Terminology

| Term | Preferred form |
|---|---|
| home-type | 집 유형 |
| in-stock | 판매중 |
| low-stock | 품절임박 |
| posts | 집들이 |
| price | 가격 |
| rating | 평점 |
| sold-out | 품절 |
| store | 스토어 |

### Locale: ko (supported)

- html lang=ko on every view.
- Hangul keep-all; body line-height 1.6 to 1.8; display tracking no tighter than -0.01em.
- Won formatting: 129,000원.

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

1. Prompt facts for routes, stack, disclosure, and required pages

2. Repository facts from src/data/data.json and provided images

3. This system contract

4. Agent-proposed greenfield tokens where no brand source exists

### Additional change rules

- Do not invent records, prices, or timestamps.

- Enum token sets stay bound to values present in the dataset.

### Decision provenance

- identity.name — prompt-fact; value: "온집"; evidence: .benchmark/PROMPT.md
- identity.kind — prompt-fact; value: "project-system"; evidence: .benchmark/PROMPT.md
- foundations.tokens.color.stock-in.$value — agent-proposed-greenfield-decision; value: "#2c6a4d"; evidence: .omd/runs/onzip-home/council/design-system/result.json
- unresolved.live-stock-quantity — unresolved; evidence: src/data/data.json, .omd/runs/onzip-home/data-inventory.md
- unresolved.shipping-estimate — unresolved; evidence: src/data/data.json, .omd/runs/onzip-home/data-inventory.md
- unresolved.post-published-at — unresolved; evidence: src/data/data.json, .omd/runs/onzip-home/data-inventory.md
