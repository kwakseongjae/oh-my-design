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
