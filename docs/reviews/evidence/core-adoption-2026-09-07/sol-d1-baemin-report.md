# D-1 Baemin consumer parity foundation — 2026-09-07

Status: **consumer foundation PASS; compile/adoption and rendered-route acceptance BLOCKED.** No provider call, canonical reference edit, adoption, publication, visual redesign, or token addition occurred.

## First failing boundary

The current repository loader assumes every active canonical `DESIGN.md` has legacy YAML frontmatter. A Core v2 canonical therefore reaches `normalizeReference()` and throws before any consumer can render it. The preview flag has a second mismatch: it serves staged Core Markdown while retaining an AST normalized from the legacy canonical. `/design-systems/[id]` and `/reference/[id]` then combined that Core body with the legacy extractor and legacy AST.

The new `consumer-adapter.ts` makes the active document format explicit. A Core document is projected directly from its active bytes and receives no legacy AST. A legacy document retains the current AST projection. `repository.server.ts` now permits a Core canonical without invoking the frontmatter parser, and API/page consumers share the same active-document decision.

## Baemin parity fixture

`fixtures/baemin-core-parity-v0.1.json` locks the current legacy source at SHA-256 `b04937971f8b91b376d1b523f5a476f6b002a4652284cdaf823eb60f3407af49` and the reviewed staged Core at `f20ad19a993eb44428f5ed5ac2d21ddf1701a1cecbafb8a16434c86e975bb39a`.

The fixture verifies these active Core outputs:

- Raw Markdown is byte-for-byte the active staged or canonical Core document.
- Canvas `#ffffff`, foreground `#222222`, and WORK metadata (`BAEMINWORK`) survive.
- The reviewed Core calls `#0cefd3` a public-web **Accent**, not a canonical Primary. The active primary field is therefore empty. The mint remains in the exact raw narrative and is not filled from `registry.generated.ts`.
- WORK remains family metadata. This change does not claim a browser-loadable file or current runtime measurement.
- No global/canonical radius exists in the staged contract, so surface-local 12px/8px/16px observations do not become the default radius. The projected field is empty.
- The current-app typeface narrative, corporate surface-local values, and no-shadow boundary remain in raw and Builder-projected Core Markdown.
- Replacing a temporary Core canonical with the exact legacy bytes restores the legacy loader and AST projection byte-for-byte.

The Core extractor previously selected the first radius-like prose value, which promoted Baemin's 12px download-card radius as a system default. It now accepts radius only from a structured bullet whose label explicitly declares a canonical/default/system-wide/universal role. Radius prose, surface-local bullets, and even a structured `Default radius` line that later says `not canonical` remain absent. Its font metadata recognizer covers the reviewed `Current official app family` form.

The compatibility color projection is similarly narrow: only exact structured `Primary`, `Canvas`, `Foreground`, and `Border` roles are admitted. Descriptions containing words such as “primary action” or “default canvas,” and qualified labels such as `Corporate Primary`, `Card Background`, or `Marketing Foreground`, do not fill a global field. This is a safe first-consumer boundary, not a replacement for the missing typed Core transport.

## Consumer behavior

`/api/references/baemin` under `OMD_REFS_SOURCE=v2` now returns the exact active Core Markdown, `x-omd-reference-model: core-v2`, `x-omd-reference-source: migrated-preview`, and `x-omd-reference-parity: core-v2-active`. It does not attach the legacy `referenceAst` to the Core body.

The Builder receives that same data shape. Its existing Core projector keeps the source sections and produces a structurally valid Core document. The CLI migration parser reparses that Builder output with `projection_roundtrip_equal: true` and identical output bytes. This is projection parity, not an authority transition.

The detail, legacy preview, OG, and evolution consumers now tolerate an absent legacy AST. Quality metrics continue from the generated quality record and raw narrative stays available, but neither is yet a source-bound Core evidence contract. When a Core AST is absent, OG uses only the active detail's admitted colors. DetailView omits the unresolved Components row while preserving the remaining verified body and metadata; it no longer exposes an implementation-status warning or calls an AST-null, prose-extracted component set `baseline`. Font evidence remains `unresolved`. No missing field is replaced with a new token.

## Compile/adopt trace

A provider-zero migration run was executed in `/private/tmp/omd-d1-baemin-migrate-20260907`:

```text
$ node scripts/migrate-design-md-core.cjs \
    --input web/references/baemin/DESIGN.md \
    --write --out-dir /private/tmp/omd-d1-baemin-migrate-20260907 --json
status: pass
source_reconstruction_equal: true
dropped_segments: 0
opaque_preserved_segments: 17
portable_core: false
reason: missing-primary-task
```

That engine-generated Core hash is `c1567e8515227bc307637f3e1906654ef19332979367db174de6f1f5d834d259`, different from the reviewed staged Core hash `f20ad19a…`. The generated graph preserves the full original through the opaque migration ledger, but its projection is structural-only and cannot replace the reviewed staged document.

The reviewed staged directory contains `DESIGN.md`, `provenance.md`, `migration-log.md`, and worker logs. It has no compiler-ready JSON graph, provenance, coverage, manifest, or migration report. `compile-design-md-core.cjs` therefore cannot consume it as an adoption transaction. D-1 must build a reviewed enrichment that preserves the current migration engine's exact original-segment ledger, binds the reviewed staged semantics to JSON provenance/coverage, and passes the compiler review boundary. A contemporaneous transaction must be created; the prose sidecars are not retroactive proof that the current compiler produced the staged file.

## Validation

```text
$ npx vitest run \
    src/lib/references/consumer-adapter.canary.test.ts \
    src/lib/references/reference-ast.test.ts \
    src/lib/extract-tokens.test.ts \
    src/app/api/references/[id]/route.test.ts \
    __tests__/font-resolution.test.ts
Test Files 5 passed
Tests 45 passed

$ npm run typecheck
tsc --noEmit # PASS

$ git diff --check -- <D-1 files>
# PASS
```

The seven canary cases cover staged active bytes, a temporary adopted-Core canonical, Builder/CLI semantic roundtrip, exact legacy rollback, absent-primary non-fallback, qualified surface-color rejection, and adversarial radius admission. Existing API and font-resolution cases remain green.

## Remaining admission work

This unit does not claim Home → Builder interaction or rendered preview parity. `referenceAst` has no Core-side typed evidence/token transport yet, so alternate token exports, evidence-drawer detail, font provenance, component-harvest status, and the preview renderer's complete no-fallback behavior remain unproved. The current generic `extractTokens` path still contains legacy presentation defaults; those must not be treated as Baemin facts.

The remaining transport requirement is concrete: a contemporaneous Core adoption transaction must expose a source-bound typed contract containing claim paths, token values and explicit absences, font metadata separated from runtime availability, evidence source/claim bindings, quality and coverage values, and component-harvest status. The consumer must use that contract directly. It may not reconstruct authority from free prose, the legacy AST, registry primary color, or generic extractor defaults. Until that exists, the active Core raw document is safe to serve, but AST-dependent evidence and renderer claims stay pending and route acceptance stays blocked.

Canonical adopt/rollback is also blocked until the reviewed staged semantics have a valid lossless graph/provenance/coverage/migration transaction and owner checkpoint. No file under `web/references/baemin/` changed in this unit.

## Typed transport and deploy verifier follow-up

`core-consumer-contract.ts` now derives reference-facing claims from the existing adopted six-artifact transaction. Admission first runs the existing canonical package verifier, including all schemas, Portable Core conformance, exact `renderCore(graph)` projection, hash bindings, owner receipt, and migration ledger. It then resolves every provenance decision against the graph. Resolved values require a matching path/value and evidence; unresolved paths become explicit absences; a token without an exact evidence binding is omitted at that token boundary.

The deploy verifier is a deterministic byte-copy closure under `web/src/generated/core-verifier/`, generated and checked by `scripts/build-web-core-verifier.cjs`. It includes the full require closure (five CJS modules) and seven schemas. A static generated entry embeds the identical schemas for Turbopack while the CLI keeps its original file lookup. An isolated web-only child process admitted a valid package and rejected noncanonical DESIGN and drifted provenance without resolving any module outside its copied web closure.

The active-source loader reads only sidecars next to the exact served DESIGN file. The adapter and API carry `coreContract` only after verified admission. Missing and rejected transactions do not receive legacy AST or registry values. Font runtime availability stays `unverified`; component harvest status stays `unreported`. DetailView omits the component row when typed transport is absent instead of showing implementation status to users.

Validation after this follow-up:

```text
$ node scripts/build-web-core-verifier.cjs --check
checked 14 web verifier files

$ node scripts/test-web-core-verifier-closure.cjs
{"valid":true,"noncanonical":false,"sidecarDrift":false}

$ npx vitest run src/lib/references/core-consumer-contract.test.ts \
    src/lib/references/consumer-adapter.canary.test.ts \
    src/app/api/references/[id]/route.test.ts
Test Files 3 passed
Tests 24 passed

$ npm run typecheck
PASS

$ npx next build
PASS; 1,471 static pages generated

$ npx vitest run test/unit/cli/packaged-design-md-core-smoke.test.ts
Test Files 1 passed
Tests 1 passed
```

The production server smoke returned the canonical legacy Baemin route as `ast-v1`. With `OMD_REFS_SOURCE=v2`, it returned `core-v2`, exact staged SHA `f20ad19a993eb44428f5ed5ac2d21ddf1701a1cecbafb8a16434c86e975bb39a`, empty primary/radius, no legacy AST, and no typed contract because the staged directory still has no adopted transaction. The packaged CLI smoke also installed the actual tarball offline, ran all four channel doctor checks, and compiled a fresh adopted Core package, so the shared schema loader change preserves the published CLI path. Builder overrides, alternate exports/evidence drawer integration, and rendered Home → Builder acceptance remain blocked.
