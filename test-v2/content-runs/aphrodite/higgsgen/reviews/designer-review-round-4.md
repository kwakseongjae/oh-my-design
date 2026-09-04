# Designer review — round 4

**Date:** 2026-09-04T18:34+0900
**Artifact:** `test-v2/content-runs/aphrodite/higgsgen/render-r4.html` (884 lines, 1,179,383 B)
**DESIGN.md:** `test-v2/content-runs/aphrodite/higgsgen/DESIGN.md` — **re-read in full at 2026-09-04T18:34:56+0900** (not cached from r3). Type scale confirmed as `§3 Sizes 112 / 80 / 56 / 40`, `Labels 13px mono uppercase tracking .14em`.
**Storyboard:** `storyboard-r4.md` (section table + D user table; C7 settle line deliberately deferred to §3)
**Prior report:** `reviews/designer-review-round-3.md`
**Viewport:** both (1440×900 · 390×844)
**Protocol:** eye-isolation. §1 was written from my own screenshots only. `trace-r4.md`, `r4-build-notes.md`, checker output and the r3 numbers were not opened until §1 was on disk.

**Evidence:** 51 self-captured frames in `reviews/screenshots/rv4-*.jpg` (all ≤ 92 KB). Naming: `rv4-{d|m}-{section}-{state}.jpg`.

---

## §1 — Eye verdict (Phase 1, no measurements read)

### 1.0 First impression, 1440×900, zero input

`rv4-d-00-firstpaint.jpg` — a 100vw × 100vh photograph of a flooded concrete tunnel, a three-line Syne display lockup filling the left two-thirds, one lime pill, one lime nav pill. Nothing else. No curtain, no cookie bar, no floating badge. **This is a real fold.** Compared to r3 this is the single biggest change: the image is the page, not a decoration inside the page.

Reservation, and it is not small: the left 45 % of that photograph — precisely the part the headline sits on — is rendered essentially black. The tunnel only becomes a tunnel at x ≈ 900. So the fold is *big* but not yet *luminous*. The eye registers "large dark rectangle with white type", not "cinematic still". `rv4-m-00-firstpaint.jpg` is actually the better crop: at 390 the tunnel ceiling reads from y ≈ 90 and the frame looks like a photograph.

### 1.1 Per-section eye pass

**S1 Hero (pin 2.2vh)** — `rv4-d-{00-firstpaint, s1-b-mid, s1-d-exit}.jpg`
- Hierarchy: clean. eyebrow-less; h1 112 → sub 18 → pill. One focal point.
- Focal point: contested. The type wants the left, the only lit part of the image is the right. They do not compose; they coexist.
- Scale of imagery: 100 %. Complaint (1) closed here.
- Whitespace: the band from y ≈ 730 to 900 is empty and unexplained — the pill floats with 200 px of nothing under it.
- Typography: Syne at 112/0.92/−0.04em is genuinely handsome; "you mean." leaving the right third open is a deliberate, good ragged edge.
- Motion feel: `rv4-d-hero-t0` vs `t15` differ — light drifts with zero input. ✅
- **Problem:** the pin buys almost nothing. Between first paint and 35 % of a 1,980 px track (`s1-b-mid`) the only change I can see is a ~12 % image scale; between 35 % and the end (`s1-d-exit`) I can see **no change at all**. Roughly 1,280 px of scrolling returns one perceptual event. That reads as a stuck page, not as a hold.

**S2 Range band (1.2vh)** — `rv4-d-s2-a.jpg`, `rv4-d-s2-idle15.jpg`
- Best-composed section on the page. 80 px display over a 100vw × 57vh band of 2:3 posters that bleed off both edges, one 16 px caption. Two layers, one idea.
- Idle: the two frames 1.5 s apart are visibly offset (tile 1 has slid ~90 px left). **Alive with no input.** ✅
- Nit: the caption "Interiors, landscape, industry, objects, material, figure — the band moves on its own. Drag it, or leave it alone." *tells* the user the band moves. The band already demonstrates it. Delete the instruction, keep the taxonomy.

**S3 Control sequence (pin 3.0vh)** — `rv4-d-s3-{a-enter,b-mid,d-exit}.jpg`
- Strong idea, correctly executed: full-bleed still, one mono prompt line, one token swaps, image changes, lime rail fills.
- **Problem A:** `s3-b-mid` (35 % of track) and `s3-d-exit` (end of track) are pixel-identical. The eight frames are spent in the first half and the remaining ≈ 900 px of track shows a frozen image. Stacked on S1's dead hold, the first 5,700 px of the page contains two full viewport-heights of scroll that return nothing.
- **Problem B:** the h2 "One token moves the camera." and the mono prompt sit on a *white plastered wall*. In `s3-b-mid` the wall behind "the camera." is the brightest area in frame. White-on-white is being held off by a scrim that is clearly running out of headroom. Flagging for measurement, not judging by eye.
- **Problem C (390):** `rv4-m-s3-b-mid.jpg` — the mono prompt wraps to four lines and orphans `35mm` alone on line 4 with its underline dangling. Sloppy.

**S4 Compare (1.0vh)** — `rv4-d-s4-a.jpg`, `rv4-m-s4-a.jpg`
- **This is the worst thing on the page, and it is a content failure, not a styling one.** The caption asserts *"Same subject, same frame. Only fidelity changes."* The left half is a ballpoint sketch of a **café counter with two bar stools**; the right half is a photograph of a **wire shelving unit with houseplants in a corridor**. Different subject, different frame, different room. The one section whose entire job is to prove fidelity control proves the opposite. A demanding client stops here and stops believing the rest of the page.
- Secondary: the section has no heading of any kind — it goes straight from image to a 16 px caption sitting in a black utility bar with four thumbnails. Every other section gets an eyebrow + display; this one gets neither, so it reads as a widget dropped into the flow.
- The labels `DRAWING` (top-left, over lit concrete) and `BALLPOINT · CAFÉ COUNTER` (top-right, over a pale wall) are grey mono on the two brightest patches in the frame. Flagged for measurement.
- *(Phase-2 correction, left here rather than rewritten so the eye record stays honest: the `alt` text I read later proves the **asset pairing is correct** — the render does contain the counter, the stools and the shelf. What fails is the **default slider position**, which hides the correspondence. The eye reaction above is exactly what a client gets; the cause is in §2, and the fix is a default value, not an asset swap.)*

**S5 Gallery persistent-expand (1.0vh)** — `rv4-d-s5-a.jpg`, `rv4-d-s5-cyc0/cyc3/cyc6.jpg`
- The headline "The big panel moves by itself." is a promise, and I checked it properly: at 0 s the open panel is *Swimming hall*, at ~3 s it is *Plume*, at ~6 s it is *Night road*. **It genuinely cycles with no pointer.** Complaint (2) closed here, decisively.
- **Problem A:** when *Night road* opens (`cyc6`) the expanded panel runs from x ≈ 536 to past 1440 — the fourth world is **clipped by the viewport and never seen whole**. Three of four worlds get a full frame; the fourth never does.
- **Problem B:** the panel caption is white type placed directly on the photo with no scrim, and the photo swaps every 5 s between a near-black night road and a **near-white ink plume** (`cyc3`). Same white text, two opposite grounds. This is the textbook case where a passing contrast number at t=0 s means nothing at t=3 s.
- Composition: good. One 62vw panel + three vertical rails with rotated mono labels is a clean, confident arrangement.

**S6 Feature (pin 2.4vh)** — `rv4-d-s6-{a-enter,b-mid,d-exit}.jpg`
- The settled state is the best frame on the page: a magenta-lit greenhouse in snow, full-bleed, with a three-line display bottom-left and one 16 px line. This is the only image that makes me stop. Colour, subject and type finally cooperate.
- **Problem:** the entry state, `s6-a-enter`, is a 905 × 545 letterboxed image floating in black with ~170 px of dead space above, ~185 px below, and **no text on screen at all**. For the length of the entry it is exactly the r3 complaint — a timid, unaccompanied thumbnail. The 62vw → 100vw reveal is a good move; its starting pose is not.
- `s6-b-mid` and `s6-d-exit` are again pixel-identical: the reveal completes before 35 % and the rest of the 2,160 px track is a freeze.

**S7 Presets (0.9vh, light band)** — `rv4-d-s7-a.jpg`, `rv4-m-s7-a.jpg`
- The inversion lands. The band is bright, calm, and the product still is beautifully lit.
- **Problem A (composition):** the right column is bottom-heavy by accident. The rectangle from (1000, 0) to (1440, 480) — a fifth of the section — is completely empty, then three chips start abruptly at y = 485. The preview image's top edge is at y = 220. Nothing aligns to anything.
- **Problem B (390):** `rv4-m-s7-a.jpg` — the three chips are **visibly different widths**. "Desk speaker" ends at x ≈ 238, "Notebook on linen" at x ≈ 357. A radio group with ragged right edges reads as a bug, full stop. (Measured in §2.)
- Scale: preview is ~36 % of viewport — the smallest primary media on the page. Acceptable here because the section is about choosing, not about awe.

**S8 Delivery (1.0vh)** — `rv4-d-s8-a.jpg`, `rv4-m-s8-a.jpg`
- Full-bleed, single image, eyebrow + two-line display bottom-left. Structurally perfect and the mobile crop is better than the desktop one.
- **Problem:** the attic is so under-exposed that at 1440 the right third is unreadable mud and a navy blob (a bed?) intrudes at bottom-left with no explanation. "Print-size on the first pass." is claimed over an image where I cannot resolve print-size detail. The copy and the picture argue.

**S9 Plan (0.8vh, light band)** — `rv4-d-s9-a.jpg`, `rv4-m-s9-a.jpg`
- **Problem A:** at 1440 the section opens with ~285 px of empty light grey before the `PLAN` eyebrow, and closes with ~130 px after the cards. That asymmetry is not composition, it is a vertical-centering accident. Empty ≠ spacious.
- **Problem B:** the pricing/plan section contains **no action**. Two cards, one lime, no button, no price, no link affordance. The user who has just been convinced has nowhere to go until the footer.
- The lime "Sequence" card is a good single accent surface — DESIGN §2 "면 1회" honoured.

**S10 Footer breakout (1.0vh)** — `rv4-d-s10-a.jpg`, `rv4-m-s10-a.jpg`
- "Say it once." at 112 px is the right closing note and the CTA repeat is right.
- **Problem:** the section is declared full-bleed imagery but on screen roughly 55 % of it is flat, featureless black. The only legible content is a small lamp-lit desk in the right third. Between the CTA (y ≈ 400) and the footer meta (y ≈ 860) there is a 460 px void with nothing in it — at 390 the same void is ~180 px. The page's last impression is its emptiest frame.
- Idle light drift is present here (frames 1.8 s apart differ). ✅

### 1.2 The three r3 complaints, judged by eye only

| r3 complaint | Eye verdict on r4 | Evidence |
|---|---|---|
| ① Images at timid size | **Largely closed.** Six of ten sections are full-bleed (S1, S3, S4, S6, S8, S10); S2 is a 100vw × 57vh band. Only S5 (62vw) and S7 (~36 %) are inset, and both have a reason. | `rv4-d-00-firstpaint`, `s2-a`, `s3-b-mid`, `s4-a`, `s6-b-mid`, `s8-a` |
| ② Hover-gated interaction | **Closed.** I found no state that requires a pointer to see. The drum flows (`s2-a` vs `s2-idle15`), the gallery cycles (`s5-cyc0/3/6`), the sequence is scroll-driven, the compare auto-sweeps and then persists, the presets are click-locked. | `s2-idle15`, `s5-cyc3`, `s5-cyc6` |
| ③ Simplicity inside splendour / 시원시원함 | **Half closed.** The *simplicity* half is achieved — every section is eyebrow + display + one line + one picture, two layers, one focal point; the page is easy to read and never busy. The *splendour* half is not. Seven of ten frames are brown-black and heavily scrimmed; the two bright bands (S7, S9) carry the least imagery; and the page ends on its emptiest, darkest screen. It is calm, but it is not yet dazzling. | `s8-a`, `s10-a`, `s9-a` vs the one that works, `s6-b-mid` |

### 1.3 Would a demanding client call this wow / spacious / simple?

- **Simple — yes.** Unambiguously. This is a disciplined page and the discipline is visible.
- **Spacious — six sections yes, two no.** S1/S2/S3/S6/S8 are spacious. S9 and S10 are *empty*, which is a different and worse thing, and they are the last two things the client sees.
- **Wow — not yet.** Exactly one frame (S6) produces the reaction. The ceiling is being held down by three things, in order of damage: (a) the S4 before/after showing two different subjects while claiming they are the same, (b) global under-exposure so the "image is the product" claim is made with images you have to squint at, (c) two long pinned holds (S1, S3) and two empty closing sections that spend the user's scroll without paying them back.

**Eye score: 72 / 100** (r3 = 60). +12 is earned almost entirely by scale and by killing the hover gates. The remaining 28 is: −8 S4 self-contradiction, −7 tonal monotony / dark frames, −5 dead scroll in S1/S3, −5 empty S9/S10 close, −3 assorted (S7 ragged chips, S5 clipped fourth panel, S6 timid entry pose, 390 mono orphan).

---

## §2 — Mechanical audit (Phase 2)

All numbers below are measured on `render-r4.html` via playwright-core (`test-v2/tools/package.json` require root), viewports 1440×900 and 390×844, dpr 1.

### §1.1 Typography hierarchy — PASS with 2 WARN

| Check | DESIGN.md | Measured | |
|---|---|---|---|
| Display sizes | §3 `112 / 80 / 56 / 40` | h1 112 · h2 112, 80×2, 56×5 · 40 on 6 non-heading nodes | ✓ all four grades in use |
| Display tracking | §3 `−0.04em` | h1 `−4.48px/112` · h2/80 `−3.2px` · h2/56 `−2.24px` = **−0.0400em on every one** | ✓ |
| Display leading | §3 `0.92` | `0.920` on all 9 | ✓ |
| `text-wrap` | §3 `balance` | `balance` on all 9 | ✓ |
| Body | §3 Geist 16/18, lh 1.5 | `18px w400 lh1.50` ×3 · `16px w400 lh1.50` ×4 · `16px w500 lh1.50` ×2 | ✓ |
| Labels | §3 13px **mono** uppercase | `13px w400 lh1.20 "Geist Mono"` ×11 | ✓ |
| h-level skip | — | h1 ×1 → h2 ×8, no h3+; no skip | ✓ |
| Body weight fall-through to 700 | — | none in `<p>` | ✓ |

- **[WARN §1.1-a]** `render-r4.html` nav link, computed `15px w500 Geist`. §3 permits only `16/18` for UI/body. **Fix:** set to 16px.
- **[WARN §1.1-b]** `13px w400 lh1.50 Geist` ×3 — 13px is sanctioned by §3 *only* as "Labels 13px **mono** uppercase tracking .14em". Three sans 13px strings are off-spec. **Fix:** promote to 16px body or convert to the mono label style.
- **[WARN §1.1-c]** Six strings render at display size `40px/700 Syne` but are marked up as `<span>`/`<p>`: `#s5` panel titles (`Swimming hall`, `Corridor`, `Plume`, `Night road`) and `#s9` card titles (`Studio`, `Sequence`). Two whole sections therefore expose no heading structure. **Fix:** make them `<h3>` and keep the 40px class.

### §1.2 Color budget — PASS

Every colour in the computed tree resolves to a DESIGN §2 token. **Zero non-token hex.**

```
rgb(242,242,240) #F2F2F0 ink        ×139   rgb(11,12,14)  #0B0C0E bg      ×36
rgb(18,19,22)    #121316 bg-2       ×23    rgb(154,155,158) #9A9B9E mute  ×11
rgb(209,254,23)  #D1FE17 accent     ×5     rgb(243,243,241) #F3F3F1 bg-light ×2
rgba(255,255,255,0.14) light@14%    ×1     ink/ink-dark alpha derivatives .86/.72/.60/.52
```

Saturated-accent elements per viewport, sampled at all 10 section origins:
`[2, 0, 0, 0, 0, 0, 1, 0, 1, 1]` — **max 2**, Toss rule respected, DESIGN §2 "≤5% of any viewport" respected, `one accent, everywhere else restraint` honoured. This is the cleanest colour result across four rounds.

### §1.3 Radius scale — PASS (r3's largest WARN closed)

DESIGN §2 tokens `5 / 10 / 999`. Full computed scan of all four corners on every rendered element:

```
0: 700    5: 92    10: 16    999: 16      off-token: {}   percentage radii: none
```

**Off-token radius count = 0** (r3 = 43: `12px ×36`, `50% ×6`, `14px ×1`). `.ba-knob`'s `border-radius:50%` is gone.

### §1.4 Component states — WARN ×1

| State | Result |
|---|---|
| default | ✓ |
| hover | ✓ — 6 `:hover` rules, **0 contain `transform`**, brightness values `{1.06}` only. DESIGN §2 "Hover never transforms" and §4 "hover `brightness(1.06)`" both satisfied (r3 had `brightness(1.35)` and hover transforms). |
| focus | ✓ — keyboard-walked 14 tabbables. All get `outline: 2px solid rgb(242,242,240)`, `outline-offset: 2px` on dark; `#s7 .chip` correctly inverts to `2px solid rgb(11,12,14)` on the light band. Matches §4 "focus 2px `ink` ring offset 2". Ring vs adjacent ground ≫ 3:1 both ways. |
| active | **WARN** — 1 `:active` rule in 138 KB of CSS. `#s4 .thumb`, `#s5 .fx-pex__panel`, `#s7 .chip` (11 controls) have no press feedback. **Fix:** extend the existing `:active{filter:brightness(.96)}` selector list. |
| disabled | n/a — 0 `:disabled`/`[disabled]` rules and 0 disabled controls exist in r4 (the r3 `#seqPrev` button was removed when S3 became scroll-driven). Not a defect; see FYI-2. |

`@media (prefers-reduced-motion: reduce)` present ×1; verified live — **idle byte-diff over 1.6 s = 0.00 %** (all motion stopped). DESIGN §2 satisfied.

### §1.5 Mobile responsiveness (390×844) — PASS

- **Tap targets < 44×44: 0.** Every `a / button / [role=radio] / input / [tabindex]` meets the iOS HIG floor. (r3 had 1.)
- **Horizontal scroll: none.** `scrollWidth 390 === clientWidth 390`.
- **Text < 14px:** 25 nodes at 13px — `span.label ×10`, `span.tok ×7`, `span.fx-pex__spine ×4`, `span.cd ×3`, `p.label ×1`. §3 sanctions 13px mono *labels*; `span.tok ×7` is the S3 prompt, which is reading content, not a label. **WARN** (see §1.7 note and §1.1-c).
- **[WARN §1.5-a]** `#s7 .chip` widths at 390 are **219 / 336 / 252 px**. A three-option radio group with three different right edges. Confirmed at desktop too (focused chip = 336). **Fix:** `width:100%` on `.chip` (or `align-items:stretch` on its flex parent).
- **[WARN §1.5-b]** `#s3 .tok` wraps to 4 lines at 390 and orphans `35mm` alone on line 4 carrying the active underline (`rv4-m-s3-b-mid.jpg`). **Fix:** `text-wrap: pretty` on `.tok`, or shorten the token string.

### §1.6 Spacing / layout — WARN ×3

DESIGN §2 scale `4·8·12·16·24·32·48·64·96·128`, gutter `88@1440 / 40@1024 / 20@390`.

Off-token declarations (88px correctly excluded — it is the declared 1440 gutter, ×18):

| Value | Count | Owner |
|---|---|---|
| `1px` | 8 | `button.thumb` (`#s4`) padding-top/bottom |
| `6px` | 8 | `button.thumb` (`#s4`) padding-left/right |
| `171px` | 2 | `div.s6-frame` (`#s6`) margin-top / margin-bottom |
| `−24px` | 1 | negative token value — conforming |

- **[WARN §1.6-a]** `#s4 button.thumb` padding `1px 6px` — neither 1 nor 6 is on the scale. **Fix:** `4px 8px`.
- **[WARN §1.6-b]** `#s6 div.s6-frame` margin `171px` top and bottom. This is the numeric cause of the eye finding in §1.1/S6: it produces the letterboxed 905×545 entry pose with a dead band above and below. **Fix:** `128px` (largest token), or drive the entry inset from `--e` so it starts nearer full-bleed.
- **[WARN §1.6-c]** **Page budget 14.51 vh** vs DESIGN §5 `Page budget 11–14 vh` — over by 0.51 vh, and *worse* than r3's 14.38. Also 0.01 vh over the storyboard's own `총 길이 ≤ 14.5vh` gate. **Fix:** trim the S3 hold (1.00 vh frozen, see §1.6-d) — that alone lands the page at 13.9 vh.
- **[WARN §1.6-d]** **Pinned stages = 3** (`#s1`, `#s3`, `#s6`) vs DESIGN §5 `two pinned stages allowed (S3, S8)`. Improved from r3's 4 but still over cap, and neither S1 nor S6 is one of the two sections DESIGN names. **Fix:** unpin S1 (its 1,080 px track buys one 12 % scale event) or amend §5 with a versioned change per §7.

### §1.7 Text contrast — **measured, 2 BLOCK + 3 WARN**

**Run 1 — repo tool, verbatim output:**

```
$ node test-v2/tools/text-contrast.mjs .../render-r4.html --viewport 1440x900,390x844
render-r4.html  PASS · no-JS hidden 0
  1440x900  ok   span.wordmark      20px L min 15.15 avg 16.71 <3:     0%  "Higgsgen"
  1440x900  ok   a.btn              15px   min 16.68 avg 16.71 <4.5:   0%  "Start a render"
  1440x900  ok   h1                112px L min  2.22 avg 13.95 <3:   0.4%  "Higgsgen renders what you me"
  1440x900  ok   p.lede             18px   min  14.3 avg 16.52 <4.5:   0%  "One line in. A directed stil"
  1440x900  ok   a.btn              16px   min 16.68 avg  16.7 <4.5:   0%  "Start with one line"
  390x844   ok   span.wordmark      20px L min  6.88 avg 11.08 <3:     0%  "Higgsgen"
  390x844   ok   a.btn              14px   min 16.68 avg  16.7 <4.5:   0%  "Start a render"
  390x844   ok   h1                 44px L min  5.49 avg 11.96 <3:     0%  "Higgsgen renders what you me"
  390x844   ok   p.lede             18px   min 11.78 avg 14.99 <4.5:   0%  "One line in. A directed stil"
  390x844   ok   a.btn              16px   min 16.68 avg  16.7 <4.5:   0%  "Start with one line"
TEXT_CONTRAST_DONE files=1 fail=0
```

- **[WARN §1.7-a] The tool only covers the first viewport.** All 10 rows are `#s1` elements. **S2–S10 were not measured by it.** Per §1.7 ("도구를 돌릴 수 없으면 그 사실을 WARN으로 적는다 — 통과로 적지 않는다") I am recording that coverage gap explicitly rather than letting `fail=0` stand as a whole-page pass, and I measured the remaining sections myself (Run 2).
- **[WARN §1.7-b]** `h1` @1440: **min 2.22:1, 0.4 % of samples below the 3:1 large-text floor.** The right end of "…what" lands on the lit tunnel wall. **Fix:** extend the hero scrim ~120 px further right, or pull the h1 measure in one grid column.

**Run 2 — same method (computed nominal colour vs the element's own background pixels, text hidden before sampling; no glyph-edge averaging), sections S3–S10, 1440×900:**

| # | Section / string | px | Floor | min | p5 | median | % below floor |
|---|---|---|---|---|---|---|---|
| 1 | **`#s4` label `Drawing`** | 13 | 4.5 | **1.18** | 1.29 | 1.54 | **100 %** |
| 2 | **`#s4` label `Ballpoint · café counter`** | 13 | 4.5 | **2.14** | 5.08 | 5.25 | **3.9 %** |
| 3 | `#s5` spine `Swimming hall` | 13 | 4.5 | 1.34 | 11.26 | 17.00 | 1.0 % |
| 4 | `#s10` h2 `Say it once.` | 112 | 3.0 | 1.00 | 13.88 | 17.36 | 0.3 % |
| 5 | `#s3` h2 `One token moves the camera.` | 56 | 3.0 | 3.25 | 4.53 | 14.06 | 0 % |
| 6 | `#s8` h2 `Print-size on the first pass.` | 56 | 3.0 | 6.12 | 7.72 | 14.28 | 0 % |
| 7 | `#s6` h2 `A frame that keeps growing…` | 56 | 3.0 | 11.39 | 14.46 | 16.45 | 0 % |
| 8 | `#s6` p `Grain, condensation and lamp…` | 18 | 4.5 | 15.89 | 16.44 | 16.88 | 0 % |
| 9 | `#s3` `.tok` ×4 (prompt) | 16 | 4.5 | 9.44 | 11.54 | 13.46 | 0 % |
| 10 | `#s3` caption ×2 | 16 | 4.5 | 6.47 | 12.44 | 16.32 | 0 % |
| 11 | `#s5` caption `Drained basin…` | 16 | 4.5 | 16.00 | 16.71 | 17.11 | 0 % |

- **[BLOCK §1.7-c] `#s4` label `Drawing` fails outright.** 13px body-size mono, **min 1.18:1, median 1.54:1, 100 % of its background below the 4.5:1 floor.** It is `mute #9A9B9E` sitting on the sunlit concrete in the top-left of `ba-01`. Nothing about this is borderline — the word is measurably invisible. **Fix:** put it on the same solid `bg` chip the caption bar uses, or move both corner labels into the black utility bar at `y≈790` where the caption already lives.
- **[BLOCK §1.7-d] `#s4` label `Ballpoint · café counter`** — min 2.14:1, **3.9 % of the box below 4.5:1**, over the pale plaster wall of `ba-01-render`. Same root cause, same fix.
- **[WARN §1.7-e] `#s5` spine `Swimming hall`** — min 1.34:1, 1.0 % below 4.5:1. Compounding this: `#s5` swaps the panel photo every ~5.2 s between a near-black night road (`rv4-d-s5-cyc6.jpg`) and a **near-white ink plume** (`rv4-d-s5-cyc3.jpg`) under the *same* white caption with **no scrim**. §1.7's scrim clause applies even where the measured value passes at one instant: "사진·영상·그라데이션 위 텍스트에 스크림/솔리드 받침이 없으면, 측정값이 통과해도 WARN". **Fix:** add the DESIGN §3 three-layer treatment (oklch scrim + hairline + directional shadow) to `.fx-pex__cap`.
- **[WARN §1.7-f] `#s10` h2 `Say it once.`** — min 1.00:1 (a sliver where the ground is exactly `ink`), 0.3 % below 3:1. Small but real. **Fix:** widen the bottom-left vignette.
- **[FYI]** `#s3` h2 passes at min 3.25:1 but with only 8 % headroom over the 3:1 floor, and its ground changes across 8 scrub frames. A scrim *is* present (`rv4-d-s3-b-mid.jpg`); note it as a thin margin, not a defect.

### §1.8 Overlay occlusion (first paint, mobile-first) — PASS

- 390×844 first paint: **zero `position:fixed` / `position:sticky` elements intersect the viewport.** No cookie bar, no sheet, no modal, no sticky promo, **and no entry curtain** (r3's `fx-curtain` covering H1+CTA for ~0.9 s is gone).
- `rv4-m-00-firstpaint.jpg`: H1, lede, primary CTA and the nav pill are all fully visible and unoccluded.
- Hero crop at 390 keeps the subject — the tunnel vault reads from y ≈ 90; nothing the brief requires is cropped out.
- **§1.8 = clean.**

### §1.8-adjacent — the S4 proof contradicts itself (BLOCK)

`#s4` renders these two `alt` strings as one pair (from the artifact):

```
alt="A café interior corner with a marble counter, two stools and a plant shelf"
aria-label="Ballpoint · café counter — comparison 1 of 4"
caption: "Same subject, same frame. Only fidelity changes."
```

The asset pairing is **correct** — the render genuinely contains the counter, the stools *and* the shelf. The failure is the **default resting state of the slider**: at ~50 % the drawing half shows the counter and two stools, and the render half shows only the plant shelf and corridor. `rv4-d-s4-a.jpg` and `rv4-m-s4-a.jpg` both show two apparently different rooms directly under a caption asserting they are the same frame. The one section whose job is to prove fidelity control is, in its first-seen state, evidence against the claim.

- **[BLOCK]** — the section's required information (the correspondence) is not visible in the state the user is given. **Fix (cheapest first):** (1) change the default `--p` so the seam falls left of the counter, putting the stools on *both* sides; or (2) let the 1.2 s auto-sweep come to rest at that position instead of 50 %; or (3) crop both halves to the counter-centred region. No asset change needed.

### DESIGN §3 hard rule — `filter` on images (BLOCK)

DESIGN.md §3, verbatim: *"Imagery: … **No `filter` on images**; treat with three layers instead: scrim (oklch-tinted gradient) + hairline + directional shadow."*

Measured: **42 of 42 `<img>` elements** carry `filter: contrast(1.04) saturate(1.06)`, across `#s1 #s2 #s3 #s4 #s5 #s6 #s7 #s8 #s10` — every image-bearing section.

- **[BLOCK]** An explicit "No X" in DESIGN.md violated on 100 % of instances. **Fix:** delete the one declaration; if the grade is wanted, move it to the scrim layer per §3, or open a §7 versioned change to the palette/imagery rule.

---

## §3 — Declared vs implemented (trace-r4.md + storyboard C7, read only at this point)

I measured settle independently before opening either file, by reading the live `--e` custom property at 1 % steps of each pin's travel at 1440×900.

| Pin | Storyboard C7 declared (analytic) | `trace-r4.md` §3 probe | **My measurement** | Δ vs declared |
|---|---|---|---|---|
| S1 | 50.0 % · hold 0.60 vh | 30.3 %\* · 0.5 vh | **47.0 % · hold 0.64 vh** (track 1980 px, travel 1080 px) | −3.0 pp · +0.04 vh |
| S3 | 50.0 % · hold 1.00 vh | 50.3 % · 1.0 vh | **50.0 % · hold 1.00 vh** (track 2700 px, travel 1800 px) | **0.0 pp · 0.00 vh** |
| S6 | 52.1 % · hold 0.63 vh | 59.2 % · 0.4 vh | **51.0 % · hold 0.69 vh** (track 2160 px, travel 1260 px) | −1.1 pp · +0.06 vh |
| Page | 14.42 declared → 14.51 실측 | 14.51 vh | **14.51 vh** | matches |

**Verdict on r3's "declared ≠ implemented K" WARN (52/65/70/60 → 38/50/55/42): RESOLVED.** Max deviation is 3.0 pp, and my S1 sampling grid is ±1 pp. The storyboard's analytic column is the accurate one.

- **[FYI §3-a] The trace's own probe is the outlier, not the build.** `scrub-timing-probe` runs on a 300 px grid (`±0.33vh`), which against travels of 1080–1800 px is **17–28 % granularity** — coarser than the ±3 pp the table asserts. That is what produces S1 `30.3 %` and S6 `59.2 %`; both are sampling artefacts. Storyboard **C10** instructs *"빌더는 구현 후 `scrub-timing-probe` 값으로 K 를 이 표에 **덮어쓴다**"* — followed literally with these numbers it would have written two wrong settle values into the contract. **Fix:** have `scrub-timing-probe` read the engine's `--e` directly (as I did) instead of inferring from a screenshot grid, or raise its resolution to ≤ 1 % of travel.
- **[FYI §3-b] `trace-r4.md` §3 "최장 빈 구간 0.33vh(S9 상단)"** — I measure the same S9 void (≈285 px = 0.32 vh) and agree with the metric as defined. Noting for the record that the *perceived* void at S10 between the CTA (y≈400) and the footer meta (y≈860) is ≈0.50 vh; it is filled by `amb-01`, but only the right third of that image is legible, so the metric and the eye disagree there. Not a contradiction of the trace — a suggestion that the "빈 구간" probe weight media by legible luminance range.
- **[FYI §3-c] Storyboard `호버 역할` column declares "CTA 2 % 리프트" for S1/S9/S10.** Measured: **0 hover rules contain a transform.** The build correctly followed DESIGN §2 ("Hover never transforms") over the storyboard. The storyboard row is the thing that is wrong and should be edited to "brightness only".
- **[FYI §3-d] Storyboard D2 declares the `hover:none` fallback shape.** There is **no `@media (hover: none)` or `(pointer: coarse)` block** in the 138 KB stylesheet. Harmless in practice — there are no hover gates to fall back from — but D2's claim is not backed by a rule.
- **Confirmed against trace §3:** `호버 관문 0` ✓ (independently verified: 6 hover rules, 0 transforms, 0 gated reveals; drum/gallery/light all move with zero input). `주 미디어 점유율 중앙값 1.00` ✓. `콘솔 에러 0` — not re-run.
- **DESIGN §5 vs build:** §5 names *"luminance inversions at S4 and S9"*; the build inverts at **S7 and S9**. §5 names *"two pinned stages … (S3, S8)"*; the build pins **S1, S3, S6**. Both are §7-governed changes that were never versioned. Counted once, in §1.6-d.

---

## §4 — Synthesis

### Summary

- **BLOCK: 4**
- **WARN: 17**
- **FYI: 6**

### BLOCK (publication-stopping)

| # | Issue | Location | Rule | Evidence | Fix |
|---|---|---|---|---|---|
| B1 | `#s4` label `Drawing` unreadable | `render-r4.html` `#s4 .label` (top-left), `rv4-d-s4-a.jpg` | §1.7 body text < 4.5:1 | measured **min 1.18 · p5 1.29 · median 1.54 · 100 % of box below 4.5** | move both corner labels into the existing black caption bar, or give them a solid `bg` chip |
| B2 | `#s4` label `Ballpoint · café counter` fails on 3.9 % of its box | `#s4 .label` (top-right) | §1.7 body text < 4.5:1 | measured **min 2.14 · 3.9 % below 4.5** | same as B1 |
| B3 | S4 shows two different rooms under "Same subject, same frame." | `#s4`, default slider `--p` ≈ 0.5; `rv4-d-s4-a.jpg`, `rv4-m-s4-a.jpg` | DESIGN §1 *"the image is the product (every section proves range or control)"* | `alt="A café interior corner with a marble counter, two stools and a plant shelf"` — the correspondence exists in the asset but is invisible at the resting seam | move the default seam left of the counter so the stools appear on both halves; no asset change |
| B4 | `filter` on 42/42 images | `#s1 #s2 #s3 #s4 #s5 #s6 #s7 #s8 #s10`, computed `filter: contrast(1.04) saturate(1.06)` | DESIGN §3 verbatim *"**No `filter` on images**"* | 42 / 42 | delete the declaration, or move the grade to the scrim layer, or version the rule per §7 |

### WARN

| # | Issue | Location | Evidence | Fix |
|---|---|---|---|---|
| W1 | Page budget over | whole page | **14.51 vh** vs DESIGN §5 `11–14 vh` (r3 = 14.38, so worse) | trim S3's 1.00 vh frozen hold → 13.9 vh |
| W2 | Pin count / placement | `#s1 #s3 #s6` | 3 pins vs §5 `two … (S3, S8)` | unpin S1 (1080 px track = one 12 % scale event) |
| W3 | Off-token spacing | `#s4 button.thumb` `1px/6px` ×16; `#s6 div.s6-frame` `171px` ×2 | scale is `4·8·12·16·24·32·48·64·96·128` | `4px 8px`; `128px` |
| W4 | S7 chips ragged | `#s7 .chip` @390 | **219 / 336 / 252 px** | `width:100%` |
| W5 | Contrast tool covers fold only | `text-contrast.mjs` output | all 10 rows are `#s1`; `fail=0` is not a whole-page pass | extend the tool to sample per section |
| W6 | h1 dips below 3:1 | `#s1 h1` @1440 | tool: **min 2.22, 0.4 % < 3** | extend hero scrim right |
| W7 | S5 spine + unscrimmed cycling caption | `#s5 .fx-pex__spine`, `.fx-pex__cap` | **min 1.34, 1.0 % < 4.5**; ground cycles black↔white every 5.2 s (`s5-cyc3` vs `s5-cyc6`) | apply the §3 three-layer treatment |
| W8 | S10 h2 dips below 3:1 | `#s10 h2` | **min 1.00, 0.3 % < 3** | widen bottom-left vignette |
| W9 | `:active` on 1 selector | 138 KB CSS, 1 `:active` rule | `#s4 .thumb`, `#s5 .fx-pex__panel`, `#s7 .chip` (11 controls) have no press feedback | extend the selector list |
| W10 | 15px nav link | nav `a.btn` | `15px w500` vs §3 `16/18` | 16px |
| W11 | 13px **sans** ×3 | 3 nodes | §3 allows 13px only as mono labels | 16px or mono label |
| W12 | Display text not marked as headings | `#s5` ×4, `#s9` ×2 | `40px/700 Syne` on `<span>`/`<p>` | `<h3>` |
| W13 | S5 4th panel clipped | `#s5`, `rv4-d-s5-cyc6.jpg` | expanded `Night road` runs x≈536 → past 1440; never seen whole | reduce open width to 56vw, or scroll the rail |
| W14 | S6 entry pose is a timid thumbnail | `#s6 .s6-frame` margin 171px, `rv4-d-s6-a-enter.jpg` | 905×545 image alone on black, no text, ~170/185 px dead bands | start the reveal nearer full-bleed |
| W15 | S9 has no action | `#s9`, `rv4-d-s9-a.jpg` | "Two ways in." + 2 cards, no button/price/link | add the primary CTA |
| W16 | Voids read as empty, not spacious | `#s9` ≈285 px top void; `#s10` ≈460 px CTA→footer void | `rv4-d-s9-a.jpg`, `rv4-d-s10-a.jpg` | rebalance S9 centring; raise the S10 footer meta or brighten `amb-01` |
| W17 | 390 prompt orphan | `#s3 .tok` | `35mm` alone on line 4 with hanging underline (`rv4-m-s3-b-mid.jpg`) | `text-wrap: pretty` |

Cross-cutting, folded into W1/W2 rather than counted twice: **2.33 vh of the 14.51 vh page (16 %) is frozen scroll** — S1 holds 0.64 vh after settling at 47 %, S3 holds 1.00 vh after 50 %, S6 holds 0.69 vh after 51 %. `s1-b-mid` ≡ `s1-d-exit` and `s3-b-mid` ≡ `s3-d-exit` are pixel-identical pairs.

### FYI

1. 25 nodes at 13px on 390 — DESIGN §3 sanctions this for mono labels; it collides with §1.5's 14px floor. Policy question, not a defect.
2. DESIGN §4 declares `disabled 40%`; r4 contains no disableable control, so the style is never emitted. Not a missing state.
3. DESIGN §5 places inversions at S4/S9; the build inverts at S7/S9. Unversioned §7 drift.
4. `scrub-timing-probe`'s ±0.33 vh grid is coarser than the tolerance the C7 table asserts; C10's "overwrite with probe values" would inject wrong numbers (§3-a).
5. Storyboard `호버 역할 = CTA 2% 리프트` and D2's `hover:none` fallback are not implemented; the build correctly preferred DESIGN §2. Storyboard should be corrected, not the build (§3-c, §3-d).
6. 7 empty `alt` attributes — all on decorative/duplicated media inside `aria-label`-bearing buttons. Correct usage. 0 images missing `alt` entirely.

### Closed from round 3

| r3 item | Status | Evidence |
|---|---|---|
| Radius off-token **43** (12px ×36, 50% ×6, 14px ×1) | **RESOLVED** | full computed scan: `{0:700, 5:92, 10:16, 999:16}`, off-token **0**, percentage radii **0** |
| Spacing off-token **14 종** | **PARTIAL** | 3 values / 18 declarations remain (`1px`, `6px`, `171px`); `88px` is the declared gutter, not a violation |
| S3 caption scramble — 6/8 frames illegible | **RESOLVED** | scramble removed; caption measures min 6.47:1, tokens min 9.44:1 |
| `drift-collage` dead layer (0.65 px / 3 s) | **RESOLVED** | removed; idle motion verified present at S1 97 %, S2 93 %, S5 (5.2 s cycle), S10 88 % byte-diff |
| Entry curtain occludes H1 + CTA ~0.9 s | **RESOLVED** | 390 first paint: **0 fixed/sticky elements in viewport**; §1.8 clean |
| Declared ≠ implemented K (52/65/70/60 → 38/50/55/42) | **RESOLVED** | measured 47.0 / 50.0 / 51.0 vs declared 50.0 / 50.0 / 52.1 — max Δ **3.0 pp**, S3 exact |
| Hover gates 4/4 | **RESOLVED** | 6 hover rules, **0 with transform**; drum, gallery cycle, sequence, compare sweep and presets all reachable with zero pointer input |
| Image < 10 % in 6/11 sections | **RESOLVED** | 6 full-bleed sections; primary-media share median **1.00**; only `#s7` (~36 %) is inset |
| `.plan-cta .btn:hover{brightness(1.35)}` | **RESOLVED** | hover brightness values in CSS = `{1.06}` only |
| §2 "Hover never transforms" (3 rounds open) | **RESOLVED** | 0 hover rules contain `transform`, `translate` or `scale` |
| §3 type grades 128/80/48 unused 3 rounds | **RESOLVED** | new scale 112/80/56/40 — all four grades in use |
| h2/h3 tracking + leading outside §3 | **RESOLVED** | every h1/h2 measures exactly `−0.0400em` / `0.920` |
| `--e-settle` easeOutQuint 0 uses | **RESOLVED** | `.22,1,.36,1` present ×1 in CSS |
| `.ba-knob` `border-radius:50%` | **RESOLVED** | 0 percentage radii |
| Pins 4 > 2 · 14.38 vh > 14 | **PARTIAL** | pins 3 (still > 2); **14.51 vh (worse than r3)** |
| Media cards no hover scrim (§4) | **PARTIAL** | 2 hover rules now match `card\|panel\|tile\|thumb`; not all 42 media surfaces |
| 390 tap target 1 miss (`.skip` 1×1) | **RESOLVED** | 0 sub-44 px targets at 390 |

**14 of 17 r3 items closed, 3 partial, 0 regressed except page length (14.38 → 14.51 vh).**

### Verdict

**BLOCK** (skill §3: BLOCK ≥ 1 → publication blocked, writer revision round). BLOCK = 4, WARN = 17.

Three of the four BLOCKs are cheap: B1/B2 are a scrim or a relocation of two labels, B4 is deleting one CSS declaration. B3 is a default-value change, not an asset change. None of them touches the architecture — the architecture is the part of r4 that is working. The direction is right and the two r3 complaints that could be fixed structurally (image scale, hover gating) are genuinely fixed; what is left is finish, and one section that argues with its own caption.

Priority order for the writer: **B3 → B1/B2 → B4 → W1/W2 (page length via the S3 hold) → W16 (the S9/S10 close) → W4 → the rest.**

### §8 취향 후보 (제안만 — 기록하지 않음)

같은 axis 2회 이상인 항목 2개. `.omd/preferences.md` 에 아무것도 쓰지 않았다. 사용자에게 물을지는 오케스트레이터가 판단한다.

- `shape/spacing` ×3 (r2 · r3 · r4 연속) — fx-library 스니펫을 이식할 때 그 기본값(`1px/6px` 패딩, `171px` 마진)을 허용할지, 이식 시점에 토큰으로 강제 치환할지. radius 는 이번에 완전히 닫혔으므로 같은 처방을 spacing 에 적용하면 이 축은 끝난다.
- `contrast` ×2 (r3 S3 캡션 · r4 S4 라벨) — 사진 위 13px 텍스트를 "스크림 없이는 배치 금지"로 못박을지. 두 라운드 연속 같은 형태(작은 mute 텍스트 + 밝은 사진 모서리)로 재발했다.

---

REVIEW_DONE verdict=REVISION block=4 warn=17 eye_score=72
