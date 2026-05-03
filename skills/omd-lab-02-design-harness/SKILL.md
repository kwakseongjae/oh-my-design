---
name: omd-lab-02-design-harness
description: OmD Lab #02 — 디자인 하네스 정교화 실험. 동일 task를 v1, v2, v3... 버전별 하네스 설정으로 돌려서 산출물 품질·토큰 비용·iteration 수·persona ABANDON 율을 비교. 트리거 — '/omd-lab-02', '하네스 lab 시작', '디자인 하네스 v2 돌려서 비교', 'lab #02 자동 비교'.
---

# OmD Lab #02 — Design Harness Refinement

`omd:harness`의 정교화 작업을 위한 실험실. 동일한 design task를 *서로 다른 하네스 설정* (v1, v2, v3, ...)으로 돌려서 품질·비용·실패모드를 비교한다.

## 왜

Lab #01이 "DESIGN.md 유무"의 영향을 봤다면, Lab #02는 **하네스 자체의 설정**(prompt 변형, persona pool, eval rubric, asset 정책 등)이 산출물에 미치는 영향을 본다.

## 디렉토리 구조

```
skills/omd-lab-02-design-harness/
├── SKILL.md                       (this file)
├── playbooks/
│   ├── v1.md                      (현재 baseline — first full implementation)
│   ├── v2.md                      (다음 실험 가설)
│   └── ...
├── runs/
│   ├── v1-run-<ts>-<slug>/        ← omd:harness가 v1 설정으로 돌린 산출물 전체
│   ├── v2-run-<ts>-<slug>/
│   └── ...
├── compare/
│   ├── README.md                  (어떤 task로 어떤 v를 비교했는가)
│   └── <task-id>/
│       ├── index.html             (v1 vs v2 vs v3 동시 비교 뷰)
│       └── metrics.json           (집계 비교 지표)
└── postmortem-aggregate.md        (전 v 누적 학습)
```

## Lab Run 프로토콜

### 새 v 정의 (Lab 운영자 — 사용자 또는 Claude)

1. `playbooks/v<N>.md` 작성. 가설을 한 줄로:
   ```
   ## Hypothesis
   v2 raises persona ABANDON budget from 3s → 5s, expecting fewer false-abandon and more useful friction signal.
   ```
2. v<N>이 v<N-1>과 *바꾸는 것 정확히 명시*. 1개 변수만 바꾸는 게 원칙.
3. 변경 점이 sub-agent 프롬프트에 있으면 `playbooks/v<N>/agents-overrides/*.md`로 patch 보관.

### Lab Run 실행

```bash
# 운영자가 수동 실행
omd harness "<task>" --lab v2
# 또는 사용자가 자연어:
# "이 task를 lab v2 설정으로도 돌려서 v1과 비교해줘"
```

`--lab v<N>`이 들어오면:
- `runs/v<N>-run-<ts>-<slug>/` 디렉토리에 산출물 적재
- v<N>의 agent overrides가 있으면 그걸 임시로 `.claude/agents/`에 덮어씌운 채 실행 (run 종료 시 원복)
- run.log에 `lab_version: v<N>` 기록

### 비교 뷰 생성

운영자가 동일 task에 대해 v1, v2, ..., vN의 run을 끝내면:

```bash
omd lab compare --task "<task-slug>" --versions v1,v2,v3
```

이게 `compare/<task-slug>/index.html`을 만든다. 4-패널 (또는 N-패널) 비교:
- 각 v의 brief.md / 주요 wireframe / DESIGN.md.patch / persona ABANDON 요약 / 토큰 비용
- 공통 metrics.json: per-v {iterations, total_tokens, persona_abandon_rate, deterministic_pass_rate, jury_score, time_to_handoff}

### 비교 metrics 정의

```json
{
  "task": "토스 스타일 가족 식단 앱 메인",
  "versions": {
    "v1": {
      "iterations": 2,
      "total_tokens_estimated": 320000,
      "persona_abandon_rate": 0.5,
      "deterministic_pass_rate": 1.0,
      "jury_score_normalized": 0.72,
      "time_to_handoff_min": 18,
      "user_satisfied": "?"
    },
    "v2": { ... }
  },
  "delta_v1_v2": "v2 reduced persona_abandon_rate by 0.25 but raised total_tokens by 12% — net win on signal quality"
}
```

## 진행 트랙 (이 Lab의 로드맵)

| v | hypothesis | status |
|---|---|---|
| v1 | First full implementation — 8 agents, 10 phases, 3 user checkpoints | active baseline |
| v2 | (TBD) | pending |
| v3 | (TBD) | pending |

`playbooks/v1.md`가 baseline 정의. 운영자는 매 회 새 가설로 v<N>.md를 추가한다.

## postmortem-aggregate.md 정책

매 lab run 종료 시, run의 `postmortem.md`에서 *cross-version-relevant* 신호만 발췌해 `postmortem-aggregate.md`에 누적:
- 자주 발생하는 deterministic gate 실패
- persona ABANDON 트리거 빈도 분포
- 사용자가 가장 자주 reject하는 phase 출력
- 토큰이 가장 많이 새는 sub-agent

이게 다음 v의 가설을 만들어낸다.

## 사용 예 (한 줄 시연)

```
사용자: "토스 스타일 결제 화면 — Lab #02로 v1, v2 비교"
→ Claude: omd harness "..." --lab v1 실행 → v1-run 적재
→ (사용자 체크포인트 진행, ship 결정)
→ Claude: omd harness "..." --lab v2 실행 (동일 brief 재사용 가능)
→ omd lab compare --task <slug> --versions v1,v2
→ compare/<slug>/index.html 결과 제시
```

## 금지

- v 정의 없이 run 적재 X (반드시 playbooks/v<N>.md 선행)
- 동일 task의 동일 v 결과를 덮어쓰지 X (timestamp로 보존)
- runs/ 정리 X (영구 보존)
