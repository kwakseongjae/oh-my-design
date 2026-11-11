# Reference collection: is the current method the best? (test plan + round 1)

owner(2026-11-09): 「레퍼런스 수집과 관련해서는 지금의 방식이 최선일지 더 나은 방식이 있을지도 테스트해보면 좋을 거 같아.」

## Current method (batches 3–6)

One Codex worker (`gpt-6.1-sol`, effort `max`) per reference, cap 4 at a time (`scripts/workers/run-queue.sh`).
The worker follows `docs/workers/REFERENCE_ORDER_TEMPLATE.md`: curl controls → first-party sources → `probe_page`
survey → choose ≤ 6 controls → states → write `front.yaml` / `body.md` / `verification.md` → assembler. The
orchestrator (this session) reads the report, re-measures the headline with the worker's own control config, lands
the reference (`land-reference.sh`) and commits.

## Baseline: batch 6, measured (31 references, 2026-11-06)

| | value |
|---|---|
| Landed verified_v2 | 30 / 31 (dcard: a bot-check page covered both re-measurements; held, not bypassed) |
| Headline re-measurement matched the worker | 30 / 30 |
| Worker wall time | median 29.4 min (16.8 – 93.1) |
| — before the survey (sources, curl controls) | median 2.7 min |
| — capture (survey → last states call) | median 2.6 min |
| — **after the last capture (reading evidence, sources, writing, assembler)** | **median 22.5 min (77 %)** |
| Input tokens per worker | median 6.3 M, 96 % cached (≈ 200 k uncached) |
| Output tokens per worker | median 50 k |
| Second states call needed | 14 / 31 (dialogs or sticky layers covering controls) |
| Batch wall clock | 5.9 h for 31 at cap 4 |
| Orchestrator per reference | re-measure 2–4 min (4 needed a second run: popup flags weren't saved) + landing 5–7 min (full web suite each time) |

Phase times come from the run start (`meta.json`), the capture tool's evidence-folder stamps, and the exit time.

**What this says.** Browser capture is ~10 % of a worker's time, so automating capture (an orchestrator pre-pass)
cannot buy much. The time and the tokens are in the writing stage. On the orchestrator side, the cost was
repeated landing and re-measure retries.

## Already changed (no test needed) — PR `chore/worker-tooling-1109`

- states `cfg.json` records `close` / `hideOverlays`; `scripts/workers/remeasure.sh` replays the worker's exact call.
- `scripts/workers/land-batch.sh`: N references, one pipeline pass (dry run on 2 existing references: no diff, 27 s).
- KR orders require `display_name_kr` (two batch-6 references showed English names on /ko).

## Round 1 (running, 2026-11-09): effort `max` vs `high`

Same worker, same order, same 6 sites, paired: arm **A** = effort `max` (control), arm **H** = effort `high`. A runs
first on each site; H starts on a site only after A finished there, so the two never probe one site at once.
Sites (fresh CJK candidates from the census, not corporate-only sites): yomiuri (JP), nomura (JP), kbinsurance (KR),
samsunghospital (KR), hkairport (HK), railway (TW). Runner: `scratchpad/exp7/run-exp.sh` (waves `exp7a`, `exp7h`).

Metrics per run (all mechanical; read from files, not judged):
- wall time and its three phases; input / uncached / output tokens; number of states calls;
- assembler passes first time; `verified_v2` on landing check; reason and advisory codes;
- components with measured states / stated; claims; §1 length and number of first-party history sources;
- headline re-measurement matches (`remeasure.sh`).
Plus one read by the orchestrator of each pair's §1 and §3, blind to arm (both arms are the same model family, so
the reader has no family preference between them).

Decision rule: adopt `high` if verified_v2, headline match and assembler first-pass are no worse, components and
claims are within −10 %, and wall time or uncached tokens drop by ≥ 25 %. The better of each pair lands.

## Round 2 candidates (after round 1)

- **Evidence digest**: the worker reads a deterministic digest of survey/states (the probe's `--summary` text plus
  a census digest) instead of 100–200 KB of raw JSON, keeping the raw files for lookups. Targets the 77 %.
- **Claude author on Codex evidence**: capture by Codex, writing by Claude (`spawn.sh --engine claude`). Needs the
  owner to name the available channels and limits first (project rule: ask before each comparison run).
- **Two references per worker**: amortizes reading the order and examples; risk of cross-contamination.

## Results (2026-11-09)

### Round 1 — effort `max` (A) vs `high` (H), same 6 sites, Codex `gpt-6.1-sol`

| | A max | H high | H vs A |
|---|---|---|---|
| verified_v2 | 6 / 6 | 6 / 6 | same |
| wall time, median | 19.2 min | 13.3 min | **−31 %** |
| — writing stage, median | 14.1 min | 9.8 min | −30 % |
| output tokens, median | 43 k | 25 k | −42 % |
| uncached input, median | 176 k | 172 k | same |
| components with measured states (sum of 6) | 33 | 27 | **−18 %** |
| stated components | 27 | 22 | −19 % |
| claims (sum) | 516 | 408 | **−21 %** |
| colors in DESIGN.md not found in the evidence | 0 | 0 | same |

Decision rule (≤ −10 % on components and claims): **H fails. Keep effort `max`.** `high` is faster because it writes
less, not because it writes the same thing faster.

Both arms ran on an idle-ish machine today (A median 19 min vs batch 6's 29 min under heavier load), so compare
within the round only.

### Round 2 — Claude Sonnet 5.5 (C) writes from arm A's evidence, 3 sites, one worker at a time

Owner 11/9: Sonnet 5.5, few workers. No new browser runs: the Codex worker's capture folders and fetched first-party
pages were copied into the Claude worker's folder (`spawn.sh --engine claude --model claude-sonnet-5-5 --effort medium`;
no network, no browser). First attempt stopped at once: the Claude worker may only read its own folder, so the capture
folders must be copied in, not referenced (fixed in the runner).

| site | A writing stage | C total | A components / stated / claims | C components / stated / claims |
|---|---|---|---|---|
| yomiuri | 15.3 min | 4.2 min | 6 / 5 / 78 | 6 / 5 / 80 |
| kbinsurance | 13.0 min | 3.8 min | 5 / 4 / 84 | 5 / 3 / 78 |
| hkairport | 10.9 min | 4.0 min | 5 / 4 / 86 | 3 / 2 / 43 |

- All three verified_v2; every color in C's DESIGN.md is in the evidence (0 misses).
- Writing time −70 %. Tokens: 2.1–3.8 M input (mostly cache reads; 91–205 k uncached), 26–33 k output; list cost
  about $1.2 for yomiuri.
- Coverage −12 % components / −19 % claims over the 3, all of it hkairport: C kept three controls in prose (no
  colour change, a tile without declared size) where A promoted them to components. An editorial choice, not a
  measurement miss.
- §1 depth (yomiuri, read by the orchestrator): both ground the history in first-party pages; C quotes more of them
  (first newspaper website in Japan 1995, ヨミウリ・オンライン 1996, the 2019 service and its +0 円 terms).
- C wrote "HK is new to the catalog" — false (zabank, hangseng); the order template's country list predates HK.

**Reading:** a split pipeline — Codex for sources + capture (≈ 4–6 min), Claude Sonnet for writing (≈ 4 min) — could
cut a reference from ≈ 19 to ≈ 10 minutes with similar quality, and moves 70 % of the work off the Codex quota. Three
sites is too few to adopt it; the coverage gap on hkairport needs a rule in the writer order (promote every measured
control with a changed state to `components`).

### Next (round 3, proposed)

End-to-end split on 3–4 new sites: a Codex order that stops after sources + capture, then the Claude Sonnet writer with
the coverage rule above. One Claude worker at a time. Adopt if verified_v2, coverage within −10 % and grounding stay.

## Round 3 — the split end to end vs the current method (2026-11-10)

Owner 11/10: 「라운드 3도 해보쇼.」 Four fresh CJK sites, paired: **A** = current method (Codex `gpt-6.1-sol` max, full
order). **S** = the same Codex model and effort on a capture-only order (steps 1–3, 5, 6; save every first-party page
as served, `sources.json`, `controls.json`, a fact report). **W** = Claude Sonnet 5.5 (effort medium) writes from S's
folder alone, no network, one at a time. Per site the two Codex arms never ran at once, and which went first
alternated (hmall and megazone A first, fujitsu and hk01 S first). Both arms got the same post-#118 order template,
including "a change in any property counts → `components`". Runner: `scratchpad/exp8/` (run-r3.sh, run-writer-r3.sh,
make-capture-order.py, make-writer-folder.py, metrics8.py).

| site | A min | S + W min | A components / stated / claims | W components / stated / claims |
|---|---|---|---|---|
| fujitsu (JP) | 24.9 | 22.0 (19.0 + 3.0) | 6 / 5 / 107 | 4 / 3 / 65 |
| hk01 (HK) | 25.2 | 19.7 (16.5 + 3.2) | 4 / 3 / 60 | 1 / 1 / 31 |
| hmall (KR) | 27.9 | 15.1 (11.5 + 3.6) | 2 / 2 / 67 | 3 / 2 / 64 |
| megazone (KR) | 23.3 | 16.7 (13.9 + 2.8) | 5 / 4 / 97 | 5 / 4 / 67 |
| **sum / median** | median 25.1 | median 18.2 (**−27 %**) | 17 / 14 / 331 | 13 / 10 / 227 (**−24 % / −29 % / −31 %**) |

- All 8 outputs `verified_v2`. Grounding: the same two hex values are missing from the evidence text in both arms
  (`#333333` fujitsu, `#aaaaaa` megazone; likely shorthand `#333` / `#aaa` in CSS), so no arm-specific invention.
- Tokens: S used 3.8–5.0 M Codex input and 24–33 k output against A's 6.1–7.7 M and 45–58 k (≈ −40 % Codex). W used
  1.2–1.8 M input (mostly cache reads) and 20–27 k output, list cost ≈ $1 each.
- **Where the coverage gap comes from.** Controls whose state changed beyond the browser's focus ring, counted from
  the states summaries: A captured 17, S captured 16 (hk01 S picked two hero-carousel controls with
  `pointer-events: none`; hmall S found one more than A). A's writer promoted 17 / 17 to `components`; W promoted
  13 / 16. One omission follows the rules (fujitsu search input: the widened state persisted after blur), the others
  are over-strict (hk01 search link: "the anchor colour changes but its SVG does not, so it stays in prose").
  Claims fall further (−31 %): W writes shorter verification and component prose.
- The capture half took 11.5–19 min, not the hoped 4–6: S spent 5–12 min after its last capture packaging the
  hand-off (manifests, summaries, saved pages: 28–122 files).
- Harness faults on the way, not counted above (runs kept as `void-rv-x8w-*`): the writer-folder builder truncated
  `order.md` before reading it (2 runs wrote without the order), and the Claude worker's Bash allowlist refuses
  `$(cat sources.json)` and `sh` wrappers, so one writer could not run the assembler (round 2's writer had pasted the
  JSON inline). Fixed: the note now gives the inline form and `out/` exists.

**Decision (rule from round 2: adopt if verified_v2, coverage within −10 % and grounding hold): not adopted.** Time
−27 % and Codex −40 %, but components −24 % and claims −31 %. Across rounds 2 and 3 the Claude writer writes less
from the same or equivalent evidence. Keep the current method (Codex max end to end). The split stays a fallback for
a Codex quota squeeze, with that cost known.

Caveat: the arms ran at different effort. A's writer is Codex at `max`, W is Sonnet at `medium` (carried over from round
2; the owner named the model, not the effort). "The Claude writer writes less" holds as measured but is untested at
matched effort. The cheapest test is a W re-run at `high` or `max` on the same four S folders: no browser, no Codex,
four Claude runs, paired against today's W.

Possible follow-up if wanted: hand the writer a mechanical list of the controls whose state changed (the parse used
above) and require each to be in `components` or carry a rule-based reason; that targets the component gap but not
the claims gap.

Landing: the better arm per site (components, then claims) goes to batch 8: A for fujitsu, hk01 and megazone, W for
hmall.

## Round 4 — compiled measurements + a lower-effort writer (2026-11-11)

Owner 11/11: 「수집 관련해서 max로 굳이 안써도 돼. 가장 효율적인 방식을 찾아봐줘.」 Rounds 1–3 lost coverage whenever the
writer changed, because the writer decided which measured controls to carry into the document. Round 4 removes that
decision: `web/scripts/compile-evidence.mjs` (branch `feat/t1-measure-contract`) turns the capture into the
`components` block, the proof table and a census digest with no model, and the writer adds what a script cannot
(token roles, narrative, `use` lines, sources).

**Compiler alone, against the max-effort runs' own captures (10 sites):** the compiled component set equals the
worker's on 10 of 10 sites (50 of 50). Field agreement: bg 17/17, border 15/15, radius 50/50, padding 50/50, height
49/50, fg 45/50, font 43/48, states 113/118. The differences are where the worker chose between two measurements.

**Arm m — Codex `gpt-6.1-sol` at effort medium, same evidence, compiled parts pasted in** (runner
`scripts/collection-r4/`, no browser):

| | A max (rounds 1, 3) | m medium + compiled | change |
|---|---|---|---|
| verified_v2, no reason or advisory codes | 10 / 10 | 10 / 10 | same |
| writing time, median | 15.8 min | 4.6 min | **−71 %** |
| output tokens, median | 44.5 k | 11.9 k | **−73 %** |
| components (sum of 10) | 50 | 50 | same |
| stated components | 41 | 43 | +2 |
| claims (sum) | 847 | 706 | **−17 %** |
| Overview length, median | 2,723 | 2,954 | +8 % |

- Coverage of measured controls no longer depends on effort. The claims gap is in the tokens the writer still picks
  by hand: the medium writer names fewer colour and type tokens (first four sites: 36 colour tokens against 49).
  Compiling colour and type candidates from the census is the next step, and should close most of it.
- Not tested here: research and capture at lower effort (the arms reused the max-effort runs' sources and capture),
  and effort high (started, stopped by the owner for cost before any run finished). Four medium runs were cut off by
  a macOS permission drop and rerun; the cut-off runs are kept as `void-rv-x9m-*`.
- Headless against headed, the same pinned controls re-measured without a window (`diff-values.mjs`): 1,099 of 1,108
  compared fields agree over 13 states runs on 9 sites. The 9 differences are on rotating content (a lead story, a
  card whose text changed), not on brand values.

**Reading:** the efficient method is capture → compile → a medium-effort writer. It keeps verified_v2 and the
component set, and cuts writing time and output tokens by about 70 %. Before adopting: compile colour and type
candidates, then one live batch (capture at lower effort, headless) with independent review.

### Round 4 follow-up — where the missing tokens were, and a candidate list (2026-11-11, no model, no browser)

The medium writers named 81 of the 154 colours the max writers named (53 %), 28 of 37 type sizes and 21 of 27
radii. Each max-named colour was traced to the capture the medium writer had:

| where the colour sits in the capture | max named | medium did not name |
|---|---|---|
| census list, inside the digest's cut-off | 98 | 29 |
| custom property only (the digest showed three samples per prefix) | 32 | 28 |
| a measured control, at rest or in a state | 18 | 11 |
| census list, past the cut-off | 4 | 3 |
| survey rows only | 1 | 1 |
| a named colour in a custom property (`silver`) | 1 | 1 |

So the gap has two parts: values the digest did not carry (custom properties above all), and values it carried
that the writer was not told to go through. `compile-evidence.mjs` now also writes `candidates.md`: every opaque
colour, type size and corner radius in the census, the survey rows and the measured controls, with where each was
seen, in a fixed order. The writer names; the script lists.

- Recall against the max writers' tokens, 10 sites (`scripts/collection-r4/recall.py`): colours 154 / 154, type
  sizes 37 / 37, radii 27 / 27. The list is 3–9 KB per site. The components block is byte-identical to arm m's.
- A capture gap, not fixed here: the survey records type sizes for interactive elements and controls only. Heading
  and running-text sizes are not in the capture, so no writer can measure them. Adding them is a probe change.
- Not yet known: whether a medium writer given the list closes the claims gap (−17 %) without naming one-off
  colours. That is arm c: `scripts/collection-r4/run.sh c codex - medium` (10 Codex runs, about 5 minutes each),
  then `metrics.py --quality <scratch worktree of origin/main>` and `recall.py ~/.omd-workers/exp9c exp9c --list`
  (how many max-named tokens the arm named, and what it named that max did not).
- Ready for the live batch, opt-in and off by default: headless capture (`spawn.sh --mcp capture-headless`; one
  megazone survey through the capture server returned status 200, and its candidate list, 11 + 8 colours, 12 type
  sizes and 6 radii with every count, is identical to the headed survey of the day before; the arguments were
  checked by running `spawn.sh` against a stub `codex`, not yet through a real Codex worker) and an order
  whose step 6b has the worker compile its own capture (`OMD_ORDER_COMPILED=1`).
