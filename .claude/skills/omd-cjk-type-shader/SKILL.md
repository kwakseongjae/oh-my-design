---
name: omd:cjk-type-shader
description: "One effect, done well: 먹 번짐 (ink bleed) behind a large Korean, Japanese or Chinese display headline. The heading stays real, selectable DOM text from the first frame; a WebGL2 shader behind it lets ink seep out of the actual glyph shapes into paper, with fiber-ragged edges and a tide line as it dries, then stops. Two parameters (bleed, duration), ~5 KiB gzip of library JS, static fallback, prefers-reduced-motion, real-GPU verification script. Use for a CJK hero/launch headline, brand title, campaign line or section opener that should feel hand-inked. Triggers: '먹 번짐', '잉크 번짐', '한글 타이포 셰이더', '제목에 셰이더', '墨のにじみ', '筆文字っぽく', '墨跡暈開', 'CJK headline shader', 'ink bleed text effect', 'Hangul shader'. Not for body text, buttons, or Latin-only headlines. Full-page shader backgrounds → omd-shader-hero. Korean typesetting rules → hangul. Brand tokens → omd-apply."
argument-hint: "<selector or file of the CJK headline> [bleed 0..1] [duration seconds]"
user-invocable: true
---
<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->


# omd-cjk-type-shader — 먹 번짐 (ink bleed) for CJK display type

Ink soaking into paper is the one image Korean, Japanese and Chinese writing share. This skill puts that moment behind a big CJK headline: the type is already there, crisp and readable, and ink seeps out of the strokes into the paper around it, feathered by the paper's fibers, and dries with a darker edge. It plays once when the heading enters the viewport, then the render loop stops.

The effect is built from **the browser's own layout of the real heading**: every grapheme is traced where the browser put it, turned into a distance field, and the shader spreads ink outward from that field. Line wrapping, `keep-all`, font swaps and resizes are re-traced, so the bleed always hugs the glyphs the reader actually sees.

Working example: [`examples/demo.html`](./examples/demo.html) (single file, Korean + Japanese + Traditional Chinese). Proof: [`scripts/verify.mjs`](./scripts/verify.mjs).

## 1. When to use / when not

Use when:
- a Korean, Japanese or Chinese **display** headline (≥ 40px; hero, launch title, campaign line, section opener) should feel hand-inked, calligraphic or "printed on hanji / washi / 宣紙";
- the brand's ink color and paper color are known (DESIGN.md foreground/canvas, or the heading's computed `color` and the page background).

Don't use for:
- body text, labels, buttons, nav, anything below ~32px (the wash would smear legibility);
- Latin-only headlines (it works, but the cultural point is gone; reach for a different effect);
- more than one or two headings per page. Boldness in one place (tf-shaders rule);
- dark-on-dark or light ink on dark paper without checking: the wash is the ink color at ≤ 34% opacity, so it needs a paper that ink reads on.

## 2. The effect and its two parameters

| Param | Range | Default | What it does |
|---|---|---|---|
| `bleed` | 0–1 | 0.7 | How far the ink travels: up to `0.24em × bleed` from every stroke, plus fiber fingers. 0.5 = a soft halo, 0.8 = a wet brush, above 0.9 the counters fill. |
| `duration` | s | 2.6 | Time from first contact to dry. The front moves fast and then creeps (cubic ease-out), and the tide line darkens over the last 40%. Under 1.5s it reads as a glow, over 4s as a loading state. |

Everything else is fixed on purpose: ink color = the heading's computed `color`, wash opacity ≤ 0.26, tide line ≤ 0.36, paper grain and fibers scaled in em so the texture matches the type size. One signature, not a control panel.

## 3. The contract that keeps text text

- The heading is a normal `<h1>`/`<h2>` with its real text. `inkBleed()` wraps the text in `.ink-text` (z-index 1) and inserts an `aria-hidden="true"`, `pointer-events: none` layer behind it (z-index 0). The canvas is decoration. It never replaces, covers or re-draws the glyphs.
- **The headline paints on the first frame.** No `opacity: 0`, no clip, no wait for the shader. tf-shaders measured LCP going to 7.8s when hero copy waited for a shader.
- Selection, copy, find-in-page, translation, screen readers and SEO see plain text. `verify.mjs` checks that selecting the heading returns its full text in every pass.
- Leave clear space around the heading (the demo uses `margin-bottom: 0.4em`). The wash extends up to ~0.3em past the glyphs, and it must not tint neighbouring text.
- Never draw CJK headlines with a canvas/`Text` shader component. Canvas text loses selection, accessibility, indexing and correct CJK shaping (tf-shaders "Don't" list).

## 4. CJK typesetting (applies before the shader)

From `/hangul` (HG rules) for Korean; ja/zh scoped separately so Korean rules don't leak:

```css
.ink:lang(ko) { word-break: keep-all; overflow-wrap: anywhere;  /* HG-10, scoped to :lang(ko) */
                letter-spacing: -0.02em;                          /* HG-7: display never below -0.03em */
                line-height: 1.3; }                               /* HG-5: wrapping display >= 1.3 */
.ink:lang(ja), .ink:lang(zh-Hant) {
  line-break: strict;                                 /* kinsoku: no small kana / closing marks at line start */
  word-break: keep-all; overflow-wrap: anywhere;      /* break only at <wbr> phrase marks you place */
  letter-spacing: 0; line-height: 1.4; }
:lang(ko), :lang(ja), :lang(zh) { font-synthesis: none; } /* no fake bold/italic on CJK */
```

- Mark Japanese/Chinese phrase boundaries with `<wbr>` (BudouX-style: 墨がにじむように、`<wbr>`名前が`<wbr>`紙に染みこむ。). In headless Chrome 149, `word-break: auto-phrase` computed correctly but did not produce phrase breaks in this demo, so don't rely on it.
- Korean: line breaks only at spaces between 어절, never syllable by syllable. Hand-place display line breaks when the copywriter cares (tf-shaders `cjk-type.md`).
- Set `lang` on the heading (`ko`, `ja`, `zh-Hant`/`zh-Hans`). It picks the right glyph variants for shared Han code points and scopes the rules above.
- Fonts: use a face that ships the weight you set (HG-12). The demo uses Noto Serif KR / JP / TC 700 from Google Fonts, which loads only the glyph slices the page uses. A myeongjo/mincho/song face suits ink. Pretendard works too. **Trace after `document.fonts.ready`** so the field follows the real face, not the fallback.

## 5. Library, license, budget

**Library: `@paper-design/shaders` (vanilla `ShaderMount`), pinned 0.0.81, WebGL2.** Decision record (verified 2026-10-13 from the npm tarballs' LICENSE files, npm metadata and the GitHub license API):

| | `@paper-design/shaders` 0.0.81 | `shaders` 4.0.4 (shaders.com) |
|---|---|---|
| License | **Apache-2.0** (LICENSE + NOTICE "Paper Shaders, Copyright 2026 Paper") | **MIT** (© 2026 Shader Effects Inc.); dep `typegpu` 0.12.3 MIT (Software Mansion) |
| Redistribution in a skill/template | allowed; keep NOTICE if you vendor code | allowed |
| Runtime | WebGL2: every current desktop and mobile browser | WebGPU only, no fallback (Chrome/Edge, Android 12+ Chrome, Safari 26+, recent Firefox) |
| JS for this effect | **17.5 KiB min / 5.3 KiB gzip** (esbuild, `ShaderMount` only); CDN per-file `+esm` 16.4 KiB / 5.0 KiB gzip | 2,535 KiB min / 710 KiB gzip (esbuild, `Shader`+`MeshGradient` from `shaders/react`) |
| Telemetry | none (its only `fetch()` reads a local blob's content type) | **on by default**: samples 5% of sessions to `shaders.com/api/telemetry`; pass `disableTelemetry` |
| Custom GLSL + textures | yes (`ShaderMount(el, frag, uniforms)`, image uniforms) | via its component graph |

The effect needs a custom fragment shader and one texture, which is exactly what `ShaderMount` is, at 1/130th of the WebGPU runtime's weight and with twice the browser reach. The demo imports Paper from jsDelivr (pinned, per-file build) and does not vendor it, so no NOTICE copy is needed. If you vendor Paper's files, copy its `NOTICE` alongside. If a project already ships `shaders`, this effect still runs on Paper. Don't load both runtimes on one page.

Budget for one heading:
- **JS:** 5.0–5.3 KiB gzip library + 4.4 KiB gzip of effect code (shader, distance transform, tracing; measured unminified with comments).
- **GPU:** one quad, one texture lookup and 7 value-noise calls per pixel, over the heading box plus a 0.3em pad, `minPixelRatio: 1`, capped at 1920×1080 px. It runs for `duration` and then `setSpeed(0)` stops the rAF loop. Paper also pauses it offscreen and in hidden tabs.
- **CPU:** one Euclidean distance transform at half resolution per layout change (font swap, resize, re-wrap), debounced 120ms.
- **Fonts are the real cost.** CJK faces are large. Load only the display weight, as unicode-range slices.

## 6. Fallback and reduced motion

- **No WebGL2** (probe `canvas.getContext('webgl2')` before mounting; `ShaderMount` throws if it can't get a context or link the program): no layer is inserted, the heading gets `.ink-static`, which adds a quiet CSS `text-shadow` wash. The heading is complete without it. `verify.mjs` forces this path by stubbing `getContext`.
- **`prefers-reduced-motion: reduce`:** mount at the dried frame with speed 0. The reader gets the final inked state as one still frame, with no motion and no rAF loop.
- **Shader compile failure** (one happened while building this: a precision mismatch with Paper's vertex shader) takes the same `.ink-static` path. In your own GLSL, declare `uniform mediump vec2 u_resolution;`, because the precision must match Paper's vertex shader.

## 7. Verify on a real GPU

`next build` or a passing lint proves nothing for shaders (tf-shaders rule). Run:

```bash
npm i -D playwright-core && npx playwright-core install chromium   # a fresh Playwright Chromium, not your own Chrome
node <skill>/scripts/verify.mjs path/to/page.html ./ink-verify --frames 36
```

It launches headless Chromium with `--enable-gpu --ignore-gpu-blocklist --use-angle=metal` (macOS) and runs three passes: GPU, reduced-motion, no-WebGL. Then it:

- records the WebGL renderer string, so you know whether a real GPU or SwiftShader drew the frames;
- steps the shader clock deterministically and saves frames (feed them to ffmpeg for the demo GIF/MP4);
- proves rendering with pixels: shader-on vs shader-off inside the heading box, and first frame vs dried frame;
- checks that the selected text equals the heading text, the layer is `aria-hidden` + `pointer-events: none`, reduced motion is still, and no-WebGL leaves no canvas.

Measured on 2026-10-13 (headless Chromium 149, `ANGLE Metal Renderer: Apple M5 Pro`, not SwiftShader): 29.7% of heading-box pixels changed by the shader, start ≠ dry, all checks passed. Look at the frames anyway: a misaligned field (wrong baseline) shows as a wash offset under the strokes, and only your eyes catch that.

## 8. Next.js / React port

Keep the same function and lifecycle in a `'use client'` leaf: `useEffect(() => { let h; document.fonts.ready.then(async () => { const { ShaderMount } = await import('@paper-design/shaders'); h = await inkBleed(ref.current, { bleed, duration }); }); return () => h?.mount.dispose(); }, [])`. Render the heading server-side as plain text, so the shader only decorates it after hydration. Don't use `@paper-design/shaders-react`'s `<ShaderMount>` here: it doesn't give you the WebGL2 probe, the fallback class, or control over when the field is re-traced.

## 9. Attribution

The budget-first framing, the fallback-is-design rule, the first-frame-LCP rule, 어절-not-syllable reveals, `keep-all`, and the real-GPU screenshot loop come from the owner's **tf-shaders** experiment (`skill/shader-landing/SKILL.md`, `references/cjk-type.md`, `scripts/shoot.mjs`, `RESEARCH.md`, 2026-10). Korean type values come from OmD's `/hangul` skill. The distance transform is Felzenszwalb & Huttenlocher's linear-time EDT, written fresh here.

## Don't

- Don't hide the heading until the shader is ready. The text is the content; the ink is the frame.
- Don't animate syllable by syllable, and don't split Hangul into per-character spans for a reveal.
- Don't run the loop forever. A dried ink effect costs nothing; a looping one drains batteries.
- Don't put two runtimes (Paper + `shaders`) on one page for one heading.
- Don't set `bleed` so high that counters fill (ㅁ, ㅇ, 口, 日 turn into blots). Check the dried frame at your real font size.
