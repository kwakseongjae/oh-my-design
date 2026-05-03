# Audit V (Vibe Coder)

## Walk-through narrative

Turn 0 — `omd install-skills` runs at the shell. **Silent — no prompt, no "now restart Claude Code"**. SKILL.md step 0 (omd-harness/SKILL.md:31-43) explicitly says install-skills *after* a session start requires `/agents` re-scan or full Cmd+Q restart, but install-skills itself never tells me that. I open Claude Code (already running) and don't know I need to restart.

Turn 1 — I type `/omd-harness 헬스 트래킹 메인 화면`. UserPromptSubmit hook (skill-activation.cjs) checks rules. The trigger keywords for omd-harness in skill-rules.json:54-62 are `["하네스","알아서","전체","디자인 처음부터","메인 화면 디자인","와이어프레임","디자인 시작"]`. My phrase "헬스 트래킹 메인 화면" contains "메인 화면" but the rule is "메인 화면 디자인" (substring match `lower.includes(...)` — fails because "디자인" is missing). So the hook does NOT fire required activation. The slash command itself still runs the skill (slash command bypasses activation hook gating anyway), but the redundancy guard is dead weight.

Turn 2 — Skill body runs preflight. Step 0 tries to detect if `omd-master` subagent is registered. It has *no actual mechanism* to verify (SKILL.md:33 just says "Agent tool 사용 가능 subagent 목록에 ... 있는지 확인" — there's no API to introspect subagent list). So it gambles. If install-skills was post-session it just crashes on first Agent() call.

Turn 3 — Step 1 runs `omd harness "<task>" --internal`, gets runDir. Step 2 loads `.claude/data/reference-fingerprints.json` and asks me to pick a reference. **This is an extra mandatory question BEFORE the master even spawns**. For a 7-turn budget V persona this burns turn 1/7 on something I don't care about. I type "go".

Turn 4 — master spawns. INTAKE state. context-detect.ts runs, detects Next + Tailwind + 10 components. inferPersonaSignal (context-detect.ts:128-137) sees `is_frontend && component_file_count between 5-20 && !has_design_md` → flags V. Turn cap = 7 (budget-tracker.ts:22).

Turn 5 — master writes phase1-round1.questions.json (RULE 2: tightly-coupled 4-question bundle for audience/tone/actions/anti). Launcher renders AskUserQuestion. I see 4 questions in one picker. I click through. Answers saved.

Turn 6 — master re-spawns with `continue checkpoint:phase1-round1`. Reads answers. signal-classifier.ts loaded, but **classifier is only called on free-text, not picker answers** — picker answers are option-label strings, never reach the opt-out detection. So my "skip"-equivalent option on a picker is just stored as the literal label, master treats it as a real selection.

Turn 7 — SLOT_GATE checks remaining. exit_scope, success_criteria, a11y_floor — RULE 1 says default these. But the master prompt at omd-master.md:73-89 lists `exit_scope` as required with default `wireframe-and-spec`. Will master actually apply default and not ask, or ask anyway? Prompt is ambiguous. I get asked. Type "그냥".

Turn 8 — signal-classifier picks up "그냥" → `opt_out_skip`. budget tick. RULE 6 requires 3 in a row to FAST_EXIT. I'm at 1.

Turn 9 — master asks personas_named. I type "skip". opt_out_skip count=2.

Turn 10 — master asks anti_patterns. I'm at turn 7+ now, **already past V cap of 7**. budget-tracker decide() returns `force_propose_plan` (budget-tracker.ts:81-83) but only if turn_count >= cap. Since cap is checked against `turn_count`, and V cap is 7, OMD-PLAN should fire. But the launcher safety cap is 12 spawns — these are decoupled. The user's perceived turn count vs spawn count vs budget turn_count are 3 different counters with no clear sync.

I close the terminal at turn ~8-9 because I've answered too many questions and have zero artifact yet.

## CRITICAL issues

- **[C1] Subagent registration check is fake.** `skills/omd-harness/SKILL.md:31-43` claims to detect if `omd-master` is registered, but there is no Claude Code API for the launcher (running as the main thread Skill body) to introspect available subagent types before calling `Agent()`. So the "preflight" is wishful prose. If a user runs `omd install-skills` *after* opening Claude Code, the first `Agent({subagent_type: "omd-master"})` call inside the loop (omd-harness/SKILL.md:117-122) throws "Agent type not found" with no graceful handling. Symptom: terminal shows raw error, run dir half-bootstrapped, user blocked. **Fix:** wrap the first Agent() call in try/catch with the `Cmd+Q restart` guidance baked into the catch. Also have `omd install-skills` print a post-install banner: "Restart Claude Code (Cmd+Q) before using new skills."

- **[C2] Picker answers bypass signal-classifier entirely.** `src/core/signal-classifier.ts:79-153` operates on free-text. The omd-harness loop (SKILL.md:144-147) writes raw `answers` from AskUserQuestion straight to `<checkpoint>.answers.json` and the master is told to read it. Answers are option `label` strings (e.g. "다이어터"), so opt-out detection (RULE 6 in omd-master.md:113-117) never triggers from picker UI — opt-out only works in the rare free-text "Other" path. For persona V who clicks through pickers tersely, FAST_EXIT is effectively unreachable. **Fix:** classify the *concatenation of picked labels + Other free-text*, and treat "skip"-style pre-baked options as `opt_out_skip` via a label allowlist; OR add an explicit "그만하기 / stop" first-class option to every checkpoint.

- **[C3] Reference selection forced before master spawns burns a turn for V.** SKILL.md:60-103 makes DESIGN.md reference selection a *separate* mandatory question outside master's budget tracker. V's cap is 7 (budget-tracker.ts:22) but this turn isn't counted, and it's a content-empty question (V doesn't know/care which of 67 references). With Phase 1 round 1 being a 4-Q bundle and the harness expecting up to a dozen subsequent gates, V already exceeds the 7-turn perceived budget by gate 3. **Fix:** when persona_signal_initial is V (from context-detect.ts:128-137 — already cheap to compute pre-spawn), auto-pick top-1 ref and include it in OMD-PLAN.md as editable. Don't ask.

- **[C4] Master ↔ launcher state-sync race on `.handoff.json`.** budget-tracker.ts:54-69 writes `handoff.budget` by reading existing `.handoff.json`, mutating, writing whole file back. master also writes `.handoff.json` per turn (omd-master.md:131-146). Launcher reads `.handoff.json` on its side (SKILL.md:131). If master writes handoff after `tick()` writes budget, the partial write order is undefined; master may overwrite budget, OR `saveBudget` may race-overwrite handoff state/questions_file pointers. There is no atomic-rename pattern. Symptom: on turn 5+, launcher reads stale handoff that points at stale checkpoint id, AskUserQuestion shows a question already answered. **Fix:** atomic write (`writeFileSync` to `.handoff.json.tmp` + `renameSync`); single writer (master only), expose `BudgetState` mutation through a CLI helper master invokes.

## MAJOR issues

- **[M1] Hook keyword mismatch makes activation unreliable.** `.claude/skills/skill-rules.json:58` keyword `"메인 화면 디자인"` requires the substring including "디자인". Persona V phrases "메인 화면 만들어줘" or "헬스 트래킹 메인 화면" → no hit. The omd-apply rule (skill-rules.json:8-17) catches "만들어" though, so omd-apply fires *instead of* omd-harness — wrong skill. **Fix:** loosen omd-harness keywords to `["메인 화면","와이어프레임","처음부터"]` and add an intent pattern that takes priority over omd-apply when the phrase implies *full design* not *edit existing*.

- **[M2] Budget caps don't include the reference-pick turn or plan-review turn.** budget-tracker.ts cap V=7 is meant to be user-perceived turns. But turn_count is incremented in `tick()` only when master is spawned with a slot probe (omd-master.md unclear when exactly). PLAN_REVIEW is a separate ask (omd-master.md:62-63) — does it count? No spec. SHIP_GATE is another. So V's 7-turn promise is a lie; real user-facing question count is 7 + ref + plan-review + ship + 2-3 phase gates ≈ 12. **Fix:** define `turn_count` precisely as "number of AskUserQuestion calls relayed to user" and increment in the launcher, not master. Document mandatory gates as not-counted, but cap them at 3.

- **[M3] FAST_EXIT trigger requires 3-in-a-row but master has no per-slot opt-out memory.** omd-master.md:113-117 says "opt_out_skip × 3 → propose plan", but budget-tracker.ts:117-121 only persists `last_signal_kind`, not a counter. So "3 in a row" is detected by master re-reading `trace.jsonl` each turn (omd-master.md:283-296) and counting — but trace.jsonl writes are advisory, not enforced. If master forgets to log, counter resets. **Fix:** add `consecutive_skip_count` and `consecutive_frustration_count` fields to BudgetState; increment/reset in `tick()` based on `signal_kind`.

- **[M4] OMD-PLAN.md edit-then-go round-trip is undefined.** omd-master.md:62-63 says "User edited file → re-read OMD-PLAN.md, ask one more confirm." But OMD-PLAN.md sections (plan-emitter.ts:39-126) are free-form Markdown; master must re-parse to extract slot values. There is no parser. Master will hallucinate a diff or ignore edits. For V who would just type "go" without reading, fine; for the user who edits, their changes silently vanish. **Fix:** plan-emitter parser that extracts slots back from Markdown headings, with `[FILL IN]` markers as anchors.

- **[M5] context-detect frontend definition is too loose.** context-detect.ts:159-163 considers the project frontend if `src/components/` OR `app/` OR `pages/` directory exists. A pure backend Next.js API project with `app/` folder would be classified as frontend, persona signal becomes V, and master would launch a wireframe pipeline on a non-UI codebase. **Fix:** require both a framework dep AND at least one .tsx/.jsx file present.

- **[M6] No path normalization for Korean slugs in run dir.** SKILL.md:51-58 punts slug generation to `omd harness --internal`. If that helper doesn't transliterate Korean → ascii, downstream Bash usage of `<run_dir>` paths breaks on shells that don't quote consistently. Master uses `Bash` for `node -e "..."` plan emit (omd-master.md:188) and `omd init prepare` — these need quoted paths. Symptom: silent path-quoting bugs on edge characters. **Fix:** verify run dir slug is `[a-z0-9-]+` only; assert in launcher before continuing.

## MINOR issues

- **[m1] Master prompt says 8-16 turn average (omd-master.md:3) but persona caps allow V=7. Inconsistent.** Update agent description to "7-16 turn (persona-adaptive)".

- **[m2] reference-pick prose (SKILL.md:88-94) uses Korean colloquial mixed with English ids — fine, but no English variant for English-speaking users.** Add locale switch.

- **[m3] post-edit-watch.cjs only checks hex colors (post-edit-watch.cjs:43), not spacing/radius drift mentioned in the file's own header comment.** Either implement or remove the claim.

- **[m4] plan-emitter.ts:128-132 leaks persona signal as HTML comment in OMD-PLAN.md.** Comment says "not user-facing" but Markdown viewers often show HTML comments in source view. Drop entirely or move to `.omd/internal/`.

- **[m5] signal-classifier.ts:131 sets persona V on `opt_out_skip || approval` with ≤5 words — but approval (e.g., "go") is also how F and S confirm. Will misclassify a senior dev who types "go" tersely.** Add latency or follow-up evidence before locking persona.

- **[m6] Hook skill-activation.cjs:35 does `lower.includes(k.toLowerCase()) || prompt.includes(k)` — Korean already-lowercase, the second OR is dead code for Korean-only keywords. Cosmetic.**

- **[m7] session-state-loader.cjs:31 caps state.md injection at 60 lines but state.md format isn't documented anywhere — fragile contract.**

## Overall verdict

**major rework**

The conversational state machine is well-conceived on paper (omd-master.md:39-67) but three first-contact failures (C1, C2, C3) would break or annoy persona V before they reach the first artifact. The budget contract (M2, M3) over-promises a 7-turn experience that the surrounding orchestration silently exceeds. Fix C1-C4 + M1-M3 before any more iteration on phases 5+; the downstream pipeline doesn't matter if V quits at turn 4.
