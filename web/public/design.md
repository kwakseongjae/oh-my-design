# oh-my-design Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

The site oh-my-design.kr: an archive of measured DESIGN.md files for real companies, plus skills for coding agents. In scope: Home (`/`, `/ko`), the archive (`/design-systems`), the item page (`/design-systems/[id]`, `/ko/design-systems/[id]`), the screens gallery (`/screens`, `/ko/screens`) and its page per service (`/screens/[id]`, `/ko/screens/[id]`), docs, blog, the `/hangul` skill landing, `/what-is-design-md`, FAQ, alternatives and changelog, plus the Japanese and Traditional Chinese roots. Light only: one palette, `color-scheme: light`. This file describes the site itself, not any reference in the archive.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=2 lang=en -->
### Primary tasks

- Find a company from Home or the archive and open its item page.
- On the item page, read the reference beside its preview and take it with the `#use` actions: Copy DESIGN.md and Download.
<!-- design-md:claim-end -->

### Design direction

- One accent. Iris (`#6749e2`) only on the main action, the user's chat bubble, the active step and selected states, and as the ink of the blog's dithered field (Typography & Assets); the rest of the chrome stays neutral.
- Home's keycaps are the one multi-hue object; nothing violet sits behind them.
- Separate by space and tone, not by lines. Resting panels carry one soft violet-grey shadow and no outline.
- Nested radii shrink inward.

### Principles

- The item page is the preview and the hand-off; changes to how a reference reads are checked there.
- Unknown means absent at the smallest unresolved field; verified siblings stay.

### Avoid

- A second accent colour, or Iris on chrome that is not the main action or a selected state.
- Fractional type sizes and viewport-width type clamps on new work.
- Checking site work on a redirect-only route (`/builder`, `/reference/[id]`).

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Colour tokens

One token set, `--sq-*` in `web/src/styles/brand-a.css`: the Iris ramp (primary at step 600) and violet-leaning neutrals.

- **color.primary**: `#6749e2` — main action fill, focus ring, selected state (`--sq-p600`)
- **color.primary-hover**: `#5437c1` (`--sq-p700`)
- **color.primary-press**: `#402697` (`--sq-p800`)
- **color.on-primary**: `#ffffff`
- **color.tint**: `#f6f6fe` — highlighted line (`--sq-p50`)
- **color.selection**: `#d8d8ff` — text selection (`--sq-p200`)
- **color.paper**: `#ffffff` — page and card ground
- **color.band**: `#f9faff` — band ground (`--sq-n50`)
- **color.cell**: `#f3f3f8` — neutral fills, secondary buttons (`--sq-n100`)
- **color.guide-2**: `#e5e6eb` — pressed neutral fill (`--sq-n200`)
- **color.guide**: `#d3d3db` — borders and inputs (`--sq-n300`)
- **color.icon**: `#797981` — icons only, never text (`--sq-n500`)
- **color.ink-2**: `#5a5a63` — secondary text (`--sq-n600`)
- **color.ink**: `#13131a` — text (`--sq-n900`)
- **color.term**: `#1d1a2e` — the terminal's dark field
- **color.term-ink**: `#ecebf5`
- **color.term-dim**: `#a9a6bd`
- **color.ok**: `#14733f`
- **color.warn**: `#8f5200`
- **color.err**: `#b3261e`

ok, warn and err colour status text and icons, never fills.

The shadcn names in `globals.css` are aliases onto these. `--primary` is **ink**, so `text-primary` stays ink and Iris reaches only components that set `--sq-primary`. `--ring` is Iris. The one shadcn value outside the set is `--destructive: oklch(0.58 0.22 25)`.

### Contrast pairs

WCAG 2.x, computed from the hex values:

- color.on-primary on color.primary: 5.79:1
- color.on-primary on color.primary-hover: 7.80:1
- color.primary on color.tint: 5.38:1
- color.ink on color.paper: 18.49:1
- color.ink-2 on color.paper: 6.82:1; on color.cell: 6.17:1
- color.icon on color.paper: 4.32:1 (icons only)
- color.ok / color.warn / color.err on color.cell: 5.34 / 5.63 / 5.91:1
- color.term-ink on color.term: 14.34:1; color.term-dim on color.term: 7.16:1

Focus is a 2px outline in color.primary. Iris 400 (`#9c95ff`, 2.57:1 on paper) is too light for focus.

### Elevation

- **shadow.panel**: `0 1px 2px rgba(20, 20, 60, .04), 0 16px 40px -16px rgba(40, 30, 120, .16)` — resting panels.

### Motion

Entrances: `fade-up`, `fade-blur-up`, 0.6s ease-out. Hover fills: 0.15s.

### Reduced motion

Required. Under `prefers-reduced-motion: reduce` animations and transitions snap to their end state and smooth scroll is off.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Weight |
|---|---|---|---|
| ui-sans | Interface, headings and body on Latin and Korean pages | Wanted Sans Variable | 400–1000 axis |
| ui-mono | Code and version strings | Geist Mono | 400 |

### Font families

- **Wanted Sans Variable** v1.0.3 (SIL OFL 1.1, Wanted Lab), self-hosted unicode-range slices. Latin slices load everywhere; Hangul slices only under the `/ko` root. Elsewhere Hangul falls to the platform Korean face, which is not the brand face.
- **Noto Sans JP** and **Noto Sans TC** are the faces of the Japanese and Traditional Chinese roots.
- **Geist Mono** is the Tailwind `font-mono` face. The brand components use the platform monospace stack (`--sq-f-mono`).
- OpenType features `cv01` and `cv11` are on for the whole document.

### Type scale

Approved by the owner on 2026-11-21. Whole pixels only.

| Role | Size | Weight | Where | Status |
|---|---|---|---|---|
| Landing title | 60px | 760 | Home and skill-landing first screens | Approved, not yet applied |
| Page title | 40px | 760 | Other pages; 32px at 900–1279px, 28px below | Applied on the item page and on FAQ, changelog, `/what-is-design-md` and alternatives |
| Section heading | 26px | 760 | Sections; 22px on a phone | Item page: 26px, but 23px on a phone |
| Control, large | 16px | 650 | Labels of 48px controls | Applied on `/screens/[id]` |
| Control | 15px | 650 | Labels of 40px controls | Applied on the item page's two actions |
| Control, small | 14px | 600 | Labels of 32px controls | Approved, not yet applied |
| Reading body | 17px | 400 | Item page DESIGN.md text; 16px on a phone | In code, outside the approval |

Still in `brand-a.css`, older than this scale: `--sq-fs-h1: clamp(44px, 5.4vw, 82px)`, `--sq-fs-h2: clamp(28px, 3.2vw, 44px)`, `--sq-fs-h3` and `--sq-fs-lede` 19px, `--sq-fs-body` 16px, `--sq-fs-small` 13.5px, `--sq-fs-micro` 12px; weights 780 display, 760 heading, 650 strong.

### Asset: the blog field

A moving two-ink dither in Iris, the blog home's banner. Added 2026-11-24 with the blog home (direction B, owner 2026-11-23/24).

- Method: Paper Shaders `dithering` (Apache-2.0, vendored at v0.0.82 in `web/src/vendor/paper-shaders`), 4x4 Bayer ordered dither, two flat inks: color.paper and color.primary. Nothing blends, so no third colour appears.
- Shape `warp`, 3px cells, speed 0.1. The composition is a 1280×168 world fitted by cover, so a phone sees the same picture at its own width; at 900px and below it shifts left by 0.2 so the diagonal stroke crosses the banner.
- Banner: radius.panel, 168px tall; radius.card and 128px at 900px and below. One per page, and nothing to read sits on it (`aria-hidden`).
- Poster: a CSS dot pattern in the same two inks shows while WebGL loads or where it is missing, and hides once the canvas draws, so its dots never show through the rounded corner.
- Reduced motion: the field holds a still frame. The shader pauses itself off screen and in a hidden tab.

<!-- design-md:section components-states -->
## 4. Components & States

### Component: action button

**Semantics:** Triggers a named action such as Copy DESIGN.md or Download, or Download all on a service's screens page.

- Anatomy: label, optional-leading-icon
- Variants: primary, line
- States: default, hover, pressed, focus-visible, loading, error

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | The actions are always available; no disabled style exists. |
| loading | applicable |  |
| error | applicable |  |
| success | not-applicable | No success style exists. |

- **primary**: color.primary fill, color.on-primary label; hover primary-hover, pressed primary-press. One per screen.
- **line**: color.paper with a 1px inset color.guide edge; hover cell, pressed guide-2.
- Pill radius, 18px side padding (16px on a phone), 18px icon, focus outline offset 3px.
- Loading and error belong to the zip downloads on `/screens/[id]` only; Copy and Download on the item page do not wait. While a zip is built the button keeps its look, carries `aria-disabled` and a progress cursor, and a 14px color.ink-2 status line beside it counts the files in tabular figures. A zip that is missing files, or that failed, says so in that line in color.err; the button itself has no error style.

### Control sizes

| Size | Height | Label | Use | Status |
|---|---|---|---|---|
| sm | 32px | 14/600 | Inside tables and chips | Approved, not yet applied |
| md | 40px | 15/650 | Default; 44px on a phone | Applied on the item page's first screen |
| lg | 48px | 16/650 | The one main action of a landing first screen; the two actions of a service's screens page | Applied on `/screens/[id]` (22px side padding) |

The item page's Share is a neutral control: 40px, 14px radius, color.cell; a 44px square icon on a phone.

### Component: filter control

**Semantics:** Narrows the `/screens` gallery by one property (country, device, category, screen type). Names the property, shows its current value and opens a short single-choice list.

- Anatomy: label, value, chevron; a list of options, each with an optional count and a check on the selected one
- States: default, hover, open, focus-visible

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Every filter is always available; no disabled style exists. |
| loading | not-applicable | The options are known when the page renders. |
| error | not-applicable | No error style exists. |
| success | not-applicable | No success style exists. |

- Control md: 40px, 44px on touch (`hover: none` or `pointer: coarse`); radius.control; 16px leading and 12px trailing padding (14/10 at 767px and below, 12/8 below 600px).
- color.paper with a 1px inset color.guide edge; hover and open color.cell. Label 15px color.ink-2, value 15/650 color.ink, chevron 16px color.icon, turned over while open. Focus outline offset 2px.
- The control is as wide as its longest value, so changing it never moves its neighbours.
- The list: color.paper, radius.control, 6px padding, a 1px color.guide-2 ring outside plus shadow.panel; at least the control's width or 160px, at most 360px tall. Options 40px (44px on touch), radius.inner; highlighted color.cell; selected 650 with a 16px color.primary check; a count in 14px color.ink-2, tabular figures.
- "All" is the first option of every filter that can be left open; device always has a value. The filters live in the query string, and the default view keeps the bare URL.

### Component: topic chips

**Semantics:** Narrows the blog home's post grid to one topic. A row of toggle buttons; exactly one is pressed, "전체" / "All" by default.

- Anatomy: label, count
- States: default, hover, selected, focus-visible

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | A topic shows only when a post carries it, so no chip is ever empty. |
| loading | not-applicable | The posts are known when the page renders. |
| error | not-applicable | No error style exists. |
| success | not-applicable | No success style exists. |

- Control sm: 32px, 36px on touch (`hover: none` or `pointer: coarse`); radius.pill; 14px side padding; label 14/600 color.ink, count 14px color.ink-2 in tabular figures, 6px apart.
- color.paper with a 1px inset color.guide edge; hover color.cell. Selected: color.tint fill, a 1px inset color.selection edge, label and count color.primary at 650 (5.38:1). Focus outline 2px color.primary, offset 2px.
- 8px apart. Below 600px the row does not wrap: it scrolls sideways, edge to edge inside the page gutter.
- Topics are plain field nouns (디자인 시스템, 컬러, 타이포그래피, 데이터, AI, 릴리스; Design systems, Color, Typography, Data, AI, Releases), mapped from the posts' tag slugs; slugs with no topic stay metadata only. The choice is page state, not in the URL.
- The row sits 36px under the lede and the grid 32px under the row (24px each at 767px and below), as the `/screens` filter row does. No post count beside it: the "전체" chip carries the number.

### Component: post card

**Semantics:** One post in the blog home's grid. The whole card is one link, to the post.

- Anatomy: cover; topics; title; description; date
- States: default, hover, focus-visible

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | A card is always a working link. |
| loading | not-applicable | The cover box keeps its 1200:630 ratio, so nothing shifts while it loads. |
| error | not-applicable | No error style exists. |
| success | not-applicable | No success style exists. |

- Cover: the post's own cover image (Asset: blog covers) at 1200:630, radius.card, a 1px inset color.guide-2 ring; the first row loads eagerly, the rest lazily, all decoded asynchronously; empty alt, the card's text names it.
- Caption 14px under the cover: topics as words, 14/600 color.ink-2, each after a 6px square mark; title 22/760 color.ink, 8px above and below; description 16px color.ink-2, line-height 1.6, at most three lines; date 14px color.ink-2, 10px under it.
- Hover, on pointer devices only: the cover adds shadow.panel over 0.15s; nothing moves. Focus: 2px outline on the cover, offset 3px.

### Component: service card

**Semantics:** One service in a grid of services. The whole card is one link, to that service's screens page (`/screens/<id>`).

- Anatomy: panel of stills; caption with logo, name and "category · N screens"
- States: default, hover, focus-visible

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | A card is always a working link; no disabled style exists. |
| loading | not-applicable | No loading style; each image box is sized to its shot, so nothing shifts while a still loads. |
| error | not-applicable | No error style exists. |
| success | not-applicable | No success style exists. |

- Panel: color.band, a 1px inset color.guide-2 edge, radius.card, 7% padding at the top and sides. Mobile: three stills side by side, each 31% wide and 3.5% apart, top-aligned, in a 410:300 panel. Desktop: one still across the panel, resting on its lower edge.
- Stills: color.paper ground, radius.inner (top corners only on desktop), shadow.panel; images have empty alt and the card's text names it.
- The caption sits 14px under the panel, 10px gaps: logo 28px with radius.inner, name 17/650, and "category · N screens" in 14px color.ink-2 at the end.
- Hover, on pointer devices only: the panel adds shadow.panel and the stills rise 4px; neither moves under reduced motion. Focus: 2px outline on the panel, offset 3px.

The screens pages' device switch, on `/screens/<id>` and the item page's screens tab, is a tab group of two buttons, one per device: color.cell, radius.control, 4px padding and gap, 40px in all. Each segment is 32px tall with 14px side padding, a 10px radius and a 15/650 color.ink-2 label; hover color.ink; the pressed one is color.paper with a 1px inset color.guide-2 edge and a color.ink label; focus outline offset 2px. At 767px and below the group spans the row, the segments share it equally and grow to 36px. It shows only when there are stills on both devices.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Radius scale

| Token | Value | Use |
|---|---|---|
| radius.inner | 6px | Inline code, small rows, focus outlines |
| radius.control | 14px | Inputs, tab groups, copy fields, secondary controls |
| radius.pill | 999px | Actions and chips |
| radius.card | 20px | Cards |
| radius.bubble | 22px | Chat bubbles |
| radius.panel | 28px | Panels |

The shadcn `--radius` points at radius.control, so `rounded-lg` is 14px.

### Page

- Content width at most 1360px; side gutter 40px, 16px at 900px and below.
- Header 68px tall, 58px at 900px and below.
- The item page puts title and actions on one row from 900px, and the reference beside its preview from 1024px.

### Card grid

- Service cards: three columns from 1024px, two from 600px, one below. Gaps 40px between rows and 24px between columns; 36px and 20px below 1024px; 32px below 600px.
- The `/screens` gallery puts its filter row above the grid: filters on the left, 8px apart (6px below 600px), the count on the right in 15px color.ink-2 with tabular figures, wrapping when narrow. The row sits 36px under the lede and the grid 32px under the row (24px each at 767px and below).
- The same grid holds a screens page's similar services and the blog home's post cards, under its topic chips.

### Responsive constraints

- Minimum supported width: 320px
- Reflow target: 200% zoom
- Touch targets on a phone: 44px

### Platform: web

- Keep task order and both `#use` actions at 320px without sideways scrolling.
- Inputs are 16px on iOS so focus does not zoom.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

- Say what the user can do and where each output goes, in concrete labels.
- Show the selected language by its own name, not a locale code.
- State what is measured and what is unknown plainly.

### Locale: en (supported)

- Concise; command names stay exact.

### Locale: ko (supported)

- Korean item pages show the English DESIGN.md byte for byte under Korean chrome, and name the brand by its registry Hangul name or else its English name.
- Korean headings that wrap get more leading (1.3 on the item title).

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

<!-- design-md:claim omitted count=2 lang=en -->
### Omitted

- `foundations.color-modes.dark` — `verified-absent`: light only; nothing sets a dark theme
- `foundations.spacing` — `verified-absent`: no spacing scale; components set spacing directly
<!-- design-md:claim-end -->

### Where the approved scale is not yet applied

Production at 1440px, measured 2026-11-21:

- Page titles: home (60/760) and docs (40/760) match. Korean home 56/760, archive 64/780 and `/hangul` 64/760 do not; blog, FAQ, changelog, `/what-is-design-md` and alternatives keep the pre-rebrand 48/700.
- Eight section-heading sizes (18–44px), twelve button heights (28–56px), five button radii (8, 10, 12, 14px, pill) and four fractional type sizes (14.45, 12.75, 12.5, 40.8px).
- In code: `components/ui/button.tsx` keeps 24–36px sizes; status chips have a 10.5px label; the social images (`/og/reference`, `/og/blog`) still draw the pre-rebrand `#7c5cfc` and `#0a0a0f`.
- In code, screens pages (read 2026-11-23): the device switch's 32px segments carry 15/650 where the scale pairs 32px with 14/600, grow only to 36px at 767px and below (under the 44px touch target), and have a 10px radius that is not on the radius scale. On `/screens/<id>` a type's download is a 36px round button (44px on touch) and a type's heading is 22px (20px at 767px and below). Service cards and screen tiles move over 0.2s, not the 0.15s under Motion, and the screens CSS breaks at 1023, 767 and 599px rather than the 900px under Page.

### Legacy in code

`globals.css` still defines the `--omd-*` proof-sheet tokens of the 2026-10-01 landing, which no component reads, and names `--font-schibsted` and `--font-pretendard`, which nothing defines. Neither is part of this system.
