# T3-3 레인 A — Phase 6 기계 신호 (오케스트레이터, 채점 밖) · 2026-09-02 19:10

채점(§4)과 무관한 결정론 검사만 모았다. 봉인 칸은 수정하지 않는다. 이 표는 Phase 6 Fable 검수의 **입력**이지 점수가 아니다.
집계 결과(순위·PASS)는 청크 3·재채점·`aggregate-lane-a` 이후에만 낸다.

## 1. render-integrity (102/108 칸 생산 시점)

| arm | 칸 | FAIL | 내역 |
|---|---:|---:|---|
| omd | 34 | **0** | — |
| uiuxpromax | 34 | 1 | apple/rep-4 ua-default(figure 40px 마진) |
| hallmark | 34 | 3 | toss/rep-2·3·4 ua-default |

재측정(21:20, 도그푸딩 #9 반영): `render-integrity.mjs`가 클리핑 조상(overflow-x hidden/clip/auto/scroll) 안에서 우측 경계를
가로지르는 항목을 fullyOff 분기에서만 허용해 가로 스크롤러(marquee·LC-15 트랙)를 escape로 오판했다. 판정을 양 분기에 적용한 뒤
108칸 재실행: hallmark 6→3, uiuxpromax 2→1, omd 0→0. 사라진 5건은 전부 marquee/SVG 스크롤러였다 — 즉 **경쟁 arm의 escape는
실재 파손이 아니라 측정기 오탐**이었고, 남은 4건은 모두 UA 기본값(figure 마진) 계열이다. 아래 원문 단락은 수정 전 수치 기준.

읽는 법: omd 0은 `omd-autopilot-v2` 팩이 UA 리셋과 뷰포트 이탈 규칙을 이미 갖고 있다는 뜻(#78 계열). 경쟁 arm의 escape는 전부
marquee형(자동 스크롤 텍스트/이미지)과 SVG path 이탈 — 축 1 `H-OVERFLOW`/`CLIP` 후보이나 판정은 평가자 몫.

## 2. 생산 비용 (costs.jsonl, 76칸 실측)

| arm | 칸 | 평균 | 합 |
|---|---:|---:|---:|
| hallmark | 26 | $1.35 | $35.00 |
| omd | 24 | $0.81 | $19.35 |
| uiuxpromax | 26 | $0.53 | $13.71 |

## 3. 전사 과정에서 드러난 형식 유출 (전사자·평가자 보고, 채점 입력 아님)

- omd 문서에 벤치 내부 라벨(`T3-3 레인 A · <brand>`, lane/rep)이 남는 경우 — sonnet5가 청크 1·2에서 `formatMarkerSeen`으로 신고. omd 팩이 브리프의 내부 식별자를 산출 문서에 옮겨 적는다 → **omd 개선 후보(이슈화 예정)**: 시스템 문서에 런/벤치 식별자를 쓰지 않는다.
- uiuxpromax 문서의 `python3 scripts/search.py` 명령 잔존은 §7.1.6 규칙상 보존 — 사후 arm 추측 근거로 기록.

## 4. 아직 안 한 것

- `text-contrast.mjs` 102칸 전수(칸당 ~1분) — 재개 시 백그라운드.
- 채점 결과의 arm별 해독(청크 3 + rescore 후 `aggregate-lane-a`) → Fable 소견서 → `omd:issue`.
