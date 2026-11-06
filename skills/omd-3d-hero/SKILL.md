---
name: omd-3d-hero
description: "A Blender-look 3D hero background built from the project's DESIGN.md: a soft-lit studio set (cyclorama, rounded brand-colored objects whose shapes follow the radius tokens) with the headline in real DOM text on clean backdrop. One scene spec, two engines: three.js in the browser (default, nothing to install) or headless Blender (Cycles poster + EEVEE loop video) when Blender is on the machine. Poster first: the still is the first paint, the phone, the reduced-motion and the no-WebGL state; motion is an enhancement. Reads Core v2 tokens and Google-compatible frontmatter, refuses to invent colors or shapes, measures headline contrast on the worst frame, and verifies four paths on a real GPU with frame time. Use for a launch page, product hero, campaign or showcase first screen that should look rendered, not drawn. Triggers: '3D 히어로', '블렌더 느낌 배경', '3D 배경 만들어줘', 'three.js 히어로', '렌더 느낌 첫 화면', '클레이 렌더 배경', 'Blender style hero', '3D hero from DESIGN.md', 'three.js background', 'studio render hero', '3Dヒーロー', 'Blender風の背景', '3D 主視覺'. Two flat brand inks instead of light and depth → omd-shader-hero. A CJK headline effect → omd-cjk-type-shader. Product renders from a parts list are out of scope. No DESIGN.md → omd-init first."
argument-hint: "<DESIGN.md path> [--engine three|blender] [--scheme light|dark] — <headline + one line of sub copy>"
user-invocable: true
---

# omd-3d-hero — a rendered first screen, from DESIGN.md

Most "3D hero" output is a floating torus on a purple gradient. This skill does one thing instead: a **studio set** lit like a Blender clay render — a seamless cyclorama, soft area light, contact shadows — with a few objects in the brand's own colors, shaped by the brand's own radius tokens (pill buttons → capsules, 16px corners → rounded boxes). The headline stays real text on clean backdrop to the left of the cluster, and its contrast is measured on the worst frame.

**One spec, two engines.** `scripts/spec.mjs` turns DESIGN.md into a scene spec. The same spec drives:

| Branch | When | What it ships | Cost |
|---|---|---|---|
| `three` (default) | always available | poster (baked from the live scene) + the live scene on desktop | three@0.186.1: ~194 KiB gzip from the CDN, ~136 KiB bundled; 8.3 ms median frame on Apple M5 Pro |
| `blender` | Blender ≥ 4.2 on the machine (`scripts/blender.mjs` finds it) | Cycles poster + an 8 s EEVEE loop (`loop.webm` / `loop.mp4`) | no runtime JS for the scene; video ~60–150 KiB at 1280px |

Both branches use the same HTML template, the same poster rule and the same verify script. The Blender branch runs Blender **headless from the CLI** (`blender -b -P`), never through an MCP server: no live session, no model-written Python executed inside Blender.

Working files: [`examples/hero.html`](./examples/hero.html) (template), [`engines/three/scene.js`](./engines/three/scene.js), [`engines/blender/scene.py`](./engines/blender/scene.py), [`scripts/spec.mjs`](./scripts/spec.mjs), [`scripts/blender.mjs`](./scripts/blender.mjs), [`scripts/verify.mjs`](./scripts/verify.mjs).

## 1. When to use / when not

Use when:
- a launch, product, campaign or showcase page wants a first screen that looks **rendered** (light, depth, material), not drawn;
- the project has a DESIGN.md with a brand color, a surface/canvas color and ideally radius tokens.

Don't use when:
- there is no DESIGN.md or no brand color. `spec.mjs` exits 3; run `omd-init`. Never pick "nice" colors (unknown means absent);
- the page needs the product itself in 3D (a phone, a bottle). That is a product render from a model or a parts list, not this skill;
- the brand is flat and graphic. Two flat inks fit better: `omd-shader-hero`;
- the page already has a hero video or photo. One hero, one medium.

## 2. Procedure

1. **Spec from tokens.**
   ```bash
   node <skill>/scripts/spec.mjs DESIGN.md --out spec.json                  # light scheme (default)
   node <skill>/scripts/spec.mjs DESIGN.md --scheme dark --out spec.json
   ```
   It reads three color formats (Core v2 `- **color.<role>**`, Foundations prose pairs, frontmatter `colors:`) and every `rounded:` block, then picks:
   - **backdrop**: a light neutral whose role names a surface (canvas/surface/background), preferring a tinted one over pure white (a lit white set blows out); dark scheme takes the darkest named neutral;
   - **primary**: the role named primary/brand, else the most saturated brand color; **accent** only if DESIGN.md names a second brand color (palette steps like `red100` don't count);
   - **ink** and **clay**: the darkest ink and the lightest neutral, for one satin object and the matte ones;
   - **shape**: `pill` if a `full`/`pill`/`circle` radius ≥ 999 exists (capsules, spheres), `square` if every radius ≤ 2px, else `rounded` with bevel = max radius / 64 (16px → 0.25);
   - **text**: the ink with the best contrast on the backdrop token; **CTA label**: DESIGN.md's own `on-primary` if it reaches 3:1 at 19px bold (WCAG large text), else the best of white / text / black. Accessibility wins over brand match.
2. **Write the page.** Copy `examples/hero.html` next to `scene.js`, then fill it:
   ```bash
   node <skill>/scripts/spec.mjs DESIGN.md --write path/to/hero.html --poster poster.webp
   ```
   That rewrites `#hero-vars` (`--hero-bg`, `--hero-text`, `--hero-brand`, `--hero-on-brand`, `--hero-radius`, `--hero-poster`) and the `#hero-spec` JSON. Set `data-engine="three"` or `"video"` on `.hero`, and `data-scene-src` to where `scene.js` lives.
3. **Copy is real.** Headline + one sentence + one CTA, in the user's words. Never invent metrics, customers or investors. Korean display type follows `/hangul`: `keep-all` + `overflow-wrap: anywhere`, line-height 1.3, tracking -0.02em, `text-wrap: balance`, `font-synthesis: none`.
4. **Make the poster.**
   - three: `node <skill>/scripts/verify.mjs path/to/hero.html --bake poster.webp` renders the live scene at t = 0 on the GPU, 1920×1080, and encodes WebP in the browser.
   - blender: `node <skill>/scripts/blender.mjs spec.json out/ --loop`, then `node <skill>/scripts/verify.mjs --encode out/poster.png out/poster.webp`. Put `loop.webm`, `loop.mp4` and `poster.webp` next to the page; `data-video-src` is the path without extension.
5. **Verify on a real GPU** (§5) and look at the frames at full size.

## 3. The scene

One archetype for now, `studio` with the `cluster-right` composition:
- **Cyclorama**: floor → quarter-circle cove (r 2.5) → wall, one profile shared by both engines, in the backdrop token (roughness 0.82).
- **Five objects** right of the frame's center (the cluster lands near 75% of the width), so the left ~45% is clean backdrop for the copy: a large primary object, a dark satin ink object, two matte clay objects, a small primary (or accent) sphere. Shapes come from §2's shape rule; sizes and positions are fixed in the spec, not random.
- **Light**: a large soft key from the upper left (soft shadow: Blender area light 6 m; three `DirectionalLight` + `VSMShadowMap` radius 14), a weaker rim from behind right, and an environment fill (Blender world = backdrop color at 0.3; three `RoomEnvironment` at 0.3).
- **Color**: Khronos PBR Neutral in both engines (`NeutralToneMapping` / view transform "Khronos PBR Neutral"). It keeps base colors close to the tokens; AgX and Filmic desaturate brand colors.
- **Motion**: one 8 s period, sin-based, so the loop is seamless and both engines compute the same pose(t): objects bob 0.06 and rock ±0.08 rad around Y with their own phase; the camera sways 0.15 sideways. Nothing spins, nothing flies in.

Parameters worth changing in `spec.json`: `motion.period` (6–12 s; under 6 reads busy), `motion.bob`, `exposure`, `lights.world`. Keep the composition: moving objects into the copy column breaks the contrast guarantee.

## 4. Fallback and budget

Poster first, by design:
- The poster is a CSS background on `.hero`, the first paint. The canvas or video sits under the copy at `opacity: 0` and fades in over 600 ms only after it has drawn a frame (`data-live`). Measured: poster at 77 ms, live scene at 309 ms (three, karrot fixture).
- **Phones (≤ 720px), `prefers-reduced-motion: reduce` and no WebGL2 get only the poster**: no three.js download, no video. On phones the poster sits at the bottom (`auto 58%`) under the copy.
- three.js loads with a dynamic `import()` after the poster; a failed import leaves the poster and logs one warning.
- The canvas pauses offscreen (IntersectionObserver) and in hidden tabs. Pixel ratio is capped at 2.

Budget (three branch): three@0.186.1 + `RoundedBoxGeometry` + `RoomEnvironment` is **~194 KiB gzip** over jsDelivr's minified files (the import map remaps `three.module`'s relative `three.core.js` import to `three.core.min.js`), **~136 KiB gzip** bundled and tree-shaken (esbuild). That is twenty times `omd-shader-hero`'s 7 KiB. It is acceptable only because nothing waits for it. Measure your own bundle; never put three.js on the critical path.

Version notes, checked against the 0.186.1 package: `PCFSoftShadowMap` is removed (the renderer warns and falls back), so use `VSMShadowMap` + `shadow.radius`; `CapsuleGeometry(radius, height, capSegments, radialSegments, heightSegments)`; `NeutralToneMapping` exists. Pin an exact version at least two weeks old.

## 5. Verify on a real GPU

```bash
npm i -D playwright-core && npx playwright-core install chromium
node <skill>/scripts/verify.mjs path/to/hero.html ./hero-verify
```

A local file is served over http automatically (ES modules don't load from `file://`). Four passes: desktop GPU 1440×900, phone 390×844 @2x, reduced motion, no WebGL. Checks:
- `liveOnDesktop`, `animates`: the canvas or video is on screen and moves;
- `posterBeforeLive`: the page's own clock shows the poster painted before the live layer;
- `headlineVisibleAtLoad`: the headline is at full opacity on load;
- `contrastHeadline`, `contrastSubcopy` ≥ 4.5:1 in every pass, on the worst of 8 frames across the period, measured inside the text's line boxes with the copy hidden;
- `mobilePosterOnly`, `reducedMotionPosterOnly`, `noWebGLPosterOnly`: no canvas or video in those states;
- frame time (median, p95) from the scene's own rAF loop over 3 s, and the WebGL renderer string, so you know a real GPU drew it.

Measured on 2026-11-06 (headless Chromium, `ANGLE Metal Renderer: Apple M5 Pro`, Blender 5.2.2), all checks passing:

| Fixture | Engine | Worst headline contrast (gpu / phone / reduced / no-GL) | Frame ms (median / p95) |
|---|---|---|---|
| karrot | three | 14.08 / 15.11 / 14.06 / 14.06 | 8.3 / 9.1 |
| karrot | blender | 11.67 / 15.11 / 13.31 / 11.68 | video |

Blender timings on the same machine: Cycles poster 1920×1080 at 128 samples + denoise 11–16 s (Metal GPU); EEVEE loop 192 frames at 1280px in 56 s.

## 6. Don't

- Don't use a color that isn't a DESIGN.md token, and never a state color as the brand object.
- Don't put objects behind the copy, and don't rescue a failed contrast with a translucent scrim over the scene. Move the camera target or the cluster instead.
- Don't fade the headline in or wait for the canvas to show it.
- Don't make the motion bigger than §3. A hero that moves a lot reads as a screensaver and costs battery.
- Don't run Blender through an MCP server for this. The CLI branch is reproducible; an interactive session with arbitrary Python is not.
- Don't load three.js on phones or under reduced motion. The poster is the design there, not a fallback.

## 7. Attribution

Structure from `omd-shader-hero` (token readers, poster under every canvas, background on `html`, first-frame copy, reduced motion as a state, the real-GPU verify loop), which itself comes from the owner's tf-shaders experiment. Market context and gaps: `docs/research/2026-11-06-skill-trends.md` §4. External references and their licenses: `docs/research/2026-11-06-3d-shader-references.md`.
