---
name: omd:taste
description: "시스템이 학습한 사용자의 디자인 취향을 한 뷰로 렌더. .omd/preferences.md + foldin-proposal.json + DESIGN.md를 읽어 반영됨/대기 중/보류됨/모르는 것 4그룹으로 보여준다. '/omd-taste', '내 취향 보여줘', '취향 현황', 'what are my preferences', 'show my taste', 「私の好みを見せて」, 「顯示我的偏好」류의 발화에 트리거. 기록은 omd:remember, DESIGN.md 반영은 omd:learn."
user-invocable: true
---
<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->


# omd:taste — Taste Dashboard

시스템이 사용자에 대해 알고 있는 취향을 **한 뷰**로 렌더한다. 신뢰는 가시성에서 나온다 — 루프가 뭘 배웠고, 뭘 기다리고, 뭘 모르는지 보여주면 사용자가 루프에 더 먹인다. 기본 동작은 **읽기 전용** — 기록은 `omd:remember`, 반영은 `omd:learn`의 몫이고, 이 스킬은 보여주고 다음 행동만 안내한다. **CLI 호출 없음** — Read/Edit 툴로 직접 처리.

## 입력 (모두 Read 툴)

1. `.omd/preferences.md` — canonical 포맷 (`## <heading>` + ` ```omd-meta` 블록 + body — `omd:remember` 스킬의 포맷 정의 참조). **모든 status**의 엔트리를 파싱: `id` / `timestamp` / `scope` / `signal` / `confidence` / `status`
2. `.omd/foldin-proposal.json` — 있으면 `status` (`proposed` / `applied` / `partial` / `snoozed`)와 `scopes[]` (scope, count, score, summary)
3. `DESIGN.md` — § 라우팅 표시 + "모르는 것" 축 도출용

## 빈 상태

`.omd/preferences.md`가 없거나 파싱된 엔트리가 0개면 두 줄로 끝낸다:

> 아직 학습된 취향이 없어요.
> 작업 중 "앞으로는 ~로 해"라고 말하면 omd:remember가 기록하고, 같은 취향이 쌓이면 omd:learn이 DESIGN.md에 정식 반영해요.

이때 `.omd/` 디렉토리나 파일을 **만들지 말 것** — 뷰 스킬이 상태를 생성하면 안 된다.

## 렌더 — 4 그룹 한 뷰

### ① 반영됨 (`status: applied`)

scope별 한 줄: body 요약 + 반영된 DESIGN.md 섹션 + `applied_at` (있으면). 섹션은 omd:learn Phase 3의 scope→§ 라우팅으로 도출:

| scope | DESIGN.md § |
|---|---|
| `components.*` | §8 (Components) 또는 §13 |
| `color` | §2 (Color Palette) |
| `typography` | §3 |
| `spacing` | §4 |
| `voice` | §10 (Voice & Tone) |
| `motion` | §15 (Motion & Easing) |
| `visualTheme` | §1 (Visual Theme) |

DESIGN.md에 해당 섹션이 실제로 없으면 § 표기는 생략 (추측으로 적지 말 것).

### ② 대기 중 (`status: pending`)

scope별로 그룹화해 한 그룹당 한 줄:

- **발생 횟수** — 해당 scope의 pending 엔트리 수
- **confidence** — explicit / inferred 구성 (예: `explicit ×2, inferred ×1`)
- **한 줄 요약** — 최신 엔트리 body의 첫 줄
- **폴드 제안까지 남은 횟수** — 자동 fold-in 게이트(session-end hook)의 기본 임계는 **최근 7일 창 안에서 같은 scope 3회**. `max(0, 3 - 7일 내 발생 횟수)`로 계산해 "N회 더 쌓이면 제안돼요"로 표기. 이미 충족이면 "다음 세션 종료 시 제안 예정"

### ③ 보류됨 (snoozed)

`.omd/foldin-proposal.json`의 `status`가 `snoozed`면 그 `scopes[]`를 나열 — scope + summary + `snoozed_at`. "지금 반영하려면 omd:learn을 부르세요" 한 줄 덧붙임. proposal 파일이 없거나 snoozed가 아니면 이 그룹은 생략.

### ④ 시스템이 모르는 것 (가볍게)

DESIGN.md에는 정의돼 있지만 preference 엔트리(어느 status든)로 한 번도 확인된 적 없는 주요 축을 **1-2개만** 짚는다 (예: "motion은 DESIGN.md 기본값 그대로 — 아직 취향을 들은 적이 없어요"). 절대 전 축을 나열하지 말 것 — 가볍게 한두 줄.

## 다음 행동 안내 (뷰 끝에 항상)

```
다음 중 하나로 이어갈 수 있어요:
- "지금 반영"        → omd:learn — pending을 DESIGN.md에 fold
- "잊어줘 <id|scope>" → 해당 엔트리 status를 rejected로 플립
- "수정: <내용>"      → omd:remember로 재기록 (옛 엔트리는 superseded)
```

- **"지금 반영"** → `omd:learn` 트리거 (전체 또는 사용자가 지정한 scope만)
- **"잊어줘"** → 해당 엔트리의 omd-meta 블록만 Edit 툴로 `status: rejected` + `rejected_reason: "user-forget"` 플립 (omd:learn의 single-entry 플립과 동일 절차). body는 건드리지 않는다
- **"수정"** → body 직접 편집 금지 (영구 기록) — `omd:remember`로 새 엔트리 재기록 후 옛 엔트리를 `status: superseded` + `superseded_by: <새 id>`로 플립

## 금지

- "잊어줘"/"수정" 후속 요청의 status 플립 외에는 어떤 파일도 수정하지 말 것 — DESIGN.md 수정은 항상 omd:learn 경유
- 엔트리 전체 dump 금지 — scope 그룹 요약으로
- ④번 그룹을 채우려고 억지 축을 만들지 말 것 — 짚을 게 없으면 생략
- preferences.md 포맷 해석은 canonical 규칙(omd:remember)만 따를 것 — 자체 변형 포맷 발명 금지
