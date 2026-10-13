---
name: omd-shader-hero
description: "One full-bleed launch hero scene built only from the project's DESIGN.md colors: a slow WebGL2 mesh-gradient field of the brand tokens, with headline and sub copy kept contrast-safe by a computed, measured scrim. Reads Core v2 tokens (and Google-compatible frontmatter), refuses to invent a palette, ships a CSS poster fallback, respects prefers-reduced-motion, ~6.5 KiB gzip of library JS, and includes a real-GPU verification script that measures contrast across the whole timeline. Use for a launch page, product hero, waitlist, event or rebrand first screen that needs motion in brand color. Triggers: '셰이더 히어로', '런칭 히어로', '브랜드 컬러 배경 애니메이션', '움직이는 그라디언트 히어로', 'mesh gradient hero', 'shader hero from DESIGN.md', 'launch hero background', 'animated brand gradient', 'シェーダーのヒーロー', '著陸頁主視覺 shader'. Whole scroll-native landing → omd-landing / omd-aphrodite. CJK headline ink effect → omd-cjk-type-shader. Brand tokens missing → omd-init first."
argument-hint: "<DESIGN.md path> [--scheme dark|light] — <headline + one line of sub copy>"
user-invocable: true
---

# omd-shader-hero — one scene, brand colors only

A launch hero gets one look from someone who owes you nothing. This skill makes that look move in the brand's own colors and nothing else: a single full-bleed field where the brand tokens drift and warp slowly behind the headline, calm in the middle where the copy sits and busy at the edges. The palette, the text color and the scrim strength all come from `DESIGN.md` through a script. No color is chosen by taste in this skill.

Working example: [`examples/hero.html`](./examples/hero.html), filled from the fictional [`examples/DESIGN.example.md`](./examples/DESIGN.example.md). Scripts: [`scripts/tokens.mjs`](./scripts/tokens.mjs) (palette + contrast), [`scripts/verify.mjs`](./scripts/verify.mjs) (real-render proof).

## 1. When to use / when not

Use when:
- a launch, product, waitlist, event or rebrand page needs one first screen with motion;
- the project has a `DESIGN.md` with brand colors (Core v2 Foundations tokens, Foundations prose pairs, or Google-compatible `colors:` frontmatter).

Don't use when:
- there is no DESIGN.md or it has no brand color. `tokens.mjs` exits 3 and you stop; run `omd-init` or ask. Never pick "nice" colors to fill the gap (unknown means absent);
- the page needs several shader scenes. One scene, plus at most one small accent elsewhere (tf-shaders rule). For a whole scroll story use `omd-landing`;
- the brief ships product photography. Then the photo is the hero (tf-shaders "photo first"), and this skill is the wrong tool.

## 2. Procedure

1. **Read tokens, don't choose them.**
   ```bash
   node <skill>/scripts/tokens.mjs DESIGN.md                 # prints the palette decision as JSON
   node <skill>/scripts/tokens.mjs DESIGN.md --scheme light  # light field instead of dark
   ```
   It reads `- **color.<role>**: \`#hex\`` tokens, then `**Name** (\`#hex\`)` pairs inside the Foundations section, then frontmatter `colors:`. It drops state and utility roles (danger, error, warning, success, info, border, divider, focus, disabled, overlay, shadow, hover, pressed, active) and collapses near-duplicates. Then it builds stops as **base + up to 3 brand colors + base**. The base (darkest token for `dark`, lightest for `light`) appears twice so the field keeps quiet zones.
2. **Text color and scrim are computed.** Every pixel of a mesh gradient is a weighted blend of its stops, so the script checks the text candidates (ink/neutral tokens on the opposite end of the scheme) against every stop and every pairwise midpoint. It picks the best one, then finds the lowest alpha of a base-colored scrim that reaches **4.5:1 for sub copy**. If even 95% can't, it says so: make the headline large (3:1) and move the sub copy off the scene.
3. **Write the hero.** Copy `examples/hero.html` (or port it, see §6) and fill it:
   ```bash
   node <skill>/scripts/tokens.mjs DESIGN.md --write path/to/hero.html
   ```
   That rewrites the `#hero-vars` CSS block (`--hero-c0..n`, `--hero-text`, `--hero-scrim`, `--hero-scrim-a`) and the `#hero-tokens` JSON. The poster, scene, scrim and CTA all read from those.
4. **Copy is real.** Headline + one sentence + one CTA. Use the user's actual product line. Never invent metrics, customers or investors (tf-shaders §0).
5. **Verify on a real GPU** (§5) and look at the frames.

## 3. The scene and its two parameters

Paper's `meshGradientFragmentShader` with the token stops, `fit: cover`, `swirl: 0.1`, grain off. Paper's grain overlay mixes in pure black and white, which are not brand tokens.

| Param | Range | Default | What it does |
|---|---|---|---|
| `speed` (`data-speed`) | 0–1 | 0.35 | Drift of the color spots. Above ~0.6 it starts to read as a screensaver. 0 freezes the field. |
| `distortion` (`data-distortion`) | 0–1 | 0.8 | How far the spots warp into each other. Lower = calm, separated blobs. Higher = liquid. |

Layout rules that the contrast math depends on:
- The copy block sits at the center over a radial **scrim in the base color**: flat at the computed alpha across the copy box (60% of the radius), half at 80%, gone at 100%. This is the "quiet state" from tf-shaders. The field is busy at the edges and calm behind type.
- **Hero copy paints on the first frame**: no `opacity: 0`, no waiting for the canvas. The canvas fades in over 600ms above an already complete CSS poster.
- Korean display type follows `/hangul`: `keep-all` + `overflow-wrap: anywhere`, line-height 1.3, tracking -0.02em (never below -0.03em), `text-wrap: balance`, `font-synthesis: none`.
- Background on `html`, never on `body` (a body background paints over a negative-z scene; tf-shaders pitfall).
- Radius, type scale and spacing come from DESIGN.md too. The example's fixture defines no radius, so its CTA is square.

## 4. Library, license, budget, fallback

**Library: `@paper-design/shaders` 0.0.81 (vanilla `ShaderMount` + `meshGradientFragmentShader`), WebGL2.** Licenses verified 2026-10-13 from the npm tarballs' LICENSE files, npm metadata and the GitHub license API:

| | `@paper-design/shaders` 0.0.81 | `shaders` 4.0.4 (shaders.com) |
|---|---|---|
| License | **Apache-2.0** (+ NOTICE "Paper Shaders, Copyright 2026 Paper") | **MIT** (© 2026 Shader Effects Inc.); dep `typegpu` 0.12.3 MIT |
| Runtime | WebGL2, near-universal | WebGPU only, transparent canvas and no log when unsupported |
| JS for this scene | **20.8 KiB min / 6.5 KiB gzip** (esbuild); CDN per-file `+esm` ≈ 6.5 KiB gzip; React `MeshGradient` 25.0 / 8.1 KiB | 2,535 KiB min / 710 KiB gzip (`Shader` + `MeshGradient`) |
| Telemetry | none | on by default (5% sampling to `shaders.com/api/telemetry`). If you must use it, pass `disableTelemetry` |
| npm weekly downloads (2026-10-05..11) | 1,104,377 (`-react`) | 287,493 |

Paper wins on reach, weight and telemetry. `shaders` is the upgrade path only for a project that already ships WebGPU scenes. There, keep this same token pipeline and fallback, and pass `disableTelemetry`. Both licenses allow use in skills and templates. The example imports Paper from a pinned CDN URL and does not vendor it. If you vendor Paper's files, copy its `NOTICE` with them.

Budget:
- **JS:** 6.5 KiB gzip library + 1.1 KiB gzip scene code.
- **GPU:** one full-viewport quad, ≤ 5 color spots (the stop count is fixed per page, so nothing recompiles). `minPixelRatio: 1` and `maxPixelCount` 1920×1080, because a soft field gains nothing at 2×. Paper pauses offscreen and in hidden tabs.
- **No images, no video, no font beyond the UI face.**

Fallback (part of the design, not an afterthought):
- **CSS poster** under the canvas: radial gradients of the same `--hero-c*` tokens. It is the first paint, the no-WebGL2 path (`ShaderMount` throws without a context; the page probes `getContext('webgl2')` first), and the state when the CDN is unreachable. `verify.mjs` forces this path.
- **`prefers-reduced-motion: reduce`:** speed 0 at a fixed frame (`STILL_FRAME`, 8000ms). That's one still composition with no rAF loop.

## 5. Verify on a real GPU

```bash
npm i -D playwright-core && npx playwright-core install chromium   # fresh Playwright Chromium, not your own Chrome
node <skill>/scripts/verify.mjs path/to/hero.html ./hero-verify --frames 48 --seconds 12
```

It runs four passes (1440px GPU, 390px mobile, reduced-motion, no-WebGL) with `--enable-gpu --ignore-gpu-blocklist --use-angle=metal` (macOS), and for each one:

- records the WebGL renderer, so you know whether a real GPU or SwiftShader drew the frames;
- steps the shader clock deterministically across 12s and saves frames (ffmpeg → demo GIF/MP4);
- **measures contrast**: hides the copy, samples the scene behind the headline and sub copy in every frame, and takes the worst ratio against the text color. It fails below 4.5:1 for sub copy or 3:1 for the display headline;
- checks that the canvas (not the poster) is what's on screen, that the field moves, that the headline is at full opacity on load, that reduced motion is still, and that no-WebGL shows the poster with no canvas.

Measured on 2026-10-13 with the fixture (headless Chromium 149, `ANGLE Metal Renderer: Apple M5 Pro`): worst headline 3.47:1 and sub copy 7.85:1 at 1440px; 4.91 / 6.66 at 390px; all checks passed. `tokens.mjs` predicted 4.81:1 under the scrim's flat core. The headline's measured worst is lower because its outer letters reach into the scrim's fade.

## 6. Next.js / React port

Server-render the section, copy and poster as plain HTML/CSS (the poster needs no JS). Mount the scene in a `'use client'` leaf: 

```tsx
useEffect(() => {
  if (!probeWebGL2() || !ref.current) return;           // poster stays; nothing to clean up
  let m: { dispose(): void } | undefined;
  (async () => {
    const { ShaderMount, meshGradientFragmentShader } = await import('@paper-design/shaders');
    try { m = new ShaderMount(ref.current!, meshGradientFragmentShader, uniforms, undefined, reduce ? 0 : speed, 8000, 1, 1920 * 1080); }
    catch { /* keep the poster */ }
  })();
  return () => m?.dispose();
}, []);
```

 Generate the CSS variables at build time from `tokens.mjs --json`, not at runtime.

## 7. Attribution

From the owner's **tf-shaders** experiment (`skill/shader-landing/SKILL.md`, `RESEARCH.md`, `scripts/shoot.mjs`, 2026-10): one scene plus at most one accent, the stated JS budget, the CSS poster under every canvas, background on `html`, quiet state behind type, contrast at the brightest frame, first-frame hero copy, reduced motion as a state change, and the real-GPU screenshot loop. This skill adds the token pipeline, the computed scrim, measured contrast and the WebGL2 runtime choice.

## Don't

- Don't add a color that isn't a DESIGN.md token: no white/black grain, no "accent we liked", no state colors (danger red as a "warm" stop).
- Don't animate the stop **count** or swap shaders per breakpoint. Both recompile. Changing a color value is a uniform write and is fine.
- Don't check contrast on the first screenshot only. Check the whole timeline; `verify.mjs` does.
- Don't stack the hero on a `body` background, and don't fade the headline in.
- Don't load Paper and `shaders` on the same page.
