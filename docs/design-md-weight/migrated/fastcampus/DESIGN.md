# Fastcampus Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Fastcampus (패스트캠퍼스) is a Korean adult-upskilling marketplace operated by Day1Company (데이원컴퍼니), the umbrella that also runs Colosso for high-end masterclasses and RealClass for hobby and language. Its catalog covers IT, design, business, finance, language, and lifestyle. This contract covers the first-party web surfaces inspected live on 2026-05-15: the home storefront `https://fastcampus.co.kr/`, which established every measured value below, and a second route `https://fastcampus.co.kr/category_online_all`, from which the source carries structural confirmation of the same global navigation. Course-detail, cart, payment, and footer surfaces are the ones the source itself names as still needing a check; nothing below should be read as covering them.

The engine behind the measured values is an internal design system the site exposes but does not publish: 103 `--fds-color-*` and `--c-primary-*` CSS custom properties on `:root` of `fastcampus.co.kr`, carrying a full 10-shade ramp per hue (50/100/200/300/400/500/600/700/800/900) plus semantic role tokens (`--fds-semantic-primary-primary = #fc1c49`, `--fds-semantic-label-primary = #171b1f`). The `fds-` prefix is that system's own namespace. The source searched for a public design-system site, a Figma Community kit, and an org-level token or Storybook repository and reached none of them, and records that negative result explicitly; the runtime custom properties are the form in which the system was reachable in that pass.

The signature is crimson-red `#fc1c49`: `--c-primary` and `--fds-semantic-primary-primary` are pinned to the same value, with `--c-primary-darken = #c9032a` and `--c-primary-darken-renewal = #d60039` behind it. The source reads that red as a commerce red rather than a warning red — landing on enrolment CTAs, sale-price strikethroughs, and limited-time banners while form and validation errors take the separate `--fds-color-red-*` ramp — and reads the 4px-everywhere geometry, the one-accent-hue-per-rail arrangement, and the rank badges together as a deliberate "programmed market" register set against a calmer catalog competitor. Both readings are a derived editorial implementation inference from the verified surfaces; they are not Fastcampus-authored or a separately published UI specification. What the inspection establishes on its own is where each value sits.

Fastcampus was founded in 2014 under Day1Company. The source attributes that founding and the parent-company structure to public Korean tech-press coverage rather than to a Fastcampus publication, and records that founder, exact founding-month, and headcount details are not exhaustively verified from public English-language sources, anchoring the rest of its narrative to publicly observable brand artifacts — site copy, course catalog structure, and parent-company branding. Reading the brand name as *fast + campus*, a compressed academic experience for adults who cannot take a semester off, and reading the move from an early-2010s blue-and-white directory page to today's rich-color catalog as the visual signal of that positioning, are derived editorial implementation inferences from the verified surfaces; they are not Fastcampus-authored or a separately published brand statement.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

The first four are actions the 2026-05-15 home inspection recorded controls for. The fifth is the outcome the source names as the platform's purpose and for which it records the CTA labels; the source marks the control that carries it as inference from the primary semantic token plus the category-pill measurements rather than a directly inspected sample.

- Browse the course catalog by category from the home category-pill carousel (`전체`, `AI TECH`, `AI CREATIVE`, `디자인`, `영상/3D`).
- Compare top-ranked course tiles by their rank badge and enrolment count (`1위`, `1,940+`).
- Page through the home banner carousel with its arrow and list controls (`이전 배너`, `다음 배너`, `배너 목록`).
- Reach the secondary global-navigation destinations (`커뮤니티`, `기업교육`).
- Enrol in and pay for a course (`수강신청 하기`, `결제하기`, `장바구니에 담기`).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its persona entries as inferred from observable surface targeting on the two inspected routes rather than taken from a published Fastcampus persona document, so their ages, buying patterns, and segment descriptions are not carried into this contract and none of them is treated as a verified task. Use group level only, at the granularity the surfaces themselves name: individual learners browsing the public course catalog, and the corporate-training track the global navigation exposes as `기업교육`. Naming those two as the audience groups is a derived editorial implementation inference from the verified surfaces; it is not Fastcampus-authored or a separately published segmentation.

### Distinctive traits

The values below are the recorded ones. Where an item describes how a value is used rather than what it is — the per-band hue convention, the inverted GNB density read as a signature, the two radius vocabularies read as one system — that usage reading is a derived editorial implementation inference from the verified surfaces; it is not Fastcampus-authored or a separately published UI specification.

- Pretendard Variable as the primary family, with `Apple SD Gothic Neo` on `html` and a full Korean fallback chain on `body`
- Signature crimson `#fc1c49` (`--c-primary`, `--fds-semantic-primary-primary`) for enrolment, sale, and limited-time surfaces; `#c9032a` for pressed; `#d60039` for the refreshed campaign skin
- A rich Material-style 10-shade palette (`--fds-color-{yellow,orange,red,pink,green,blue,neutral}-{50..950}`) in which yellow `#ffeb3b` / `#fdd835`, orange `#f8930f`, pink `#e91e63`, green `#43a047`, and blue `#3b83ff` all live on the home rail at once
- Two radius vocabularies: `4px` flat for category pills and banner-list buttons, and `4px 4px 0 0` for course cards, top-rounded against the thumbnail seam
- Banner headlines at 40px / 700, set two-line
- Rank badges as dark `#171b1f` corner-clipped overlays on the tile corner, carrying `1위 / 2위 / 3위` and the `1,940+` enrolment count
- Category-pill carousel: black-on-white when selected (`#000` / `#fff`, radius 4px, 14px / 600), gray-on-gray when not (`#f5f5f6` fill, `#747678` label) across an 11-plus category strip
- Zero `box-shadow` on the category-pill and rank-badge layer, so separation is carried by color contrast rather than elevation
- GNB links at 16px / 400 alongside a 12px / 600 smaller-bolder cluster — an inverted density between the primary and the secondary nav

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not Fastcampus-authored or a separately published UI specification. Each restates one of the source's own principles together with the UI implication the source attaches to it.

1. **Time is part of the offer.** Cohort start dates, discount end dates, and seat counts are first-class UI content, not legal fine print. *UI implication:* a primary CTA may carry a deadline or seat-count badge, and the system must support a time-pressure surface — countdown text in `--c-primary`, deadline pill in `--fds-color-orange-200`.
2. **Rich color, per band.** The home page assigns one accent hue per content rail: yellow for `0원 / 사전알림`, orange for early-bird discount, blue for developer and data, pink for design and creative, red for primary commerce. *UI implication:* never mix two accent hues inside one card; the rail-level hue is the spatial wayfinding.
3. **Rank is a number, not a story.** `1위 / 1,940+` lives in a corner badge with no editorialized adjective. *UI implication:* if a tile needs the word `최고의`, the rank badge has failed — use the raw rank and the raw count.
4. **4px everywhere, top-rounded on cards.** One radius vocabulary plus the `4px 4px 0 0` card-with-thumbnail convention. *UI implication:* a full-pill radius on a CTA is a tonal mistake; the surface should read as a structured market rather than a social feed.
5. **Casual-polite, not formal.** `~해요 / ~하기 / ~만나자` on product surfaces; `~합니다` reserved for legal, refund, and receipt screens. *UI implication:* keep `~하시기 바랍니다` and `~하실 수 있습니다` out of CTA and banner copy.

### Avoid

These 8 prohibitions are a derived editorial implementation inference from the verified surfaces; they are not Fastcampus-authored or a separately published UI specification. Six restate the source's own prohibition list; the last two are evidence-boundary rules that follow from the surface limits stated in Scope.

- Do not apply a full-pill radius to a CTA or to category navigation — the recorded geometry is a sharper 4px rectangle.
- Do not mix two accent hues inside a single card; yellow and orange are two adjacent accent slots, not a primary/secondary brand-color duo.
- Do not use the commerce red `#fc1c49` for system errors — form and validation errors belong to the separate `--fds-color-red` ramp, for example `#c5213b`.
- Do not adopt `--swiper-theme-color` `#007aff` as a brand token; it is the Swiper.js library default that surfaced in the custom-property dump.
- Do not editorialize ranking with superlative prose such as `최고의 강의` or `압도적 1위`, and do not add emoji or `!!!` tails on price or enrolment surfaces — the corner badge and the raw count already carry the proof.
- Do not add elevation with `box-shadow` on the category-pill or rank-badge layer, and do not introduce parallax or scroll-triggered hero animation; depth comes from color contrast, and the card hover micro-scale (1.0 → 1.02) is the only ambient motion outside the carousel.
- Do not present these two inspected routes as proof of Fastcampus behaviour on course-detail, cart, or payment surfaces.
- Do not substitute a system stack or another family for Pretendard Variable when reproducing these surfaces.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

**Primary (commerce red)**

- **Primary Red** (`#fc1c49`) — `--c-primary` and `--fds-semantic-primary-primary`, pinned to the same value by the system. Enrolment CTA, sale-price highlight, limited-time banners, time-left countdown text.
- **Primary Darken** (`#c9032a`) — `--c-primary-darken`. Pressed and active CTA, hover on a red link.
- **Primary Darken Renewal** (`#d60039`) — `--c-primary-darken-renewal`. Campaign-refresh skin variant used on seasonal home banners.
- **Primary Low** (`#ffdad8`) — `--fds-semantic-primary-primary-low`. Tinted red surface: sale-tag fill, primary-CTA hover scrim.
- **Primary RGB tuple** (`237, 35, 75`) — `--c-primary-rgb`, exposed alongside `--c-primary` so `rgba(var(--c-primary-rgb), 0.X)` can mix alpha for hover scrims and red gradient backdrops without a second hex.
- **Error Red** (`#c5213b`) — the `red-600` step of the separate error ramp. The source assigns system errors here rather than to the brand primary, and separately records the commerce red doubling as the inline-validation color; both statements are carried, in Avoid and in the state contract.

**Neutrals — the full `--fds-color-neutral-*` ladder**

| Token | Value | Use |
|---|---|---|
| `neutral-30` | `#f5f5f6` | Default neutral surface — category-pill rest bg, secondary chip fill |
| `neutral-50` | `#e7e7e8` | Soft divider, skeleton block bg |
| `neutral-100` | `#cfd0d1` | Neutral border light |
| `neutral-200` | `#b7b9ba` | Neutral border default |
| `neutral-300` | `#a0a2a3` | Disabled icon fill |
| `neutral-400` | `#8a8c8d` | Caption / metadata bottom tier |
| `neutral-500` | `#747678` | Muted text / unselected-pill label |
| `neutral-600` | `#5f6163` | Secondary body text |
| `neutral-700` | `#4b4d4f` | Strong body text |
| `neutral-800` | `#37393b` | Heading on light surface |
| `neutral-900` | `#252729` | Heading display |
| `neutral-950` | `#171b1f` | `--fds-semantic-label-primary` — body, banner overlay text, rank-badge fill |

**Static neutrals**

- **Static White** (`#fff`, recorded as `#ffffff` in the token set) — `--fds-color-static-white`. Theme-independent white; it does not flip in a dark theme.
- **Static Black** (`#000`) — `--fds-color-static-black`. Theme-independent black; recorded as the selected category-pill background.

**Semantic role tokens (FDS namespace)**

- **Semantic Primary** (`#fc1c49`) — `--fds-semantic-primary-primary`.
- **Semantic Primary Low** (`#ffdad8`) — `--fds-semantic-primary-primary-low`.
- **Semantic Label Primary** (`#171b1f`) — the default text role on light surfaces.

**Extended hue ramps**

Each hue carries a full 10-shade Material-style ladder. The source records the shipped color frequency on the home route as a per-band convention: each home-page section claims one accent hue for its category tag, badge, and gradient backdrop. Reading that frequency as an intentional convention rather than a coincidence of content is a derived editorial implementation inference from the verified surfaces; it is not Fastcampus-authored or a separately published UI specification.

- **Yellow** (`#fffde7 / #fff9c4 / #fff59d / #fff176 / #ffee58 / #ffeb3b / #fdd835 / #fbc02d / #f9a825 / #f57f17`) — the `0원 사전 알림` lemon banner and free-class promotion.
- **Orange** (`#fef4e7 / #fddeb5 / #fccd91 / #fab75e / … / #f8930f / #e2860e / #b0680b / #885108 / #683e06`) — the early-bird discount band and `최대 25% 할인` rails. The ramp's fifth step is elided because the value recorded for it is not a renderable hex; the other nine are carried as recorded.
- **Red** (`#ffeceb / #ffdad8 / #ffb4b2 / #ff8d8d / #ff616a / #fc1c49 / #c5213b / #91202d / #601c20 / #331414`) — primary plus error scale; `red-500 = #fc1c49` is the canonical primary.
- **Pink** (`#fce4ec / #f8bbd0 / #f48fb1 / #f06292 / #ec407a / #e91e63 / #d81b60 / #c2185b / #ad1457 / #880e4f`) — creative and design category accent, the `비주얼 브랜딩` rails.
- **Green** (`#e8f5e9 / #c8e6c9 / #a5d6a7 / #81c784 / #66bb6a / #4caf50 / #43a047 / #388e3c / #2e7d32 / #1b5e20`) — success state, the `수강신청 완료` toast (enrolment-complete confirmation), course-progress complete bar.
- **Blue** (`#ebf3ff / #c2d9ff / #a5c6ff / #7cacff / #629cff / #3b83ff / #3677e8 / #2a5db5 / #20488c / #19376b`) — developer and data category accent, the `Codex 기반 AI 인증시험` rails.
- **Neutral** — the ladder tabled above.

**Color rules**

- Yellow and orange shades cohabit on the same fold — the free-class lemon and the early-bird amber. Reading them as two adjacent accent slots rather than as a primary/secondary brand-color duo is part of the same derived editorial implementation inference from the verified surfaces; it is not Fastcampus-authored or a separately published UI specification.
- `--swiper-theme-color = #007aff` appears in the same custom-property dump. It is the Swiper.js library default, not a Fastcampus color, and it is not adopted here.
- Measured contrast on the recorded pairings: heading `#171b1f` on `#FFFFFF` = 16.5:1 (AAA); body `#747678` on `#FFFFFF` = 4.5:1 (AA for normal text); muted caption `#a0a2a3` on `#FFFFFF` = 2.8:1, which fails AA, and which the source records as reserved for non-essential caption text such as the rank-3 sublabel and the enrolment-count footnote; primary `#fc1c49` on `#FFFFFF` = 4.0:1, borderline AA for normal text and passing at ≥18pt, with the recorded practice being white-on-red for CTAs (white on `#fc1c49` = 5.3:1, AA) and red-on-white held to large-text headlines; selected category pill `#FFFFFF` on `#000` = 21:1 (AAA).

### Spacing

The site does not expose a `--fds-space-*` token namespace at `:root`; spacing lives inside CSS-module classes. The scale recorded from raw geometry is 4px, 8px, 12px, 16px, 24px, 32px, 48px, with the smallest step observed between 4px and 6px and the largest between 48px and 64px. Because these were read off measured geometry rather than a published token set, the scale is a derived editorial implementation inference from the verified surfaces; it is not Fastcampus-authored or a separately published spacing specification. The per-step uses are in Layout & Platforms.

### Shape

- **Flat (4px)** — category pills, banner-list buttons, primary CTA, tags, input, and the small-radius default across the recorded surfaces.
- **Card (`4px 4px 0 0`)** — course cards, top-rounded with a flat bottom; the source describes the thumbnail as capping the visual seam.
- **Corner clip (`4px 0`)** — the rank-badge overlay. The source describes this clip two ways, as NW-SE in its overview and as NW-only in the component declaration; both are carried and neither is chosen here.
- **Half-pill (`16px 0 0 16px` / `0 16px 16px 0`)** — the paired carousel previous and next arrows; the source reads the pair as one split surface across the carousel rail.
- **Round (19px)** — the carousel dot cluster and the enrolment-count pill.
- The recorded radius scale also carries a `full` step of `9999`. No recorded element uses it, and the source states there is no full-pill radius on category navigation.

### Elevation

`box-shadow` is absent from the recorded global-navigation header, and the source records zero `box-shadow` on the category-pill layer, the rank-badge layer, and the course card. The source reads depth on these surfaces as color contrast rather than elevation. No modal, sheet, dropdown, or sticky elevation value is recorded, so none is stated here.

### Motion

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 150ms | Hover background fade, focus-ring appear |
| `motion-base` | 200ms | Card thumbnail scale, category-pill background, button color |
| `motion-slow` | 300ms | Banner carousel slide, modal open |

Easing roles: `easing-default` is the plain `ease` keyword, used for hover and focus transitions; an emphasized role is assigned to modal and drawer enter, and a decelerate role to skeleton shimmer and page-content fade-in. The exact curve values behind the emphasized and decelerate roles are attributed neither to a Fastcampus publication nor to the 2026-05-15 inspection, so those two values are omitted while the role names and their uses remain.

Motion rules: the banner carousel auto-advances on the Swiper default interval, recorded by the source as `5s`, which the source presents as an accepted convention rather than a suppressed one; the card hover micro-scale (1.0 → 1.02) is the only ambient motion outside the carousel; there is no parallax and no scroll-triggered hero animation; and under `prefers-reduced-motion: reduce` the surface falls back to instant transitions, keeps color fades only, and stops the carousel auto-advance.

The site publishes no `--fds-motion-*` custom property, and the source labels this whole motion set — the three durations, the easing role assignments, and the carousel and hover behaviours — as inference from library defaults and class names rather than measurement. It is therefore a derived editorial implementation inference from the verified surfaces; it is not Fastcampus-authored or a separately published motion specification. Promote a motion value only after a per-component observation on a Fastcampus surface records all five of: transition properties, animation name, duration, easing, and reduced-motion behaviour. A single confirmed curve does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The system exposes `--font-base` on the production site, but no Fastcampus typography document is published alongside it. |
| Live computed surface-use | The 2026-05-15 inspection computed the home surface's visible text as Pretendard Variable, including the 40px / 700 banner headline and the 14px / 600 category-pill labels. |
| Root-element declaration | `html` carries `"Apple SD Gothic Neo"`, which holds the document-level fallback before `body` inherits `--font-base`. |
| Official distributed asset | No Fastcampus-distributed type family is recorded, and no license statement for Pretendard Variable is recorded either; the family is referenced by the site's own font stack. |
| Outside these routes | Typography on Fastcampus surfaces other than the two inspected here is not stated. |

### Family

- **Primary** (`--font-base`): `"Pretendard Variable", pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`
- **HTML root**: `"Apple SD Gothic Neo"`
- **Mono**: the source states two different things and neither is chosen here — its token record sets the mono family to `Pretendard Variable`, while its prose calls the mono role an inferred system mono stack for coding-bootcamp course pages and inline code snippets. Both are carried as a conflict.
- There is no custom display face. Pretendard Variable is the single typographic choice and it is the variable-weight file, so weights 100-900 are addressable from one source rather than from separate static cuts.
- Korean glyphs render from Pretendard Variable's own Hangul coverage; no separate Korean web font is shipped.

### Type roles

| Role | Size | Weight | Line height | Notes |
|---|---:|---:|---:|---|
| Banner headline (home carousel) | 40px | 700 | 1.2 (≈48px on the recorded 96px two-line block) | Two-line marketing headline |
| Page H1 (category / course pages) | 32-36px | 700 | 1.3 | Course-list page titles. The source's prose gives this inferred range; its token record fixes the size at 34px. |
| Section H2 | 24-28px | 700 | 1.35 | Rail group labels such as `AI TECH` and `AI CREATIVE`. The source's prose gives this inferred range; its token record fixes the size at 26. |
| Body | 16px | 400 | 1.5 | Default nav link, paragraph copy |
| GNB primary nav | 16px | 400 | 1.5 | `기업교육`-class GNB items |
| GNB compact (secondary) | 12px | 600 | 1.4 | `커뮤니티`-class smaller-bolder GNB items |
| Button label (filled / pill) | 14px | 600 | 1.0 | Category-pill carousel label, `전체 / AI TECH / 디자인` |
| Caption — rank badge | 12px | 500 | 1.4 | `1위 / 2위 / 3위`, white on `#171b1f` |
| Caption — enrolment count | 16px | 400 | 1.4 | `1,940+ / 1,020+` on an alpha-30 dark pill |

The source's overview groups `커뮤니티` and `기업교육` together as one smaller-bolder cluster, while its type table assigns `기업교육` to the 16px / 400 role and `커뮤니티` to the 12px / 600 role. Both statements are carried and neither is chosen.

Typographic rules the source states: Pretendard Variable everywhere, with no serif, no rounded display face, and no Korean display-contrast face, weight dialed on the variable axis rather than through separate cuts; 700 for banner, 600 for button and secondary-compact GNB, 400 for body and primary GNB, with 500 appearing only on the rank-badge corner label; and banner copy set two-line by default, at 40px / 700 with a deliberate mid-headline break. Reading the 400/700 cadence as a binary with 500 held back as a restraint, and reading the 16px / 400 primary nav against the 12px / 600 secondary cluster as an inverted-density signature, are derived editorial implementation inferences from the verified surfaces; they are not Fastcampus-authored or a separately published type specification. The metrics they describe are the recorded ones in the table above.

Korean punctuation and register in type: straight quotes in UI; the honorific `~님` reserved for instructor-facing surfaces; casual-polite `~해요 / ~하기` dominating the home carousel copy (`신청하세요`, `만나자`, `쓸 수 있는`). The carousel strings are the recorded ones; reading `~님` as reserved for instructor-facing surfaces states a convention on surfaces the 2026-05-15 inspection did not cover, and is a derived editorial implementation inference from the verified surfaces; it is not Fastcampus-authored or a separately published register rule.

### Assets

- Logo pointer: `https://www.google.com/s2/favicons?domain=fastcampus.co.kr&sz=256`. This is a third-party favicon proxy recorded as this contract's logo reference, not a Fastcampus-published logo asset, and it must not be presented as brand artwork.
- **Icons**: 24×24 stroke icons at a 1.5-2px stroke for GNB and inline actions; stroke color follows the text context, `#171b1f` by default and `#fc1c49` when paired with a primary surface.
- **Course thumbnails**: 16:9, photographic or illustrative. The dominant recorded convention is an instructor portrait composited with course-title typography — `강사 얼굴` plus `굵은 타이포`. Aspect ratio is standardized; the source describes the art direction as loud and varied across gradients, gradient meshes, vector illustration, and photographic portraits.
- **Banner illustrations**: full-bleed gradient backgrounds, either a multi-color gradient or a solid hue band, with a white or dark headline overlay. A yellow → orange → pink multi-hue gradient recurs on AI-creative rails.
- **Rank-badge overlays**: text only on the dark `#171b1f` corner-clipped pill. No medal, star, or flame icon; the source reads the number itself as doing the work.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The 2026-05-15 inspection recorded default computed styles on the home route. Only the category pills in both selected and unselected form, the two carousel arrows, the carousel dot cluster, the course card with its rank badge and enrolment-count pill, and the global-navigation header come from that inspection. The primary CTA, the search input, the disabled treatment, and the four tag chips are derived by the source from the semantic tokens and the neutral and hue ladders, not sampled from a live element; each declaration below says which it is. No hover, focus, or pressed paint is promoted for any component.

Declared interactive components still close Core §4.4 applicability by control meaning rather than by capture completeness. `default` and `focus-visible` apply. Every other canonical state that is meaningful for the control stays applicable with its visual treatment omitted; where a state is marked `not-applicable`, the reason given is the control's role, never the absence of an observation. State coverage here is not claimed complete.

### Category Pill — Selected

- Role: active category in the home and courses category-pill carousel (`전체` when on the category-aggregate view)
- Kind: interactive — source `type: tab`
- Background: `#000` (`--fds-color-static-black`)
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 12px 16px
- Height: 40px
- Font: 14px / 600 / Pretendard Variable
- Source class: live inspection, default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded on the home category-pill carousel |
| hover | applicable | Pointer-web control; the source's hover fill is an inferred value carried in the state contract below |
| focus-visible | applicable | Keyboard-reachable filter control; visual treatment omitted |
| disabled | applicable | A category can be unavailable in a given catalog view; visual treatment omitted |
| loading | not-applicable | The pill selects a category; whatever the catalog fetches reports in the tile grid, not on the pill |
| error | not-applicable | The pill submits and validates nothing of its own, so it has no failure to express |
| success | not-applicable | The pill has no completion to confirm; selection is already expressed by the black-on-white fill |

### Category Pill — Unselected

- Role: every non-active category pill (`AI TECH`, `AI CREATIVE`, `디자인`, `영상/3D`, and the rest of the 11-plus strip)
- Kind: interactive — source `type: tab`
- Background: `#f5f5f6` (`--fds-color-neutral-30`)
- Text: `#747678` (`--fds-color-neutral-500`)
- Border: none
- Radius: 4px
- Padding: 12px 16px
- Height: 40px
- Font: 14px / 600 / Pretendard Variable
- Source class: live inspection, default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded on the home category-pill carousel |
| hover | applicable | Pointer-web control; the source's hover fill is an inferred value carried in the state contract below |
| focus-visible | applicable | Keyboard-reachable filter control; visual treatment omitted |
| disabled | applicable | A category can be unavailable in a given catalog view; visual treatment omitted |
| loading | not-applicable | The pill selects a category; whatever the catalog fetches reports in the tile grid, not on the pill |
| error | not-applicable | The pill submits and validates nothing of its own, so it has no failure to express |
| success | not-applicable | The pill has no completion to confirm; selection is already expressed by the fill swap |

### Enrolment Primary CTA

- Role: primary enrolment action — `수강신청 하기`, `결제하기` — on course-detail and cart screens
- Kind: interactive — source `type: button`, recorded on both the filled entry and the tinted-surface entry
- Background: `#fc1c49` (`--c-primary` / `--fds-semantic-primary-primary`)
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 12px 24px
- Height: 40-48px
- Font: 14-16px / 600 / Pretendard Variable
- Hover and pressed: background `#c9032a` (`--c-primary-darken`)
- Variant — renewal skin: background `#d60039` (`--c-primary-darken-renewal`), text `#FFFFFF`, radius 4px, for the same primary role on seasonal-campaign home skins
- Variant — tinted surface: background `#ffdad8` (`--fds-semantic-primary-primary-low`), text `#fc1c49`, radius 4px, for sale-tag fills, primary-CTA hover scrims, and the `할인 적용중` inline pill
- Source class: derived. The source builds the filled CTA from the primary semantic token plus the category-pill geometry that matches its 40px target height, and builds the two variants from the renewal and low semantic tokens; none of the three is a live-inspected sample.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared as the enrolment action's resting fill |
| hover | applicable | Pointer-web button; the source assigns it the `#c9032a` darken step |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | The source declares a form-incomplete treatment for enrolment and payment flows |
| loading | applicable | Enrolment and payment run while the control waits; the source replaces the label with an inline spinner |
| error | applicable | Payment and validation can fail and report against this action |
| success | applicable | Enrolment confirms after this action commits |

### Carousel Arrow — Previous / Next

- Role: banner-carousel paging controls, `이전 배너` and `다음 배너`
- Kind: interactive — button element recorded on the home banner rail
- Background: `rgba(0, 0, 0, 0)`
- Icon color: `#171b1f` (`--fds-semantic-label-primary`)
- Border: none
- Radius: `16px 0 0 16px` for previous, `0 16px 16px 0` for next; the source reads the pair as one split surface across the rail
- Padding: `6px 2px 6px 8px` for previous, `6px 8px 6px 2px` for next
- Height: 32px
- Source class: live inspection, default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded on the home banner carousel |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable paging control; visual treatment omitted |
| disabled | applicable | A paging control can be unavailable when there is nothing further to page to; visual treatment omitted |
| loading | not-applicable | The arrow advances the rail it already holds; it starts no operation that can be in progress on the control |
| error | not-applicable | The arrow commits and validates nothing, so it has no failure to express |
| success | not-applicable | The arrow has no completion to confirm; the new slide is the outcome |

### Carousel Dot Cluster

- Role: the `배너 목록` overlay that exposes the banner list on the carousel
- Kind: interactive — button element recorded on the home banner rail
- Background: `rgba(0, 0, 0, 0.2)`
- Text: `#171b1f`
- Border: none
- Radius: 19px
- Padding: 0
- Height: 32px
- Source class: live inspection, default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded on the home banner carousel |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The control can be unavailable when there is no banner list to expose; visual treatment omitted |
| loading | not-applicable | The control reveals a list the rail already holds; it starts nothing that can be in progress on it |
| error | not-applicable | The control commits and validates nothing, so it has no failure to express |
| success | not-applicable | The control has no completion to confirm; the revealed list is the outcome |

### Course Card

- Role: course tile on the home rails and the courses listing
- Kind: interactive — source `type: card`. The source assigns the tile a hover treatment of its own, a thumbnail micro-scale from 1.0 to 1.02. Treating that hover as grounds for a pointer control rather than a plain container, and reading the tile as a destination that opens the course while committing nothing of its own, is a derived editorial implementation inference from the verified surfaces; it is not Fastcampus-authored or a separately published component specification.
- Background: transparent — the thumbnail provides the surface
- Border: none
- Radius: `4px 4px 0 0`
- Padding: 0; metadata flows below the thumbnail inside one card frame
- Size on the rail: about 327px tall at variable width
- Shadow: none
- Source class: live inspection, default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded on the home rank rail |
| hover | applicable | The source assigns the tile a 1.0 → 1.02 thumbnail micro-scale |
| focus-visible | applicable | Keyboard-reachable destination tile; visual treatment omitted |
| disabled | applicable | A listed course can be unavailable to open; visual treatment omitted |
| loading | not-applicable | The tile opens the course; whatever the course page fetches reports there, not on the tile |
| error | not-applicable | The tile submits and validates nothing of its own, so it has no failure to express |
| success | not-applicable | The tile has no completion to confirm; arriving on the course page is the outcome |

### Rank Badge

- Role: `1위 / 2위 / 3위` rank label on top-ranked course tiles
- Kind: non-interactive — source `type: badge`. It reports a standing rather than accepting input, so no state-applicability map is declared for it.
- Background: `#171b1f` (`--fds-semantic-label-primary`)
- Text: `#FFFFFF`
- Border: none
- Radius: `4px 0`
- Padding: 0 — text-only badge
- Height: 20px
- Font: 12px / 500 / Pretendard Variable

### Enrolment-Count Pill

- Role: the `1,940+ / 1,020+` enrolment-count figure, sitting below the rank badge on top-tier tiles
- Kind: non-interactive — a count label with no control role
- Background: `rgba(0, 0, 0, 0.3)`
- Text: `#171b1f`, sampled against a light thumbnail backdrop
- Border: none
- Radius: 19px
- Padding: 2px 6px
- Height: 24px
- Font: 16px / 400 / Pretendard Variable

### Promo and Category Tags

- Role: the four recorded chip variants on course tiles
- Kind: non-interactive — source `type: badge` on all four. Each labels a condition or a category rather than accepting input, so no state-applicability map is declared for them.
- Shared geometry: radius 4px, padding 2px 8px, font 12px / 600 / Pretendard Variable
- **Free / promo — yellow**: background `#fff9c4` (`--fds-color-yellow-100`), text `#f57f17` (`--fds-color-yellow-900`), for `0원 / 무료 / 사전알림` indicators
- **Discount — red**: background `#ffdad8` (`--fds-semantic-primary-primary-low`), text `#fc1c49` (`--c-primary`), for `최대 25% 할인` and `30% 깜짝 쿠폰` sale flags
- **Category — blue**: background `#ebf3ff` (`--fds-color-blue-50`), text `#3b83ff` (`--fds-color-blue-500`), for developer and data tags
- **Category — pink**: background `#fce4ec` (`--fds-color-pink-50`), text `#e91e63` (`--fds-color-pink-500`), for design and creative tags
- Source class: derived from the extended hue ramps rather than sampled from a live chip. The exact chip alpha values are not resolved.

### Global Navigation (GNB) — Desktop

- Role: the single global-navigation pattern persisting across the home route and the category route
- Kind: non-interactive container — the source declares no per-item control for it, so applicability is not closed here. The two nav-link type roles are in Typography & Assets.
- Background: transparent — `rgba(0, 0, 0, 0)` on the recorded header
- Text: `#171b1f` (`--fds-semantic-label-primary`)
- Border-bottom: none
- Shadow: none
- Position: the source records the header as sticky, from its CSS-module class naming
- Layout: logo · primary nav at 16px / 400 · secondary compact nav at 12px / 600 · search · auth

### Search Input

- Role: course search field in the GNB and the category-filter rail
- Kind: interactive — source `type: input`
- Background: `#FFFFFF` or `#f5f5f6`
- Text: `#171b1f`
- Placeholder: `#747678` (`--fds-color-neutral-500`)
- Border: 1px solid `#cfd0d1` (`--fds-color-neutral-100`) at rest, 1px solid `#fc1c49` on focus
- Radius: 4px
- Padding: 0 12px
- Height: 40px
- Font: 14-16px / 400 / Pretendard Variable
- Source class: derived from a category-page CSS-module pattern rather than a live-inspected sample.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared as the field's resting treatment |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; the source's focus border is an inferred value carried in the state contract below |
| disabled | applicable | The source declares a form-incomplete treatment that this field can take |
| loading | applicable | A submitted query runs while the field waits; visual treatment omitted |
| error | applicable | The source's validation treatment renders at the offending field |
| success | not-applicable | The field has no completion of its own to confirm; a query resolves into the results region, and the confirmation the source declares belongs to enrolment |

### State contract

The two lists below are the source's state language for the product experience, kept in full with their verbatim Korean examples. Apart from the recorded hover fill step and the recorded neutral ladder they draw on, the source attributes them to neither a live sample nor a Fastcampus publication, so they are a derived editorial implementation inference from the verified surfaces; they are not Fastcampus-authored or a separately published state specification, and they are not per-component paint values for the controls declared above.

Interaction and status treatments:

- **Hover (category pill)**: `#f5f5f6 → #e7e7e8`, one step down the neutral ladder.
- **Hover (primary CTA)**: `#fc1c49 → #c9032a` (`--c-primary-darken`).
- **Active / pressed (CTA)**: `#c9032a` solid, with a tinted ring `rgba(237, 35, 75, 0.12)` at 4px offset.
- **Focus**: a 2px outline in `#fc1c49` at 2px offset on keyboard focus, and an input border that swaps to `#fc1c49`. The source derives this from the primary semantic token; it records no separate focus-visible observation, so no focus-visible row above carries a treatment.
- **Keyboard navigation**: the same visible 2px primary-red outline on Tab navigation, on the same derivation.
- **Screen reader**: the carousel arrows carry `aria-label` values recorded in the raw samples — `이전 배너`, `다음 배너`, `배너 목록`. Rank-badge text is in the DOM rather than a background image.
- **Disabled**: `#e7e7e8` background, `#a0a2a3` text, `cursor: not-allowed`, drawn from the neutral ladder for form-incomplete states on enrolment and payment flows.
- **Loading**: an inline spinner replaces the CTA label; the primary red CTA stays red and the label swaps to the icon.
- **Empty**: a center-aligned illustration, a headline (`아직 수강 중인 강의가 없어요`), and an outlined primary CTA (`강의 둘러보기`).
- **Error — validation**: 14px text below the offending field in `#fc1c49`, with the field border swapping to `#fc1c49`. The source notes the commerce red doubles as the inline-error color in this context and stays distinct from the system error red `#c5213b`.
- **Error — network**: an inline banner (`연결을 확인해 주세요. 다시 시도해주세요.`) with an outlined `다시 시도` button.
- **Success — enrolment**: a one-line confirmation in `#43a047` (`--fds-color-green-600`), with no toast theatre.
- **Skeleton — card**: `#e7e7e8` blocks for the 16:9 thumbnail plus two text lines, shimmering at 1.5s linear.

Per-surface state catalog:

| Category | Treatment |
|---|---|
| **Empty — My Courses** | Center-aligned illustration plus `아직 수강 중인 강의가 없어요`; outlined CTA `강의 둘러보기` linking to `/category_online_all`. |
| **Empty — Wishlist** | `찜한 강의가 아직 없어요. 마음에 드는 강의를 담아두세요.` plus an outlined CTA. |
| **Empty — Search results** | `'<query>'에 대한 결과가 없어요.` plus 3 category-pill suggestions in the unselected (`#f5f5f6`) state. |
| **Loading — page** | Skeleton blocks in `#e7e7e8` for rail tiles, 3-5 tiles per row, 16:9 thumbnail plus 2 text lines, shimmer 1.5s linear. |
| **Loading — submit** | Inline 16px spinner replaces the CTA label; CTA background stays `#fc1c49`; pointer disabled. |
| **Error — Network** | Inline banner `연결을 확인해 주세요. 다시 시도해주세요.` plus an outlined `다시 시도` button. |
| **Error — Validation** | 14px `#fc1c49` text below the field; field border `#fc1c49`. |
| **Error — Payment** | Modal with a specific cause line plus a `다른 결제 수단으로 시도하기` primary red CTA. |
| **Success — Enrolment** | Inline `수강신청이 완료되었어요.` in `#43a047`; `내 강의실로 가기` primary CTA. |
| **Skeleton — Card** | `#e7e7e8` block for the thumbnail (16:9, `4px 4px 0 0`) plus 2 text lines; shimmer 1.5s linear. |
| **Disabled — Form** | `#e7e7e8` background, `#a0a2a3` text, `cursor: not-allowed`; tooltip on hover explaining what is missing. |
| **Time-Pressure — Countdown** | Inline `#fc1c49` countdown text (`3일 21:14:02 남음`) paired with an `--fds-color-orange-200` deadline pill on enrolment CTAs. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Spacing on the recorded surfaces runs on the scale given in Foundations. The per-step uses the source reads off raw geometry are: 4-6px for tag-chip padding-y and the rank-badge inset; 8px for an inline icon gap; 12px for category-pill padding-y and the button-inner gutter; 16px for category-pill padding-x and the card metadata gap; 24px for the rail-tile gap and section-internal block gap; 32px for the section-block separator; and 48-64px for the major section divider and footer column gap.

The home page is a full-bleed banner over a content container of roughly 1280px to 1440px. Course rails use horizontal scroll-snap below 1280px and a fixed 4-5 column grid above it.

Above the fold the home route stacks three acquisition surfaces in the first screen: the banner carousel on its 96px headline block, the category-pill carousel on its 40px row, and the top-3 rank tiles at about 327px tall. Reading that stack as a commerce-dense "programmed market" that assumes a user who came to enrol this week, against a flatter competitor arrangement, is a derived editorial implementation inference from the verified surfaces; it is not Fastcampus-authored or a separately published layout specification. What the inspection establishes on its own is the three blocks and their heights.

Both inspected routes are desktop web. This contract declares no other platform profile, and the values above should not be carried to one without evidence from that platform. One density caveat the source raises for small viewports: the 12px / 500 rank-badge label sits at the lower bound of Korean readability — it passes on Hangul x-height, and reviewers should still validate it at 100% zoom on a small viewport.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Verbatim strings recorded from the home banner carousel on 2026-05-15:

- `관심 가는 원데이 클래스 / 0원 사전 알림 신청하세요!` — the two-line banner headline, broken mid-headline
- `업무 자동화 베스트 라인업 / 최대 25% 할인!`
- `지금 바로 쓸 수 있는 / 30% 깜짝 쿠폰 등장!`

Alongside them the source records the CTA labels `수강신청 하기`, `결제하기`, `장바구니에 담기`, and the time-sensitive `지금 신청하세요!`; the tile metadata pattern of rank, count, title, and instructor (`1위`, `1,940+`); the two-character free tag `무료` or `0원` as a yellow pill on a white tile; and the carousel control labels `이전 배너`, `다음 배너`, `배너 목록`. The source also records three labels beside the hue that paints each of them in Foundations: the category-rail labels `비주얼 브랜딩` and `Codex 기반 AI 인증시험`, and the success-toast label `수강신청 완료` — a shorter, distinct label from the success line `수강신청이 완료되었어요.` in the table below, not a variant spelling of it.

Characterizing the voice as energetic, time-aware, and casual-polite — a brand that assumes the cohort or the discount is closing soon and names the timing pressure rather than hiding it — reading the register per context as in the table below, and reading `~만나자` as a first-person-plural-implied invitation that softens the register against a straight imperative, are a derived editorial implementation inference from the verified surfaces; they are not Fastcampus-authored or a separately published voice guide. The strings those readings describe are the verbatim ones above and in the table below.

| Context | Tone |
|---|---|
| CTAs (enrolment) | Imperative plus a concrete outcome. `수강신청 하기`, `결제하기`, `장바구니에 담기`. Exclamation reserved for the time-sensitive: `지금 신청하세요!`. |
| Banner headlines | A two-clause invitation with a beat. `관심 가는 원데이 클래스 / 0원 사전 알림 신청하세요!` The section break is part of the cadence. |
| Discount banners | Fact plus emphasis. `업무 자동화 베스트 라인업 / 최대 25% 할인!` — the discount is the fact, not the headline word. |
| Course tile metadata | Rank, count, title, instructor. Rank (`1위`) is corner-badged; count (`1,940+`) is the social-proof figure. |
| Free tag | Two characters: `무료` or `0원`. Yellow pill on a white tile. |
| Empty states | Why it is empty, then the next step. `아직 수강 중인 강의가 없어요. 관심 분야의 강의를 둘러보세요.` |
| Error / validation | Specific cause plus action. `이메일 형식이 올바르지 않아요. 다시 확인해 주세요.` |
| Success | One line. `수강신청이 완료되었어요. 내 강의실에서 확인할 수 있어요.` |
| Instructor surfaces | A `~튜터 / ~강사` mix, used more freely than a strict honorific — for example `피그마튜터에게 배우는`. |

Register: casual-polite `~해요 / ~하세요` mixed with the imperative-friendly `~하기 / ~만나자` on product surfaces, and formal `~합니다` kept for legal, refund, and receipt screens. The product-surface half is the register of the recorded strings above; assigning `~합니다` to legal, refund, and receipt screens states a convention on surfaces the 2026-05-15 inspection did not cover, and is a derived editorial implementation inference from the verified surfaces; it is not Fastcampus-authored or a separately published voice guide.

Phrases the source rules out. It labels this list illustrative and derived from the restraint it observed on the home route rather than taken from a published Fastcampus guide: `놓치지 마세요`, `Oops!`, `오류가 발생했습니다`, `최저가 보장`, `평생 무료`, three-exclamation-mark CTA tails (`!!!`), emoji on price or enrolment surfaces, and superlative-rank prose where the numeric badge already does the work (`최고의 강의 / 압도적 1위`). The source records that where ranking matters, the corner badge and the raw enrolment count (`1위 / 1,940+`) carry it instead of an editorialized label.

Locales: Korean is the primary language of both inspected routes, and no English mirror route existed at the time of inspection. English appears inside technology course titles where the technology's own name is English — `React`, `Next.js`, `AI`, `Codex`, `Claude`, `LLM`, `RAG`, `AI Agent`. Pretendard Variable covers the full Hangul block plus extended Latin, so English text reads without a separate Latin font. The Korean strings recorded in this contract are the published labels; an English gloss may sit beside one for a reader, but it never replaces it, and a Korean label is never re-rendered as an English paraphrase.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

It was assembled from a live inspection of two Fastcampus web routes plus the brand's publicly observable artifacts. It is not a Fastcampus publication, and that publication authority stays with Day1Company.

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

### Named gaps

These are unnamed values, not permissions to invent:

- the two exact curve values behind the emphasized and decelerate easing roles
- the fifth step of the orange ramp, whose recorded value is not a renderable hex

The source names these as its own follow-up list — values it carries as inference rather than as live capture on a product surface, and which this contract does not resolve:

- the primary CTA's labelled fill, built from the semantic primary token plus the category-pill measurements
- the input focus state
- the disabled state
- the exact tag-chip alpha values
- the GNB sticky background on scroll-down versus scroll-up
- the footer spacing tokens
- the motion durations
