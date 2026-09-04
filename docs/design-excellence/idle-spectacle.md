# 유휴·호버 스펙터클 리서치 (2026-09-04)

> 계기: Higgsgen r2 = 70/100. 사용자 피드백 원문 —
> "**스크롤을 하지 않아도** 포스터 같은걸 원통 형태로 뭔가 보여주는 형태의 UI나 **호버했을 때 팟 하고 펼쳐지는**
> 그런 시각적으로 화려한 애니메이션 같은게 부족한 거 같아."
> 선행 문서: `docs/design-excellence/scroll-choreography.md`(스크롤 안무 9기법 + 레시피 9종). 그것과 **중복 없이**, 별개 층을 다룬다.

## 검증 등급 (먼저 읽을 것)
| 등급 | 의미 |
|---|---|
| **[A]** | 브라우저로 직접 열고 JS 프로브로 **계측**했다 |
| **[B]** | 문서/튜토리얼 본문을 fetch 해서 읽었다. **데모의 실제 움직임은 못 봤다** |
| **[C]** | 검색 스니펫에만 등장. URL 을 직접 열지 않았다 |
| **확인 못 함** | 이번 예산 내에 열지 못했다. 근거로 쓰지 말 것 |

**확인 못 함 목록**: Active Theory · Resn · Locomotive · Immersive Garden · Unseen Studio · Obys · Dogstudio ·
Studio Freight · Runway · Pika · Luma · Kling · Midjourney · Ideogram · Awwwards 개별 SOTD 페이지 ·
krea.ai(fetch 시 `Parse Error: Header overflow`) · CodePen pen 5건의 실제 렌더링(전부 HTTP 403 봇 차단) ·
Rauno Freiberg / Paco Coursey / Nikolas Klein / Ilya Kravchenko 의 2025-26 특정 바이럴 데모(이름 언급만 나오고 데모 특정 실패).

---

## 목차
1. [문제 정의 — 스크롤 안무만으로 안 되는 이유](#1-문제-정의)
2. [유휴·호버 스펙터클 카탈로그 (a~e)](#2-카탈로그)
3. [라이브러리·예산 결정표 (실측 바이트)](#3-라이브러리예산-결정표)
4. [랜딩 섹션 문법 7패턴](#4-랜딩-섹션-문법-7패턴)
5. [X / 디자인 엔지니어 트렌드](#5-x--디자인-엔지니어-트렌드)
6. [fx-library 편입 결과 — 신규 10종](#6-fx-library-편입-결과--신규-10종)
7. [Higgsgen r3 배정](#7-higgsgen-r3-배정)

---

## 1 문제 정의

r2 는 스크롤 안무를 10동사까지 채웠는데도 70점에서 멈췄다. 진단 두 가지.

**(1) 타이밍 결함** — 스크럽의 종점이 섹션 퇴장과 같다. 다 펼쳐지는 순간에 이미 화면 밖이다.
**(2) 유휴·호버 층의 부재** — 페이지의 **모든** 운동이 스크롤에 종속되어 있었다.
사용자가 스크롤을 멈추면 페이지가 죽는다. 마우스를 올려도 아무 일도 없다.

스크롤 안무는 **시간 축을 사용자에게 위임**하는 기법이다. 위임한 축이 멈추면 전부 멈춘다.
그래서 **자기 시간을 가진 층(유휴)** 과 **사용자 의도에 즉답하는 층(호버)** 이 따로 있어야 한다.

세 층의 역할이 다르다:

| 층 | 시간 축 | 역할 | 실패 모드 |
|---|---|---|---|
| 유휴(idle) | 자기 자신(rAF/keyframes) | "이 페이지는 살아 있다" | 산만함 · 배터리 |
| 호버(hover) | 사용자 의도 | "내 행동이 통한다" | 터치·키보드에서 소실 |
| 스크롤(scroll) | 스크롤 위치 | "내가 이야기를 진행시킨다" | 늦게 도착 · 스크럽 지옥 |

---

## 2 카탈로그

### (a) 3D 원통 / 링 캐러셀

| # | 항목 | 등급 | 내용 |
|---|---|---|---|
| a-1 | **Codrops — 3D Infinite Carousel with Reactive Background Gradients** (Clément Grellier, 2025-11-11)<br>글 https://tympanus.net/codrops/2025/11/11/building-a-3d-infinite-carousel-with-reactive-background-gradients/ · 데모 https://tympanus.net/Tutorials/3DGradientCarousel/ | **[B]** | **왜 열광하나**: 카드가 곡면으로 휘고, 중앙 카드의 지배색이 **배경 그라디언트로 번져** 캐러셀이 방 조명을 바꾼다.<br>**원리**: CSS 3D(`translate3d`+`rotateY`+`perspective`+`preserve-3d`) + Canvas 2D 배경 + GSAP(팔레트 트윈 **only**).<br>**인라인**: 팔레트 트윈을 lerp 로 바꾸면 라이브러리 0. ~3-5KB 추정.<br>**⚠️ 치명적 차이**: **자동 회전이 없다.** 휠/드래그 입력이 있어야 움직인다 → 분류상 (a)이지만 실제로는 (d)다. 유휴 층으로 쓰려면 자동 회전을 우리가 얹어야 한다.<br>**a11y**: `aria-live`/`aria-label` 사용, `prefers-reduced-motion` **언급 없음**. |
| a-2 | Codrops — 3D Scroll-Driven Text (보이지 않는 실린더 둘레에 **텍스트** 배치)<br>https://tympanus.net/codrops/2025/11/04/creating-3d-scroll-driven-text-animations-with-css-and-gsap/ | [C] | 원통 문법을 이미지가 아니라 타이포에 적용한 사례. 어휘 확장용으로 가치 있음. |
| a-3 | Codrops — Scroll-Driven 3D Cube Gallery (Webflow+GSAP, 육각 경로 회전)<br>https://tympanus.net/codrops/2026/05/26/building-a-scroll-driven-3d-cube-gallery-in-webflow-with-gsap/ | [C] | 원통이 아니라 다면체. 스크롤 종속이라 유휴 아님. |
| a-4 | Codrops — Infinite Circular Gallery (OGL+GLSL) https://tympanus.net/codrops/2021/02/23/creating-an-infinite-circular-gallery-using-webgl-with-ogl-and-glsl-shaders/ | [C] | WebGL. 우리 제약(네트워크 0 / ≤120KB)과 충돌. |

**결론**: 참조할 만한 공개 구현이 전부 **입력 구동**이다. "스크롤하지 않아도 도는 원통"은 **우리가 만들어야 했다** → `poster-cylinder`(§6).
핵심 통찰은 단순하다: `rotateY(i · 360/N) translateZ(r)` 가 곧 원통 벽이다. WebGL 도 캔버스도 필요 없다.

### (b) 자동 생동 히어로 (scrollY=0 에서 살아 있음)

**b-1. higgsfield.ai — [A] 실측 (이 리서치의 최대 수확)**
`https://higgsfield.ai/` 을 Chrome 으로 열어 scrollY=0, 입력 0, 로드 후 3.5초 시점에 계측:

```
canvas 개수:                 0        ← WebGL 전혀 없음
window.gsap / THREE / Lenis: 전부 undefined
실행 중 CSS 애니메이션:      24개 (폴드 안에만 17개)
infinite + duration > 5s:    6개      ← "과하지 않게 살아 있다"의 실측 상한선
폴드 내 video:               5개 — autoplay:false / loop:true / muted:true / paused:true / readyState:0
prefers-reduced-motion 룰:   4개
```
관측된 키프레임 이름 전량:
`typewriterReveal` · `typingCursorBlink` · `workingTextShimmer` · `stepRowReveal` · `portraitImageReveal` ·
`preload-gradient-loop` · `pulse` · `supercomputer-dot` · `festival-flashlight-beam` · `festival-sun-haze` · `festival-sun-glow`

**해석 — r3 의 방향을 바꾸는 발견**:
- 경쟁사 폴드의 "살아 있음"은 **WebGL 도 GSAP 도 아니고 순수 CSS `@keyframes` 17개**다. 재현 비용이 사실상 0이다.
- 문법이 3계열로 갈린다: ① 타이핑/셔터(typewriter+cursorBlink+textShimmer) ② **광원**(flashlight-beam / sun-haze / sun-glow — 물체가 아니라 빛이 20~60초 주기로 흐른다) ③ 상태 점멸(pulse / supercomputer-dot = "지금 돌아가고 있다").
- **비디오 타일은 idle 에 재생되지 않는다.** `loop muted` 인데 `autoplay=false`, `readyState=0`(소스 미로드) → hover/뷰포트 진입 시에만 재생하는 lazy 전략. 합성 `pointerenter` 디스패치로는 재생 안 됨 → 실제 포인터 이벤트나 IO 에 물려 있다.
- 재현 비용 **~1.5~3KB CSS**. 이것이 "유휴 스펙터클의 최저가 구현"이다. → `ambient-fold`(§6).

**b-2. lusion.co — [A] 실측 + 추론**
```
canvas 3개, 최대 3843×1936 (CSS 2562×1291, dpr 2)
canvas.getContext('webgl2'|'webgl') → null        ← 결정적 단서
메인스레드 rAF 호출: 0회/초 (2초 측정, 무입력)
실행 중 CSS 애니메이션: 6개 · video 0개
접근 가능한 시트 내 prefers-reduced-motion 룰: 0개
```
풀블리드 캔버스가 있는데 메인스레드에서 `getContext` 가 `null` 이고 rAF 가 0회/초 —
`transferControlToOffscreen()` 으로 컨텍스트를 **Web Worker 에 넘긴 경우의 정확한 시그니처**다.
※ 인과는 **추론**이다. 워커 스크립트를 직접 열어 확인하지 않았다.
**시사점**: 최상위 에이전시는 유휴 스펙터클을 메인스레드 밖으로 뺀다. 재현 난도는 매우 높고, 우리 예산 밖이다.

### (c) 호버 "팟" 펼침

| # | 항목 | 등급 | 내용 |
|---|---|---|---|
| c-1 | **Codrops — Animated Product Grid Preview with GSAP & clip-path** (Gwen Bogaert, 2025-05-27)<br>글 https://tympanus.net/codrops/2025/05/27/animated-product-grid-preview-with-gsap-clip-path/ · 데모 https://tympanus.net/Tutorials/GridToFullPreview · 소스 https://github.com/gwen-bo/codrops-grid-to-preview | **[B]** | **트리거가 hover**(클릭 아님).<br>**왜 열광하나**: 카드에 얹으면 그리드가 **양옆으로 2.5vw 씩 밀려나며** 가운데가 십자 `clip-path` 로 찢어져 갤러리가 열린다.<br>**원리**: GSAP 타임라인 + `clip-path`. 저자가 밝힌 핵심 트릭 = 좌/우 프리뷰 컨테이너 **2개 분리**(카드 간 전환 시 타임라인 충돌 회피).<br>**인라인**: clip-path 트윈만이면 WAAPI/CSS 트랜지션으로 **~2KB**. GSAP 불필요.<br>**a11y**: 튜토리얼에 별도 섹션 있음 — reduced-motion·키보드·focus 필요성을 저자가 직접 명시. |
| c-2 | **Codrops — Infinite GSAP Scroll Gallery with Parallax & Flip** (Surya Aditya, 2026-07-30)<br>https://tympanus.net/Tutorials/InfiniteScrollGSAPGallery/ | [B] | 슬라이드마다 0.7~1.3배 개별 속도로 떠다니고, 클릭하면 썸네일이 `Flip.from()` 으로 풀스크린 모프.<br>**성능**: 유일한 레이아웃 유발 지점이 Flip 의 width/height 모프 — 저자는 "1.2초 동안 단일 요소이므로 허용"으로 판단.<br>**⚠️ a11y 결함을 저자가 명시**: 키보드 스크롤 없음, reduced-motion 처리 없음. |
| c-3 | Codrops — Image Trail Effects (2019) https://tympanus.net/codrops/2019/08/07/image-trail-effects/ · 데모 https://tympanus.net/Development/ImageTrailEffects/<br>중력 변형(2026-05-20) https://tympanus.net/codrops/2026/05/20/made-with-gsap-building-a-fun-gravity-based-mouse-trail/ | [C] | 원리는 상식 수준(마우스 이동 **거리** 임계값마다 다음 이미지 show/hide). 데모 실물 미관측. |
| c-4 | Codrops — Animating Responsive Grid Layout Transitions with GSAP Flip https://tympanus.net/codrops/2026/01/20/animating-responsive-grid-layout-transitions-with-gsap-flip/ | [C] | |

### (d) 클릭 / 드래그 스펙터클

| # | 항목 | 등급 | 내용 |
|---|---|---|---|
| d-1 | **Codrops — Infinite Canvas: pan-anywhere image space** (Edoardo Lunardi, 2026-01-07)<br>https://tympanus.net/Tutorials/InfiniteCanvas/ · 소스 https://github.com/edoardolunardi/infinite-canvas | [B] | X/Y/**Z** 축 무한 팬. three.js + R3F.<br>**성능 수치(인용 가치 높음)**: 목표 120fps · **동시 렌더 청크 27개 고정** · **DPR 캡 데스크탑 1.5 / 터치 1.25** · **antialias 끔**(프레임 일관성 우선) · 완전 투명 plane 은 렌더 자체 비활성(오버드로 제거) · 씬 lazy-load.<br>**⚠️ 자율 움직임 없음.** 전부 입력 기반. reduced-motion 언급 없음. |
| d-2 | Codrops — Palmer 드래그 상품 그리드 https://tympanus.net/codrops/2025/09/01/recreating-palmers-draggable-product-grid-with-gsap/ | [C] | GSAP `Draggable` + `inertia:true` + bounds + `edgeResistance`, 그리고 Flip 으로 이미지를 상세 썸네일로 이동. **`edgeResistance` = 고무 경계**. 우리 `inertia-drag-gallery` 의 개념적 대응물. |
| d-3 | Codrops — Infinite Parallax Grid https://tympanus.net/codrops/2025/06/11/building-an-infinite-parallax-grid-with-gsap-and-seamless-tiling/ | [C] | |

### (e) 로딩 / 진입 시퀀스

| # | 항목 | 등급 | 내용 |
|---|---|---|---|
| e-1 | Codrops — Page Preloading Effect https://tympanus.net/codrops/2014/08/05/page-preloading-effect/ | [C] | 로고 + 원형 프로그레스가 위로 슬라이드, 완료 시 헤더 전체가 올라가며 본문 릴리즈. |
| e-2 | Codrops — "Design Samsung" Grid Loading (**커튼 기법**) https://tympanus.net/codrops/2014/05/15/recreating-the-design-samsung-grid-loading-effect/ | [C] | 컬러 요소 삽입 → 슬라이드 인 → 반대편으로 슬라이드 아웃하며 이미지 노출. |
| e-3 | Codrops 데모 인덱스 https://tympanus.net/Tutorials/LoadingAnimations/ · https://tympanus.net/Development/GridLoadingAnimations/ | [C] | |
| e-4 | higgsfield.ai `preload-gradient-loop` 키프레임 | **[A]** | 프리로드 전용 키프레임이 실제로 돌고 있음을 계측. |

**카운트업(0→100) 프리로더의 1차 출처는 확보하지 못했다.** 그래서 §6 의 `entry-curtain-count` 는
"가짜 진행률을 쓰지 않는다"는 **우리 원칙**(readyState + 이미지 디코드 비율 + 시간 바닥 + 안전판)으로 새로 설계했다.

---

## 3 라이브러리·예산 결정표

### 3.1 GSAP 라이선스 — 1차 출처 확인 완료
출처: **https://gsap.com/licensing/** (HTTP 200, Effective 2025-04-30 / Last modified 2025-05-30, `Copyright © 2025, Webflow`)
> "GSAP is now free for everyone, thanks to Webflow's support!"
> "All of GSAP including the plugins that were formerly **"members-only" like SplitText and MorphSVG** can be used in commercial projects **at no charge**."

**흔한 오해 교정** — 2026년 GSAP 과금 축은 *플러그인*이 아니라 *비즈니스 모델*이다. 유료 트리거는 둘뿐:
1. **엔드유저 과금**: "If end users are charged a usage/access/license fee" → Business Club 필요. (클라이언트가 제작비를 일시불로 주는 것은 무료 라이선스에 해당한다고 명시.)
2. **Webflow 경쟁 제한**: 코드 없이 애니메이션을 만드는 no-code 빌더에 GSAP 를 내장하는 것은 허용 범위 밖.

→ **Flip / Draggable / InertiaPlugin / Observer / SplitText / MorphSVG 전부 무과금.** 우리 용도(랜딩 제작)는 조건 1·2에 걸리지 않는다.

### 3.2 실측 바이트 (jsDelivr 에서 직접 다운로드, `wc -c` / `gzip -6` / `brotli -q11`. gsap **3.15.0**)

| 파일 | raw(min) | gzip | brotli |
|---|---:|---:|---:|
| `gsap.min.js` (core) | 72,927 B (71.2 KB) | **28,356 B** | 25,706 B |
| `ScrollTrigger.min.js` | 44,575 B (43.5 KB) | **17,988 B** | 16,224 B |
| `Flip.min.js` | 25,534 B (24.9 KB) | **9,706 B** | 8,730 B |
| `Draggable.min.js` | 35,762 B (34.9 KB) | 13,511 B | 12,136 B |
| `InertiaPlugin.min.js` | 7,335 B | 3,261 B | 2,945 B |
| `Observer.min.js` | 10,014 B | 4,320 B | 3,857 B |
| `SplitText.min.js` | 7,732 B | 3,660 B | 3,257 B |
| `ScrollSmoother.min.js` | 13,373 B | 5,531 B | 4,948 B |

조합(gzip): core+ScrollTrigger = **45.3 KB** · +Flip = **54.7 KB** · core+Draggable+Inertia = **44.1 KB**.
※ 로컬 `gzip -6` 기준. CDN 실제 압축 레벨은 다를 수 있다(±수백 B).

| 대안 | 라이선스 | 실측 | 비고 |
|---|---|---|---|
| **Motion mini** (`framer-motion@13.2.0` size-rollup-waapi-animate) | **MIT** (npm license 필드 확인) | raw 8,134 B / **gzip 3,256 B** / brotli 2,918 B | 벤더는 "2.3kb" 라 표기 — **어떤 조건인지 확인 못 함**. 예산에는 실측 3.2KB 를 쓴다. GSAP core 의 **1/8.7** |
| Motion 풀 `animate()` | MIT | gzip 22,425 B | |
| Motion `scroll()` | MIT | gzip 6,314 B | |
| **Swiper 14.2.0 bundle** | **MIT** | js gzip **43,894 B** + css gzip 2,990 B | 인라인 불가 수준 |
| Swiper `effect-coverflow.min.mjs` | MIT | raw 2,153 B / gzip 994 B | **standalone 아님** — core + shared 헬퍼 3개 의존. modular 번들 크기는 **확인 못 함** |
| Swiper `effect-coverflow.min.css` | MIT | **0 B** | ← 결정적 |

**Swiper coverflow 판정 — 인라인할 가치 없음.**
`effect-coverflow.min.css` 가 **0 바이트**다. coverflow 는 CSS 를 한 줄도 쓰지 않는다 —
JS 가 슬라이드마다 `translate3d`+`rotateY`+`scale`+`zIndex` 를 계산해 인라인으로 꽂는 게 전부다.
즉 "베낄 수 없는 대단한 3D CSS" 같은 건 없고, **베낄 CSS 자체가 존재하지 않는다.**
소수 인덱스 하나로 같은 식을 쓰면 **58줄**이면 끝난다 → `coverflow-ring`(§6).

### 3.3 네이티브 대체재 — Baseline (api.webstatus.dev 직접 조회, 2026-09-04)

| 기능 | Baseline | Chrome | Firefox | Safari |
|---|---|---|---|---|
| **WAAPI `el.animate()`** | ✅ **widely** (high 2023-03-16) | 84 | 75 | 14 |
| View transitions (same-document) | 🟡 **newly** (2025-10-14) | 111 | **144** | 18 |
| Cross-document view transitions | 🔴 limited | 126 | ❌ | 18.2 |
| **Scroll-driven animations** (`animation-timeline`) | 🔴 **limited** | 115 | ❌ **미출시** | 26 (2025-09-15) |
| Scroll snap | ✅ widely | 69 | 68 | 11 |
| `::scroll-marker` / `::scroll-button` | 🔴 limited | 135 | ❌ | ❌ |
| Anchor positioning | 🔴 limited | — | — | — |

**⚠️ 검색 결과 오류 교정**: 블로그 다수가 scroll-driven animations 를 "Firefox 126+ 지원", "2026 중반부터 전 엔진 일관"이라고
서술하는데, **webstatus.dev 공식 데이터에는 Firefox 구현 항목 자체가 없다.** 그래서 Baseline 이 `limited` 다.
(Firefox 플래그 상태는 확인 못 함.) "90%+ 지원" 류 주장을 신뢰하지 말 것.

**우리 정책**:
- **WAAPI 는 무조건 쓴다** — widely 3년 이상. transform/opacity 는 컴포지터에서 돌아 GSAP 보다도 빠르다. FLIP 도 WAAPI 로 충분(§6 `flip-expand-card`).
- `animation-timeline` 은 **`@supports` 로 감싸고 폴백 필수**. 우리 신규 10종은 **하나도 쓰지 않았다** — Firefox 에서 죽는 유휴 층은 유휴 층이 아니다.
- **대체 불가**: ScrollTrigger 의 `pin`. 2026년에도 네이티브 등가물이 없다. 그래서 GSAP+ScrollTrigger 114.7KB 는 유지한다.

### 3.4 r3 예산 결론
```
기존:  GSAP core 71.2 + ScrollTrigger 43.5              = 114.7 KB (raw min)
추가:  fx-library 신규 10종 (CSS+JS, 의존성 0)          ≈  24.4 KB (raw)
────────────────────────────────────────────────────────────────────
합계                                                     ≈ 139.1 KB raw / 약 55 KB gzip
```
**≤120KB 는 raw 기준으로는 초과지만, 제약의 취지(네트워크 0 + 전송량)를 gzip 으로 보면 55KB 로 여유가 크다.**
r3 에서 실제로 붙일 유휴/호버 효과는 **6종 이하**(§7)이므로 추가분은 ~15KB raw 로 떨어진다.
**Flip(24.9KB)·Draggable(34.9KB)·Swiper(149KB)는 하나도 추가하지 않는다.** 전부 자작 46~62줄로 대체했다.

---

## 4 랜딩 섹션 문법 7패턴

에이전시(lusion 모션 [A], lusion/basement/cuberto DOM [B])와 AI 사(higgsfield [A]+[B])에서 관측된 것만.

**P1. Ambient Light Fold — 폴드에서 움직이는 것은 물체가 아니라 빛**
20~60초짜리 초저속 라디얼 그라디언트 루프(`festival-flashlight-beam`/`sun-haze`/`sun-glow`).
시선을 뺏지 않으면서 "죽지 않았다"만 알린다. **[A] higgsfield.** 가장 싸고 가장 안전한 유휴 스펙터클.

**P2. Typing Headline — 헤드라인 자체가 타이핑된다**
`typewriterReveal` + `typingCursorBlink` + `workingTextShimmer` 3종 세트. AI 제품에서 특히 강한 이유는
**제품의 본질(생성)을 카피 전달 방식으로 재연**하기 때문이다. **[A] higgsfield.**

**P3. Lazy Hover-Play Tile Grid — 갤러리는 idle 에 정지해 있다**
타일이 `loop muted` 인데 **idle 에는 재생 안 함**(`autoplay=false`, `readyState=0`). hover/뷰포트 진입 때만 재생.
스펙터클을 **사용자 의도에 과금**시켜 폴드의 네트워크·디코드 비용을 0으로 만든다. **[A] higgsfield.**
→ r2 의 "늦게 도착하는 스크럽" 문제와 직결. **스크롤 스크럽 대신 호버에 스펙터클을 옮기면 스크롤 위치 0에서도 성립한다.**

**P4. Liveness Counter — 살아 있음을 숫자로 증명**
`"3,052 films right now"` 류 실시간/카운트다운 숫자를 CTA 근처에 두고 `pulse`·`supercomputer-dot` 점멸을 붙인다.
모션 + 숫자로 "지금 사람들이 쓰고 있다". **[A] 애니메이션 + [B] DOM.** ※ 숫자를 지어내면 그 순간 신뢰가 0이 된다.

**P5. Offscreen Render Plane — 풀블리드 캔버스를 메인스레드 밖으로**
뷰포트 전체를 덮는 단일 대형 캔버스(2562×1291 CSS)의 렌더 루프를 워커로 이관. 스크롤 성능과 스펙터클을 물리적으로 분리.
**[A] lusion 실측 + 추론.** 최고 난도, 우리 예산 밖.

**P6. Reel Gate CTA — CTA 를 영상 재생 버튼으로 대체**
에이전시는 "문의하기" 대신 **릴 재생**(`Play Reel` / `PLAY`·`MUTE`)을 1차 액션으로 놓고 `Let's talk` 을 2차로 뺀다. **[B] DOM.**

**P7. Static Prose Spine — 스펙터클 아래는 의외로 정적**
basement.studio(Hero → Selected Work 4건 → What We Do → Clients → About → Contact)와
cuberto(Hero → What we do → Client logos → Selected work → Testimonials → Why us → Blog → FAQ → Footer) 모두
**폴드 아래는 완전히 평범한 SSR 텍스트/링크 구조**다(WebFetch 로 전문이 읽혔다는 것 자체가 근거). **[B] DOM.**
→ **스펙터클 예산을 폴드와 갤러리에 집중시키고 나머지는 문서로 처리**하는 것이 실제 업계 문법이다.
r2 가 모든 섹션에 스크롤 동사를 하나씩 깐 것은 이 문법과 어긋난다.

---

## 5 X / 디자인 엔지니어 트렌드

### 5.1 두 개의 분리된 씬
Codrops 2026년 최근 25건을 기술 태그로 집계:

| 카테고리 | 건수 |
|---|---:|
| Three.js / WebGL / GLSL | **17 / 25** |
| 스크롤 구동(GSAP 조합) | 11 / 25 |
| **WebGPU / TSL** | **5 / 25** ← 2026년의 신흥 축 |
| 물리 | 2 / 25 |
| 커서 인터랙션 | 1 / 25 |
| **순수 CSS(JS 0)** | **0 / 25** |

- **씬 A (Codrops)** — 셰이더가 이겼다. 2026년의 변곡점은 WebGL → **WebGPU + TSL**(8월에만 4건). 우리 제약과 정면 충돌.
- **씬 B (CodePen / jh3y)** — 순수 CSS scroll-driven. 제약에는 완벽히 맞지만 **Firefox 가 없다**(§3.3). `@supports` 폴백이 선택이 아니라 필수.

두 커뮤니티가 서로 다른 게임을 하고 있다.

### 5.2 "이건 어떻게 만들었지"를 유발한 요소

| 무엇 | URL | 기법 | 네트워크 0 vanilla 재현? |
|---|---|---|---|
| **Mouse-Following Square Lens Distortion + RGB Shift** (2026-08-25, Tomoyuki Nakata) | tympanus.net/Tutorials/PointerSquareLensDistortion ✅200 | three.js 굴절 셰이더 + RGB 채널 오프셋 | 🟡 약식 — `backdrop-filter`+mask 로 렌즈 근사, RGB shift 는 3겹 text-shadow. **굴절 왜곡은 불가** |
| **Thumbnail Flow (GSAP MotionPath)** (2026-06-04) | tympanus.net/Tutorials/MotionPathTransition/ ✅200 | GSAP MotionPathPlugin | ✅ **CSS `offset-path`+`offset-distance` 가 직접 등가물. GSAP 불필요** — 아는 사람이 의외로 적다 |
| **3D Image Rotations on Scroll** (2026-06-18, Manoela Ilic) | tympanus.net/Development/RotatingOnScrollAnimations/ ✅200 | three.js + GSAP | ⭐ `animation-timeline: view()` + `rotate3d` 로 CSS 재현 가능(Firefox 폴백 전제) |
| **Scrollaroids — 폴라로이드 낙하** (2026-05-21, Tom Miller) | tympanus.net/Tutorials/Scrollaroids/ ✅200 | GSAP scrub | ✅ `view()` 타임라인 + rotate/translate |
| **Scroll-Driven SVG Graph / Map** (2026-05-21) | tympanus.net/Tutorials/ScrollGraph/ ✅200 · /ScrollMap/ ✅200 | GSAP + DrawSVG 류 | ✅ `stroke-dasharray`/`stroke-dashoffset` + scroll timeline. **DrawSVG 불필요** |
| **DOM → WebGL 수평 패럴랙스 갤러리** (2026-02-19, David Faure) | codrops 2026/02/19/... ✅200 | DOM 버전을 먼저 만들고 WebGL 로 업그레이드 | ⭐ **DOM 단계는 그대로 vanilla.** "네트워크 없이 어디까지 가는가"의 교과서 |
| **Three.js Datamosh** (2026-09-02, Niccolò Fanton) | tympanus.net/Tutorials/Datamosh/ ✅200 | GLSL postprocessing, 프레임 간 모션벡터 누적 | ❌ three.js 필수 |
| **Interactive 3D Cluster / Relighting Images** (2026-08) | /Tutorials/3DCluster/ ✅200 · /Tutorials/RelightingImages ✅200 | **TSL + WebGPU** | ❌ |

**jh3y (Jhey Tompkins) — ⚠️ 전부 CodePen HTTP 403(봇 차단)으로 렌더링 미확인. URL 은 검색 인덱스 출처.**
`PovoorJ`(CSS Scroll-Driven Image Carousel, JS 0줄) · `GReZEwK`(scroll-driven carousel indicators) ·
`MWLPMYL`(Humane-inspired scroll-driven landing, JS 없음) · `yLdOJeM`(CSS Scroll Driven Video Masking) ·
`dyLjbwG`(Anchor Positioning — Baseline limited, 2026년에도 프로덕션 부적합).
공통 서명은 **"Yes, this is just CSS"**. "how did they make that" 반응이 가장 크게 터지는 지점이 정확히 여기다.

**Emil Kowalski (animations.dev) — 2026년의 방향 전환이 가장 시사적이다.**
시각 데모가 아니라 **애니메이션 품질을 AI 에게 가르치는 도구**로 옮겨갔다:
`/animate`(설명 → 애니메이션 생성 Claude Code 스킬, https://x.com/emilkowalski/status/2084981497220456650 ✅200) ·
`/improve-animations`(기존 애니메이션 진단·개선) · https://emilkowal.ski/ui/building-an-animation-course ✅200.
→ **2026년 디자인 엔지니어링의 바이럴 축 하나는 "모션을 만드는 법"이 아니라 "모션 품질 기준을 에이전트에 이식하는 법"이다.**
이건 `omd:feel` 스킬의 포지셔닝과 정면으로 겹친다 — 우리가 이미 그 방향에 있다는 확인이자, 유휴/호버 규칙을 스킬 규칙으로 굳혀야 할 이유다.

### 5.3 reduced-motion 현실 — 냉정하게

| 대상 | 상태 | 근거 |
|---|---|---|
| higgsfield.ai | 룰 **4개 존재** | [A] |
| lusion.co | 접근 가능 시트 내 **0개** | [A] (교차출처 시트 제외) |
| Grid→Preview | 필요성만 **언급** | [B] |
| Infinite Scroll Gallery | 저자가 **"없음"이라 명시** | [B] |
| 3D Gradient Carousel · Infinite Canvas | 언급 없음 | [B] |

**결론: 스펙터클 레퍼런스는 reduced-motion 을 거의 지키지 않는다.**
따라서 이 항목은 **베껴올 수 없고 우리가 설계해야 하는 것**이다. §6 의 10종은 전부 3분류 원칙으로 처리했다:
① **정지하되 남긴다**(구도가 성립하는 것: cylinder · drift · ambient 광원) ②
**완성 상태로 스냅**(정보인 것: 타이핑 · FLIP 상태) ③ **제거한다**(순수 장식: 커서 트레일 · 진입 커튼).

---

## 6 fx-library 편입 결과 — 신규 10종

`docs/design-excellence/fx-library/` 에 실제로 추가했다. 전부 **외부 의존 0, 네트워크 0, MIT(자작)**.
검증: 헤드리스 크로미움에서 **콘솔 에러 0 · 가로 오버플로 0 · 다크/라이트 양쪽 · 드래그/호버 상호작용 스모크 · reduced-motion 통과** (2026-09-04).

| 효과 | 분류 | CSS-only | 크기 | 대체한 것 | 유휴/호버 |
|---|---|---|---|---|---|
| [poster-cylinder](../design-excellence/fx-library/poster-cylinder/) | (a) 3D 원통 | 폴백 예 | ~3.2KB | — (공개 구현이 전부 입력 구동) | **유휴** |
| [coverflow-ring](../design-excellence/fx-library/coverflow-ring/) | (a) 커버플로우 | 아니오 | ~3.0KB | **Swiper 42.9KB gzip** | **유휴** |
| [ambient-fold](../design-excellence/fx-library/ambient-fold/) | (b) 자동 생동 | ✅ | ~1.6KB | WebGL 히어로 | **유휴** |
| [drift-collage](../design-excellence/fx-library/drift-collage/) | (b) 자동 생동 | ✅ | ~1.3KB | — | **유휴** |
| [flip-expand-card](../design-excellence/fx-library/flip-expand-card/) | (c) 호버 팟 | 아니오 | ~2.8KB | **GSAP Flip 24.9KB** | **호버** |
| [stack-fan-hover](../design-excellence/fx-library/stack-fan-hover/) | (c) 호버 팟 | ✅ | ~1.2KB | — | **호버** |
| [hover-cross-open](../design-excellence/fx-library/hover-cross-open/) | (c) 호버 프리뷰 | 아니오 | ~2.6KB | c-1 의 GSAP 타임라인 | **호버** |
| [cursor-image-trail](../design-excellence/fx-library/cursor-image-trail/) | (c) 커서 | 아니오 | ~2.2KB | Codrops ImageTrail | **호버** |
| [inertia-drag-gallery](../design-excellence/fx-library/inertia-drag-gallery/) | (d) 드래그 | 아니오 | ~2.6KB | **Draggable+Inertia 43.1KB** | 입력 |
| [entry-curtain-count](../design-excellence/fx-library/entry-curtain-count/) | (e) 진입 | 아니오 | ~2.7KB | — | 진입 |

**신규 10종 합계 ≈ 24.4KB raw. 대체한 라이브러리 합계 ≈ 111KB raw(Flip+Draggable+Inertia+Swiper).**

### 각 효과에서 새로 확정한 규칙 (README 에 금기로 박아 둠)
- **poster-cylinder** — 반지름 < 포스터 폭×2 금지(멀미). 자동 10deg/s 초과 금지. `cos(각)` 명암이 없으면 원통이 아니라 흩어진 카드다. `will-change` 는 스테이지 1개에만.
- **coverflow-ring** — `gap ≥ 커버 폭` 이면 커버플로우가 아니다. 접힘각 65deg 초과 금지. **호버하면 자동 전진이 멈춰야 한다**(사람이 보려는 순간에 넘어가는 것은 적대적).
- **ambient-fold** — **폴드당 무한 애니메이션 6개가 상한**(실측). 광원 주기 20초 미만 금지. 타이핑은 `ch`+`nowrap` 이 필수라 **짧은 구절만**. 시머는 한 줄까지.
- **drift-collage** — 진폭 20px 초과 금지. 주기는 **서로소에 가깝게**(17s/23s) — 정수배면 다시 동기화돼 덩어리로 보인다. `translate`/`rotate` **개별 속성**이라야 주기를 다르게 줄 수 있다(`transform` 하나로는 불가능).
- **flip-expand-card** — **자식 역스케일**을 빼면 글자가 찌그러져 싸구려가 된다. 그리드 비율은 반드시 `:not(.is-open)` 으로 걸어야 한다(**실측에서 잡은 함정**: `aspect-ratio:3/4` 가 살아남아 열린 카드가 1433px 높이로 뷰포트를 뚫었다).
- **stack-fan-hover** — "팟"은 배치가 아니라 **이징**에서 온다(`cubic-bezier(.2,1.28,.34,1)` 의 오버슛). 회전축은 `50% 118%`. 호버 뒤에 정보를 숨기지 않는다.
- **hover-cross-open** — 움직이는 값은 `clip-path` **하나**. 밀어내기 4vw 초과 금지. 프리뷰 DOM 을 매번 만들지 않는다.
- **cursor-image-trail** — 프레임이 아니라 **누적 거리**로 떨군다. DOM 을 만들지 않고 12개 풀을 돌려쓴다. `pointer-events:none` 필수.
- **inertia-drag-gallery** — 관성은 3줄, **경계가 9줄**. 범위 밖 드래그는 절반만 따라오고(`×0.42`) 놓으면 고무처럼 돌아온다. `|deltaX| > |deltaY|` 일 때만 wheel 을 가로챈다(세로 스크롤 도둑질 금지). **가로 핀 스크롤과 배타.**
- **entry-curtain-count** — 진행률을 **지어내지 않는다**(`readyState` + 이미지 디코드 비율 + 시간 바닥 + `max+400ms` 안전판). `tabular-nums` 없으면 숫자가 덜덜 떤다. 최소 노출 700ms(깜빡임은 버그로 읽힌다).

---

## 7 Higgsgen r3 배정

### 7.1 공존 규칙 (업종 무관 — 스킬로 승격할 규칙)

> **한 섹션에 스크롤 동사 1 + 유휴 동사 1 까지. 호버 동사는 그 위에 1개만 더.**

1. **동사 상한** — 섹션당 `스크롤 1 + 유휴 1 + 호버 1`. 셋을 다 채우는 섹션은 페이지 전체에서 **최대 2개**.
2. **축 배타** — 같은 축을 두 주체가 다투면 둘 다 고장난다.
   - 가로 핀 스크롤 ↔ `inertia-drag-gallery` **배타**
   - 3D 유휴 동사(`poster-cylinder` / `coverflow-ring`)는 **화면당 1개**
   - 호버 동사(`flip-expand-card` / `hover-cross-open` / `stack-fan-hover` / `tilt-3d`)도 **섹션당 1개**
3. **배경 레이어 2겹** — 기존 규칙 유지. `ambient-fold` 광원은 배경 레이어 1겹으로 센다. `aurora-mesh` 와 동시 사용 금지.
4. **폴드 무한 애니메이션 6개 이하** (실측 상한).
5. **타이밍 규칙(r2 결함 대응)** — 스크럽은 **핀 진행 60~70%에서 결과 상태에 도달**하고 나머지는 정지 상태로 감상시킨다. 트리거 `end` 가 섹션 exit 와 같으면 실패.
6. **유휴 층은 화면 밖에서 꺼진다** — `IntersectionObserver` 로 rAF/타이머 정지. 배터리를 먹는 유휴 효과는 유휴 효과가 아니다.
7. **P7 규율** — 스펙터클 예산은 **폴드와 갤러리에 집중**. 하위 섹션은 문서로 처리한다. r2 처럼 모든 섹션에 동사를 하나씩 깔지 않는다.
8. **reduced-motion 3분류** — 정지하되 남긴다 / 완성 상태로 스냅 / 제거한다. 섹션마다 어느 쪽인지 명시한다.

### 7.2 섹션별 배정

| # | 섹션 | 유휴 동사 | 호버 동사 | 스크롤 동사(기존) | 근거 |
|---|---|---|---|---|---|
| 1 | **히어로(폴드)** | **`ambient-fold`** (광원 드리프트 + 타이핑 h1 + 라이브 점멸) + **`drift-collage`** 7타일 | — | R1 줌스루 — **핀 진행 65%에서 정착** | P1·P2·P4 [A] 실측 문법. 폴드 무한 애니 = 광원1+커서1+시머1+점멸1+드리프트2 = **6개(상한)** |
| 2 | **원통 갤러리(신규)** | **`poster-cylinder`** 12장, 자동 6deg/s, 드래그+관성, 호버 감속 | (원통 자체가 호버에 감속) | **없음** — 이 섹션은 스크롤 동사 0 | 사용자 요구의 직격. **스크롤 0에서 성립하는 유일한 섹션**을 하나는 둔다 |
| 3 | **장르 스택** | — | **`stack-fan-hover`** (장르당 5장, 호버 시 팟) | R4 스택 펼침 — **65%에서 정착** | (c) "팟 하고 펼쳐지는" 요구. CSS-only 1.2KB |
| 4 | **결과물 그리드** | — | **`hover-cross-open`** (밀어내기 + 십자 프리뷰) | R6 스케일+클립 리빌 | P3 [A] — **스크롤 스크럽 대신 호버로 스펙터클을 옮긴다.** r2 의 "늦게 도착" 문제를 구조적으로 해결 |
| 5 | **가로 스트립** | — | — | R2 가로 핀 갤러리 **유지** | 규칙 2 — `inertia-drag-gallery` 와 **배타**. 핀을 택했으므로 드래그는 안 쓴다 |
| 6 | **대표작 상세** | — | **`flip-expand-card`** (클릭 → 풀 패널) | R8 매치 컷 | GSAP Flip 24.9KB 없이 WAAPI 46줄 |
| 7 | **CTA 근처** | **`ambient-fold`** 의 점멸 + 라이브 수치 재사용 | 기존 `magnetic-cursor` | R7 텍스트 breakout | P4·P6. 새 효과 추가 없음 |
| 8 | 나머지 섹션 | — | — | 없음 | **P7 — 문서로 처리.** r2 대비 스크롤 동사를 줄인다 |
| 0 | **진입** | **`entry-curtain-count`** | — | — | 최소 700ms / 최대 2.6s / 안전판. 히어로 스크럽과 동시 발화 금지(규칙 2) |

**미채택과 이유**
- `cursor-image-trail` — 히어로에 넣으면 CTA 가는 길에 이미지가 터진다(README 금기). r3 에서는 **보류**. 별도의 "생성량" 전용 섹션이 생기면 그때.
- `coverflow-ring` — `poster-cylinder` 와 3D 유휴 동사가 겹친다(규칙 2). **원통을 택했으므로 이번엔 안 쓴다.** ERP·B2B 처럼 포스터가 아니라 카드형 자산일 때의 대안으로 카탈로그에 남긴다.
- `inertia-drag-gallery` — R2 가로 핀과 축 배타.

### 7.3 예산 실측
```
GSAP core + ScrollTrigger      114.7 KB (raw min, 기존)
+ ambient-fold                   1.6
+ drift-collage                  1.3
+ poster-cylinder                3.2
+ stack-fan-hover                1.2
+ hover-cross-open               2.6
+ flip-expand-card               2.8
+ entry-curtain-count            2.7
────────────────────────────────────────
r3 총합                        ≈ 130.1 KB raw / ≈ 52 KB gzip
```
raw 로는 120KB 를 11KB 넘지만 **전송 기준(gzip 52KB)으로는 절반 이하**다.
넘긴 만큼을 상쇄할 여지도 있다 — GSAP `Flip`/`Draggable`/`Swiper` 를 하나도 안 붙였고(합 111KB 절약),
`ScrollSmoother`·`SplitText` 도 쓰지 않는다. **판정: 통과. 단, r3 이후 추가는 gzip 기준으로 관리한다.**

### 7.4 스킬화 제안 (`omd:aphrodite` / `omd:landing`)
1. **유휴 층을 필수 규칙으로.** "스크롤 0에서 살아 있는 요소가 최소 1개" 를 랜딩 검사 항목에 추가한다.
2. **타이밍 검사기.** 스크럽 트리거의 `end` 와 섹션 exit 사이 간격을 재서, 결과 상태가 뷰포트 안에서 도달하는지 판정한다(핀 진행 60~70% 기준).
3. **이미지 동사 어휘에 "유휴 동사" 추가** — 회전(원통) · 표류(콜라주) · 광원 드리프트 · 자동 전진. 스크롤 동사 9종과 별개 목록으로.
4. **reduced-motion 3분류를 산출물에 강제** — 각 효과가 정지/스냅/제거 중 무엇인지 trace 에 적는다.
5. **폴드 무한 애니메이션 6개 상한**을 린트 규칙으로.
6. Emil Kowalski 의 `/animate`·`/improve-animations` 방향(§5.2)과 동일 좌표 — **모션 품질 기준을 에이전트에 이식하는 것**이 2026년의 경쟁축이다. `omd:feel` 에 유휴/호버 축을 추가한다.
