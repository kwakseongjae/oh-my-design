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

## 텍스트 대비 스윕 (21:20–21:50, 108칸 전수, `text-contrast.mjs`)

측정: 각 칸의 `render.html`을 1440×900·390×844에서 렌더해 보이는 텍스트 노드마다 **명목 색(computed color) 대 실제 배경 픽셀**의
대비를 글리프 픽셀 단위로 계산(WCAG 1.4.3 문턱: 본문 4.5:1, 대형 3:1; 포커스 링은 최대 채도 색 대 배경 3:1). 한 요소가 두 뷰포트에서
모두 걸리면 2건으로 센다. no-JS 렌더 파손도 같이 본다. 원시 표: `test-v2/90-comparison/production/lane-a/contrast-sweep-2026-09-02.tsv`(arm·칸·건수·no-JS).

| arm | 칸 | 1건 이상 칸 | 총 건수 | 칸당 중앙값 | 최대 | no-JS 파손 칸 |
|---|---|---|---|---|---|---|
| omd | 36 | 35 | 271 | 7 | 22 | 0 |
| hallmark | 36 | 33 | 305 | 8 | 30 | 3 |
| uiuxpromax | 34 | 22 | 217 | 5 | 31 | 1 |

표본 검증(4칸 수동 대조): toss/omd/rep-1 h1이 그라데이션 위에서 29.7% 픽셀 3:1 미달(min 1.12), apple/omd/rep-2 `더 알아보기`
버튼 1.55:1(양 뷰포트), karrot/uiuxpromax/rep-1 워드마크 주황 2.79:1·메타 회색 3.42:1 — 전부 실제 미달이고 측정기 오탐 흔적은 없었다.

읽는 법: **세 arm 모두 대비 미달이 상수에 가깝다** — 브랜드 액센트 위 흰 글자·회색 메타 텍스트·그라데이션 위 제목이 공통 원인이다. omd가
경쟁 arm보다 나은 축이 아니며(중앙값 7 vs 8/5), 칸당 건수는 hallmark가 가장 많고 uiuxpromax가 가장 적다. 이 수치는 루브릭 점수가 아니라
Phase 6 기계 신호다 — 평가자 결함 축(CONTRAST 코드)과의 대응은 청크 3 집계 뒤에 본다. omd 팩 쪽 조치 후보: `omd-autopilot-v2`에
액센트 위 텍스트 대비 게이트(생성 시 4.5:1 검사)를 넣는 것 → `omd:issue` 접수 대상(발행 게이트 뒤).
