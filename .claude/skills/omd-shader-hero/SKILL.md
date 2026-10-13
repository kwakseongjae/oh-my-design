---
name: omd:shader-hero
description: "One full-bleed launch hero in two inks from the project's DESIGN.md: the base color and exactly one brand color, as a slowly folding ordered-dither (Bayer) field — a print/riso look, not a generic gradient. Two flat inks never blend, so there is no mud. The copy sits on a hard-edged base-ink knockout, so headline and sub copy both clear 4.5:1 by construction, and a verify script measures it across the whole timeline. Reads Core v2 tokens (and Google-compatible frontmatter), refuses to invent a palette, ships a CSS halftone poster fallback, respects prefers-reduced-motion, ~7 KiB gzip of library JS. Use for a launch page, product hero, waitlist, event or rebrand first screen that needs motion in brand color. Triggers: '셰이더 히어로', '런칭 히어로', '디더링 배경', '리소 느낌 히어로', '브랜드 컬러 배경 애니메이션', 'dither hero', 'shader hero from DESIGN.md', 'launch hero background', 'riso print hero', 'シェーダーのヒーロー', '著陸頁主視覺 shader'. Whole scroll-native landing → omd-landing / omd-aphrodite. CJK headline ink effect → omd-cjk-type-shader. Brand tokens missing → omd-init first."
argument-hint: "<DESIGN.md path> [--scheme dark|light] — <headline + one line of sub copy>"
user-invocable: true
---
<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->


# omd-shader-hero — one scene, two brand inks

A launch hero gets one look from someone who owes you nothing. Mesh gradients are the most generic shader look on the web, and blending two complementary brand hues turns them brown. This skill does the opposite: **two flat inks**, the base color and one brand color, printed as an ordered-dither field that folds slowly like light through a screen print. Every pixel is one ink or the other, so nothing blends and nothing goes muddy. The copy sits on a hard-edged knockout in the base ink, like a cut-out panel on a riso poster.

The script picks both inks, the text color and the contrast from `DESIGN.md`. No color is chosen by taste.

Working example: [`examples/hero.html`](./examples/hero.html), filled from the fictional [`examples/DESIGN.example.md`](./examples/DESIGN.example.md). Scripts: [`scripts/tokens.mjs`](./scripts/tokens.mjs) (inks + contrast), [`scripts/verify.mjs`](./scripts/verify.mjs) (real-render proof).

## 1. When to use / when not

Use when:
- a launch, product, waitlist, event or rebrand page needs one first screen with motion;
- the project has a `DESIGN.md` with a brand color and a dark (or light) base (Core v2 Foundations tokens, Foundations prose pairs, or Google-compatible `colors:` frontmatter);
- a graphic, printed, confident look fits the brand.

Don't use when:
- there is no DESIGN.md or no brand color. `tokens.mjs` exits 3 and you stop; run `omd-init` or ask. Never pick "nice" colors to fill the gap (unknown means absent);
- the brand is soft, photographic or luxury-quiet. A dither field is loud. Use the brief's photography instead (tf-shaders "photo first");
- the page needs several shader scenes. One scene, plus at most one small accent elsewhere (tf-shaders rule). For a whole scroll story use `omd-landing`.

## 2. Procedure

1. **Read tokens, don't choose them.**
   ```bash
   node <skill>/scripts/tokens.mjs DESIGN.md                 # prints the decision as JSON
   node <skill>/scripts/tokens.mjs DESIGN.md --scheme light  # light base instead of dark
   ```
   The script reads three formats, in this order: `- **color.<role>**: \`#hex\`` tokens, `**Name** (\`#hex\`)` pairs inside the Foundations section, then frontmatter `colors:`. Then it:
   - drops state and utility roles (danger, error, warning, success, info, border, divider, focus, disabled, overlay, shadow, hover, pressed, active);
   - takes the darkest token as the **base ink** (the lightest for `light`);
   - takes **one brand ink**: the role named primary/brand if there is one, else the most saturated brand color, skipping any too close to the base.
2. **Text color is computed.** The script checks the text candidates (ink/neutral tokens at the opposite end of the scheme) against both inks and their midpoint and picks the best one. The copy then sits on an **opaque base-ink knockout**, so the bar it must clear is the text token on the base ink. With the fixture that is 18.8:1. If even that is under 4.5:1, the script warns: pick another text token.
3. **Write the hero.** Copy `examples/hero.html` (or port it, see §6) and fill it:
   ```bash
   node <skill>/scripts/tokens.mjs DESIGN.md --write path/to/hero.html
   ```
   That rewrites the `#hero-vars` CSS block (`--hero-c0` base, `--hero-c1` brand, `--hero-text`, `--hero-scrim`, `--hero-scrim-a`) and the `#hero-tokens` JSON.
4. **Copy is real.** Headline + one sentence + one CTA. Use the user's actual product line. Never invent metrics, customers or investors (tf-shaders §0).
5. **Verify on a real GPU** (§5) and look at the frames at full size.

## 3. The scene and its two parameters

Paper's `ditheringFragmentShader`: `shape = warp` (slow folding bands), `type = 4x4` (ordered Bayer), `colorBack` = base ink, `colorFront` = brand ink.

| Param | Range | Default | What it does |
|---|---|---|---|
| `speed` (`data-speed`) | 0–1 | 0.3 | Drift of the folds. Above ~0.6 it reads as a screensaver. 0 freezes the field. |
| `px` (`data-px`) | 2–6 CSS px | 3 | Dither cell size. 2 = fine screen, 3 = riso, 5–6 = coarse print. |

Layout rules:
- **Knockout, not scrim.** The copy box sits on an opaque base-ink panel with hard edges (inset 2rem × 2.5rem around the copy). A translucent scrim, or a feathered edge, would lay base over brand dots and recreate the mud. Small text (the footer label) gets its own knockout too.
- **Contrast: 4.5:1 for the headline and the sub copy.** The headline is large enough that WCAG would accept 3:1, but this skill doesn't rely on that. `verify.mjs` fails below 4.5:1 for either.
- **Hero copy paints on the first frame**: no `opacity: 0`, no waiting for the canvas. The canvas fades in over 600ms above an already complete CSS poster.
- Korean display type follows `/hangul`: `keep-all` + `overflow-wrap: anywhere`, line-height 1.3, tracking -0.02em (never below -0.03em), `text-wrap: balance`, `font-synthesis: none`.
- Background on `html`, never on `body` (a body background paints over a negative-z scene; tf-shaders pitfall).
- Radius, type scale and spacing come from DESIGN.md too. The fixture defines no radius, so the CTA is square.

## 4. Library, license, budget, fallback

**Library: `@paper-design/shaders` 0.0.81 (vanilla `ShaderMount` + `ditheringFragmentShader`), WebGL2.** Licenses verified 2026-10-13 from the npm tarballs' LICENSE files, npm metadata and the GitHub license API:

| | `@paper-design/shaders` 0.0.81 | `shaders` 4.0.4 (shaders.com) |
|---|---|---|
| License | **Apache-2.0** (+ NOTICE "Paper Shaders, Copyright 2026 Paper") | **MIT** (© 2026 Shader Effects Inc.); dep `typegpu` 0.12.3 MIT |
| Runtime | WebGL2, near-universal | WebGPU only; transparent canvas and no log when unsupported |
| JS for this scene | **23.7 KiB min / 7.0 KiB gzip** (esbuild); CDN per-file `+esm` 5.0 + 2.9 KiB gzip | 2,535 KiB min / 710 KiB gzip (`Shader` + `MeshGradient`) |
| Telemetry | none | on by default (5% sampling to `shaders.com/api/telemetry`); if you must use it, pass `disableTelemetry` |
| npm weekly downloads (2026-10-05..11) | 1,104,377 (`-react`) | 287,493 |

Paper wins on reach, weight and telemetry. `shaders` is the upgrade path only for a project that already ships WebGPU scenes. There, keep this token pipeline, the knockout and the fallback, and pass `disableTelemetry`. Both licenses allow use in skills and templates. The example imports Paper from a pinned CDN URL and does not vendor it. If you vendor Paper's files, copy its `NOTICE` with them.

Budget:
- **JS:** 7.0 KiB gzip library + 1.1 KiB gzip scene code.
- **GPU:** one full-viewport quad, two colors, ordered dither. `minPixelRatio: 1` and `maxPixelCount` 1920×1080, since the cell size is the resolution. Paper pauses offscreen and in hidden tabs.
- **No images, no video, no font beyond the UI face.**

Fallback (part of the design, not an afterthought):
- **CSS halftone poster** under the canvas: dots of the brand ink on the base ink (`radial-gradient` 6px cells), masked toward two corners. It is the first paint, the no-WebGL2 path (`ShaderMount` throws without a context; the page probes `getContext('webgl2')` first), and the state when the CDN is unreachable. `verify.mjs` forces this path.
- **`prefers-reduced-motion: reduce`:** speed 0 at a fixed frame (`STILL_FRAME`, 8000ms). That's one still composition with no rAF loop.

## 5. Verify on a real GPU

```bash
npm i -D playwright-core && npx playwright-core install chromium   # fresh Playwright Chromium, not your own Chrome
node <skill>/scripts/verify.mjs path/to/hero.html ./hero-verify --frames 48 --seconds 12
```

It runs four passes (1440px GPU, 390px mobile, reduced-motion, no-WebGL) with `--enable-gpu --ignore-gpu-blocklist --use-angle=metal` (macOS), and for each one:
- records the WebGL renderer, so you know whether a real GPU or SwiftShader drew the frames;
- steps the shader clock deterministically across 12s and saves frames (ffmpeg → demo GIF/MP4);
- **measures contrast**: hides the copy, samples the scene behind the headline and sub copy in every frame, and takes the worst ratio against the text color. It fails below 4.5:1 for either;
- checks that the canvas (not the poster) is on screen, that the field moves, that the headline is at full opacity on load, that reduced motion is still, and that no-WebGL shows the poster with no canvas.

Measured on 2026-10-13 with the fixture (headless Chromium 149, `ANGLE Metal Renderer: Apple M5 Pro`): worst headline and sub copy 18.81:1 in every pass (1440px, 390px, reduced motion), 13.1:1 on the no-WebGL poster. All checks passed.

## 6. Next.js / React port

Server-render the section, copy, knockout and poster as plain HTML/CSS (the poster needs no JS). Generate the CSS variables at build time from `tokens.mjs --json`, not at runtime. Mount the scene in a `'use client'` leaf:

```tsx
useEffect(() => {
  if (!probeWebGL2() || !ref.current) return;           // poster stays; nothing to clean up
  let m: { dispose(): void } | undefined;
  (async () => {
    const { ShaderMount, ditheringFragmentShader } = await import('@paper-design/shaders');
    try { m = new ShaderMount(ref.current!, ditheringFragmentShader, uniforms, undefined, reduce ? 0 : speed, 8000, 1, 1920 * 1080); }
    catch { /* keep the poster */ }
  })();
  return () => m?.dispose();
}, []);
```

## 7. Attribution

From the owner's **tf-shaders** experiment (`skill/shader-landing/SKILL.md`, `RESEARCH.md`, `scripts/shoot.mjs`, 2026-10): one scene plus at most one accent, the stated JS budget, the CSS poster under every canvas, background on `html`, quiet state behind type, contrast checked at the worst frame, first-frame hero copy, reduced motion as a state change, and the real-GPU screenshot loop. This skill adds the token pipeline, the two-ink dither, the knockout, measured contrast and the WebGL2 runtime choice.

## Don't

- Don't add a third color or blend the two inks (gradients, translucent overlays, feathered panels). Two flat inks are the whole point; a blend between complementary hues is mud.
- Don't use a color that isn't a DESIGN.md token, and never a state color (danger red as the brand ink).
- Don't put text directly on the dither field. Copy goes on the knockout; small text gets its own.
- Don't swap shaders per breakpoint or animate compile-time props. Changing an ink value or `px` is a uniform write and is fine.
- Don't stack the hero on a `body` background, and don't fade the headline in.
- Don't load Paper and `shaders` on the same page.
