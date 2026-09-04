# view-transition-morph — 요소가 이어지는 전환

| | |
|---|---|
| 계열 | 전환 |
| CSS-only | 아니오 — 상태 전환 트리거에 JS 1줄(`document.startViewTransition`). 문서 간 전환은 CSS-only |
| 인라인 크기 | CSS 14줄 + JS 몇 줄 / 약 0.9KB |
| 다크/라이트 | 둘 다 — 스냅샷 기반이라 테마와 무관 |
| 라이선스 | 이 구현은 oh-my-design 자작, MIT |
| 난이도 | 중 |

## 무엇인가
두 상태(목록 ↔ 상세)에서 같은 `view-transition-name` 을 가진 요소를 브라우저가 **같은 것**으로 보고
위치·크기·모양을 자동으로 보간한다. 우리가 계산할 것이 없다.

## 왜 중요한가
이건 장식이 아니라 **정보 구조를 전달하는 모션**이다.
썸네일이 히어로로 확대되는 것을 보면 사용자는 "내가 방금 누른 그것"과 "지금 보는 것"이
같은 대상임을 별도 설명 없이 안다. 크로스페이드는 그 정보를 못 준다.

## 2025 업데이트 (반드시 알아야 할 것)
- `view-transition-class` — 스냅샷을 클래스로 묶어 한꺼번에 스타일링. 요소마다 고유 이름을 지을 필요가 없다.
- `match-element` — 이름 자동 생성. "목록 항목 100개에 고유 이름 100개" 문제를 없앤다.
- `document.activeViewTransition` — 진행 중인 전환 인스턴스 접근.
근거: https://developer.chrome.com/blog/view-transitions-in-2025 (확인)

## 브라우저 / 폴백
Chrome·Edge 137+(match-element)/140+(nested groups), Safari 18+, **Firefox 144 Baseline 이지만
view transition types 는 미지원**(부분 지원). (같은 출처, 확인)
→ 반드시 `'startViewTransition' in document` 로 분기한다. 미지원이면 전환 없이 즉시 상태가 바뀌고
레이아웃은 동일해야 한다. 데모가 그 구조다.

## 금기
- **한 시점에 같은 `view-transition-name` 이 둘 이상 존재하면 전환이 통째로 실패한다.** 가장 흔한 사고.
  목록 항목에 이름을 미리 다 박아두지 말고, 클릭된 항목에만 붙였다가 떼거나 `match-element` 를 쓴다.
- 지속시간 600ms 초과 금지. 전환은 정보 전달이지 공연이 아니다. 300~450ms.
- 페이지 전체를 회전/플립시키는 전환은 2010년대 파워포인트다. 이어지는 요소 1~2개 + 나머지는 페이드.
- `prefers-reduced-motion` 에서 전환 애니메이션을 전부 끈다 (상태 변경 자체는 유지).
