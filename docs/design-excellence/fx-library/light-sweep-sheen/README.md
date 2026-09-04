# light-sweep-sheen — 한 번 지나가는 정반사

| | |
|---|---|
| 계열 | 빛 |
| CSS-only | 예 (JS 0줄) |
| 인라인 크기 | 약 18줄 / 0.9KB |
| 다크/라이트 | 둘 다 — 다크는 흰색 알파 .5, **라이트는 흰색 알파를 거의 1.0 으로 올리고 두 번째 스톱을 브랜드 색으로** |
| 라이선스 | 이 구현은 oh-my-design 자작, MIT |
| 난이도 | 하 |

## 무엇인가
좁은 선형 그라디언트 띠를 요소 밖에서 밖으로 한 번 통과시킨다. 실제 재질에서 광원이 스칠 때
생기는 정반사(specular highlight)의 최소 모형.

## 왜 있는가 — "도는 빔"의 대체재
회전 conic 빔(=지하철 조명)은 **끝나지 않는다**. 끝나지 않는 모션은 3초 뒤부터 배경 소음이 되고,
사용자는 그것을 "생동감"이 아니라 "가만히 안 있는 페이지"로 읽는다.
sheen 은 사건(호버 / 뷰포트 진입 / 상태 변화)에 묶여 있어 **의미를 전달한 뒤 사라진다.**
같은 빛 어휘를 쓰면서 소음이 되지 않는 것이 핵심.

## 트리거 3종
1. `.fx-sheen--hover` — 호버 시 1회
2. `.fx-sheen--enter` — 스크롤로 화면에 들어오는 동안 (`animation-timeline: view()`)
3. `[data-fx-sheen="run"]` — JS/상태 변화로 직접 켜기 (예: 결제 성공, 복사 완료)

## 언제 쓰나
- 주요 CTA — 호버 시 1회 (클릭 가능하다는 물성 신호)
- 가격표 추천 플랜이 화면에 들어올 때 1회
- "완료/성공" 상태 전환의 마감

## 금기
- **`infinite` 를 붙이지 않는다.** 붙이는 순간 이 효과의 존재 이유가 사라진다.
- 한 화면에서 동시에 3개 이상 지나가지 않게 한다 (진입 트리거는 stagger 를 준다).
- 띠 폭을 26% 이상으로 넓히면 정반사가 아니라 "흰 판이 지나가는" 것이 된다. 스톱 간격 10~16%p 유지.
- 본문 텍스트 블록 위에는 쓰지 않는다 — 읽는 도중 밝기가 변하면 방해가 된다.

## 접근성 / 폴백
- `prefers-reduced-motion:reduce` 에서 전부 정지 (`animation:none!important`).
- `animation-timeline: view()` 는 Firefox 미지원 → `@supports` 로 감쌌고, 미지원 시 효과만 없고 레이아웃은 동일.
  근거: https://developer.chrome.com/docs/css-ui/scroll-driven-animations (Chrome 115+, Safari 26, Firefox 미지원)

## 파라미터
`--fx-sheen-color`, `--fx-sheen-color2`, `--fx-sheen-angle`(기본 105deg), `--fx-sheen-dur`
