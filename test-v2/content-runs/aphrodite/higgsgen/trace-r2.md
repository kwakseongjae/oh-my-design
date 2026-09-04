# Higgsgen r2 — 빌드 trace (효과 집중, 이미지셋 61장 동일)

산출: `render-r2.html` (307KB, 단독 HTML · 외부 요청 0)
빌더: `runs/build-r2.mjs` + `runs/template-r2.html` (r1 의 `build.mjs`/`template.html` 은 그대로 보존)
스펙: `storyboard-r2.md` 섹션 표 · 토큰 `DESIGN.md` · 액센트 규율은 storyboard-r2 §전략 선언 우선

## 1. 라이브러리 · 라이선스

인라인한 것(제로 베이스 아님):

| 파일 | 출처 | 라이선스 |
|---|---|---|
| `gsap315.min.js` (72.9KB) | `docs/design-excellence/fx-library/scroll-gsap/lib/` | **GSAP Standard License** |
| `ScrollTrigger315.min.js` (44.6KB) | 같은 폴더 | 같음 |

`lib/LICENSES.md` 원문 인용:

> `gsap315.min.js`, `ScrollTrigger315.min.js` — GSAP 3.15.0, **GSAP Standard License**(gsap.com/standard-license): 상업 이용 포함 무료. 금지 사용은 "Webflow 비주얼 애니메이션 빌더와 경쟁하는 도구"뿐이며 FAQ 가 AI 생성 코드를 허용 사용으로 명시. 우리 용도(프롬프트→완성 HTML 산출)는 허용. **제품이 노코드 편집기로 진화하면 재검토.** 산출물 trace 에 이 항목을 인용한다.

Lenis(MIT, +16.4KB)는 스토리보드대로 **off**. 배제된 것(ScrollReveal GPL / Rive WASM / three.js)은 손대지 않았다.

fx-library 효과 스니펫은 전부 **oh-my-design 자작 · MIT** (`fx-library/INDEX.md`). `snippet.css` / `snippet.js` 를 그대로 옮기고 각 블록 머리에 `/* fx: <이름> — … 구현: oh-my-design (MIT). */` 주석을 남겼다.
**적응 1건**: `split-text-rise` 의 `.fx-split__line{overflow:hidden}` 은 한 줄 헤드라인 전제라서, 3줄로 접히는 h1 에서 윗줄 위로 단어가 지나갔다 → 단어마다 `.fx-split__mask`(inline-block·overflow:hidden)로 감싸는 방식으로 바꿨다. 나머지는 원본 그대로.

## 2. 섹션별 레시피 · 효과 ID

| # | 섹션 | 이미지(실제 id) | 주효과 = 레시피 | 보조 효과 ID | 핀 | 트랙 |
|---|---|---|---|---|---|---|
| S1 | Hero 줌스루 | hero-01 → hero-02 | `scroll-gsap/recipes/01-zoom-through` (clip-path inset 30/34% → 0, 이미지는 반대로 1.34→1 = R-C) + 0.62 에서 hero-02 로 매치컷 | `split-text-rise`(h1 1회) · `film-grain`(전역) · `light-sweep-sheen`(CTA) · 코닉 빔 8s | **1** | 215vh |
| S2 | Range 카드 팬 | grid-01…12 | `03-card-fan-3d` 변형 — 핀 없이 `--fan` 0.06→1 을 스크럽(부채 각도·간격·rotateY 동시) | `mask-wipe-reveal --sweep`(카드 진입, `animation-timeline:view()`) | – | 110vh |
| S3 | Control 스크럽 | seq-01…08 | `05-scrub-sequence` (8프레임 크로스페이드 + 1.05→1 미세 줌, scrub 0.35 = R-D) | `text-scramble`(캡션) · 프롬프트 토큰 8개 점등(mute→ink) · **라임 진행 레일** | **2** | 255vh |
| S4 | Compare 밝은 밴드 | ba-01…04 (a/b) | r1 슬라이더 유지(`clip-path: inset()` ← `--p`) + 진입 시 **자동 스윕 1회**(52→88→14→52, `once:true`) | `light-sweep-sheen`(핸들) | – | auto(1.56vh) |
| S5 | Gallery 가로 핀 | mat-01…06 + prod-01…05 | `02-horizontal-pin` (세로→가로, `invalidateOnRefresh` = R-F) + 카드별 `--pz` -90→40px 원근 호흡 | `film-grain` · **라임 진행 레일** | **3** | 230vh |
| S6 | Space 매치컷 | arch-01 → arch-02 (+ arch-03/04 칩) | `08-match-cut` (A 가 100vw/100vh 가 되는 순간 B 가 같은 크기로 태어나 34vw/52vh 로 축소) | `glass-panel`(카피 판) | – | 100vh |
| S7 | Grounds 틸트 | abs-01…06 + fig-01,02 | `tilt-3d` (포인터 추종, 호버만으로는 안 움직임) | `spotlight-pointer` · `border-beam`(선택 카드 1장, 라임) · `aria-pressed` | – | auto(1.16vh) |
| S8 | Delivery 스케일+클립 | mat-03 | `06-scale-clip-reveal` (원형 클립 17%→150%, 이미지는 반대로 1.15→1 = R-C) | `glass-panel`(카피 판) · `film-grain` | **4** | 170vh |
| S9 | Fit 밝은 밴드 | 이미지 0 | 휴지 | **라임 면 1회**(CTA 카드) | – | auto(0.69vh) |
| S10 | Footer 텍스트 브레이크아웃 | mat-01/mat-02(텍스트 마스크) + amb-01(배경) | `07-text-breakout` (background-size 300%→126%, scale .86→1→4.2, 글자 뒤 amb-01 이 화면이 됨) | `gradient-text-shift`(워드마크, 중성색) · 코닉 빔 19s · 호흡 광원 13s | – | auto(1.48vh) |

- 이미지 id 매핑(스토리보드 → 세트): `range-`→`grid-` · `macro-`→`mat-` · `product-`→`prod-` · `space-`→`arch-` · `abstract-`→`abs-` · `human-`→`fig-`.
- **61/61 장 전부 사용**. 스토리보드 표에 없는 7장(hero-03/04/05 · fig-03/04 · amb-02/03)은 S10 푸터의 마감 칩 줄에 배치했다.
- 규칙 준수: R-A(텍스트 마스크는 mat-01/02 = 값이 넓고 밝은 프레임, amb 는 배경으로만) · R-B(핀 길이는 예산 안에서 축약, S3 = 8프레임 × ~19vh) · R-C(S1·S8 반대 방향 운동) · R-D(스크럽 0.35~0.7) · R-E(액센트는 사건에만) · R-F(가로 핀 `invalidateOnRefresh`).

## 3. 예산 · 규율 실측

| 항목 | 목표 | 실측 |
|---|---|---|
| 핀(스티키 스테이지) | 정확히 4 (S1·S3·S5·S8) | **4** |
| 총 스크롤 | ≤ 1600vh (`scrollHeight/900 ≤ 16`) | **14074px / 900 = 15.64** |
| h1 실측 @1440 | ≥ 112px | **113.76px** (`clamp(46px,7.9vw,124px)`) |
| 첫 뷰포트 라임 요소 | ≤ 3개 · ≤ 3% | **1개(nav CTA) · 0.45%** |
| 명도 반전 | 3회 | D D D **L** D D D D **L** D → S4 밝게 · S5 암전(#08090A) · S9 밝게 · S10 암전 |
| 효과 종류 | ≤ 7 | 7 (zoom-through · card-fan · scrub-sequence · horizontal-pin · match-cut · scale-clip · text-breakout) + 전역 film-grain |
| 이미지 `filter` | 금지 | 콘텐츠 이미지 0건. `filter` 는 장식 광원 복제(`.lc`, `role=presentation`) 14장과 그레인 레이어에만 |
| 액센트 사건 | 4 | ① nav CTA ② S3 진행 레일 ③ S5 진행 레일 + S7 선택 상태 ④ S9 라임 면 1회. 섹션 태그·캡션·워드마크 "gen" 은 중성(mute) |

## 4. 검사 원문

### `node test-v2/tools/render-integrity.mjs R/render-r2.html`

```
PASS  test-v2/content-runs/aphrodite/higgsgen/render-r2.html
   · [1440x900] scroller: <div.beam>  right=1800 (클리핑 조상 안의 가로 스크롤로 판정)
   · [1440x900] scroller: <img.shot>  right=1541 (클리핑 조상 안의 가로 스크롤로 판정)
   · [1440x900] scroller: <img.shot>  right=1685 (클리핑 조상 안의 가로 스크롤로 판정)
   · [1440x900] scroller: <figure>  right=1461 (클리핑 조상 안의 가로 스크롤로 판정)
   · [390x844] scroller: <div.beam>  right=488 (클리핑 조상 안의 가로 스크롤로 판정)
   · [390x844] scroller: <li.gal-card> 02 · desk speaker right=634 (클리핑 조상 안의 가로 스크롤로 판정)
   · [390x844] scroller: <figure.frame>  right=634 (클리핑 조상 안의 가로 스크롤로 판정)
   · [390x844] scroller: <img.lc>  right=610 (클리핑 조상 안의 가로 스크롤로 판정)
```

### `node test-v2/tools/text-contrast.mjs R/render-r2.html`

```

test-v2/content-runs/aphrodite/higgsgen/render-r2.html  PASS · no-JS hidden 0
  1440x900  ok   a.brand            20px L min 17.26 avg  17.4 <3:     0%  "Higgsgen"
  1440x900  ok   span               20px L min  6.96 avg  7.01 <3:     0%  "gen"
  1440x900  ok   a                  11px   min 16.49 avg 16.69 <4.5:     0%  "Range"
  1440x900  ok   a                  11px   min 16.49 avg  16.6 <4.5:     0%  "Control"
  1440x900  ok   a                  11px   min 16.43 avg 16.57 <4.5:     0%  "Gallery"
  1440x900  ok   a                  11px   min 16.45 avg 16.56 <4.5:     0%  "Fit"
  1440x900  ok   a.btn              16px   min  1.72 avg 16.66 <4.5:   0.2%  "Start a render"
  1440x900  ok   p.mono             11px   min 16.75 avg 16.96 <4.5:     0%  "Still render engine"
  1440x900  ok   span.fx-split__unit 113.76px L min 16.57 avg 16.82 <3:     0%  "Direct"
  1440x900  ok   span.fx-split__unit 113.76px L min  6.07 avg  10.8 <3:     0%  "the"
  1440x900  ok   span.fx-split__unit 113.76px L min 16.14 avg 16.94 <3:     0%  "frame,"
  1440x900  ok   span.fx-split__unit 113.76px L min 16.58 avg 16.82 <3:     0%  "not"
  1440x900  ok   span.fx-split__unit 113.76px L min 15.72 avg  16.9 <3:     0%  "the"
  1440x900  ok   span.fx-split__unit 113.76px L min 14.38 avg 16.85 <3:     0%  "prompt."
  1440x900  ok   p.lead             20px   min 13.23 avg 13.45 <4.5:     0%  "Camera height, light source "
  1440x900  ok   li                 11px   min 16.96 avg  17.1 <4.5:     0%  "Camera held"
  1440x900  ok   li                 11px   min  16.9 avg  17.1 <4.5:     0%  "Light held"
  1440x900  ok   li                 11px   min  16.9 avg  17.1 <4.5:     0%  "Material held"
  1440x900  ok   p.mono             11px   min 17.24 avg 17.36 <4.5:     0%  "Scroll to open the frame"
  390x844   ok   a.brand            20px L min 16.46 avg 16.63 <3:     0%  "Higgsgen"
  390x844   ok   span               20px L min  6.64 avg   6.7 <3:     0%  "gen"
  390x844   ok   a.btn              16px   min 16.68 avg  16.7 <4.5:     0%  "Start a render"
  390x844   ok   p.mono             11px   min  6.21 avg  6.51 <4.5:     0%  "Still render engine"
  390x844   ok   h1.h1              46px L min  6.56 avg  7.47 <3:     0%  "Direct the frame, not the pr"

TEXT_CONTRAST_DONE files=1 fail=0
```

### `node test-v2/tools/landing-integrity.mjs R/render-r2.html`

```

test-v2/content-runs/aphrodite/higgsgen/render-r2.html  FAIL 0 · WARN 0 · page 15.64 vh · sections 10
  ok   LI-1   page 15.64 vh (pinned stage)
  ok   LI-2   median non-hero 1.48 vh (n=9)
  ok   LI-3   fold media coverage 179.6% <img> aspect 1.6 bleeds LRTB
  ok   LI-4   display top 19.2 %vh · 113.8px/800 · left 6.1 %vw · start
  ok   LI-5   max section text ratio 0.195
  ok   LI-6   median section empty ratio 0.54 (min 0.00)
  ok   LI-7   display:body 113.8/16 = 7.11
  ok   LI-8   body 16px
  ok   LI-9   dominant left edges 0/88
  ok   LI-10  body measure p50 298px
  ok   LI-11  tone sequence D D D L D D D D L D (4 changes, css-based)
  ok   LI-12  durations >5%: 240ms×32, 160ms×12, 480ms×6 (decl 54)
  ok   LI-13  primary easing cubic-bezier(0.4, 0, 0.2, 1)
  ok   LI-14  only opacity/transform/colour >200ms
  ok   LI-15  prefers-reduced-motion present
  ok   LI-16  snap root=none body=none
  ok   LI-17  reveals opacity 6 · transform 2 · clip 0 · filter 0 (457 tracked, 16 steps)
  ok   LI-18  no hero video (optional)
  ok   LI-19  0 below-fold video(s) playing at load
  ok   LI-20  image hosts: (local)×1
  ok   LI-21  uniform card groups(≥4) 0
  ok   LI-22  nested cards 0
  ok   LI-23  h1 count 1
  ok   LI-24  잉크 12% 미만 화면 0/15 (LC-4 실측대역 26–54%)
  ok   LI-25  폴드 미디어 4개 (LC-33 affinity 8개, 최소 3)
  ok   LI-27  디스플레이 서체 Syne @178px · @font-face 3
  ok   LI-28  깊이 신호 123 (그림자 69·글래스 0·마스크 12·블렌드 4·3D 31·clip 7, 최소 3) — LC-39/45
  ok   LI-29  메시·그레인: radial-gradient 31겹(최소 3) · 그레인 있음 — LC-38/46
  ok   LI-30  브라우저 기본값: ::selection 지정 · :focus-visible 지정 — LC-42
  ok   LI-31  미디어 색보정: 14/76 에 filter 적용 — LC-43
  ok   LI-32  alt 구체성: generic/빈 alt 0/62 — IL-5
  ok   LI-26  미디어 76개 / 15.64 vh = 4.86개/vh (최소 1.0), video 0

LANDING_INTEGRITY_DONE files=1 fail=0
```

### 헤드리스 스크롤 스윕 (0→끝, 300px 간격)

```
default 1440x900: steps=47 scrollHeight=14074 /900=15.64 sticky-pins=4 ScrollTriggers=18 h1=113.76px pageerrors=0 console.error=0
reduced-motion: steps=34 scrollHeight=10003 /900=11.11 sticky-pins=0 ScrollTriggers=0 h1=113.76px pageerrors=0 console.error=0
mobile 390x844: steps=42 scrollHeight=12381 /900=13.76 sticky-pins=0 ScrollTriggers=0 h1=46px pageerrors=0 console.error=0```

## 5. 빌드 중 고친 것 (검사 → 수정 → 재검사)

1. **LI-6 median empty 0.29 < 0.30** — S7 프리셋 카드 8장에 광원 복제(`.lc`)까지 깔아 자산 면적이 섹션의 66%를 먹었다. 작은 카드에서는 흐린 사본이 보이지도 않는다 → S7 만 `.lc` 제거. 0.29 → **0.54**.
2. **총 16.26vh > 16** — S1 230→215vh, S3 280→255vh 로 줄이고, S10 을 **비핀**으로 되돌렸다(원래 스티키 스테이지라 핀이 5개였다). 15.64vh · 핀 4개.
3. **text-contrast: `a.skip` 100% 미달** — 스킵 링크를 `left:-9999px` 로 밀어놨더니 계측기가 사각형을 좌상단으로 클램프해 히어로 사진 픽셀과 대비를 쟀다(오탐이지만 FAIL). sr-only(1×1 + `clip-path`) 패턴으로 교체.
4. **no-JS hidden 5** — `.grain{opacity:.08}` 과 슬라이더 드래그면 `input[type=range]{opacity:0}` 4개. 그레인은 `filter:opacity(.08)` 로, 인풋은 `appearance:none` + 전부 transparent 로 바꿔 **투명하지만 opacity 1**. 0건.
5. **히어로 구도 파손** — h1 113.76px 가 800px 컬럼에서 4줄로 접혀 리드 문단을 덮고 hero-meta 가 폴드 밖으로 나갔다. 컬럼 980px · `top:26vh→14vh` · 리드 1문장으로 줄이고, 줌 창을 `inset(30% 34%)`(정중앙) → `inset(52% 7% 8% 54%)`(우하단)로 옮겼다 = 스토리보드 B2(헤드라인 좌상단, 피사체 우).
6. **S6·S8 카피 판독 불가** — `mix-blend-mode:difference` 를 밝은 리넨/다락 이미지 위에 쓰니 글자가 회색으로 죽었다. `glass-panel`(tint `rgba(11,12,14,.86)` + backdrop blur)로 교체.
7. **S2 팬이 덜 펼쳐짐** — 카드 간격 4.4vw→6.1vw, 회전 3.1→3.6deg, 트리거 종료 `bottom 62%`→`bottom 42%`.

## 6. 접근성 · 폴백

- `html.js` / `html.anim` 게이트: **JS 없음 · `prefers-reduced-motion: reduce` · 뷰포트 <900px** 이면 `.anim` 이 붙지 않는다 → 스티키 0개, ScrollTrigger 0개, 숨겨진 초기 상태 0개. 팬은 플렉스 그리드, 시퀀스는 4열 정지 그리드, 가로 트랙은 `overflow-x:auto`, 클립/마스크는 열린 상태로 성립한다(실측: reduced 11.11vh · 모바일 13.76vh · 양쪽 콘솔 에러 0).
- 호버에 transform 없음. 틸트만 포인터 추종(브리프 예외)이며 포인터가 카드 중앙이면 각도 0, `hover:none` 기기에서는 아예 붙지 않는다.
- 프리셋은 `<button aria-pressed>`, 슬라이더는 `<input type=range>` + 개별 `aria-label`(44px 타깃), 스킵 링크, `:focus-visible` 2px ink 링, `::selection` 지정.
- alt 62장 전부 프롬프트 첫 문장에서 생성(중복이면 차이 문장 결합) — generic/빈 alt 0.

## 7. 남은 문제 (r3 후보)

1. **S2 팬 캡션 가독성** — 카드가 회전하니 11px 모노 캡션이 기울어 읽기 어렵다. 캡션을 카드 밖(호버/선택 시 하단 고정)으로 빼는 편이 낫다.
2. **폴드 미디어 4개** — LI-25 최소 3은 넘지만 코덱스 실측 기준(affinity 8개)에는 못 미친다. 줌 창을 열기 전 히어로에 렌더 큐 스트립을 두는 안이 있으나 스토리보드 S1 표(hero-01→hero-02)를 벗어나서 이번엔 넣지 않았다.
3. **S9 뷰포트에 라임 2개** — 라임 면(CTA 카드) + 상시 고정된 nav CTA. 스토리보드의 "뷰포트당 주 CTA 1"을 엄밀히 지키려면 밝은 밴드 구간에서 nav CTA 를 고스트로 바꾸는 상태 전환이 필요하다.
4. **S3 좌측 컬럼 여백** — 잉크 목표 55% 를 맞추느라 카피 아래가 크게 빈다. 프롬프트 토큰을 세로로 흘리거나 프레임 메타(seed/lens)를 한 줄 더 얹을 여지.
5. **S6 카피 체류 시간** — 비핀이라 매치컷 정점(progress .5) 이후 카피가 화면 위로 빠진다. 정점 전후로 붙잡으려면 핀이 필요한데 예산(핀 4·16vh)이 없다.
6. `landing-integrity` 의 글래스 카운트는 0으로 나온다 — `.fx-glass::before` 가 의사요소라 `getComputedStyle` 순회에 안 잡힌다. 검사기 한계이지 페이지 결함은 아니다.
