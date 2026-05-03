# i2-audit-F.md — Persona F (Solo Founder / Indie Hacker)

**Date:** 2026-04-27
**Persona:** F — empty repo, "Stripe like" reference, zero design vocab, 5-minute patience cap, will smash `go` on every default, wants handoff zip ASAP for v0/Cursor.
**Scenario:** `omd install-skills` → `claude` → `/omd-harness Stripe 같이 만들어줘 결제 SaaS 메인`
**Fixture:** `/Users/kwakseongjae/Desktop/projects/oh-my-design/skills/omd-lab-02-design-harness/runs/v4-self-test/fixtures/founder/README.md` (empty repo, billing-saas, references stripe.com/atlas)

---

## Walk-through findings

### Step 1 — Skill registration

`omd install-skills` then `claude` in same session = **subagent NOT registered**. Skill SKILL.md §0 "Subagent registration 확인" tells user to run `/agents` to force re-scan, or restart Claude. Founder F sees this and patience drops *instantly*.

- **MAJOR** — first turn for F is not "design", it's "your harness isn't loaded, restart Claude." That's a 30-60s detour for a persona with 5-minute total budget. Worth it? Probably yes (no false-success), but the message buries the lede. Reorder: "1-line action: run `/agents` now" then explanation underneath.
- **MINOR** — message is bilingual-mixed Korean. F just typed Korean so OK, but no English fallback if F's terminal is English locale.

### Step 2 — INTAKE / context-detect on empty folder

Master spec (omd-master.md §1 INTAKE): `empty folder → SLOT_GATE (greenfield mode)`. Good. No code-introspection wasted on empty repo.

But the task string `Stripe 같이 만들어줘 결제 SaaS 메인` contains a brand hint and a domain. SKILL.md §2.b says skill (launcher) does silent keyword extraction → catalog match → presents top-1 with `go` shortcut. **This is the right move for F.**

Question: does master also do this, or only the skill? Reading SKILL.md again — yes, *the skill itself* does the matching (skill-side, no API key). Master is spawned only after `go`/ref id is chosen. So F sees:

```
DESIGN.md가 없어서 reference 한 개를 골라 부트스트랩할게요. … stripe가 가장 잘 맞을 것 같아요 …
이대로 가시려면 go (또는 stripe).
다른 후보: ramp · linear · vercel · …
```

F types `go`. **Wall time: ~2-5s for skill keyword match (in-head, deterministic)**. Within budget.

- **CRITICAL question — catalog id validation**: SKILL.md §2.d explicitly requires `id ∈ items[].id` of `reference-fingerprints.json`. I verified `stripe` exists (grep confirms 1 hit). ✓ Validated. **No hallucination risk for this path.**
- **MINOR** — top-5 list is shown even when top-1 score is overwhelmingly higher (brand hint = +5 pts, "stripe" → "stripe"). For a smash-`go` persona, lengthy alternatives are noise. Could collapse to "stripe (go) · 다른 후보 보기" expander.

### Step 3 — URL extraction / dembrandt

The task does NOT include a URL — it includes brand name "Stripe". The fixture README *mentions* `https://stripe.com/atlas` but harness skill does NOT scan README for URLs (verified — SKILL.md §0–§2 only reads task arg + catalog). So **dembrandt is never invoked for F's flow**. Catalog match supersedes.

- **No CRITICAL** — dembrandt failure is irrelevant to F because catalog match wins first.
- **However:** if F had typed a URL instead (`/omd-harness https://stripe.com 결제 SaaS`), master would hit `URL_EXTRACT` branch. Reading `url-token-extractor.ts`:
  - `tryDembrandt` runs `npx -y dembrandt@latest extract "<url>" --format dtcg --output -` with **90s timeout**.
  - **CRITICAL — 30s patience violation**: 90s is 3× F's patience cap. Cold `npx -y` install on first run pulls Playwright + Chromium = often >60s on cold cache. F abandons before output.
  - **CRITICAL — fallback unimplemented**: `extractUrl` returns `dtcg: null` with warning `'Fallback extraction unimplemented — please install Playwright or use a different reference (catalog id)'`. The fallback path simply tells the user to go install Playwright. For F, that's a hard stop.
  - **CRITICAL — failure handling not visible in master**: omd-master.md mentions `omd extract <url> --internal` as a future helper (§9 "Phase B helper, future"). Master spec does not specify what state transition happens when `tool: 'fallback'` and `dtcg: null` come back. Best-case: master falls back to catalog match on the URL hostname (`stripe.com` → `stripe`). Worst-case: master writes a placeholder reference and marches on. Neither is documented. **GAP.**
- F's actual scenario (brand name, not URL) sidesteps all of this. But the audit brief explicitly asked, so flagging.

### Step 4 — Catalog id verification

Confirmed: `stripe` is one of 67 ids (`grep -c '"id"' = 67`, `"id": "stripe"` present). Skill spec mandates verification before recommendation (§2.d "검증 — hallucination 방지"). ✓

The 999999-rule ("Never invent reference ids") in master also re-asserts this. Two-layer guard. Good.

### Step 5 — Wall time to OMD-PLAN.md

Best-case path for F (smashing `go` on every default):

1. Skill pre-flight + catalog match: **2-5s**
2. F types `go` for ref pick: user time, ignore
3. Master spawn #1 (INTAKE → SLOT_GATE → ASK_TEST): cold spawn ~5-15s + opus reasoning ~10-20s = **15-35s**
4. Phase 1 round 1 = 1 picker (audience/tone/actions/anti — 4 questions in one turn per RULE 2). F smashes defaults: user time
5. Master spawn #2 (CLASSIFY_SIGNAL → SLOT_GATE → either ASK_TEST round 2 OR FAST_EXIT). Persona F (`detected_persona_signal=F`, budget cap=10) typically gets second round: **15-35s**
6. F smashes again. Master spawn #3 → PROPOSE_PLAN writes OMD-PLAN.md: **10-25s**

**Estimated wall time to OMD-PLAN.md: 60-120s of model time + 3 user smashes**. Each spawn could exceed 30s on opus-with-1M ctx for cold cache.

- **MAJOR — per-turn 30s risk**: Opus cold spawn + reading `.omd/state.md` + `.omd/timeline.md` + `.omd/runs/INDEX.md` + `.omd/preferences.md` + `.omd/context.json` on every spawn = lots of Reads. For an empty `.omd/` (first run, all files missing or empty), that's just failed Reads (fast) → OK. But spec doesn't guard the missing-file case explicitly; if Read errors abort the master turn, F is dead. **Verify: does master gracefully no-op on missing `.omd/state.md`?** Spec says "auto-injected by SessionStart hook — already in your prompt" (omd-master.md §0.1). For first-ever run, the hook may not have populated it. **GAP — needs robustness check.**
- **MAJOR — 8-16 turn average is too long for F**: omd-master.md frontmatter promises "8-16 turn 평균 (페르소나 적응)". RULE 5 budget says F=10 cap. Even 8 turns × 20s = 160s = 2.6min just on model latency. F's 5-min hard cap is at risk.
- **OPPORTUNITY**: a *true* F-FAST path would skip SLOT_GATE entirely on detected F-signal — go straight from INTAKE → PROPOSE_PLAN with all defaults filled (`audience="[FILL IN]"`, `tone_seed=stripe`, `exit_scope=handoff-zip`, `a11y_floor=AA`, `asset_policy=all-auto`). That's 1 spawn to plan. Not implemented.

### Step 6 — Defaults

Reading `plan-emitter.ts` defaults (PlanInputs):
- `exit_scope='wireframe-and-spec'` is the documented default. **F wants `handoff-zip`** (zip for v0/Cursor). Mismatch.
- `a11y_floor='AA'` ✓
- `asset_policy='all-auto'` ✓
- `audience='[FILL IN]'` — placeholder. F may not edit, leaves it. DESIGN.md §11–13 will be `[FILL IN]` per 999-rule.

- **CRITICAL — default exit_scope wrong for F**: F profile says "gives wireframe + DESIGN.md to v0/Cursor immediately." That's `handoff-zip`, not `wireframe-and-spec`. Smash-`go` F gets the smaller package and has to re-run with explicit scope. Two-roundtrip = patience burn.
  - **Fix**: persona-detected F → default exit_scope='handoff-zip'. Or: make the smash-`go` choice include "handoff-zip" as the recommended default in the picker.
- **MINOR — `[FILL IN]` audience leaks into DESIGN.md**: Spec says §11–13 placeholders OK (999-rule), but for F who'll hand to v0 directly, v0 doesn't know what to do with `[FILL IN]`. v0 will either ignore or hallucinate. Better default: synthesize a generic-but-plausible audience from the task ("결제 SaaS 메인" → "B2B SaaS 결제 운영자, finance-ops 담당, 30-40대"). Master could spawn omd-ux-researcher silently for 1 plausible persona. Trade speed for acceptance.

### Step 7 — Final handoff zip

Documented at `.omd/runs/run-…/handoff/v0.zip` (skill SKILL.md §"산출물 위치"). Master Phase 9 emits it (per plan-emitter §7). 

Does v0 actually accept it? Spec doesn't say. Looking at `manifest.json` + `wireframes/*.md` + `DESIGN.md.patch` — that's a code-LM-friendly bundle but **v0 specifically expects either prompt text or a single tailwind/jsx component**. A zip with a patch file + ASCII wireframes is a Cursor/Claude Code shape, not a v0-paste shape.

- **MAJOR — v0 acceptance unverified**: zip is named `v0.zip` but no test confirms v0 (vercel) actually consumes it. Likely founder must unzip → copy DESIGN.md.patch contents → paste into v0 prompt manually. Acceptable but spec oversells. Rename to `v0-bundle.zip` and document the paste procedure, OR generate a single `v0-prompt.md` (concatenated brief + DESIGN.md text) inside the zip optimized for paste.
- **MINOR** — `cursor.zip`/`subframe.zip` also produced; for F who only uses one tool, that's 3× the artifact noise. Default to single zip matching detected persona (F → v0).

---

## Findings table

| Sev | # | Finding | Step |
|---|---|---|---|
| CRITICAL | 1 | dembrandt 90s timeout > F's 30s patience cap; URL path effectively unusable for F | 3 |
| CRITICAL | 2 | dembrandt fallback unimplemented — returns null + "install Playwright" message | 3 |
| CRITICAL | 3 | Master state transition on `tool='fallback'` + `dtcg=null` undocumented | 3 |
| CRITICAL | 4 | Default `exit_scope='wireframe-and-spec'` mismatches F's need (`handoff-zip`); smash-`go` gets wrong package | 6 |
| MAJOR | 5 | First turn after `omd install-skills` likely needs `/agents` re-scan — bilingual error message buries the 1-line action | 1 |
| MAJOR | 6 | `.omd/state.md` etc. may be missing on first run; master spec assumes hook populated them — no missing-file robustness | 5 |
| MAJOR | 7 | 8-16 turn avg + opus cold spawn ≈ 2-3min model time — flirts with F's 5-min hard cap | 5 |
| MAJOR | 8 | F-FAST path (INTAKE → PROPOSE_PLAN, all defaults) not implemented; persona detection happens but doesn't shorten the loop | 5 |
| MAJOR | 9 | `v0.zip` not verified to be paste-into-v0-shape; bundle is Cursor-flavored | 7 |
| MINOR | 10 | Top-5 alternatives shown even when brand match is overwhelming — noise for smash-`go` user | 2 |
| MINOR | 11 | `audience=[FILL IN]` propagates to DESIGN.md §13; v0 hallucinates — synthesize plausible default instead | 6 |
| MINOR | 12 | 3 zips emitted (v0/cursor/subframe); F only needs one — match to detected persona | 7 |
| GOOD | — | Catalog id `stripe` exists; two-layer hallucination guard (skill §2.d + master rule 999999) | 4 |
| GOOD | — | Skill-side keyword/brand match avoids spawning master for ref-pick (saves 1 spawn ≈ 15-30s) | 2 |
| GOOD | — | Empty-folder INTAKE branch skips code-introspection waste | 2 |

---

## Verdict

**FAIL for F as currently specced** — 4 CRITICAL items, 5 MAJOR.

The dominant blockers are #4 (wrong default scope) and #8 (no F-FAST path). #4 is a 1-line fix in plan-emitter (or persona-conditional default). #8 is a real spec change: master needs an explicit `INTAKE → PROPOSE_PLAN_FAST` edge that fires when `detected_persona_signal='F'` AND task contains a brand hint. With those two fixes, F flow becomes:

1. `/omd-harness Stripe 같이 만들어줘 결제 SaaS 메인` → skill matches `stripe` (3s)
2. F: `go` → master single spawn → OMD-PLAN.md with all-defaults including `exit_scope=handoff-zip` (~25s)
3. F: `go` → DESIGN_GENERATION pipeline runs (Phase 2-9) → handoff zip emitted (~3-5min model time, but F is fine because it's *one* wait, not 8 turns)
4. F gets `v0-bundle.zip` and pastes into Cursor.

That's 2 user actions, 1 plan-review checkpoint, 1 ship-gate checkpoint. Roughly 4-7min total — survivable.

The dembrandt items (#1-3) don't block F's primary flow but represent latent danger if F ever supplies a URL. Defer to iteration 3+ unless URL-flow is on the v4 critical path.

**Recommendation:** Block v4 GA on items #4, #5, #6, #8. Items #1-3 → backlog with a `requires-Playwright` env hint added now to prevent silent-fail. Items #9-12 → polish post-GA.
