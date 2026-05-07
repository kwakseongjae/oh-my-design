---
name: omd:harness
description: "화면 전체나 신규 surface를 처음부터 디자인할 때의 진입점 — Discovery→Wireframe→Components→Microcopy→Validation 파이프라인을 omd-master 오케스트레이터로 실행. '랜딩 처음부터', 'production-ready', 'wireframe to production', 「一からデザイン」, 「從頭設計」류의 요청에 트리거. 단일 컴포넌트 수정은 omd:apply."
---

# omd:harness — Design Harness Entry

이 스킬은 **omd-master 오케스트레이터**를 호출하는 단일 진입점이다. 본 스킬은 launcher + 사전체크 + run 디렉토리 부트스트랩 책임만 가지고, phase 로직은 `agents/omd-master.md`에 있다.

CLI 의존 없음. 모든 부트스트랩은 Bash + Write 툴로 직접 실행한다.

## 트리거

- `/omd-harness <task>` 명시 호출
- 사용자가 자연어로 "디자인 하네스 / 시니어 디자이너처럼 / 알아서 디자인" 요청

## Step 0 — task 추출

슬래시에 task 같이 적었으면 (`/omd-harness 물 음용 유도 메인 화면`) 그 자연어 부분이 task. 빈 슬래시면 한 번 묻기:

```
어떤 디자인 작업을 진행할까요?
shape: "[도메인] + [톤/스타일] + [핵심 화면]" — 예: "토스 스타일 가족용 식단 앱 메인 화면"
```

## Step 1 — Subagent registration 사전체크 (CRITICAL)

`omd-master` subagent가 이 세션에 dispatch 가능한지 verify. Agent tool의 사용 가능 subagent 목록에 `omd-master`가 있으면 진행. 없으면:

```
omd-master subagent가 이 세션에 등록되어 있지 않아요. Claude Code는 세션 시작 시점에만 .claude/agents/*.md를 로드합니다 — install-skills를 세션 띄운 후에 돌렸으면 이 케이스.

해결 (가장 빠른 순서):
1. 현재 세션에서 /agents 실행 — Claude Code가 .claude/agents/*.md 강제 재스캔. omd-* 8개가 목록에 나타나면 /omd-harness 재호출.
2. 안 되면: Claude Code 앱 완전 종료 (Cmd+Q / 터미널 자체 quit) → 새 터미널 → claude 재실행 → /omd-harness <task> 재호출.
```

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

이 gate를 통과해야만 Step 3로.

## Step 3 — DESIGN.md 존재 확인 + reference 의미 매칭

프로젝트 루트에 DESIGN.md 없으면 reference를 직접 추천한다. 외부 API 호출 없음.

### 3.1 카탈로그 로드

다음 파일을 Read 툴로 전체 로드:

- `.claude/data/reference-fingerprints.json` — 67개 reference의 fingerprint (tone keywords, visual theme, antipatterns, signature motion, has_personas, category)
- `.claude/data/reference-tags.md` — 사람-읽기용 keyword 매트릭스
- `.claude/data/vocabulary.json` — controlled vocab

`.claude/data/`에 없으면 `node_modules/oh-my-design-cli/data/` 또는 패키지 root `data/` 에서 fallback.

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
본인이 아는 다른 reference면 한 줄로 id만 (예: vercel) — 67개 카탈로그에 없으면 알려드립니다.
```

### 3.6 사용자 응답 처리

- `go` 또는 reference id (top-5 안) → 그 id로 master spawn
- 다른 reference id (top-5 밖이지만 카탈로그 안) → 동일하게 진행
- 카탈로그에 없는 id → "해당 id는 67개 카탈로그에 없어요. top-5 중에서 골라주세요."
- `중단` → 종료

## Step 4 — Master 호출 (handoff loop)

Subagent (master)는 AskUserQuestion 직접 호출 불가 (main-thread 전용). file-based handoff 패턴으로 돌린다.

### 루프 의사코드

```
spawn_count = 0
prompt = "<RUN_DIR + task + chosen_ref_id>. Phase 1부터 시작."

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

  if handoff.status == "done": halt
  if handoff.status == "error": halt + show
  if handoff.status == "ask_user":
    questions = JSON.parse(Read(handoff.questions_file))
    answers = AskUserQuestion({ questions: questions.questions })
    answers_file = "<RUN_DIR>/checkpoints/<handoff.checkpoint_id>.answers.json"
    Write(answers_file, JSON.stringify({checkpoint_id, answers}))
    prompt = "continue checkpoint:" + handoff.checkpoint_id + " — answers at " + answers_file
```

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
- DESIGN.md 직접 수정 (Phase 5에서 master)

## 금지

- Master 없이 phase를 직접 수행하지 말 것
- 사용자 체크포인트를 자동 승인하지 말 것
- Run 디렉토리를 임의로 정리/삭제하지 말 것
- Step 2.3 verify gate 통과 전에 master spawn 절대 금지
