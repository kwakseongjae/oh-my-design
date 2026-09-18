# glass-panel — 가장자리로 두께를 만드는 유리판

| | |
|---|---|
| 계열 | 재질 |
| CSS-only | 예 (JS 0줄) |
| 인라인 크기 | 약 20줄 / 1.1KB |
| 다크/라이트 | 둘 다 — tint/edge 색을 반드시 바꾼다. 라이트는 tint 알파 .5 이상 + 흰 상단 엣지 |
| 라이선스 | 이 구현은 oh-my-design 자작, MIT |
| 난이도 | 중 |

## 흔한 glassmorphism 과 무엇이 다른가
1. **블러를 별도 층(`::before`)에 둔다** → `mask-image` 로 가장자리에서 블러를 페이드시킬 수 있다.
   상단 고정 바에서 "블러가 여기서 끝난다"는 딱딱한 선이 안 생긴다.
2. **위/아래 테두리를 다르게 준다** (inset box-shadow 2줄). 유리의 두께감은 균일한 1px 테두리가 아니라
   위쪽 정반사 + 아래쪽 그림자에서 나온다.
3. **`saturate()` 를 같이 건다.** blur 만 걸면 뒷배경 색이 회색으로 죽는다.

## 언제 쓰나
- 콘텐츠 위를 지나가는 상단 바 / 하단 액션 바
- 사진·그라디언트 위에 얹는 정보 카드
- 모달·팝오버가 배경과 층으로 구분돼야 할 때

## 금기
- **평평한 단색 배경 위에서는 쓰지 않는다.** 뒤에 비칠 것이 없으면 그냥 반투명 회색 상자다.
- 화면에 유리판 4장 이상 = GPU 부담 + "iOS 카피" 신호.
- 유리판 위에 또 유리판을 겹치지 않는다 (블러의 블러는 진흙이 된다).
- 유리 위 텍스트 대비는 **가장 밝은 배경 프레임 기준**으로 측정한다. 배경이 움직이면 최악 프레임으로.

## 알려진 버그 / 폴백
- **Firefox**: 조상에 `overflow` + `border-radius` 가 함께 있고 대상이 `position:sticky` 면 backdrop-filter 가 깨진다.
  근거: https://www.joshwcomeau.com/css/backdrop-filter/ (확인)
- **Chrome**: overflow 클립이 filter 보다 먼저 적용돼 `mask-image` 우회가 필요하다 (같은 출처).
- 미지원/저사양: `@supports not` 로 불투명 폴백.
- `prefers-reduced-transparency:reduce` 에서 블러를 끄고 불투명으로 — 접근성 설정 존중.

## 계보 메모
Apple 이 WWDC 2025 에서 발표한 **Liquid Glass** 가 이 어휘를 다시 밀어올렸다
(https://en.wikipedia.org/wiki/Liquid_Glass, https://css-tricks.com/getting-clarity-on-apples-liquid-glass/ — 검색 수준 확인).
다만 "Liquid Glass" 는 Apple 의 디자인 언어 이름이므로 **그 이름과 정확한 시각 언어를 그대로 브랜딩에 쓰지 않는다.**
여기서는 재질 원리(하이라이트/그림자/투과 3층)만 가져왔다.

## 파라미터
`--fx-glass-tint`, `--fx-glass-blur`, `--fx-glass-sat`, `--fx-glass-edge-top/-bot`, `--fx-glass-r`, `--fx-glass-lift`, `--fx-glass-solid`(폴백), `--fx-glass-mask`
