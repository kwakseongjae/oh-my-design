# flip-expand-card — 레이아웃을 진짜로 바꾸고, 그 차이를 transform 으로 갚는다

| | |
|---|---|
| 계열 | 호버 · 전환 |
| CSS-only | 아니오 — JS 46줄 (WAAPI) |
| 인라인 크기 | CSS 44줄 + JS 46줄 / 약 2.8KB |
| 다크/라이트 | 둘 다 (scrim 알파를 라이트에서 낮춘다) |
| 라이선스 | 이 구현은 oh-my-design 자작, MIT. 외부 의존 0 |
| 난이도 | 상 |

## 핵심 — FLIP 4줄 요약
1. **F**irst: 옮기기 전 `getBoundingClientRect()`.
2. **L**ast: 클래스를 붙여 **레이아웃을 실제로 바꾼 뒤** 다시 측정.
3. **I**nvert: 두 사각형의 차이를 `translate + scale` 로 되돌린다.
4. **P**lay: 그 상태에서 `transform:none` 으로 재생. 레이아웃 애니메이션인데 합성만 움직인다.

## GSAP Flip 을 인라인하지 않는 이유
GSAP Flip 은 이제 Standard License 로 무료지만(min 24.4KB / gzip 9.3KB — `docs/design-excellence/scroll-choreography.md` §1.1 실측),
우리 예산은 GSAP core+ScrollTrigger 114.7KB 로 이미 차 있다. **한 카드를 펼치는 데 필요한 것은 46줄이다.**
GSAP Flip 이 값을 하는 지점은 따로 있다 — DOM 부모가 바뀌는 이동, 다수 요소의 동시 재배치, `absolute` 전환 자동 처리.
그 셋 중 하나라도 필요하면 그때 Flip 을 넣는다.

## 놓치면 티 나는 것 — 자식 역스케일
카드를 `scale(sx, sy)` 로 되돌리면 **안의 글자와 라운드가 같이 찌그러진다.**
`.fx-flip__inner` 에 `scale(1/sx, 1/sy)` 를 같은 duration·easing 으로 걸어 상쇄해야 한다.
이걸 빼면 "싸구려 확대"로 읽힌다. 데모에서 `inner` 를 지우고 비교해 보라.

## 금기
- 열린 카드 뒤를 어둡게 하지 않으면 스펙터클이 안 된다. **대비가 사건을 만든다.**
- duration 을 600ms 초과로 두지 않는다. 펼침은 즉답이어야 한다(열기 520 / 닫기 420 이 기본).
- 호버 리프트를 `translateY(-6px)` 초과로 두지 않는다. 그리드 전체가 출렁인다.
- `is-open` 상태를 `width/height` 트랜지션으로 만들지 않는다 — 레이아웃 스래싱이다. FLIP 을 쓰는 이유가 그것이다.
- 한 그리드에 tilt-3d 를 같이 걸지 않는다. 호버 동사는 하나.

## 모바일 / 리듀스드 모션
- 호버 리프트는 `@media (hover:hover)` 안에만 있다. 터치에서는 탭이 곧 펼침.
- `prefers-reduced-motion` → FLIP 재생을 건너뛰고 **상태만 즉시 전환**한다. 기능은 남고 운동만 사라진다.
- `tabIndex` + `role="button"` + Enter/Space/Escape. 포인터 없이 완결된다.

## 이미지 슬롯
`.fx-flip__ph` 색면 → `<img src="<asset>.png" alt="">`. Higgsgen: 갤러리 6~9장.

## 파라미터
CSS `is-open` 의 `inset` 으로 펼침 크기 조절 · JS 상수 `dur`(520/420) · easing `cubic-bezier(.22,.68,.24,1)`

## 실측에서 잡힌 함정 — `aspect-ratio`
그리드 카드에 `aspect-ratio: 3/4` 를 걸어 두면, 펼친 뒤에도 그 비율이 살아 있어
`inset: 7vh 8vw` 로 정한 높이를 **덮어쓴다**. 1280×900 에서 폭 1075px × 3/4 = **높이 1433px** —
카드가 뷰포트 밖으로 나간다(헤드리스 실측 2026-09-04에서 발견).
`snippet.css` 의 `.is-open` 에 `aspect-ratio: auto` 를 넣어 뒀지만 **그것만으로는 부족하다** —
`.gridf .fx-flip__card`(특정도 0,2,0)와 `.fx-flip__card.is-open`(0,2,0)은 특정도가 같아서,
페이지 CSS 가 뒤에 오면 페이지 쪽이 이긴다. 실측으로 확인했다.

**규칙: 카드 비율은 반드시 `:not(.is-open)` 으로 건다.**
```css
.내그리드 .fx-flip__card:not(.is-open){ aspect-ratio: 3/4; }
```
`width`/`height`/`aspect-ratio`/`margin` 등 **레이아웃 속성을 카드에 거는 모든 규칙**에 같은 원칙이 적용된다.
