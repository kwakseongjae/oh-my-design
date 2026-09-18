# split-text-rise — 밀려 올라오는 문장

| | |
|---|---|
| 계열 | 텍스트 |
| CSS-only | 애니메이션은 CSS-only. DOM 분해에 JS 24줄 |
| 인라인 크기 | CSS 16줄 + JS 24줄 / 약 1.5KB |
| 다크/라이트 | 둘 다 — 색과 무관 |
| 라이선스 | 이 구현은 oh-my-design 자작, MIT |
| 난이도 | 중 |

## 라이선스 — 왜 GSAP SplitText 를 쓰지 않는가
2025-04-30 Webflow 가 GSAP 전체(SplitText 포함)를 무료로 풀었다
(https://gsap.com/blog/3-13/, https://webflow.com/blog/gsap-becomes-free — 확인).
**그러나 무료 ≠ MIT 다.** GSAP 은 GreenSock 의 독자 "standard no-charge license" 를 따르고
(https://gsap.com/standard-license — 원문 확인), 그 안에 **"Webflow 와 경쟁하는 비주얼 애니메이션 빌더/에디터
제품에 임베드 금지"** 조항이 있다. 우리처럼 *다른 사람의 UI 를 생성해 내보내는 도구*는
그 조항의 회색지대에 들어갈 수 있다.
Splitting.js 는 MIT 로 알려져 있으나 이번 조사에서 LICENSE 원문을 확인하지 못했다("확인 못 함").
→ 결론: **의존성 0으로 직접 쓴다.** 필요한 기능은 24줄이면 되고, 라이선스 리스크가 0이 된다.

## 접근성 — 가장 중요한 부분
텍스트를 span 으로 쪼개면 스크린리더가 **문자를 하나씩 읽거나 단어를 끊어 읽는다.**
그래서 이 구현은 원문을 `aria-label` 에 보존하고 쪼갠 조각 전체를 `aria-hidden="true"` 로 감춘다.
이 두 줄이 없는 split-text 구현은 접근성 결함이다.

## 금기
- **문자 단위는 6~8자 이하에만.** 긴 헤드라인을 문자 단위로 쪼개면 "글자가 하나씩 로딩되는" 느낌이 되어
  읽기 시작 시점이 늦어진다. 기본은 **단어 단위**.
- stagger × 단어 수 = 총 지속. 700ms 를 넘기지 않는다 (단어 12개 × 42ms ≈ 500ms 가 상한 근처).
- 페이지의 모든 문단에 적용 금지. 히어로 헤드라인 + 리드 1개면 충분하다.
- 블러 인은 문자 단위와 겹쳐 쓰지 않는다 (읽을 수 없다).
- `prefers-reduced-motion` 에서 전부 정지하고 즉시 보이게 한다.

## 파라미터
`--fx-split-dur`, `--fx-split-stagger`, `--fx-split-blur`
`data-fx-split-by="word|char"` · `.fx-split--blur` · `.fx-split--scroll`(스크롤 구동)
