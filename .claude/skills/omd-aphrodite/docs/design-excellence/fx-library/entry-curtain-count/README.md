# entry-curtain-count — 진행률을 지어내지 않는다

| | |
|---|---|
| 계열 | 진입 시퀀스 |
| CSS-only | 아니오 — JS 44줄 |
| 인라인 크기 | CSS 42줄 + JS 44줄 / 약 2.7KB |
| 다크/라이트 | 둘 다 — `--fx-curtain-bg` 를 배경색으로 **반드시 교체** |
| 라이선스 | 이 구현은 oh-my-design 자작, MIT. 외부 의존 0 |
| 난이도 | 중 |

## 핵심 — 프리로더가 거짓말을 하면 즉시 들킨다
대부분의 카운트업 프리로더는 `setInterval` 로 0→100 을 세는 **연극**이다. 사람은 그걸 안다.
여기서는 두 가지 진짜 신호를 쓴다:
- `document.readyState === 'complete'`
- 이미지 디코드 완료 비율 `imgs.filter(i => i.complete).length / imgs.length`

거기에 **시간 바닥**(`t / max`)을 얹어 절대 멈추지 않게 하고, 감쇠(`p += (target - p) * 0.12`)로 숫자가 튀지 않게 한다.
그리고 `max + 400ms` 안전판 — 무슨 일이 있어도 커튼은 열린다. **열리지 않는 프리로더는 백지 화면이다.**

## 세 가지 디테일
1. **`font-variant-numeric: tabular-nums`** — 없으면 숫자 폭이 흔들려 카운터가 덜덜 떨린다. 이 한 줄이 급을 가른다.
2. **커튼과 본문이 같은 순간에 움직인다.** 커튼이 다 열린 뒤 본문이 뜨면 두 사건이 되고, 지연으로 읽힌다. `reveal()` 을 `data-fx-curtain="out"` 과 같은 프레임에 호출한다.
3. **최소 노출 시간(`min` 700ms).** 캐시가 더워서 50ms 만에 끝나면 커튼이 깜빡인 것처럼 보인다. 깜빡임은 버그로 읽힌다.

## 금기
- **`max` 없이 쓰지 않는다.** 로드가 실패해도 커튼은 열려야 한다.
- 3초 초과 금지. 진입 연출로 3초를 태우면 이탈이다(기본 상한 2.6s).
- 커튼 안에 로고 애니메이션·문구·부제를 겹겹이 넣지 않는다. **숫자 하나 + 선 하나**가 상한이다.
- 진입 커튼과 히어로 스크롤 스크럽을 동시에 두지 않는다. 열리자마자 또 움직이면 통제를 잃는다.
- SEO/크롤러를 고려해 커튼은 `position: fixed` 오버레이여야 하고, 본문 DOM 을 감싸거나 `display:none` 으로 가리지 않는다.

## 성능 조건
- 커튼 두 짝은 `transform: translateY(±100%)` 만 움직인다. 합성만, 페인트 0.
- `data-fx-curtain="done"` 에서 `display:none` 으로 완전히 제거해 레이어를 회수한다.
- rAF 는 완료 즉시 `cancelAnimationFrame`.

## 모바일 / 리듀스드 모션
- `prefers-reduced-motion` → **커튼을 통째로 건너뛴다**(`display:none` + 즉시 reveal). 진입 연출은 정보가 아니므로 제거가 정답이다.
- 본문 reveal 도 리듀스드 모션에서는 `opacity:1; transform:none` 으로 고정된다 — JS 실패 시에도 백지가 되지 않는다.

## 파라미터
`--fx-curtain-bg/fg/accent` · `--fx-curtain-dur` · `--fx-curtain-ease` · `mountCurtain(root, { min, max })`
