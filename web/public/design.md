# oh-my-design Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

The site oh-my-design.kr: an archive of measured DESIGN.md files for real companies, plus skills for coding agents. In scope: Home (`/`, `/ko`), the archive (`/design-systems`), the item page (`/design-systems/[id]`, `/ko/design-systems/[id]`), docs, blog, the `/hangul` skill landing, `/what-is-design-md`, FAQ, alternatives and changelog, plus the Japanese and Traditional Chinese roots. Light only: one palette, `color-scheme: light`. This file describes the site itself, not any reference in the archive.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=2 lang=en -->
### Primary tasks

- Find a company from Home or the archive and open its item page.
- On the item page, read the reference beside its preview and take it with the `#use` actions: Copy DESIGN.md and Download.
<!-- design-md:claim-end -->

### Design direction

- One accent. Iris (`#6749e2`) only on the main action, the user's chat bubble, the active step and selected states; the rest of the chrome stays neutral.
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
| Page title | 40px | 760 | Other pages; 32px at 900–1279px, 28px below | Applied on the item page |
| Section heading | 26px | 760 | Sections; 22px on a phone | Item page: 26px, but 23px on a phone |
| Control, large | 16px | 650 | Labels of 48px controls | Approved, not yet applied |
| Control | 15px | 650 | Labels of 40px controls | Applied on the item page's two actions |
| Control, small | 14px | 600 | Labels of 32px controls | Approved, not yet applied |
| Reading body | 17px | 400 | Item page DESIGN.md text; 16px on a phone | In code, outside the approval |

Still in `brand-a.css`, older than this scale: `--sq-fs-h1: clamp(44px, 5.4vw, 82px)`, `--sq-fs-h2: clamp(28px, 3.2vw, 44px)`, `--sq-fs-h3` and `--sq-fs-lede` 19px, `--sq-fs-body` 16px, `--sq-fs-small` 13.5px, `--sq-fs-micro` 12px; weights 780 display, 760 heading, 650 strong.

<!-- design-md:section components-states -->
## 4. Components & States

### Component: action button

**Semantics:** Triggers a named action such as Copy DESIGN.md or Download.

- Anatomy: label, optional-leading-icon
- Variants: primary, line
- States: default, hover, pressed, focus-visible

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | The actions are always available; no disabled style exists. |
| loading | not-applicable | Copy and Download have no waiting state. |
| error | not-applicable | No error style exists. |
| success | not-applicable | No success style exists. |

- **primary**: color.primary fill, color.on-primary label; hover primary-hover, pressed primary-press. One per screen.
- **line**: color.paper with a 1px inset color.guide edge; hover cell, pressed guide-2.
- Pill radius, 18px side padding (16px on a phone), 18px icon, focus outline offset 3px.

### Control sizes

| Size | Height | Label | Use | Status |
|---|---|---|---|---|
| sm | 32px | 14/600 | Inside tables and chips | Approved, not yet applied |
| md | 40px | 15/650 | Default; 44px on a phone | Applied on the item page's first screen |
| lg | 48px | 16/650 | The one main action of a landing first screen | Approved, not yet applied |

The item page's Share is a neutral control: 40px, 14px radius, color.cell; a 44px square icon on a phone.

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

- Concise; command and file names stay exact.

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
- In code: `components/ui/button.tsx` keeps 24–36px sizes; `/what-is-design-md` sets its title in Geist inline; status chips have a 10.5px label; the social images (`/og/reference`, `/og/blog`) still draw the pre-rebrand `#7c5cfc` and `#0a0a0f`.

### Legacy in code

`globals.css` still defines the `--omd-*` proof-sheet tokens of the 2026-10-01 landing, which no component reads, and names `--font-schibsted` and `--font-pretendard`, which nothing defines. Neither is part of this system.
