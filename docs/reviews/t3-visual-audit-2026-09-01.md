# T3-3 레인 A 시각 감사 — 24 렌더 전수 (2026-09-01)

- 대상: `test-v2/03-runs/lane-a/{apple,toss}/{omd,hallmark,uiuxpromax}/rep-{1..4}/render.html`
- 방법: headless chromium 1440×900, 풀페이지 스크린샷 + DOM 실측 (가로 넘침·뷰포트 이탈·
  텍스트 칸 이탈·UA 기본 스타일 잔존·기본 폰트·깨진 이미지·U+FFFD·JS 오류)
- 도구: `test-v2/tools/render-integrity.mjs` (이 감사에서 신설 — 운영 QA용, **동결된 RUBRIC/채점
  파이프라인의 일부가 아니며** 봉인 run을 수정하지 않는 읽기 전용)
- 스크린샷 24장: 세션 scratchpad `t3-audit/` (+ `gallery.html`)

## 결과 요약

| 검사 | 결과 |
|---|---|
| 치명(로드 실패·빈 페이지·U+FFFD·깨진 이미지·기본 세리프 폰트) | **0건** |
| 실제 시각 파손 | **1건** — toss/hallmark/rep-4 |
| 같은 뿌리의 잠복 결함 | 3건 — toss/hallmark/rep-2·3, apple/uiuxpromax/rep-4 |
| 오프캔버스 오탐(의도된 패턴) | 1건 — toss/uiuxpromax/rep-3 드로어, 정보로만 표기 |

## 유일한 실파손 — toss/hallmark/rep-4 히어로 우측 절단

**증상**: 히어로가 좌측 여백(64px)은 있는데 우측은 뷰포트를 16px 뚫고 잘린다. 화면에는
비대칭 히어로로 보인다.

**원인 (라이브 실측으로 확정)**:

```
FIGURE.hero__frame  left=64 right=1456 w=1392  ml=40px mr=40px  width:100%
SECTION.hero        w=1440  padding-inline:24px
```

작성된 CSS는 `width:100%`로 결백하다. 범인은 **생성된 리셋이 `figure`를 빼먹은 것** —
브라우저 기본값 `figure { margin: 1em 40px }`이 살아남았고, `width:100%`(=부모 콘텐츠 폭
1392px 전체) 위에 좌마진 40px이 얹혀 우측이 24px 부모 패딩을 넘어 뷰포트 밖 1456까지
밀렸다. 100vw 문제도, 계산 실수도 아니다.

**분포가 원인을 확증한다**: 같은 `ua-default` 신호가 hallmark 3개 rep + uiuxpromax 1개
rep에서 나왔고 **omd 팩 8개 rep에서는 0건**이다. omd 팩 산출물은 전부 명시적 리셋을
갖고 있었다. 즉 이것은 개별 run의 우연이 아니라 **팩이 리셋 규칙을 강제하는지의 차이**다.
(이 수치는 봉인 전 운영 관찰이므로 외부 발화에 쓰지 않는다 — 하드 룰.)

## 가드레일 — 각 교정을 강제할 수 있는 가장 좁은 자리에

Vercel design.md 루프의 배치 원칙을 그대로 쓴다.

| 층 | 조치 | 상태 |
|---|---|---|
| **결정론적 검사** | `render-integrity.mjs` — overflow-x·escape·text-clip·**ua-default**·font·img·encoding. 오프캔버스(완전 화면 밖 + fixed/clip 격리)는 파손과 구분해 정보로만. | **완료** — 24개 전수에서 실파손 1·잠복 3을 정확히 잡고 깨끗한 20개 PASS |
| **예방 (하네스 생성 규칙)** | 단독 HTML 생성 시 리셋에 `figure, blockquote, ul, ol { margin: 0 }` (또는 동등한 전역 리셋) 필수 — omd 하네스 산출 규칙에 명문화 | 이슈로 접수 (#아래) |
| **QA 훅** | omd 하네스/오토파일럿의 브라우저 QA 단계에서 render-integrity를 함께 실행 | 이슈로 접수 |

**이 검사가 못 잡는 것** (Vercel도 같은 한계를 명시했다): 아직 본 적 없는 설계 문제.
구도·계층·브랜드 일치는 사람 시각 리뷰와 봉인된 채점 절차의 몫이다. 이 도구는 "이미 본
실패"의 재발만 전수로 막는다.

## 감사 자체의 오탐 기록 (도구를 의심하는 순서 유지)

1차 스크립트의 「기본 버튼」 휴리스틱(투명 배경 + appearance:auto)은 아웃라인 버튼을
기본 스타일로 오인해 12개 run에 오탐을 냈다 — 스크린샷 대조로 전부 기각. render-integrity
에서는 해당 휴리스틱을 뺐다(신뢰 가능한 신호를 찾기 전까지 미탑재). 오프캔버스 드로어
오탐 1건은 「완전히 화면 밖 + fixed/클립 격리 = 의도된 패턴」 규칙으로 정제했다.
