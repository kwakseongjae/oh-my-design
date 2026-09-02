# Vercel design.md 루프 → omd 하네스 채택 평가 (2026-09-01)

원문: vercel.com/blog/how-our-agents-build-on-brand-pages-with-design-md

Vercel이 공개한 루프의 메커니즘 여섯 개를 omd의 현재 상태와 1:1로 대조하고, 채택할 것과
이미 하고 있는 것, 하지 않을 것을 가른다. 각 채택 항목은 `omd:issue` 루프로 접수한다.

## 대조표

| Vercel 메커니즘 | omd 현재 | 판정 |
|---|---|---|
| ① 파일 하나에 디자인 판단 인코딩 (design.md) | DESIGN.md Core v2 — 동일 명제. 카탈로그 440개 + 프로젝트 생성 | **동형** (우리가 다루는 건 N개 브랜드) |
| ② 공개 URL 관례 (vercel.com/design.md) | 없었음 | **채택 — 완료.** `oh-my-design.kr/design.md`로 자사 DESIGN.md 서빙 (web/public 사본 + check-mirror-drift FILE_PAIRS 가드) |
| ③ 에이전트가 읽지 않는 스타일시트 (클래스 어휘만 컨텍스트에, CSS는 렌더 때만) | Core v2가 서사/System Graph를 분리하지만, 하네스 산출 HTML은 CSS 전문을 파일에 인라인 | **채택 후보** — 하네스가 프로젝트 `brand.css`를 별도 산출하고 이후 턴에서는 클래스 어휘 요약만 컨텍스트에 올리는 방식. 컨텍스트 절약 + "에이전트가 타이포·간격을 발명"하는 문제 차단. 이슈 접수 |
| ④ 반복 생성 패턴에 이름 붙여 회피 (named anti-patterns) | `omd:slop-audit`가 rule ID 체계를 이미 보유 — 단 **탐지 층에만** 있음 | **채택** — slop rule 이름을 하네스/오토파일럿 생성 프롬프트(예방 층)에 주입. T2에서 배운 층 이동과 동일: 탐지가 계속 잡는 유형은 예방으로 올린다. 이슈 접수 |
| ⑤ 동결 시나리오 eval (변수는 design.md 하나) | T3-3이 정확히 이 구조 (동결 브리프·모델·설정, arm만 변수) + Lab #02 | **동형** — 이미 운영 중. Vercel의 "실행마다 버전·스크린샷·리뷰 저장"은 우리 §8 추적과 동일 |
| ⑥ 교정을 "일관되게 강제할 수 있는 가장 좁은 자리"에 배치 + 불평 감소율 추적 | T2 층 배치 원칙(예방/전수/탐지/판단)과 동일. 감소율 추적은 웨이브별 결함 카운트로 이미 측정 (기계 계열 3→1→0→0) | **동형** — 독립적으로 같은 원칙에 도달했다. `omd:issue` process가 라벨 분포로 감소율을 추적 |
| ⑦ deterministic check ("이미 본 실패"의 재발 차단) | 게이트 + 검사기 2종(E1·use-landing)이 T2에 있었고, 렌더 층에는 없었음 | **채택 — 완료.** `test-v2/tools/render-integrity.mjs` (T3 시각 감사에서 figure UA 마진 파손을 잡으며 신설). 하네스 QA 훅 연결은 이슈 #78 |

## 하지 않을 것

- **그들의 스타일시트 방식 그대로 복제** — Vercel은 브랜드가 하나라 클래스 어휘를 고정할 수
  있다. 우리는 프로젝트마다 시스템이 다르므로, 어휘 고정이 아니라 **프로젝트별 brand.css
  산출**로 번역해야 한다 (③).
- **eval 수치의 외부 발화** — T3는 봉인 실험이다. Vercel처럼 수치(57% 등)를 공개하는 것은
  봉인 해제·판정 이후의 일이다.

## 이 문서가 만든 변경

1. `web/public/design.md` + `check-mirror-drift.mjs` FILE_PAIRS — ② 완료
2. `test-v2/tools/render-integrity.mjs` — ⑦ 완료 (시각 감사 문서 참조)
3. 이슈 접수: ③ brand.css 분리 산출, ④ slop rule 예방 주입, (기존 #78) QA 훅

## 요약 한 줄

Vercel 루프의 절반(①⑤⑥)은 우리가 독립적으로 같은 결론에 도달해 이미 돌리고 있고,
셋(②④⑦ 중 ②⑦)은 이 문서와 함께 채택 완료, 남은 둘(③④)은 이슈 루프로 넘겼다.
