# Designer review — round 1

**Date:** 2026-09-02T03:40:49Z
**Artifact:** `test-v2/content-runs/landing/toss/landing/render.html` (16 659 B, 511 lines, single-file)
**DESIGN.md:** `web/references/toss/DESIGN.md` — **re-read this round at 2026-09-02T03:40:49Z** (not cached; frontmatter `verified: "2026-07-11"`, `omd: "0.1"`)
**Also read:** `concept.md` (A1–A9), `storyboard.md`, `system.md`
**Viewport:** both — desktop 1440×900, mobile 390×844
**Measurement basis:** `qa/*.png` sampled pixel-wise (sRGB → WCAG relative luminance, `0.2126R+0.7152G+0.0722B`, ratio `(L₁+0.05)/(L₂+0.05)`). Background luminance for text-over-photo is taken from the 4–10 px strips immediately above and below each glyph row, so the figures are the real composited background, not an estimate.

## Summary

- **BLOCK: 6**
- **WARN: 13**
- **FYI: 11**

Four of the six BLOCKs share one root cause: **the hero photo has no scrim.** `.pin-stage::after` (render.html:275–281) gives the Everyday section a white gradient scrim; `.hero` has no equivalent, so every piece of chrome in the first viewport is painted straight onto a mid-luminance photograph. Fixing that one omission clears B1, B2, B3 and most of B5.

---

## Issues

### [BLOCK] B1 — Hero nav links are illegible over the photo (1.05:1–1.30:1, AA needs 4.5:1)

- **Location:** `render.html:80` (`.nav-links a { color: var(--color-muted) }`), markup `render.html:370–375`; rendered in `qa/d-fold.png`
- **Rule:** WCAG 2.2 SC 1.4.3 Contrast (Minimum) — 4.5:1 for text below 18.66 px bold / 24 px regular. Text here is 14 px / 400 (inherited from `body`, render.html:43–45). DESIGN.md:174 defines `tokens.colors.muted` (`#8b95a1`) as "secondary product text" — a *text* role, so 1.4.3 applies.
- **Evidence:** `.nav-links a { color: var(--color-muted); }` — `--color-muted: #8b95a1` (render.html:14), L = 0.2956. Measured composited background luminance from `qa/d-fold.png`, strips y 14–24 and y 54–64:

  | label | x-range | bg L (min / med / max) | contrast vs median | worst pixel |
  |---|---|---|---|---|
  | 송금 | 600–640 | 0.1279 / 0.2272 / 0.3201 | **1.25:1** | 1.07:1 |
  | 소비 | 652–692 | 0.1399 / 0.2404 / 0.3177 | **1.19:1** | 1.06:1 |
  | 투자 | 704–744 | 0.2840 / 0.3138 / 0.3601 | **1.05:1** | 1.03:1 |
  | 안심 | 748–788 | 0.3276 / 0.3977 / 0.4745 | **1.30:1** | 1.09:1 |

  「투자」 at 1.05:1 is effectively invisible — the label luminance and the tabletop luminance are within 0.02 of each other. This is confirmed by eye in `qa/d-fold.png`, where 투자 disappears entirely.
- **Fix suggestion:** Add a top scrim to `.hero` mirroring the one already written for `.pin-stage` — e.g. a `.hero::before` with `linear-gradient(180deg, rgba(255,255,255,.92) 0%, rgba(255,255,255,0) 12%)`, `position:absolute; inset:0 0 auto; height:20vh; z-index:1` (the nav is `z-index:2`, render.html:62, so it will sit above). Then switch `.nav-links a` to `var(--color-body)` (`#4e5968`, DESIGN.md:172) which reaches 7.11:1 on the scrimmed white. Do **not** solve this by tinting the labels blue — concept.md's palette table reserves `primary` for functional use only.

---

### [BLOCK] B2 — Header wordmark 「토스」 is invisible over the dark corner of `hero.jpg` (1.07:1)

- **Location:** `render.html:71–75` (`.wordmark`), markup `render.html:369`; rendered in `qa/d-fold.png` top-left
- **Rule:** WCAG 2.2 SC 1.4.3 — 14 px / 700 is not "large text" (large = ≥18.66 px bold), so 4.5:1 applies.
- **Evidence:** `.wordmark { font-size: 14px; font-weight: 700; color: var(--color-foreground); }` — `#191f28`, L = 0.0134. Measured background at x 88–132, strips y 14–24 / y 54–64 in `qa/d-fold.png`: **bg L min = 0.0138, median = 0.0179**, max = 0.1954. Contrast vs median = **1.07:1**; worst pixel **1.01:1**. `hero.jpg` has a near-black vignette in exactly that corner (`object-position: left center`, render.html:138).

  Note the direction is *opposite* to B1: here the text is too dark for the background, in B1 it is too light. A single global color change will not fix both.

  On mobile the same wordmark measures 12.31:1 (`qa/m-fold.png`, `object-position: 72% 38%`, render.html:341) — so this is a desktop-only crop failure, which is why it survived the mobile QA pass.
- **Fix suggestion:** The `.hero::before` scrim from B1 fixes this too (`#191f28` on a 0.92-alpha white scrim ≈ 15:1). If a scrim is rejected on art-direction grounds, re-crop `hero.jpg` or set desktop `object-position` so the dark vignette does not land under the nav — but a scrim is the smaller change and is already an established pattern in this file.

---

### [BLOCK] B3 — Hero `.lead` fails AA on both viewports (3.05:1 desktop, 3.46:1 worst mobile column)

- **Location:** `render.html:170–174` (`.lead`), markup `render.html:382`; rendered in `qa/d-fold.png` and `qa/m-fold.png`
- **Rule:** WCAG 2.2 SC 1.4.3 — 4.5:1 for 14 px / 400.
- **Evidence:** `.lead { margin-top: var(--space-xl); max-width: 18em; color: var(--color-body); }` — `#4e5968`, L = 0.0976, inheriting `font-size: 14px; line-height: 21px` from `body` (render.html:43–45).

  Desktop `qa/d-fold.png`, four background strips bracketing the two text lines (x 88–322 / 88–240):

  | strip | bg L median | contrast | worst |
  |---|---|---|---|
  | line 1 above | 0.4057 | **3.09:1** | 2.84:1 |
  | line 1 below | 0.4111 | **3.12:1** | 2.84:1 |
  | line 2 above | 0.4005 | **3.05:1** | 2.84:1 |
  | line 2 below | 0.4028 | **3.07:1** | 2.87:1 |

  Mobile `qa/m-fold.png`, column scan x 24→264 step 6: median columns pass (4.84–6.05:1) but the dark phone bezel crosses the text band — **worst column x = 84 → 3.46:1**. Visible in `qa/m-fold.png` where 「모으기.」 and the tail of 「남깁니다.」 wash out against the phone chassis.
- **Fix suggestion:** Same `.hero::before` scrim, extended to cover the copy block (height `~55vh` on desktop, `~48vh` on mobile) — `#4e5968` on white is 7.11:1. Alternatively promote `.lead` to `var(--color-foreground)` (`#191f28`), which reaches 5.3:1 against the measured 0.40 median but still fails against the mobile bezel at 1.4:1 — so the scrim is the only fix that covers both viewports.

---

### [BLOCK] B4 — `tokens.colors.muted` used as body text in 9 places, all below AA (3.04:1 on canvas, 2.76:1 on surface)

- **Location:** `render.html:217–220` (`.eyebrow`), `render.html:189–192` (`.bridge`), `render.html:313–316` (`.foot-inner`), `render.html:316` (`.disclaimer`); markup at lines 390, 398, 415, 431, 447, 464, 488, 489
- **Rule:** WCAG 2.2 SC 1.4.3 — all of these render at 14 px / 400 (inherited, render.html:43–45).
- **Evidence:** `--color-muted: #8b95a1` (render.html:14) = `tokens.colors.muted` (DESIGN.md:124), L = 0.2956.

  | pairing | ratio | instances |
  |---|---|---|
  | `#8b95a1` on `canvas #ffffff` | **3.04:1** | 5 eyebrows (398, 415, 431, 464), `.bridge` (390), footer 토스 (488), disclaimer (489) |
  | `#8b95a1` on `surface #f2f4f6` (trust §, render.html:250) | **2.76:1** | eyebrow 안심 (447) |

  Independent confirmation from the ink-profile scan of `qa/d-send.png` (x 88–600, threshold L < 0.25): the h2 and all three body paragraphs register as ink bands at y 197–223 / 240–251 / 277–288 / 314–325, but **the eyebrow 「송금」 never crosses the threshold at all** — its glyph luminance stays above 0.25, i.e. it is lighter than the detector's definition of "text."

  Worst case: `render.html:489` — `<p class="disclaimer">비공식 생성 컨셉 — 토스와 무관합니다 (Unofficial generated concept)</p>`. The one legally-meaningful disclosure on the page is the least legible text on it (3.04:1).
- **Fix suggestion:** Reserve `muted` for non-text roles and move all text-bearing uses to `var(--color-body)` (`#4e5968`, DESIGN.md:172, 7.11:1 on canvas / 6.45:1 on surface). If the eyebrows must stay visually quieter than body copy, keep `body` but drop them to `font-size: 13px; letter-spacing: .02em` — hierarchy through size, not through a failing tint. The disclaimer (489) should go to `body` unconditionally.
  Note this is a *token role* problem, not a token-value problem: DESIGN.md's own `muted` value cannot carry 14 px text on `canvas`. Flagging so it can be fed back to the reference rather than patched only here.

---

### [BLOCK] B5 — Focus indicator is imperceptible on 7 of 10 focusable elements (1.38:1, needs 3:1)

- **Location:** `render.html:54–57`
- **Rule:** WCAG 2.2 SC 1.4.11 Non-text Contrast (3:1 for focus indicators) and SC 2.4.11 Focus Appearance. DESIGN.md:289 (§7 Do) — "Preserve documented loading, disabled, pressed, and **keyboard-focus** states on buttons"; DESIGN.md:333 (§12.3) repeats it.
- **Evidence:** `a:focus-visible, button:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }` — `#3182f6`, L = 0.2327.

  | background | ratio | verdict |
  |---|---|---|
  | `canvas #ffffff` | 3.71:1 | pass |
  | `surface #f2f4f6` | 3.37:1 | pass |
  | `weak-background #e8f3ff` | 3.31:1 | pass |
  | **hero photo, measured median L 0.34** | **1.38:1** | **fail** |
  | hero dark corner, measured L 0.018 | 4.16:1 | pass |

  The hero photo's mid-tone tabletop (L ≈ 0.28–0.40, measured in B1) is almost exactly the luminance of `#3182f6`. Every focusable element in the first viewport sits on it: `.wordmark` (369), 4 × `.nav-links a` (371–374), `.btn-dark` (376), `.btn-dark` (384), `.btn-weak` (385) — 7 of the page's 10 focusable elements. `outline-offset: 2px` pushes the ring *off* the button and onto the photo, so even the two hero CTAs get an unreadable ring.
- **Fix suggestion:** Give the ring its own contrast floor independent of the background: add a white halo — `outline: 2px solid var(--color-primary); outline-offset: 2px; box-shadow: 0 0 0 4px var(--color-canvas);`. (DESIGN.md:282 declines to promote a shadow *token*; a focus halo is an a11y affordance, not elevation — label it as an assumption alongside A1–A9 in `concept.md`.) The `.hero::before` scrim from B1 also raises the ring to 3.71:1 wherever it reaches.

---

### [BLOCK] B6 — 6 of 8 sections render blank with JavaScript disabled

- **Location:** `render.html:318–325` (`.reveal`), `render.html:494–509` (the only code that removes it); markup lines 397, 404, 414, 420, 430, 436, 446, 452, 463, 474
- **Rule:** Render integrity — content must be perceivable without script. `grep -c noscript render.html` → **0**; the only `@media` rules are `prefers-reduced-motion` (327) and `max-width: 720px` (335). There is no `@media (scripting: none)` and no `<noscript>` override.
- **Evidence:** `.reveal { opacity: 0; transform: translateY(16px); ... }` (318–323) and `.reveal.is-in { opacity: 1; transform: none; }` (325). `is-in` is added *only* by the IIFE at 494–509, via `IntersectionObserver` (502) or the reduced-motion early return (498–501). With script off, `is-in` is never added and all 10 `.reveal` nodes stay at `opacity: 0` permanently — sections 송금 / 소비 / 투자 / 안심 / 일상 / 다운로드 render as blank white. Only the hero (whose copy uses the CSS `copyIn` keyframe at 154–157, not `.reveal`) and the footer survive.

  The `prefers-reduced-motion` CSS block does guard the *animation* case correctly (`.reveal { opacity: 1; transform: none; }`, render.html:332) — the gap is specifically the no-script case.
- **Fix suggestion:** Add immediately after the `<style>` close (render.html:361):
  ```html
  <noscript><style>.reveal{opacity:1;transform:none}</style></noscript>
  ```
  and, for engines that ship JS-disabled without honoring `<noscript>` styling, mirror it as `@media (scripting: none) { .reveal { opacity: 1; transform: none; } }`.

---

### [WARN] W1 — `h1` line-height ratio contradicts `tokens.typography.h1.lineHeight`, and desktop disagrees with mobile

- **Location:** `render.html:162–169` (desktop), `render.html:338` (mobile)
- **Rule:** DESIGN.md:133 — `h1: { size: 36, weight: 700, lineHeight: "54px" }`, i.e. ratio **1.5**. Skill §1.1.
- **Evidence:** Desktop `h1 { font-size: 48px; font-weight: 700; line-height: 1.2; }` → 57.6 px, ratio **1.2**. Mobile `h1 { font-size: 36px; line-height: 54px; }` → ratio **1.5**, an exact token match. `concept.md` A1 justifies the *48 px size* ("코덱스 표 C toss.im 48/14=3.4 및 LC-21") but says nothing about the line-height; `system.md` records "Display | 48 / 700 / 1.2" without a source. So the ratio change is an undeclared deviation, and the same element ships two different ratios across the breakpoint. For 48 px Korean — which has no descender relief and fills the full em box — 1.2 is measurably tight (`qa/d-fold.png`, the two h1 lines sit 63 px apart baseline-to-baseline against a 48 px cap height).
- **Fix suggestion:** Set desktop `h1 { line-height: 1.5 }` (72 px) to match `tokens.typography.h1.lineHeight`, or if the tighter display setting is deliberate, use `1.3` (62.4 px) as a Korean-safe minimum and add it to `concept.md` as assumption A10 with the same rigor as A1–A9.

---

### [WARN] W2 — `body-small` is used as the page's dominant body role; `tokens.typography.body` is never used

- **Location:** `render.html:41–48` (`body`), affecting every `.body`, `.lead`, `.bridge`, `.eyebrow`, `.disclaimer` and both nav/footer text runs
- **Rule:** DESIGN.md:137–138 — `body: { size: 16, weight: 400, lineHeight: "24px" }`, annotated at DESIGN.md:198 as the "**dominant** visible role"; `body-small: { size: 14, weight: 400, lineHeight: "21px" }` is the "secondary visible role" (DESIGN.md:199).
- **Evidence:** `body { font-size: 14px; font-weight: 400; line-height: 21px; }` — the secondary role is set as the page default, and `16px/24px` appears nowhere in the file (`grep -oE '[0-9]+px' render.html` returns no `16px` in a `font-size` position). `system.md` records the choice ("Body | 14 / 400 / 21px | `tokens.typography.body-small`") but does not justify inverting the brand's own dominant/secondary designation.
  Compounding effect: `.copy .body { max-width: var(--measure) }` = 560 px (render.html:230). At 14 px, 560 px carries ≈ 40 Korean glyphs per line (measured in `qa/d-send.png`: "계좌 번호를 외우지 않아도 됩니다. 누구에게 보낼지만 답하면, 화면이 나머지를 적습니다." spans x 88→570 = 482 px for 41 characters). Korean comfortable measure is 25–35 glyphs. At the documented 16 px the same 560 px column yields ≈ 35 — inside the range.
- **Fix suggestion:** Move `body` to `font-size: 16px; line-height: 24px` (`tokens.typography.body`) and demote only the eyebrow / footer / disclaimer to an explicit `.body-small` class at 14/21. This simultaneously fixes the over-wide measure without touching `--measure`.

---

### [WARN] W3 — Four different measures for the same "supporting body copy" role

- **Location:** `render.html:168` (`10em`), `render.html:172` (`18em`), `render.html:230` (`var(--measure)`), `render.html:296` (`12em`), `render.html:466` and `render.html:476` (`36ch`)
- **Rule:** Skill §1.6 — "인접 요소 간 일관성"; `system.md` declares exactly one measure ("`--measure` 560px | LC-6 | Body column").
- **Evidence:** Measured from the QA renders at 1440:

  | element | declared | rendered width | line |
  |---|---|---|---|
  | hero `.lead` | `max-width: 18em` @14px | **252 px** (text runs to 234 px, `qa/d-fold.png`) | 172 |
  | pin `.body` | inline `max-width:36ch` | **~312 px** (`qa/d-everyday.png`) | 466 |
  | CTA `.body` | inline `max-width:36ch` | **312 px** (x 88→400, `qa/d-download.png`) | 476 |
  | feature `.body` | `var(--measure)` | **560 px** (`qa/d-send.png`) | 230 |
  | hero `h1` | `max-width: 10em` @48px | 480 px | 168 |
  | CTA `h2` | `max-width: 12em` @30px | 360 px (x 88→445, `qa/d-download.png`) | 296 |

  Three unrelated unit systems (`em`, `ch`, `px`) drive one visual role, and the resulting ratio is 252 : 312 : 560 — a 2.2× spread. The hero lead in particular is a 252 px column sitting directly under a 480 px headline (`qa/d-fold.png`), which reads as a mis-set subhead rather than a deliberate short measure.
- **Fix suggestion:** Collapse to two tokens: `--measure: 560px` for feature body and `--measure-narrow: 420px` for hero lead / pin / CTA body, and express all of them in `px` via `var()`. Delete the `18em`, `36ch` and `12em` declarations. Add `--measure-narrow` to `system.md`'s Space table with an LC citation.

---

### [WARN] W4 — Title→body gap (16 px) is smaller than body→body gap (25 px) — hierarchy inversion

- **Location:** `render.html:221–229` (`h2` + `.copy p + p`); no `h2 + p` rule exists
- **Rule:** Skill §1.6 — adjacent-element consistency. Vertical rhythm must increase, not decrease, at a hierarchy boundary.
- **Evidence:** `h2` inherits `margin: 0` from the reset at `render.html:49`, and the only paragraph spacing rule is `.copy p + p { margin-top: var(--space-lg) }` (render.html:229) — which cannot match an `h2` → `p` adjacency. Ink-row profile of `qa/d-send.png` (x 88–600, L < 0.25):

  | band | y-range | gap to next |
  |---|---|---|
  | h2 「받는 사람만 고르면 끝입니다」 | 197–223 | **16 px** |
  | body p1 | 240–251 | 25 px |
  | body p2 | 277–288 | 25 px |
  | body p3 | 314–325 | — |

  The heading is bound *tighter* to its first paragraph (16 px) than two sibling paragraphs are to each other (25 px). Reproduced identically in `qa/d-trust.png`, `qa/d-spend.png`, `qa/d-invest.png` and `qa/m-send.png` — all four feature sections.
- **Fix suggestion:** Add `.copy h2 + p, .cta-inner h2 + p, .pin-inner h2 + p { margin-top: var(--space-xl); }` (24 px, `tokens.spacing.xl`). That puts title→body at 24 px against body→body at 16 px, restoring the hierarchy. This also removes the need for the inline `margin-top` values flagged in W5.

---

### [WARN] W5 — Inline `style=` attributes bypass the token layer, with two different values for structurally identical blocks

- **Location:** `render.html:466`, `render.html:476`
- **Rule:** Skill §1.6 — token-external values; `system.md` Space table defines `--space-lg: 16px` / `--space-xl: 24px`.
- **Evidence:**
  - `render.html:466` — `<p class="body" style="margin-top:16px;max-width:36ch;">`
  - `render.html:476` — `<p class="body" style="margin-top:24px;max-width:36ch;">`

  Both are the same construct: an `h2` followed by its supporting paragraph, inside a `reveal` wrapper (`.pin-inner` at 463, `.cta-inner` at 474). They get **16 px and 24 px** respectively with no rule distinguishing them. The values happen to equal `--space-lg` and `--space-xl` but are hardcoded, so they will not follow a token change. These two are the only inline styles in the file — every other declaration goes through `var()`.
- **Fix suggestion:** Delete both `style` attributes and let the `h2 + p` rule from W4 supply a single 24 px value; move `max-width` to the `--measure-narrow` token from W3.

---

### [WARN] W6 — `:active` is not visually distinct from `:hover` on either CTA; the documented "pressed" state is absent

- **Location:** `render.html:104–108` (`.btn-dark`), `render.html:121–124` (`.btn-weak`)
- **Rule:** DESIGN.md:289 (§7 Do) — "Preserve documented loading, disabled, **pressed**, and keyboard-focus states on buttons"; DESIGN.md:333 (§12.3) repeats it; DESIGN.md:143 `tokens.components.tds-button.states` lists "…loading, disabled, **pressed**, and keyboard focus". Skill §1.4.
- **Evidence:**
  ```css
  .btn-dark:hover,
  .btn-dark:active { background: var(--color-foreground); color: var(--color-on-primary); }
  ```
  ```css
  .btn-weak:hover,
  .btn-weak:active { color: var(--color-primary-hover); }
  ```
  `:active` is selector-grouped with `:hover`, so pressing produces zero additional feedback. A pointer user gets no press confirmation; a keyboard user activating with Enter/Space (which fires `:active` without `:hover`) sees the hover appearance only. State matrix for the artifact:

  | element | default | hover | focus | active | disabled |
  |---|---|---|---|---|---|
  | `.btn-dark` | ✓ 96–103 | ✓ 104–108 | ✓ 54–57 (but see B5) | ✗ aliased to hover | ⚠ 109–112, unused |
  | `.btn-weak` | ✓ 113–120 | ✓ 121–124 | ✓ 54–57 (but see B5) | ✗ aliased to hover | ⚠ 109–112, unused |
  | `.nav-links a` | ✓ 80 | ✓ 81 | ✓ 54–57 (but see B5) | ✗ none | n/a |
  | `.wordmark` | ✓ 71–75 | ✗ unintended, see W8 | ✓ 54–57 | ✗ none | n/a |
- **Fix suggestion:** Split `:active` out with a distinct treatment that stays inside the token set — e.g. `.btn-dark:active { background: var(--color-foreground); transform: translateY(1px); }` and `.btn-weak:active { background: #dbeafe }` is **not** available (not a token), so use `.btn-weak:active { color: var(--color-weak-foreground); transform: translateY(1px); }`. Transform-only press feedback also stays inside the `opacity, transform` motion channel declared in `system.md`.

---

### [WARN] W7 — `.btn-dark:hover` uses a *text* token as a button *fill*, and the hover state itself is an undeclared extension

- **Location:** `render.html:104–108`
- **Rule:** DESIGN.md:148 — `marketing-dark: { …, states: "default observed; **hover not captured in the retained evidence bundle**" }`; DESIGN.md:352 (§14) — "Marketing CTAs | default geometry captured; **hover remains unclaimed**". DESIGN.md:172 defines `tokens.colors.foreground` (`#191f28`) as "strongest product **text**".
- **Evidence:** `.btn-dark:hover, .btn-dark:active { background: var(--color-foreground); … }` — a token whose documented role is text is promoted to a surface fill. Separately, the *existence* of a hover fill for `marketing-dark` is an invention: DESIGN.md explicitly records hover as unclaimed, and `concept.md`'s assumption list A1–A9 does not include a CTA-hover assumption (A9 covers only "CTA 패딩·높이 … 문서 값 그대로"). `system.md`'s Components section likewise lists only fill / height / radius / padding / font, no hover.
  This is exactly the pattern DESIGN.md:296 warns against — "Don't copy documentation-site colors into native product tokens without component-level evidence."
- **Fix suggestion:** Keep the hover (a marketing page needs one) but declare it. Either (a) derive it from the existing token by alpha alone — `background: rgba(0, 12, 30, 0.92)`, a documented-value modulation of `tokens.components.marketing-dark.bg` — or (b) add it to `concept.md` as assumption A10: "marketing-dark hover: unclaimed in DESIGN.md §14; local extension = `foreground` fill." Option (a) is preferable because it does not cross a token role boundary.

---

### [WARN] W8 — CSS specificity bug: hovering the brand wordmark turns it interaction-blue

- **Location:** `render.html:52–53` vs `render.html:71–75`
- **Rule:** DESIGN.md:294 (§7 Don't) — "Don't use logo brand blue as a silent replacement for UI primary"; the adjacent principle DESIGN.md:332 (§12.2) — "Make interaction blue functional rather than decorative." `concept.md` palette table: "Action | `primary` | … **페이지 전체 칠 금지**".
- **Evidence:**
  ```css
  a:hover { color: var(--color-primary-hover); }   /* specificity (0,1,1) */
  .wordmark { … color: var(--color-foreground); }  /* specificity (0,1,0) */
  ```
  `(0,1,1)` beats `(0,1,0)`, so `<a class="wordmark" href="#hero">토스</a>` (render.html:369) flips from `#191f28` to `#2272eb` on hover. The author guarded every *other* anchor against this — `.nav-links a:hover` (0,2,2) at line 81, `.btn-dark:hover` (0,2,1) at line 104, `.btn-weak:hover` (0,2,1) at line 121 all explicitly re-declare `color`. The wordmark is the single unguarded case, which is why it reads as an oversight rather than a decision.
- **Fix suggestion:** Add `.wordmark:hover, .wordmark:focus-visible { color: var(--color-foreground); }` (specificity (0,2,0), beats `a:hover`). Or scope the global rule: `a:not([class]):hover { … }`.

---

### [WARN] W9 — `.btn-weak` hover label drops below AA (4.00:1)

- **Location:** `render.html:121–124`
- **Rule:** WCAG 2.2 SC 1.4.3 — the label is `font: 600 15px/1` (render.html:119); 15 px bold is below the 18.66 px "large text" threshold, so 4.5:1 applies in every state.
- **Evidence:** Default `#1b64da` on `#e8f3ff` = **4.82:1** (passes, just). `.btn-weak:hover { color: var(--color-primary-hover); }` → `#2272eb` (L = 0.1743) on the unchanged `#e8f3ff` background (L = 0.8848) = **4.00:1** — the hover state makes the label *less* readable than the default. Affects `render.html:385` (「먼저 둘러보기」) and `render.html:479` (「기능 다시 보기」).
  Also note the hover changes only the ink; the `#e8f3ff` fill is untouched, so the affordance shift is a barely-perceptible 0.8-point luminance move on 15 px text.
- **Fix suggestion:** Invert the hover instead of lightening the ink — `.btn-weak:hover { background: var(--color-weak-foreground); color: var(--color-canvas); }` gives 5.41:1 and a legible affordance change. Both values are existing tokens (`tokens.colors.weak-foreground`, `tokens.colors.canvas`).

---

### [WARN] W10 — The same wordmark renders two different ways in header and footer

- **Location:** `render.html:369` vs `render.html:488` (styled by `render.html:313–315`)
- **Rule:** Skill §1.1 / §1.2 — role consistency for a repeated brand element.
- **Evidence:** Header: `<a class="wordmark" href="#hero">토스</a>` → `font-size: 14px; font-weight: 700; color: var(--color-foreground)` (render.html:71–75). Footer: `<p>토스</p>` with no class, inheriting `.foot-inner { … color: var(--color-muted) }` (render.html:314) → 14 px / **400** / `#8b95a1`. Confirmed in `qa/d-footer.png`: the footer 토스 is a light-grey regular-weight word, typographically identical to the disclaimer beside it, and at 3.04:1 (see B4).
  `concept.md` A8 says "워드마크는 글자 「토스」" — one mark, one treatment; the footer instance silently drops the weight and the color.
- **Fix suggestion:** Give the footer instance `class="wordmark"` and add `.foot-inner .wordmark { color: var(--color-foreground) }`, or accept a quieter footer lockup but declare it — `font-weight: 700; color: var(--color-body)` keeps the weight relationship and clears AA.

---

### [WARN] W11 — `.btn-weak` is 40 px tall — below the 44×44 iOS HIG minimum the skill treats as a BLOCK

- **Location:** `render.html:113–120`; instances at `render.html:385`, `render.html:479`
- **Rule conflict — stated explicitly rather than resolved silently:**
  - Skill §1.5: "최소 hit area 44x44 (iOS HIG) → **BLOCK** 미달".
  - DESIGN.md:303 (§8): "On web, **preserve the observed 40px or 46px marketing button height** rather than substituting the 56px mobile control." DESIGN.md:147 fixes `tokens.components.marketing-primary.height` at `"40px"`. `concept.md` A9 and `system.md` both carry the 40 px forward deliberately.
  - WCAG 2.2 SC 2.5.8 (the normative floor) requires 24×24 CSS px — met at 40×96.
- **Evidence:** `.btn-weak { … height: 40px; padding: 11px 16px; font: 600 15px/1 var(--font); }`. Rendered target in `qa/m-fold.png` = 96 × 40 CSS px.
- **Severity note:** graded **WARN, not BLOCK**, because the brand contract is the governing document for this audit and it names 40 px explicitly for web marketing CTAs; the normative accessibility floor (2.5.8, 24×24) is met. Recording the conflict here so the orchestrator can escalate if the skill's 44 px heuristic is meant to be absolute — this is the one place in the report where the skill rule and DESIGN.md point in opposite directions.
- **Fix suggestion:** Keep the 40 px visual box and extend the *hit* area only, which satisfies both documents: `.btn-weak { position: relative; }` + `.btn-weak::after { content:""; position:absolute; inset:-2px 0; }` → 44 px touch target, 40 px painted button.

---

### [WARN] W12 — One breakpoint only; the 721–1000 px band is unhandled and collapses the text lane to its 240 px floor

- **Location:** `render.html:335` (the sole layout media query), `render.html:207` and `render.html:213` (`.split` grid)
- **Rule:** DESIGN.md:304 (§8) — "The public sources in this verification do not establish universal breakpoints"; skill §1.5. `storyboard.md` plans only "Viewport planning: 1440×900" plus the mobile pass.
- **Evidence:** `@media (max-width: 720px)` is the only layout breakpoint (`grep -n '@media' render.html` → lines 327 and 335 only; 327 is `prefers-reduced-motion`). Above 720 px, `--gutter` stays 88 px (render.html:30) and `.split` stays `minmax(240px, var(--measure)) 1fr` with a 32 px gap.
  At 768 px (iPad portrait): available = 768 − 176 = 592 px; the grid resolves to 240 px text + 32 px gap + 320 px image. The reading lane hits the `minmax` **240 px floor** — at the current 14 px body that is ~17 Korean glyphs per line, roughly half the comfortable measure, while the image beside it is 33% wider than the text.
  At 1024 px: 1024 − 176 = 848 → 560 px text + 256 px image; the image is now *narrower* than the text, inverting the 1440 relationship (560 text / 672 image, measured in `qa/d-send.png`).
- **Fix suggestion:** Add an intermediate rule: `@media (max-width: 1024px) { :root { --gutter: 40px; } }` and `@media (max-width: 900px) { .split, .feature--flip .split { grid-template-columns: 1fr; } .feature--flip .copy, .feature--flip .inset { grid-column: auto; grid-row: auto; } }` — i.e. collapse to a single column before the lane reaches its floor, rather than at 720 px.

---

### [WARN] W13 — Korean line breaking strands 「있습니다」 as a 4-syllable orphan on both the h1 and an h2

- **Location:** `render.html:168` (`h1 { max-width: 10em }`), `render.html:381`; and `render.html:227` / `render.html:465`
- **Rule:** Korean typesetting — `word-break: keep-all` (render.html:158–161) correctly prevents mid-어절 breaks, but it does not govern *where* the break lands. Splitting the compound predicate 「적혀 있습니다」 / 「이미 있습니다」 across lines separates a 보조용언 from its 본용언.
- **Evidence:**
  - `qa/d-fold.png`, h1: 「다음에 할 일이 이미 적혀」 / 「있습니다」 — `max-width: 10em` at 48 px = 480 px forces the break after 「적혀」, splitting 「적혀 있습니다」. Mobile (`h1 { max-width: none }`, render.html:338) breaks as 「다음에 할 일이 이미」 / 「적혀 있습니다」 in `qa/m-fold.png` — the *better* break, so the desktop constraint is what causes the problem.
  - `qa/d-everyday.png`, h2 (render.html:465): 「돈이 오가는 일은 창가와 현관, 식탁 위에 이미」 / 「있습니다」 — the second line is a lone 「있습니다」 (measured: line 1 runs x 88→620, line 2 x 88→196).

  Two occurrences of the same pattern on the page's two largest type settings.
- **Fix suggestion:** For the h1, change `max-width: 10em` → `max-width: 7em` (336 px) so the break lands after 「이미」, matching the mobile setting. For the everyday h2, insert a non-breaking space — 「이미&nbsp;있습니다」 — or set `.pin-inner h2 { max-width: 14em }`. Verify by re-capturing `qa/d-fold.png` and `qa/d-everyday.png`; the fix is confirmed when neither line 2 is shorter than ~25% of line 1.

---

## FYI

### [FYI] F1 — `--rounded-sm` is declared but never referenced
- **Location:** `render.html:27`
- **Evidence:** `--rounded-sm: 4px;` — `grep -n 'border-radius' render.html` returns only lines 99, 116, 233, none of which use it. `tokens.rounded.sm` (DESIGN.md:140) is therefore carried into the file but unused.
- **Fix suggestion:** Delete it, or apply it to the `.btn svg` container if a small-radius surface is wanted. Harmless either way — noted so the token audit is complete.

### [FYI] F2 — The disabled rule has no instance, and `pointer-events: none` does not block keyboard activation
- **Location:** `render.html:109–112`
- **Evidence:** `.btn[aria-disabled="true"] { opacity: 0.4; pointer-events: none; }` — no element in the markup carries `aria-disabled` (`grep -c 'aria-disabled' render.html` → 1, the CSS selector only). Latent issue if it is ever used: `pointer-events: none` stops the mouse but an `<a href>` remains keyboard-focusable and Enter-activatable. (The 0.4 opacity dropping contrast is fine — WCAG 1.4.3 exempts disabled controls.)
- **Fix suggestion:** If the state is retained for the template, pair it with `tabindex="-1"` on the element, and add `.btn[aria-disabled="true"] { cursor: default; }`.

### [FYI] F3 — Color budget is *under* the ceiling: `tokens.colors.primary` never appears as resting interactive chrome
- **Location:** `render.html:9` (declared), used only at `render.html:55` (focus outline)
- **Evidence:** Skill §1.2 caps saturated brand elements at 2 per viewport; this page peaks at **1** (the `weak-background`/`weak-foreground` CTA pair) plus in-photo blue that belongs to the asset, not the chrome. `#3182f6` is used exactly once in the whole stylesheet, as a focus ring. The primary action on every viewport is `marketing-dark` — a near-black fill. DESIGN.md:168 calls `primary` the "TDS interaction blue and **primary action reference**" and DESIGN.md:332 (§12.2) says "Make interaction blue functional rather than decorative."
- **Assessment:** defensible — toss.im's own app-store CTA is the dark variant (DESIGN.md:148, 256), and `concept.md` locks this deliberately ("페이지 전체 칠 금지"). Flagged only so the team registers that a visitor never sees Toss blue as an affordance. No change required.

### [FYI] F4 — The inset mat is invisible in the trust section
- **Location:** `render.html:231–236` vs `render.html:248–254`
- **Evidence:** `.inset { … background: var(--color-surface); }` and `.trust { … background: var(--color-surface); }` — both `#f2f4f6`. In `qa/d-trust.png` the 6 px `--rounded-md` corners have nothing to read against; the image appears to float with no mat, unlike the other three features on `canvas`.
- **Fix suggestion:** `.trust .inset { background: var(--color-canvas); }` — inverts the mat so it stays visible, using an existing token.

### [FYI] F5 — The CTA pair has a 3 px optical offset
- **Location:** `render.html:175–181`, `render.html:100`, `render.html:117`
- **Evidence:** `.actions { … align-items: center; gap: var(--space-md); }` (8 px) pairs `.btn-dark` at `height: 46px` with `.btn-weak` at `height: 40px`. Centering leaves 3 px of overhang top and bottom — visible in `qa/d-fold.png` and `qa/d-download.png`. Both heights are contractual (DESIGN.md:147, 148; `concept.md` A9), so the heights themselves are correct; the *pairing* is the render's choice and DESIGN.md never documents these two as adjacent.
- **Fix suggestion:** Optional — `align-items: flex-end` gives a shared baseline and reads as intentional. Leave as-is if the current centering is preferred.

### [FYI] F6 — Four non-token px literals not covered by A1–A9
- **Location:** `render.html:95` (`width: 12px; height: 12px`), `render.html:55–56` (`2px` outline + offset), `render.html:307` (`1px` border-top), `render.html:207`/`213` (`minmax(240px, …)`)
- **Evidence:** `tokens.spacing` is `4/6/8/16/24/32` (DESIGN.md:139). `88px`, `560px` and `48px` are covered by assumptions A2 / A1 / storyboard LC-6; these four are not. All are optical or structural rather than spacing, so the exposure is low.
- **Fix suggestion:** Add a one-line note to `system.md`'s Space table — "optical constants: 1px hairline, 2px focus ring, 12px icon box, 240px grid floor" — so a future audit does not re-flag them.

### [FYI] F7 — Nav link hit boxes are 40×21 CSS px
- **Location:** `render.html:76–81`, markup `render.html:370–375`
- **Evidence:** `.nav-links a` has no padding, so the target height equals the inherited `line-height: 21px` (render.html:45). Width ≈ 40 px for two Korean glyphs at 14 px. This **passes** WCAG 2.2 SC 2.5.8 via the spacing exception: `gap: var(--space-xl)` = 24 px puts target centers ~64 px apart, so 24 px-diameter circles do not intersect. Recorded because 21 px is thin for pointer and touch even where it is conformant, and because the "inline" exception does *not* apply here (these are standalone nav items, not text in a sentence).
- **Fix suggestion:** `.nav-links a { padding: 6px 4px; margin: -6px -4px; }` — 33 px target, zero layout shift.

### [FYI] F8 — `word-break: keep-all` does not cover four text-bearing selectors
- **Location:** `render.html:158–161`
- **Evidence:** The rule lists `h1, h2, .lead, .body, .bridge, .disclaimer, .eyebrow`. Not covered: `.btn` labels (「먼저 둘러보기」, 「기능 다시 보기」), `.wordmark`, `.nav-links a`, and the footer's bare `<p>토스</p>` (render.html:488). None currently wrap at 390 px or 1440 px, so there is no present defect — but a longer CTA label would break mid-어절.
- **Fix suggestion:** Simplify to `body { word-break: keep-all; overflow-wrap: break-word; }` and drop the enumerated selector list; the property inherits.

### [FYI] F9 — Large vh dead space in the CTA and footer sections
- **Location:** `render.html:289–295` (`.cta`), `render.html:298–304` (`.foot`)
- **Evidence:** `.cta { min-height: 120vh; … padding: 28vh 0 24vh; align-items: flex-start; }` — in `qa/d-download.png` the copy block ends at y ≈ 477 and the remaining ~423 px of the viewport is empty white, with another 24vh below. `.foot { min-height: 105vh; align-items: center; }` renders a hairline plus two lines of text with ~445 px of blank above and ~415 px below (`qa/d-footer.png`).
- **Assessment:** intentional — `storyboard.md` fixes the rhythm at `2.00 — 1.55 — 1.55 — 1.55 — 1.35 — 1.80 — 1.20 — 1.05 ≈ 12.05 vh` and cites LC-4 ("섹션 빈 면 ≥0.30"). Verified: `qa/m-full.png` is 390×10170 = exactly 12.05 × 844. No change required; recorded so the emptiness is not mistaken for a layout bug in a later round.

### [FYI] F10 — Section navigation disappears entirely below 720 px with no replacement
- **Location:** `render.html:337`
- **Evidence:** `.nav-links { display: none; }` removes all four named anchors (송금 / 소비 / 투자 / 안심) on mobile, leaving only the wordmark and the 앱 받기 CTA in `qa/m-fold.png`. No menu affordance replaces them.
- **Assessment:** acceptable for a scroll one-pager — the sections remain reachable by scrolling and the page is 12.05 vh, not a deep site. Recorded because it does remove named wayfinding for the majority-mobile Korean audience.
- **Fix suggestion:** Optional — a sticky bottom bar or a single 「기능 보기」 anchor would restore wayfinding without a hamburger.

### [FYI] F11 — The Everyday pin has ~80 vh of scroll with no visual change
- **Location:** `render.html:256–287`
- **Evidence:** `.everyday { min-height: 180vh; }` contains `.pin-stage { position: sticky; top: 0; height: 100vh; overflow: hidden; }`. The copy is *inside* the sticky stage (render.html:462–468), so it pins together with the image. The `.reveal` on `.pin-inner` (463) fires on IntersectionObserver entry at `threshold: 0.12` (render.html:506) — within roughly the first 20 vh. The remaining ~80 vh (≈ 675 px at 900, ≈ 675 px at 844) scrolls with a frozen image and frozen copy.
- **Assessment:** declared — `concept.md` A7 says "핀은 메트로놈 뒤의 규모 유지, 두 번째 클라이맥스 아님" and `storyboard.md` says "The pin at §6 is duration, not a second climax." Recorded as a risk: 675 px of unchanged frame is long enough to read as a stall rather than as duration.
- **Fix suggestion:** If a later round wants motion here, reduce `.everyday` to `140vh`, or stage the copy reveal against scroll progress rather than a single entry threshold.

---

## Verified conformance (evidence-backed, not a rubber stamp)

Recorded so a round-2 audit does not re-litigate these. Each item was checked by extraction, not by inspection.

1. **Zero stray hex.** `grep -oE '#[0-9a-fA-F]{3,8}|rgba?\([^)]*\)' render.html` returns 14 literals; 12 are in `:root` (lines 9–20) and each maps to a DESIGN.md path — `tokens.colors.{primary, primary-hover, canvas, foreground, body, muted, surface, border, on-primary, weak-background, weak-foreground}` (DESIGN.md:119–129) and `tokens.components.marketing-dark.bg` (DESIGN.md:148). The other 2 are `rgba(255,255,255,0)` gradient stops (279, 358) = `canvas` at α0. Skill §1.2 "DESIGN.md에 없는 hex 직접 사용" → **0 violations**.
2. **Radius fully token-backed.** All 3 `border-radius` declarations use `var()`: `--rounded-md: 6px` = `tokens.rounded.md` (DESIGN.md:140) on `.inset` (233); `--rounded-marketing: 7px` = `tokens.components.marketing-primary.radius` / `marketing-dark.radius` (DESIGN.md:147, 148) on both CTAs (99, 116). No token-external radius, no intra-component mixing. Skill §1.3 → **0 violations** (F1 is a dead declaration, not a wrong value).
3. **Surface separation respected.** TDS xlarge geometry (56 px height / 16 px radius, DESIGN.md:143) appears nowhere in the file — `grep '56px\|16px' render.html` finds `16px` only as `--space-lg`. This honors DESIGN.md:263 ("Surface split") and DESIGN.md:303 (§8), and `concept.md`'s 금지 목록 #4.
4. **Catalog blue correctly absent.** `#0064ff` (frontmatter `primary_color`, DESIGN.md:7) appears 0 times — DESIGN.md:181 and DESIGN.md:294 (§7 Don't) satisfied.
5. **`danger` correctly unused.** `#e42939` (DESIGN.md:130) appears 0 times; the page has no error state, so promoting it would have been a skill §1.2 violation ("회색 대신 saturated 사용").
6. **Font stack does not overclaim.** `render.html:35` lists `"Toss Product Sans"` first but the file loads **no** `@font-face` and no webfont link, so it degrades to `Apple SD Gothic Neo` / system. This is the correct reading of DESIGN.md:207 ("No general redistribution right is asserted by the current official sources") and DESIGN.md:288 (§7 Do — "with a system fallback"). Declared as `concept.md` A5.
7. **`h2` is an exact token match.** `render.html:221–227` — `font-size: 30px; font-weight: 600; line-height: 45px` = `tokens.typography.h2` (DESIGN.md:134) verbatim. Mobile `h2 { font-size: 24px; line-height: 36px }` (render.html:339) = `tokens.typography.h3` (DESIGN.md:135) verbatim.
8. **No skipped heading level.** Document outline is `h1` ×1 (381) → `h2` ×6 (399, 416, 432, 448, 465, 475). Skill §1.1 h-level skip → **0 violations**.
9. **No elevation invented.** `grep -c box-shadow render.html` → 0, matching DESIGN.md:282 (§6 — "No canonical shadow token is promoted in this revision") and `concept.md`'s 금지 목록.
10. **`focus-visible` present on every interactive element.** `render.html:54–57` covers all 10 focusable nodes. (The *contrast* of that ring fails on the hero — B5 — but the state itself is implemented, satisfying DESIGN.md:289 structurally.)
11. **Reduced-motion handled on both channels.** CSS at `render.html:327–333` zeroes animation and transition and forces `.reveal` visible; the JS branch at `render.html:496–501` short-circuits the observer. Matches `system.md`'s Motion table and LC-32.
12. **No horizontal scroll at 390 px.** `qa/m-full.png` is 390 × 10170 — exactly the viewport width. `box-sizing: border-box` is global (render.html:38) and `overflow-wrap: break-word` is set on all prose (159–160). Skill §1.5 hscroll → **0 violations**.
13. **Body text is not below 14 px anywhere.** Smallest declared `font-size` is `14px` (render.html:43, 72). Skill §1.5 "텍스트 14px 미만" → **0 violations** (W2 is about the *role choice*, not a sub-14 px size).
14. **Motion is honestly labelled.** `system.md` states "Motion (A4 / LC-29–32; **DESIGN.md §15 has none**)" and `concept.md` A4 says "토스 토큰이라고 주장하지 않음" — correct handling of DESIGN.md:356 (§15).
15. **Page rhythm matches the storyboard exactly.** Declared `2.00 + 1.55×3 + 1.35 + 1.80 + 1.20 + 1.05 = 12.05 vh`; measured `qa/m-full.png` height 10170 px ÷ 844 = **12.050**. Section `min-height` values at render.html:128, 195, 249, 259, 290, 299 all match `storyboard.md`.

---

## Verdict

**BLOCK** — 6 BLOCK, 13 WARN, 11 FYI.

**Not publishable as-is.** Five of the six BLOCKs are measured WCAG 2.2 AA failures (four × SC 1.4.3, one × SC 1.4.11/2.4.11), and the sixth (B6) drops 6 of 8 sections to blank white with JavaScript disabled. Every BLOCK carries a pixel measurement or a `grep` count, not an impression.

**Efficient repair order — the six BLOCKs are ~4 edits, not 6:**

1. **Add `.hero::before` scrim** (render.html, after line 130). Clears **B1**, **B2**, **B3** and the hero portion of **B5** in a single insertion. The pattern already exists in this file at `render.html:275–281` for `.pin-stage`, so it is consistent with the author's own approach.
2. **Add a white halo to the focus ring** (render.html:54–57). Clears the remainder of **B5** on backgrounds the scrim does not reach.
3. **Move `muted` off text roles to `body`** (render.html:220, 192, 314, 316). Clears **B4** across all 9 instances; also resolves **W10**'s contrast half.
4. **Add `<noscript>` + `@media (scripting: none)`** (render.html:361). Clears **B6**.

Recommend one revision round targeting BLOCKs 1–6 plus the four highest-leverage WARNs — **W4** (rhythm inversion, 4 sections, 1 CSS rule), **W3+W5** (measure unification, deletes both inline styles), **W8** (one-line specificity fix), **W13** (Korean orphan, 2 declarations). That is roughly 10 CSS lines and one `<noscript>` block for 6 BLOCKs and 5 WARNs.

Deferred to the run owner rather than escalated: **W11** is the only place where the skill's 44×44 rule and DESIGN.md:303 point in opposite directions — graded WARN with the conflict stated in full, not silently deflated.

**Re-audit after revision** must re-capture `qa/d-fold.png`, `qa/m-fold.png`, `qa/d-send.png`, `qa/d-everyday.png` and `qa/d-footer.png`, since every BLOCK measurement above is anchored to those five frames.

---

# Round 2 — re-audit of the six round-1 BLOCKs

- **Reviewer:** omd-designer-review (round 2, bounded re-audit)
- **Artifact:** `render.html` (525 lines, post-repair)
- **DESIGN.md re-read:** `web/references/toss/DESIGN.md` (21,565 B), read fresh at **2026-09-02 14:26:59 KST** — not carried over from round 1
- **Fresh captures:** `qa/round2/` — `d-fold.png`, `d-full.png`, `d-full-scrolled.png`, `d-nojs-fold.png`, `d-nojs-full.png`, `d-focus-1..3.png` @1440×900; `m-fold.png`, `m-full.png`, `m-nojs-fold.png`, `m-nojs-full.png` @390×844. All `deviceScaleFactor: 1`, Chromium 1228.
- **Method (unchanged from round 1):** background sampled from the *rendered pixels*, not from CSS. For each text element the element is set `visibility: hidden`, its own bounding box is re-screenshotted, and every pixel in that box is scored against the element's computed `color` with the WCAG 2.x relative-luminance formula. Reported `min` = worst single pixel behind the glyphs. Focus rings are scored by focused-vs-unfocused pixel diff over the element box + 12 px (SC 1.4.11 adjacent-colour reading).
- **Scope:** the six round-1 BLOCKs plus one regression check. Round-1 WARNs and FYIs were **not** re-audited and are not implied to be resolved.

## Verdict table

| ID | Round-1 issue | Round-1 measure | Round-2 measure | Status |
|----|---------------|-----------------|-----------------|--------|
| B1 | Hero nav links over photo | 1.05–1.30:1 | **6.81:1** worst pixel (desktop) | **RESOLVED** |
| B2 | Header wordmark 「토스」 | 1.07:1 | **15.59:1** desktop / **16.11:1** mobile | **RESOLVED** |
| B3 | Hero `.lead` | 3.05 / 3.46:1 | **5.37:1** desktop / **5.28:1** mobile | **RESOLVED** |
| B4 | `muted` as body text (9×) | 3.04 / 2.76:1 | **0** DOM nodes compute to `#8b95a1`; replacement `#4e5968` measures 5.28–6.96:1 | **RESOLVED** |
| B5 | Focus indicator | 1.38:1 | **3.62 / 3.65 / 3.71:1** on the 3 hero stops | **RESOLVED** (thin margin — see N1) |
| B6 | 6/8 sections blank without JS | 6 blank | no-JS render is **byte-identical** to the fully-revealed JS render | **RESOLVED** |
| R1 | Regression: scrim tokens + page height | 12.05 vh | 12.05 vh both viewports, no off-token colour | **NO NEW BLOCK** |

## B1 — Hero nav links over the photo — RESOLVED (6.81:1)

- **Repair located:** `.hero::before` scrim added at `render.html:132–140`, `background: linear-gradient(180deg, var(--color-canvas) 0%, rgba(255, 255, 255, 0.92) 14%, rgba(255, 255, 255, 0.78) 42%, rgba(255, 255, 255, 0) 68%)`; nav colour is `.nav-links a { color: var(--color-body); }` (`render.html:81`).
- **Measured (desktop 1440):** foreground `rgb(78, 89, 104)` = `#4e5968` = `tokens.colors.body` (DESIGN.md:123). Box `x:607 y:29 w:24 h:21`. Background behind the glyphs: **min 6.81:1**, mean 6.89, max 6.93; worst pixel `rgb(250, 250, 250)`.
- **Coverage of the top band:** the same y-band was sampled at four x positions — `x:88` (wordmark, 15.59:1), `x:607` (nav link 1, 6.81:1), `x:655` (nav link 2, focus capture), `x:1271` (`.btn-dark`, opaque fill). The scrim is ≥92 % opaque across the full width at y ≈ 29, so the sampled band is representative; no residual photo luminance reaches the nav row.
- **Mobile:** `.nav-links { display: none; }` at `render.html:349` — the failure surface does not exist at 390.
- AA floor for 14 px regular is 4.5:1. **6.81 ≥ 4.5 → resolved.**

## B2 — Header wordmark 「토스」 — RESOLVED (15.59:1)

- **Repair located:** same `.hero::before` scrim; `.wordmark` keeps `color: var(--color-foreground)` (`render.html:75`) = `#191f28` (DESIGN.md:122).
- **Measured:** desktop box `x:88 y:29 w:24 h:21` → **min 15.59:1**, mean 15.81, worst pixel `rgb(248, 248, 248)`. Mobile box `x:24 y:29 w:24 h:21` → **min 16.11:1**, mean 16.40, worst pixel `rgb(251, 252, 252)`.
- The round-1 dark vignette under the corner is fully neutralised — the worst pixel behind the wordmark is now within 7/255 of `tokens.colors.canvas`. Round-1 predicted "≈15:1" for this fix; measured 15.59. **Resolved.**

## B3 — Hero `.lead` — RESOLVED (5.37 desktop / 5.28 mobile)

- **Measured desktop:** fg `rgb(78, 89, 104)`, box `x:88 y:373 w:252 h:42` → **min 5.37:1**, mean 5.82, max 6.15, worst pixel `rgb(217, 225, 230)`.
- **Measured mobile:** box `x:24 y:284 w:252 h:42` → **min 5.28:1**, mean 6.72, worst pixel `rgb(220, 222, 225)`.
- The worst pixels are no longer photo mid-tones but the 78 %-alpha region of the scrim (`render.html:139`, the 42 % stop) over a light part of `hero.jpg`. Scored against the strict 4.5:1 normal-text floor (not the 3:1 large-text floor), both viewports clear it. **Resolved.** Note the mobile margin is 0.78 above the floor — a darker `hero.jpg` recrop would need re-measurement.

## B4 — `muted` used as body text — RESOLVED (0 remaining nodes)

- **Repair verified two ways.** (a) Static: `grep -n "color-muted" render.html` returns exactly one line — the token definition `--color-muted: #8b95a1;` at `render.html:14`. There is no `color: var(--color-muted)` anywhere in the file. (b) Runtime: enumerating every element in the rendered DOM for `getComputedStyle(e).color === 'rgb(139, 149, 161)'` returns **0** at 1440 and **0** at 390 (`mutedAnyRole: 0`, `mutedText: []` on both viewports).
- **Replacement quality measured, not assumed:** the substitute is `--color-body` `#4e5968` (DESIGN.md:123, "emphasized body and neutral action text"). Analytic: 7.11:1 on `canvas`, 6.45:1 on `surface` — versus `muted`'s 3.04 / 2.76. Pixel-sampled on real backgrounds: 5.28–6.96:1 across the four measured text blocks.
- The token itself is retained in `:root` unused, which is correct: DESIGN.md:173 defines Muted as "secondary product text" and nothing on this page occupies that role. **Resolved.**

## B5 — Focus indicator — RESOLVED at 3.62–3.71:1 (thin margin)

- **Repair located:** `render.html:54–57` — `outline: 2px solid var(--color-primary); outline-offset: 2px; box-shadow: 0 0 0 2px var(--color-canvas), 0 0 0 6px var(--color-canvas);`. Computed values confirmed live: `outlineColor rgb(49, 130, 246) / 2px / off 2px`, `boxShadow rgb(255,255,255) 0 0 0 2px, rgb(255,255,255) 0 0 0 6px`.
- **Measured by focused/unfocused pixel diff** (captures `qa/round2/d-focus-1..3.png`):

  | Tab stop | Element | Changed px | Max CR (before→after) | Pair |
  |---|---|---|---|---|
  | 1 | `A.wordmark` | 504 (23.3 % of crop) | **3.62:1** | `rgb(252,252,252)` → `rgb(49,130,246)` |
  | 2 | `A` (nav link) | 331 (15.3 %) | **3.65:1** | `rgb(253,253,253)` → `rgb(49,130,246)` |
  | 3 | `A.btn.btn-dark` | 572 (7.9 %) | **3.71:1** | `rgb(255,255,255)` → `rgb(49,130,246)` |

- All three exceed the 3:1 SC 1.4.11 floor, on the exact backgrounds where round 1 measured 1.38:1. The halo makes the ring background-independent: the worst-case adjacent pair is white↔`#3182f6` = 3.71:1 analytically, and the measured 3.62 on the wordmark is that same pair degraded by antialiasing at 2 px width. **Resolved.**
- **Margin note (FYI, not a BLOCK):** headroom is 0.62 at best and 0.62→0.0 if the primary blue is ever darkened toward the photo. Where the scrim is already near-white the halo contributes nothing and the indicator reduces to a bare 2 px `#3182f6` ring; `ringPassPct` of 45.2 % on stop 1 is exactly that — over half the changed pixels are white-on-near-white halo doing no work. Functional, but there is no reserve.

## B6 — Sections blank without JavaScript — RESOLVED

- **Repair located, both belts:** `@media (scripting: none) { .reveal { opacity: 1; transform: none; } }` at `render.html:344–346`, and `<noscript><style>.reveal{opacity:1;transform:none}</style></noscript>` at `render.html:375`.
- **Measured with `javaScriptEnabled: false`:** full-page ink coverage (share of non-near-white pixels) and a 12-band vertical profile —
  - Desktop no-JS: 10845×1440, **32.4 %** ink, bands `74.5 / 0.2 / 29.8 / 14.0 / 10.1 / 29.7 / 37.2 / 99.9 / 92.1 / 0 / 1.4 / 0.3`.
  - Mobile no-JS: 10170×390, **34.1 %** ink, bands `68.1 / 0.7 / 39.9 / 3.3 / 36.0 / 39.4 / 37.3 / 97.2 / 80.9→82.1 / 1.0 / 3.9 / 0.8`.
  - Bands 3–6 — the four feature sections that round 1 found blank — now carry 10–40 % ink on both viewports.
- **Strongest single piece of evidence:** `qa/round2/d-nojs-full.png` and `qa/round2/d-full-scrolled.png` (JS on, continuous 300 px scroll to the bottom) are **byte-identical at 3,220,657 bytes**. The no-JS render is not merely non-blank, it is pixel-equal to the fully-revealed scripted render. Document geometry is identical in both modes (10845×1440 / 10170×390), so the fallback introduces no layout shift.
- **Control run, to avoid a false claim:** the first JS-on capture (`d-full.png`, 25.3 % ink, bands 3–6 = 0) was taken with a jump-scroll and *looks* like the round-1 failure. It is a capture artifact — `IntersectionObserver` (`render.html:516–521`, add-only, never removes `is-in`) is only evaluated at sampled scroll positions. Re-run with continuous scrolling: `.reveal.is-in` = **10/10, hidden 0**. The scripted path is intact; keep `d-full-scrolled.png`, not `d-full.png`, as the JS-on reference frame. **Resolved.**

## R1 — Regression check: did the repair introduce a new BLOCK? No

1. **Scrim uses DESIGN.md colours.** Every colour in the three gradient rules — `.hero::before` (`render.html:139`), `.pin-stage::after` (`289`), the ≤720 px override (`371`) — is either `var(--color-canvas)` or `rgba(255, 255, 255, α)`, and `tokens.colors.canvas` **is** `#ffffff` (DESIGN.md:121). A grep for any hex or `rgb()` literal outside the `:root` token block returns exactly those three lines and nothing else: no new hue, no invented tint. **No token violation.**
2. **Page height unchanged.** `document.documentElement.scrollHeight / innerHeight` = 10845/900 = **12.05 vh** desktop and 10170/844 = **12.05 vh** mobile — identical to the round-1 baseline. `.hero::before` is `position: absolute; inset: 0 0 auto; height: 100vh; pointer-events: none` (`render.html:133–138`), so it adds no flow height and intercepts no clicks. Scroll rhythm is untouched.
3. **No contrast inversion.** The repair moved text *down* in luminance (`#8b95a1` → `#4e5968`) and backgrounds *up* (photo → 78–100 % white). Every one of the eight re-measured samples improved; none of the previously-passing samples was sampled onto a newly-lightened background, since the scrim only overlays the hero, whose four text elements all now measure ≥5.28:1.

### New issues found while re-auditing (neither is a BLOCK)

**[FYI] N1 — the focus halo is an undeclared shadow, and the assumption ledger was not updated.**
- **Evidence:** `render.html:57` `box-shadow: 0 0 0 2px var(--color-canvas), 0 0 0 6px var(--color-canvas);`. DESIGN.md:283 states: *"No canonical shadow token is promoted in this revision… Use flat color layering until a component-specific official source verifies elevation."* Round 1's own fix text required this be *"label[ed] as an assumption alongside A1–A9 in `concept.md`."* `concept.md:68` still reads `ART_DIRECTION_DONE sections=8 lc_rules=36 assumptions=9`, and grep for `halo|focus|shadow` in `concept.md` returns **no match**.
- **Why FYI and not WARN-with-teeth:** the halo is a spread of pure `canvas`, i.e. flat colour layering expressed through `box-shadow` — it is not elevation, and DESIGN.md:289's mandate to "preserve documented… keyboard-focus states" pulls the other way. The defect is bookkeeping, not design.
- **Fix:** add one line to `concept.md` — `A10: focus halo (box-shadow spread of canvas) — a11y affordance, not elevation; DESIGN.md §6 shadow abstention preserved` — and bump the count to `assumptions=10`.

**[FYI] N2 — scrim gradient stops are literal `rgba(255,255,255,α)` rather than token-derived.**
- **Evidence:** `render.html:139` mixes `var(--color-canvas) 0%` with `rgba(255, 255, 255, 0.92) 14%`. The literal equals the token value today, so nothing renders off-brand, and it matches the pre-existing convention at line 289. But a future `canvas` change would desynchronise the stops from the 0 % stop in the same rule.
- **Fix:** `color-mix(in srgb, var(--color-canvas) 92%, transparent)` for each stop, or accept it as house style — but then make line 139's 0 % stop literal too, so one rule does not use both idioms.

## Round-2 verdict

**PASS** — 0 BLOCK, 0 new WARN, 2 new FYI.

All six round-1 BLOCKs are **RESOLVED** against fresh pixel measurements at both viewports, each clearing its WCAG floor with the margin stated above (tightest: B5 at 3.62 vs 3.0, and B3 mobile at 5.28 vs 4.5). The regression check found no token violation and no change to page height (12.05 vh, both viewports). No unresolved BLOCK carries into escalation.

**Not asserted by this report:** the 13 WARNs and 11 FYIs of round 1 were out of scope and were not re-measured — W3/W4/W5/W8/W11/W13 in particular remain open unless a separate pass says otherwise. This was a bounded six-item re-audit, and a re-audit that samples six issues does not certify the artifact clean.
