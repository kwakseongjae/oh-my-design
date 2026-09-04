# mask-wipe-reveal — 스크롤이 닦아내는 이미지

| | |
|---|---|
| 계열 | 이미지 리빌 |
| CSS-only | 예 (JS 0줄) |
| 인라인 크기 | 약 28줄 / 1.6KB |
| 다크/라이트 | 둘 다 — 마스크는 색과 무관하다 |
| 라이선스 | 이 구현은 oh-my-design 자작, MIT |
| 난이도 | 중 |

## 왜 페이드-업 대신 와이프인가
`opacity 0 → 1` + `translateY` 는 2019년 이후 모든 랜딩의 기본값이라 **아무 정보도 전달하지 않는다.**
마스크 와이프는 (1) 이미지가 "현상되는" 서사를 만들고 (2) 스크롤 진행률에 물리면 사용자가 속도를 쥔다 —
자동 재생되는 것이 아니라 사용자가 만드는 것이므로 조작감이 생긴다.

## 변형 3종
- `--sweep` 대각선 와이프(경계 18% 소프트) — 넓은 히어로 이미지
- `--iris` 한 점에서 원형 확장 — 제품 샷, "여기를 보라"
- `--blind` N칸 세로 블라인드, 칸마다 `--i` 지연 — 갤러리/그리드 전환

## 결정적 디테일
`@property --fx-wipe-p` 로 `<percentage>` 를 **등록해야 한다.** 등록하지 않으면 마스크 안의
커스텀 프로퍼티는 보간되지 않고 계단식으로 점프한다.
근거: https://web.dev/blog/at-property-baseline (확인 — Baseline 2024-07-09, 3사 지원)

## 브라우저 / 폴백
`animation-timeline: view()` 는 Chrome 115+, Safari 26 지원, **Firefox 안정판 미지원**.
근거: https://developer.chrome.com/docs/css-ui/scroll-driven-animations (확인)
→ `@supports` 로 감쌌다. Firefox 에서는 이미지가 처음부터 온전히 보이고 레이아웃은 동일하다.
JS 로 진입을 잡고 싶으면 IntersectionObserver 로 `data-fx-wipe="open"` 만 켜면 된다.

## 금기
- **한 페이지에서 3개 이상 쓰지 않는다.** 모든 이미지가 닦여 나오면 스크롤이 무거워진다.
- 로고·아이콘·아바타 같은 작은 요소에 쓰지 않는다 (읽는 데 방해만 된다).
- `animation-range` 를 너무 길게(cover 100%) 잡으면 이미지가 끝까지 반쯤 가려진 채로 남는다 — cover 45~55% 에서 완료.
- 소프트 경계를 0%로 두면 종이 자르는 칼날처럼 보인다. 12~22% 유지.
- `prefers-reduced-motion` 에서 마스크 자체를 제거한다 (진행률이 멈춘 채 반쯤 가려지면 안 된다).

## 계보
스크롤 마스크 리빌은 Codrops 계열 튜토리얼이 GSAP+ScrollTrigger 로 대중화했고
(예: tympanus.net 의 mask/clip-path 스크롤 리빌 시리즈 — 제목·URL 존재는 확인, 본문 미대조),
2025~2026 에는 같은 결과를 CSS 네이티브 scroll-timeline 으로 JS 없이 낼 수 있다. 이 스니펫이 후자다.
