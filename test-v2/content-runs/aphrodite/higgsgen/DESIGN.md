---
schema: design-md-core
version: 2
profile: portable-core
brand: Higgsgen
provenance: fictional-product — authored 2026-09-03 for the aphrodite r2 run from measured references (higgsgen-landing-anatomy §13–15). No real company is observed.
---

# Higgsgen — Design System (fictional)

## 1. Experience
Higgsgen turns one line into a directed still: cinematic frames, controlled sequences, material-true product shots.
Audience: a designer or founder who arrived from a screenshot on X and needs to believe in 3 seconds that the output is
real work. Principles: *the image is the product* (every section proves range or control), *light moves, images don't*
(still frames under moving illumination), *dark adapts the eye, then we flip it* (four luminance inversions),
*one accent, everywhere else restraint*. Avoid: faces, logos, text inside imagery, stock, fabricated metrics.

## 2. Foundations
- Color: `bg #0B0C0E` (L≈0.004) · `bg-2 #121316` · `ink #F2F2F0` · `mute #9A9B9E` · `line rgba(255,255,255,.10)` (hairline) ·
  **`accent #D1FE17`** (lime — CTA, focus, selection, live indicators; ≤5% of any viewport) · `light #FFFFFF` used as glow source at ≤14% mix.
  Inverted band: `bg-light #F3F3F1` · `ink-dark #0B0C0E`.
- Spacing: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128px. Gutter 88 @1440 · 40 @1024 · 20 @390.
- Shape: radius 5px cards · 10px stage panels · 999 pills. No larger.
- Elevation: directional `-20px 34px 64px rgba(0,0,0,.55)` for lifted media; grounding `0 40px 80px -40px rgba(0,0,0,.7)`; hairline `1px solid line` on every card.
- Texture: CSS dot texture (radial-gradient 1px dots at 6px, opacity .06) on dark grounds + grain overlay (feTurbulence, opacity .08, overlay). Grain lifts to .10 at page top and settles to .03 by S8.
- Light: conic beams (`@property --a`) sweeping 8s (S1) / 19s (S10); breathing white source 13s; cursor spotlight 300px radial on S7 cards; **light-copy**: every framed image has a `blur(40px) saturate(1.6)` copy of itself behind it so the frame tints the page.
- Motion system: **80ms multiples** — 160 (immediate) · 240 · 480 (reveal) · 720 (stage). Easings: UI `cubic-bezier(.4,0,.2,1)`, entrance `cubic-bezier(.16,1,.3,1)`, one **easeOutQuint `(.22,1,.36,1)`** for hero settle only. Stagger 80ms. **Hover never transforms** — brightness/background only. Marquee 40s / 52s reverse. `prefers-reduced-motion`: all animations off, sequences show frame 1.

## 3. Typography & Assets
- Display: **Syne** variable (wght 700–800), tracking −0.04em, line-height 0.92. Sizes **112 / 80 / 56 / 40** (2026-09-04 개정 2: 레퍼런스 14곳 폴드 최대 서체 실측 상한 = affinity 112px, 그 외 30~80px. 148 은 어느 레퍼런스에도 없고 LI-7 대역(display:body ≤7.5×)을 넘는다. 112/16 = 7.0×. 구 128/80/48 은 세 라운드 연속 0회 사용). `text-wrap: balance`.
- UI/body: **Geist** variable (wght 400–500), 16/18, line-height 1.5, `text-wrap: pretty`. Labels 13px mono uppercase tracking .14em.
- Mono: **Geist Mono** for prompts, counters, spec readouts.
- All three inlined base64 (fonts/*.css, OFL) — zero network at render.
- Imagery: 61 generated stills in 10 groups (hero worlds · range wall · control sequence · before/after · macro · product · space · abstract grounds · human-no-face · ambient). **One uniform colour grade only** (`filter: contrast(1.04) saturate(1.06)` on every content image via a shared class — LC-43; no per-image filters, no blur/sepia; 2026-09-04 r4 리뷰 B4 개정) and treat with three layers: scrim (oklch-tinted gradient) + hairline + directional shadow. Bleed heroes get a bottom fade into `bg`.
- Icons: inline SVG 1.5px, `ink`. Cursor: custom only over media surfaces.

## 4. Components & States
- Button primary: accent ground, `#0B0C0E` text, pill; hover `brightness(1.06)`; focus 2px `ink` ring offset 2; active brightness .96; disabled 40%.
- Button ghost: transparent, hairline, ink text; hover bg `rgba(255,255,255,.06)`.
- Card (media): bg-2, hairline, radius 5, image cover, light-copy behind, scrim on hover (brightness only).
- Stage (pinned): 100vh sticky panel inside 320vh track; progress `--p` drives crossfade + scale 1.06→1.00 + mono caption typing.
- Slider (before/after): `clip-path: inset()` driven by `--p`; handle 44px hit area; keyboard arrows step 2%.
- Marquee: 2 rows, edge mask 12%/88%, hover pauses the row only.

## 5. Layout & Platforms
- Grid 12 col; content max 1360. Breakpoints 1440 (design) · 1024 (2-col, tilt grid 2×4) · 390 (single col; hero cover keeps subject; marquee 1 row; pinned stages become stacked steps).
- Page budget 11–14 vh; two pinned stages allowed (S3, S8); luminance inversions at S4 and S9.

## 6. Content & Locales
- Voice: imperative, short, technical confidence. English. No exclamation marks, no fabricated numbers, no customer names.
- Footer: `Fictional product — unofficial generated concept.`

## 7. Governance
- Priority: this file → higgsgen storyboard (anatomy §15 + imageset §A) → codex LC-1~47 / IL-1~7 → recipes R1–R12.
- Unknown means absent. Changes to palette/type require a new version; images regenerated with the same suffix system.
