# /hangul writing eval (2026-10)

A summary of OmD's before/after eval of the skill's writing layer (HW-1…HW-14, `SKILL.md` §3b), run on 2026-10-24. The plan was written before any run and not changed after. The plan, the per-run results and the agents' transcripts are OmD's internal research notes (`docs/research/2026-10-24-ux-writing/`; local-only, not committed to the public repository). This file is the published summary. The 2026-09 typography eval is in [`eval-2026-09.md`](./eval-2026-09.md).

**Result: the plan's criterion was not met.** It asked that, for each prompt and channel, the median number of copy findings at BLOCK or WARN be lower with the skill than without it. Without the skill that median was already 0 on every prompt and channel, so there was nothing to lower. No run in either arm had a BLOCK. What the skill did change sits below that line: runs with a finding of any grade went from 11 of 18 without it to 2 of 18 with it (Codex 8 → 2, Claude 3 → 0), and findings from 25 to 2. Fifteen of the 25 were FYIs for a period at the end of a heading or button (HW-3). Scored with the pre-registered checker the same comparison reads 15 → 6 runs, inflated on both sides by its parsing errors ([below](#why-the-checker-changed)). Typography, the secondary measure, moved as it did in 2026-09: BLOCK / WARN from 18 / 24 to 0 / 0. Five of the nine Claude runs without the skill saw a summary of the rules before writing, so the Claude half is not a clean comparison; Codex is ([below](#a-protocol-failure-five-claude-no-skill-runs-saw-the-rule-notes)).

## Design

- **Prompts:** three copy-heavy Korean UI tasks:
  - p1, a money transfer: "가족끼리 쓰는 간편 송금 앱의 송금 화면을 만들어줘. 받는 사람 선택, 금액 입력, 송금 전 확인 창, 잔액이 부족할 때와 네트워크 오류가 났을 때의 상태, 송금 완료 화면까지 한 페이지에서 상태를 바꿔 가며 볼 수 있게 해줘."
  - p2, a secondhand-market search: "동네 중고거래 앱의 검색 결과 화면을 만들어줘. 검색 결과 목록, 결과가 없을 때, 위치 권한을 거부했을 때의 안내, 새 글 알림을 받을지 묻는 시트를 상태별로 볼 수 있게 해줘."
  - p3, a sign-up: "온라인 독서 모임 서비스의 회원가입 화면을 만들어줘. 이메일·비밀번호 입력과 입력 오류 안내, 약관 동의(필수·선택), 인증 메일 다시 보내기, 가입 완료 화면까지 넣어줘."
- **Operator line, the same in both arms and channels:** "작업 폴더는 {dir}이야. 이 폴더 안의 파일만 고치고, 의존성 설치·빌드·개발 서버 실행은 하지 마. 다른 스킬이나 에이전트는 쓰지 마."
- **Arms:** A has the prompt and the operator line. B adds one line, "이 작업에는 hangul 스킬을 적용한다: .agents/skills/hangul/SKILL.md를 읽고 그대로 따른다", with `skills/hangul/` as of commit `e282eca7` copied to `.agents/skills/hangul/` in the run directory.
- **Runs:** 3 per prompt × arm × channel, 36 in all.
- **Channels:**
  - Codex CLI 0.158.0 (`codex exec`), `gpt-6-astra` at `model_reasoning_effort=medium`, workspace-write sandbox, no approvals, 20-minute cap. Every run finished in 3–5 minutes. A first launch on the CLI's default model stopped in seconds for all 18 runs ("not supported when using Codex with a ChatGPT account") before writing anything. It was discarded and relaunched with the model pinned, as in the 2026-09 eval. The relaunch overwrote that launch's logs.
  - Claude subagents on the `sonnet` alias, which the transcripts record as `claude-sonnet-5-5`.
- **Workspace:** a fresh copy per run of `create-next-app` 16.4.3 (`--yes --skip-install --disable-git`) with its AGENTS.md removed; template SHA-256 prefix `f1654d1cc57d6d79`. Its defaults stay (`lang="en"`, Geist). There is no DESIGN.md, so the brand rules never apply and HW-11's speech level is the agent's choice.

## Measurement

- **Primary:** `scripts/copy-check.mjs --json` on each run directory: BLOCK, WARN and FYI counts per run, and the rules hit. Dot-directories are not scanned, so the copied skill under `.agents/` is not.
- **Secondary:** `scripts/check.mjs --json` (typography) on the same directories.
- **Checkers.** Both arms were scored with two versions, and both are reported:
  - *pre-registered*, frozen with the plan: copy-check `c80996775cbeb4de`, check `5381ba84e2941ce2` (SHA-256 prefixes), at commit `e282eca7`. This is also the version in the B runs' `.agents/skills/hangul/`, which those runs ran on their own work.
  - *final*, the version 2.0.6 ships: copy-check `80384ea2d772a45d`, check `99a048097bccdf8d`, at commit `72463442`. Why it changed is [below](#why-the-checker-changed).
  - Intermediate revisions were used for looks at partial results: copy-check `de95d2e52267af4d` (commit `0a8b6b6a`) on the Codex half, then `a4445da3c7e49404` (`2b991190`), `0de31f66d8855176` (`6c46dce8`) and `0b99daff9ed86404` (`d16e74de`) as runs finished. They are not reported as columns; what each changed is in the list below.
- **The skill the B runs read** is `e282eca7`'s. Before release only the checker changed (below) and the wording of two citations to the 국립국어원 survey, not the rules.

## Results

### Final checker (the version 2.0.6 ships)

| Channel | Arm | Runs | ≥1 BLOCK | ≥1 BLOCK or WARN | ≥1 finding of any grade | BLOCK / WARN / FYI | Typography BLOCK / WARN | Copy rules hit |
|---|---|---:|---:|---:|---:|---|---|---|
| Codex | A (no skill) | 9 | 0/9 | 1/9 | 8/9 | 0 / 2 / 17 | 17 / 15 | HW-3 ×13, HW-8 ×2, HW-11 ×2, HW-2 ×1, HW-12 ×1 |
| Codex | B (skill) | 9 | 0/9 | 0/9 | 2/9 | 0 / 0 / 2 | 0 / 0 | HW-3 ×2 |
| Claude (Sonnet) | A (no skill) | 9 | 0/9 | 0/9 | 3/9 | 0 / 0 / 6 | 1 / 9 | HW-5 ×3, HW-3 ×2, HW-4 ×1 |
| Claude (Sonnet) | B (skill) | 9 | 0/9 | 0/9 | 0/9 | 0 / 0 / 0 | 0 / 0 | — |

Per prompt, median over three runs, A → B (BLOCK + WARN; in brackets, findings of any grade):

| Prompt | Codex | Claude |
|---|---|---|
| p1 | 0 → 0 (1 → 0) | 0 → 0 (2 → 0) |
| p2 | 0 → 0 (1 → 0) | 0 → 0 (0 → 0) |
| p3 | 0 → 0 (4 → 1) | 0 → 0 (0 → 0) |

### Pre-registered checker

| Channel | Arm | Runs | ≥1 BLOCK | ≥1 BLOCK or WARN | ≥1 finding of any grade | BLOCK / WARN / FYI | Typography BLOCK / WARN | Copy rules hit |
|---|---|---:|---:|---:|---:|---|---|---|
| Codex | A (no skill) | 9 | 0/9 | 4/9 | 9/9 | 0 / 5 / 24 | 17 / 15 | HW-3 ×17, HW-13 ×5, HW-11 ×3, HW-4 ×2, HW-2 ×1, HW-12 ×1 |
| Codex | B (skill) | 9 | 0/9 | 2/9 | 6/9 | 0 / 2 / 35 | 0 / 0 | HW-3 ×32, HW-13 ×3, HW-4 ×2 |
| Claude (Sonnet) | A (no skill) | 9 | 0/9 | 1/9 | 6/9 | 0 / 1 / 29 | 1 / 9 | HW-3 ×23, HW-5 ×3, HW-4 ×1, HW-9 ×1, HW-11 ×1, HW-13 ×1 |
| Claude (Sonnet) | B (skill) | 9 | 0/9 | 0/9 | 0/9 | 0 / 0 / 0 | 0 / 0 | — |

Per prompt, median over three runs, A → B (BLOCK + WARN; in brackets, findings of any grade):

| Prompt | Codex | Claude |
|---|---|---|
| p1 | 0 → 0 (2 → 0) | 0 → 0 (2 → 0) |
| p2 | 0 → 1 (3 → 1) | 0 → 0 (0 → 0) |
| p3 | 1 → 0 (4 → 11) | 0 → 0 (5 → 0) |

Per run, final checker (BLOCK / WARN / FYI):

| Run | Codex B / W / F | Claude B / W / F | Claude run saw the notes before writing |
|---|---|---|---|
| p1-A-r1 | 0 / 0 / 0 | 0 / 0 / 2 | no |
| p1-A-r2 | 0 / 0 / 2 | 0 / 0 / 0 | no |
| p1-A-r3 | 0 / 0 / 1 | 0 / 0 / 2 | **yes** |
| p1-B-r1 | 0 / 0 / 0 | 0 / 0 / 0 | — (has the skill) |
| p1-B-r2 | 0 / 0 / 0 | 0 / 0 / 0 | — (has the skill) |
| p1-B-r3 | 0 / 0 / 0 | 0 / 0 / 0 | — (has the skill) |
| p2-A-r1 | 0 / 0 / 1 | 0 / 0 / 0 | no |
| p2-A-r2 | 0 / 0 / 1 | 0 / 0 / 0 | **yes** |
| p2-A-r3 | 0 / 0 / 4 | 0 / 0 / 0 | no |
| p2-B-r1 | 0 / 0 / 0 | 0 / 0 / 0 | — (has the skill) |
| p2-B-r2 | 0 / 0 / 0 | 0 / 0 / 0 | — (has the skill) |
| p2-B-r3 | 0 / 0 / 0 | 0 / 0 / 0 | — (has the skill) |
| p3-A-r1 | 0 / 0 / 1 | 0 / 0 / 0 | **yes** |
| p3-A-r2 | 0 / 2 / 3 | 0 / 0 / 0 | **yes** |
| p3-A-r3 | 0 / 0 / 4 | 0 / 0 / 2 | **yes** |
| p3-B-r1 | 0 / 0 / 1 | 0 / 0 / 0 | — (has the skill) |
| p3-B-r2 | 0 / 0 / 0 | 0 / 0 / 0 | — (has the skill) |
| p3-B-r3 | 0 / 0 / 1 | 0 / 0 / 0 | — (has the skill) |

## Why the checker changed

Scoring the outputs turned up ten checker errors. Each was fixed in the checker, not in the outputs, and the same 36 directories were rescored. Re-run at the end, the pre-registered checker gives the same Codex numbers it gave when it first scored them.

1. **TypeScript generics read as tags** (`check.mjs`'s markup scanner, which `copy-check.mjs` shares). `useRef<HTMLDialogElement>(null)`, `RefObject<HTMLHeadingElement | null>` and `useState<number | null>(null)` opened an element that never closed. Every string after them took that element's role, and code after them was read as text. This made most of the pre-registered checker's false positives, mostly HW-3 "no period on a heading" on body sentences.
2. **A dialog took the role of every string inside it.** A dialog is now a flag on the string, matched on component names and class tokens, and each string keeps its own role.
3. **Top-level code in JSX/TSX/JS was read as text.** Its strings are now read by the literal pass with the names around them.
4. **A long array of strings lost its key** (`termContents = ['…', '…']`), so legal text read as UI copy. The key is now found however long the strings are.
5. **`term`-named keys** (`termText`, `termContents`) now count as legal text, which HW-11 leaves out.
6. **The connective `-니까` was read as 합쇼체.** 합쇼체 is now -ㅂ니다/-ㅂ니까 only: the syllable before 니 must close with ㅂ (`합니다`, `입니까`, but not `마음이니까`).
7. **Strings in event handlers were not read at all.** `onClick={() => setNotice('…')}` was blanked with its tag, so toasts and notices set from a click handler were invisible to every rule. They are now read by the call they are passed to. Found while checking the launch page's HW-11 example (Codex p3-A-r2), where two 합쇼체 notices sat in handlers. This fix added one finding in all, a WARN in that run.
8. **Sample records in TypeScript arrays were read as copy.** A typed declaration (`const LISTINGS: readonly Listing[] = [`) hid the array's name, and only JSON arrays of records counted as data. A seller's title such as "바구니 달린 시티 자전거 팝니다" then counted as the product's own 합쇼체 against its 해요체 (Claude p2-A-r1). An array named for content its users write or own (listings, products, posts, people, members, recipients, neighborhoods…) now holds records, which no rule reads. It took up to 30 strings per run out of scoring in p1 and p2 (none in p3): names, nicknames, banks, listing titles, places and relative times such as "3일 전에 보냈어요". It changed one finding: that WARN.
9. **A helper line and a logo read as buttons.** `<p class="button-hint">다음 화면에서 한 번 더 확인할 수 있어요.</p>` took the button role from its class name, and the wordmark "다시" with its decorative dot sat in a `<button class="logo">`. Both drew "no period on a button" in the no-skill arm (Codex p1-A-r1 and p2-A-r2). A class naming a hint, caption or note now marks helper text, and a logo's text is a name that no rule reads. This took one Codex no-skill run from one finding to none.
10. **A consent notice's negative.** "동의를 거부할 수 있어요. 다만 이 항목에 동의하지 않으면 가입할 수 없어요." drew HW-9's "double negative" FYI in Claude p3-A-r2. A consent notice has to say what refusing costs, which is HW-9's own exception (keep the negative when the user must know something is unavailable). Legal text, already left out of HW-11, is now left out of HW-9 too.

Revision 7 added one finding to the no-skill arm; revisions 8, 9 and 10 removed four from it. None of revisions 7–10 changed a finding in a skill-arm run. The list is long because each version was checked against the strings it flagged. The pre-registered column is reported in full beside the final one.

Every finding that differs between the pre-registered and the final checker:

- Codex p1-A-r1: removed `app/page.tsx:76` FYI HW-3
- Codex p1-A-r3: removed `app/page.tsx:88` WARN HW-11
- Codex p2-A-r1: removed `app/page.tsx:38` FYI HW-13, `app/page.tsx:38` WARN HW-4
- Codex p2-A-r2: removed `app/page.tsx:57` FYI HW-13, `app/page.tsx:69` FYI HW-3
- Codex p2-A-r3: removed `app/page.tsx:43` FYI HW-13
- Codex p2-B-r1: removed `app/page.tsx:44` WARN HW-4
- Codex p2-B-r2: removed `app/page.tsx:39` FYI HW-13, `app/page.tsx:39` WARN HW-4
- Codex p2-B-r3: removed `app/page.tsx:35` FYI HW-13
- Codex p3-A-r1: removed `app/page.tsx:18` FYI HW-13, `app/page.tsx:29` FYI HW-3, `app/page.tsx:30` FYI HW-3
- Codex p3-A-r2: removed `app/page.tsx:42` FYI HW-13, `app/page.tsx:42` WARN HW-4; added `app/page.tsx:57` FYI HW-8, `app/page.tsx:57` WARN HW-11
- Codex p3-A-r3: removed `app/page.tsx:55` WARN HW-11; added `app/page.tsx:62` FYI HW-8
- Codex p3-B-r1: removed `app/page.tsx:35` FYI HW-3, `app/page.tsx:36` FYI HW-3, `app/page.tsx:37` FYI HW-3, `app/page.tsx:54` FYI HW-3, `app/page.tsx:59` FYI HW-3, `app/page.tsx:62` FYI HW-3, `app/page.tsx:67` FYI HW-3, `app/page.tsx:69` FYI HW-3, `app/page.tsx:70` FYI HW-3, `app/page.tsx:71` FYI HW-3, `app/page.tsx:75` FYI HW-3
- Codex p3-B-r2: removed `app/page.tsx:41` FYI HW-13, `app/page.tsx:64` FYI HW-3, `app/page.tsx:66` FYI HW-3, `app/page.tsx:72` FYI HW-3, `app/page.tsx:74` FYI HW-3, `app/page.tsx:75` FYI HW-3, `app/page.tsx:76` FYI HW-3, `app/page.tsx:78` FYI HW-3, `app/page.tsx:80` FYI HW-3, `app/page.tsx:81` FYI HW-3
- Codex p3-B-r3: removed `app/page.tsx:61` FYI HW-3, `app/page.tsx:73` FYI HW-3, `app/page.tsx:79` FYI HW-3, `app/page.tsx:81` FYI HW-3, `app/page.tsx:82` FYI HW-3, `app/page.tsx:83` FYI HW-3, `app/page.tsx:85` FYI HW-3, `app/page.tsx:88` FYI HW-3, `app/page.tsx:89` FYI HW-3, `app/page.tsx:92` FYI HW-3
- Claude p1-A-r3: removed `app/_send-money/recipient-screen.tsx:23` FYI HW-3, `app/_send-money/result-screens.tsx:56` FYI HW-3, `app/_send-money/result-screens.tsx:59` FYI HW-3, `app/_send-money/result-screens.tsx:65` FYI HW-3
- Claude p2-A-r1: removed `app/_lib/listings.ts:134` WARN HW-11
- Claude p3-A-r1: removed `app/signup/complete-step.tsx:42` FYI HW-3, `app/signup/verify-step.tsx:114` FYI HW-3, `app/signup/verify-step.tsx:130` FYI HW-3, `app/signup/verify-step.tsx:131` FYI HW-3, `app/signup/verify-step.tsx:156` FYI HW-3
- Claude p3-A-r2: removed `app/_signup/complete-panel.tsx:30` FYI HW-3, `app/_signup/complete-panel.tsx:44` FYI HW-3, `app/_signup/signup-form.tsx:67` FYI HW-13, `app/_signup/terms.ts:69` FYI HW-9, `app/_signup/verify-panel.tsx:70` FYI HW-3, `app/_signup/verify-panel.tsx:92` FYI HW-3, `app/_signup/verify-panel.tsx:100` FYI HW-3, `app/_signup/verify-panel.tsx:105` FYI HW-3, `app/_signup/verify-panel.tsx:124` FYI HW-3, `app/_signup/verify-panel.tsx:145` FYI HW-3, `app/_signup/verify-panel.tsx:150` FYI HW-3, `app/_signup/verify-panel.tsx:157` FYI HW-3, `app/_signup/verify-panel.tsx:158` FYI HW-3, `app/_signup/verify-panel.tsx:189` FYI HW-3

## The skill arm ran the checker

SKILL.md tells an agent to run both checkers on what it changed (§5–6). Every Codex B run did, one to three times, and so did every Claude B run; the A runs had no checker to run. So B's numbers partly measure an agent iterating against the checker that scores it. Three Claude B runs (p1-B-r2, p3-B-r2, p3-B-r3) moved TypeScript generics into separate files to quiet the pre-registered checker's false positives (error 1 above).

## Samples

The plan picks samples from the run with the median count in each arm, ties going to the lowest run number. With BLOCK + WARN at 0 for the median, that is run 1 of p1 in every channel and arm. The same screen states, as the agents wrote them:

`{…}` is a value filled in at run time; a slash separates two strings on the same screen.

| Screen state | Codex, no skill (p1-A-r1) | Codex, skill (p1-B-r1) | Claude, no skill (p1-A-r1) | Claude, skill (p1-B-r1) |
|---|---|---|---|---|
| Balance too low | 잔액이 {…}원 부족해요 / 보낼 금액을 줄인 뒤 다시 시도해 주세요. | 잔액이 {…}원 부족해요 / 보낼 금액을 줄이거나 출금 계좌에 돈을 넣어 주세요. | 잔액이 부족해요 | 잔액이 부족해요. {…}을 충전하거나 금액을 줄여 주세요. |
| Network error | 연결이 끊겨 송금하지 못했어요 / 돈은 출금되지 않았어요. 연결을 확인한 뒤 다시 시도해 주세요. | 연결이 끊겨 송금을 진행하지 못했어요 / 아직 돈은 보내지 않았어요. 인터넷 연결을 확인하고 다시 시도해 주세요. | 송금하지 못했어요 / 네트워크 연결이 끊겨서 {…}에게 {…}을 보내지 못했어요. 내 잔액에서 빠져나간 돈은 없어요. | 인터넷 연결이 끊겼어요 / 송금하지 못했어요. 잔액은 그대로예요. 연결을 확인하고 다시 시도해 주세요. |
| Confirm dialog: title, then buttons | {…}에게 {…}원을 보낼까요? / {…}원 보내기 · 돌아가서 수정하기 | {…}에게 {…}원을 보낼까요? / {…}원 보내기 · 닫기 | {…}에게 {…}을 보낼까요? / {…} 보내기 · 취소 | {…} {…}을 보낼까요? / 보내기 · 닫기 |
| Done | {…}에게 {…}원을 보냈어요 | {…}에게 {…}원을 보냈어요 | {…}에게 {…}을 보냈어요 | {…}{…}을 보냈어요 |

All four write the same kind of copy: 해요체, an error that says what happened and what to do, a done message from the user's side. The visible difference is the dialog's dismiss button. Both skill runs write 닫기, the label HW-5 takes from the Apps in Toss guide. Claude's no-skill run writes 취소, which the final checker flags as an FYI. Neither no-skill run here saw the rule notes.

## A protocol failure: five Claude no-skill runs saw the rule notes

The plan said Claude subagents "may carry this session's project context; both arms are equally exposed." That was false. Claude subagents work with this repository as their working directory, so they follow its CLAUDE.md, which tells an agent to run `scripts/context_restore.sh` after its context is compacted, and they get its hooks. On 2026-10-24 the main checkout's `docs/CURRENT_STATE.md` carried the coordinator's notes on this work: a summary of the research behind HW-1…HW-14 (for example, errors give the cause and the fix, buttons are verbs, honorifics stay on people, 금일 becomes 오늘) and notes on the checker. The integration worktree's committed copy of that file had none of it. Which copy an agent read depended on which directory the coordinator's shell was in when the agent was spawned or resumed. So exposure was unplanned, uneven, and fell on the arm the notes could help: a skill-arm run reads the full skill anyway, but a no-skill run that reads the notes gets a summary of the rules.

From the transcripts:

Claude no-skill runs only (times KST, 2026-10-24; "first write" is the run's first write into its own directory):

| Run | First write | Saw the notes | Before writing? | How |
|---|---|---|---|---|
| p1-A-r1 | 05:37 | — | — | — |
| p1-A-r2 | 05:40 | — | — | — |
| p1-A-r3 | 05:30 | 05:18 | **yes** | read `docs/CURRENT_STATE.md` |
| p2-A-r1 | 10:41 | — | — | — |
| p2-A-r2 | 10:39 | 10:33 | **yes** | `context_restore.sh` |
| p2-A-r3 | 10:41 | — | — | ran `context_restore.sh` in the worktree, whose copy had no notes |
| p3-A-r1 | 11:03 | 10:53 | **yes** | `context_restore.sh` |
| p3-A-r2 | 11:09 | 11:01 | **yes** | `context_restore.sh` |
| p3-A-r3 | 15:08 | 10:55 | **yes** | `context_restore.sh` |

- **No-skill (A) runs exposed before writing: 5 of 9.** p1-A-r3, p2-A-r2, p3-A-r1, p3-A-r2 and p3-A-r3. All three p3 runs are among them, so p3 has no clean Claude no-skill run. p2-A-r3 ran the restore script too, but in the worktree, and its output had no notes. p3-A-r1, p3-A-r2 and p3-A-r3 noticed and said so in their reports.
- **Skill (B) runs:** they read SKILL.md, which carries the rules in full; the notes add nothing material. They are not counted as exposed.
- **Codex was not exposed.** It ran with each run directory as its working directory, outside the repository, and its logs show no read of the repository or of any skill directory in the A arm.
- **What it can do to the numbers.** Exposure can only make A cleaner, so it biases against the skill. Of the nine Claude no-skill runs, the four that never saw the notes produced 1 run with a finding (2 FYI); the five that did produced 2 (4 FYI). Neither group had a BLOCK or WARN. In this sample exposure did not make the copy measurably cleaner, but four and five runs cannot show it had no effect.
- **What was done.** The notes were moved out of `CURRENT_STATE.md` at 13:45 KST, before the last five runs were resumed. The file still described the eval's progress and this exposure, without the rules; one skill run (p3-B-r2) read that. Nothing was rerun or replaced: the 36 runs are reported as they are, each flagged. Codex is the clean channel and leads the reading.

## What the launch page shows (a deviation from the plan)

The plan said the launch page would quote those median runs. The page instead shows four examples, one per rule, picked from strings the final checker flagged in Codex runs without the skill, each beside our rewrite:

- HW-8 · p3-A-r3 `app/page.tsx:62`, "사이책 가입이 완료됐어요." (FYI; the pre-registered checker missed it, every revision flags it)
- HW-12 · p2-A-r3 `app/page.tsx:63`, the eyebrow "놓치지 마세요" (FYI, every version)
- HW-11 · p3-A-r2 `app/page.tsx:59`, "화면 구현을 위한 예시 약관입니다." (WARN, every version)
- HW-2 · p2-A-r3 `app/page.tsx:59`, "4만원 이하" (FYI, every version)

Three of the four are FYI. The page says the examples were picked and that the rewrites are ours. It quotes no eval figures: an owner review on 2026-10-24 took the figure blocks off the page, so the numbers live here and in `eval-2026-09.md`. The median-run samples above are the unpicked view.

## Caveats (state these whenever the result is quoted)

1. **The checker encodes the skill's own rules, and the skill arm ran it.** A zero in B is partly expected. The evidence for value would be A breaking rules grounded in 「한글 맞춤법」 and published guidance, and here A rarely did at BLOCK or WARN.
2. **B names the skill explicitly** (one added line). It measures what the rules do once loaded, not whether the skill triggers on its own.
3. **Small n, and a Claude channel that is not clean.** Three runs per cell. Five of the nine Claude no-skill runs saw a summary of the rules before writing ([above](#a-protocol-failure-five-claude-no-skill-runs-saw-the-rule-notes)). The Claude runs also worked inside this repository: they got its hooks (an OMD WATCH hook suggested `omd remember` and DESIGN.md radius values; every run declined), some read its `web/node_modules` to type-check or lint without installing, and 14 of the 18 (7 in each arm) consulted the built-in advisor tool, which hands the conversation to a stronger model (the transcripts name claude-fable-5-1), so the Claude channel is not Sonnet alone. Runs in both arms rendered their pages in a headless browser to check them (static HTML or server-rendered markup, with no server); no run installed packages, ran a build or started a dev server. Both arms had all of this except the notes.
4. **Interrupted Claude runs.** All 18 Claude runs stopped partway at the account's session limit (HTTP 429) and were resumed after the reset with one identical message: "API 사용 한도 때문에 작업이 중간에 끊겼다가 지금 풀렸어. 같은 폴더, 같은 조건으로 하던 작업을 이어서 마무리해 줘." Six p1 runs had written part of their pages before the limit; the twelve p2 and p3 runs had written nothing and started from the template. Five p3 runs (A-r2, A-r3, B-r1, B-r2, B-r3) hit the limit a second time and were resumed again with the same message. p2-B-r1 received the message twice by operator error, the second time while it was already working.
5. **Static, source-only scoring.** `copy-check.mjs` reads source, guesses each string's role, and treats a file as one screen for HW-11. FYI findings are judgment calls by design. A clean run is not proof of good copy, and a hit is not always a defect.
