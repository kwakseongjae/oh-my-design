# 레퍼런스 코퍼스 INDEX

> 캡처: `site-teardown.mjs` · 2차 분석: `corpus-analyze.mjs` (DOM/CSS 지문 + 번들 본문 지문).
> 학습 전용 — 남의 코드·에셋은 산출물에 싣지 않는다(`docs/design-excellence/replica-lab.md` §1).
> 생성: 2026-09-05 03:50

## 표

| id | 스크롤 | 길이 vh | 라이브러리 | CSS | JS | 이미지 | 영상(재생) | 키프레임 | 무한애니 | 캔버스(드로) | rAF | IO |
|---|---|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| **activetheory** | native | 1 | — | 1KB | 708KB (11) | 0 · 187KB | 0(0) · 0KB | 1 | 0 | 0(0) | 0 | 0 |
| **apple-iphone** | native | 9.7 | three | 1203KB | 322KB (11) | 110 · 242KB | 1(0) · 0KB | 35 | 0 | 0(2) | 303 | 0 |
| **basement** | native | 7.5 | next | 122KB | 912KB (67) | 40 · 1908KB | 0(0) · 1029KB | 12 | 38 | 2(19128) | 3 | 1 |
| **cosmos** | native | 6.9 | next | 321KB | 12KB (125) | 200 · 134KB | 1(0) · 0KB | 27 | 5 | 2(0) | 5 | 16 |
| **higgsfield** | transform-container | 13.6 | framer-motion | 48KB | 554KB (665) | 200 · 17588KB | 6(0) · 112038KB | 37 | 15 | 0(0) | 23 | 6 |
| **linear** | native | 11.1 | next | 304KB | 0KB (334) | 39 · 71KB | 0(0) · 0KB | 199 | 108 | 0(0) | 1 | 3 |
| **luma** | native | 9.9 | next | 206KB | 1077KB (60) | 38 · 106KB | 2(1) · 30533KB | 6 | 1 | 0(3) | 0 | 4 |
| **midjourney** | native | 2.6 | — | 385KB | 347KB (10) | 8 · 13156KB | 0(0) · 0KB | 20 | 0 | 1(1132) | 1 | 0 |
| **open-design** | native | 14.3 | — | 145KB | 170KB (6) | 44 · 563KB | 1(0) · 0KB | 11 | 3 | 1(0) | 0 | 9 |
| **runway** | native | 5.7 | next · gsap+ScrollTrigger · gsap ScrollSmoother(유료 Club) · gsap | 193KB | 1052KB (105) | 23 · 59165KB | 0(0) · 0KB | 4 | 0 | 0(0) | 8 | 2 |
| **tasteskill** | native | 10 | next · framer-motion | 103KB | 0KB (16) | 87 · 1192KB | 0(0) · 0KB | 9 | 1 | 0(0) | 2 | 2 |

## 열 읽는 법
- **스크롤**: `native` = 브라우저 기본, `transform-container` = 컨테이너를 transform 으로 밀어 스무스 스크롤, `custom-wheel` = 휠을 가로채 자체 구현.
- **무한애니**: 무입력 상태에서 `iterations: Infinity` 로 도는 WAAPI/CSS 애니메이션 수. "누르지 않아도 살아 있는가"의 1차 지표.
- **캔버스(드로)**: 캔버스 개수와 캡처 구간의 draw 호출 수. 드로가 크면 WebGL/2D 로 매 프레임 그리는 화면이다.
- **rAF**: 등록된 rAF 콜백 수. 상시 루프의 존재 신호.

## 원자료
사이트마다 `<id>/` 에 `source.html`(원본 응답) · `dom.html`(렌더 후) · `styles/all.css` · `scripts.json` · `assets.json` · `runtime.json` · `analysis.json` · `fold.jpg` · `mid.jpg`.
