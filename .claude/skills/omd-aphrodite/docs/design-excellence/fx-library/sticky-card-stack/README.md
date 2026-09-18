# sticky-card-stack — 쌓이며 지나가는 카드

| | |
|---|---|
| 계열 | 깊이 · 스크롤 |
| CSS-only | 예 (골격은 sticky 만으로 동작, JS 0줄) |
| 인라인 크기 | 약 14줄 / 0.8KB |
| 다크/라이트 | 둘 다 — 다만 `brightness()` 로 물러나게 하는 방식은 **다크에서 더 잘 읽힌다.** 라이트에서는 dim 대신 blur 를 조금 더 준다 |
| 라이선스 | 이 구현은 oh-my-design 자작, MIT |
| 난이도 | 하 |

## 무엇인가
카드마다 `position:sticky` + `top: base + i*step`. 각 카드가 서로 다른 높이에서 멈추므로
스크롤할수록 카드가 층층이 쌓인다. 물러나는 카드는 `scale/brightness/blur` 로 뒤로 보낸다.

## 왜 좋은가
"페이드 인 하는 섹션 4개"는 정보 사이의 **관계**를 보여주지 못한다.
스택은 앞의 것이 사라지지 않고 남아 있어서 "이것들은 한 세트"라는 것을 형태로 말한다.
프로세스 단계, 기능 3~4개, 사례 나열에 맞는다.

## 브라우저
골격(sticky)은 전 브라우저. 물러남 보정만 `animation-timeline: view()` 라 Firefox 에서는
축소·감광이 없이 그냥 쌓인다 — 그래도 완전히 성립한다.
근거: https://developer.chrome.com/docs/css-ui/scroll-driven-animations (확인)

## 금기
- **5장 이상 금지.** 3~4장. 그 이상은 스크롤만 길어지고 마지막 카드는 아무도 안 본다.
- 카드 높이를 뷰포트보다 크게 잡지 않는다 (56~76vh). 넘어가면 sticky 가 성립하지 않는다.
- 물러남 blur 를 3px 이상 주면 뒤 카드의 텍스트가 어지럽게 뭉개진다. 1~2px.
- 스택 안에 또 스크롤 컨테이너를 넣지 않는다.
- `overflow:hidden` 이 걸린 조상이 있으면 sticky 가 죽는다 — 가장 흔한 실패 원인.
- `prefers-reduced-motion` 에서 `position:static` 으로 되돌려 평범한 세로 나열이 되게 한다.

## 계보
`position:sticky` 카드 스택은 잘 알려진 패턴이다:
https://css-tricks.com/stacked-cards-with-sticky-positioning-and-a-dash-of-sass/ ,
https://codyhouse.co/tutorials/how-stacking-cards (둘 다 URL 확인, 본문 미대조).
Framer Motion 버전(https://blog.olivierlarose.com/tutorials/cards-parallax)은 JS 필수 — 여기서는 필요 없다.
