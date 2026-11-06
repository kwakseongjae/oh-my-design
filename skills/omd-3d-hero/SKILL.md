---
name: omd-3d-hero
description: "A rendered 3D hero built from the project's DESIGN.md: a soft-lit studio set (cyclorama, contact shadows, ambient occlusion) with a floating pile of brand-colored objects whose shapes follow the radius tokens, and the headline in real DOM text on clean backdrop. On desktop the pile is live: the cursor pushes it, a click scatters it, and it re-forms; a hard plane keeps every object out of the copy column, so contrast holds through any interaction. setSpec() switches brands (light/dark, or one DESIGN.md to another) with an animated morph. One scene spec, two engines: three.js in the browser (default, nothing to install) or headless Blender (Cycles poster + EEVEE loop video) from the same settled poses. Poster first: the still is the first paint, the phone, the reduced-motion and the no-WebGL state; motion is an enhancement. Reads Core v2 tokens and Google-compatible frontmatter, refuses to invent colors or shapes, and verifies five paths on a real GPU, including a pointer sweep that measures headline contrast and object clearance on every sampled frame. Use for a launch page, product hero, campaign or showcase first screen that should look rendered, not drawn. Triggers: '3D 히어로', '블렌더 느낌 배경', '3D 배경 만들어줘', 'three.js 히어로', '렌더 느낌 첫 화면', '클레이 렌더 배경', 'Blender style hero', '3D hero from DESIGN.md', 'three.js background', 'studio render hero', '3Dヒーロー', 'Blender風の背景', '3D 主視覺'. Two flat brand inks instead of light and depth → omd-shader-hero. A CJK headline effect → omd-cjk-type-shader. Product renders from a parts list are out of scope. No DESIGN.md → omd-init first."
argument-hint: "<DESIGN.md path> [--engine three|blender] [--scheme light|dark] — <headline + one line of sub copy>"
user-invocable: true
---

# omd-3d-hero — a rendered first screen, from DESIGN.md

Most "3D hero" output is a floating torus on a purple gradient. This skill does one thing instead: a **studio set** lit like a Blender clay render — a seamless cyclorama, soft key light, contact shadows, ambient occlusion — with a floating pile of objects in the brand's own colors, shaped by the brand's own radius tokens (pill buttons → capsules and spheres, 16px corners → rounded cubes) and seeded by the brand color, so every DESIGN.md gets its own arrangement. On desktop the pile is alive: it drifts, the cursor pushes through it, a click scatters it and it gathers again, and `setSpec()` morphs it into another brand. The headline stays real text on clean backdrop to the left; no object can cross into that column, and contrast is measured on the worst frame, including during interaction.

**One spec, two engines.** `scripts/spec.mjs` turns DESIGN.md into a scene spec. The same spec drives:

| Branch | When | What it ships | Cost |
|---|---|---|---|
| `three` (default) | always available | poster (baked from the live scene) + the live, interactive scene on desktop | three@0.186.1 + addons + scene: ~229 KiB gzip from the CDN, ~150 KiB bundled; 8.3 ms median frame with AO on Apple M5 Pro (upper bound) |
| `blender` | Blender ≥ 4.2 on the machine (`scripts/blender.mjs` finds it) | Cycles poster + an 8 s EEVEE loop (`loop.webm` / `loop.mp4`) of the same pile, gently bobbing | no runtime JS for the scene; video 71–208 KiB at 1280px |

Both branches use the same HTML template, the same poster rule and the same verify script. Interaction (pointer, scatter, brand switch) is three.js only; the Blender branch renders the same settled pile, so its poster matches the three.js poster object for object. The Blender branch runs Blender **headless from the CLI** (`blender -b -P`), never through an MCP server: no live session, no model-written Python executed inside Blender.

Working files: [`examples/hero.html`](./examples/hero.html) (template), [`engines/three/scene.js`](./engines/three/scene.js) + [`engines/three/pile.js`](./engines/three/pile.js) (the simulation, also run by `spec.mjs` in Node), [`engines/blender/scene.py`](./engines/blender/scene.py), [`scripts/spec.mjs`](./scripts/spec.mjs), [`scripts/blender.mjs`](./scripts/blender.mjs), [`scripts/verify.mjs`](./scripts/verify.mjs).

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
   - **shape**: `pill` if a `full`/`pill`/`circle` radius ≥ 999 exists (capsules, spheres), `square` if every radius ≤ 2px (boxes), else `rounded` (rounded cubes, tall blocks, spheres) with bevel = max radius / 64 (16px → 0.25);
   - **glass**: clear glass tinted by the primary color through its depth (absorption, not paint), one per size tier;
   - **pile**: 28 bodies in three size tiers, materials from fixed per-tier lists (the brand color dominates), seeded by the primary hex, then **settled** for 10 s in Node by `engines/three/pile.js`. The settled poses go into the spec: the poster, the first live frame and the Blender render all start from them;
   - **text**: the ink with the best contrast on the backdrop token; **CTA label**: DESIGN.md's own `on-primary` if it reaches 3:1 at 19px bold (WCAG large text), else the best of white / text / black. Accessibility wins over brand match.
2. **Write the page.** Copy `examples/hero.html` next to `scene.js`, then fill it:
   ```bash
   node <skill>/scripts/spec.mjs DESIGN.md --write path/to/hero.html --poster poster.webp
   ```
   That rewrites `#hero-vars` (`--hero-bg`, `--hero-text`, `--hero-brand`, `--hero-on-brand`, `--hero-radius`, `--hero-poster`) and the `#hero-spec` JSON. Set `data-engine="three"` or `"video"` on `.hero`, and `data-scene-src` to where `scene.js` lives; `pile.js` sits in the same folder.
3. **Copy is real.** Headline + one sentence + one CTA, in the user's words. Never invent metrics, customers or investors. Korean display type follows `/hangul`: `keep-all` + `overflow-wrap: anywhere`, line-height 1.3, tracking -0.02em, `text-wrap: balance`, `font-synthesis: none`.
4. **Make the poster.**
   - three: `node <skill>/scripts/verify.mjs path/to/hero.html --bake poster.webp` renders the live scene at t = 0 on the GPU, 1920×1080, and encodes WebP in the browser.
   - blender: `node <skill>/scripts/blender.mjs spec.json out/ --loop`, then `node <skill>/scripts/verify.mjs --encode out/poster.png out/poster.webp`. Put `loop.webm`, `loop.mp4` and `poster.webp` next to the page; `data-video-src` is the path without extension.
5. **Verify on a real GPU** (§5) and look at the frames at full size.

## 3. The scene

One archetype for now, `studio` with the `pile-right` composition:
- **Cyclorama**: floor → quarter-circle cove (r 2.5) → wall, one profile shared by both engines, in the backdrop token (roughness 0.82).
- **The pile**: 28 objects held by a spring toward one point near 70% of the frame width, colliding as capsules (a sphere is a capsule with no length, a rounded cube is approximated by a sphere). Fixed 120 Hz step, seeded, no physics library: `pile.js` is ~5 KiB gzip and runs the same in Node and the browser.
- **Hard planes**, applied after every collision pass: the floor, the back wall, a ceiling, a front limit (nothing comes at the lens), the right frame edge, and the **copy guard**: the plane through the camera that projects to the screen's vertical center line. A body wholly on its right side projects wholly right of that line, so no push, scatter or brand switch can cover the headline. The horizontal view is held at 16:9 framing on narrower boxes, so the guard holds there too.
- **Light**: a large soft key from the upper left (Blender area light 6 m; three `DirectionalLight` + `VSMShadowMap` radius 14), a weaker rim from behind right (a sun in Blender: an area light that close to the wall draws a hard-edged wedge across it), and an environment fill (Blender world = backdrop color at 0.3; three `RoomEnvironment` at 0.3). three adds **GTAO** (ambient occlusion) where objects nearly touch; Cycles gets it from path tracing.
- **Color**: Khronos PBR Neutral in both engines (`NeutralToneMapping`, applied by `OutputPass` when the composer is on / view transform "Khronos PBR Neutral"). It keeps base colors close to the tokens; AgX and Filmic desaturate brand colors.

**Motion (three.js)**:
- At rest the attraction point drifts on an 8 s figure (±0.22 / 0.1 / 0.18), so the pile churns slowly. About 0.7 s after going live the pile takes one soft breath outward, so it reads as alive before anyone touches it. It starts from the poster pose, so the poster → canvas swap is invisible.
- **Pointer**: a capsule along the view ray through the pile's depth (radius 0.55) pushes objects; the camera leans toward the pointer (±0.22 / 0.12). **Click** on the pile: an outward kick (4.5 m/s, 3 m reach), and the spring gathers it again. Touch is ignored (phones get the poster).
- **`api.setSpec(nextSpec)`**: each object shrinks (140 ms), takes the next spec's shape and material, and pops back with a damped spring (500 ms), staggered 22 ms apart; the backdrop eases over 600 ms. Collision radii scale with the objects, so the pile contracts and re-forms on its own. Use it for a light/dark switch or a gallery of DESIGN.md files; the page updates its own CSS variables and copy. Both specs must have the same body count (every spec from `spec.mjs` has 28).

**Motion (Blender loop)**: each body bobs ±0.05 and rocks ±0.12 rad around the vertical on one 8 s period with its own phase, starting exactly at the settled pose; the camera sways 0.12. Seamless loop, no simulation.

Parameters worth changing in `spec.json`: `pile.spring` (higher = tighter pile), `pile.damping`, `pile.orbit.amp` (0 = still at rest), `pile.pointer.r`, `exposure`, `lights.world`, `quality.ao`. Keep `pile.planes`: removing the copy guard voids the contrast guarantee.

## 4. Fallback and budget

Poster first, by design:
- The poster is a CSS background on `.hero`, the first paint. The canvas or video sits under the copy at `opacity: 0` and fades in over 600 ms only after it has drawn a frame (`data-live`). Measured: poster at 181 ms, live scene at 545 ms (three, karrot fixture, with reference workers sharing the machine).
- **Phones (≤ 720px), `prefers-reduced-motion: reduce` and no WebGL2 get only the poster**: no three.js download, no video. On phones the poster sits at the bottom (`auto 58%`) under the copy.
- three.js loads with a dynamic `import()` after the poster; a failed import leaves the poster and logs one warning.
- The canvas pauses offscreen (IntersectionObserver) and in hidden tabs. Pixel ratio is capped at 2.
- **A pause button** (bottom right, 44px target) appears once the scene or video is live. WCAG 2.2.2: motion that runs longer than 5 s needs a way to stop it. Pause stops the simulation itself, so the pointer and clicks move nothing while paused.
- **Quality ladder** (frame budget pattern from taste-skill, MIT): after 40 warm-up frames, every 60 frames are averaged. Over 20 ms (under 50 fps): first the AO composer goes (the scene renders straight to the antialiased canvas); still over 20 ms, the pixel ratio drops by 0.75× down to 1; at 1 and still over 33.3 ms (under 30 fps) the scene stops and the page returns to the poster.
- **Failures return to the poster**: a lost WebGL context (`webglcontextlost`) or a shader that fails to compile (`renderer.debug.onShaderError`) removes `data-live`, records the reason in `data-fallback`, and frees the GPU resources.

Budget (three branch), measured 2026-11-06: three@0.186.1 core (190 KiB gzip over jsDelivr's minified files; the import map remaps `three.module`'s relative `three.core.js` import to `three.core.min.js`) + 14 addon modules for geometry, environment and the AO composer (27 KiB) + `scene.js` and `pile.js` (12 KiB) = **~229 KiB gzip** from the CDN, **~150 KiB gzip** bundled and tree-shaken (esbuild). That is twenty times `omd-shader-hero`'s 7 KiB. It is acceptable only because nothing waits for it. Measure your own bundle; never put three.js on the critical path. `quality.ao: false` in the spec skips the composer at runtime (the addons still load unless you bundle).

Version notes, checked against the 0.186.1 package: `PCFSoftShadowMap` is removed (the renderer warns and falls back), so use `VSMShadowMap` + `shadow.radius`; `CapsuleGeometry(radius, height, capSegments, radialSegments, heightSegments)`; `NeutralToneMapping` exists. Pin an exact version at least two weeks old.

## 5. Verify on a real GPU

```bash
npm i -D playwright-core && npx playwright-core install chromium
node <skill>/scripts/verify.mjs path/to/hero.html ./hero-verify
```

A local file is served over http automatically (ES modules don't load from `file://`). Five passes: desktop GPU 1440×900, phone 390×844 @2x, reduced motion, no WebGL, shader compile failure. Checks:
- `liveOnDesktop`, `animates`: the canvas or video is on screen and moves;
- `posterBeforeLive`: the page's own clock shows the poster painted before the live layer;
- `headlineVisibleAtLoad`: the headline is at full opacity on load;
- `contrastHeadline`, `contrastSubcopy` ≥ 4.5:1 in every pass, on the worst of 8 frames across the period (three: the simulation re-run from the settled pose to each frozen time, deterministic), measured inside the text's line boxes with the copy hidden;
- `mobilePosterOnly`, `reducedMotionPosterOnly`, `noWebGLPosterOnly`: no canvas or video in those states;
- `shaderFailPosterOnly`: a fifth pass breaks every `shaderSource` call (context present, compile fails) and expects `data-fallback="shader-error"` and no live layer. "No WebGL" and "WebGL that fails" are different paths;
- `pauseStopsMotion`: the pause button is visible on the live pass and, after pressing it, two frames are identical even though the pointer swept across the pile and clicked it in between;
- `pointerKeepsCopyClear` (three): an interaction sweep on the real clock — the pointer enters from the right, drags through the pile and on into the copy column, clicks the pile, then wanders over the copy. On every move the leftmost screen x any object reaches is read from the scene (`api.leftmost()`) and must stay ≥ 8 px right of the headline's line boxes; headline contrast is measured on every sixth frame of the sweep and counts toward `contrastHeadline`;
- frame time (median, p95) from the scene's own rAF loop over 3 s, and the WebGL renderer string, so you know a real GPU drew it.

Measured on 2026-11-06 (headless Chromium, `ANGLE Metal Renderer: Apple M5 Pro`, Blender 5.2.2; four reference workers' Chrome sessions were running on the same GPU, so frame times are an upper bound). All five passes and every check passed for all six:

| Fixture | Engine | Worst headline contrast (gpu / phone / reduced / no-GL / shader-fail) | Pointer sweep: nearest object / headline edge | Frame ms (median / p95), AO kept | Poster → live |
|---|---|---|---|---|---|
| toss | three | 13.61 / 15.02 / 13.61 / 13.61 / 13.61 | 715 px / 523 px | 8.3 / 9.5, AO on | 211 → 1062 ms |
| toss | blender | 10.28 / 15.02 / 11.99 / 10.28 / 10.28 | — | video | 172 → 273 ms |
| karrot | three | 13.45 / 15.11 / 13.55 / 13.55 / 13.55 | 717 px / 523 px | 8.3 / 9.2, AO on | 181 → 545 ms |
| karrot | blender | 10.49 / 15.11 / 12.56 / 10.49 / 10.49 | — | video | 149 → 234 ms |
| baemin | three | 13.09 / 14.45 / 13.03 / 13.03 / 13.03 | 717 px / 523 px | 8.3 / 9.1, AO on | 230 → 759 ms |
| baemin | blender | 9.88 / 14.45 / 11.74 / 9.88 / 9.88 | — | video | 137 → 220 ms |

Blender timings on the same machine: Cycles poster 1920×1080 at 128 samples + denoise 20–35 s (Metal GPU); EEVEE loop 192 frames at 1280px in 100–122 s.

## 6. Don't

- Don't use a color that isn't a DESIGN.md token, and never a state color as the brand object.
- Don't put objects behind the copy, and don't remove the copy guard plane to let the pile spread. Don't rescue a failed contrast with a translucent scrim over the scene; move the pile center or the camera instead.
- Don't fade the headline in or wait for the canvas to show it.
- Don't make the idle motion bigger than §3. The pile is lively when touched; at rest it should only drift, or it reads as a screensaver and costs battery.
- Don't add a physics library for this. Twenty-eight capsules need ~5 KiB of code; a WASM engine is megabytes and makes the poster pose depend on its version.
- Don't run Blender through an MCP server for this. The CLI branch is reproducible; an interactive session with arbitrary Python is not.
- Don't load three.js on phones or under reduced motion. The poster is the design there, not a fallback.

## 7. Attribution

Structure from `omd-shader-hero` (token readers, poster under every canvas, background on `html`, first-frame copy, reduced motion as a state, the real-GPU verify loop), which itself comes from the owner's tf-shaders experiment. Market context and gaps: `docs/research/2026-11-06-skill-trends.md` §4. External references and their licenses: `docs/research/2026-11-06-3d-shader-references.md`.

Patterns taken (numbers and structure only, no code copied):
- The cursor-pushed floating pile is a common WebGL landing pattern (Lusion's and pmndrs' react-three-fiber demos are the best-known). The simulation here is written for this skill: capsule contacts from Ericson's closest-points-between-segments (*Real-Time Collision Detection*, 5.1.9), impulse with restitution and friction, hard planes, a fixed step.
- **Leonxlnx/taste-skill** 2.5 (MIT): the frame-budget ladder (50 fps → lower resolution, 30 fps → still), the forced shader-compile-failure check, the pause control for loops over 5 s.
- **MengTo/Skills** `webgl-landing-steering` (MIT): poster before WebGL, DPR cap, context-loss handling.
- **CloudAI-X/threejs-skills** (MIT) and three.js `llms-full.txt` (MIT): the outdated-API list (`PCFSoftShadowMap`, `Clock`, `examples/jsm`), `WebGLRenderer` as the default renderer, `setAnimationLoop`.
- **ahujasid/mcp-for-blender** (MIT): bpy render settings only; the MCP server itself is not used.
