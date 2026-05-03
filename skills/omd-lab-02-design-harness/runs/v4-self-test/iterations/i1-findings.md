# i1-findings.md — Iteration 1 (unit-test driven)

**Date:** 2026-04-29
**Method:** Wrote 4 v4 test suites (context-detect, code-introspect, signal-classifier, budget-tracker, memory-foldin) that exercise actual modules against persona fixtures. Ran. Observed failures. Applied fixes. Re-tested.

## Bugs found and fixed

### CRITICAL

1. **Trailing `</content></invoke>` in fixture/test files** (5+ files)
   - **Symptom:** package.json invalid JSON; tests fail at parse time.
   - **Root cause:** XML-style tag artifacts leaked into Write tool content (recurring issue across the project).
   - **Fix:** Python script strips both forms (`</content>\n</invoke>` and bare `</content>`/`</invoke>`).
   - **Lesson:** Need a *pre-commit hook* (or build-time guard) that rejects any source file containing these tokens. Queued.

2. **`founder` fixture not actually empty** — empty subdirs (src/components, src/styles, src/app) auto-created with the other personas falsely triggered `is_frontend = true`.
   - **Fix:** rmdir empty subdirs.
   - **Lesson:** fixture creation should be persona-specific, not bulk mkdir.

### MAJOR

3. **`signal-classifier` Korean directive regex** — `\b` word boundary fails for Korean characters in default ASCII regex (e.g., `\b줘\b` won't match in "만들어줘").
   - **Fix:** Drop `\b` for Korean tokens, keep for English tokens only.
   - **Lesson:** Always test regex with Korean text in unit tests.

4. **`signal-classifier` persona heuristic threshold** — `wordCount >= 25` was too aggressive for Korean (Korean text packs more meaning per word due to particles).
   - **Fix:** `isLongAnswer = wordCount >= 18 || charCount >= 80`. Also expanded `designVocab` and `opinionVocab` with Korean equivalents.
   - **Lesson:** Word count alone is locale-dependent; always include char count fallback.

### MINOR

5. **`vitest.config.ts` missed `test/v4/`** — new test directory not in include glob.
   - **Fix:** Added `test/v4/**/*.test.{ts,mjs}`.

## Test counts

| Before iter 1 | After iter 1 |
|---|---|
| 505/505 (no v4 tests run) | 545/545 (40 v4 tests added, all green) |

## What this iteration *cannot* catch

These tests are *unit-level*. They don't catch:
- Hook contracts in real Claude Code session (still untested)
- Master prompt actually following 8 rules under real model
- dembrandt CLI integration with real URL
- OMD-PLAN.md flow end-to-end
- Persona drift across multi-turn dialogue

→ **Iteration 2** dispatches audit subagents to walk through scenarios prompt-by-prompt.

