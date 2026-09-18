# coverflow-ring — 소수 인덱스 하나가 전체 배치를 만든다

| | |
|---|---|
| 계열 | 유휴(idle) · 3D |
| CSS-only | 아니오 — JS 58줄 |
| 인라인 크기 | CSS 38줄 + JS 58줄 / 약 3.0KB |
| 다크/라이트 | 둘 다 (라이트는 반사 알파를 낮춘다) |
| 라이선스 | 이 구현은 oh-my-design 자작, MIT. 외부 의존 0 |
| 난이도 | 중 |

## 핵심 — Swiper coverflow 를 인라인하지 않는 이유
필요한 것은 **소수 인덱스 `idx` 하나**다. 각 아이템의 위치는 전부 `o = i - idx` 의 함수다:
`x = o·gap` · `rotateY = -clamp(o,-1,1)·ang` · `z = -|o|·depth` · `scale`·`brightness` 감쇠.
`idx` 를 목표값으로 임계 감쇠시키면 전환이 통째로 따라온다. 58줄이면 끝난다 — 슬라이더 라이브러리는
페이지네이션·루프·a11y·터치 제스처까지 들고 오지만 우리에게 필요한 건 이 식이다.

## 유휴 층으로서의 조건
- **자동 전진**(기본 3.2s)이 있어야 스크롤 0 에서 살아 있다. 이것이 없으면 그냥 정적 갤러리다.
- **호버하면 멈춘다.** 사람이 보려는 순간에 넘어가는 것은 적대적이다.
- 화면 밖에서는 `IntersectionObserver` 로 타이머와 rAF 를 모두 끈다.

## 성능 조건
- `will-change: transform` 은 아이템에만(카드 내부에 중첩 금지). 7~9장 권장, 12장 초과 시 가장자리 3장 이후는 `visibility:hidden` 을 검토한다.
- `-webkit-box-reflect` 는 합성 레이어를 하나 더 만든다. 12장 이상이면 반사를 끈다.
- `filter: brightness()` 는 페인트를 유발한다. 명암 단계를 3단계로 포화시켜(`Math.min(ad,3)`) 값 변화를 줄였다.

## 금기
- `gap ≥ 커버 폭` 금지. 겹치지 않으면 커버플로우가 아니라 그냥 줄이다.
- 접힘 각 65deg 초과 금지 — 측면 커버가 선으로 수렴해 무엇인지 못 읽는다.
- 자동 전진 2초 미만 금지. 읽기 전에 넘어간다.
- 한 화면에 poster-cylinder 와 함께 쓰지 않는다. 3D 유휴 동사는 화면당 1개.

## 모바일 / 리듀스드 모션
- `touch-action: pan-y` — 세로 스크롤은 페이지, 가로 드래그만 컴포넌트.
- `prefers-reduced-motion` → 자동 전진 없음, 전환 transition 제거. 클릭/키보드 이동은 즉시 점프로 남는다.
- `tabIndex=0` + ← → 키 지원. 포인터 없이도 조작된다.

## 이미지 슬롯
`.fx-cf__card--ph` 색면을 `<img>` 로 교체한다. Higgsgen: 대표 컷 7장.

## 파라미터
`--fx-cf-w/h` · `--fx-cf-gap` · `--fx-cf-ang` · `--fx-cf-depth` · `--fx-cf-persp` · `mountCoverflow(root,{autoMs})`
