# hover-cross-open — 그리드가 갈라지고 그 사이가 열린다

| | |
|---|---|
| 계열 | 호버 · 프리뷰 |
| CSS-only | 아니오 — JS 34줄 |
| 인라인 크기 | CSS 46줄 + JS 34줄 / 약 2.6KB |
| 다크/라이트 | 둘 다 — `--fx-cross-bg` 교체 필수 |
| 라이선스 | 이 구현은 oh-my-design 자작, MIT. 외부 의존 0 |
| 난이도 | 중 |

## 출처와 차이
문법의 출처는 Codrops "Animated Product Grid Preview with GSAP & Clip-Path"
(Gwen Bogaert, 2025-05-27 — https://tympanus.net/codrops/2025/05/27/animated-product-grid-preview-with-gsap-clip-path/,
데모 https://tympanus.net/Tutorials/GridToFullPreview, 소스 https://github.com/gwen-bo/codrops-grid-to-preview).
**문서 정독 기준이며 데모 실물은 확인하지 못했다.**
우리 구현은 그 문법(좌우 밀어내기 + clip-path 십자 열림)만 취하고 **GSAP 없이 CSS 트랜지션으로** 다시 썼다.
원 튜토리얼의 "좌/우 프리뷰 컨테이너 2개 분리" 트릭은 GSAP 타임라인 충돌 회피용이므로 여기서는 불필요하다 —
CSS 트랜지션은 값이 바뀌면 현재 위치에서 이어서 간다.

## 핵심 — 움직이는 값은 하나다
`clip-path: polygon(50% 50% ×4)` → `polygon(0 0, 100% 0, 100% 100%, 0 100%)`.
중심에서 사방으로 찢어지는 것처럼 보이지만 **애니메이트되는 속성은 clip-path 하나**다.
좌우 밀어내기(`translateX(±2.6vw)`)는 별개의 값이고, 이 둘이 겹쳐 "공간이 열린다"는 감각이 된다.

호버 칸의 중심 X 를 기준으로 나머지 칸을 `l`/`r` 로 분류하는 것이 전부다(JS 34줄).

## 금기
- 밀어내기 4vw 초과 금지. 그리드가 화면 밖으로 나가 스크롤바가 생긴다.
- clip-path 전환 700ms 초과 금지. 호버 반응은 즉답이어야 한다.
- 프리뷰 안에 **본문 텍스트를 넣지 않는다.** 호버가 끊기면 읽던 것이 사라진다. 라벨 한 줄까지.
- `pointerover` 대신 `pointerenter` 를 칸마다 붙이지 않는다 — 리스너 N개가 된다. 위임 1개면 된다.
- 같은 섹션에 flip-expand-card 를 함께 쓰지 않는다. **호버 동사는 하나.**
- 프리뷰 DOM 을 매번 만들지 않는다. 한 장을 두고 내용만 갈아 끼운다.

## 성능 조건
- `will-change: transform` 은 칸에만. 8칸 = 레이어 8장.
- `backdrop-filter: blur(6px)` 는 비싸다. 프리뷰 1개에만, 반경 8px 이하.
- `clip-path` 트랜지션은 합성 가능하지만 `polygon` 은 정점 수가 같아야 보간된다 — 시작·끝 모두 4점으로 맞췄다.

## 모바일 / 리듀스드 모션
- `@media (hover:none)` → 프리뷰 `display:none`, 밀어내기 해제. **평범한 그리드로 남는다.** 호버 뒤에 정보를 숨기지 않는 것이 원칙이다.
- `prefers-reduced-motion` → 트랜지션 0.001s. 상태 전환은 남는다.
- `focusin`/`focusout` + `tabIndex` — 키보드 Tab 으로도 열린다.

## 이미지 슬롯
`.fx-cross__ph` → `<img>`. 프리뷰는 호버한 칸의 이미지를 복제해 쓰므로 **별도 고해상도 슬롯을 두려면** `data-fx-preview-src` 를 추가해 `open()` 에서 읽게 한다.

## 파라미터
`--fx-cross-cols` · `--fx-cross-push`(밀어내는 양) · `--fx-cross-bg` · 칸별 `data-fx-label`
