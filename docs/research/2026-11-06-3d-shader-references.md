# 3D·셰이더 레퍼런스 조사: 라이선스 먼저 (2026-11-06)

대상 작업은 두 가지다. (a) `omd-3d-hero`: 장면 스펙 JSON 하나에서 three.js(브라우저, 기본)와 Blender(`blender -b -P scene.py`, 로컬 5.2.2) 두 엔진으로 갈라지고, 포스터가 먼저 나오며, 헤드라인 대비를 최악 프레임에서 잰다. (b) 기존 셰이더 스킬 두 개의 업그레이드: `skills/omd-shader-hero`(두 잉크, Paper `ditheringFragmentShader`, knockout)와 `skills/omd-cjk-type-shader`(먹 번짐, 다크 바탕 모드 추가).

배경: `docs/research/2026-11-06-skill-trends.md` §4, `docs/SKILL_3D_HERO_DESIGN_2026-11-06.md`.

읽은 방법: GitHub 라이선스 API(`gh api repos/<o>/<r>/license`)와 LICENSE 본문, npm 메타데이터와 tarball, 원본 파일(raw.githubusercontent.com). Blender 항목은 로컬 5.2.2에서 직접 돌려 확인했다. 모든 항목을 읽은 날은 2026-11-06이다.

---

## 1. 한 줄 결론

여덟 곳 모두 코드 라이선스는 문제없다(MIT 6, Apache-2.0 1, tf-shaders는 오너 본인 것). 그래도 그대로 옮길 코드는 거의 없다. 엔진 코드는 three.js **r187** `WebGLRenderer`(llms-full.txt가 정한 기본)와 Blender 5.2.2 `BLENDER_EEVEE`/`CYCLES` + `AgX`로 새로 쓴다. taste-skill에서는 숫자(포스터 굽기, 프레임 적응, 실패 경로 검사, 컨텍스트 상한)만 가져온다. Paper는 0.0.82로 올리되, 엄격한 "두 잉크, 혼색 없음"을 지키는 셰이더는 `dithering`과 조건부 `image-dithering` 둘뿐이다.

---

## 2. 라이선스 표

| 레퍼런스 | SPDX | 코드 복사 | 출처 | 읽은 날 |
|---|---|---|---|---|
| Leonxlnx/taste-skill (2.5.0) | MIT (© 2026 Leonxlnx) | **patterns-only**(라이선스상 가능하지만 엔진이 다르다. 아래 3-1). 번들 사진(Unsplash, Wikimedia Commons)과 브랜드 아이콘(Gil Barbara's logos, Simple Icons)은 각자 라이선스라 복사 금지 | https://github.com/Leonxlnx/taste-skill/blob/main/LICENSE | 2026-11-06 |
| MengTo/Skills | MIT (© 2026 Meng To) | SKILL.md 본문·레시피는 y. **`agent-skills/web-design/webgl-3d-object/demo/*`는 n**: `demo/source.json`이 밝히듯 Neuform의 제3자 페이지("PulsoApps | Tu app lista en 5 días.")를 동기화한 것이라 MengTo의 MIT가 덮지 않는다 | https://github.com/MengTo/Skills/blob/main/LICENSE | 2026-11-06 |
| CloudAI-X/threejs-skills | MIT (© 2026 CloudAI-X) | y. 다만 r186 기준이라 **patterns-only**(실수 목록을 r187 원본과 대조해 쓴다) | https://github.com/CloudAI-X/threejs-skills/blob/main/LICENSE | 2026-11-06 |
| three.js (llms.txt, llms-full.txt, r187) | MIT | y(라이브러리로 import map에서 쓴다. 벤더링하면 LICENSE 동봉) | https://threejs.org/llms.txt, https://threejs.org/docs/llms-full.txt, https://github.com/mrdoob/three.js/blob/dev/LICENSE | 2026-11-06 |
| @paper-design/shaders 0.0.82 | Apache-2.0 (+ NOTICE "Paper Shaders, Copyright 2026 Paper") | y. 벤더링하면 NOTICE 동봉(지금처럼 CDN 고정 import면 불필요) | npm tarball `package/LICENSE`, `package/NOTICE`; https://github.com/paper-design/shaders | 2026-11-06 |
| ahujasid/mcp-for-blender | MIT (© 2025 Siddharth Ahuja). 별도 `TERMS_AND_CONDITIONS.md`는 텔레메트리·개인정보 고지라 코드 라이선스를 바꾸지 않는다 | y. MCP는 안 쓰므로 **bpy 패턴만** | https://github.com/ahujasid/mcp-for-blender/blob/main/LICENSE | 2026-11-06 |
| gkjohnson/three-gpu-pathtracer 0.0.28 | MIT (© 2021 Garrett Johnson) | y(npm 의존성으로) | https://github.com/gkjohnson/three-gpu-pathtracer/blob/main/LICENSE | 2026-11-06 |
| tf-shaders (로컬, 오너 실험) | LICENSE 파일 없음. 오너 본인 작업 | 오너 소유. shader-hero·cjk-type-shader가 이미 출처를 밝히고 재사용 중. 공개 레포로 옮길 때만 오너 확인 | `/Users/kwakseongjae/Desktop/projects/tf-shaders` | 2026-11-06 |

---

## 3. 가져올 패턴

### 3-1. Leonxlnx/taste-skill 2.5.0

먼저 짚을 것: `assets/objects/product-render`는 **three.js가 아니다.** `_print-core/print3d.js`(103 KB)의 SDF 레이마처가 부품 JSON을 셰이더 안에서 그린다. 우리 장면 스펙은 같은 JSON에서 `scene.py`도 뽑아야 하므로 이 엔진은 맞지 않는다. 라이선스 때문이 아니라 설계 때문에 패턴만 가져온다.

범위 자르기(겹치지 않게): taste는 `software`·`tech`·`gaming` 페이지에서만 WebGL을 켜고, 3D는 사진 없는 **물리 제품**만 그린다(`product-render/README.md` "Use it for a product without photographs"). 브랜드 토큰에서 재질을 끌어오지 않고, 공간·추상 장면이 없고, 한국어 헤드라인 처리가 없다. `omd-3d-hero`는 이 세 빈칸으로 간다.

**포스터 굽기** (`assets/objects/product-render/make-posters.mjs`, `make-posters.html`)
- 브라우저를 열기 전에 Node에서 스펙을 빌드해 검사한다(`--check`): 모르는 부품·재질, 뷰가 가리키는 없는 부품, 부품 수 초과, **GPU가 거부하는 GLSL ES 예약어**(`glslProblems`). 실패면 exit 1. → 우리도 `scene.json` 검사를 브라우저·Blender 전에 돈다.
- 굽기는 **소프트웨어 렌더**로 한다: `--headless=new --disable-gpu --use-angle=swiftshader --enable-unsafe-swiftshader --window-size=900,900`, 자기 프로필, 자기 PID로 종료, 포트 5905(+4), 3000번 금지. 결정적이라 기계마다 같은 컷이 나온다. → 굽기는 결정성, 검증(`verify.mjs`)은 실제 GPU. 둘을 나눈다.
- 스틸은 `config` 덮어쓰기로 한 장을 크게: `{ maxCanvasPx: 4e6, fineTexels: 4e6, adapt: false }`. 긴 변 `px` 기본 1100.
- 산출물: `stills/<id>-<variant>-<colour>[-dark].webp`(투명, 제품+그림자로 크롭, `toDataURL('image/webp', 0.92)`)와 `-half.webp`, 라이브 렌더의 대체 PNG, 그리고 **매니페스트** `<id>.stills.json`(무엇을 만들었고 제품 박스가 어디 있는지). 변형마다 다 만들자마자 기록해서 `--timeout`(기본 30분)에 끊겨도 앞의 것은 남는다. 색 변형은 다시 렌더하지 않고 강조 부품만 다시 칠한다.
- CPU 비용 실측(README): 60–90 부품이면 변형 하나에 1–4분, 클로즈업 2–3 MP는 2–9분.
- 바탕 두 벌을 굽는다: `light {bg:'#f2f1ed', surface:'#e8e7e2', ink:'#151515'}`, `dark {bg:'#121314', surface:'#1b1c1e', ink:'#f1f0ec'}`. → 우리 포스터는 토큰에서 온 바탕 하나만 굽는다(지어낸 회색 금지).

**렌더 마감 수치** (`_print-core/print3d.js`, 수치만 참고)
- 톤 매핑: `filmic(x) = clamp((x*(2.51x+0.03))/(x*(2.43x+0.59)+0.14))`(L369, Narkowicz의 ACES 근사) + γ2.2(L367–368), 노출 `u_expo`. three의 `ACESFilmicToneMapping`과 같은 계열이다.
- 키 라이트 색 `(1.0, 0.965, 0.92)` × 2.0(밝은 바탕)–2.5(어두운 바탕), 필 `(0.88, 0.93, 1.0)` × 0.5/0.2(L502–530).
- 소프트 섀도: SDF 페넘브라 `k` = 오브젝트 14, 바닥 4(바닥이 더 부드럽다, L396·L609). 밝은 바탕에서는 그림자 안에도 키 라이트 16%를 남긴다("큰 소프트박스 아래처럼").
- AO: 5탭, reach 0.07(오브젝트), `occ = mix(mix(0.45, 0.25, dark), 1.0, ao)` → **주름은 어두워지되 검정이 되지 않는다**(L409–418, L511).
- 가장자리 림: `pow(1-nv, 4) * mix(0.03, 0.22, dark)`. 어두운 바탕에서는 림이 윤곽선 역할을 한다.
- 그레인: CSS 1px 크기의 정지 IGN 노이즈, 진폭 0.04(L691). 그라디언트 밴딩도 막는다.
- **어두운 바탕 규칙**(L13–14, L443–447): "on dark paper the ink is the light". 톤을 뒤집고(`c = u_dark > 0.5 ? tone : 1.0 - tone`), 앰비언트를 줄이고, 림을 키운다. → (b) 먹 번짐 다크 모드의 근거 패턴이다(6장 끝 참고).

**프레임 예산과 적응** (`print3d.js` L889, L1033, L1320–1322, L1570–1583)
- `config = { maxLive: 2, maxCanvasPx: 1.5e6, fineTexels: 1.2e6, idleMs: 1500, adapt: true }`.
- 텍셀 예산: 움직이는 동안 최대 480,000(오브젝트 기본), 최소 40,000, 큰 프레임은 ×0.5625, 거친 포인터(`(pointer: coarse)`)는 ×0.7. 멈춘 컷은 최대 1.2M 텍셀로 한 번 더 선명하게 그린다.
- `adapt(dt)`: 처음 40프레임은 버리고, 60프레임 평균을 낸다. 평균이 20ms(50fps)를 넘으면 텍셀 ×0.75(9만까지) 또는 스텝 ×0.8(56까지). 그 바닥에서 33.3ms(30fps)를 넘으면 회전을 멈추고 정지 컷으로 간다. → `omd-3d-hero`의 실시간 경로에 그대로 쓸 수 있는 숫자다(DPR 낮추기 → 효과 끄기 → 포스터).

**컨텍스트 상한과 상태**
- 페이지 전체 WebGL 컨텍스트 상한 4(`window.__tpGlMax` 기본 4, `print3d.js` L890–896; `consistency.mjs`가 `peak > 4`를 경고). 제품 렌더는 **라이브 컨텍스트 하나**만 돈다. 둘째는 정지.
- 정지 컷은 한 번 그려 `<img>`로 남기고 컨텍스트를 해제한다. 화면 밖·숨은 탭도 해제.
- 폰(`max-width: 700px` 또는 거친 포인터)과 `prefers-reduced-motion`에서는 정지 컷 한 장, 컨텍스트 해제. 돌고 있는 것에는 오른쪽 아래 일시정지 버튼.
- 프레임 상태를 DOM에 노출한다: `data-product-state`(`image|still|live|poster`), `window.__tpProduct = { stills, images, live, freed }`. → 우리 `verify.mjs`가 읽을 상태 속성으로 같은 꼴을 쓴다.
- 실시간 회전은 페이지가 요청할 때만(`data-product-mode="live"`). 기본은 스틸.

**검사** (`scripts/consistency.mjs`, 885 KB)
- 폭 1440·1024·768·390(+820, 높이표 L3580: 1440×900, 1024×768, 820×1180, 768×1024, 390×844).
- **셰이더 실패 강제**(L3798–3806, L8539~): `addScriptToEvaluateOnNewDocument('window.__ccglFail = true')`로 `WebGL(2)RenderingContext.prototype.shaderSource`를 갈아 끼워 모든 셰이더를 컴파일 실패시킨다. 그다음 캔버스를 걷어낸 화면과 픽셀을 비교해, **스타일시트 바탕만 보이면(대체 화면 없음) FAIL**. 우리 `verify.mjs`는 `getContext` 스텁(WebGL 없음)만 한다. "컨텍스트는 있는데 컴파일 실패"는 다른 경로라 둘 다 돌려야 한다.
- 셰이더 린트: GLSL ES 3.00 예약어(`flat`, `smooth`, `sample`, `filter`, `input`, `output` …)를 이름으로 쓰면 FAIL. "CPU 렌더 Chrome은 실제 GPU가 거부하는 단어를 받아 준다."
- 대비: 평평한 바탕 위 본문 7:1, 캡션·라벨 4.5:1, 큰 글자 4.5/3(헤더 L64). 사진 위 글자는 `busy-ground`: 이웃 픽셀 평균 |dL*| 1.4, 휘도 5–95 백분위 폭 0.25(L3584).
- 루프: 보인 뒤 5초 넘게 움직이면 일시정지 버튼 필요. 모션 줄이기에서 1.5초 뒤에도 움직이면 FAIL.

**셰이더 바탕 키트** (`assets/effects/README.md`)
- 글 위치를 `calmX`/`calmY`(0–1)로 넘기면 효과가 그 자리를 조용하게 둔다. DPR 상한 1.75. 키트 자체는 라이브 컨텍스트 14개를 넘으면 화면 밖 것부터 해제(페이지 하우스 룰 4와 별개).
- **10/31에 "싸 보여서" 퇴출한 효과**: `riso-print`, `ink-bloom`, `liquid-chrome`, `metaballs`, `brushed-metal`, `paper-texture`, `terrazzo-speckle`, `marble-warp`, `pixel-mosaic`, `truchet-arcs`, `soft-particles`. 우리 shader-hero(리소 느낌)와 cjk-type-shader(먹 번짐, 한지)가 정확히 이 영역이다. 대가 판단은 측정과 실제 크기 확인으로만 하고, 데모를 낼 때 이 지점을 의식한다.

### 3-2. MengTo/Skills

경로: `agent-skills/web-design/{atmosphere-background,webgl-3d-object,webgl-landing-steering,threejs}/SKILL.md`.

- **`webgl-landing-steering`**: 레인 넷 중 하나만 고른다. A 은은한 깊이(전환 안전, SaaS), B 파티클·데이터, C 오브젝트 중심 3D, D 시네마틱 캠페인. 품질 관문: 헤드라인+CTA를 3초 안에 읽을 것, DPR `Math.min(devicePixelRatio, 1.5–2)`, "WebGL 전에 즉시 포스터", 모션 줄이기, **컨텍스트 손실 처리**, SPA에서 dispose. 프롬프트 템플릿의 "Implement fallback first, then enhance with WebGL." → `omd-3d-hero`는 대개 레인 A에 장면 유형(공간, 추상, 지형)을 얹은 꼴이다. 컨텍스트 손실(`webglcontextlost`) 처리는 우리 두 셰이더 스킬에도 아직 없다.
- **`webgl-3d-object`** 수치(출발점으로만): `PerspectiveCamera(38, …)` 위치 `(0, 0.15, 5.2)`; 키 `DirectionalLight(0xffffff, 2.15)` at `(3.4, 4.2, 4.8)`, 그림자 맵 1024; 앰비언트 0.38; 림 `DirectionalLight(rimColor, 0.82)` at `(-4.2, 1.2, -2.8)`(브랜드색); 바닥 `ShadowMaterial({ opacity: 0.18 })`; `ACESFilmicToneMapping`, 노출 1.05; `maxDpr` 1.75. 재질 기본값: 금속 `metalness 0.45–0.7 / roughness 0.25–0.45`, 세라믹 `0–0.15 / 0.38–0.62`, 발광 `emissiveIntensity 0.12–0.35`. 떠오름 Y 0.04–0.12. 모션 줄이기면 rAF 없이 한 프레임.
  - 단, 이 레시피는 r182부터 폐기된 `THREE.PCFSoftShadowMap`과 `requestAnimationFrame` 루프를 쓴다. 숫자만 쓰고 코드는 4장 API로 다시 쓴다.
- **`atmosphere-background`**: 어두운 남색·차콜 바탕, 빛 색은 **디자인의 primary에서**("Hardcoded cyan if the design clearly uses another primary color"는 피할 것), 오른쪽 아래·아래 가장자리에 초점 글로우, 느린 사인 드리프트. screen/additive 혼합이라 두 잉크 규칙과는 맞지 않는다. 3D 히어로의 "대기" 장면 유형 참고용.
- **`threejs`**: 일반론. 새로 얻을 것은 "무엇을 물을지"(장식인가 기능인가, 대상 기기, 에셋 형식·크기, 모션 줄이기) 정도다.

### 3-3. CloudAI-X/threejs-skills

r186(`three@0.186.1`) 기준으로 검증했다고 README에 적혀 있다. 지금 최신은 r187이다(4장). 4장에 옮긴 이름은 r187에서 다시 확인했다: 상수(`src/constants.js`), export(`src/Three.WebGPU.js`, `src/Three.Core.js`, 빌드된 `three@0.187.0/build/three.tsl.js`의 export 블록), `setEffects`(`src/renderers/WebGLRenderer.js`), 애드온 파일 존재(r187 트리), 패스 생성자(`FilmPass( intensity = 0.5, grayscale = false )`, `HalftonePass( params )`, `SMAAPass( )`). 아래 설명 문장(동작·순서·주의)은 CloudAI-X(r186) 기준이다.

- **낡은 API 목록**(각 SKILL.md "Common Mistakes"). 4장 표에 r187 근거와 함께 옮겼다. 핵심: `RGBELoader` → `HDRLoader`(r180), `Clock` → `Timer`(r183), `PostProcessing` → `RenderPipeline`(r183), `PCFSoftShadowMap` → `PCFShadowMap`, `requestAnimationFrame` → `renderer.setAnimationLoop`, `three/examples/jsm/` → `three/addons/`, `outputEncoding`/`sRGBEncoding` → `outputColorSpace`/`SRGBColorSpace`, `physicallyCorrectLights`/`useLegacyLights` 삭제(포인트·스팟은 칸델라, 수백 단위), `envMapIntensity` → `scene.environmentIntensity`, `renderAsync()` → `await renderer.init()` 후 `render()`(r181).
- **조명·그림자** (`skills/threejs-lighting/SKILL.md`): `PCFShadowMap`이 기본이고 이미 부드럽다. `VSMShadowMap`은 맵 자체를 흐리고 `shadow.blurSamples` 기본 8, 받는 메시가 모두 그림자를 드리운다. 방향광 튜닝 예: `mapSize 2048`, `normalBias 0.02`, `bias -0.0001`, `shadow.intensity 0.7`(필 라이트 없이 그림자를 옅게). **싼 접지 그림자**는 128px 캔버스 방사형 그라디언트(중심 알파 0.6) 평면, 실루엣을 따르려면 공식 `webgl_shadow_contact` 예제(`HorizontalBlurShader`/`VerticalBlurShader`). 환경광은 `RoomEnvironment` + `PMREMGenerator.fromScene(room, 0.04)`.
- **톤 매핑**(`skills/threejs-fundamentals/SKILL.md` L191): `ACESFilmicToneMapping`(또는 `AgXToneMapping`, `NeutralToneMapping`), 노출 1.0, `outputColorSpace`는 기본 `SRGBColorSpace`이니 건드리지 말 것. 어느 것을 추천하는지는 정하지 않는다.
- **후처리**(`skills/threejs-postprocessing/SKILL.md`): `EffectComposer`의 버퍼는 선형이고 `OutputPass`가 마지막에서 톤 매핑과 sRGB 변환을 한 번 한다. FXAA는 `OutputPass` 뒤, SMAA는 앞. 컴포저 없는 `renderer.setEffects([...])`는 `outputBufferType: THREE.HalfFloatType`이 필요하고 `OutputPass`를 넣지 않는다. 이 경로에서는 `FilmPass` 시간 유니폼이 NaN이 되어 그레인이 사라진다 → 그레인은 컴포저나 우리 셰이더로. WebGPU에서는 `RenderPipeline` + TSL `ao()`(GTAO, `pass(scene, camera, { samples: 0 })` 프리패스 필요, AO는 r 채널).
- **성능**: `await renderer.compileAsync(scene, camera)`로 첫 프레임 끊김을 줄인다. `renderer.info.render.calls`는 `render()` 뒤에 읽는다.

### 3-4. three.js llms.txt / llms-full.txt

4장에 정리했다. `llms.txt`(274 바이트)는 `llms-full.txt`를 가리키는 안내문일 뿐이다. 실제 지침은 `llms-full.txt`(378,970 바이트, Last-Modified 2026-11-02) 앞부분 85줄에 있다.

### 3-5. @paper-design/shaders

6장에 정리했다.

### 3-6. ahujasid/mcp-for-blender (bpy 패턴만)

렌더 설정을 대신 정해 주는 코드는 거의 없다. 대신 "어떤 Blender에서도 도는 bpy" 지침이 쓸 만하다.
- `src/blender_mcp/guides/bpy.md`
  - 열거형은 추측하지 말고 읽는다: `[i.identifier for i in bpy.types.RenderSettings.bl_rna.properties["engine"].enum_items]`.
  - `scene.render.engine`은 RNA가 다 알려 주지 않는 **동적 열거형**이다. 바꿔야 하면 `try/except TypeError`로 대입하고, 오류 메시지에 나오는 허용값 목록을 쓴다. 5장에서 우리 실행으로 확인했다.
  - 노드는 이름이 아니라 `type`으로 찾는다(이름은 현지화된다). `next(n for n in nodes if n.type == "BSDF_PRINCIPLED")`.
  - 소켓은 존재를 확인하고 쓴다: `node.inputs.get("Emission Color") or node.inputs.get("Emission")`(4.0 개명).
  - 5.0+에서 `material.use_nodes`는 늘 켜져 있다. 5.0에서 `Action.fcurves` 삭제 → `obj.keyframe_insert("location", frame=f)`와 `bpy_extras.anim_utils.action_get_channelbag_for_slot(...)`.
  - 연산자보다 `bpy.data` API(문맥이 필요 없고 빠르다).
- `src/blender_mcp/guides/scene.md`: 제품은 3점 조명(키, 낮은 필, 뒤쪽 림), 실내는 창에 에어리어 라이트(Cycles 포털) + 실제 조명기구(발광). "하얗게 날아가거나 새까만 영역은 노출이 아니라 **광량부터** 고친다." 미리보기는 샘플을 낮게.
- `src/blender_mcp/blender_scripts.py` L242–266: 렌더 결과를 저장할 때 `image_settings`의 `file_format`·`color_mode`·`color_depth`를 저장해 두고 PNG/RGBA/8로 바꾼 뒤 `save_render`, 끝나면 되돌린다. L431–435: Cycles는 오프스크린 뷰에 아무것도 그리지 않으니 뷰포트 캡처가 아니라 렌더 결과를 쓴다.
- `addon.py` L2708–2771 `export_scene`: `bpy.ops.export_scene.gltf(filepath=…, export_format='GLB', use_selection=…)`. three 경로로 메시를 넘길 때 참고.

### 3-7. gkjohnson/three-gpu-pathtracer

- 0.0.28(2026-11-02)은 `peerDependencies: three >=0.187.0, three-mesh-bvh >=0.9.17`이다. **WebGPU 전용**: `WebGPUPathTracer`(`three-gpu-pathtracer/webgpu`), `WebGLPathTracer`는 0.0.25에서 폐기 예고(CHANGELOG). 지원 재질은 `MeshStandardMaterial`/`MeshPhysicalMaterial`뿐, 방향·점·스팟 광은 MIS에서만.
- three.js r187 공식 예제 `examples/webgpu_renderer_pathtracer.html`이 이를 쓴다(import map은 `three-gpu-pathtracer@0.0.26`, `three-mesh-bvh@0.9.15` 고정).
- 포스터 굽기에 쓸 API: `maxSamples`(기본 0 = 무한), `complete` 이벤트·플래그(0.0.28), `progress` 이벤트(`building`/`compiling`/`rendering`/`denoising`), `frameBudget` 기본 250000, `OIDNDenoiser`(`oidn-webgpu` 0.6.0), `BlurredEnvMapGenerator`.
- **한 줄 판단**: r187과 맞으니 원리상 브라우저 안 포스터 베이커가 될 수 있다. 하지만 우리 검증 경로는 헤드리스 Chromium의 WebGL2(Metal)이고, 헤드리스에서 WebGPU로 굽는 것은 확인하지 않았다(tf-shaders는 headed Chrome + `--enable-unsafe-webgpu`로 돌렸다). 로컬에 Blender가 있으니 포스터는 Blender를 1순위, 패스트레이서는 "Blender 없는 사용자용 후보"로 두는 편이 안전하다. `[미검증]`

### 3-8. tf-shaders

7장에 정리했다.

---

## 4. three.js 현재 API 메모 (코드 작성용)

**버전**: r187. npm `three` 0.187.0(2026-10-30 08:09 UTC), GitHub 릴리스 `r187`(2026-10-30). `llms-full.txt`의 import map도 `three@0.187.0`으로 고정돼 있다. CloudAI-X는 r186 기준이다.

**import map** (llms-full.txt 원문 그대로)

```html
<!-- WebGLRenderer -->
<script type="importmap">
{ "imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@0.187.0/build/three.module.js",
    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.187.0/examples/jsm/"
} }
</script>

<!-- WebGPURenderer + TSL: llms-full 원문에 "three/webgpu" 키 한 줄을 더했다 -->
<script type="importmap">
{ "imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@0.187.0/build/three.webgpu.js",
    "three/webgpu": "https://cdn.jsdelivr.net/npm/three@0.187.0/build/three.webgpu.js",
    "three/tsl": "https://cdn.jsdelivr.net/npm/three@0.187.0/build/three.tsl.js",
    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.187.0/examples/jsm/"
} }
</script>
```

- llms-full의 WebGPU import map에는 `"three/webgpu"` 키가 없다. 그런데 같은 문서의 렌더러 선택 절은 `import * as THREE from 'three/webgpu'`로 쓴다. 원문 map 그대로면 이 지정자가 풀리지 않는다. r187 공식 예제 `examples/webgpu_renderer_pathtracer.html`의 map은 `"three"`와 `"three/webgpu"`를 둘 다 `three.webgpu.js`로 잇는다. 그래서 위 map에 그 키를 더했다.
- `three/examples/jsm/` 지정자는 쓰지 않는다. `build/three.min.js`는 r161에서 없어졌다.

**렌더러 선택** (llms-full.txt "Choosing Between WebGLRenderer and WebGPURenderer", 원문 요지)
- "**Use WebGLRenderer** (default, mature)": Maximum browser compatibility / Well-established / Most examples and tutorials use this. `import * as THREE from 'three'; new THREE.WebGLRenderer();`
- "**Use WebGPURenderer** when you need": Custom shaders/materials using TSL / Compute shaders / Advanced node-based materials. `import * as THREE from 'three/webgpu'; const renderer = new THREE.WebGPURenderer(); await renderer.init();`
- TSL을 쓸 때는 `MeshBasicNodeMaterial`, `MeshStandardNodeMaterial`, `MeshPhysicalNodeMaterial`, `LineBasicNodeMaterial`, `SpriteNodeMaterial`.
- 루프는 `renderer.setAnimationLoop( animate )`.
- 정정: skill-trends §4가 "three.js가 WebGPURenderer + TSL을 안내한다"고 적었지만, 1차 문서는 **WebGLRenderer를 기본**으로 두고 TSL·compute·노드 재질이 필요할 때만 WebGPU를 권한다. `omd-3d-hero`의 기본 경로는 `WebGLRenderer`가 맞다(검증 스크립트와 Paper도 WebGL2).
- llms-full 예제의 `renderer.setPixelRatio( window.devicePixelRatio )`(상한 없음), `AmbientLight( 0x404040 )`, `OrbitControls`는 데모 기본값이지 지침이 아니다. DPR은 1.5–2로 막는다.

**llms.txt가 말하지 않는 것**: 톤 매핑, 그림자 종류, AO, 후처리 이름은 llms-full.txt 지침부에 없다. 아래는 CloudAI-X에서 출발해 **r187 원본**(`src/constants.js`, `src/Three.WebGPU.js`, `src/Three.Core.js`, `src/renderers/WebGLRenderer.js`, `src/renderers/webgl/WebGLShadowMap.js`, `examples/` 트리, Migration Guide)으로 다시 확인한 것이다.

**상수** (`src/constants.js` @ r187, 이름 그대로)

| 묶음 | 이름 = 값 |
|---|---|
| 톤 매핑 | `NoToneMapping` 0 (WebGLRenderer 기본, `this.toneMapping = NoToneMapping` L278), `LinearToneMapping` 1, `ReinhardToneMapping` 2, `CineonToneMapping` 3, `ACESFilmicToneMapping` 4, `CustomToneMapping` 5, `AgXToneMapping` 6, `NeutralToneMapping` 7 ("Khronos 3D Commerce Group standard tone mapping"). 노출 `renderer.toneMappingExposure` 기본 1.0 |
| 그림자 | `BasicShadowMap` 0, `PCFShadowMap` 1(**기본**, `WebGLShadowMap.js` L89), `PCFSoftShadowMap` 2(폐기), `VSMShadowMap` 3 |
| 색 공간 | `SRGBColorSpace` `'srgb'`(출력 기본), `LinearSRGBColorSpace` `'srgb-linear'`, `NoColorSpace` `''`(노멀·거칠기·AO 등 데이터 맵) |
| 버퍼 | `HalfFloatType` 1016(`setEffects`용 `outputBufferType`) |

**`PCFSoftShadowMap` — 출처끼리 다르다(결론은 같다)**
- Migration Guide 181→182: "`PCFSoftShadowMap` with `WebGLRenderer` is now deprecated. Use `PCFShadowMap` which is now soft as well." 185→186: "`PCFSoftShadowMap` with `WebGPURenderer` has been removed."
- `src/constants.js` r187: `@deprecated since r186. Use PCFShadowMap instead.`
- `src/renderers/webgl/WebGLShadowMap.js` r187 L99–102: 경고 문구가 "PCFSoftShadowMap **has been removed**. Using PCFShadowMap instead."이고 타입을 `PCFShadowMap`으로 바꾼다.
- 실무 규칙: `renderer.shadowMap.type = THREE.PCFShadowMap`(기본이라 생략 가능), 더 부드럽게는 `shadow.radius` 또는 `VSMShadowMap`.

**후처리 이름과 경로** (r187 트리에서 파일 존재 확인)
- WebGLRenderer + 컴포저: `three/addons/postprocessing/EffectComposer.js`, `RenderPass.js`, `OutputPass.js`, `GTAOPass.js`, `SSAOPass.js`, `SAOPass.js`, `UnrealBloomPass.js`, `BokehPass.js`, `FilmPass.js`(`new FilmPass(intensity, grayscale)`), `FXAAPass.js`, `SMAAPass.js`(`new SMAAPass()`, r175부터 크기 인자 없음), `HalftonePass.js`(`new HalftonePass(params)`). 순서: `RenderPass` → 효과 → `OutputPass` → `FXAAPass`.
- WebGLRenderer 내장: `new THREE.WebGLRenderer({ antialias: true, outputBufferType: THREE.HalfFloatType })` + `renderer.setEffects([pass, …])`(WebGLRenderer.js L749–773; `UnsignedByteType`이면 오류, `OutputPass`를 넣으면 경고). r187에서 `needsDepthTexture` 지원 추가(#34858).
- WebGPURenderer: `THREE.RenderPipeline`(r183에 `PostProcessing`에서 개명; `PostProcessing`은 여전히 export되는 폐기 별칭, Three.WebGPU.js L15–17), `THREE.DirectRenderPipeline`(MSAA 제약이 문서화됨). TSL 함수 `pass`, `mrt`, `renderOutput`, `normalView`, `screenUV`, `builtinAOContext`, `time`은 `three/tsl`. 효과 노드는 `three/addons/tsl/display/BloomNode.js`(`bloom`), `GTAONode.js`(`ao`), `DepthOfFieldNode.js`(`dof`), `FXAANode.js`, `SMAANode.js`, `FilmNode.js`, `TRAANode.js`, `SSRNode.js`, `SSGINode.js`, `DenoiseNode.js`. `bloom()`은 빛만 돌려주니 장면 색에 더하고, `dof()`는 완성 이미지를 돌려준다.

**로더·환경·하늘** (`three/addons/...`): `loaders/HDRLoader.js`(`RGBELoader.js` 파일은 아직 있으나 폐기 별칭), `loaders/UltraHDRLoader.js`, `loaders/EXRLoader.js`, `loaders/GLTFLoader.js`, `loaders/KTX2Loader.js`, `loaders/DRACOLoader.js`, `environments/RoomEnvironment.js`, `objects/Sky.js`, `objects/SkyMesh.js`, `objects/GroundedSkybox.js`. HDR은 `hdr.mapping = THREE.EquirectangularReflectionMapping` 후 `scene.environment`/`scene.background`에 그대로(수동 PMREM 불필요), 세기는 `scene.environmentIntensity`.

**시간**: `THREE.Timer`(Three.Core.js L110). `const timer = new THREE.Timer(); timer.connect(document);` 프레임마다 `timer.update()` 후 `getDelta()`/`getElapsed()`. `Clock`(L109)은 r183부터 폐기.

**개명·폐기 연표** (Migration Guide 원문 기준)

| 판 | 바뀐 것 |
|---|---|
| r180 | `RGBELoader` → `HDRLoader`. `RGBMLoader` 삭제. `DepthOfFieldNode` 새 API |
| r181 | `WebGPURenderer.renderAsync()` 등 async 메서드 폐기 → `await renderer.init()` 후 동기 호출. `KTX2Loader.detectSupportAsync()` 폐기. TSL `PI2` → `TWO_PI`. GTAO는 r 채널만: `vec4( scenePassColor.rgb.mul( aoPass.r ), scenePassColor.a )`. `PassNode.setResolution()` → `setResolutionScale()`. PBR 간접 반사·에너지 보존 개선(거친 재질이 조금 밝아짐) |
| r182 | `PCFSoftShadowMap`(WebGL) 폐기. WebGPU `colorBufferType` → `outputBufferType` |
| r183 | `PostProcessing` → `RenderPipeline`. `Clock` 폐기 → `Timer`. `RoomEnvironment` 위치 변경(조명 결과가 달라짐). `Sky`/`SkyMesh`의 옛 감마 보정 제거. `MeshPostProcessingMaterial` 삭제. WebGPU에서 `WebGLCubeRenderTarget` → `CubeRenderTarget` |
| r184 | 배경·환경 맵 회전 방향 정렬. `FileLoader.load()` 반환값 없음 |
| r185 | WebGPU 프리멀티플라이드 알파 변경(블렌딩 문제 시 불투명 배경). `AnamorphicNode` 삭제. GTAO가 더 어둡고 넓어짐(`radius`, `scale` 낮출 것). TSL `directionToColor()` → `packNormalToRGB()` |
| r186 | `Object3D.dispose()` 추가. GTAO `distanceExponent`/`distanceFallOff` 효과 없음. `PCFSoftShadowMap`(WebGPU) 삭제. `Source` → `TextureSource`. `Sky`의 `up` 유니폼 삭제 |
| r187 | PMREM이 큐브 렌더 타깃 기반(`CubeUVReflectionMapping` 삭제, 재질이 약간 달라 보임). r177에서 폐기된 코드 제거. TSL 수학 함수 암묵 형변환. `MeshPhysicalMaterial.iridescenceThicknessRange` → `iridescenceThicknessMinimum`/`Maximum`. `ProxyNodeMaterial` → `NodeMaterialInstance`. TSL 톤 매핑의 **ACES Filmic 근사 분모 수정**(#35110) |

r186에 맞춰 잡은 노출·룩은 r187에서 조금 달라질 수 있다(PMREM 변경, WebGPU 경로의 ACES 수정). 포스터와 라이브 렌더가 같은 판에서 나오게 버전을 고정한다.

**두 엔진 톤 매핑 맞추기 (후보, 나란히 비교는 안 해 봤다)**

| 장면 스펙 값 | three r187 | Blender 5.2.2 `view_transform` | 판단 |
|---|---|---|---|
| `agx` | `THREE.AgXToneMapping` | `'AgX'`(5.2.2 기본), `look = 'None'` | 1순위 후보 |
| `neutral` | `THREE.NeutralToneMapping`(Khronos 3D Commerce) | `'Khronos PBR Neutral'` | 브랜드 색을 덜 바꾸는 후보. 토큰 색 보존이 중요하면 이쪽 |
| `aces` | `THREE.ACESFilmicToneMapping`(근사 곡선) | `'ACES 1.3'` / `'ACES 2.0'`(OCIO) | **맞지 않는다.** 같은 이름이라도 곡선이 다르다. 쓰지 않는다 |

검증 방법 제안: 같은 장면을 두 엔진으로 렌더해 토큰 색 패치의 ΔE와 헤드라인 영역 휘도를 비교한다. 측정 전까지 `[미검증]`.

---

## 5. Blender 5.x bpy 메모

**확인 환경**: Blender 5.2.2 LTS(hash d13f752e3b9c, 빌드 2026-09-15), macOS arm64, Apple M5 Pro. `Blender -b --factory-startup --python-exit-code 1 -P <script>`로 돌렸다. 스크립트는 세션 scratchpad에만 있고 커밋하지 않았다.

| 항목 | 값 (5.2.2 실측) | 근거 | 상태 |
|---|---|---|---|
| 엔진 식별자 | `'BLENDER_EEVEE'`(기본), `'CYCLES'`, `'BLENDER_WORKBENCH'` | 잘못된 값 대입 시 TypeError: `enum "BLENDER_EEVEE_NEXT" not found in ('BLENDER_EEVEE', 'BLENDER_WORKBENCH', 'CYCLES')` | 확인 |
| `BLENDER_EEVEE_NEXT` | 5.2.2에서 **거부** | 위 오류 | 확인 |
| 4.2–4.x에서 `BLENDER_EEVEE_NEXT` | mcp-for-blender `guides/bpy.md`의 주장 | 4.x 미설치 | 미검증 |
| 동적 열거형 함정 | `bl_rna.properties["engine"].enum_items` → `['BLENDER_EEVEE']`만, `view_transform` → `['NONE']`, `cycles.denoiser` → `[]`. **RNA 열거가 실제 값을 다 보여 주지 않는다.** 실제 목록은 엉터리 값을 대입했을 때의 TypeError 메시지에 나온다 | 우리 실행 출력. 기법 출처: mcp-for-blender `guides/bpy.md` | 확인 |
| EEVEE 샘플 | `scene.eevee.taa_render_samples` 기본 64, `taa_samples`(뷰포트) 16 | 실측 | 확인 |
| EEVEE 기타 속성 | `use_raytracing`, `ray_tracing_method`, `ray_tracing_options`, `use_shadows`, `shadow_ray_count`, `shadow_step_count`, `shadow_resolution_scale`, `shadow_pool_size`, `use_fast_gi`, `fast_gi_method`, `fast_gi_quality`, `fast_gi_distance`, `use_volumetric_shadows`, `volumetric_samples`, `clamp_surface_direct`, `clamp_surface_indirect`, `use_overscan`, `overscan_size`, `motion_blur_steps` | `scene.eevee.bl_rna.properties` | 확인(존재만) |
| Cycles 샘플 | `scene.cycles.samples` 기본 4096, `use_adaptive_sampling` True, `adaptive_threshold` 0.01, `adaptive_min_samples`, `time_limit`, `max_bounces`, `seed`, `use_light_tree`, `sample_clamp_direct`/`_indirect`, `blur_glossy` | 실측 | 확인 |
| Cycles 디노이즈 | `use_denoising` True, `denoiser` `'OPENIMAGEDENOISE'`, `denoising_use_gpu`, `denoising_quality`, `denoising_prefilter` | 실측(읽은 값) | 확인 |
| Cycles 장치 | `scene.cycles.device` 기본 `'CPU'`, 허용 `'CPU'`/`'GPU'`. Metal: `prefs = bpy.context.preferences.addons["cycles"].preferences; prefs.compute_device_type = "METAL"; prefs.get_devices(); for d in prefs.devices: d.use = True; scene.cycles.device = "GPU"` → 장치 목록에 `('Apple M5 Pro (GPU - 20 cores)', 'METAL', True)` | 실측 | 확인(macOS만) |
| 색 관리 기본 | `view_transform 'AgX'`, `look 'None'`, `exposure 0.0`, `gamma 1.0`, `display_device 'sRGB'` | 실측 | 확인 |
| `view_transform` 허용값 | `'Standard'`, `'ACES 1.3'`, `'ACES 2.0'`, `'Khronos PBR Neutral'`, `'AgX'`, `'Filmic'`, `'Filmic Log'`, `'False Color'`, `'Raw'` | TypeError 메시지 원문 | 확인 |
| `look` 허용값 | `'None'`, `'AgX - Punchy'`, `'AgX - Greyscale'`, `'AgX - Very High Contrast'`, `'AgX - High Contrast'`, `'AgX - Medium High Contrast'`, `'AgX - Base Contrast'`, `'AgX - Medium Low Contrast'`, `'AgX - Low Contrast'`, `'AgX - Very Low Contrast'`(AgX가 선택돼 있을 때) | TypeError 메시지 원문 | 확인 |
| `display_device` 허용값 | `'sRGB'`, `'Display P3'`, `'Rec.1886'`, `'Rec.2020'`, `'Rec.2100-PQ'`, `'Rec.2100-HLG'` | TypeError 메시지 원문 | 확인 |
| 출력 형식 | `image_settings.file_format` 기본 `'PNG'`, `color_mode 'RGBA'`, `color_depth '8'`, `quality 90`, `compression 15`. 허용: `'AVIF'`, `'JPEG'`, `'OPEN_EXR'`, `'PNG'`, `'WEBP'`, `'BMP'`, `'CINEON'`, `'DPX'`, `'IRIS'`, `'JPEG2000'`, `'HDR'`, `'TARGA'`, `'TARGA_RAW'`, `'TIFF'`, `'OPEN_EXR_MULTILAYER'`, `'FFMPEG'`. `media_type` 속성이 새로 있다 | 실측 | 확인 |
| WEBP 쓰기 | `file_format='WEBP'`, `color_mode='RGB'`, `quality=82`, `render.filepath=…`, `bpy.ops.render.render(write_still=True)` → 파일 생성, 눈으로 확인 | 실측 | 확인 |
| 렌더 기본 | `resolution_x/y` 1920×1080, `resolution_percentage` 100, `fps` 24, `film_transparent` False. 관련 속성 `filter_size`, `dither_intensity`, `use_compositing`, `use_persistent_data`, `threads_mode` | 실측 | 확인 |
| `film_transparent` + WEBP 알파 | — | 안 해 봤다 | 미검증 |
| 컴포지터 | `Scene.use_nodes`는 "expected to be removed in Blender 6.0" 경고(DeprecationWarning 원문), `scene.node_tree` **없음**, `scene.compositing_node_group` 있음. 만들기: `nt = bpy.data.node_groups.new("Comp", "CompositorNodeTree"); scene.compositing_node_group = nt`, `CompositorNodeRLayers` → `NodeGroupOutput`(`nt.interface.new_socket("Image", in_out="OUTPUT", socket_type="NodeSocketColor")`) 연결 성공. 노드 타입 `CompositorNodeRLayers`, `NodeGroupOutput`, `CompositorNodeGlare`, `CompositorNodeLensdist`, `CompositorNodeViewer`는 있고 `CompositorNodeComposite`는 **없다** | 실측 | 연결까지 확인. **컴포지터가 실제 출력에 적용됐는지는 미검증**(`use_compositing`를 확인하거나 출력 차이를 비교하지 않았다) |
| `World.use_nodes` | 같은 6.0 제거 경고 | 실측 | 확인 |
| `Action.fcurves` | 5.0에서 삭제(mcp-for-blender `guides/bpy.md`) | 우리 `hasattr` 검사는 클래스 기준이라 근거로 못 쓴다 | 미검증 |
| Principled BSDF 입력 | `'Base Color'`, `'Metallic'`, `'Roughness'`, `'IOR'`, `'Alpha'`, `'Thin Wall'`, `'Normal'`, `'Weight'`, `'Diffuse Roughness'`, `'Subsurface Weight'`, `'Subsurface Radius'`, `'Subsurface Scale'`, `'Subsurface IOR'`, `'Subsurface Anisotropy'`, `'Specular IOR Level'`, `'Specular Tint'`, `'Anisotropic'`, `'Anisotropic Rotation'`, `'Tangent'`, `'Transmission Weight'`, `'Coat Weight'`, `'Coat Roughness'`, `'Coat IOR'`, `'Coat Tint'`, `'Coat Normal'`, `'Sheen Weight'`, `'Sheen Roughness'`, `'Sheen Tint'`, `'Emission Color'`, `'Emission Strength'`, `'Thin Film Thickness'`, `'Thin Film IOR'` | 실측 | 확인 |
| 조명 | `Light.type` `'POINT'`, `'SUN'`, `'SPOT'`, `'AREA'`. 에어리어 라이트: `energy`, `size`, `size_y`, `shape`, `spread`, `shadow_soft_size`, `use_shadow`, `color`, **`use_temperature`, `temperature`**(켈빈. 토큰의 "따뜻함"을 숫자로 옮길 자리) | 실측 | 확인 |
| glTF 내보내기 | `bpy.ops.export_scene.gltf` 존재 | 실측 | 확인 |
| 속도 | 480×270, 기본 큐브 장면: EEVEE 32spp **0.33s**, Cycles(Metal) 64spp + 적응 0.02 + OIDN **0.80s** | 실측 | 확인(이 장면만) |
| Linux/Windows | — | 안 해 봤다 | 미검증 |

**우리 `scene.py`가 쓸 뼈대** (위에서 확인한 이름만 쓴 새 코드, 레퍼런스 복사 아님)

```python
import bpy, sys
sc = bpy.context.scene
def set_enum(obj, attr, value):
    try:
        setattr(obj, attr, value)
    except TypeError as e:          # 오류 메시지에 허용값 목록이 있다
        raise SystemExit(f"{attr}={value!r} rejected: {e}")
set_enum(sc.render, "engine", "BLENDER_EEVEE")      # 또는 "CYCLES"
sc.eevee.taa_render_samples = 64
set_enum(sc.view_settings, "view_transform", "AgX")  # 4장 표의 후보와 맞춘다
set_enum(sc.view_settings, "look", "None")
sc.render.resolution_x, sc.render.resolution_y = 2880, 1620
im = sc.render.image_settings
im.file_format, im.color_mode, im.quality = "WEBP", "RGB", 82
sc.render.filepath = sys.argv[sys.argv.index("--") + 1]
bpy.ops.render.render(write_still=True)
```

---

## 6. Paper shaders: 두 잉크와 맞는 것

**버전**: npm 최신 `0.0.82`(2026-10-21), 우리 스킬은 `0.0.81`(2026-09-17) 고정. 두 tarball의 `dist/`를 비교하면 **셰이더 30개는 바뀌지 않았고** `shader-mount.js`/`.d.ts`만 바뀌었다.
- WebGL2 컨텍스트를 `{ antialias: false, depth: false, stencil: false, ...webGlContextAttributes }`로 만든다.
- `dispose()`가 `gl.getExtension("WEBGL_lose_context")?.loseContext()`를 부른다. 컨텍스트가 즉시 풀리므로 컨텍스트 상한(taste 4개, 3-1) 계산에 유리하다.
- `renderUnlessAnimating()`: rAF가 돌고 있지 않을 때만 즉시 렌더(유니폼을 바꿀 때 중복 렌더 방지).
- `useProgram` 호출 위치 정리.
- 권고: 0.0.82로 올리고 두 스킬의 JS 크기와 `verify.mjs`를 다시 잰다. 셰이더 출력은 같아야 한다.

**내보내는 프래그먼트 셰이더 30개**: `colorPanelsFragmentShader`, `ditheringFragmentShader`, `dotGridFragmentShader`, `dotOrbitFragmentShader`, `flutedGlassFragmentShader`, `gemSmokeFragmentShader`, `godRaysFragmentShader`, `grainGradientFragmentShader`, `halftoneCmykFragmentShader`, `halftoneDotsFragmentShader`, `heatmapFragmentShader`, `imageDitheringFragmentShader`, `lensDistortionFragmentShader`, `liquidMetalFragmentShader`, `meshGradientFragmentShader`, `metaballsFragmentShader`, `neuroNoiseFragmentShader`, `paperTextureFragmentShader`, `perlinNoiseFragmentShader`, `pulsingBorderFragmentShader`, `simplexNoiseFragmentShader`, `smokeRingFragmentShader`, `spiralFragmentShader`, `staticMeshGradientFragmentShader`, `staticRadialGradientFragmentShader`, `swirlFragmentShader`, `voronoiFragmentShader`, `warpFragmentShader`, `waterFragmentShader`, `wavesFragmentShader`.

분류는 `dist/shaders/*.js`의 GLSL 출력부를 읽고 했다. 렌더해서 픽셀을 세지는 않았다.

**A. 엄격한 두 잉크 (출력이 `step`, 경계 AA 없음)**

| 셰이더 | 조건 | 다크 사용 |
|---|---|---|
| `dithering` | 없음. `res = step(.5, shape + dithering)`. `u_colorFront`/`u_colorBack`를 불투명으로 주면 모든 픽셀이 둘 중 하나. 모양 `DitheringShapes` = `simplex` 1, `warp` 2, `dots` 3, `wave` 4, `ripple` 5, `swirl` 6, `sphere` 7. 종류 `DitheringTypes` = `random` 1, `2x2` 2, `4x4` 3, `8x8` 4 | 자연스럽다. 앞뒤 색을 바꾸면 된다(지금 `--scheme dark`가 하는 일) |
| `image-dithering` | `u_colorSteps = 1`, `u_originalColors = false`, **`u_colorHighlight = u_colorFront`**(아니면 `step(1.02 - .02 * u_colorSteps, brightness)`에서 밝은 픽셀이 세 번째 잉크가 된다). 이미지 가장자리 `frame` 마스크만 AA. 이미지 입력이 필요하다 | `u_inverted`로 휘도를 뒤집는다 |

`image-dithering`이 주목할 만하다. **`omd-3d-hero`의 포스터(Blender 또는 three로 구운 회색조 컷)를 입력으로 주면 "3D 장면을 두 잉크 리소로"** 찍을 수 있다. shader-hero와 3d-hero를 잇는 경로다. `[미검증: 렌더해 보지 않음]`

**B. 두 색 + 1픽셀 AA 경계 (`fwidth`/`smoothstep`)**

경계 픽셀은 두 잉크의 중간색이다. 글자 안티앨리어싱과 같은 수준이지만 "혼색 없음"을 글자 그대로 지키지는 않는다. **들일지는 오너 판단이다.**

| 셰이더 | 두 색으로 묶는 조건 |
|---|---|
| `halftone-dots` | `u_type` `classic` 0 / `gooey` 1 / `holes` 2만(`soft` 3은 연속값이라 C), `u_grainMixer = 0`, `u_grainOverlay = 0`(그레인 오버레이는 흑백을 섞어 세 번째 색을 만든다), `u_originalColors = false`. 이미지 입력 필요. 다크: `u_inverted` |
| `waves` | `u_softness = 0` |
| `spiral` | `u_softness = 0` |
| `perlin-noise` | `u_softness = 0` |
| `dot-grid` | `u_strokeWidth = 0` 또는 `u_colorStroke = u_colorFill`, **`u_opacityRange = 0`**(아니면 점마다 알파가 달라 섞인다) |

가설(코드만 읽음, 확인 안 함): `simplex-noise`(`u_stepsPerColor 1`), `swirl`(`u_center 0`), `warp`, `metaballs`, `dot-orbit`, `voronoi`(`u_glow 0`)에 색 두 개와 `u_softness = 0`을 주면 B처럼 될 수 있다. 셰이더 안에 `mix(gradient, c, …)` 그라디언트 경로가 있으니 렌더해서 색 수를 세기 전에는 쓰지 않는다.

**C. 섞는다 (두 잉크 규칙과 맞지 않음)**

`mesh-gradient`, `static-mesh-gradient`, `static-radial-gradient`, `grain-gradient`, `neuro-noise`(`u_colorBack`·`u_colorMid`·`u_colorFront` 세 색을 `smoothstep`), `god-rays`, `smoke-ring`, `pulsing-border`, `gem-smoke`, `heatmap`, `liquid-metal`, `color-panels`(그라디언트·페이드·블러), `paper-texture`, `fluted-glass`, `lens-distortion`, `water`, `halftone-cmyk`(CMYK 네 잉크 겹침, 두 잉크가 아니다), 그리고 `halftone-dots`의 `soft`.

**(b) 먹 번짐 다크 바탕 모드에 쓸 패턴**
- 지금 규칙("잉크 = 헤딩 색, 웅덩이는 25%로 어둡게")은 밝은 종이 전제다. 어두운 종이에서는 taste `print3d.js`처럼 **잉크가 빛**이다(L13–14, L447: `c = u_dark > 0.5 ? tone : 1.0 - tone`). 웅덩이·가장자리는 잉크를 **밝게**(더 진한 안료 = 더 밝은 흰 먹·금니), 카스레는 종이(어둠)가 비치게, 번짐 블룸은 밝은 헤일로로 뒤집는다.
- Paper 쪽 관례도 같다: `image-dithering`·`halftone-dots`의 `u_inverted`는 휘도를 뒤집는 불리언 하나다. 다크 모드를 별도 셰이더가 아니라 유니폼 하나(`u_dark`)로 두는 근거다.
- taste는 어두운 바탕에서 앰비언트를 낮추고 림을 0.03 → 0.22로 키운다. 어두운 종이 위 밝은 글자는 가장자리 대비가 읽힘을 정한다는 뜻이고, 그래서 다크 모드 검증은 "획 가장자리 대비"를 따로 재야 한다.
- 대비 측정은 shader-hero처럼 최악 프레임(번짐 블룸이 가장 클 때)에서 한다.

---

## 7. tf-shaders 남은 것

읽은 파일: `skill/shader-landing/SKILL.md`, `RESEARCH.md`, `skill/shader-landing/scripts/shoot.mjs`(요청의 `scripts/shoot.mjs`는 루트에 없고 이 경로에 있다), 함께 `STRATEGY.md`, `SHARE_PLAN.md`, `skill/shader-landing/references/{recipes,cjk-type}.md`. 코드 안 `TODO` 주석은 없다. 열린 항목은 문서에 있다.

**열린 항목**
1. 삼성 인터넷의 WebGPU 지원은 "unverified"로 남아 있다(`RESEARCH.md` L34, `SKILL.md` L78). 한국 트래픽 리스크(iOS 25 이하, 저가 Android)도 같다. → `omd-3d-hero`가 WebGL2를 기본으로 두는 이유가 하나 더 생긴다. WebGPU 경로(패스트레이서, TSL)는 선택 사항으로만.
2. **v3 LCP 수정을 다시 재지 않았다**(`SHARE_PLAN.md` §7 "v3 수정은 재측정하지 않았다"). 실측: C(v1) LCP 8.5s, C2(v2) 7.8s(히어로 본문 `opacity: 0` 리빌과 원본 PNG 2.9 MB 텍스처), CSS 포스터가 있는 C2의 FCP·Speed Index 1.4s, Lighthouse perf 74(3회 중앙값). shader-hero·cjk-type-shader가 "첫 프레임에 글자"를 규칙으로 들였지만 같은 조건 재측정 기록은 없다.
3. 카탈로그 12종 중 2종만 완성(#1 여명 Dawn Scroll, #2 Prism Split). 나머지는 `verified: false`. 그중 (b)와 겹치는 것:
   - #9 먹 Ink Flow(`InkFlow`, 드래그 인터랙션)
   - #10 한지 Hanji(`FlowingGradient` + `Paper`)
   - #11 망점 Halftone Poster(`ImageTexture` + `Halftone`/`Dither`, `style`은 [CT])
   - 모두 `shaders`(WebGPU) 컴포넌트 기준이라 그대로는 못 쓴다. 아이디어만 Paper WebGL2로 옮긴다.
4. 원자 스킬 계획(`STRATEGY.md` §5①): `fabric-hero`, `hanji-paper`, `photocard-holo`, `neon-night`, `dawn-scroll`, `cjk-shader-type`. 이 중 `cjk-shader-type`(셰이더 `Text` 컴포넌트로 한글)은 우리 두 스킬의 "캔버스 텍스트 금지" 규칙과 정면으로 부딪힌다. 들이지 않는다.
5. 업스트림 PR 2건(레지스트리에 `compileTime`/`compileTimeWhen` 노출, 공식 문서에 `Text` CJK 폰트 예제)과 "2주 뒤 설치 300 이상이면 MCP" 판단 기준. 결과 기록이 이 파일들에는 없다.
6. `seam/` 디렉터리(2026-10-10 22:40, `seam-landing`, `seam-photocard-holo` 스킬 포함)가 따로 있다. 이번 범위 밖이라 열어 보지 않았다.

**(a)·(b)에 쓸 수치와 규칙**
- 셰이더 런타임 고정 비용: `shaders` JS 약 720–770 KiB(A 페이지 전체 790 KiB와 맞먹는다). Paper는 장면당 5–7 KiB gzip. 3D 히어로의 three.js 번들도 이 표에 올려 잰다.
- `ImageTexture` 원본은 WebP/JPEG 1600px 이하. 3D 포스터에도 같은 상한을 쓴다(2.9 MB PNG가 LCP가 됐다).
- 정보 섹션 뒤 장면은 약 30%로 조용히(`recipes.md` "calm"). 첫 키프레임은 생각보다 어둡게: "Mesh blending lifts mid-tones"(`recipes.md` L62).
- `shoot.mjs`: headed Chrome + `--enable-unsafe-webgpu`, 창을 화면 밖(`--window-position=-2400,-2400`), 스크롤 지점 0 / 0.3 / 0.55 / 0.8 / 1, 지점마다 2200ms 대기, `NOGPU=1`이면 `navigator.gpu`를 `undefined`로 스텁. 우리 `verify.mjs`는 이미 playwright-core Chromium 헤드리스 + Metal로 옮겨 왔다. WebGPU 굽기를 하게 되면 이 headed 방식이 근거다.
- `references/cjk-type.md`의 히어로 값(자간 -0.035em, 행간 1.18)은 `/hangul`(자간 -0.02em, -0.03em 아래 금지, 행간 1.3)과 어긋난다. 가져오지 않는다. `/hangul`이 이긴다.

---

## 8. 하지 말 것

**코드·에셋 출처**
- MengTo `webgl-3d-object/demo/*`(`assets/`의 JPG 7장, `index.html`, `preview.jpg`)를 복사하지 않는다. Neuform 제3자 페이지라 MIT 범위 밖이다.
- taste-skill의 번들 사진(Unsplash·Wikimedia)과 브랜드 아이콘, `product-render/specs/*` 스틸 PNG를 가져오지 않는다. `print3d.js` 셰이더를 통째로 옮기지 않는다(엔진이 다르고, 옮기면 MIT 고지 의무만 생긴다).
- Paper 파일을 벤더링하면 `NOTICE`를 같이 둔다. `shaders`(shaders.com)를 쓰게 되면 `disableTelemetry`를 켠다. 한 페이지에 Paper와 `shaders`를 같이 싣지 않는다.
- mcp-for-blender를 의존성으로 두지 않는다(임의 Python 실행, 텔레메트리 기본 익명 기록). bpy 패턴만 쓴다.
- tf-shaders 카탈로그의 `shaders` Pro 프리셋 이름·룩을 옮기지 않는다(`STRATEGY.md` §6).

**three.js 코드**
- `three/examples/jsm/...` 지정자, `<script src="three.min.js">`, `THREE.PCFSoftShadowMap`, `THREE.Clock`, `new THREE.PostProcessing(...)`, `RGBELoader`, `renderer.outputEncoding`/`sRGBEncoding`, `physicallyCorrectLights`/`useLegacyLights`, `material.envMapIntensity`로 `scene.environment` 조절, `renderAsync()`, 수동 PMREM(HDR 파일), `setEffects()`에 `OutputPass` 넣기, `setEffects()` 경로에서 `FilmPass` 그레인.
- 손으로 쓴 `requestAnimationFrame` 루프. `renderer.setAnimationLoop`를 쓴다.
- `ACESFilmicToneMapping`을 Blender `'ACES 1.3'`/`'ACES 2.0'`과 같은 것으로 취급하기.
- llms-full 데모처럼 DPR을 상한 없이 두기.
- three를 `latest`로 받기. r187로 고정하고, 판을 올리면 포스터를 다시 굽는다.

**Blender 코드**
- `'BLENDER_EEVEE_NEXT'`(5.2.2에서 거부), `scene.node_tree`(없다), `scene.use_nodes`·`world.use_nodes`(6.0 제거 예정), `CompositorNodeComposite`(없다), `action.fcurves`.
- `bl_rna...enum_items`를 동적 열거형의 진실로 믿기. TypeError 메시지로 확인한다.
- 노드를 이름으로 찾기, Principled 소켓 이름을 확인 없이 쓰기.
- 하얗게 날아간 컷을 노출로 고치기. 광량부터 고친다.
- Cycles 기본 샘플 4096 그대로 두기. 포스터는 샘플 상한과 적응 임계값을 정해서 굽는다.

**셰이더·연출**
- 두 잉크 규칙이 걸린 shader-hero에 B·C 묶음 셰이더를 오너 판단 없이 넣기. `atmosphere-background`류 screen/additive 혼합도 같다.
- `image-dithering`에서 `u_colorHighlight`를 따로 두기(세 번째 잉크가 생긴다).
- 헤드라인을 캔버스·셰이더 `Text`로 그리기, 히어로 글자를 `opacity: 0`에서 시작하기(LCP 7.8s 실측).
- 컨텍스트를 5개 이상 띄우기. 장면 하나 + 많아야 보조 하나. Paper는 0.0.82로 올려 `dispose()` 때 컨텍스트를 바로 놓게 한다.
- 셰이더 실패를 "WebGL 없음" 한 경로로만 검사하기. taste처럼 `shaderSource`를 깨뜨린 컴파일 실패 경로도 돌린다.
- taste가 10/31에 "싸 보여서" 뺀 효과(`riso-print`, `ink-bloom`, `paper-texture` 등)와 겹치는 데모를 실제 크기로 보지 않고 내기.
- 수치 없이 "더 낫다"고 쓰기. 미검증 항목(패스트레이서 헤드리스 WebGPU, 두 엔진 톤 매핑 일치, 컴포지터 적용, B 묶음 가설)은 미검증으로 둔다.
