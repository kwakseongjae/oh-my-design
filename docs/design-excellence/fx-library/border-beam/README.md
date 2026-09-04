# border-beam — 테두리를 도는 광원

| | |
|---|---|
| 계열 | 빛 |
| CSS-only | 예 (JS 0줄) |
| 인라인 크기 | 약 20줄 / 0.9KB |
| 다크/라이트 | 둘 다 — **단 빔 색을 바꿔야 한다**. 다크=흰색, 라이트=브랜드 색 + 폭 1px 증가 |
| 라이선스 | 이 구현은 oh-my-design 자작, MIT |
| 난이도 | 중 (mask-composite 문법이 낯설다) |

## 무엇인가
`@property` 로 등록한 `<angle>` 을 애니메이트해 conic-gradient 를 회전시키고,
`mask-composite: exclude` 로 안쪽을 뚫어 테두리 폭만 남긴다.

## 왜 이 방식인가
흔한 대안은 `::before` 를 카드보다 크게 깔고 그 위에 불투명한 판을 덮는 것인데,
그러면 카드 배경이 반드시 불투명해야 하고 backdrop-filter 와 겹치면 깨진다.
mask 방식은 배경이 투명해도 되고 `border-radius:inherit` 로 모서리가 자동으로 따라온다.

## 언제 쓰나
- 가격표에서 "추천" 플랜 한 장
- 진행 중/생성 중 상태 표시 (돌고 있다는 것 자체가 상태 신호)
- 주요 CTA 버튼 한 개

## 금기
- **한 화면에 2개 이상 두지 않는다.** 3개가 동시에 돌면 강조가 아니라 배경이 된다.
- 상시 회전보다 `.fx-beam--hover` 쪽이 거의 항상 낫다. 상시 회전은 "AI 스타트업 템플릿" 신호다.
- arc 를 30deg 미만 + 3s 미만으로 두면 경광등이 된다.
- 본문 카드 그리드 전체에 적용 → 즉시 싸구려.

## 파라미터
`--fx-beam-color`, `--fx-beam-w`(테두리 폭), `--fx-beam-r`(반경), `--fx-beam-dur`, `--fx-beam-arc`(빛 호의 크기)

## 접근성
`prefers-reduced-motion:reduce` 에서 회전을 멈추고 각도를 고정해 정적 그라디언트 테두리로 남긴다(사라지지 않는다 — 강조는 유지).

## 출처 / 계보
"border beam / animated gradient border" 는 2024~2025 React 이펙트 라이브러리(Magic UI 계열)가
대중화시킨 어휘다. 여기 코드는 그 라이브러리 코드를 옮긴 것이 아니라 동일 기법을 vanilla CSS 로 재작성한 것이다.
`@property` 는 Baseline(Firefox 128, 2024-07)로 3사 지원.
