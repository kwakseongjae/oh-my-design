# Elice Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Elice (엘리스) is a Korean education company that presents itself on its corporate site as an "AI Full Stack" company. This contract covers three first-party surfaces inspected live on 2026-06-26: the corporate site `https://elice.io/en`, the learning product 엘카데미 at `https://academy.elice.io`, and the account surface `https://accounts.elice.io`. A fourth first-party source, the official GitHub organization `https://github.com/elicer`, contributed a brand-owned avatar only. Surfaces outside those three are not described here, and no value below should be read as covering them.

The two captured chromes differ from each other. The corporate surface is near-monochrome: `#ffffff` canvas, `#191f28` ink, and `#212121` — not a saturated hue — as the primary call-to-action fill. The product surface 엘카데미 sits on `#f0f1f3`, drops body text to `#222222`, and makes brand violet `#7353ea` the primary action fill (엘카데미 로그인 button, links, active-nav tint). The capture establishes where each fill sits. Reading that placement as a deliberate "calm corporate, energetic product" stance — restraint on the marketing surface, brand color leading inside the product — is a derived editorial implementation inference from the verified surfaces; it is not Elice-authored or a separately published UI specification. The source itself records that reading as an editorial one.

Elice is operated by 엘리스그룹 (Elice Group). Its current positioning spans learning (엘카데미 / Elcademy LXP), enterprise upskilling (Elice AX), and the GPU/cloud infrastructure that runs it (Elice Cloud); the source classes that positioning as widely documented public fact together with claims read off the live corporate site, where the hero states the continuum literally: "Learn, build, and execute — AI happens at Elice". The source attributes the 2015 founding and the KAIST roots to general public knowledge rather than to a directly quoted Elice statement, so that founding detail carries weaker authority than the live-surface facts around it and should not be re-cited as an Elice publication.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

- Start a free trial from the corporate site ("Try Free Trial", "Start with Elice").
- Reach Elice from the corporate site's secondary action ("Contact").
- Sign in to the 엘카데미 learning product ("로그인") or sign up ("회원가입").
- Move between 엘카데미 product sections ("탐색", "내 클래스", "대시보드").
- Enter credentials on the account surface ("Email", "Password").
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona section is labelled as fictional archetypes with illustrative names that do not refer to real people, so those entries are not carried into this contract, and none of them is treated as a verified task. Use group level only, at the granularity the named product lines support: learners on 엘카데미, enterprise upskilling through Elice AX, and infrastructure users of Elice Cloud. Naming those three as audience groups is a derived editorial implementation inference from the verified surfaces; it is not Elice-authored or a separately published segmentation.

### Distinctive traits

The values below are the computed ones. Where an item describes how a value is used rather than what it is — the accent family held for gradients and emphasis, the rounding read as one consistent system, the split read as a two-surface pattern — that usage reading is a derived editorial implementation inference from the verified surfaces; it is not Elice-authored or a separately published UI specification.

- Two-surface color split: dark `#212121` corporate CTA on `elice.io`, brand violet `#7353ea` product action on `academy.elice.io`
- Elice DX Neolli, the company's proprietary display typeface, on every headline, section title, and statistic at 40px / weight 500 / 48px line-height / `-2.4%` tracking
- Pretendard Variable for body (16px / 1.5) and UI labels (14px / weight 600); product nav labels soften to weight 500
- Ink is not pure black on either captured surface — `#191f28` on the corporate one, `#222222` on the product
- Flat depth: `box-shadow: none` computed across nav, hero, cards, and chips on both surfaces; separation is the `rgba(102,113,126,0.04)` tint, the `#f0f1f3` product surface, and `1px solid #e9ebf0` hairlines
- A violet→blue→magenta accent family (`#7353ea`, `#524fa1`, `#7875c8`, `#2f5efb`, `#00a6ff`, `#b853ea`) used for gradients, illustration, and emphasis rather than chrome
- Consistent rounding: 8px buttons and corporate nav items, 16px and 24px cards, 4px chips, 500px pills
- Status palette: green `#00ab53` with `#1b5e20` badge text on the `#dfebe0` tint, coral `#fa466a` for alerts

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not Elice-authored or a separately published UI specification. The source names the first and third of them as editorial readings connecting the observed design to Elice's positioning.

1. **One continuum: learn, build, execute.** Elice frames education, building, and operation as a single capability. *UI implication:* keep navigation and surfaces consistent across learning, product, and infrastructure so the journey reads as one platform.
2. **Proof over hype.** The brand leads with concrete numbers and operational claims, not adjectives. *UI implication:* surface real statistics in the display face; avoid decorative superlatives.
3. **Calm corporate, energetic product.** *UI implication:* hold brand violet `#7353ea` as an accent on the marketing site and let it lead as the primary action inside the product.
4. **Flat and fast.** Modern shadowless clarity over decorative depth. *UI implication:* separate with `rgba(102,113,126,0.04)` tints and `#e9ebf0` hairlines; never reach for drop shadows.
5. **Bespoke where it speaks, neutral where it informs.** *UI implication:* Elice DX Neolli for headlines and stats; Pretendard for everything functional.

### Avoid

These 10 prohibitions are a derived editorial implementation inference from the verified surfaces; they are not Elice-authored or a separately published UI specification. Eight of them restate the source's own prohibition list; the last two are evidence-boundary rules that follow from the surface limits stated in Scope.

- Do not use drop shadows for elevation — the captured surfaces are flat and shadow-free.
- Do not spread brand violet `#7353ea` across the corporate marketing chrome; there it stays an accent.
- Do not use pure black (`#000000`) for body text — use `#191f28` or `#222222`.
- Do not set headlines in a heavy weight — display is a calm weight 500, not bold.
- Do not use Pretendard for large headlines — Elice DX Neolli owns display.
- Do not mix in accent hues outside the violet→blue→magenta family.
- Do not use positive letter-spacing on display; headlines track tight at `-2.4%`.
- Do not stack many radii on one surface — 8px is the default workhorse.
- Do not present these three inspected surfaces as proof of Elice behaviour anywhere else.
- Do not substitute another family, or a system stack, for Elice DX Neolli.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

**Brand**

- **Elice Violet** (`#7353ea`): the brand's signature color and the primary-action color on the product surface (엘카데미 로그인 button, links, active-nav tint). On the corporate site it appears as gradient and accent rather than chrome.
- **Deep Indigo** (`#524fa1`): the classic Elice deep-indigo brand mark; the dominant accent text color on the product surface.
- **Light Violet** (`#7875c8`): a lighter violet used in illustration, decorative fills, and secondary emphasis.

**Ink and text**

- **Ink Navy** (`#191f28`): corporate primary heading and body text — a deep blue-black rather than pure black.
- **Ink Strong** (`#212121`): the corporate primary-CTA background and nav text color.
- **Body Grey** (`#222222`): product-surface (엘카데미) body text color.
- **Slate** (`#343e4b`): secondary heading and body color on the corporate site.
- **Muted** (`#66717e`): tertiary text, captions, and the base of the `rgba(102,113,126,0.04)` card tint.

**Accent (gradient family)**

- **Royal Blue** (`#2f5efb`): gradient and emphasis accent.
- **Sky Blue** (`#00a6ff`): bright blue accent for illustration and highlights.
- **Magenta** (`#b853ea`): the warm end of the violet→magenta gradient set.

**Status**

- **Success Green** (`#00ab53`): success state and positive status text on the product.
- **Success Deep** (`#1b5e20`): recruiting/hiring badge text color.
- **Success Tint** (`#dfebe0`): mint background for the recruiting/hiring badge.
- **Coral** (`#fa466a`): alert, error, and attention accent on the product.

**Surface and borders**

- **Pure White** (`#ffffff`): page background, cards, and text on violet or dark fills.
- **Surface Grey** (`#f0f1f3`): product page background tint.
- **Hairline** (`#e9ebf0`): card borders, dividers, and soft-button fills — the separation device in a shadowless system.

Each value carries the surface the source attributes it to; the three gradient accents are named as a palette family, without a per-element selector. The corporate action fill and the product action fill are not interchangeable, and neither generalizes to a surface outside the three inspected here. Stating that non-interchangeability as a rule is a derived editorial implementation inference from the verified surfaces; it is not Elice-authored or a separately published UI specification. What the capture establishes on its own is only that the two fills occupy the same role on different surfaces.

### Spacing

Base unit 8px. Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px. Cards carry 32px internal padding; button padding is 8px 16px.

### Shape

- Small (4px): chips, small status pills, product nav items
- Medium (8px): buttons, corporate nav items, product inputs
- Large (16px): tinted cards
- XL (24px): bordered feature cards
- Pill (500px): occasional full-round elements
- Square (0px): the underline auth field, whose separation is its bottom border

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `rgba(102,113,126,0.04)` / `#f0f1f3` fill | Card and section separation without elevation |
| Hairline (Level 2) | `1px solid #e9ebf0` border | Bordered feature cards, dividers |

Live inspection computed `box-shadow: none` across the nav, hero, cards, and chips on both `elice.io` and `academy.elice.io`. Depth and grouping are carried entirely by flat tinted fills and thin `#e9ebf0` hairlines, and emphasis reaches for color — brand violet `#7353ea` or the gradient accent family — rather than elevation. Reading that shadowless treatment as an intentional signal of a clean, modern, fast education product is a derived editorial implementation inference from the verified surfaces; it is not Elice-authored or a separately published UI specification.

### Motion

| Duration token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, dropdown, tab switch |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Easing roles: `ease-enter` for arriving elements (cards, sheets, menus), `ease-exit` for dismissals, `ease-standard` for two-way transitions. The source record attributes the three exact curve values behind these roles to neither an Elice publication nor the 2026-06-26 inspection, so those three values are omitted while the role names and their uses remain. Promote a curve only after a per-component observation on an Elice surface records all five of: transition properties, animation name, duration, easing, and reduced-motion behaviour. A single confirmed curve does not satisfy that condition.

Motion rules: motion is functional and quiet; buttons respond to press with a subtle opacity/scale shift; content fades in from below at `motion-standard` with `ease-enter`; no bounce or spring. Under `prefers-reduced-motion: reduce` all transitions collapse to instant and the product remains fully functional. The duration table above, the easing role assignments that follow it, and these rules appear in the source without attribution to a live capture or to a published Elice specification, so they are a derived editorial implementation inference from the verified surfaces; they are not Elice-authored or a separately published motion specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The source records `Elice DX Neolli` as the company's own proprietary display typeface, set on every hero headline, section title, and statistic at weight 500. |
| Live computed surface-use (corporate) | The 2026-06-26 inspection computed hero, section, and statistic headings on `https://elice.io/en` as `Elice DX Neolli` at 40px / weight 500 / 48px line-height / `-2.4%` tracking, and body text as Pretendard Variable at 16px / 24px in `#191f28`. |
| Live computed surface-use (product and account) | `https://academy.elice.io` computes body text as Pretendard in `#222222` on `#f0f1f3`. `https://accounts.elice.io` computes its auth fields at 14px in `#191f28`. |
| Official distributed asset | The source carries no distributed Elice type asset and no license statement for `Elice DX Neolli`. It is a proprietary face rendered on the captured corporate surface; its availability as a file outside that surface is unresolved. |
| Outside these captures | Typography on Elice surfaces other than the three inspected here is unresolved and is omitted rather than reconstructed. |

### Family

- **Display:** `Elice DX Neolli` — the proprietary display face; every hero headline, section title, and statistic at weight 500.
- **Body / UI:** `Pretendard Variable`, with `Pretendard` as the recorded fallback — the default for body copy, navigation, and button labels.
- Do not substitute a system stack or a different family for `Elice DX Neolli`. Where that face is unavailable, the display role is unresolved rather than reassigned.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Notes |
|---|---|---:|---:|---:|---:|---|
| Display / Hero | Elice DX Neolli | 40px (2.50rem) | 500 | 1.20 (48px) | -2.4% | Hero headlines, section titles, stats |
| Body | Pretendard Variable | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Standard reading text |
| Nav / Button | Pretendard Variable | 14px (0.88rem) | 600 | 1.50 (21px) | normal | Top-nav items, button labels |
| Nav (product) | Pretendard | 14px (0.88rem) | 500 | 1.50 | normal | 엘카데미 nav items |
| Badge | Pretendard | 11px (0.69rem) | 500 | normal | normal | Status pill labels |

These four typographic readings — a bespoke display over a neutral body as the system's primary hierarchy signal; one display size repeated across headlines, section heads, and statistics instead of a steep scale; tight `-2.4%` tracking on display against normal tracking on body and UI; and Pretendard at 16px / 1.5 as a hangul-first body setting — are a derived editorial implementation inference from the verified surfaces; they are not Elice-authored or a separately published UI specification. The metrics they describe are the computed ones in the table above.

### Assets

- Catalog logo pointer: `https://www.google.com/s2/favicons?domain=elice.io&sz=128`. This is a third-party favicon proxy recorded as the catalog's logo reference, not an Elice-published logo asset, and it must not be presented as brand artwork.
- `https://github.com/elicer` is the official brand-owned GitHub organization. The 2026-06-26 pass took its avatar from it and nothing else.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The 2026-06-26 inspection recorded default computed styles. No hover, focus, or pressed paint is promoted for any component; the only interaction language the source carries for them is the `motion-fast` duration use. The one exception is the product nav item, whose active treatment was computed and is kept below.

Declared interactive components still close Core §4.4 applicability by control meaning rather than by capture completeness. `default` and `focus-visible` apply. Every other canonical state that is meaningful for the control stays applicable with its visual treatment omitted; where a state is marked `not-applicable`, the reason given is the control's role, never the absence of an observation. State coverage here is not claimed complete.

### Corporate Primary CTA (Dark)

- Role: corporate primary call to action ("Try Free Trial", "Start with Elice")
- Kind: interactive — `button`
- Background: `#212121`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 16px
- Height: 40px
- Font: 14px / 600 / Pretendard
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the corporate surface |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | The action it starts can be in progress on the control; visual treatment omitted |
| error | applicable | The action can fail and report on the control; visual treatment omitted |
| success | applicable | The action can confirm on the control; visual treatment omitted |

### Product Primary CTA (Violet)

- Role: 엘카데미 primary action ("로그인" / sign-in)
- Kind: interactive — `button`
- Background: `#7353ea`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 16px
- Height: 40px
- Font: 14px / 600 / Pretendard
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the product surface |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | Sign-in runs while the control waits; visual treatment omitted |
| error | applicable | Sign-in can fail and report on the control; visual treatment omitted |
| success | applicable | Sign-in can confirm on the control; visual treatment omitted |

### Outline Button (Secondary)

- Role: corporate secondary action ("Contact"); on dark sections the border switches to `#ffffff`
- Kind: interactive — `button`
- Text: `#212121`
- Radius: 8px
- Padding: 7px 15px
- Border: `1px solid rgba(33,33,33,0.5)`
- Font: 14px / 600 / Pretendard
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the corporate surface |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | The action it starts can be in progress on the control; visual treatment omitted |
| error | applicable | The action can fail and report on the control; visual treatment omitted |
| success | applicable | The action can confirm on the control; visual treatment omitted |

### Soft Button (Tertiary)

- Role: 엘카데미 tertiary action ("회원가입" / sign-up)
- Kind: interactive — `button`
- Background: `#e9ebf0`
- Text: `#222222`
- Radius: 8px
- Padding: 8px 16px
- Height: 40px
- Font: 14px / 600 / Pretendard
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the product surface |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | Sign-up runs while the control waits; visual treatment omitted |
| error | applicable | Sign-up can fail and report on the control; visual treatment omitted |
| success | applicable | Sign-up can confirm on the control; visual treatment omitted |

### Product Nav Item

- Role: 엘카데미 top-nav item ("탐색", "내 클래스", "대시보드")
- Kind: interactive — `tab`
- Text: `#212121`
- Radius: 4px
- Padding: 8px 12px
- Font: 14px / 500 / Pretendard
- Active (computed): `rgba(115,83,234,0.08)` tint with a `#7353ea` label

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the product surface |
| hover | applicable | Pointer-web navigation item; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A product section can be unavailable to the current account; visual treatment omitted |
| loading | not-applicable | The item selects a destination; whatever it fetches reports inside that destination, not on the item |
| error | not-applicable | The item submits and validates nothing of its own, so it has no failure to express |
| success | not-applicable | The item has no completion to confirm; selection is already expressed by the active tint |

### Underline Auth Field

- Role: auth field on the account surface ("Email", "Password")
- Kind: interactive — `input`
- Text: `#191f28`
- Border: `1px solid #e9ebf0`, drawn as a bottom underline
- Radius: 0px
- Padding: 16px 12px
- Height: 52px
- Font: 14px / Pretendard
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the account surface |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | The field can be locked while the credential check runs; visual treatment omitted |
| error | applicable | Form field with validation; visual treatment omitted |
| success | applicable | Form field with validation; visual treatment omitted |

### Bordered Feature Card

- Role: feature or content card separated by a hairline
- Kind: non-interactive — source `type: card`. The source gives it a fill, a border, and a radius, and assigns it no control role, label, or interaction. A state-applicability map is therefore not declared for it.
- Background: `#ffffff`
- Border: `1px solid #e9ebf0`
- Radius: 24px
- No shadow

### Tinted Card

- Role: whisper-grey content card on white
- Kind: non-interactive — source `type: card`, on the same grounds as the bordered card: a container fill and geometry, with no control role assigned.
- Background: `rgba(102,113,126,0.04)`
- Radius: 16px
- Padding: 32px

### Recruiting / Hiring Badge

- Role: status pill ("Recruiting", "Hiring")
- Kind: non-interactive — source `type: badge`; a status label. It reports a condition rather than accepting input, so a state-applicability map is not declared for it.
- Background: `#dfebe0`
- Text: `#1b5e20`
- Radius: 4px
- Font: 11px / 500 / Pretendard

### Top Navigation Bar

- Role: top horizontal navigation — "Elice AX", "Elice Cloud", "Resources" on the corporate surface; "탐색", "내 클래스", "대시보드" on the product surface
- Kind: non-interactive container — the interactive unit is the nav item declared above, so applicability is closed there rather than on the bar.
- Background: `#ffffff`
- Text: `#212121` at 14px / weight 600 (corporate) and 14px / weight 500 (product)
- Item radius: 8px (corporate), 4px (product)
- Item padding: 8px 16px (corporate), 8px 12px (product)
- Active item (product): `rgba(115,83,234,0.08)` tint with a `#7353ea` label

### Product state contract

The nine rows below are the source's state language for the product experience, kept in full with their verbatim Korean examples. They are a derived editorial implementation inference from the verified surfaces; they are not Elice-authored or a separately published state specification, and they are not per-component paint values for the controls declared above.

| State | Treatment |
|---|---|
| **Empty (no courses / no results)** | White canvas. Single Ink (`#191f28` / `#222222`) line explaining there's nothing yet, with one violet `#7353ea` CTA to explore. No illustration clutter. |
| **Empty (dashboard, no activity)** | Muted (`#66717e`) single line plus a path to start a course. Honest, calm. |
| **Loading (course list fetch)** | Skeleton cards on `rgba(102,113,126,0.04)` tint at final dimensions, 16px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (code/AI run)** | Inline progress within the run panel; previous output stays visible until the new result arrives. |
| **Error (run/network failed)** | Inline message in coral (`#fa466a`) tone with a plain-language explanation and a retry. Never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the underline input; describes what's valid, not just "필수". |
| **Success (submission / enrollment)** | Brief confirmation in the green (`#00ab53`) status tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `rgba(102,113,126,0.04)` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Muted (`#66717e`) text on a reduced-opacity surface; violet actions fade rather than turn grey to preserve brand read. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Spacing on the captured surfaces runs off an 8px base: 4px, 8px, 12px, 16px, 24px, 32px, 48px. Cards carry 32px internal padding; buttons carry 8px 16px.

The corporate layout is a centered single column: a hero anchored by the 40px Elice DX Neolli headline, statistic rows ("13,000 +", "2,810,000 +") set in that same display face at 40px, and feature sections alternating white (`#ffffff`) and tinted (`rgba(102,113,126,0.04)`) bands. The product surface sits on `#f0f1f3`. Cards group related content at 16px (tinted) and 24px (bordered) radii.

Sections are separated by background tint and `#e9ebf0` hairlines rather than by shadow, and the display size and the 8px button radius repeat rather than escalate. Reading that as a "breathing room over density" whitespace philosophy with an even, calm cadence is a derived editorial implementation inference from the verified surfaces; it is not Elice-authored or a separately published layout specification.

The source names three breakpoints — Mobile below 640px (single column, hero headline compresses, stat rows stack), Tablet 640px to 1024px (moderate padding, 2-up feature cards), and Desktop 1024px to 1440px (full layout, centered hero, multi-column feature bands) — along with a hero headline that scales down on mobile while holding weight 500, feature bands collapsing from multi-column to a stacked single column, alternating tinted and white sections staying full-width, stat rows stacking, illustrations and product screenshots staying shadowless at any size, and cards holding their 16px and 24px radii across breakpoints. It also gives touch-target heights: buttons at 40px with 8px 16px padding, nav items at 40px within the header, and auth inputs at 52px. The 2026-06-26 record is a desktop computed-style inspection, so all of this breakpoint and touch-target behaviour is a derived editorial implementation inference from the verified surfaces; it is not Elice-authored or a separately published responsive specification.

All three inspected surfaces are web. This contract declares no other platform profile, and the values above should not be carried to one without evidence from that platform.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Three strings are recorded as verbatim from the live surfaces on 2026-06-26:

- "Learn, build, and execute — AI happens at Elice" — corporate hero headline
- "AI-powered, reliable education operation" — section heading
- "엘카데미 | 오늘 배워서 내일 바로 적용하는 실습중심 AI 교육" — product page title

Alongside them the source records the section head "Stable AI development and operation infrastructure", the statistics "13,000 +" and "2,810,000 +", and the CTA labels "Try Free Trial", "Contact", "로그인", and "회원가입".

Characterizing the voice as confident, capability-forward, and plainly technical, reading the register per context as in the table below, and naming the forbidden register that follows it, are a derived editorial implementation inference from the verified surfaces; they are not Elice-authored or a separately published voice guide. The strings they describe are the verbatim ones above.

| Context | Tone |
|---|---|
| Corporate hero | Declarative, capability-framed. "Learn, build, and execute." Confident, not hype. |
| Statistics | Concrete and unembellished. "13,000 +", "2,810,000 +". Numbers as proof. |
| Section heads | Outcome-oriented. "AI-powered, reliable education operation", "Stable AI development and operation infrastructure". |
| Product (엘카데미) | Practical, encouraging, student-facing. "오늘 배워서 내일 바로 적용하는 실습중심 AI 교육". |
| CTAs | Direct, low-pressure. "Try Free Trial", "Contact", "로그인", "회원가입". |

Forbidden register: vague AI hype without proof, fear-based upsell, exclamation-heavy marketing, and undefined jargon left unexplained.

Locales: the corporate surface was inspected at its English route `https://elice.io/en`, while 엘카데미 and its navigation, CTA, and state copy are Korean. The Korean strings recorded in this contract are the published labels. An English gloss may sit beside one for a reader, but it never replaces it, and a Korean label is never re-rendered as an English paraphrase.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

It was assembled from a live inspection of three Elice surfaces plus the brand's own public positioning. It is not an Elice publication, and that publication authority stays with 엘리스그룹.

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

- the exact easing curves behind `ease-enter`, `ease-exit`, and `ease-standard`
- hover, press, and focus paint values for the components declared above
