---
schema: design-md-core
version: 2
profile: portable-core
brand: Ninefold Atelier
provenance: fictional-brand — every fact below was authored for this concept run on 2026-09-03; nothing is observed from a real company.
---

# Ninefold Atelier — Design System (fictional)

## 1. Experience
Ninefold makes scent objects: three ceramic vessels, one brass burner, a linen pouch. The promise is **slow air** —
changing a room nine times a day by a small ritual, not a spray. The audience is a first-time visitor who arrived
from a photograph. Principles: *one world* (every image from the same studio light), *air is content* (negative space
is part of the object), *nothing shouts* (brass is a signal, never a surface). Avoid: lifestyle faces, stock
interiors, glossy renders, any text or logo inside imagery.

## 2. Foundations
- Color: `paper #F4F1EA` (ground) · `ink #1C1B19` (text) · `clay #B8865B` (warm surface) · `smoke #6F6A63` (secondary text, rules) · `brass #C9A24A` (accent only — links, focus ring, selection; ≤5% of any viewport).
- Spacing steps: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 144px. Section air uses 96/144 only around the peak; elsewhere 48/64.
- Shape: radius 2px for cards, 999px for pills. No large radii — the objects are the curves.
- Elevation: one soft shadow `0 24px 60px -32px rgb(28 27 25 / .35)` for lifted cards; glass surfaces use 2-layer backdrop blur (LC-39).
- Texture: film grain overlay (feTurbulence, opacity .08, overlay) on every ground larger than a card; vignette on full-bleed imagery (LC-45).
- Motion: one page duration `600ms`, easing `cubic-bezier(.22,1,.36,1)`; one spring moment (`linear()` overshoot) at hero settle only. Reveals are opacity+transform via `animation-timeline: view()` with an opacity fallback. `prefers-reduced-motion` disables all.

## 3. Typography & Assets
- Display: **Fraunces** variable (opsz 144, wght 500, tracking −0.03em), inlined as base64 woff2 (OFL). Sizes: 120 / 72 / 44.
- Body: **Inter** variable (opsz 14, wght 400), inlined. Sizes: 18 / 16 / 13. Labels 12 uppercase, tracking .12em.
- Type scale ratio display:body ≈ 6.7×. Headings `text-wrap: balance`, paragraphs `text-wrap: pretty`.
- Imagery: one kind only — editorial studio still life, paper-white light, film grain. All raster media share one filter preset `contrast(1.04) saturate(.92)`. Formats: PNG from generation → served inline as WebP/AVIF data URI where size allows.
- Icons: inline SVG, 1.5px stroke, ink. No emoji.

## 4. Components & States
- Button (primary): ink ground, paper text, radius 999, states default/hover (ink→smoke)/focus-visible (2px brass ring, 3px offset)/active/disabled (smoke 40%).
- Link: ink text, 1px brass underline offset 4px; hover thickens to 2px.
- Card (product): paper ground, 1px `rgb(28 27 25 / .08)` hairline, radius 2, image with shared filter preset.
- Filmstrip scroller: horizontal, snap-x, 8+ items, edge fade masks.
- Sticky ritual stage: 5 steps, image swaps by scroll position, step label in labels style.

## 5. Layout & Platforms
- Grid: 12 col, gutter 88px @1440, 20px @390. Content max 1280.
- Breakpoints: 1440 (design) · 1024 (2-col → filmstrip visible 2.5 items) · 390 (single col, display 56/40, hero image crop keeps the vessel whole).
- Page budget 10–14 vh; body sections ≈ 1–1.6 vh; one pinned stage (ritual) allowed.

## 6. Content & Locales
- Voice: quiet, declarative, no exclamation. Nouns before verbs. English primary; Korean secondary label allowed.
- Never: fabricated statistics, customer names, awards.
- Footer must read: `Fictional brand — unofficial generated concept.`

## 7. Governance
- Application priority: this file → aphrodite storyboard → codex. Unknown means absent.
- Changes to palette/type require a new version of this file; images regenerated with the same styleSuffix.
