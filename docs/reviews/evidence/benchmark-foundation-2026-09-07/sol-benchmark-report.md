# Sol benchmark foundation report — 2026-09-07

Scope: B-0 preregistration and B-1 initial shared-browser bridge. This work is provider-zero. No model, media service, browser service, calibration, or benchmark cell was launched.

## B-0 — task, source, and tool lock

Status: **PASS for provider-zero preregistration; BLOCKED for live launch.**

The new epoch file is `benchmarks/ui-resolve-bench/config/grok46-four-arm-epoch-2026-09-07-v0.1.json`. It extends the frozen `asset-generation-four-arm-v0.1.json` by hash and does not modify old epoch data. Its matrix remains 4 calibration cells + 36 first-submission cells + 12 same-session follow-up cells = 52.

Locked fixtures:

- Calibration only: `calibration-morrow-glass`, a fictional architectural-lighting landing. It is not scored as a main task and does not reuse Aphrodite/Higgsgen creative decisions.
- Main creative: `main-arcwell-listening`, a fictional speaker product landing with finish selection, a working interest path, and autonomous image/video opportunities.
- Main factual: `main-karrot-neighborhood`, a Korean Karrot product surface. Its facts and absence rules are bound to `web/references/karrot/DESIGN.md` at SHA-256 `09df85980a8ae2f45e3c936b62f2549fcaf4660904fffee91c9d59d4effca087`. It forbids invented metrics/testimonials and forbids presenting Pretendard as the active UI font.
- Main functional: `main-stillwater-booking`, a fictional booking flow. `FOLLOWUP.md` adds booking management for `SW-2048` and requires the same model session, arm, trial, and workspace while preserving the original flow.

Every task contains locked facts, source provenance, deterministic interaction/responsive checks, and `shared_creative_pack: null`. Each arm receives the same task bytes and factual inputs. Its only intended prompt difference is the preregistered arm activation prefix.

`four-arm-source-lock-2026-09-07-v0.1.json` inventories the existing frozen UI UX Pro Max, Hallmark, and OmD bundles using current tree hashes. It records the no-skill arm as intentionally empty. It distinguishes these states:

- Bundle copied: verified locally by deterministic tree hash.
- Activation: not verified in the current Grok 4.6 runtime.
- Tool rights: proposed equally for all arms, not capability-verified.
- Isolation: blocked pending current-epoch receipts. Separate working directories or `GROK_HOME` values do not satisfy isolation.

The source lock points to the existing source/provenance records rather than creating another competitor framework. UI UX Pro Max maps to the pinned official source-lock entry `ui-ux-pro-max-2.14.2-2.0`; Hallmark maps to its supplementary official GitHub provenance; OmD maps to the existing frozen local product provenance.

Validation:

```text
$ node benchmarks/ui-resolve-bench/scripts/validate-benchmark-foundation.mjs
{
  "verdict": "PASS_PROVIDER_ZERO_PREFLIGHT_ONLY",
  "task_count": 4,
  "source_arm_count": 4,
  "planned_cells": 52,
  "live_admission": "BLOCKED"
}
```

The validator recomputes every task/follow-up/source hash, the Karrot canonical-reference hash, and all three copied bundle tree hashes. It rejects category drift, a shared creative pack, missing provenance/acceptance, false activation/tool claims, or premature live admission.

## B-1 — external FIFO shared-browser bridge

Status: **PASS for provider-zero implementation; BLOCKED pending an actual CUA service proof.**

`browser-request-broker.mjs` is a durable filesystem bridge that the root Codex Computer Use Chrome operator can service. It provides:

- capacity-one FIFO leases with increasing sequence and monotonic event times;
- explicit cell, worker owner, operator, transaction, and random lease identities;
- no request payload or browser state in waiting-worker responses;
- exact SHA-256 binding for cell-authored generation prompts, so the operator can pass them without creative rewriting;
- cell-derived result/download directories, required-download declarations, regular-file/realpath checks, byte counts, and SHA-256 receipts;
- wrong-cell, wrong-owner, wrong-operator, and wrong-lease rejection;
- queued cancellation and active cancellation/timeout quarantine;
- no stale lease reassignment: capacity remains blocked until the exact operator lease is reconciled as terminated or completed;
- separate FIFO wait and browser-active durations. Excluding wait from a worker's active budget still requires controller evidence that the worker was actually suspended.

`BROWSER-OPERATOR-PROTOCOL-v0.1.md` documents runnable CLI commands for queue initialization, worker submission/polling, operator leasing/completion, file attribution, and quarantine reconciliation. The operator is external because Grok CLI workers do not inherit Codex CUA APIs.

The implemented adapter boundary is narrow: JSON request/completion types, durable FIFO state/events, operator leasing, result admission, and a manual CLI protocol are connected. It does not hook `run-grok.mjs`, pause or resume a live worker process, call CUA itself, or assemble all 52 cell directories. Those controller connections belong to B-2 admission after the live canary proves the bridge semantics.

Provider-zero tests:

```text
$ node --test benchmarks/ui-resolve-bench/scripts/test-browser-request-broker.mjs
tests 8
pass 8
fail 0
```

The cases cover four concurrent FIFO submissions, active cancellation quarantine, active timeout plus late-result rejection, exact reconciliation identity, wrong-cell result rejection, owned-download hashing/path rejection, active-versus-blocked timing, prompt byte binding, and a real CLI init/submit/lease path.

Frozen predecessor checks:

```text
$ node --test benchmarks/ui-resolve-bench/scripts/test-asset-generation-contract.mjs
17 provider-zero contract tests passed

$ node benchmarks/ui-resolve-bench/scripts/validate-asset-generation-contract.mjs benchmarks/ui-resolve-bench/config/asset-generation-four-arm-v0.1.json
PASS asset-generation contract (draft validation)

$ node --check benchmarks/ui-resolve-bench/scripts/browser-request-broker.mjs
$ node --check benchmarks/ui-resolve-bench/scripts/validate-benchmark-foundation.mjs
# exit 0 for both
```

## Exact next live proof

Before calibration, create fresh isolated cells through the existing `prepare-sandbox.mjs` and `run-grok.mjs` controls, then collect:

1. One positive current-runtime discovery/activation receipt for each installed skill arm and one negative discovery receipt for no-skill, including proof that ambient/global skill or config sources were not discovered.
2. The requested and Grok-reported model/CLI identities plus frozen auth/cache, isolated `HOME`, fixed flags, task-source, prompt-audit, and output-attribution receipts for every admitted cell.
3. One real broker transaction serviced by root through Computer Use Chrome, followed by one real declared download admitted into only the owning cell. Record the service/operator receipt and verify a waiting worker sees only its own queued status.
4. One controlled active-operation timeout or cancellation where the operator confirms termination, reconciles the exact lease, and only then obtains the next FIFO lease.

Until all four proofs exist, the new epoch remains `b0-b1-provider-zero-preflight-not-live-ready`, runtime activation remains false, tool inventory remains proposed, shared-browser live service remains false, and launch remains blocked.

### Media-profile isolation finding received after provider-zero closure

An actual Grok native-media probe succeeded outside the benchmark, but its init evidence proves the current media-enabled profile is inadmissible for B-2. In `.omd/execution/2026-09-07/aphrodite/media-probe/attempts/attempt-0002/stdout.log` (SHA-256 `5da85439bd1f9dd31bb7a9b1d8151c8633171dfd47a4340e8a1b88aecadcc0ab`), task-local `GROK_HOME`, disabled Claude/Cursor compatibility, disabled plugins, and `--tools image_gen,write` still exposed `search_tool`, `use_tool`, five ambient MCP servers (`agent-browser`, `ouroboros`, `notion`, `chrome-devtools`, `aside`), and sixteen bundled skills. The model then used `write` against the bundled Imagine skill path. This demonstrates that the earlier file-only isolation shape does not carry over to a media-enabled cell.

The first probe's `.omd/execution/2026-09-07/aphrodite/media-probe/attempts/attempt-0001/stderr.log` (SHA-256 `b070c0464d78b88439c5035dc7e7d44871c12a1fcc158536a7523b212dbb3792`) also records that `write_file` is unmappable and causes Grok to retain the full toolset; the observed exact name is `write`. B-2 therefore needs a media-profile context-isolation mechanism whose init receipt contains only the admitted tools, MCP servers, slash commands, and skills. File-only receipts cannot be reused for that claim, and the successful image generation does not promote the benchmark's tool or isolation status.

## B-2 runtime admission implementation — provider-zero closure

Status: **PASS for the launch profile, static discovery, fail-closed launcher, and OS-policy sentinel; BLOCKED for provider init admission.**

`grok46-runtime-admission.mjs` prepares a one-shot profile outside the repository and isolates both `HOME` and `GROK_HOME`. It copies the exact same neutral media-mechanics guide into all four arms, copies only the preregistered product bundle for positive arms, disables compatibility discovery, managed MCP/gateway tools, memory, subagents, workflows, and web search, and pins Grok `1.0.13`, `grok-4.6`, and `read_file,image_gen,write`. The no-skill condition therefore means no product-design skill; it still receives the byte-identical neutral media guide required by every arm.

The implementation derives the binary, argv, config, sandbox profile, prompt, expected skills, and neutral guide from source constants at admission time. Editing `PROFILE.json` cannot select a different binary or add tools, and editing any frozen guide or copied product skill invalidates the profile. The prompt explicitly requires `read_file` for the mandatory guide and product skill; a `write` call against either protected root is rejected and cannot count as activation.

The provider-zero `grok inspect --json` checks ran for all four arms with isolated `HOME` and `GROK_HOME`:

- `no-skill`: `benchmark-media-tools` only.
- `uiux-pro-max`: the neutral guide plus the seven frozen UI UX Pro Max skills.
- `hallmark`: the neutral guide plus `hallmark`.
- `omd`: the neutral guide plus `omd-autopilot`.

All four reported zero active MCP servers, plugins, hooks, or project instructions, and every discovered skill source resolved inside its cell workspace. This is the material difference from the failed media profile, which isolated `GROK_HOME` while retaining the real `HOME`. Local Grok `--help` documents the pinned `--cwd`, `--model`, `--disable-web-search`, `--no-subagents`, `--sandbox`, `--permission-mode`, `--tools`, `--prompt-file`, and streaming JSON flags; local `grok inspect --help` documents the machine-readable discovery surface used here.

The live launcher reads streaming output while Grok runs. An unmappable/full-tool warning on stderr, or a first `init` whose model, tools, MCP servers, skills, or bundled commands differ from the lock, triggers process-group `TERM` followed by `KILL` before assistant tool use is admitted. A post-run audit still requires exactly one init, exact mandatory `read_file` tool-use evidence, no protected-root edit attempt or image generation in the neutral probe, and the exact result marker. The isolated auth copy is removed in `finally`, including invalid-profile and failed-launch paths.

An independent macOS Seatbelt sentinel test models a writable cell workspace with nested read-only `.grok` and `.agents` roots. Disposable writes to both protected roots exited 1 and preserved their original bytes; a disposable workspace write exited 0. This proves the OS policy semantics used by the admission contract. It does **not** prove that Grok internally compiles `sandbox.toml` to byte-for-byte equivalent Seatbelt rules. A successful live init plus absence of Grok sandbox warnings remains required before any benchmark cell can launch.

Targeted validation:

```text
$ node --test benchmarks/ui-resolve-bench/scripts/test-grok46-runtime-admission.mjs
tests 12
pass 12
fail 0

$ node --check benchmarks/ui-resolve-bench/scripts/grok46-runtime-admission.mjs
$ node --check benchmarks/ui-resolve-bench/scripts/test-grok46-runtime-admission.mjs
# exit 0
```

The twelve cases cover exact four-arm discovery, valid init admission, full-tool fallback, ambient MCP/bundled/extra-tool rejection, mandatory read enforcement, protected-root write rejection, skill byte drift, binary/tool/neutral-guide manifest drift, invalid-profile auth cleanup, two-root Seatbelt denial with workspace-write control, immediate fallback termination, immediate first-init mismatch termination, and successful final auth cleanup.

A fresh no-skill profile was prepared at `/private/tmp/omd-grok46-runtime-admission-live-noskill-20260907-02`. Its `INSPECTION.json` is PASS at SHA-256 `6c52fe2030521bcc6e1ec1f5d903e9ec3938b3d59de21053fdecf4ba183caae2`; its `SEATBELT.json` is PASS at SHA-256 `0dabc3100b67fdcf42c815ff0a6be0e59ba83a4e13626a07a9fd3156b4364dbe`. The authorized provider command was rejected by automatic approval review before execution because the authenticated Grok call's local-guide and execution-environment transmission scope was not explicitly approved. No provider request occurred and no retry or workaround was attempted. The temporary auth copy was then removed; `AUTH-CLEANUP.json` records `removed: true` and reason `approval-review-rejected-before-provider-launch` at SHA-256 `293bd5efcda9372e2170e91393c35274da22fa696f5ed451ed9de44f812b1d9f`.

The provider probe is therefore still pending a concrete approval for the exact 290-byte prompt, neutral guide, and isolated runtime metadata. Because the auth copy was deleted, `-02` is closed and must not be reused. A newly prepared one-shot profile must repeat inspect and OS-probe before that approved call.

The browser bridge remains runnable through its typed FIFO/operator CLI, but it is not yet attached to `run-grok.mjs` process suspension and resumption. Browser visibility isolation and one real cell-owned download also remain unproved because the Computer Use Chrome surface was blocked during this unit. These are B-2 admission blockers; 52-cell launch, calibration, and benchmark scoring remain prohibited.

Native image editing is separately capability-proven outside the benchmark from the root media probes. Native video remains unavailable: the observed API 400 requires a ZDR team `output.upload_url`, and no configured `tools.zdr_video_output_s3` exists. The global privacy configuration was not changed. This capability state cannot be promoted into the benchmark until the runtime admission and equal-tool contract are both satisfied.
