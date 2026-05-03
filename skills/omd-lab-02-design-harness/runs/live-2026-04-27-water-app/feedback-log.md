# Live Feedback Log — water-app first-run (2026-04-27)

**Lab version:** v1 baseline
**Task:** "물을 하루 3번 이상 음용하도록 유도하는 웹앱의 메인 화면"
**Driver:** kwakseongjae (별도 Claude Code 세션)
**Observer:** main session (this conversation) — applies critical fixes immediately, queues non-critical observations.

## Triage policy

| Severity | Definition | Action |
|---|---|---|
| **critical** | Run blocks / crashes / produces fundamentally wrong artifact / safety violation | Fix immediately in source, rerun affected step |
| **major** | Causes user friction or wrong UX in the moment but run continues | Note here, fix between steps if cheap, otherwise after run |
| **minor** | Quality / polish observation | Note here, batch into v2 playbook hypotheses |

## Step-by-step log

### Pre-flight
- ✅ npm link done
- ✅ install-skills extended to copy `.claude/agents/` and `.codex/agents/`
- ✅ API-key warnings purged across 4 places (CLI / master / skill / playbook)
- ✅ Question discipline (`[Q]`/`[C]` + ⭐ recommendation) added to omd-master
- ✅ postinstall + install-skills outro + harness short-task-hint added

### Step 1 — wipe + fresh init ✅
- 2026-04-27 17:47 — empty `~/Desktop/projects/water-app/` confirmed

### Step 2 — install-skills ✅
- 8 agents installed: master / ux-researcher / asset-curator / ui-junior / microcopy / a11y-auditor / persona-tester / critic

### Step 3 — install-skills v2 (re-run, clean) ✅
- 2026-04-28 — `cd .. && rm -rf water-app && mkdir water-app && cd water-app` clean restart, then `omd install-skills --agent claude-code` → 19 files written.
- ✅ 7 skills (.claude/skills/omd-*)
- ✅ 8 agents (.claude/agents/omd-*) — generated from canonical agents/
- ✅ 4 data files (.claude/data/{reference-fingerprints,reference-tags,vocabulary,synonyms}) — for skill-side semantic matching

### Step 4 — /omd-harness in Claude Code (pending)

### Step 5 — Phase 1 Discovery answers (pending)

### Step 6+ — checkpoints (pending)

---

## Critical fixes applied mid-flight

### 2026-04-27 17:50 — `omd harness` CLI step folded into `/omd-harness` skill
- **Reported by:** user — "왜 별도 CLI 호출이 필요한지 모르겠다 / 사용자 task 두 번 입력하는 꼴"
- **Root cause:** Original design exposed 2 entry points (CLI bootstrap + skill spawn). The CLI is deterministic mkdir+slug+INDEX; the skill is the LLM-driven orchestrator. Splitting them was technical correctness without UX justification — user enters task twice.
- **Fix:**
  - `skills/omd-harness/SKILL.md` updated: skill now (a) extracts task from slash-arg or asks `[Q]` once, (b) finds latest run dir or calls `omd harness "<task>"` Bash internally to bootstrap, (c) reuses if task matches.
  - CLI command (`omd harness "..."`) still works standalone for power users.
  - User-facing entry point now a single `/omd-harness <task>`.
- **Trade-off accepted:** skill must Bash-call CLI (one extra round-trip) but determinism (slug consistency, INDEX append) stays in compiled CLI not LLM prose.

## Critical fixes applied mid-flight (continued)

### 2026-04-27 17:55 — slash command 표기 `omd:harness` → `omd-harness` (Claude Code 컨벤션)
- **Reported by:** user — "Unknown command: /omd:harness. Did you mean /omd-harness?" (Claude Code의 자동 안내)
- **Root cause:** Claude Code의 슬래시 명령은 콜론(`:`)을 받지 않음. 스킬 frontmatter의 `name: omd:harness`는 namespace ID로 유효하지만, 사용자가 실제 입력하는 슬래시는 하이픈으로 정규화됨. 모든 user-facing 문서·메시지가 `/omd:harness`로 잘못 표기되어 있었음.
- **Fix:** 7 파일 일괄 치환 (스크립트로):
  - `src/cli/install-skills.ts` outro
  - `src/cli/harness.ts` Next 패널 3곳
  - `scripts/postinstall.cjs` 3곳
  - `skills/omd-harness/SKILL.md` 트리거·설명
  - `research/harness-design/06-omd-integration-design.md` 2곳
  - `research/harness-design/docs-todo.md` 3곳
  - 본 feedback-log.md 자체
- **Trade-off accepted:** frontmatter `name: omd:harness`는 유지 (기존 `omd:init`/`omd:apply` 컨벤션 일관성). 사용자 입력만 하이픈.

### 2026-04-27 18:15 — 질문 형식이 사용자에게 내부 분류(`[C]` + (a)(b)(c))를 그대로 누출
- **Reported by:** user — "C하니까 AB는? 궁금증이 생김. 갑자기 C DESIGN 없음 이런식으로 뜨니까 당황스러워."
- **Root cause:** `[Q]`/`[C]` 와 `(a)(b)(c)` 라벨링은 *agent 내부 분류 도구*로 설계했는데, 출력 그대로 넣어버림. 사용자는 시니어 디자이너가 옆에서 폼을 작성시키는 것처럼 느낌. UX 누출.
- **Fix:**
  - `omd-master.md` Question discipline 섹션 재작성: 분류는 internal-only, 출력은 자연 prose. 추천을 *문장*으로 리드하고 대안은 inline label(예: 또는 `init먼저` · `중단`)로.
  - Phase 1 8개 질문 — `(a)(b)(c)` 사라짐, prose batch.
  - Asset checkpoint #0 / Checkpoint #1, #2, #3 — 모두 prose 형식, 추천은 statement, 대안은 backtick label.
  - SKILL.md DESIGN.md 분기 — 동일하게 prose.
  - 금지 패턴 명시: `[Q]`/`[C]` 출력, `(a)(b)(c)` 라벨, ⭐ "추천" 태그 — 모두 X.
- **Trade-off accepted:** 라벨 명료성 약간 줄어듦 (사용자가 원하면 *명시적* 옵션 라벨이 더 빠를 수도). v2 후보: 토글 가능하게 `omd config harness.question_style = prose|formal`.

### 2026-04-27 18:25 — DESIGN.md 자동 부트스트랩 시 reference 하드코딩 ("toss")
- **Reported by:** user — "왜 토스 레퍼런스로 자동 부트스트랩? 사용자가 init 하는거처럼 레퍼런스도 고르고 막 할 수 있게. 아니면 사용자 프로젝트 성격에 맞춰 추천을."
- **Root cause:** SKILL.md DESIGN.md 분기에서 "toss reference로 자동 부트스트랩"이라고 하드코딩했음. OmD 철학(67 references 중 task에 맞춰 추천)과 정면 충돌. omd init은 이미 `omd init recommend` CLI로 top-5 추천을 제공하는데 하네스가 그걸 무시.
- **Fix:**
  - `skills/omd-harness/SKILL.md` step 2: `omd init recommend "<task>" --json --top 5` 호출 → top-5 reference + matchedKeywords 얻음 → 자연 prose로 제시 (1위는 statement-lead, 후보는 inline label).
  - 사용자 응답 처리: `go`(=top1) / 명시적 ref id (top-5 안 또는 밖) / `init먼저` / `중단`.
  - delta_set.warnings 감지 시 prose 위에 한 줄 알림.
  - `omd-master.md` Phase 5: `chosen_ref_id`를 SKILL이 spawn args로 넘기므로 verbatim 사용. 없으면 master가 직접 `omd init recommend` 호출 + prose 제시. **Hardcode 금지** 명시.
- **Consequence:** 사용자가 task에 맞는 reference (예: "헬스/웰니스 + calm-blue"면 toss 또는 line, "B2B SaaS dashboard"면 linear, "이커머스"면 stripe/shopify 등)를 자동 추천받음. 본인이 알고 있는 다른 reference도 한 줄로 override 가능.

### 2026-04-27 18:40 — `omd harness` CLI를 hidden internal helper로 강등 + 진입점 단일화 (`/omd-harness`만)
- **Reported by:** user — "왜 배시로 정적 기능을 호출? 그냥 다 있는데? 뭘 하는 기능?"
- **Root cause:** CLI는 deterministic slug+mkdir helper인데 사용자에겐 *진입점*처럼 노출되어 있었음. UX 메시지·README·outro·docs 곳곳에서 `omd harness` CLI 직접 호출을 권장 → "왜 진입점이 두 개?" 인식 발생.
- **Decision (option C):** 모든 사용자 진입은 skill/agent를 통해. CLI는 internal helper로 강등.
- **Fix:**
  - `bin/oh-my-design.ts`: `program.command('harness')` → `program.addCommand(harnessCmd, { hidden: true })`. `omd --help`에서 사라짐.
  - `--internal` 플래그 추가: skill이 호출할 때 friendly UX(intro/outro/Next panel) 모두 스킵, single-line JSON만 emit (`{runId, runDir, taskFile, labVersion, designMdExists}`).
  - `skills/omd-harness/SKILL.md`: `omd harness ... --internal` 호출 + JSON 파싱 명시.
  - `src/cli/install-skills.ts` outro: "Power user CLI" 라인 제거.
  - `AGENTS.md`: `omd harness` 직접 호출 섹션 → `/omd-harness` 단일 진입 명시. Codex 채널도 동일.
  - `scripts/postinstall.cjs`: 이미 `/omd-harness`만 — 변경 불필요.
- **Trade-off accepted:** CLI는 여전히 컴파일된 채로 남아있어 binary 크기 동일. Power user/CI 스크립팅이 정 필요하면 `--help`에 안 보여도 작동 (undocumented but stable).
- **Verified:**
  - `omd --help` → harness 명령 미노출 ✅
  - `omd harness "..." --internal` → JSON 단일 라인 emit ✅

### 2026-04-27 19:15 — v2 B-partial 마이그레이션 적용 완료
- **Reported by:** user — "voice fingerprint 패턴 + oh-my-* 리서치 기반 재설계. 스킬화 + 러닝커브 적정선"
- **Decision:** B-partial scope (A + B-partial + C + D), C(전부 pure-skill 도입)는 v3 candidate로 보류.
- **Applied:**
  - **A. `agents/` portable source-of-truth** — `agents/omd-*.md` 8개를 canonical로 격상. `install-skills`가 `parseCanonicalAgent()` + `renderClaudeAgent()` / `renderCodexAgent()`로 Claude/Codex 채널별 generate. `.claude/agents/` 와 `.codex/agents/` 는 generated artifact.
  - **B-partial — `omd init recommend` 제거**: SKILL.md가 직접 `data/reference-fingerprints.json` (67 ref voice fingerprint manifest, 병렬 7-agent 추출 결과) + `reference-tags.md` + `vocabulary.json` Read해서 의미 매칭. Hallucination 방지 (id 검증).
  - **B-partial — data assets 자동 install**: `installDataFile()` 추가. 4 data files (`reference-fingerprints.json`, `reference-tags.md`, `vocabulary.json`, `synonyms.json`) 가 `.claude/data/` / `.codex/data/`로 복사.
  - **B-partial — 유지**: `omd harness --internal` (slug), `omd init prepare` (delta_set), `omd remember` (preferences format), `git apply`, `npx axe-core/lighthouse`.
  - **C. Numbered-9s 가드레일**: `omd-master.md` 끝에 9/99/999/.../99999999 anti-pattern 박음 (Ralph 패턴).
  - **C. `agents/AGENT.md` (54줄)**: Ralph 컨텍스트 카드 — identity / stack / dir map / core architecture / brand non-negotiables / numbered-9s / 어디 보면 좋을지.
  - **D. Voice fingerprints**: 7 parallel agents × 67 references → `data/reference-fingerprints.json`. Categories canonicalized (10 buckets). water-app sanity check: toss/line이 정확히 1-2위 매칭.
- **Trade-off accepted:** `omd init prepare` (delta_set 200줄) + `omd remember` (preferences 포맷) 는 KEEP — 안정성 vs 순도 trade-off에서 안정성 선택. v3 candidate.
- **Verified:**
  - `npm run lint` ✅
  - `npm run build` ✅
  - `npm test` 505/505 ✅
  - End-to-end install-skills (clean dir) → `.claude/agents/` 8 files + `.claude/data/` 4 files emit ✅
  - Self-install --force on this repo → `.claude/agents/omd-master.md` 에 numbered-9s 7회 매칭 ✅
- **Generated artifact policy**: `.claude/agents/` `.codex/agents/` 은 commit 가능하지만 source-of-truth 아님. `agents/` 만 편집, 나머지는 `omd install-skills --force`로 regenerate.

### 2026-04-28 10:25 — Subagent registration session caching (critical, fixed)
- **Reported by:** user — Phase 1 시작 직전 `Error: Agent type 'omd-master' not found. Available agents: claude-code-guide, Explore, general-purpose, Plan, statusline-setup`. master + 7 sub-agent 모두 dispatch 불가.
- **Root cause:** Claude Code는 *세션 시작 시점*에만 `.claude/agents/*.md`를 subagent로 로드. `omd install-skills`를 세션 *띄운 후*에 실행한 경우, 그 세션에는 로드 안 됨. 첫-사용자 100%가 부딪힐 함정.
- **Fix applied:**
  - `src/cli/install-skills.ts` outro에 노란색 ⚠ 경고 추가: "Already-running CLI session? Restart it ... Claude Code only loads .claude/agents/*.md at session start."
  - `skills/omd-harness/SKILL.md` Step 0 추가: subagent registration verify, fail 시 사용자에게 재시작 안내 + general-purpose fallback 옵션 명시.
  - 빌드 + npm link 즉시 반영.
- **User mid-flight 우회:** 세션 종료 → `claude` 재실행 → `/omd-harness <task>` 재호출 (기존 run dir 자동 재사용).
- **Verified:** outro 빌드 후 새 install에서 경고 표시되는지 다음 install 때 확인.

### 2026-04-28 10:43 — Subagent frontmatter parsing 실패: HTML 주석이 `---` 앞에 있어서 Claude Code가 파일 무시 (CRITICAL, fixed)
- **Reported by:** user — `/agents` Library 탭에 "No agents found" 표시 (built-in 5개만), 8 omd-* subagent가 *물리적으로 .claude/agents/에 있는데도* 인식 안 됨.
- **Root cause:** `installAgentFile()`이 매 파일에 `<!-- omd:installed-skill — managed by ... -->` HTML 주석을 frontmatter (`---`) 앞에 prepend. Claude Code의 subagent 로더는 frontmatter가 *파일 첫 줄*이어야 인식. 주석 한 줄 = 모든 8 agent 무시.
- **이 결함이 v2 마이그레이션 동안 안 잡힌 이유:** smoke test(`omd install-skills` + 파일 존재 확인 + frontmatter content 확인)는 통과했지만 *실제 Claude Code session에서 subagent로 등록되는지* 까지 검증 안 함. 통합 테스트 부재.
- **Fix:**
  - `renderClaudeAgent()` — managed marker를 HTML 주석 → frontmatter 안의 `omd_managed: true` 필드로 이동. Claude Code는 unknown frontmatter field를 무시하므로 안전.
  - `installAgentFile()` — Claude 채널은 `headerForChannel` 안 쓰고 rendered 그대로. Codex는 TOML이라 leading `#` 주석 OK.
  - Drift detection sentinel 변경: Claude는 `\nomd_managed:\s*true\b` 정규식, Codex는 `# omd:installed-agent` 그대로.
- **Verified:** clean install → `head -5 .claude/agents/omd-master.md` → 첫 줄이 `---` ✅. 505 tests pass ✅.
- **Lesson learned (queue for v3 hypothesis):** v3 또는 다음 patch에서 *integration test* 추가 — Claude Code session에서 `/agents` 출력을 mocking하거나 실제 Claude Code CLI 호출해서 subagent registration 검증.

### 2026-04-28 10:55 — 모델 분배 quality-up (v2.1)
- **Reported by:** user — "haiku가 왜 저렇게 많고, research같은건 opus 시켜야하는건 아니야? 사용자가 토큰을 조금 더 쓰더라도 성능에 만족감을 느껴야해."
- **Decision:** cost-conservative → quality-first 재조정. 사용자 명시 의지("토큰 더 쓰더라도 만족감") 존중.
- **Mapping:**
  - omd-master: sonnet → **opus** (orchestrator, user-facing, 깊은 추론)
  - omd-critic: sonnet → **opus** (root cause 추적, 표면 패치 차단)
  - omd-ux-researcher: haiku → **sonnet** (semantic 매칭, Tier-1 DS 식별)
  - omd-microcopy: haiku → **sonnet** (글쓰기 품질 직접 드러남)
  - omd-persona-tester: haiku → **sonnet** (페르소나 character 유지, sycophancy 깨기)
  - omd-asset-curator: haiku → **sonnet** (클리셰 stockphoto 회피 = taste 판단)
  - omd-ui-junior: **sonnet** 유지
  - omd-a11y-auditor: **haiku** 유지 (axe-core/lighthouse 결과 파싱, mechanical)
- **Final 분포:** 2 opus + 5 sonnet + 1 haiku
- **비용 영향:** v2 baseline ~$0.15/iteration → ~$0.50-0.70/iteration (3-iteration cap에서 ~$1.5-2/run)
- **Verified:** `grep "^model:" agents/omd-*.md` → 8/8 정상

### 2026-04-28 11:05 — master의 응답이 사용자에게 relay 안 됨, launcher가 메타 요약만 출력 (CRITICAL, fixed)
- **Reported by:** user — `go` 답한 후 master spawn 22.7K tokens · 24s 동안 작업 → launcher가 "Phase 1 Discovery 체크포인트에서 멈췄습니다. 8개 질문에 답해주세요." 만 출력. 8개 질문 본문이 사라짐. user "뭐 이게 뭔데?" 혼란.
- **Root cause:** omd-harness SKILL.md "Master 호출" 섹션이 launcher에게 master 응답을 relay하라고 *명시 안 함*. "스킬은 더 이상 일하지 않는다 — master가 user-facing 응답을 책임진다" 만 적혀있어서, launcher가 자기 판단으로 master output을 요약/메타 처리. master는 Agent return value로 반환했으나 launcher가 piping 안 함.
- **Fix:**
  - `skills/omd-harness/SKILL.md` — "Master 호출" 섹션에 **CRITICAL: 응답 relay** 블록 추가. ❌ 요약 / ❌ 메타 코멘트 / ❌ 자체 prose 추가 금지, ✅ master의 return text 그대로 1:1 출력 명시. 모든 spawn에 적용.
  - `agents/omd-master.md` — Output discipline 섹션 끝에 **Sub-agent return value contract** 추가. master에게 "최종 응답은 user-facing prose여야 한다, 'Phase 1 stopped' 같은 상태문 X, 마지막 메시지가 곧 사용자가 보는 메시지" 명시.
- **Lesson learned:** Claude Code Agent 툴은 sub-agent의 return text를 caller가 명시적으로 출력해야 user에게 보임. 자동 piping 안 됨. Skill 프롬프트는 *행동 규칙*을 명시해야지 "스킬은 일 안 한다" 같은 모호한 표현 금지.
- **Verified:** 빌드 통과. 사용자가 install --force + reload + 재호출 시 master prose가 그대로 보일 것 (다음 검증 단계).

### 2026-04-28 11:30 — Phase 1 8-question prose batch가 "고봉밥" — Picker UI로 전환 (CRITICAL UX, fixed)
- **Reported by:** user — "질문은 너무 좋은데, 너무 고봉밥이라서 답변하기가 힘들어. 단계적으로 물어보거나(하나씩), 방향키 등으로 선택하거나 뭔가 고르게 하는 방식은 하기 힘들겠지?"
- **Root cause:** Phase 1을 prose로 8개 한 번에 던짐 → 사용자 인지 부담. 답변 시 8개 모두 떠올려서 prose로 적어야 함.
- **Solution explored:** Claude Code의 `AskUserQuestion` 툴 발견 (deferred tool list). 1-4 questions per call, 각 2-4 options + "Other" 자동 free-text fallback. Native picker UI.
- **Fix:**
  - `agents/omd-master.md` tools 필드에 `AskUserQuestion` 추가.
  - Phase 1 protocol 재작성: **2 rounds × 4 questions via AskUserQuestion** (8 questions in 1 prose batch → 2 picker rounds).
    - Round 1: 타겟 사용자 / 톤 / 핵심 동작 / 거부 default (multiSelect 활용)
    - Round 2: 성공 기준 / 접근성 / 에셋 정책 / 참고 URL
    - 각 옵션에 description (trade-off 한 줄)
    - "Recommended" 표시는 첫 옵션 label에 `(Recommended)` (⭐ 이모지 X)
  - User checkpoint #0/#1/#2/#3도 모두 `AskUserQuestion` 사용 (prose halt + go/fix/stop → picker UI)
  - Fallback: AskUserQuestion 없으면 prose sequential mode (round당 1-2 질문).
- **Token cost analysis:** AskUserQuestion은 단일 master spawn 내에서 inline tool call이라 추가 spawn 없음. 같은 1-spawn에서 2 picker rounds 모두 처리. 비용 변화 거의 없음 (오히려 prose 길이 줄어 약간 ↓).
- **Verified:** lint + build + 505 tests pass.
- **Migration impact:** master.md 변경 → install --force 필요. 8개 질문 형태 완전히 바뀜.

### 2026-04-28 16:50 — Subagent의 AskUserQuestion 호출 불가 → file-based handoff 아키텍처 (CRITICAL, fixed)
- **Reported by:** user — Phase 1에서 master가 prose 8개 다시 던짐. AskUserQuestion 호출 시도 안 됨. user 좌절: "지금 뭐 시작단계도 제대로 안되는데 뭘 자꾸 계속하래"
- **Root cause:** `AskUserQuestion`은 Claude Code 메인 thread 전용 인터랙티브 툴. Subagent (Agent({subagent_type:"omd-master"})로 spawn된)는 headless 실행이라 user 입력 대기 못 함. master frontmatter에 tool 추가해도 호출 시 결과 없음/falls back to prose.
- **Solution architecture (방향 A):** **file-based handoff loop** — subagent와 main-thread 사이 JSON 파일로 통신
  - master subagent: `.handoff.json` + `<checkpoint_id>.questions.json` 작성 → 짧은 prose 반환
  - launcher (skill, main thread): handoff 읽음 → user_prose 출력 → AskUserQuestion(questions) 호출 → answers.json 저장 → master 재spawn
  - status=done까지 loop (safety cap 12 spawns)
- **Fix applied:**
  - `agents/omd-master.md`:
    - `tools` 필드에서 `AskUserQuestion` 제거 (어차피 못 씀)
    - 새 "Handoff protocol" 섹션 추가 — `.handoff.json` 스키마 (`status: ask_user|done|error`, `checkpoint_id`, `questions_file`, `user_prose`)
    - Phase 1 protocol 재작성 — Round 1/2 모두 file-based handoff (master는 questions.json 작성, return은 짧은 status)
  - `skills/omd-harness/SKILL.md`:
    - "Master 호출" 섹션 완전 재작성 — handoff loop 의사코드 명시
    - launcher가 main thread에서 AskUserQuestion 호출 (subagent 아니라 가능)
    - 12 spawn safety cap, status별 분기 (done/error/ask_user)
- **Migration impact:** master.md + SKILL.md 둘 다 변경 → install --force + 세션 reload 필요. 기존 run dir의 task.md만 보존, 진행 상태(.handoff.json) 없으면 처음부터 다시.
- **Verified:** lint + build + 505 tests pass.
- **Lesson learned (for v3 hypothesis):** subagent vs main-thread tool distinction은 Claude Code 플랫폼 핵심 제약. 새 agent 디자인 시 *어느 thread에서 무엇을 할 수 있나* 먼저 설계. v3에 integration test 추가 (실제 spawn해서 handoff loop 동작 확인).

## Major / minor observations queued for batch fix

### 2026-04-27 19:30 — install-skills auto-detect의 partial-leftover 문제 (major, queued)
- **Reported by:** user — `.claude .codex .omd` 만 `rm -rf` 했는데 `.opencode/` 가 남아서 detector가 opencode만 감지 → claude-code/codex install 누락. "0 skill files written" 출력.
- **Root cause:** `autoDetectTargets()` 가 한 번이라도 emit된 channel dir이 있으면 그것만 타겟으로. 파셜 잔재 시 의도와 다른 결과.
- **현재 우회**: `--agent claude-code --agent codex` 명시 또는 `rm -rf .claude .codex .opencode .omd` 풀 정리.
- **Proposed fix (v2.1 patch)**:
  - 옵션 A: detection 로직을 "ANY channel 있으면 ALL channels install" 로 변경 (안전 + 사용자 누락 0)
  - 옵션 B: auto-detect 결과를 install 시 prose로 알리기 + 사용자 확인 (`Detected: opencode. Also install for claude-code/codex? [Y/n]`)
  - 옵션 A 권장 (idempotent, no prompt). 다음 v2 검증 끝나면 즉시 패치.

## Hypotheses for v2 playbook (carried forward, queued for v3+)

- **H1 — Question style toggle.** 자연 prose 기본 + `formal` 옵션 (라벨 (a)(b)(c) 명시) — 사용자 선호 분기 가능. `omd config harness.question_style`.
- **H2 — Slash command discoverability.** Claude Code의 `/omd-harness` 자동 안내가 "skill: ✕ command: ✓"로 거부 → 첫 사용자에게 마찰. v2: install-skills outro에 "슬래시는 하이픈이에요 — `/omd-harness`" 명시. **Done in v2.**
- **H3 — Stop-hook re-prompting** (settings.json hook). User checkpoint 자동 재진입. v3 candidate.
- **H4 — Pure-skill `omd init prepare`/`omd remember` port.** delta_set 로직 + preferences 포맷을 스킬 프로즈에 인코드. 안정성 검증 후 진행. v3+ candidate.
- **H5 — Tmux 다중 CLI fan-out.** Claude + Codex + Gemini 페인 동시 — oh-my-claudecode 패턴. v3 candidate.
- **H6 — voice-fingerprint manifest 자동 갱신**: 빌드 타임 스크립트로 reference 추가/수정 시 자동 재생성. 현재는 일회성 batch.

