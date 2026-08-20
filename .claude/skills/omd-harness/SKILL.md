---
name: omd:harness
description: "사용자와 단계별로 검토하는 guided design harness. Discovery→Wireframe→Components→Microcopy→Validation을 omd-master가 실행하고 journey/system/validation의 필수 체크포인트에서 멈춘다. '/omd-harness', '체크포인트마다 검토', '나와 단계별로 디자인', 'guided design' 요청에 사용. 질문 없이 원샷으로 새 제품을 자율 구축하는 요청은 omd:autopilot, 단일 컴포넌트 수정은 omd:apply."
---
<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->


# omd:harness — Design Harness Entry

이 스킬은 **omd-master 오케스트레이터**를 호출하는 단일 진입점이다. 본 스킬은 launcher + 사전체크 + run 디렉토리 부트스트랩 책임만 가지고, phase 로직은 `agents/omd-master.md`에 있다.

Run 디렉토리 부트스트랩에는 CLI 의존이 없다. Core v2 review/compile/adoption은
설치된 provider-free `design-md` 명령 또는 byte-equivalent helper만 사용한다.

## 트리거

- `/omd-harness <task>` 명시 호출
- 사용자가 자연어로 "디자인 하네스 / 체크포인트마다 검토 / 나와 단계별로 디자인" 요청

## Step 0 — task 추출

슬래시에 task 같이 적었으면 (`/omd-harness 물 음용 유도 메인 화면`) 그 자연어 부분이 task. 빈 슬래시면 한 번 묻기:

```
어떤 디자인 작업을 진행할까요?
shape: "[도메인] + [톤/스타일] + [핵심 화면]" — 예: "토스 스타일 가족용 식단 앱 메인 화면"
```

task에서 delivery intent도 함께 고정한다.

- `디자인/와이어프레임/기획/시안`만 요청 → `delivery_intent: design-only`
- `구현/만들어/적용/build/implement/production-ready` 포함 → `delivery_intent: implement`

`implement`여도 mandatory checkpoint를 건너뛰지 않는다. 차이는 승인된 handoff 뒤 실제 제품 코드 통합까지 이어지는지다.

## Step 1 — Channel-safe role activation + inline recovery (v1.9.0+)

먼저 Agent 도구의 사용 가능 role 목록에서 `omd-master`를 확인한다. 있으면 Step 2로 간다. 없을 때는 Markdown을 임의 폴더에 복사하지 않는다. Claude와 Codex의 role schema가 다르고, `.agents/`는 Codex에서 skill 경로이지 role 경로가 아니다.

### 1.1 — 현재 채널과 설치물 검증

- 이 스킬이 `.agents/skills/omd-harness/`에서 로드됐거나 `.codex/agents/omd-master.toml`이 있으면 **Codex**다. role 파일은 `.codex/agents/omd-master.toml`이어야 하며 top-level `name`, `description`, `developer_instructions`가 모두 있어야 한다.
- 이 스킬이 `.claude/skills/omd-harness/`에서 로드됐거나 `.claude/agents/omd-master.md`가 있으면 **Claude Code**다. role 파일은 첫 줄이 `---`인 `.claude/agents/omd-master.md`여야 한다.
- 이 스킬이 `.opencode/skills/omd-harness/`에서 로드됐거나 `.opencode/agents/omd-master.md`가 있으면 **OpenCode**다. project role은 `.opencode/agents/omd-master.md`, global role은 `~/.config/opencode/agents/omd-master.md`이며 `mode: subagent`여야 한다.
- 폴더가 존재한다는 이유만으로 채널을 추측하지 않는다. 둘 다 없거나 모호하면 사용자에게 현재 coding-agent 채널 하나만 확인한다.

role 파일이 없거나 schema가 틀렸으면 해당 채널만 최신 설치기로 복구한다:

```bash
# <channel> = claude-code, codex 또는 opencode
npx oh-my-design-cli@latest install-skills --agent <channel> --all
npx oh-my-design-cli@latest doctor
```

Codex의 legacy `.codex/skills` OmD entrypoint는 최신 설치기가 안전하게 제거하고 공식 `.agents/skills` 경로로 옮긴다. 사용자 소유 파일은 삭제하지 않는다.

### 1.2 — 현재 세션에서 role 목록이 stale인 경우

설치 파일이 유효해도 이미 실행 중인 세션의 Agent 목록은 즉시 갱신되지 않을 수 있다. 이 경우 작업을 중단하거나 잘못된 형식으로 복사하지 말고:

1. 유효한 role 파일을 Read한다. Codex는 `developer_instructions`, Claude Code는 frontmatter 뒤 body를 읽는다.
2. 현재 main agent가 그 지침을 **inline omd-master persona**로 채택해 이번 run을 계속한다.
3. 사용자에게는 한 줄만 알린다: `역할 파일은 복구됐고, 이번 작업은 inline으로 계속해요. 다음 세션부터 전용 role이 자동 로드됩니다.`
4. 다음 새 세션을 위해 Codex는 project trust가 필요하고, 두 채널 모두 설치/업그레이드 후 재시작이 필요하다는 점을 마지막 handoff에 남긴다.

Step 4에서 전용 role spawn이 여전히 불가능하면 inline persona가 같은 phase/state/checkpoint 계약을 직접 실행한다. 산출물이나 사용자 checkpoint를 생략하지 않는다.

## Step 2 — Run 디렉토리 부트스트랩 (인라인 Bash)

이전엔 `omd harness "<task>" --internal` CLI를 호출했지만 1.0.0부터는 스킬이 직접 한다. 결정론적 hard verify gate:

### 2.1 기존 run 재사용 체크

```bash
ls -t .omd/runs 2>/dev/null | head -1
```

출력 있으면 그 디렉토리의 `task.md`를 Read해서 사용자 task와 의미적으로 일치하는지 확인. 일치하면 그 run 재사용 — Step 3으로 점프.

### 2.2 신규 run 부트스트랩

다음을 **반드시 정확히 이 순서로** Bash 툴로 실행:

```bash
# 2.2.1 — timestamp + slug 결정 (한국어 보존)
TS=$(node -e "console.log(new Date().toISOString().replace(/[:.]/g,'-'))")
SLUG=$(node -e "
const s = process.argv[1].toLowerCase().trim()
  .replace(/[^a-z0-9가-힣\s-]+/g,'')
  .replace(/\s+/g,'-')
  .replace(/-+/g,'-')
  .replace(/^-|-$/g,'');
console.log(s.slice(0,40) || 'untitled');
" "<EXTRACTED_TASK>")
RUN_ID="run-${TS}-${SLUG}"
RUN_DIR=".omd/runs/${RUN_ID}"

# 2.2.2 — 표준 서브폴더 생성
mkdir -p "${RUN_DIR}"/{wireframes,components,assets/briefs,assets/fallback,assets/pinterest-refs,eval/screenshots,persona-feedback,handoff,checkpoints}

# 2.2.3 — task.md
cat > "${RUN_DIR}/task.md" <<EOF
# Harness Task

<EXTRACTED_TASK>

---

- run_id: \`${RUN_ID}\`
- started_at: $(date -u +%Y-%m-%dT%H:%M:%SZ)
- cwd: \`$(pwd)\`
EOF

# 2.2.4 — run.log
echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] run initialized" > "${RUN_DIR}/run.log"

# 2.2.5 — .omd/.gitignore (idempotent)
mkdir -p .omd
[ -f .omd/.gitignore ] || printf "runs/\ncache/\n" > .omd/.gitignore

# 2.2.6 — INDEX.md (idempotent header + append)
INDEX=".omd/runs/INDEX.md"
[ -f "${INDEX}" ] || cat > "${INDEX}" <<EOF
# Harness Runs Index

One line per run. Append-only.

EOF
TASK_ONELINE=$(echo "<EXTRACTED_TASK>" | tr '\n' ' ' | cut -c1-120)
echo "- $(date -u +%Y-%m-%dT%H:%M:%SZ) \`${RUN_ID}\` — ${TASK_ONELINE}" >> "${INDEX}"

# 2.2.7 — 결과 출력 (이 스킬이 파싱)
echo "RUN_DIR=${RUN_DIR}"
echo "RUN_ID=${RUN_ID}"
```

### 2.3 Hard verify gate (master spawn 차단 조건)

부트스트랩 다음, master spawn 전에 반드시:

```bash
test -d "${RUN_DIR}" && test -f "${RUN_DIR}/task.md" && echo "OK" || echo "FAIL"
```

`OK`가 출력되지 않으면 master는 절대 spawn하지 않는다. 사용자에게:

```
하네스 부트스트랩이 실패했어요 (run dir or task.md 누락). 디스크 권한·경로 문제일 수 있어요. 다시 시도하거나 .omd/ 디렉토리를 정리해주세요.
```

이 gate를 통과해야만 Step 2.5로.

## Step 2.5 — CTX-PRIME — 코드베이스 자동 분석 (v1.6.0+)

reference를 고르라고 사용자에게 묻기 전에 **먼저 레포를 본다**. 사용자가 듣고 싶은 첫 문장은 "이 레포 분석했어요 — Next.js 14 + 토스 블루 + 4개 surface" 같은 *진단*이지 "어느 레퍼런스 골라드릴까요?"가 아니다.

### 2.5.1 — ctx-prime helper 실행

```bash
# HELPER resolution (먼저 존재하는 것 사용):
#   1. .codex/data/scripts/ctx-prime.cjs    ← Codex installer copy
#   2. .claude/data/scripts/ctx-prime.cjs   ← Claude Code / Cursor installer copy
#   3. .opencode/data/scripts/ctx-prime.cjs ← OpenCode installer copy
#   4. node_modules/oh-my-design-cli/scripts/ctx-prime.cjs  (로컬 npm 설치)
#   5. $(npm root -g)/oh-my-design-cli/scripts/ctx-prime.cjs (global)
HELPER=""
for CANDIDATE in \
  ".codex/data/scripts/ctx-prime.cjs" \
  ".claude/data/scripts/ctx-prime.cjs" \
  ".opencode/data/scripts/ctx-prime.cjs"; do
  if [ -f "$CANDIDATE" ]; then HELPER="$CANDIDATE"; break; fi
done
if [ -z "$HELPER" ]; then
  OMD_DIR=$(npm root)/oh-my-design-cli
  [ -d "$OMD_DIR" ] || OMD_DIR=$(npm root -g)/oh-my-design-cli
  HELPER="$OMD_DIR/scripts/ctx-prime.cjs"
fi
[ -f "$HELPER" ] || { echo "CTX_PRIME_MISSING"; exit 0; }

node "$HELPER" "$(pwd)" "${RUN_DIR}"
```

성공 시 `${RUN_DIR}/ctx-prime.json` 생성. ~12-50ms (typical repo).
ctx-prime.cjs는 활성 host의 `.codex/data/scripts/`, `.claude/data/scripts/`, 또는 `.opencode/data/scripts/`에 installer가 복사하므로 패키지 dir 없이도 동작한다 (companion `context.cjs`도 같은 폴더에 함께 복사됨).

`CTX_PRIME_MISSING` (모든 local/global 경로 miss) → Step 3로 직진 (legacy path).

### 2.5.1b — Council-prime decision ledger (v1.9.733+)

고정된 audience + 4문항을 바로 묻지 않는다. 먼저 `design-council-prime.cjs`를
`ctx-prime.cjs`와 같은 resolution order로 찾아 실행한다:

```bash
COUNCIL_HELPER="$(dirname "$HELPER")/design-council-prime.cjs"
[ -f "$COUNCIL_HELPER" ] && node "$COUNCIL_HELPER" "$(pwd)" "${RUN_DIR}"
```

`council/decision-ledger.json`이 생성되면 이것이 intake의 단일 source of
truth다. 아래 2.5.2–2.5.3 고정 picker는 실행하지 않는다.

1. `auto`이면서 `proposed_value`가 있는 항목만 `prefilled_slots[slot]`에 적재.
2. `interview` 항목만 한 번의 최대 4-question batch로 질문. ledger의
   `options`와 `reason`을 사용하고 근거 없는 추천 표시는 만들지 않는다.
3. `defer`는 묻거나 채우지 않고 `deferred_slots`에 id/slot/reason을 보존.
4. `blocked`가 하나라도 있으면 진행하지 않고 필요한 evidence/authority만 알림.
   `dispatch-plan.json`의 `dispatch_suppressed_by_blocked: true`는 이미 결정론적으로
   blocker가 확인됐다는 뜻이다. blocker가 풀리기 전에는 자문 agent를 호출하지 않는다.
5. auto 값과 사용자 답을 slot에 매핑해 handoff에
   `decision_ledger_ref: "council/decision-ledger.json"`와 함께 기록.

이 분류를 host가 prose로 다시 구현하지 않는다. council helper와 같은 폴더의
`design-council-handoff.cjs`를 사용해 checkpoint를 materialize한다:

```bash
HANDOFF_HELPER="$(dirname "$COUNCIL_HELPER")/design-council-handoff.cjs"
[ -f "$HANDOFF_HELPER" ] && node "$HANDOFF_HELPER" "$(pwd)" "${RUN_DIR}" prepare
```

- `status: blocked` → 질문을 만들지 않고 `blocking_items`만 사용자에게 알린 뒤 중단.
- `status: ask_user` → `questions_file`의 product-authority 질문만 한 batch로 제시.
- `state: PROPOSE_PLAN` → 질문 없이 Step 3으로 진행.

checkpoint materialize 직후 같은 helper dir의 context planner를 실행한다:

```bash
CONTEXT_HELPER="$(dirname "$COUNCIL_HELPER")/design-harness-context-plan.cjs"
[ -f "$CONTEXT_HELPER" ] && node "$CONTEXT_HELPER" "$(pwd)" "${RUN_DIR}" relay
```

`${RUN_DIR}/handoff/context-plan.json`을 읽고 그대로 따른다. `relay_blocked`와
`relay_questions`는 master를 spawn하지 않고 launcher가 기존 artifact를 exact relay한다.
`resume_master`/`run_master`만 master를 호출하며, `sidecars`에 적힌 파일만 active
channel skill tree에서 추가로 읽는다. planner가 없는 legacy install에서만 master의
내장 conditional pointer를 사용한다. sidecar를 관성적으로 전부 로드하지 않는다.

질문 답은 `${RUN_DIR}/checkpoints/council-intake.answers.json`에 저장한다. 답변
객체에는 handoff의 `checkpoint_id`, `ledger_sha256`, `questions_sha256`를 그대로
복사하고 `answers` 아래 decision id별 응답을 넣는다. 이 receipt가 없거나 현재
ledger/questions hash와 다르면 재질문 없이 fail-close한다. 이후 다음처럼 병합한다.
helper는 모든 required interview가 답변됐을 때만 PROPOSE_PLAN을 쓴다.

```bash
node "$HANDOFF_HELPER" "$(pwd)" "${RUN_DIR}" apply \
  "${RUN_DIR}/checkpoints/council-intake.answers.json"
```

`interview`가 0개면 질문 없이 Step 3으로 간다. 이 단계는 deterministic
intake 분류이며 multi-agent council이 실행됐다고 표현하지 않는다. helper
누락·실패 때만 아래 legacy path를 사용한다.

기존/current surface의 개선 작업에서 ctx-prime이 confidence 0.75 이상의
audience evidence와 단일 surface를 함께 보유하면 audience와 scope는 값을 새로
확정하지 않고 `defer`한다. 사용자가 action 변경을 요청하지 않았다면 primary CTA도
같은 surface evidence에 묶어 `defer`한다. 이 decision들은 council에도 보내지
않는다. 이는 기존 제품 방향과 행동 계약을 보존하는 것이며 unknown을 채우거나 새
사실을 auto하는 규칙이 아니다. root `index.html`도 하나의 실제 surface로 센다.

### 2.5.1c — Bounded advisory council (v1.9.735+)

`council/dispatch-plan.json`을 읽는다. `dispatch_required: false`면 agent를
호출하지 않고 2.5.1b의 ledger를 그대로 사용한다. `true`면 아래 계약으로
**선택된 lane만**, **한 번**, **최대 2개** 병렬 실행한다.

1. `selected_lanes`의 `role`과 `decision_ids`를 그대로 사용한다. 전체 역할을
   관성적으로 호출하거나 선택되지 않은 쟁점을 추가하지 않는다.
2. 각 agent는 제품 파일을 수정하지 않는 read-only 자문이다. 유일한 write
   ownership은 `council/lanes/<lane_id>.json`이다.
3. 출력은 `{ "lane_id": "...", "claims": [...] }`이고, 각 claim은
   `decision_id`, `decision_mode`, `authority_mode`, `recommendation`, `reason`,
   `evidence`를 포함한다.
   - `decision_mode`: `preserve-existing | choose-new | unknown`
   - `authority_mode`: `preserve-existing | user-answerable | external-unverifiable | unknown`
   - 기존 audience/scope/CTA 계약을 그대로 지키는 일은
     `preserve-existing/defer`다. 새 제품 결정을 한 것이 아니다.
   - 제품 소유자가 답할 수 있는 price/packaging/CTA/audience/scope/security/data
     결정은 `choose-new/user-answerable/interview`다.
   - 사용자 선호로 대체할 수 없는 공식 brand source나 측정 fact 부재만
     `external-unverifiable/blocked`다.
   `evidence`는 실제 존재하는 repo/run-relative 경로여야 한다. 인용할 근거가
   없으면 claim을 만들지 않는다.
4. agent/role을 사용할 수 없거나 실행이 실패하면 재시도하거나 다른 모델의
   의견을 꾸며내지 않는다. 해당 lane에
   `{ "lane_id": "...", "status": "unavailable", "claims": [] }`를 쓰고
   원래 disposition을 보존한다.
5. 모든 lane 종료 뒤 council-prime과 같은 폴더의 reconciler를 한 번 실행한다:

```bash
RECONCILE_HELPER="$(dirname "$COUNCIL_HELPER")/design-council-reconcile.cjs"
[ -f "$RECONCILE_HELPER" ] && node "$RECONCILE_HELPER" "$(pwd)" "${RUN_DIR}"
```

이후 `council/reconciled-ledger.json`을 intake authority로 사용한다. council은
`interview ↔ defer/blocked` 범위의 자문만 할 수 있고, 이미 확정된 `auto` 값은
snapshot hash로 동결된다. 어떤 자문도 `auto`로 승격할 수 없다. `blocked`가
남으면 정확히 필요한 evidence/authority만 알리고 중단한다. 각 항목은
`effective_disposition`을 우선 사용하며 없으면 원래 `disposition`을 쓴다.
`interview`만 한 번의 최대 4-question batch로 묻는다. `blocked`는 interview와
같은 것으로 세지 않는다. blocked는 필요한 외부 근거를 알리고 멈추며,
user-answerable 결정은 blocked로 바꾸지 않고 interview에 남긴다. 실제
`council/debate.json`이 생성되지
않았으면 council이 실행됐다고 표현하지 않는다.

### 2.5.2 — Legacy: ctx-prime.json Read + 사용자 picker 게이트

Read 툴로 `${RUN_DIR}/ctx-prime.json` 로드. 다음 필드만 사용자에게 한 줄로 brief:

- `stack.framework`, `stack.kind`, `brand_signal.dominant_color_hex`
- `surface_inventory.length` (몇 개 surface 발견)
- `brand_signal.language` (ko / en / ja)

**AskUserQuestion 1개**를 다음 shape로:

```
question: "이 레포 분석했어요 — {framework} + {dominant_color_hex} 베이스 + {N}개 surface ({language} 카피). 이번 작업의 1차 타깃 페르소나는?"
header: "Audience"
options: ctx-prime.audience_hypothesis 상위 3개 → label/description 매핑
  - audience_hypothesis[0]: label + "(추천)", description = evidence
  - audience_hypothesis[1]: label, description = evidence
  - audience_hypothesis[2]: label, description = evidence (없으면 생략)
```

(AskUserQuestion이 자동 "Other" 추가하므로 자유 입력 페르소나도 가능. Codex / OpenCode 등 AskUserQuestion이 없는 채널은 같은 question + option을 prose로 묻고 자유 텍스트 답을 받는다 — #21.)

사용자 답을 `ctx-prime.json`에 `confirmed_audience` 필드로 merge (Edit 또는 Write):

```jsonc
{
  // ... 기존 필드 ...
  "confirmed_audience": "외부 트래픽 — SEO/conversion 우선, 톤 일탈 허용"
}
```

### 2.5.3 — Legacy: Interview-lite (2-4 picker 묶음)

페르소나 확정 직후 **AskUserQuestion 1번 더, 최대 4개 question 묶음**. ctx-prime 결과를 활용해 picker option을 동적 구성:

> **채널 분기 (#21)**: Claude Code 채널에서는 반드시 AskUserQuestion 툴로 제시 — 복수 답이 자연스러운 question(예: wow moment 여러 개 허용 시)은 `multiSelect: true`. Codex / OpenCode 등 툴이 없는 채널은 같은 question 묶음을 prose 1회 배치로 묻고 자유 텍스트 답을 받는다. 어느 채널이든 question 수 budget은 동일(아래 최대 4개) — 추가 게이트 금지.

**Question 1 — exit_scope:**
- "단일 화면만 (한 surface 깊이)"
- "풀 랜딩 (hero + features + CTA + footer)" — 추천 (대부분의 경우)
- "다중 surface (랜딩 + product preview + docs)"

**Question 2 — wow moment:**
- ctx-prime.wow_moment_candidates 상위 3개 + "Other"

**Question 3 — primary CTA:**
- "Sign-up / Get started" — 추천 if audience=외부
- "Book demo / Contact sales"
- "GitHub star / View source"
- "View docs / Read more"

**Question 4 — visual grounding:**
- "Live reference capture (느림, 정확)" — 추천 if exit_scope=풀랜딩
- "Catalog-only (빠름, generic)"

답을 `${RUN_DIR}/handoff/.handoff.json`에 prefilled_slots로 적재:

```bash
mkdir -p "${RUN_DIR}/handoff"
cat > "${RUN_DIR}/handoff/.handoff.json" <<EOF
{
  "state": "PROPOSE_PLAN",
  "prefilled_slots": {
    "audience": "<confirmed_audience>",
    "exit_scope": "<answer 1>",
    "wow_moment": "<answer 2>",
    "cta_primary": "<answer 3>",
    "visual_grounding": "<answer 4>"
  },
  "ctx_prime_ref": "ctx-prime.json",
  "created_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF
```

이 시점부터 master는 SLOT_GATE를 건너뛰고 PROPOSE_PLAN으로 직행한다 (master INTAKE 분기 참고).

### 2.5.4 — Backward compatibility

`ctx-prime.json` 누락 또는 사용자가 picker에서 "Other → 알아서 골라줘" 답하면 Step 3 (reference picker) 그대로 진행. `prefilled_slots` 없으면 master는 legacy SLOT_GATE 흐름.

## Step 3 — DESIGN.md 존재 확인 + reference 의미 매칭

먼저 `council/decision-ledger.json`의 `design-system-disposition`을 읽는다.

- `reuse` → 기존 root `DESIGN.md`를 사용하고 reference picker를 건너뛴다.
- `surface-local-only` → root `DESIGN.md`를 만들지 않고 현재 run의 local
  surface contract만 사용한다. reference picker를 건너뛴다.
- `establish` 또는 `refresh` → 아래 reference 의미 매칭을 보조 evidence로
  사용할 수 있다. reference는 제품 사실이나 시스템 전체를 소유하지 않는다.
- `interview` → checkpoint 답변 전에는 reference를 고르지 않는다.
- `blocked` → 중단한다.

기존 root `DESIGN.md`를 사용하는 경우 이 시점에 read-only format
inspection을 남긴다: `core-v2-bound | core-v2-portable | legacy-13 |
legacy-15 | legacy-16 | unmarked | absent`. 채택된 `profile: portable-core`
manifest가 exact graph/projection hash를 검증할 때만 `core-v2-bound`다.
`migration-candidate`는 named source DESIGN.md authority를 유지한다. 이 단계에서
문서를 개명·재정렬·덮어쓰지
않는다. Core v2가 아닌 입력은 Phase 5의 provider-free staged
migration으로만 전환하고, `dropped=0` 수용 게이트를 건너뛰지 않는다.

### 3.0.1 Core writer boundary

Harness Phase 5 agents author only graph/provenance/coverage drafts. After the
frozen ledger explicitly authorizes `establish` or `refresh`, the master uses
`omd design-md prepare-review <graph> --provenance <provenance> --coverage <coverage> --out-dir <review>`
(plus the migration report when applicable) to
produce the exact non-authoritative checkpoint preview. After mandatory checkpoint
#2 approval, it invokes `omd design-md approve-review` and the fully receipt-bound
`omd design-md compile ... --review-receipt <approval> --out-dir <fresh> --adopt`.
The only installed fallback is the exact `prepare-design-md-core-review.cjs`,
`compile-design-md-core.cjs`, and `adopt-design-md-core.cjs` helper chain with the
same inputs; the master never reconstructs it.
`DESIGN.md`, section anchors, all seven `design-md:claim` openers, every
`design-md:claim-end`, manifest, and binding hashes are compiler-owned; never
hand-write or patch them. A migration candidate remains non-authoritative.
The graph draft omits `projection`/`projection.sha256`; a compiler that demands a
placeholder, precomputed, or zero SHA fails closed before staging.

Compiler conformance is not factual, provenance, license, locale,
accessibility, or visual-quality proof. The fresh package must also contain exact
provenance/coverage bindings and pass the installed final project-system
validator. If those bindings, the deterministic checkpoint packager, or the
atomic package adopter are unavailable, fail closed at staging without manual
hashes or partial project copies. Project mutation is only through
`omd design-md prepare-checkpoint <fresh> --reviewer <project-owner-id> --out <checkpoint> --authority-transition-approved`
then
`omd design-md adopt <fresh> --project-root <project-root> --checkpoint-receipt <checkpoint>`;
mandatory
checkpoint #2 remains the separate authorization to adopt exact frozen bytes.

ledger가 없는 legacy install에서만 기존 동작처럼 프로젝트 루트에 DESIGN.md가
없으면 reference를 직접 추천한다. 외부 API 호출 없음.

### 3.1 카탈로그 로드

다음 data dir을 순서대로 확인해, 세 파일이 함께 있는 첫 dir에서 전부 Read한다:

1. `.codex/data/`
2. `.claude/data/`
3. `.opencode/data/`
4. `node_modules/oh-my-design-cli/data/`
5. 패키지 개발 root `data/`

- `reference-fingerprints.json` — reference fingerprint (tone keywords, visual theme, antipatterns, signature motion, has_personas, category)
- `reference-tags.md` — 사람-읽기용 keyword 매트릭스
- `vocabulary.json` — controlled vocab

채널을 알 수 있으면 그 채널 dir을 우선하되, 서로 다른 dir의 세 파일을 섞지 않는다.

선택된 reference DESIGN.md는 다음 순서로 resolve한다:

<!-- omd:catalog-resolution-order — omd-init/omd-reference-capture SKILL.md + agents/omd-master.md 와 동일 순서 강제. drift guard: test/unit/core/catalog-resolution-order.test.ts -->

1. `.codex/data/references/<id>/DESIGN.md`
2. `.claude/data/references/<id>/DESIGN.md`
3. `.opencode/data/references/<id>/DESIGN.md`
4. `node_modules/oh-my-design-cli/web/references/<id>/DESIGN.md`
5. `web/references/<id>/DESIGN.md`
6. `https://oh-my-design.kr/<id>/design.md`

### 3.2 사용자 task 분석 (silent)

- controlled-vocab 키워드 추출 (예: "헬스/웰니스 / calm-blue / 차분" → `[calm, minimal, approachable, warm]`)
- 명시 brand hint (예: "토스 같은" → `["toss"]`)
- 카테고리 추측 (Consumer / Productivity / Fintech / AI / Developer Tools / Design Tools / Automotive / Aerospace / SaaS / Enterprise)

### 3.3 점수 계산 (in-head, 결정론적)

- 각 ref의 `tone_keywords` ∩ task keywords → 1점/매칭
- brand hint match → +5점
- 카테고리 일치 → +1점
- top 5 정렬

### 3.4 검증 (hallucination 방지)

추천하는 모든 id는 `reference-fingerprints.json`의 `items[].id`에 **반드시** 존재해야 한다. 없는 id는 만들어내지 않는다.

### 3.5 사용자에게 제시 (자연어 prose)

라벨 없이, 추천을 statement로:

```
DESIGN.md가 없어서 reference 한 개를 골라 부트스트랩할게요. <task 핵심 한 줄>을 보니 <top1.id>가 가장 잘 맞을 것 같아요 — <visual_theme 핵심 + 매칭 키워드 1-2개를 한 줄로>.

이대로 가시려면 go (또는 <top1.id>).
다른 후보: <top2.id> (한 줄 이유) · <top3.id> (...) · <top4.id> (...) · <top5.id> (...)
본인이 아는 다른 reference면 한 줄로 id만 (예: vercel) — reference 카탈로그에 없으면 알려드립니다.
```

### 3.6 사용자 응답 처리

- `go` 또는 reference id (top-5 안) → 그 id로 master spawn
- 다른 reference id (top-5 밖이지만 카탈로그 안) → 동일하게 진행
- 카탈로그에 없는 id → "해당 id는 reference 카탈로그에 없어요. top-5 중에서 골라주세요."
- `중단` → 종료

### 3.7 라이브 reference capture (선택)

선택된 reference의 라이브 사이트에서 디자인 토큰 + 시각 reference + 폰트를 가져오면 master phase 정확도가 크게 올라간다. 단일 mode (이전의 clone/inspired 갈래는 v1.3.3에서 폐기 — 시각 동일성은 brand creative work을 가져와야 가능하고, 그건 IP 영역).

사용자에게 한 줄로 묻기:

```
<id> 라이브 자료를 가져올까요? (토큰·구조 cue·폰트·hero screenshot)

가져옴: 컬러·radius·간격·폰트(open-source CDN)·구조 cue(carousel/CTA 모양/nav)·voice register
가져오지 않음: brand mascot 일러스트·마케팅 사진·로고(사용자 자체 자산으로 시작)

답: yes / skip
```

`yes` → omd:reference-capture skill 호출 (Skill 툴) → 끝나면 Step 4로
`skip` → 바로 Step 4

omd:reference-capture는 LICENSE-NOTE.md / attribution.md / fonts.json / structure.json 작성. 모든 brand-identifying 자산은 `assets/_reference/<id>/`에 reference 용도로 보존되며 사용자 product DOM에는 들어가지 않는다.

## Step 3.8 — Surface signal 추출 (master prompt에 한 줄 전달)

사용자 task에서 surface idiom 신호 추출. 이 신호는 master가 reference-capture 자료 중 어떤 부분을 더 무겁게 볼지 결정한다.

### 키워드 → surface 매핑

| 키워드 (KR/EN/JP/TW) | surface_signal |
|---|---|
| `랜딩`, `홈`, `메인`, `landing`, `home`, `main`, `marketing`, `홍보`, `프로모션`, 「ランディング」, `首頁` | **`marketing`** |
| `대시보드`, `앱`, `화면`, `설정`, `관리`, `dashboard`, `app`, `settings`, `console`, `admin`, 「ダッシュボード」, `儀表板` | **`product`** |
| `문서`, `가이드`, `docs`, `documentation`, `help`, 「ドキュメント」, `文件` | **`docs`** |
| `온보딩`, `시작하기`, `가입`, `onboarding`, `signup`, 「オンボーディング」, `註冊` | **`onboarding`** |
| (위에 매치 없음) | **`null`** (master 자유 판단) |

### Step 4 prompt에 포함되어야 할 필드

기존 `<RUN_DIR + task + chosen_ref_id>` 에 surface_signal과 reference-capture 자료 경로를 명시:

```
RUN_DIR: <path>
task: <user task>
chosen_ref_id: <id>
surface_signal: marketing | product | docs | onboarding | null
reference_capture_dir: assets/_reference/<id>/ | null
delivery_intent: implement | design-only
design_md_format: core-v2-bound | core-v2-portable | legacy-13 | legacy-15 | legacy-16 | unmarked | absent
```

reference_capture_dir이 존재하면 master는 그 디렉토리의 `tokens.json`, `structure.json`, `screenshots/*.png` 를 **모두 활용**한다 (canonical DESIGN.md만 보지 말 것).

## Step 4 — Master 호출 (handoff loop)

Subagent (master)는 AskUserQuestion 직접 호출 불가 (main-thread 전용). file-based handoff 패턴으로 돌린다.

### Master visual grounding — progressive disclosure

시각 디자인·component·prototype phase로 master를 spawn하기 직전에만
`references/master-visual-grounding.md`를 전부 읽는다. intake 분류, 질문 relay,
blocked handoff에는 이 sidecar를 읽지 않는다. 읽은 뒤에는 전체 문서를 prompt에
복사하지 말고 reference, surface signal, verified font, archetype, asset mode,
protected behavior, unresolved group만 한 단락으로 요약해 전달한다.

이 sidecar의 unknown-means-absent, verified-asset, shared-container, reveal safety,
responsive 규칙은 regression gate다. `omd-asset-fetch`가 URL·license·fallback의
단일 source of truth이며 harness가 CDN catalog를 복제하지 않는다.

### 루프 의사코드

```
spawn_count = 0
prompt = "<grounding sidecar에서 추린 evidence summary> + <RUN_DIR + task + chosen_ref_id + surface_signal + reference_capture_dir>. Phase 1부터 시작."

while spawn_count < 12 (safety cap):
  result = Agent({
    subagent_type: "omd-master",
    description: "Run design harness round N",
    prompt: prompt
  })
  spawn_count += 1

  handoff_path = "<RUN_DIR>/.handoff.json"
  if not exists(handoff_path):
    relay result text to user; halt

  handoff = JSON.parse(Read(handoff_path))

  if handoff.user_prose:
    print handoff.user_prose to user

  if handoff.status == "done": break to Step 5
  if handoff.status == "error": halt + show
  if handoff.status == "blocked": relay handoff.user_prose + blocking_items; halt
  if handoff.status == "ask_user":
    questions = JSON.parse(Read(handoff.questions_file))
    answers = AskUserQuestion({ questions: questions.questions })
    answers_file = "<RUN_DIR>/checkpoints/<handoff.checkpoint_id>.answers.json"
    Write(answers_file, JSON.stringify({checkpoint_id, answers}))
    prompt = "continue checkpoint:" + handoff.checkpoint_id + " — answers at " + answers_file
```

## Step 5 — Delivery bridge (checkpoint #3 이후만)

master가 `ARCHIVE_RUN`에서 `<RUN_DIR>/handoff/delivery.json`을 작성해야 한다. launcher는 `status: done`을 받으면 이 파일을 읽는다.

- `delivery_intent: design-only` → artifact와 unresolved를 사용자에게 전달하고 종료.
- `delivery_intent: implement` → 현재 main agent가 `implementation_owner`를 이어받아 `omd:apply`의 implement/change 경로로 제품 파일을 편집한다.

delivery packet 최소 shape:

```json
{
  "intent": "implement",
  "task": "<user outcome>",
  "consumer_route": "<real route or null>",
  "acceptance": [],
  "protected_behaviors": [],
  "evidence": [],
  "unknowns": [],
  "implementation_owner": "main-agent-after-checkpoint-3",
  "artifacts": [],
  "verification": { "routes": [], "viewports": [], "states": [], "commands": [] }
}
```

main agent는 다음 순서를 지킨다.

1. delivery packet과 승인된 artifact를 읽는다.
2. `consumer_route`가 null이면 코드에서 실제 사용자 진입 경로를 찾는다. 추정 route로 대체하지 않는다.
3. 제품 동작을 보존하며 승인 범위만 통합한다.
4. 변경 전과 **같은 route·viewport·state**에서 다시 검증한다.
5. `<RUN_DIR>/handoff/delivery-verification.json`에 changed product files, 실행한 checks, unresolved를 기록한다.

제품 파일 변경과 실제 route 검증 전에는 `status: done`을 최종 delivery 완료로 해석하지 않는다. 그것은 design archive 완료일 뿐이다.

### Safety cap

한 번의 `/omd-harness` 호출에 최대 12 spawn. 초과 시 사용자에게 escalate ("master가 12 spawn 초과, 멈춥니다 — run dir 보존").

### 재진입

사용자가 자연어로 "go" / "fix X" 답하면 동일 loop 재시작. master는 `.handoff.json` 보고 어디까지 갔는지 파악.

## 사용자 체크포인트 처리

Master가 체크포인트에서 turn을 종료한 후 다음 사용자 메시지가:

- **하네스 컨텍스트 안의 응답** (예: "go", "fix the home screen IA", "stop") → master 재spawn + 그대로 전달
- **다른 작업으로 바뀐 메시지** → run 디렉토리에 `paused.flag` 생성. 나중에 `/omd-harness resume` 하면 재개

## 산출물 위치 (master가 emit, 이 스킬은 안내만)

```
.omd/runs/run-<ts>-<slug>/
├── task.md
├── brief.md
├── references-cited.md
├── journey.mmd
├── wireframes/
├── DESIGN.md.patch
├── system/
│   ├── graph.draft.json
│   ├── provenance.draft.json
│   ├── coverage.draft.json
│   ├── adopted-candidate/
│   ├── graph.patch.json
│   ├── manifest.patch.json
│   ├── provenance.patch.json
│   ├── coverage.patch.json
│   └── checkpoint-manifest.json
├── components/
│   ├── manifest.json
│   └── microcopy.json
├── assets/
│   ├── brief.md
│   ├── manifest.json
│   ├── briefs/
│   ├── fallback/
│   └── pinterest-refs/
├── eval/
│   ├── deterministic.json
│   ├── jury.json
│   └── screenshots/
├── persona-feedback/
│   └── <persona>.json
├── critique.md
├── handoff/
│   ├── v0.zip
│   ├── cursor.zip
│   └── subframe.zip
├── run.log
└── postmortem.md
```

## 이 스킬이 하지 않는 것

- Phase 로직 실행 (master)
- Sub-agent 직접 spawn (master)
- 사용자 응답 해석/라우팅 (master)
- root DESIGN.md를 checkpoint 전에 직접 수정 (Phase 5 master는 graph drafts만
  작성하고 compiler/checkpoint packager가 만든 승인된 exact bytes만 atomic adopter로 적용)
- authority-neutral draft에는 `projection` binding을 쓰지 않는다. compiler가
  projection SHA를 요구하면 placeholder를 넣지 말고 fail-close한다.
- specialist 자문을 제품 구현 완료로 간주

## 금지

- Master 없이 phase를 직접 수행하지 말 것
- 사용자 체크포인트를 자동 승인하지 말 것
- DESIGN.md, section/claim/claim-end marker, manifest, binding hash를 수동으로
  만들거나 수정하지 말 것
- Run 디렉토리를 임의로 정리/삭제하지 말 것
- Step 2.3 verify gate 통과 전에 master spawn 절대 금지
