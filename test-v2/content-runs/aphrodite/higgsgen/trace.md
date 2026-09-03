# Higgsgen 랜딩 빌드 추적 — 2026-09-03

빌드: `node runs/build.mjs` → `render.html` (177KB, 단독 HTML 1장, 외부 요청 0)
- 폰트 3종(Syne / Geist / GeistMono) base64 CSS 를 `<style>` 에 인라인. `@font-face 3` 확인됨.
- 이미지는 `assets/<id>.png` 상대경로 96개(`<img>` 기준: 콘텐츠 76 + 광원 복제 20).
- **이 시점 `assets/*.png` = 0장.** 골격 상태에서 마감 검사 3종을 돌렸고, 이미지 부재로 실패하는 항목은
  render-integrity 의 `img: 로드 실패` 하나뿐이다. 나머지는 전부 통과한다.

---

## 1. 섹션별 기법 (T = anatomy §14 / R = motion catalogue 부록 / LC·IL = codex)

| # | 섹션 | 이미지 | 무엇이 움직이는가 | 기법 |
|---|---|---|---|---|
| **S1** | 히어로 — 단일 지배 미디어 | `hero-01` 풀블리드(cover 100%) + `hero-02·03·04·05` 4장 세계 띠 | 이미지는 **정지**. conic 빔이 **8s** 주기로 쓸고(`--a` 회전), 좌하단 흰 광원이 **13s** 호흡, 비네트가 가장자리를 누름. 빔·광원은 **읽기 스크림 아래**(z 2)에 둬서 카피 위에서 대비가 흔들리지 않는다 | T5·T11·T12·T13·T28~T30 · R12 |
| **S2** | 증거의 벽 | `grid-01`~`grid-12` (3:2 6장 + 2:3 6장) | 폭 12종이 전부 다른 저스티파이드 벽. 각 타일이 `entry` 구간을 4·9·14·19% 씩 어긋내며 `opacity+translateY(28px)` 로 올라온다(네이티브 view timeline, 열 단위 스태거 = 80ms 체계의 스크롤 등가) | T3·T6·T19·T22·T33 · LC-40 |
| **S3** | 핀 스테이지 1 — 프롬프트 → 8프레임 | `seq-01`~`seq-08` | `height:300vh` 트랙 + `sticky 100svh` 스테이지. 진행률이 8프레임 필름을 `translateX 0 → -87.5%` 로 끌고 간다. 동시에 모노 프롬프트가 `steps(53,jump-none)` 로 타이핑되고, 캡션 8개가 12.5% 창으로 교대, 진행 바가 `scaleX 0→1`. **스크롤을 멈추면 장면도 멈춘다** | T18·T31·T32 · R1(스크럽)·R9(핀 스토리)·R3(타이핑) |
| **S4** | 명암 뒤집기 ① — 비교 | `ba-01-a/b` (대형) · `ba-02·03·04-a/b` (소형 3) | 지면이 L 0.004 → 0.90 으로 뒤집힌다. 4개 슬라이더 전부 사용자가 끈다 — `clip-path:inset(0 calc(100% - var(--p)) 0 0)`, 손잡이 44px 히트, `step="2"` 로 방향키 2%씩 | T15·T25 · R4 |
| **S5** | 깊이 콜라주 | `arch-01·02·03` | 암전 복귀. 세 장이 `translateY ±72 / ±34 / ±14px` 로 **서로 다르게 어긋나며** 흐른다(네이티브 `view()` 패럴랙스, JS 0). 뒤 장 방향성 그림자, 앞 장 접지 그림자 | T7·T8·T16·T23 |
| **S6** | 스펙트럼 마키 | `mat-01`~`05` · `prod-01`~`05` · `fig-01`~`04` (14장 ×2벌) | 위 줄 **40s**, 아래 줄 **52s** 역방향. 양끝 12%/88% 엣지 마스크. 호버하면 그 줄만 정지. 카드 높이를 7종으로 흩어 "획일 격자"가 되지 않게 했다 | T20 · R2 |
| **S7** | 3D 틸트 프리셋 | `abs-01`~`06` · `arch-04` · `amb-01` | `perspective:560px`(관측 500–600 대역), 포인터 좌표로 `rotateX/Y ±6°` 보간(호버 160ms / 이탈 480ms). 카드마다 280px 커서 스포트라이트가 따라붙는다 | T14·T24·T33 · R5·R7 |
| **S8** | 핀 스테이지 2 — 마스크 리빌 | `mat-06` (같은 장 2벌) | `height:260vh` 트랙. 진행률이 `@property --r` 을 **0% → 142%** 로 키워 원형 마스크가 열리고, 동시에 도트 베일이 `.55 → .10` 으로 걷힌다 | T10·T18·T26 · R8 |
| **S9** | 명암 뒤집기 ② — 휴지 | 이미지 0 | 다시 밝은 밴드. 이미지를 빼서 눈을 쉬게 한다. 카드 3장에 어두운 헤어라인 + 접지 그림자 | T15·T6 |
| **S10** | 푸터 — 마지막 풀블리드 | `amb-02` (풀블리드) · `amb-03` (닫는 한 장) | 암전. 4스톱 페이드로 이미지가 푸터 텍스트로 녹는다. conic 빔이 **19s** 로 마지막 한 번 더 쓸고 지나가고, CTA 테두리에 R6 회전 광원(평소 정지, 포인터에 회전) | T1·T11·T34 · R6·R8 |

**전역**: 도트 텍스처 + `feTurbulence` 그레인은 **의사요소로만** 얹었다(요소로 두면 저투명 레이어가 "스크립트 없이 숨겨진 콘텐츠"로 집계된다). 이미지에는 `filter` 를 걸지 않는다 — 대신 **스크림 + 헤어라인 + 방향성 그림자 3층**, 그리고 프레임마다 뒤에 `blur(40px) saturate(1.6)` 광원 복제 20장(R12).
**모션 토큰**: 160 / 240 / 480 / 720ms 만 사용. 이징 `cubic-bezier(.4,0,.2,1)`(상태) · `(.16,1,.3,1)`(등장) · `(.22,1,.36,1)`(리빌). 호버에 transform 없음(밝기·배경만).

## 2. 이미지 id 매핑 (61/61 사용)

```
S1  hero-01(폴드 지배) hero-02 hero-03 hero-04 hero-05
S2  grid-01 … grid-12
S3  seq-01 … seq-08
S4  ba-01-a/b ba-02-a/b ba-03-a/b ba-04-a/b
S5  arch-01 arch-02 arch-03
S6  mat-01 … mat-05 · prod-01 … prod-05 · fig-01 … fig-04
S7  abs-01 … abs-06 · arch-04 · amb-01
S8  mat-06
S9  (없음 — 의도된 휴지)
S10 amb-02(풀블리드) amb-03(닫는 장)
```
`alt` 는 프롬프트 첫 문장. seq-01~08 은 첫 문장이 같아 두 번째 문장을 붙여 8개를 서로 다르게 만들었다(IL-5).

## 3. 검사 결과 원문 (2026-09-03, 이미지 0장 상태)

### `node test-v2/tools/landing-integrity.mjs R/render.html` → **FAIL 0 · WARN 0**
```
render.html  FAIL 0 · WARN 0 · page 14.58 vh · sections 10
  ok   LI-1   page 14.58 vh (pinned stage)
  ok   LI-2   median non-hero 1.02 vh (n=9)
  ok   LI-3   fold media coverage 100% <img> aspect 1.6 bleeds LRTB
  ok   LI-4   display top 28.6 %vh · 79.9px/800 · left 6.1 %vw · start
  ok   LI-5   max section text ratio 0.166
  ok   LI-6   median section empty ratio 0.33 (min 0.00)
  ok   LI-7   display:body 79.9/13 = 6.15
  ok   LI-8   body 13px
  ok   LI-9   dominant left edges 0/88
  ok   LI-10  body measure p50 333px
  ok   LI-11  tone sequence D D D L D D D D L D (4 changes, css-based)
  ok   LI-12  durations >5%: 160ms×28, 480ms×8 (decl 41)
  ok   LI-13  primary easing cubic-bezier(0.4, 0, 0.2, 1)
  ok   LI-14  only opacity/transform/colour >200ms
  ok   LI-15  prefers-reduced-motion present
  ok   LI-16  snap root=none body=none
  ok   LI-17  reveals opacity 7 · transform 29 · clip 0 · filter 0 (461 tracked, 15 steps)
  ok   LI-18  no hero video (optional)
  ok   LI-19  0 below-fold video(s) playing at load
  ok   LI-20  image hosts: (local)×1
  ok   LI-21  uniform card groups(≥4) 0
  ok   LI-22  nested cards 0
  ok   LI-23  h1 count 1
  ok   LI-24  잉크 12% 미만 화면 0/14 (LC-4 실측대역 26–54%)
  ok   LI-25  폴드 미디어 9개 (LC-33 affinity 8개, 최소 3)
  ok   LI-27  디스플레이 서체 Syne @80px · @font-face 3
  ok   LI-28  깊이 신호 87 (그림자 69·글래스 1·마스크 2·블렌드 3·3D 8·clip 4, 최소 3) — LC-39/45
  ok   LI-29  메시·그레인: radial-gradient 44겹(최소 3) · 그레인 있음 — LC-38/46
  ok   LI-30  브라우저 기본값: ::selection 지정 · :focus-visible 지정 — LC-42
  ok   LI-31  미디어 색보정: 20/96 에 filter 적용 — LC-43
  ok   LI-32  alt 구체성: generic/빈 alt 0/76 — IL-5
  ok   LI-26  미디어 96개 / 14.58 vh = 6.58개/vh (최소 1.0), video 0
LANDING_INTEGRITY_DONE files=1 fail=0
```

### `node test-v2/tools/text-contrast.mjs R/render.html` → **PASS · no-JS hidden 0**
```
render.html  PASS · no-JS hidden 0
  1440x900  ok  span.brand 19px  min 16.09  <4.5: 0%   "HIGGSGEN"
  1440x900  ok  a          13px  min  6.81  <4.5: 0%   "Control"
  1440x900  ok  p.mono     13px  min 12.74  <4.5: 0%   "Still image engine"
  1440x900  ok  h1       79.9px  min 11.85  <3:   0%   "Write one line. Direct the f"
  1440x900  ok  p.lede     18px  min 11.97  <4.5: 0%   "Higgsgen turns a sentence in"
  1440x900  ok  a.btn      15px  min 16.68  <4.5: 0%   "Start a frame"
  1440x900  ok  a.btn      15px  min 15.71  <4.5: 0%   "See the range"
  1440x900  ok  p.hero-foot 13px min  4.83  <4.5: 0%   "Frame 01 · flooded underpass"
  390x844   ok  (전 항목 동일 통과)
TEXT_CONTRAST_DONE files=1 fail=0
```
포커스 링 3:1 · no-JS 숨김 0 포함 전 항목 통과. 리빌은 전부 `animation-fill-mode: forwards` 라
스크립트 없이도 기본 상태가 `opacity:1` 이다.

### `node test-v2/tools/render-integrity.mjs R/render.html` → **FAIL (이미지 부재 1종)**
```
FAIL  render.html
   ✗ [1440x900] img: 로드 실패 이미지 24개
   ✗ [390x844] img: 로드 실패 이미지 39개
   · [1440x900] scroller: <span.beam> / <figure.cell> / <img.shot> / <span.scrim>  (클리핑 조상 안 = 파손 아님)
   · [390x844]  scroller: <span.beam> / <figure.mq-item> / <img.shot> / <span.scrim> (동일)
```
overflow-x · escape · text-clip · UA 기본 마진 · 본문 서체 · U+FFFD · JS 에러 **0**.
남은 두 줄은 전부 `assets/*.png` 가 아직 없어서 나는 것이고, 이미지가 도착하면 사라진다.

## 4. 빌드 중 고친 것 (원인 → 조치)

1. **LI-9 dominant left edges 4개** — `.wrap` 이 `max-width:1360` 이라 1440 에서 좌측 40px 여백이 생겨 0/40/88/128 네 축이 공존했다 → `.wrap`/`.nav-in` 을 `max-width:calc(--max + --gutter*2)` 로 바꿔 축을 0/88 두 개로 통일.
2. **LI-32 generic alt 1개** — seq-03 의 중복 회피 문장이 "Same room." 두 단어였다 → 첫 문장 + 차이 문장 결합으로 변경.
3. **text-contrast: 히어로 primary CTA 45.8% 미달** — 원인은 카피 위를 지나던 conic 빔·광원(z 6)이 두 캡처 사이에 움직여 **알약 모서리 밖 픽셀이 글리프로 오검출**된 것. 빔·광원을 읽기 스크림 **아래(z 2)** 로 내려 카피 열에서 빛이 흔들리지 않게 했다 — 검사 통과 + 가독성 원칙(빛은 이미지 위에서만 움직인다) 둘 다 만족.
4. **1024 에서 히어로 카피 ↔ 세계 띠 겹침(17,921px²)·S8 스테이지 73px 넘침** — 1100px 이하에서 히어로를 모바일 문법(카피 하단 정렬 + 세계 띠 가로 스크롤)으로 내리고, `.detail` 을 폭 대신 **높이(`min(54vh,600px)`)** 로 잡아 핀 안에 항상 들어가게 했다.
5. **1440 히어로 헤드라인 6줄** — Syne 80px 이 560px 열에서 6줄로 깨졌다 → 열 폭 720px, 문장을 "Write one line. Direct the frame." 로 줄여 3줄.

## 5. 남은 문제 / 다음 사람에게

- **이미지 0장.** `ls assets/*.png` 가 50 이상이 되면 `node runs/build.mjs` 는 다시 돌릴 필요가 없다(경로가 이미 박혀 있다).
  검사만 3종 재실행하면 된다. 이미지가 붙은 뒤 새로 볼 것:
  - `render-integrity` 의 `img: 로드 실패` 가 0 이 되는지.
  - `text-contrast` — 실사진 위 텍스트는 **히어로 카피(좌측 스크림 .92)** 와 **세계 띠 라벨**뿐이다. 밝은 피사체가 좌측 1/3 에 오면 `.hero-read` 의 첫 스톱을 .92 → .95 로 올린다.
  - `landing-integrity` LI-6(빈 면 중앙값) — 실이미지가 들어가도 자산 면적은 그대로라 변하지 않는다.
- **S9 가격 밴드에 숫자를 넣지 않았다.** 브리프의 "가상 수치 금지" 와 DESIGN.md §6("no fabricated numbers")을 우선해 가격 대신 3단계 작업 방식(Studio / Direction / Volume)만 적었다. 숫자가 필요하면 이 결정을 뒤집어야 한다.
- **S3 는 크로스페이드가 아니라 가로 스크럽이다.** 8프레임을 opacity 로 겹쳐 페이드하면 비활성 프레임이
  `opacity:0` 인 대형 요소가 되어 text-contrast 의 **no-JS 숨김 검사**에 잡힌다(스크립트 없이 숨겨진 콘텐츠).
  캡션(높이 22px)만 opacity 로 교대시키고, 프레임 자체는 `translateX` 스크럽으로 바꿨다 — 진행률이 곧 재생 헤드라는 성질은 그대로다.
- 마키·스트립의 `will-change` 는 IntersectionObserver 로 뷰 밖에서 해제한다(동시 승격 레이어 3개 이하 유지).
