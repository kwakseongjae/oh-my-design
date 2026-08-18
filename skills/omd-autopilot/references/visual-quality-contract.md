# Visual quality contract (patch 7)

Read this in full before PRODUCT_BUILD. These are yes/no gates, not taste.
Distilled from measured competitor analysis (Hallmark slop gates, Pro Max
token layering) and re-anchored to the design-system-first philosophy: the
system is locked once, every page consumes it, and quality means the page is
faithful to the system WITHOUT collapsing into genre defaults.

## 0. Two absolute product rules

- **P0-1 (state switchers).** States are outcomes of real product
  interactions only. NEVER render a developer/state switcher in the product
  UI — no "Show loading state" radios, no demo toggles, no state menus. If a
  brief names states, build the interaction that produces each state.
  `data-state` markers live on the real components, never on a switcher.
- **P0-2 (native controls).** NEVER ship native unstyled form controls.
  Every radio, checkbox, select, and range is restyled from system tokens
  (`appearance: none` + custom mark, or an equivalent overlay) while keeping
  the accessible native input functional underneath. A default blue radio on
  the page is a shipped bug.

## 1. Token floor (the system must contain these before any page)

- Color in OKLCH, layered: paper / ink / tinted neutrals (5–9 steps, chroma
  0.005–0.015) / ONE accent. Pure `#000`/`#fff` are not base colors. Every
  component reads `var(--color-*)`; an inline hex outside the token file is
  a gate failure.
- Space: 4pt scale with ROLE names, and it must extend past control padding
  into section air — include steps around 2.5rem / 4rem / 6rem and a
  viewport gutter `clamp()`. Section transitions use those; if every gap on
  the page is the same step, the rhythm failed.
- Type: a display/body pair (plus at most one outlier face), even from local
  stacks — a single `system-ui` line has no genre. Display step: `clamp()`
  to ≥2× body size, tracking −0.02 to −0.045em, line-height 1.0–1.1,
  weight ≥700. A LABEL role exists (smaller, uppercase, wide tracking,
  muted). Font-family count ≤3; no italic display; body line-height ~1.5,
  prose measure 45–75ch.
- Motion tokens per the motion section of the skill; additionally banned:
  `transition: all`, bounce/overshoot easing on UI state, more than one
  hover effect stack (translate+scale+shadow+color together), animating
  layout properties, focus rings that fade in.

## 2. Surface genre (pick one, commit)

Choose ONE surface genre per product and hold it on every page:
hairline-rule bands / no-radius ink plates / shadowed tiles. Never repeat
the same `radius + 1px border` box on cards, banners, dialogs, and controls
alike — that is a widget kit, not a design. Elevation states are tokens
(rest / hover / selected), not improvised shadows.

Accent is a SIGNAL, not an area: a dot, a 2–3px rule, a selection ring, or
one inverted chip — total accent coverage ≲5% of any viewport. Never both a
full-card selected wash and a full accent CTA fill on the same screen.

## 3. Component form

- Interactive components implement the full state matrix in code:
  default / hover / focus-visible / active / disabled (+ loading / error /
  success where they exist). Hover must change surface (background, border,
  or shadow), not merely translate. Selection gets a PERSISTENT mark
  distinct from hover (ring, mark, rule). 3D tilt only inside
  `@media (hover: hover) and (pointer: fine)`.
- Input geometry: border-width never changes between states; focus is
  `outline` (reserved slot, instant); input height equals adjacent button
  height; helper/error slots keep `min-height: 1lh`; disabled = opacity +
  `cursor: not-allowed` + native `disabled` (all three).
- Cards separate roles: badge / short proper name / label row / action
  affordance. Empty states and dialogs are DISTINCT surfaces (dashed border
  or native `<dialog>` with styled `::backdrop`), never a muted paragraph
  inside the same card.
- Icons: one family, one stroke width; never emoji as feature icons; never
  two icon libraries. Visuals tier: typography → CSS art → inline SVG →
  (last) libraries. Nothing decorative without `aria-hidden`.

## 4. Page macro-structure

- The first screen is composed, not centered-stacked: provided imagery goes
  into a copy/figure diptych grid (never a cropped strip above a thin
  header bar); without imagery, open with a short display statement
  (~12–22ch). Fold discipline at 1280×800: eyebrow/title/lede/primary
  action visible; hero bottom padding ≥1.3× top.
- Content sites never get the hamburger + sidebar app shell. Sections
  transition through distinct devices (rule, plate inversion, background
  shift), not identical whitespace.
- Page chrome exists: a wordmark in the display role, a sample/issue line
  where honesty requires it, and a footer/colophon — the page must not
  start and end with bare widgets. But nav/footer are CANONICAL: designed
  once in the system, identical on every page, current page marked.
- Fixed-count galleries use authored 1/2/3-column breakpoints, never
  `auto-fit` (the stretched last row is a failure). Image grid tracks are
  `minmax(0, 1fr)`; display headings get `overflow-wrap: anywhere;
  min-width: 0`. No horizontal scroll 320–1920 (`overflow-x: clip`, never
  `hidden`). No nav/CTA/tab label wraps to two lines at any width.
- Contrast: body ≥4.5:1, large text/icons/focus ≥3:1; accent fills define
  an ink counterpart token; dark sections flip text tokens explicitly.

## 5. Multi-page consistency (the system's whole point)

- ONE shared stylesheet holds tokens and components; pages add only page
  layout. `:root` tokens are defined exactly once — a re-declared token
  with a different value on another page is a critical failure.
- Body, headings, nav, and primary action must compute to identical styles
  on every page. Every internal link resolves. The nav link set is
  identical everywhere with `aria-current` on the active page.

## 5a. Locale typography (the content language picks the rules)

Detect the content language and apply its typography contract; Latin rules
do NOT transfer.

Korean (ko):
- Font stacks must COVER Hangul for every role. Body and display:
  `"Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Noto Sans KR",
  "Malgun Gothic", sans-serif`. NEVER let a Latin serif/display face fall
  back to a system serif for Hangul — if no Korean display face exists
  locally, build display hierarchy with WEIGHT (700–800) and size, same
  gothic family.
- `word-break: keep-all` on all Korean prose and headings;
  `overflow-wrap: anywhere` stays on display headings.
- Body line-height 1.6–1.8 (Hangul needs more than Latin). Display 1.15–1.3.
- NO tight letter-spacing on Hangul (−0.01em is the floor; the −0.03em Latin
  display rule does not apply). Numbers/latin fragments inside Korean text
  may use `font-feature-settings "tnum"` and tighter tracking.
- Prices and counts: thousands separators, unit after the number (129,000원).

## 5b. UI copy register (user language only)

- Implementation vocabulary NEVER appears in the UI: no file names
  (data.json), no field/function names (products.length, review_count), no
  dataset/framework words. Screens speak the user's language.
- Aggregate definitions are stated in USER terms: "리뷰 많은 순 상위 4개",
  never "data.json을 내림차순 정렬한 상위 4건".
- Sample/fiction disclosure is ONE quiet line in the footer (plus detail
  pages where money is shown). Never a top banner, never repeated per
  section.

## 5c. SPA fundamentals (route changes behave like pages)

- Every route change scrolls to top (and restores position on back/forward);
  a detail page must never open mid-scroll.
- Focus moves to the new page's h1 (or main) on route change.
- `document.title` updates per page ("상품명 — 서비스명").
- Below-the-fold images `loading="lazy"`; the LCP image is not.

## 5d. Component anatomy (fill the anatomy, don't improvise a card)

- Card anatomy is a spec, not a suggestion: media block and text block share
  the SAME width; body padding is one token step; the internal rows
  (label → title → price → meta → action) use a fixed gap scale
  (e.g. 4/8/12) — never a uniform gap between all rows, price sits closest
  to the title, action is separated by the largest step or a rule.
- List rows: one baseline grid; icons/badges vertically centered to the
  first text line; consistent right-alignment for numbers.
- Never mix aligned and unaligned edges in one card (image edge = text
  edge = action edge).

## 5e. Genre–domain fit (the surface genre must match the product)

- Commerce/catalog: card surfaces with clear boundaries (shadowed tile or
  bordered card), price hierarchy dominant, generous media. Hairline
  editorial rules are for reading surfaces, not shop grids.
- Ops/dashboard: density first — tables, compact rows, status tokens.
- Editorial/content: rule bands, plates, long-form measure.
- Choose the genre FROM the domain, then commit (rule in §2 still holds).

## 6. Self-critique loop (mandatory, one round)

Before declaring the product finished, run ONE fast critique pass and write
`critique.md` in the run directory:

1. Score 5 axes 1–5: Philosophy (does the page take a stance) / Hierarchy
   (1-2-3 order readable in 2s) / Execution (rules, accent, focus, contrast
   are spec-true) / Specificity (looks like THIS brief, not any product) /
   **System Fidelity** (every value traces to a locked token AND the page
   has not collapsed into genre defaults: 3-column icon cards, centered
   hero stack, AI nav/footer, purple gradients).
2. Sweep `references/slop-gates.md` IN FULL (numbered, lossless — do not
   rely on this contract's summaries alone); list every hit by number.
3. Any axis <3 or any P0/critical gate hit → fix now, once. Record
   before/after in `critique.md`. Never fake the scores — the audit that
   follows reads the same DOM.

The SELF-WALK (journey verbs) still runs; this critique is about form, the
SELF-WALK about function. Both fit inside the product budget because they
are checklists, not rebuilds.

## 7. Render-feedback pass (two-pass quality)

Source-level self-review cannot see typography fallbacks, spacing rhythm,
or scroll behavior — only a rendered screen can. When an external reviewer
supplies RENDERED-SCREENSHOT findings for your build (a numbered punch
list), treat every item as a confirmed defect observed on the real screen:
fix each one surgically inside the existing system (token/anatomy-level
changes, not re-architecture), keep all prior contracts intact, and reply
by listing fix-by-fix what changed. Do not dispute a finding you cannot
see; the reviewer is looking at the pixels.
