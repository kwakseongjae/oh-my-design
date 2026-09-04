# wide-drum — 전폭 포스터 띠. 아무것도 하지 않아도 돈다

| | |
|---|---|
| 계열 | 유휴(idle) · 이미지 |
| CSS-only | 아니오 — JS 81줄 (JS 없으면 정적 가로 띠로 남는다) |
| 인라인 크기 | CSS 73줄 + JS 81줄 / **gzip 3.1KB** (raw 6.1KB) |
| 다크/라이트 | 둘 다 — 통 벽면 명암(`::after`)이 어두운 색이므로 라이트에서는 `opacity` 계수를 .5 → .28 로 낮춘다 |
| 라이선스 | 이 구현은 oh-my-design 자작, MIT. 외부 의존 0 |
| 난이도 | 중 |

## 계보와 차이
- **Magic UI `Marquee`** (https://magicui.design/docs/components/marquee, MIT) — `--duration` CSS 변수 + `repeat`(기본 4) 복제로 도는 CSS 마퀴. `pauseOnHover` / `reverse` / `vertical` 프롭이 있다. **문서 기준이며 소스 대조는 하지 않았다.** `prefers-reduced-motion` 언급은 문서에 없다.
- **Aceternity `3D Marquee`** (https://ui.aceternity.com/components/3d-marquee) — 이미지를 4열로 쪼개 유휴 자동 순환. Framer Motion 필요, 라이선스는 https://ui.aceternity.com/licence.
- **React Bits `CircularGallery` / `FlyingPosters`** (https://reactbits.dev/components/circular-gallery, https://reactbits.dev/components/flying-posters) — 같은 목표(큰 이미지 · 유휴)를 **WebGL(ogl)** 로 푼다. 라이선스는 **MIT + Commons Clause**(https://github.com/DavidHDev/react-bits).

우리가 다시 쓴 이유는 셋이다.
1. **CSS 마퀴는 잡을 수 없다.** `animation` 으로 도는 트랙은 드래그 중간에 이어받을 수 없어, 관성을 붙이려면 결국 rAF 로 옮겨야 한다.
2. **WebGL 은 예산 밖이다.** ogl 최소 빌드도 수십 KB고, 렌더 시 네트워크 요청 0 · 단일 HTML 제약에서 인라인 부담이 크다. 필요한 것은 셰이더가 아니라 `translate3d` 하나다.
3. **크기가 본론이다.** 위 라이브러리들의 기본값은 타일이 작다. 여기서는 `--fx-drum-h: 56vh` 가 기본이고, **40vh 미만이면 이 효과를 쓸 이유가 없다**고 못 박았다.

## 핵심 — 프레임당 transform 은 1개다
트랙 전체를 `translate3d(-off, 0, 0)` 로 밀고, `off = x mod setW` 로 감는다.
`setW` 는 **원본 묶음 한 세트의 폭**이므로, 원본을 컨테이너 2배가 될 때까지 복제해 두면 이음매가 보이지 않는다.

통(drum)으로 읽히게 하는 것은 두 가지다:
- 타일별 `--d`(중앙 기준 −1..+1) → `rotateY(-d · 15deg)`. **평면 띠와 통을 가르는 것이 이 각이다.**
- `::after` 검은 면의 `opacity: |d| · .5`. 가장자리가 어두워져야 벽면으로 읽힌다.

`--d` 는 매 프레임 계산하지만 **레이아웃을 읽지 않는다** — `offsetLeft`/`offsetWidth` 는 리사이즈 때 한 번만 캐시한다.

## 호버는 관문이 아니다
호버로 열리는 것은 없다. 호버가 하는 일은 **멈추는 것**뿐이다 —
보려고 마우스를 올린 사람 앞에서 이미지가 넘어가는 것은 적대적이다.
마우스가 나가면 다시 돈다. 터치 기기에서는 호버 자체가 없고, **잃는 것도 없다.**

## 금기
- **타일 높이 40vh 미만 금지.** 그러면 이 효과의 존재 이유가 사라진다. 56vh 가 기본, 34vh 는 보조 띠일 때만.
- 속도 120px/s 초과 금지. 읽을 수 없는 흐름은 장식이 아니라 소음이다. 62px/s 가 기본(타일 하나가 지나가는 데 약 6초).
- 타일 원본 12장 초과 금지 — 복제 후 24~36장이 되고 레이어 예산을 넘긴다.
- 띠 안에 **읽어야 하는 본문**을 넣지 않는다. 라벨 한 줄까지.
- 같은 화면에 `poster-cylinder` / `coverflow-ring` 과 함께 쓰지 않는다. **3D 유휴 동사는 화면당 1개.**
- 같은 섹션에 가로 핀 스크롤(`scroll-gsap` R2) 이나 `inertia-drag-gallery` 를 두지 않는다. **가로 축을 두 주체가 다투면 둘 다 고장난다.**
- `touch-action: pan-y` 를 지우지 않는다. 지우면 모바일 세로 스크롤이 잠긴다.
- `overflow: clip` 을 `visible` 로 바꾸지 않는다. 전폭 띠는 그 순간 가로 스크롤바를 만든다.

## 성능 조건
- 프레임당 쓰기: 트랙 transform 1 + 화면 안 타일의 `--d`(보통 4~6개). 화면 밖 타일은 `visibility: hidden` 이고 **상태가 바뀔 때만** 쓴다.
- `will-change: transform` 은 **트랙에만**. 타일마다 걸면 레이어 24장이 된다.
- `backface-visibility: hidden` — 뒷면 픽셀 비용 제거.
- `IntersectionObserver` 로 화면 밖에서 rAF 정지.
- 명암은 `filter: brightness` 가 아니라 **`::after` 의 opacity** 다. 페인트가 아니라 합성이다.

## 모바일 / 리듀스드 모션
- ≤720px: 타일 44vh, 접힘 각 10deg. 여전히 화면의 절반 가까이를 차지한다.
- `touch-action: pan-y` — 세로 스크롤은 페이지, 가로 드래그만 컴포넌트.
- `prefers-reduced-motion: reduce` → **① 정지하되 남긴다.** 자동 속도 0, 접힘 각 8deg. **드래그는 살아 있다** — 사용자가 원하면 볼 수 있다.

## 이미지 슬롯
`.fx-drum__ph` → `<img src="…" alt="">`. 원본 7~12장 권장(복제는 JS 가 한다).
세로 비율 `--fx-drum-ar` 기본 .74(3:4 포스터). 가로 컷이면 1.5.

## 검증 (헤드리스 크로미움 1440×900, 2026-09-04)
- 콘솔 에러 **0** · 가로 오버플로 **0px**
- 입력 0 상태로 0.9초 → 트랙이 **55.9px** 이동(≈62px/s, 설정값과 일치)
- 타일 높이 **57.7vh** · 띠 폭 **100vw** · 복제 후 타일 24장
- `prefers-reduced-motion: reduce` → 0.9초 동안 이동 **0px**, 에러 0, 타일 크기 유지
- 스크린샷: `preview.jpg`

## 파라미터
`--fx-drum-h`(타일 높이) · `--fx-drum-ar` · `--fx-drum-gap` · `--fx-drum-bend`(0deg = 평면 띠) · `--fx-drum-persp` ·
`data-fx-speed`(px/s) · `fxLib.mountDrum(root, { speed })`
