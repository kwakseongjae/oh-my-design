# DESIGN.md format migration — Phase 1 (2026-10-13)

Branch `feat/design-md-v3` (from `origin/main` c0ec4385). Scope: spec draft, three samples, reader
inventory, tests. No bulk migration; `web/references/` is unchanged on the branch.

## 0. Pre-registered decision rule for F1 (written before the shadcn runs)

- Default: **D** (Core v2 anchors + fenced ```yaml``` blocks inside sections), because it is a minor spec change and keeps the stable anchors.
- **B wins** (Google frontmatter + Google section order) only if, in the shadcn skill end-to-end runs, D is strictly worse than B on at least one of:
  1. number of verified token values that reach `globals.css` / the extraction table;
  2. Known Gaps surfaced in the report (the 3.71:1 contrast fact);
  3. Do's / Don'ts turned into checks;
  4. fonts and the "no substitute chosen" fact carried into the report.
- Ties go to D. Both arms use byte-identical prose and the same token set; only token placement and section grouping differ.
- F1 also says "if empirically more standard". If extraction ties, the tie still goes to D unless another first-party consumer (Stitch import, Google `export`) reads only one of them.

## 1. Decision

**F1 → B** (Google frontmatter + Google section order + OmD extra sections + `reference.json`
sidecar). Spec: `spec/design-md-v3.md` (major, 3.0.0).

How it was reached, in order, so it does not read as rationalisation:

1. The shadcn end-to-end runs **tied**: 4/4 arms extracted the same colours, radii, type sizes,
   control heights, the 3.71:1 Known Gap, the "no substitute chosen" fact and the labelled Noto
   fallback (§2.3). Google `lint`, `export --format dtcg` and `diff` are byte-identical across B and D.
2. Under the pre-registered rule a tie goes to **D**.
3. The pre-registration left out a constraint that was already decided: **F4 says legacy goes straight
   to the new format, not through Core v2.** D *is* Core v2.1. The reader inventory (§6, items 1, 8, 18)
   shows that the anchors switch every reader onto the Core path, which requires
   `.omd/system/graph.json`, claim markers, a manifest and the byte-equal mirror. Migrating 518 files
   to D re-enters the stalled Core v2 cutover F4 excludes. B is a hoist-and-rename inside the existing
   frontmatter, proven at 0 lint errors on three references (§4).
4. F1's own tie-break is "empirically more standard". Adoption evidence (FORMAT-LANDSCAPE §1–2) is
   frontmatter: VoltAgent 74/84 files, Ant Design, Atlassian, Mintlify and ko-design-md publish Google
   frontmatter, and the shadcn skill says DESIGN.md files "usually carry YAML frontmatter". Fenced
   blocks have two known instances (Google PHILOSOPHY.md, Oxide).

So the pre-registered rule alone would have said D; F4 plus the adoption evidence overrides it. Stitch
import and Claude Design import were **not tested** (both need the owner's login; the owner's browser
was not touched).

Sidecar decision: one `reference.json` beside `DESIGN.md` (spec §8). It carries exactly the
non-token half of the legacy frontmatter, so Phase 2 swaps a reader's *source*, not its schema. This
follows the existing serendie pattern (catalog frontmatter in a sidecar, projected back by
`readReferenceSource`), without the graph package the legacy 518 do not have.

## 2. B vs D test

### 2.1 Arms

Files: `docs/research/2026-10-13-format/bd-test/toss-B.md` and `toss-D.md`. B was written by hand
from the canonical toss; D was derived from B mechanically (`to-d` in the scratch tool): the
frontmatter split into fenced ```yaml``` blocks in the matching Core section (name/description under
the H1; colors/rounded/omitted in Foundations; typography/fonts in Typography & Assets; components in
Components & States), H2s regrouped under the seven Core anchors, Governance carrying literal
`### Do's and Don'ts` and `### Known Gaps` H3s. Prose is byte-identical. (These two test files use an
earlier `fonts` shape — a list of faces — identical in both arms; the spec and samples use the map
form.)

### 2.2 Google tools

| Check | B | D |
|---|---|---|
| `lint` | 0 errors, 8 warnings (1 contrast 3.71:1, 7 orphaned) | identical |
| `export --format dtcg` | 4,609 bytes | byte-identical |
| `diff B D` | — | no token added/removed/modified |

### 2.3 shadcn/ui DESIGN.md skill, end to end

- Skill: `shadcn-ui/ui` at `2d3f1cd436` (PR #12252, merged 2026-10-09), whole `skills/shadcn/`
  directory installed at `.claude/skills/shadcn` in each app.
- App: `npx shadcn@latest init --base base --preset maia --template next` then `add --all -y`
  (61 components, Next 16.4, Tailwind v4), cloned four times so every arm starts identical.
- Driver: `claude -p --model sonnet --max-turns 80` in each app dir, same prompt
  (`bd-test/PROMPT.txt`): Steps 3, 4, 5 and Report Back only; no dev server, no browser, no Steps 6–7.
  Two runs per arm (B1, B2, D1, D2). Outputs: `bd-test/<arm>/{EXTRACTION.md,REPORT.md,globals.css,run-meta.json}`;
  scorer `bd-test/analyze.mjs`, results `bd-test/analysis.json`.

| Measure | B1 | B2 | D1 | D2 |
|---|---|---|---|---|
| turns / minutes / USD | 13 / 3 / 0.74 | 22 / 3 / 0.79 | 13 / 3 / 0.66 | 20 / 3 / 0.73 |
| colours in `globals.css` (of 11) | 11 | 11 | 11 | 11 |
| radii in `globals.css` (of 7) | 7 | 7 | 7 | 7 |
| type sizes in `globals.css` (of 8) | 7 | 8 | 7 | 7 |
| line heights in `globals.css` (of 6, as px) | 2 | 3 | 2 | 3 |
| TDS heights 56/48/38/32 in `button.tsx` | yes | yes (+46px marketing) | yes | yes |
| 3.71:1 contrast reported | yes | yes | yes | yes |
| "Known Gaps" named | yes | yes | yes | yes |
| no substitute chosen, stated | yes | yes | yes | yes |
| Noto Sans / Noto Sans KR installed as labelled fallback | yes | yes | yes | yes |
| Inter used | no | no | no | no |
| Don't/never items in extraction | 5 | 8 | 8 | 7 |

Line heights mostly land as the ratio 1.5 (54/36 … 21/14 are all 1.5), so the px count understates
extraction equally in every arm. Run-to-run variance within an arm (B1 vs B2) is larger than the
difference between arms. **Verdict: tie.**

Font-layer finding (independent of B/D): with "Substitute: none chosen" and `safeDefaults`, every run
installed `@fontsource-variable/noto-sans` + `noto-sans-kr`, kept `Toss Product Sans` first in the
stack, and wrote "Noto is a fallback, not Toss Product Sans" in the report. The F2 layer design does
what it was meant to do in the main third-party consumer.

## 3. Lint probes that shaped the spec (`@google/design.md@0.4.0`)

Probe files: `bd-test/lint-probe-t1.md`, `bd-test/lint-probe-t2.md`, `samples/typesetting-fixture.md`.

| Probe | Result | Spec consequence |
|---|---|---|
| No `version:` key | silent | §2: omit it (keeps the file free of a third-party version marker) |
| `lineHeight: normal` | **error** ("not a valid dimension") | §3.2/§5: keyword → prose + `prose:` claim |
| typography `use:` | warning | kept, recorded |
| component `typography` as inline map / literal `"17px / 600"` | silent | §3.3 |
| component `type/states/border/hover/…` | warning (`broken-ref`, "not a recognized component sub-token") | §3.3 extension properties, counted as `extension-component-property` |
| component `rounded: 50%`, `backgroundColor: transparent`, `size: 54px x 54px` | silent | kept as measured |
| `typesetting:` with `fontStack`/`letterSpacing: "-0.01em"` | warning `token-like-ignored` | §7.2 silence rules |
| `typesetting:`/`fonts:` with arrays, numbers, non-typography keys | silent | §6.2, §7.1 |
| full fixture (every `fonts` + `typesetting` field) | 0 errors, **0 warnings** | F5 confirmed |

The `token-like-ignored` rule source (`packages/cli/src/linter/linter/rules/token-like-ignored.ts`)
fires on an unknown top-level key when any nested key is `fontFamily|fontSize|fontWeight|lineHeight|letterSpacing`
or any string ≤64 chars is a hex or CSS dimension; arrays are skipped and numbers never match.

## 4. Samples

| Sample | Source | Converted files | Lint | Comparator |
|---|---|---|---|---|
| toss | legacy bytes held in `web/references/toss/.omd/system/graph.json` (hash-checked; what the pipeline reads today) + Core v2 facts via overlay | `samples/toss/{DESIGN.md,reference.json,overlay.yaml}` | 0 errors / 30 warnings | OK: 85 token leaves, 81 claims, 148 prose lines, 30 renames, 6 additions (per-role `fontFamily` stacks from overlay) |
| stripe | `web/references/stripe/DESIGN.md` (legacy) | `samples/stripe/…` | 0 / 27 | OK: 62 leaves, 58 claims, 101 lines, 22 renames, 0 additions |
| baemin (KR, brand font WORK + official Woowa font program) | `web/references/baemin/DESIGN.md` (legacy) | `samples/baemin/…` | 0 / 66 | OK: 177 leaves, 173 claims, 181 lines, 75 renames, 0 additions |

Warning breakdown (from each `reference.json` `lint.byRule`):

| | extension-component-property | orphaned-tokens | contrast-ratio | unknown-typography-property | missing-primary |
|---|---:|---:|---:|---:|---:|
| toss | 20 | 9 | 1 (3.71:1) | — | — |
| stripe | 13 | 10 | — | 3 | 1 |
| baemin | 53 | 10 | 3 | — | — |

Every contrast warning is in `### Known Gaps` as a measured fact. Baemin's one `lineHeight: normal`
moved to Typography prose with a `prose:` claim; the comparator checks the value and the claim.

Reproduce: `node scripts/design-md-v3/run-samples.mjs` (extracts toss legacy bytes, converts all
three, runs the comparator; exits non-zero on any lint error or comparator problem). The comparator
was negative-tested: a one-digit colour change and one deleted prose line are both reported.

**Owner review item — toss source.** The pipeline reads toss from the legacy bytes preserved in its
Core v2 package, not from the visible Core v2 projection. Those bytes carry claimed tokens the Core
v2 projection does not show: `spacing` xs–xxl (4/6/8/16/24/32), and `tds-button` `pressed`
(`scale(0.96)`) and `focus` (`0 0 0 1px #8ac0ff, 0 0 0 3px #b8d9ff`). The Core v2 projection calls the
spacing clusters "a compact working scale, not proof". The v3 sample follows the pipeline source and
its claims (so registry values do not change), and keeps the Core v2 wording in prose. If the owner
prefers the projection's stricter stance, spacing moves to `omitted` and its six claims are dropped —
a value change, so it must be decided, not migrated.

## 5. Pipeline on a branch state with only these three files converted

Method: copied the three `DESIGN.md` + `reference.json` into `web/references/{toss,stripe,baemin}/`,
ran each step, then `git checkout -- web/references web/src/data` (tree clean afterwards).

| Step | Baseline (clean) | Converted | Expected from inventory? |
|---|---|---|---|
| `build-registry` | OK, 521 entries | **exit 1** at `baemin/DESIGN.md: id mismatch: frontmatter 'undefined'` | yes (#2) |
| `quality:references` | 299 / 109 / 113 | **296 / 109 / 116** — all three fall to `legacy_snapshot` (no `tokens`, no `verified`) | yes (#3) |
| `evidence:ledger:check` | OK, 299 refs · 1845 sources | **exit 1**: baemin, stripe, toss "lost its verification_v2 block" | yes (#6) |
| `build-reference-ast` | OK | **exit 1**: "DESIGN.md frontmatter is missing id" | yes (#7) |
| vitest `catalog-integrity` | pass | **6 fail**: per-reference baemin/stripe/toss (`§1 header` regex `^## 1\. Visual Theme`), adopted-reference suite ×3 (toss "unexpectedly has frontmatter", rebuild, shape) | yes (#18) |
| vitest `reference-quality` | pass | **1 fail**: baemin no longer `verified_v2` | yes (#20) |
| vitest `evidence-integrity` | pass (motion 193) | **pass** (motion still 193) | partly: the motion count held only because the three files' Motion sections contain no unsourced ms/cubic-bezier values; it is not a safe invariant for the bulk run (#19) |
| advisory `motion_value_unsourced` | 193 | 193 | — |

No reader was fixed in Phase 1. Every failure is one the inventory predicted.

## 6. Reader inventory (Phase 2 migration plan)

27 reader groups, ~45 files. Paths relative to the repo root. "Gate" = runs in `.husky/pre-commit`
(and CI `quality.yml`/`release.yml`). Under v3 the shared helper misclassifies the file first: it only
knows Core v2 (anchor marker) and legacy, so a v3 file comes back as raw "legacy" and every reader
then looks for `tokens:`, `id`, `verification_v2` and finds nothing.

| # | Reader | Reads | Breaks under v3 | Phase 2 change | Risk |
|---:|---|---|---|---|---|
| 1 | `web/scripts/lib/reference-source.mjs` `readReferenceSource` (dual-read helper) | anchor marker → graph; else raw | v3 returned raw as legacy; sidecar ignored | **Add v3 branch**: detect (spec §12.2), load `reference.json`, project a legacy-shaped source (tokens from frontmatter via inverse §11.1 map, catalog + `verification_v2` with legacy claim keys). Every pipeline reader behind it then works unchanged. | **highest leverage** |
| 2 | `web/scripts/build-registry.mjs` (gate; registry + verification generated files) | hand-rolled 1-level frontmatter parser; required `id,name,country,category,homepage,primary_color,verified,logo`; js-yaml `tokens` | `process.exit(1)` on first v3 file → whole catalog build dies | read through #1 (it reads raw today) | **critical** |
| 3 | `web/scripts/lib/reference-quality.mjs` (tier engine) | `tokens`, `verified`, `verification_v2.claims` keyed `tokens.*`; Motion section; `**Tier 1 sources:**`, `**Conflicts unresolved:**`; `.verification.md` Proof | all → `legacy_snapshot`; v3 claim keys fail `claim_path_unknown` | via #1 projection (claims re-keyed back) or teach `collectCanonicalClaimPaths` the v3 grammar | **critical (tiers)** |
| 4 | `web/scripts/build-reference-quality.mjs` | #1 → #3, drift/colour data | tier collapse; `--check` stale | none beyond #1/#3 | high |
| 5 | `scripts/build-reference-quality-data.mjs` (gate; `data/reference-quality.json`) | same as #4 | same; feeds check-counts, sync-catalog, omd-init query, `src/cli/doctor.ts` | none beyond #1/#3 | high |
| 6 | `web/scripts/build-evidence-ledger.mjs` (gate) | `verification_v2.checked/sources` | "lost its verification_v2 block" | via #1; fix latent bug L81 (`Array.isArray(v2.claims)` on a map → always 0) | high |
| 7 | `web/scripts/build-reference-ast.ts` + `web/src/lib/references/normalize.ts` | frontmatter fence, `^id:`, numbered `## N.` sections, `tokens.*` | throws "missing id"; section keys lose `section-N` | via #1 for identity/tokens; section parser must accept unnumbered Google names (map name → legacy section key) | high |
| 8 | `web/src/lib/references/repository.server.ts`, `detail-projection.ts` (runtime) | Core markers or legacy AST; regexes `## 2. Color`, `## 1. Visual Theme` | `/design-systems/[id]`, `/reference/[id]`, `/api/references/[id]`, `/api/og/reference` 500 | runtime equivalent of #1 (server can read the sidecar); regexes accept v3 names | **critical (live pages)** |
| 9 | `web/src/lib/extract-tokens.ts` (ReferencePreview, builder, export) | flow-style `components:` with `bg/fg/radius/font/…`; typography `size/weight/tracking/family`; prose fallbacks `## 2./3./4./5./6.` | no components (block style, Google names); `fontSize` never read; prose fallbacks miss | read v3 names (`backgroundColor/textColor/rounded/typography`, `fontSize/fontWeight/letterSpacing`), block-style YAML via a real parser; section regexes by name | **critical (/builder)** |
| 10 | `web/src/lib/font-registry.ts` | flow `family: {…}`, `## 3\. Typography` | font silently resolves to "System" | read `fonts.roles` / `fonts.faces`; label substitutes/safe defaults per spec §6 | high |
| 11 | `web/src/app/api/references/route.ts` (catalog grid) | registry first; regex `## 2. Color Palette`, Quick Color Reference | depends on #2; regex misses `## Colors` | regex by name | medium |
| 12 | `web/src/app/r/[id]/route.ts` | raw file | serves v3 file (fine); sidecar not served | none (intended); optionally `/r/<id>/reference.json` | low |
| 13 | `packages/mcp/scripts/sync-data.mjs` (via #1), `packages/mcp/src/data.ts`, `tools/list-references.ts`, `search-by-vibe.ts` | flat frontmatter `country/category/verified`; `^## ` names | filters/boosts empty; AST missing → throws | read catalog from sidecar (sync-data copies it); section names | high |
| 14 | `scripts/gen-llms-full.cjs` | first non-`#`/`---`/`>` paragraph | **publishes a YAML chunk as each brand's one-liner** if frontmatter has blank lines | skip frontmatter properly; use `description` or Overview first paragraph | medium (public text) |
| 15 | `web/scripts/sync-catalog.mjs` | js-yaml via #1; `## 1. Visual Theme & Atmosphere`; `## 4.`; `primary_color/category/name/display_name_kr` | fingerprints get undefined category/colour, empty visual_theme | via #1 + section by name | medium |
| 16 | `scripts/check-counts.mjs` (gate) | `data/reference-quality.json` counts | indirect: counts go stale | none if #3 holds tiers | medium |
| 17 | `scripts/check-reader-blindness.mjs` (gate) | static scan for raw DESIGN.md readers | none directly | add `reference.json` awareness / allow-list as readers change | low |
| 18 | `web/__tests__/catalog-integrity.test.ts` (gate) | registry enums; raw read; Core branch (no frontmatter, manifest, mirror); legacy branch (`---` at 0, `## 1\. Visual Theme`, §4 lints, measured-tokens gate, colour grounding outside `tokens:`, `tokens.components` gate); adopted-reference suite | per-reference §1 header; adopted suite "has frontmatter" | add v3 branch: spec §10 checks + sidecar presence + Google lint 0 errors; port measured-tokens and grounding gates to v3 paths; adopted suite reads toss/krds v3 | **critical (gate)** |
| 19 | `web/__tests__/evidence-integrity.test.ts` (gate) | `verification_v2` dates; motion count `toBe(193)` grounded in `frontmatter.tokens` | dates skipped silently (`catch → continue`); motion count can drift either way | read via #1; ground motion values against v3 frontmatter + sidecar; make parse failure fail, not skip | high |
| 20 | `web/__tests__/reference-quality.test.ts` | baemin pinned `verified_v2` 5 surfaces 6 sources | fails | none beyond #1/#3 | low |
| 21 | `web/__tests__/reference-ast-fleet.test.ts` | raw read, `normalizeReference`, claimPaths = claimCount | throws | via #7 | medium |
| 22 | other tests: `core-projection-parity`, `font-resolution` | package DESIGN.md; baemin fonts | font-resolution fails | update fixtures with #10 | low |
| 23 | pipeline-aware scripts via #1 then js-yaml/regex: `detect-unsourced-prose-values`, `propose-verification-v2`, `build-embeddings`, `audit-reference-context-depth`, `capture-reference-evidence.ts`, `probe-design-system-index`, `scripts/measure-surface-drift.mjs` | `tokens`, `verification_v2`, `^## (\d+)\.`, `homepage` | empty or no-op | via #1; section-number regexes by name | medium |
| 24 | manual tools: `verify-reference.mjs` (add-reference), `token-status`, `token-sheet`, `apply-state-values`, `apply-measured-palette`, `assemble-reference`, `match-*`, `survey-*`, `diagnose-palette`, `migrate-frontmatters`, `reference-deepen/check-claims`, `retire-template-motion` | raw js-yaml `tokens`, enums, numbered sections | no-op or fail | port the writers to v3 (they become v3 writers); retire the ones that only serve 0.1 | medium (writers!) |
| 25 | `scripts/design-md-core.cjs` (`omd design-md`, Core migrator) | `looksGoogleCompatible` detects v3 correctly; extractors legacy-only; `Overview` unmapped | detects but promotes no Google tokens | either retire for catalog use or add Google-token extractors | low |
| 26 | CLI `src/cli/install-skills.ts` `installReferenceCatalog`; root `package.json` `files` | copies only `web/references/*/DESIGN.md` | sidecars not shipped (also true today for toss/krds `.omd/`) | decide: ship DESIGN.md only (portable) — fine for skills — or add `reference.json` | low |
| 27 | skills/agents: `skills/omd-init/SKILL.md` (whole file as `reference_md`; "never copy frontmatter or numbered headings"), `omd-reference-capture`, `omd-master`, `omd-harness` legacy production, `omd-init/scripts/query-references.mjs` | text reads; tier counts | omd-init instruction "never copy frontmatter" now conflicts with Google frontmatter being the tokens | rewrite the omd-init variation rule for v3 (tokens are copyable values, sidecar is not shipped); query-references inherits #5 | medium |

Mirrors: `design-md/` is a byte copy made by `sync-catalog` (#15) and checked by catalog-integrity
(#18); `packages/mcp/data/references/` is gitignored build output of #13. Both follow once their
writers copy `reference.json` too. The root `references` symlink is absent in worktrees (gitignored).

Riskiest: #1 (one change unblocks ~20 readers), #2/#18 (gate dies on the first v3 file), #8/#9
(live `/design-systems/[id]` and `/builder` break silently or 500), #3 (tiers), #14 (public llms-full
text could publish YAML).

## 7. Phase 2 plan

Order is chosen so the gate never sees a v3 file before its readers can read one.

1. **Owner review** of `spec/design-md-v3.md`, `samples/toss/DESIGN.md`, and the toss spacing item (§4).
2. **Adapter first (#1 + runtime #8).** v3 detection and a `reference.json` projection that returns a
   legacy-shaped source (frontmatter rebuilt through the inverse of spec §11.1; claims re-keyed back).
   Proof before any file moves: for all 518 legacy files, `convert → project` must deep-equal the
   original parsed frontmatter (dry run in a temp dir; zero diffs).
3. **Direct readers** that bypass #1, in gate order: build-registry (#2), catalog-integrity v3 branch
   (#18), evidence-integrity (#19, and make parse failures fail), normalize/AST (#7), extract-tokens
   (#9), font-registry (#10, with substitute/safe-default labels), api route (#11), MCP (#13),
   llms-full (#14), sync-catalog + mirrors (#15), embeddings/drift/audit scripts (#23).
4. **Converter coverage.** Survey the 518 for token shapes and headings the mapping does not cover
   (`tokens.font`, `tokens.text`, `tokens.shadow`, other H2s); extend the table, never guess. Bulk pass
   runs converter-only (no overlay); fonts/typesetting overlays follow per reference, reviewed.
5. **Canary batches**: 5 diverse (one verified KR with brand font, one partial, one legacy, one
   structurally atypical, one with motion values) → the 299 verified → the rest in batches of ~50.
6. **Core v2 three**: toss and krds convert from their migration segments (as the sample did);
   serendie from its catalog extension. Decide whether `.omd/system/` stays as an archive.
7. **Writers** (`verify-reference`, `assemble-reference`, `apply-*`, `omd-add-reference`,
   `omd-batch-launch`) emit v3; the AGENTS.md font rule lands as its own commit (§8).
8. Release GO stays with the owner.

### Guards, checked on every batch

| Guard | Pass condition |
|---|---|
| Tiers | `quality:references` = **299 / 109 / 113**, and every id keeps its status |
| Motion | evidence-integrity motion count **193**, and the flagged id set is identical |
| Registry | `registry.generated.ts` semantically equal per id (deep-equal of each entry); any diff must be a listed format-only field. No value change |
| Ledger | `evidence:ledger` 299 refs · 1845 sources, unchanged |
| AST | `reference-ast` semantic diff limited to section keys |
| Claims | per-reference claim count unchanged; comparator OK on every converted file |
| Lint | Google lint 0 errors on every file; `reference.json` `lint` refreshed |
| Builder | Home → `/builder` → brand → preview on the canaries, incl. fonts showing the labelled fallback |

## 8. AGENTS.md font rule — proposed rewording (not committed)

Before (`AGENTS.md`, Hard rules):

> - Narrative evidence and UI-token evidence are related but not identical. An official font's history, visual character, or license can belong in the reference without being promoted to `tokens.typography.family.ui`. Do not delete useful brand context merely because it is not a machine token.
>
> - Runtime font availability does not authorize substitution. A known but non-loadable font may be labeled unavailable; do not render Inter/system-ui as though it were that font.

After:

> - Narrative evidence and UI-token evidence are related but not identical. An official font's history, visual character, or license can belong in the reference without being promoted to a UI role (`fonts.roles.ui` in v3, `tokens.typography.family.ui` in legacy files). Do not delete useful brand context merely because it is not a machine token.
>
> - **Unlabelled font substitution is forbidden.** Runtime font availability never turns another face into the brand face: a known but non-loadable brand face keeps its metadata and is labeled unavailable. A substitute is allowed only when it is chosen by measurement, recorded per script under `fonts.faces.<family>.substitutes` with its metrics in `reference.json`, and labeled "substitute — not the brand face" wherever it is named or rendered. A per-script safe default (Noto Sans, Noto Sans KR/JP/SC/TC) is labeled "safe default (not the brand face)". Never render Inter, system-ui, a substitute, or a safe default as though it were the brand face, and never choose a substitute by eye — with no measurement, write "Substitute: none chosen".

The "Unknown means absent" bullet already says a substitute must not be promoted "as a brand/product
fact"; it stays as is. The "Reference depth" bullet's "§3 must distinguish …" becomes "The
Typography section must distinguish …" once numbered sections are gone.

## 9. Open items for the owner

1. Approve B / `spec/design-md-v3.md` (major 3.0.0), or send it back.
2. Toss spacing: keep the six claimed spacing tokens (pipeline source) or follow the Core v2
   projection and omit them (§4).
3. Extension component properties (`type`, `states`, `hover`, …) stay in the frontmatter as warnings
   (lossless, 1:1 claims). Alternative: move pure-prose ones (`states`, `use`) to the body and keep
   their claims at `prose:` paths — fewer warnings, more converter logic.
4. Ship `reference.json` in the npm package / skill install, or keep installs DESIGN.md-only (#26).
5. Project-root DESIGN.md writers (omd-learn, autopilot, harness Phase 5) stay on Core v2 for now;
   moving them to v3 is a separate decision.

## 10. Files

- Spec: `spec/design-md-v3.md`
- Converter and checks: `scripts/design-md-v3/{mapping.mjs,convert-legacy.mjs,compare-values.mjs,extract-core-legacy.mjs,run-samples.mjs}`
- Samples: `docs/research/2026-10-13-format/samples/{toss,stripe,baemin}/{DESIGN.md,reference.json,overlay.yaml}`, `samples/typesetting-fixture.md`
- B vs D evidence: `docs/research/2026-10-13-format/bd-test/` (arms, lint/export outputs, prompt, driver, four runs' extraction/report/globals.css, scorer, analysis)
- Scratch (not committed): shadcn app clones and raw run JSON under the session scratchpad `v3/apps/`.
