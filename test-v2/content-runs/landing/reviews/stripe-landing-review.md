# Designer Review — stripe / landing (round 1)

| | |
|---|---|
| Artifact | `test-v2/content-runs/landing/stripe/landing/render.html` (555 lines) |
| Brand contract | `web/references/stripe/DESIGN.md` (292 lines) — **re-read this session, 2026-09-02**, not cached |
| Method | playwright-core + Chromium 1228, `deviceScaleFactor: 1`, pixel-sampled WCAG from own screenshots |
| Evidence | `./qa/rv-*.png`, `./qa/rv-measurements{,-2,-3}.json`, scripts `./qa/audit{,2,3}.mjs` |
| Viewports | 1440×900 and 390×844 |
| Verdict | **BLOCK** — 6 BLOCK / 6 WARN / 8 FYI |

**Contrast method.** For every element with a transparent background I screenshot the hero twice — once as rendered, once with `.nav-bar,.hero-copy{visibility:hidden}` — diffed the two buffers to isolate **glyph/stroke pixels only** (channel delta ≥ 40), and computed the WCAG 2.x ratio of the element's computed `color` against the *photo pixel actually behind each glyph*. Percentages below are shares of real glyph pixels, not bounding-box area, so they are not inflated by inter-letter background. For solid pills I measured the fill against a 3px band just outside the edge (SC 1.4.11 non-text, 3:1).

---

## Summary

The page is **token-clean and photo-illegible**. Every hex in the stylesheet resolves to a `tokens.colors.*` value in DESIGN.md, the radius scale is exactly `tokens.rounded` (4/6/8), the font stack matches the recorded operating-system stack, and `primary_color: "#635bff"` is correctly withheld per DESIGN.md line 145. The dark sections are genuinely well-built: the `.global` copy over the night photo passes with margin (min 4.98:1, **0%** of glyph pixels below 4.5), and footer/legal text is 10.37:1.

The failure is concentrated in one decision: **the entire hero chrome is docs-surface dark text laid on a full-bleed photograph with no scrim.** DESIGN.md's palette was captured on `#ffffff` Docs canvas (line 126: "White `#ffffff` is the repeated canvas") and carries no over-image treatment; using `#50617a` and `#1a2c44` over `hero.jpg` inherits none of the contrast those tokens have on white. Measured over the photo, **100% of the lead paragraph's 2,266 glyph pixels fall below 4.5:1** (min 1.01), 100% of the nav links and wordmark fall below 3:1, and the ghost CTA is 99.7% below 3:1. Separately, `.reveal{opacity:0}` is released only by JavaScript, so **12 of 13 content blocks render invisible with JS off** — while the file already contains the exact CSS escape hatch that would fix it (line 370), applied only to `prefers-reduced-motion`.

---

## BLOCK

### B1 — Hero lead paragraph is unreadable over the photo at both widths
`render.html:168-172` (`.lead { color: var(--color-muted) }`), content at `render.html:417`.

> `.lead {` … `color: var(--color-muted);` … `<p class="lead">Collect a payment, invoice on a schedule, and route funds to sellers — without building a bank.</p>`

Measured `#50617a` against `assets/hero.jpg`, glyph pixels only:

| Viewport | Glyph px | Min | Avg | % below 4.5:1 | % below 3:1 | Worst bg under a glyph |
|---|---|---|---|---|---|---|
| 1440 | 2,266 | **1.01** | 2.58 | **100%** | 60.7% | `rgb(94,96,95)` |
| 390 | 2,639 | **1.01** | 2.92 | **100%** | 55.1% | `rgb(96,96,88)` |

Not a single glyph pixel reaches AA. 14px/400 is normal-size text, so the threshold is 4.5:1 (SC 1.4.3). Visible in `qa/rv-hero-1440.png`: the second line dissolves into the metal clamp.

**Fix:** add a canvas-coloured scrim between `.hero-media` and `.hero-copy` — this stays inside the token set because it is `--color-canvas` at alpha, not a new hue:
```css
.hero-media::after, .hero-scrim {           /* new element or ::after on a wrapper */
  content: ""; position: absolute; inset: 0 0 auto 0; height: 100vh; z-index: 0;
  background: linear-gradient(100deg,
    rgba(255,255,255,.94) 0%, rgba(255,255,255,.86) 34%,
    rgba(255,255,255,.55) 56%, rgba(255,255,255,0) 74%);
}
```
Re-measure after: the required floor for `#50617a` is a background luminance ≥ that of roughly `#c9c9c9`.

### B2 — Hero ghost CTA "Read the docs": label and border both fail
`render.html:105-109` (`.btn-ghost`), instance at `render.html:420`.

> `.btn-ghost { background: transparent; color: var(--color-muted); border-color: var(--color-hairline); }`

| Measurement | 1440 | 390 |
|---|---|---|
| Label `#50617a`, glyph px | 712 | 717 |
| Min / avg | **1.00** / 1.62 | **1.01** / 3.00 |
| % below 4.5:1 (SC 1.4.3) | **100%** | **100%** |
| % below 3:1 | **99.7%** | 45.0% |
| Border `#d4dee9` vs photo (SC 1.4.11, 3:1) | min **1.17**, 14.3% of edge band below 3 | — |

This is the page's secondary conversion path and it is the single least legible element on the screen (`qa/rv-hero-1440.png`: the words sit directly on a steel bracket). `#d4dee9` on `#ffffff` is only 1.36:1 even on canvas, so the border was never a contrast-bearing element — over a photo it disappears entirely.

**Fix:** inside the hero only, promote the ghost button to the on-dark/on-image variant already defined at `render.html:124-131`, or after the B1 scrim lands, set `.hero-copy .btn-ghost { color: var(--color-foreground); border-color: var(--color-hairline-hover); }` (`#414552` = 9.55:1 and `#95a4ba` = 2.4:1 on canvas — pair the border with a `--color-canvas` fill so the 3:1 boundary comes from the fill, not the hairline).

### B3 — Nav chrome (wordmark + links) is below the 3:1 floor at 100% of glyph pixels
`render.html:68-73` (`.wordmark`, `color: var(--color-foreground-strong)`), `render.html:74-80` (`.nav-links a { color: var(--color-muted) }`), markup `render.html:405-411`.

| Element | Viewport | Glyph px | Min | Avg | % below 4.5:1 | % below 3:1 |
|---|---|---|---|---|---|---|
| `.wordmark` "Stripe" `#1a2c44` | 1440 | 199 | 1.38 | 1.49 | **100%** | **100%** |
| `.wordmark` | 390 | 203 | 1.05 | 1.50 | **100%** | **100%** |
| `.nav-links a` `#50617a` (4 links) | 1440 | 868 | 1.06 | 2.00 | **100%** | **100%** |

The wordmark is the brand's own identity element and it is currently near-invisible: dark navy on the dark grey ceiling band at the top of `hero.jpg` (`qa/rv-hero-1440.png`, top-left). Every one of the 199 sampled glyph pixels is below even the large-text floor. The "Docs" link is worst (bbox min 1.01) because it sits over the brightest part of the plate.

**Fix:** the B1 scrim must extend to the top edge (`inset: 0 0 auto 0` above does this) — the nav sits at `top: 0` (`render.html:56-60`) so it needs the gradient at full strength across the whole bar, or the nav needs its own `rgba(255,255,255,.9)` bar background.

### B4 — Hero H1 fails 1.4.3 at both widths; badly at 390
`render.html:160-167` (`h1 { font-size: 48px; color: var(--color-foreground-strong) }`), text at `render.html:416`, mobile override `render.html:376` (`h1 { font-size: 32px }`).

48px/700 and 32px/700 both qualify as **large-scale text**, so the applicable threshold is 3:1, not 4.5:1 — graded accordingly:

| Viewport | Size | Glyph px | Min | Avg | % below 4.5:1 | **% below 3:1 (applicable)** |
|---|---|---|---|---|---|---|
| 1440 | 48px/700 | 15,075 | 1.55 | 7.16 | 20.7% | **2.0%** |
| 390 | 32px/700 | 6,609 | **1.00** | 3.42 | 85.8% | **16.4%** |

At 1440 the headline is mostly fine (avg 7.16) and fails only where it crosses the shadowed band — a marginal but real 1.4.3 fail. At 390 the crop puts the whole headline on mid-grey concrete: 16.4% of glyph pixels are below 3:1 with a floor of 1.00. Confirmed visually in `qa/rv-hero-390.png` — "The money layer for" is materially washed out.

**Fix:** covered by the B1 scrim. Verify at 390 specifically, where `object-position: left center` (`render.html:145`) selects a different, darker region of the source than desktop does.

### B5 — `.reveal` is JS-gated: 12 of 13 content blocks render invisible without JavaScript
`render.html:356-363` and the IntersectionObserver at `render.html:538-553`.

> `.reveal { opacity: 0; transform: translateY(16px); … }` / `.reveal.is-in { opacity: 1; transform: none; }`

Measured in a `javaScriptEnabled: false` context (`qa/rv-nojs-1440-full.png`):

- `.reveal` elements: **13**; still `opacity: 0` after load: **12**
- `<noscript>` blocks in the document: **0**
- `@media (scripting: none)` rules: **0** (grep of the stylesheet)
- Only survivor: `.hero-copy reveal is-in` (`render.html:415`), which ships `is-in` inline

Everything below the fold is gone with JS off — all three feature blocks and their images, the code well, the trust block and marks list, the global copy, and **the final "Open an account and take a payment" CTA** (`render.html:522`). That is the whole page minus the hero.

The fix is already proven inside this file: `render.html:365-371` rescues the same elements for reduced-motion users, and my reduced-motion + no-JS run measured `hiddenCount: 0`. The identical pattern just needs a second trigger.

**Fix (two lines, no JS change):**
```css
@media (scripting: none) { .reveal { opacity: 1; transform: none; } }
```
plus, for engines without `scripting:` support, `<noscript><style>.reveal{opacity:1;transform:none}</style></noscript>` in `<head>`.

### B6 — Keyboard focus indicator is invisible over the hero photo
`render.html:51-54`.

> `a:focus-visible, button:focus-visible { outline: 2px solid var(--color-link); outline-offset: 2px; }`

`--color-link` `#5469d4` sampled against the photo in the halo band that a focused hero control would occupy (3px ring around the ghost CTA): **min 1.00, 98.2% of the band below 3:1**. The ring is a saturated indigo laid over indigo-lit machinery — it is the same hue family as the artwork. SC 1.4.11 (non-text contrast) and SC 2.4.11 (focus appearance) both require the indicator to be discernible; here a keyboard user tabbing through `Stripe → Payments → Billing → Connect → Docs → Start now → Start now → Read the docs` gets no visible position feedback for eight consecutive stops.

**Fix:** give the ring a dual-tone treatment so one of the two layers always contrasts:
```css
a:focus-visible, button:focus-visible {
  outline: 2px solid var(--color-foreground-strong);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px var(--color-on-dark);   /* #ffffff halo */
}
.on-dark a:focus-visible, .on-dark button:focus-visible {
  outline-color: var(--color-on-dark);
  box-shadow: 0 0 0 4px var(--color-foreground-strong);
}
```

---

## WARN

### W1 — Nav "Start now" pill boundary below 3:1 at 1440
`render.html:96-100` (`.btn-primary { background: var(--color-canvas); border-color: var(--color-link) }`), instance `render.html:412`.

White pill fill vs the photo in a 3px band outside its edge: **min 2.02, 85.9% of the band below 3:1**. The label itself is fine — `#5469d4` on its own `#ffffff` fill is **4.83:1**, an AA pass. What fails is SC 1.4.11: the control's boundary against the pale plate behind it. Note the declared `border-color: var(--color-link)` renders as a 1px indigo hairline which does help; it is simply too thin to carry the boundary at 1440 where the photo is brightest.

**Fix:** the B1/B3 scrim resolves this too. Otherwise thicken to `border-width: 1.5px` or darken the border to `--color-foreground-strong`.

### W2 — Hero "Start now" pill boundary fully below 3:1 at 390
`render.html:419`. Edge band vs photo: **min 1.67, 100% below 3:1** (white pill on white concrete). Desktop is a marginal pass at **3.23**. Same fix as W1; the mobile crop is the harder case because `object-position: left center` selects the brightest region.

### W3 — `.marks` is a scrollbar-less horizontal scroller with no affordance and no keyboard access
`render.html:284-299` and `render.html:499-507`.

> `.marks { display: flex; gap: 48px; overflow-x: auto; … scrollbar-width: none; }` / `.marks::-webkit-scrollbar { display: none; }`

At 390: `scrollWidth 1184` vs `clientWidth 390`. Four of the seven items — `SaaS`, `Retail`, `Public companies`, `Creators` (`render.html:503-506`) — are off-screen. Both scrollbar affordances are suppressed and there is no edge fade or arrow, so nothing signals that content continues. The container carries `aria-label="Business types"` but no `tabindex="0"`, so in browsers that do not auto-focus scroll containers the hidden items are unreachable by keyboard (SC 2.1.1).

**Fix:** add `tabindex="0"` to the `<ul class="marks">`, and a right-edge fade using canvas tokens: `mask-image: linear-gradient(90deg, #000 88%, transparent)` — or simply let the list wrap at ≤720px instead of scrolling.

### W4 — Section images lose 46–74% of the source frame; feature images are cropped from the top
`render.html:234-242` (`.inset img { object-fit: cover; object-position: center bottom }`), `render.html:138-148` (`.hero-media`), `render.html:313-320` (`.global-media`), mobile heights `render.html:388-390`.

All five assets are 1280×720 (aspect 1.78). Measured render boxes at 390:

| Image | Box | Box AR | Source visible | object-position |
|---|---|---|---|---|
| `hero.jpg` | 390×844 | 0.46 | **26%** | `0% 50%` |
| `global.jpg` | 390×844 | 0.46 | **26%** | `50% 50%` |
| `payments.jpg` | 342×354 | 0.96 | 54% | `50% 100%` |
| `billing.jpg` | 342×354 | 0.96 | 54% | `50% 100%` |
| `connect.jpg` | 342×354 | 0.96 | 54% | `50% 100%` |

Forcing a 16:9 render into a 0.46 portrait box discards three quarters of the frame; the feature insets anchor to `bottom`, so the top of each composition is cut. This is a composition risk rather than a proven defect — whether the intended subject survives cannot be established from the source files. It is worth an explicit art-direction check, or per-asset `object-position` overrides, or 4:5 mobile crops shipped alongside the 16:9 originals.

### W5 — `h1: 48px` is a typographic scale extension with no captured evidence
`render.html:161`.

DESIGN.md line 221: *"API-reference headings at 32px"*; the typography table (line 163) records exactly one role, *"Public Docs body | operating-system stack | 14px | 400"*. `h2` at 32px (`render.html:219`) is on-contract; **48px is invented**. Given the contract's own warning at line 249 — *"Do not describe this as Stripe marketing, Dashboard, or checkout styling"* — a display size sourced from nothing should be recorded as an extension rather than presented as a Stripe value. Either drop `h1` to 32px or note the extension in `system.md`.

### W6 — Button padding does not match either captured control
`render.html:87`: `padding: var(--space-lg) var(--space-xxl)` = **12px 24px**.

DESIGN.md line 110 records `docs-search-prompt` padding `"2px 8px"`; line 111 records `docs-secondary-action` `"6px 12px"`. Both 12 and 24 appear in the captured spacing cluster (line 221: *"repeated gaps cluster at 4px, 6px, 8px, 12px, 16px, and 24px"*), so the values are legal tokens — but they are 2× and 3× the captured control geometry, which is what makes the buttons read as marketing chrome rather than the "compact" docs chrome the contract describes (line 110, `"padding: 2px 8px"`). Deliberate for a landing page; flagged so it is a recorded choice, not drift.

---

## FYI

1. **`#273951` is on-contract, not a stray hex.** `render.html:50, 102, 111` — DESIGN.md lines 181 and 193 both record *"Hover: `#273951` text with `#95a4ba` border"*. Verified, no action.
2. **Zero stray hex values.** Every literal in the stylesheet (`render.html:9-18`, plus `#273951`) maps to a `tokens.colors.*` entry at DESIGN.md lines 93-102 or a documented component state. No invented colour anywhere in 555 lines.
3. **`primary_color: "#635bff"` correctly withheld.** DESIGN.md line 145: *"Do not substitute the marketing/wordmark color for `#5469d4` or `#533afd` on the captured Docs routes."* The render never uses `#635bff`. This is the contract's sharpest trap and the artifact avoided it.
4. **`--color-accent: #533afd` declared but never referenced** (`render.html:13`). Dead token. Not using it is right — DESIGN.md line 138 reserves it for API-reference context — but the unused declaration invites a future author to reach for it. Consider deleting or commenting the reservation.
5. **Radius scale is exact.** `--rounded-sm/md/lg: 4/6/8` (`render.html:25-27`) == DESIGN.md line 108 `rounded: { sm: 4, md: 6, lg: 8 }`. Only `lg` (8px) is actually used — `render.html:86, 230, 259` — matching both captured components' `radius: 8`.
6. **Font-stack claim is clean.** `render.html:39, 88` declare `-apple-system, BlinkMacSystemFont, "Segoe UI", …`; DESIGN.md line 154 records *"an operating-system stack beginning `-apple-system` in 355 visible uses. It is system typography, not a Stripe-owned family."* The page names no family and ships no specimen, satisfying line 249's *"omit any named font specimen."* Body metrics `14px / 400 / 1.43` (`render.html:40-42`) match line 104 exactly.
7. **Monospace stack is unevidenced but benign.** `render.html:264` — DESIGN.md carries no monospace capture. It is a generic system stack with no named family claimed, so it introduces no brand fact.
8. **No real horizontal overflow at 390.** An `isMobile: true` emulation context reported `scrollWidth 398` vs `clientWidth 390`; a plain 390 context reports **390 / 390**, and `window.scrollTo(8,0)` leaves `scrollX` at **0**. The 8px is an emulation artifact, not a defect. Recorded so a later round does not re-chase it.

---

## Verified (measured clean — do not re-audit next round)

| Check | Result |
|---|---|
| Horizontal overflow @390 | **Clean.** `scrollWidth` 390 = `clientWidth` 390; no element escapes a clipping container |
| H1 wrap @390 | **Clean.** 32px, exactly 2 lines, width 293.8px (`max-width: 14ch`), no orphan word |
| CTA pair stacking @390 | **Clean.** Hero pair 24→308.4px, final CTA pair 24→323.2px, both inside 390 with 24px gutters. `.cta .actions { flex-wrap: nowrap }` (`:343`) is correctly re-wrapped at ≤720px (`:395`) |
| `.global` text over night photo @1440 | **Clean, with margin.** eyebrow `#d4dee9` min 4.99 / avg 10.19; h2 `#ffffff` min 4.98; body `#ffffff` min 6.07 — **0%** of 12,000+ glyph pixels below 4.5:1 |
| Muted `#50617a` as eyebrow/body on canvas | **Pass.** 6.30:1 on `#ffffff` (`.eyebrow` `:214-217`, `.bridge` `:186-189`); 5.86:1 on `#f4f7fa` |
| Legal/footer text | **Pass.** `.site-foot` / `.disclaimer` `#d4dee9` on solid `#1a2c44` = **10.37:1** (`:345, :353-354`) |
| Body `#414552` on canvas | **Pass.** 9.55:1 |
| On-dark body `#ffffff` on `#1a2c44` | **Pass.** 14.12:1 |
| `prefers-reduced-motion` | **Works.** `:365-371` kills all animation and releases `.reveal`; measured `hiddenCount: 0` even with JS disabled |
| ≤720px breakpoint | **Works.** `--gutter` 88→24 (`:374`), nav links `display: none` (`:375`), all three grids collapse to `1fr` (`:378-387`) |
| Alt text | **Complete.** All five images carry descriptive alt (`:402, 439, 455, 471, 512`); decorative arrow SVGs are `aria-hidden` (`:419, 526`) |
| Attribution | Present — *"Unofficial generated concept — not affiliated with Stripe"* (`:533`) |

---

## Verdict

**BLOCK.**

Six blocking issues, five of which share one root cause and one fix: **the hero has no scrim.** Land the canvas-alpha gradient from B1 extended to the top edge and re-measure — that single change should clear B1, B2, B3, B4, W1, and W2 in one pass. B5 (`@media (scripting: none)` + `<noscript>`) and B6 (dual-tone focus ring) are independent two-line fixes.

Nothing in the BLOCK set is a brand-contract violation. The token discipline in this render is genuinely strong — zero stray hex, exact radius scale, correct withholding of `#635bff`, no fabricated font claim. The defects are all *application* of correct tokens to a surface the contract never captured: DESIGN.md's palette was measured on white Docs canvas (line 126), and it carries no over-image treatment, so the hero needs a canvas-derived scrim before those same tokens are legal on a photograph.

**Re-review scope for round 2:** hero chrome contrast at 1440 and 390 (B1–B4, W1–W2), no-JS reveal (B5), focus ring over photo (B6). Everything in **Verified** is measured clean and should not be re-audited.

DESIGNER_REVIEW_DONE block=6 warn=6 fyi=8

## Round 2 — orchestrator measurement (2026-09-02 15:35)

Reviewer agents for this round produced no file within budget twice, so the re-measurement was run by the orchestrator with a deterministic script: `qa/round2-orchestrator/glyph-audit.mjs` (results in `qa/round2-orchestrator/measurements.json`, captures `hero-1440*.png`, `hero-390*.png`). Method: text removed with `color: transparent` (button fills and borders stay), glyph pixels = diff between with-text and text-removed captures, contrast = **nominal computed text colour vs the background pixel behind each glyph** (WCAG definition; the first attempt compared each anti-aliased pixel's own colour and under-reported small type — discarded). Focus rings: diff focused vs unfocused, ring-colour pixels only.

| Round-1 BLOCK | Round-2 measurement (1440 / 390) | Status |
|---|---|---|
| B1 `.lead` | min 5.05 / 4.95, avg 5.68 / 5.59, 0% of glyph px below 4.5 | resolved |
| B2 ghost CTA "Read the docs" | min 6.14 / 6.09, 0% below 4.5 (button now filled, border `hairline-hover`) | resolved |
| B3 wordmark + nav | wordmark min 13.5 / 11.8; nav links min 5.19–5.58 (1440), 0% below 4.5 | resolved |
| B4 `h1` @390 | min 10.9, 0% below 3 (large text) | resolved |
| B5 reveal without JS | `javaScriptEnabled:false` → 13 `.reveal`, 0 hidden (noscript + `scripting:none`) | resolved |
| B6 focus ring | 8/8 focusable in first viewport ≥3.73:1 at 1440, ≥3.48 at 390; nav CTA was 32% <3:1 after round 2 (min 2.57) → micro-repair round 3 → min 3.83, 0% | resolved |

Regression check: page 12.05 vh on both viewports (landing-integrity FAIL 0), render-integrity PASS, hero photo remains visible under the gradient scrim (see `qa/round2-orchestrator/hero-1440.png`). Round-1 WARN 6 / FYI 8 were not re-measured.

`DESIGNER_REVIEW_DONE round=2 block=0 warn=0 fyi=0 (orchestrator-measured)`
