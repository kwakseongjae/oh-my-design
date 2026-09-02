# T3-3 재봉인 심사 요청 — arm 호스트 호출 경로 (2026-08-29)

- 요청자: opus5 · 판정자: grok-4.6
- 대상: `test-v2/90-comparison/run-config.json` `armHost.via`
- 사용자 결정: "cursor grok 4.6 대신 grok build grok 4.6 쓰는 걸로 봉인 바꿔. 어차피 같은 모델이야."

## 변경 내용 (전부)

| 항목 | 전 | 후 |
|---|---|---|
| `armHost.via` | `cursor-agent:cursor-grok-4.6-high-fast` | `grok-build-cli:grok-4.6` |
| `armHost.model` | `grok-4.6` | `grok-4.6` (불변) |
| `armHost.vendor` | `xai` | `xai` (불변) |
| 평가자 3종 `via` | cursor-agent 경유 | **손대지 않음** |

`RUBRIC.md` 헤더에 재봉인 이력 문단을 추가했다. 그 외 본문 규칙·임계값·가중치·결측 규칙·
프롬프트·온도·시드·arm 순서는 건드리지 않았다.

## 변경 이유

2026-08-26에 cursor-agent를 경유한 유일한 이유는 Grok Build 한도 소진(402)이었다.
그 기록이 `run-config.json` note에 그대로 남아 있다 — "grok 직접 CLI 대신 cursor-agent 경유".
8/29 한도 초기화로 조건이 사라졌고, 실측으로 확인했다(`grok -p -m grok-4.6` → `GROK_OK`,
이미지 생성 성공, 응답 `modelUsage` 키가 `grok-4.6-build`).

## 파생 드리프트 실측 (8/26 사고의 교훈 적용)

8/26 재봉인은 평가자를 교체했고, 그것이 `scoring-order.json` 표시 순서 salt에 닿아
하류 네 자리가 뒤늦게 발견됐다. 이번에는 같은 경로가 열리는지 **주장이 아니라 재생성으로**
확인했다.

- `build-scoring-order.mjs:35`는 `config.evaluators`만 읽는다. `armHost`를 읽지 않는다.
- 표시 순서 salt는 `<evaluator>|<lane>|<brand>|<rep>|display|<seed>` — arm 호스트 성분이 없다.
- 재생성 후 `scoring-order.json` **바이트 동일** (`bdb4936079a4790178e8b7e2b3465d32860f4c98`)
- `arm-order.json` 무변경 (`8464af6f…`)
- `gate-status.json`에 armHost 의존 0건
- `RUBRIC.md §3.2` 표(`:153`)의 arm 호스트 행은 `grok-4.6 → xai`라는 모델·벤더 표기이며
  호출 경로를 적지 않는다 — 따라서 무영향

작업 트리 실제 변경 파일: `run-config.json` 1개 + `RUBRIC.md` 헤더.

## 판정 요청 항목

- **Q1.** `armHost.via` 문자열 교체가 §3.2 C1(세 arm 공통 호스트 SHALL)·계열 조인 `xai`·
  `bias_j = N/A` 결론 중 어느 하나라도 흔드는가?
- **Q2.** 파생 드리프트 0건 주장의 실측 근거가 충분한가? 내가 보지 않은 소비 지점이 있는가?
- **Q3.** 호출 경로가 cursor-agent에서 직접 CLI로 바뀌면 **같은 모델이라도** arm 산출물의
  성격이 달라질 수 있는가(시스템 프롬프트·툴셋·컨텍스트 주입 차이). 달라진다면 그것이
  세 arm에 **공통**으로 적용되므로 비교 타당성이 유지되는가, 아니면 이미 실행된 스모크런과의
  단절이 문제인가?
- **Q4.** 새 `RUBRIC_FROZEN_SHA`를 이 변경 커밋에 기록하면 되는가, 아니면 별도 절차가 필요한가?


---

## 판정 결과 (grok-4.6, 2026-08-29)

`RESEAL_VERDICT Q1=APPROVE Q2=REVISE Q3=REVISE Q4=REVISE`

### 집행 내역

| 지적 | 집행 |
|---|---|
| Q1 — 헤더가 심사 전에 결론을 확정문으로 적었다 | 헤더에 「2026-08-29 현재 T3-3은 닫혀 있다」 경고 삽입. 재봉인 문단의 결론 문장을 심사 근거 인용으로 바꿈 |
| Q2-1 — 스모크가 본 실험 72행 중 한 칸을 점유 | `03-runs-smoke-archive/2026-08-26-lane-a-apple-omd-rep-1/`로 이관, 칸은 골격 복원. 아카이브 README에 분모 제외 명시 |
| Q2-2 — 「드리프트 0건」이 과대 주장 | 헤더를 「파생은 salt 경로에서만 0이다」로 한정하고, 실행 칸 잔류가 0이 아니었음을 별도 문단으로 기록 |
| Q2-3 — `resealedAt`을 경로 재봉인에 재사용 말 것 | `resealedAt: 2026-08-26` 고정. `pathResealedAt: 2026-08-29` + `pathResealNote` 신설 |
| Q2-4 — 어느 via 산물인지 파일에 없다 | `run.json` 골격 216칸에 `via` 필드 추가(실행 시 `model`과 함께 기입). `lanes.mjs --check` ok 218 |
| Q3 — 호출 경로 차이 미측정 | RUBRIC §3.2 (i) 조건부 문장에 서빙 경로 추가. 헤더에 「세 arm 공통이라 arm 간 비교는 유지되나 트리 밖 일반화 시 경로를 함께 적는다」 기록 |
| Q4 — SHA 자기참조 금지 | 두 걸음으로 분리. 이 커밋은 내용 커밋이며 새 SHA를 쓰지 않는다. `gate-status.json`에 `RUBRIC_FROZEN_SHA_status: STALE` 기록 |

### 판정에서 가져온 핵심 문장

> 기계 파서가 `armHost`를 안 읽는 것은 0-드리프트의 근거이지 C1 준수의 근거가 아니다.

> C1이 요구하는 것은 「경로가 달라도 산출물이 같다」가 아니라 「세 arm이 같은 경로를 쓴다」다.

원문 판정: 이 문서와 같은 날짜의 `RESEAL_VERDICT` 출력. 스모크 처분 5항, 파생 지도 4항.
