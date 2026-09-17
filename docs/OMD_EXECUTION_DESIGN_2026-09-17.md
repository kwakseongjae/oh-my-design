<!-- Produced by the `omd-remaining-work-design` workflow, 2026-09-17.
     11 agents: 4 repo surveys, 3 independent designs, 3 adversarial critics, 1 synthesis.
     1.9M subagent tokens, 656 tool calls, 57 minutes, 0 agent errors.
     The orchestrator re-verified the load-bearing claims before filing; see the note at the end. -->

# OMD Execution Design — 2026-09-17

**Supersedes:** `docs/OMD_EXECUTION_PLAN_2026-09-16.md` §2–§4 scheduling, and the deadline sections of `docs/OMD_ROADMAP_2026-09-16.md`.
**Status:** ready to start Thursday 2026-09-17. Week 1 ends Wednesday 2026-09-23.

---

## 0. The verdict, first

**The deadline cannot be met and should not be.** 140 references lose their badge across 2026-10-09..11. Honest re-verification is 3–6 live re-observations and a median of ~49–55 claim re-groundings per reference (366 product-surface sources, 7,654 claims across the 140, krds alone 193), plus per-brand capture-harness repair that `docs/CAPTURE_PIPELINE_RETRO.md` already documents for three of the five most urgent brands. In 22 days one person honestly re-earns on the order of **10**, with a stretch to 18 — not 140.

So this plan does not aim at 140. It aims at:

> **On 2026-10-12 the catalog reads ~10 verified / ~314 partial / 116 legacy, computed at read time from recorded observation dates, with no commit required to make it true — and each of those ten has *more* components than it has today, not the same.**

Everything else in this plan exists for one reason: **on 2026-10-10 CI goes red with nothing changed, and at that exact moment the four cheapest ways to get green are all text edits.** They are, in measured order of yield:

| Forgery | Yield at 2026-10-12 | Files touched | Caught today by |
|---|---|---|---|
| `SOURCE_TTLS["product-surface"] 90 → 180` | 0 → **141** verified | 1 line, 1 file | nothing (3 grep hits, all in that file, no test) |
| Relabel `kind: product-surface` → `official-doc` | 0 → **141** verified, valid to 2027-01-07 | 366 strings | nothing |
| Delete product-surface sources, re-point claims to a surviving official-doc source | **134/140** still verified at 2026-12-31 | 140 files, no date changed | nothing |
| Rewrite 366 `captured:` strings (incl. `2099-01-01`) | 0 → **140** | 366 strings | nothing |

All four were measured against the shipped evaluator. Any plan that does capture work before closing them is spending 15 days of browser time to buy something a 30-second `sed` also buys. **Guards first is not overhead; it is the only thing that makes the capture days mean anything.**

Second thesis, and the reason the target is depth and not badges: **the badge is not the product.** Tier does not predict handoff. Component count does — (download+copy)/generate is 0.499 for references with ≥5 components and 0.386 for those below, within the top-140 demand band. (Association, not causation — `docs/research/2026-09-16-briefing/component-dependency-check.md:59-73` already issued that correction once; do not re-inflate it. What *is* firm is the negative: promoting references does not move the funnel.) July's batch achieved 140 badges by deleting components — verified refs average 2.9 components against legacy's 9.9, and 51 of 140 define no button. Restoring badges the same way would be a failed plan even if it hit 140.

---

## 1. Ordering decision

**Order: close the forgeries → fix the evaluator defects that punish depth and reward deletion → take the free measurements → then capture.**

Week 1 ships **zero committed recaptures**. That is deliberate and it is the plan's single most contested choice, so here is the arithmetic. 22 days remain. Seven go to guards and evaluator fixes; fifteen remain for capture. At even one reference per day that is 15, above the 10-reference target. A recapture done before the guards exist would (a) land under a completion predicate that is satisfied by deleting the components you could not measure, and (b) have to be redone when per-claim expiry changes what "expired" means. One *uncommitted measurement capture* runs on Sunday 09-20 precisely so the unit cost is known before the engineering week finishes.

### What the deadline forces

- The **dates** on 140 references. Nothing else about them.
- **CI red on 2026-10-10 00:17 UTC** — `quality.yml`'s nightly cron plus every PR, via `check:reference-pipeline` → `build-reference-quality.mjs --check`, which regenerates at *today's* date and byte-diffs the committed manifest. Measured: `--as-of 2026-10-09` exits 0, `--as-of 2026-10-10` exits 1.
- Two collateral test failures the obvious fix creates: `web/__tests__/reference-quality.test.ts:154-163` hardcodes baemin as `verified_v2, reasonCodes: []`; `test/unit/scripts/build-reference-quality-data.test.mjs` expects exit 0. `package.json prepublishOnly` starts with `query:references:data:check`, so **npm publish is blocked too**.
- Five English SEO pages hard-404 on the next deploy after 10-10 — `ENGLISH_REFERENCE_IDS = ['baemin','toss','kakao','naver','karrot']`, all five in the 10-09 cohort, `evolution/page.tsx:48` calls `notFound()` on any non-verified status while `sitemap.ts:128-135` still lists them at priority 0.78 and `generateStaticParams` still prerenders them.
- **aphrodite-mela breaks on the same date**: `src/design/bridge.ts` SHA-256-pins `toss` and `karrot`, both in the 10-09 cohort and both first on the recapture list. omd's own recovery is what throws `Reference hash mismatch`, silently on omd's side.

### What the deadline does *not* force

- **The 299 `verification_v2_missing` backlog.** Zero of the 299 become verified from a v2 block alone (measured: inject a perfect synthetic block into all 299 → 0 promotions, 295 then hit `interactive_state_missing`). The workable subset is 183, and 0 of the 183 have a retained evidence bundle. Their own `.verification.md` evidence expires 2026-09-06..09-30 — *before* the badge wall — so the paper work on them is throwaway without a capture first. `docs/VERIFICATION_V2_BACKLOG_2026-09-17.md:88`'s "188건은 새 측정 없이 가능할 수 있다" is wrong; the number is 0. **Defer the whole track this quarter.**
- **Component thinness.** That is July's defect, not October's. It is orthogonal to expiry and it is the thing worth fixing.
- **Q10b component form, issue #97, catalog growth to 1000, Aphrodite B1/B3/B5.** All deferred; see §5.

### What changes about "expired"

Today, one expired source blocks a whole reference *even when it grounds zero claims* — krds is the verified case (0 of 193 claims cite its product-surface source). That is not a truth rule, it is a bug. W4 makes expiry **per-claim**: a reference is blocked when a claim cites a stale source, not when a stale source merely sits in the file. This reshapes "140 references expire" into "roughly 12% of claims go stale" and it is the change that kills the highest-yield forgery in the table above. It will also restore a handful of badges with no new observation — see the mandatory disclosure in W4.

---

## 2. Week 1 — Thu 2026-09-17 to Wed 2026-09-23

Every item has a runnable check and a named safety mechanism. Where an item needs no safety mechanism, that is stated and justified rather than omitted.

### Thu 09-17 (remaining hours) — freeze the evidence, close the two one-line forgeries

**W1 — Archive July's bundles, and ignore the archive *before* creating it.**

```bash
printf 'artifacts/reference-evidence-2026-07/\n' >> .gitignore
cp -R artifacts/reference-evidence artifacts/reference-evidence-2026-07
# then add the archive path to TRACKED in scripts/local-store.mjs:34
node scripts/local-store.mjs --write && node scripts/local-store.mjs --verify
```
**Check:** `git status --porcelain | grep -c reference-evidence` → `0` · `du -sh artifacts/reference-evidence-2026-07` → `145M` · `--verify` reports `recorded == present` for **both** trees.
**Safety:** the `git status --porcelain` assertion is the mechanism, and it is the one the previous drafts omitted. `.gitignore:102` ignores `artifacts/reference-evidence/` only; the archive would otherwise be 145MB of untracked-but-unignored files that the next `git add -A` commits, directly against owner decision Q7. `local-store.mjs:34` TRACKED is a hardcoded two-entry list — extending it is part of the step, not an assumption.
**Honest limit:** this proves custody on one disk. It does not protect anything against disk loss. The 4,748 state observations are July's DOM and cannot be re-observed. **Owner decision D6.**

**W2 — Reject future-dated captures.** One condition in the source loop of `web/scripts/lib/reference-quality.mjs` (the `SOURCE_TTLS` block at :382): `captured > asOf` → blocking `source_date_future`.
**Check:** new fixture in `web/__tests__/reference-quality.test.ts` with `captured: "2099-01-01"` → `partial`, codes include `source_date_future`; `grep -rn 'captured: "20[3-9][0-9]' web/references` → nothing; `node web/scripts/build-reference-quality.mjs --check` still exits 0.
**Safety:** the fixture is the safety. Measured today, `captured: "2099-01-01"` evaluates clean with zero reason codes.

**W3 — Pin `SOURCE_TTLS` in a test.** Export it (already `export const` at :40) and assert the exact object in `web/__tests__/reference-quality.test.ts`.
**Check:** edit `90` → `180`, `npx vitest run __tests__/reference-quality.test.ts` exits 1, revert, exits 0.
**Safety:** it *is* the safety, and it is the cheapest line in this document — one assertion closing a one-integer edit worth 141 badges that currently has no test coverage anywhere in the repo.

### Fri 09-18 — make expiry mean what it says, and pin source identity

**W4 — Per-claim expiry + `method`↔`kind` consistency.** In `reference-quality.mjs`:
- a source's age blocks only if ≥1 claim cites its `source_id` → new blocking code `claim_source_expired` (replaces `source_expired`);
- a source citing no claim → non-blocking `source_grounds_nothing`;
- a claim whose `method` contains `computed-style` **must** cite a `product-surface` source; a claim citing an `official-doc` source **must** carry `official-doc` in `method` → blocking `claim_method_source_mismatch`.

**Check:** `node web/scripts/build-reference-quality.mjs --check --as-of 2026-10-12` and **record the new number** · fixture: re-point one toss claim from `tds-button-live` to an official-doc source without touching `method` → `claim_method_source_mismatch` · `--as-of 2026-09-17` composition is published in `CURRENT_STATE.md` the same day.
**Safety:** this is the mechanism that kills the measured 134/140 "delete the product-surface source, re-point the claims" forgery. Deleting the source now forces the claims to move, and moving them forces a `method` rewrite asserting that a documentation page states a computed style — a much louder and plainly false edit, and one the checker rejects on shape.
**Mandatory disclosure, part of the step:** W4 will restore some badges at 10-12 with no new observation (krds is the known case). **Every reference restored by W4 alone must be listed by name in `docs/CURRENT_STATE.md` under a heading that says so.** An unlisted restoration is indistinguishable from the forgery this step exists to prevent.

**W5 — `data/source-ledger.json`, committed and checked.** New `scripts/build-source-ledger.mjs`: one row per `(reference, source_id)` carrying `url`, `host`, `kind`, `captured`, `claimCount`, and — for any `captured` after 2026-09-17 — `bundle` path + `sha256`. Plus a host↔kind rule: `official-doc` requires a doc-like host or path. (Measured: 344 of 366 current product-surface URLs are bare brand/commerce hosts, so a wholesale relabel fails.)
**Check:** `node scripts/build-source-ledger.mjs --check` exits 0 today · `sed -i '' 's/kind: product-surface/kind: official-doc/' web/references/vercel/DESIGN.md` → `--check` exits 1 naming the row · revert.
**Safety, and its explicit limit:** in CI the bundle bytes are absent (`.gitignore:102`), so CI verifies *shape*, not observation. **This is a visibility mechanism, not a proof mechanism.** No proof mechanism is available to a repository that cannot observe the world; a hash-receipt gate degrades in CI to "a row exists in a file the same author edits in the same commit." What the ledger genuinely does is move every source mutation out of a 300-line reference diff into one reviewable file, so a relabel or a deletion cannot ride along unnoticed. That, plus this document naming the four cheapest forgeries by measured yield, is the whole defence. Say so out loud rather than dressing it up as attestation.

### Sat 09-19 (light, ~2h) — unblock the skills, tell the truth in the docs

**W6 — Propagate the 2026-09-16 narrowing to the three skills that still refuse the work the owner authorised.** `omd-batch-launch`, `omd-component-harvest`, `omd-token-backfill` still say "this skill refuses catalog writes — all of them, with no one-off exception," citing a 2026-09-02 note that `omd-add-reference` itself declares stale. `omd:component-harvest` categorically refuses exactly the state-value restoration the narrowing permits. Also delete the stale `CORE_V2_CATALOG_WRITE_BLOCKED` paragraph at `omd-add-reference/SKILL.md:37-52` (Q9 was decided in commit `7f3c0ff8`, 2026-09-16 23:18; what blocks the work is a leftover paragraph, not an owner decision), and the same text in `omd-add-reference/batch-instructions.md`.

**Correction to the truth-first critique, measured this session:** these five skills are *not* generated from canonical `skills/`. They exist only in `.claude/skills/` and `.agents/skills/`, and `sync-runtime-mirrors.cjs` classifies them as `destination-only-overlay` (inspect loop at :112-117) — it neither regenerates nor reverts them. So this is a direct edit to **both** trees, kept byte-identical by hand.
**Check:** `grep -rLn "Scope, narrowed by owner decision" .claude/skills/omd-{add-reference,migrate,batch-launch,component-harvest,token-backfill}/SKILL.md` prints nothing · same for `.agents/skills/…` · `diff -r .claude/skills/omd-component-harvest .agents/skills/omd-component-harvest` is empty · `node scripts/sync-runtime-mirrors.cjs --check` exits 0.
**Safety:** none needed — editorial. The anti-regression is the `grep -rL` above, added to the existing skill-sync CI job.

**W7 — Truth pass, count-agnostic rather than count-pinned.**
- Delete the hardcoded `141 verified_v2, 159 partial, 140 legacy` from `web/src/app/layout.tsx` (:39, :82, :98, :137, :164) and `web/public/llms.txt:3`. Real value is 140/184/116. Replace with either build-time generated values or count-agnostic prose. **Do not add a tier-triple rule to `scripts/check-counts.mjs`** — the triple changes by construction on 10-10, 10-11 and 10-12, so a rule guarantees three forced documentation commits inside the sprint and recurring red after it. (Its existing reference rule matches the number before `references|design systems|verified`; `verified_v2` has no word boundary, which is why it passes clean today.)
- `0 verified / 300 partial / 140 legacy` → `0 / 324 / 116` at `docs/OMD_EXECUTION_PLAN_2026-09-16.md:16`, `docs/CURRENT_STATE.md:29`, `docs/OMD_ROADMAP_2026-09-16.md:33`. `source_expired` demotes to partial only; `partialBlockers` stays empty, so none of the 140 fall to legacy. CURRENT_STATE.md contradicts itself between :29 and :172.
- Delete the retracted "R형 55개 = 브라우저 실행 0" paragraph from `CURRENT_STATE.md`.
- `docs/OMD_FORMAT_STRATEGY_2026-09-16.md` §9: `component_state_prose_only` 166 → **146**; "실제 상태값 보유 11" → **32**.
- Roadmap: tier table 140/160/140 → 140/184/116; JP candidates 79 → 100 numbered + 21 reserve (all 100 slugs re-checked against the 440 directories, zero collisions); §C.4 "정확히 10개 ref가 깨진다" → 13 found short; §C.7b — the identity/CI vocabulary sweep moves *writability*, not headcount (measured 1/10 Tier-3 candidates gained a token-grade first-party document: kakaku, whose logo guideline sits at `kakaku.com/help/logo/` while the report checked `xtech.kakaku.com` — the Amorepacific mechanism verbatim).
- `spec/design-md-core-v2.md` ~:418: the closing paragraph of "Consuming a preserved conflict" describes the `omitted` claim's reason classes, not the conflict ladder. Move it. A normative spec misattributing reason classes will be mis-implemented by the independent implementer the spec exists for.

**Check:** `grep -rn "159 partial\|141 verified_v2\|0 verified / 300\|R형 55\|166\b.*prose_only" web/src docs web/public/llms.txt` → nothing · `node scripts/check-counts.mjs` exits 0.
**Safety:** none needed — editorial. The load-bearing point is the *absence* of a new CI rule; adding one would recreate the clock-triggered red this plan is removing.

### Sun 09-20 (light, ~4h) — free measurements, before anything is written off

**W8 — Measure the real state yield, with the filters that make it honest.** Add three flags to `web/scripts/extract-state-values.mjs`:
- `--distinct` — count distinct `(component, state, property, value)` tuples, not raw elements. Measured: 4,501 raw deltas collapse to **1,548** distinct tuples and roughly half that again in proposable values (krds 446 → 28 → 14; toss 87 → 22 → 15).
- `--exclude-ua-defaults` — 3,253 of the 4,501 (72%) sit on `<a>` elements, 225 of them carrying UA link blue `rgb(0,0,238)`.
- `--interactive-base-only` — reject any candidate whose base element does not classify as an interactive component type via `classifyCapturedElement`. This is the *structural* filter; `match-state-candidates.mjs` scores colour/radius/height/padding similarity, which is a **value** test and cannot tell that the wrong element was measured. Value-similarity alone is the ubie failure mechanism (six palette-step hover values wrong against shipped CSS) at script scale.

**Check:** `node web/scripts/extract-state-values.mjs --all --distinct --interactive-base-only | tee artifacts/state-yield-2026-09-19.txt` · `grep -c '0,0,238' artifacts/state-yield-2026-09-19.txt` → `0` · the three numbers recorded in `CURRENT_STATE.md`.
**Safety:** **there is no numeric target on this step, and there is none anywhere in this plan.** The doneWhen is that the filters exist and the count is recorded, whatever it is. A "≥N deltas" doneWhen is what turned all three prior drafts into fabrication engines: it is reachable only by counting duplicated anchor hovers, in direct tension with the UA-default rejection the same steps mandated.

**W9 — Emit the 16 orphan bundles' observations *unattributed*.** For the bundles whose `::state-*` bases are disjoint from `components[].representative.selector` (line, banksalad, channeltalk, coupang, nhn, oliveyoung, upbit, zigzag, lotteon, …), add `--orphans`, printing rows like `surface-4::[data-omd-capture="3"] hover color #x → #y — component unknown`. banksalad has 44 distinct measured bases, nhn 52, oliveyoung 23, line 21.
**Check:** `node web/scripts/apply-state-values.mjs --from artifacts/orphans.json` **exits 1** with `orphan rows carry no component attribution and cannot be applied`.
**Safety:** the apply-side refusal, plus the absence of a count target. **Relaxing the join is banned by name in this plan.** All three critics measured the same thing: 70 of the 86 state-bearing bundles *already* join on exact selector equality (the tool reports 67 only because three yield an empty delta after the meaningful-property filter), and the 16 that do not have reps and state bases that are *different DOM elements* — line's reps are `surface-3::li` and `surface-3::[data-omd-capture="7"]`, its state bases are indices 3/4/5. No normalisation relates them. Any join that produces output for `line` attributes element #4's hover to component #7. Two of the five "holds real state observations" cases (socar, wanted) join fine and yield empty deltas because their only state difference was `transform`, which the harness excludes on purpose — there is nothing there to recover, and W11 gives them the correct answer instead.

**W8b — One uncommitted measurement capture: `line`.** Bundle only, no DESIGN.md edit, no commit.
**Check:** bundle written with `capturedAt` today; wall clock, surface count, `::state-*` count and raw-sample count recorded in `CURRENT_STATE.md`.
**Why `line` and why now:** it is demand rank 10, it is the only member of the 10-09 cohort with zero usable state delta in hand, and it is therefore the hardest and least-known unit in the cohort. Measuring the worst case on day 4 rather than day 8 is what makes the 09-23 projection real. **Captures are not on the shared browser channel** — `capture-reference-evidence.ts:453` launches its own headless Chrome via `playwright-core`; AGENTS.md's one-shared-browser rule governs the Computer Use Chrome surface, not a headless CLI process. Captures may run concurrently. Serialising them was most of why the earlier week-1 plans did not fit.

### Mon 09-21 — status computed at read time

**W10 — Split the manifest: commit the facts, derive the status.**
- `web/src/data/reference-quality.generated.ts` keeps only **time-invariant** per-reference facts: source kinds + `captured` dates, per-claim `source_id` and `method`, coverage, component/interactive/stated counts, non-time reason codes, conflicts.
- New `web/src/lib/references/status.ts` exports `referenceStatus(facts, now)` deriving status plus the time-dependent codes.
- Switch every consumer: `design-systems/page.tsx:72`, `lib/design-systems.ts:31,100`, `lib/collections.ts:282`, `lib/references/repository.server.ts:68`, `sitemap.ts:130,171`, `components/ds-card.tsx:32-37`, `builder/page.tsx:10,423` → `preview-export-view.tsx:292,396` → `reference-evidence-drawer.tsx:130` and `reference-preview.tsx:85`, `design-systems/[id]/evolution/page.tsx:13,48`, `api/reference-evolution/[id]/route.ts:12`, and `skills/omd-init/scripts/query-references.mjs:193-205 policyFor()`.
- `--check` now compares only the invariant half and is calendar-stable.

**Check:** `node web/scripts/build-reference-quality.mjs --check` exits 0 · `node web/scripts/build-reference-quality.mjs --check --as-of 2026-10-12` **exits 0** (that is the entire point) · `node web/scripts/report-status.mjs --as-of 2026-10-12` prints the true composition · `node scripts/build-reference-quality-data.mjs --check` exits 0 at any `--as-of` (unblocks `prepublishOnly`) · `web/__tests__/reference-quality.test.ts:154-163` rewritten as two cases: `referenceStatus(FACTS.baemin, '2026-09-17')` → `verified_v2, []`, and `…'2026-10-12'` → `partial, ['claim_source_expired']`.
Also add a **non-blocking** nightly report: `--expiring --within 30`, which today prints the 10-09 cohort.
**Safety:** this is the step most at risk of being read as "freeze the manifest and keep publishing 140." It is the opposite. What is pinned is the *recorded observation dates*, which are facts and do not change. What is derived is the status, which now flips to the truth on 2026-10-12 **automatically, at build or request time, with no human and no commit**. Pinning the derived status — the alternative all three drafts flirted with — publishes an expired observation as a current one and deletes the only signal that the catalog's central claim went stale. That is rejected. The complementary defect, a clock-triggered CI red that arrives at maximum pressure two days before anyone expects it and points straight at the four forgeries, is deleted by the same change.

### Tue 09-22 — the two gates that make depth possible and deletion impossible

**W11 — `omitted` at the state-key level, two reasons, only one of them clearing.** Extend the `omitted` claim class already shipped in `edce1cff` (`design-md-core-conformance.cjs:22`, `:415-429`) to `tokens.components.<c>.states`:
- `verified-absent` — the capture exercised the state and computed style did not change. **Must** name the bundle and the capture index. **Clears** `interactive_state_missing` for that component.
- `unresolved` — not observed. Does **not** clear it; raises advisory `component_state_unresolved`.

**Check:** fixture with `{path: tokens.components.cta.states, reason: verified-absent, bundle: "socar.json", capture_index: 4}` → `reasonCodes: []`; same fixture with `reason: unresolved` → `['interactive_state_missing']`; a `verified-absent` naming a bundle absent from `data/source-ledger.json` → blocking `omission_unattested`; local `--strict` opens the bundle and confirms that capture index exists with no meaningful delta.
**Why this narrow form and not the broad "omitted for every canonical claim path":** the broad version is a general escape from `claim_evidence_missing`, and that code is *correctly* raised when you add a token path you did not ground. The measured deadlock — inject a true bundle-observed button into baemin and get `partial ['claim_evidence_missing','interactive_state_missing']` — dissolves for the first code as soon as you also write the claims, which you can, because you measured them. What no amount of authoring can fix is a state with no computed-style delta. That is exactly what this class covers, and it covers socar's and wanted's transform-only hovers honestly instead of by fabrication.
**Safety:** `verified-absent` requires a ledger-registered bundle and a capture index. It cannot be hand-asserted on any machine, and on the owner's machine `--strict` opens the bytes.

**W12 — Component ratchet against a committed baseline.** Snapshot `data/component-baseline-2026-09-17.json` (per reference: component names and types, taken today). New `scripts/check-component-ratchet.mjs`: for any reference in the diff, every baseline component name must still be present unless the reference carries a dated `omitted` claim for that component with reason `verified-absent` and a named bundle; `componentCount` may not decrease. Blocking in `quality.yml`.
**Check:** `node scripts/check-component-ratchet.mjs --base origin/main` exits 0 on a clean tree · delete one `type: button` from any reference → exits 1 naming it · restore → exits 0.
**Safety:** this is *the* anti-July mechanism and the only one in this plan that forbids the July move outright. Note what it deliberately does **not** do: it does not require components to be *added*. A gate that rewards adding components is an invitation to add unmeasured ones. Added depth is a **target measured per cohort**, never a gate.

**Also killed here, by name:** `statedComponentCount == interactiveComponentCount` does not appear anywhere in this plan as a completion criterion. It is satisfied by deleting the interactive components you could not measure (worked example: toss has 6 components / 5 interactive / 0 stated and its bundle yields deltas for 2 — delete the 3 stubborn buttons, promote 4 non-interactive entries from the bundle's 49, and you get 7 components, stated 2 == interactive 2, `verified_v2`, three buttons gone) and it passes vacuously for the 36 verified references with zero interactive components. **The completion criterion for a recovered reference is:** `verified_v2` at the new capture date, **and** `componentCount ≥ baseline`, **and** every interactive component carries either an indexed state value or a bundle-attested `verified-absent`.

### Wed 09-23 — the differ, the harness repair, and the projection

**W13 — `web/scripts/confirm-claims.mjs`, read-only.** Given a fresh bundle and the existing `verification_v2.claims`, report per claim: `still-holds` / `moved` / `not-observed`. Seed the authorial-label bucket from `claims[].method` — the catalog's own recorded answer to "can a computed style ever ground this" — rather than from a string-length heuristic.
**Check:** `node web/scripts/confirm-claims.mjs line --bundle artifacts/reference-evidence/line.json` prints three counts and writes nothing · `git status --porcelain` empty afterwards.
**Safety:** read-only by construction, and it is the step that turns ~55 re-groundings per reference into "confirm the matches, judge the residue." A `moved` value is a **conflict**, and `conflicts.length > 0` blocks verified — the differ surfaces it, it does not resolve it.

**W14 — Harness triage on the three known-broken brands.** `docs/CAPTURE_PIPELINE_RETRO.md` names toss (hero is video+canvas → 0 raw samples), baemin (srcset re-identification; background misread as `#0d0905`), karrot (dark-mode browser profile → `#16171b` on a white brand). Fix the capture profile — explicit light `colorScheme`, srcset resolution, a non-`<img>` hero path — before the capture week.
**Check:** `node --experimental-strip-types web/scripts/capture-reference-evidence.ts karrot` yields a background that is not `#16171b`; toss yields ≥5 raw samples; baemin's background is not `#0d0905`.
**Safety:** tooling only. The schedule safety is that this is found on 09-22, not on 09-26 mid-run. Budget: previous harness work took 8 tool-fix commits across 9 brands. If it overruns, it overruns into Lane A's slack, not into skipping it.

**W15 — Bundle filename convention.** New captures write `artifacts/reference-evidence/<id>.json`. July's copy already lives in the W1 archive. Do **not** adopt `<id>.<date>.json`: `extract-state-values.mjs:55` and `match-state-candidates.mjs:46` both load `join(BUNDLES, \`${id}.json\`)`, so a dated filename makes the recapture invisible to the entire toolchain meant to consume it.
**Check:** after a recapture, `node web/scripts/extract-state-values.mjs toss` reads the new bundle · `ls artifacts/reference-evidence-2026-07/toss.json` still present with `capturedAt` 2026-07-11.

**W16 — Write the projection.** Into `CURRENT_STATE.md`: the measured `line` unit cost (W8b), the W4 composition change with the restored references named, the W8 distinct-yield numbers, and the cohort-C dry-run result. State the 10-12 target and the 09-30 checkpoint.

---

## 3. What follows — five lanes, three of them genuinely parallel

### Lane A — Recovery captures · 09-24 → 10-09 · owner, the critical path
Ten references: `29cm apple baemin kakao karrot krds line naver toss yeogiotte` — the 10-09 cohort, which is also demand ranks 1-10 (the expiry order *is* the demand order, because July processed in demand order). Order **within** the cohort by re-observation cost, hardest first, not by demand: `line` is already measured, then the three CAPTURE_PIPELINE_RETRO brands, then the rest. Captures run concurrently (headless playwright, §2/W8b); judgement is serial and is the actual bottleneck.

Per reference, the sequence is fixed:
1. `capture-reference-evidence.ts <id>` → `artifacts/reference-evidence/<id>.json`
2. `confirm-claims.mjs <id>` → still-holds / moved / not-observed
3. resolve every `moved` (a conflict blocks; it is not a footnote)
4. `extract-state-values.mjs <id> --distinct --interactive-base-only` → `match-state-candidates.mjs` → `apply-state-values.mjs` for the defensible ones; `omitted: verified-absent` for the measured non-deltas; delete nothing
5. bump `sources[].captured`, `verification_v2.checked`, `verified`
6. gates: `check-component-ratchet.mjs --base origin/main` · `build-source-ledger.mjs --check` · `build-reference-quality.mjs --check --as-of <capture date + 89d>`

**Stagger the reverify dates deliberately.** All 140 expire across three days because they were captured in one batch; recapturing ten in one fortnight rebuilds the same cliff for late December. Spread `captured` so no more than ~4 share a date. This costs nothing now and is the difference between a one-time fire and a quarterly one.

**09-30 checkpoint:** if fewer than 4 are complete, cut the target to demand ranks 1-5 and say so in `CURRENT_STATE.md` the same day. Do not reduce scope quietly.

**Safety:** W12 (ratchet), W5 (ledger diff), W11 (`verified-absent` needs a bundle), W4 (`method`↔`kind`). Completion criterion as stated in W12 — never the ratio predicate.

### Lane B — Evaluator hardening · parallel, no capture dependency · lands 2026-10-12
Announced now, applied catalog-wide on 2026-10-12, **with no date ratchet and no exemption for this plan's own output**. (A `verified` -after-2026-11-01 ratchet was proposed and is rejected: every reference this plan produces is dated late September or early October, so it would exempt exactly the work it was meant to bind, and it creates a standing incentive to backdate.)

- **Prose `states` stops clearing `interactive_state_missing`.** `OBSERVED_STATE_KEYS` includes the literal `states`, so one sentence per component currently clears the gate — 93 of 140 verified references clear it on a prose string alone. Tightening to `INDEXED_STATE_KEYS` drops verified from 140 to **11** today. On 10-12 the tier is ~10 by construction, so the tightening costs nothing then, and Lane A's ten are authored to the tightened bar from day one.
- **`component_absent` and `component_noninteractive_only` become blocking.** `componentStateGaps()` returns `[]` when there are no components, so the cheapest `verified_v2` in the catalog remains "define no button" — 51 of 140 verified references (36.4%) define none, against 0 of 116 legacy. One line, and it is the only change that removes the July exit for all 440 rather than for ten hand-audited files.
- **Freebie, 15 minutes:** add `pressed`, `error`, `checked` to `TOKEN_FIELD_MAP` at `web/src/lib/extract-tokens.ts:966-971`. 49 `pressed` and 2 `error` values already in the catalog render as unlabelled `extras`; the prose alias table at :936-940 already maps `pressed → active`, so the structured path is today strictly worse than the prose path for the state the capture harness records most often.
- **Reverify queue weighting:** raise the deadline term at `web/src/lib/reverify/queue.ts:71-84`. Today `demandWeight = demandScore * 2` (toss 8756) and each reason code is ≥300 (a four-code legacy snapshot scores 2100) while a TTL inside the horizon contributes ≤180 — which puts `line`, demand #10 with 22 days to live, at rank 127. Note the Monday cron is already inert (`if: inputs.execute == true`, a `schedule` trigger supplies no inputs, `permissions: contents: read`), so this is about the manually-produced worklist, not about stopping a runaway job.

**Check for each:** the before/after verified count is measured and published in `CURRENT_STATE.md` before the change lands, not after.
**Safety:** these tighten; they cannot be used to clear anything. The risk they carry is the opposite one — tightening before recovery would be worse than the expiry — which is why they are dated 10-12 and not now.

### Lane C — Cohort triage, read-only, zero capture cost · parallel, any time
Do **not** write off the 112-strong 10-11 cohort before the free measurement. All 112 already have a July bundle on disk; `confirm-claims.mjs` is read-only by design, so the day it exists it runs against all 112 and reports the real auto-confirm rate on their ~5,137 claims at zero capture cost. Order the output by **re-observation cost, not by silence**: 12 references have exactly one product-surface URL, 39 have ≤2, while 24 carry 61+ product-surface-grounded claims. A cost-ordered list may well clear more than 28 total inside the window; demand data cannot rank them (see below).
**Do not rank by demand.** `data/reference-demand.json` is `capturedThrough: 2026-07-10`, `source: "GA4/Upstash synthesized snapshot"`, **20 rows**. It ranks cohort A correctly only because cohort A *is* its top ten. 420 of 440 references have `demandWeight 0` by construction. Re-pull analytics before any cohort-B/C commitment — the newest number in the repo is 27 days old, GSC ends 2026-07-17, and the whole growth-vs-depth argument re-runs in minutes against a fresh pull.
**Safety:** read-only. The step's output is a cost-ordered list, not a sacrifice list. **Owner decision D3 is taken from this measurement on 09-23, not before it.**

### Lane D — Aphrodite, dated · parallel, blocked on owner decision D4
- **B2 — 15 minutes, the only live hard-rule violation across both repos.** `aphrodite-mela/src/design/contract.ts:44` emits all six semantic tokens for the built-in `toss` system as renderer constants; four contradict the catalog (`surface #d9d4c8` vs verified `#f2f4f6`, `line #dfe3eb` vs `#e5e8eb`, `muted #5e6269` vs `#8b95a1`, `danger #ba3030` vs `#e42939`). Filter to declared tokens — **but keep `muted`**, which is genuinely painted via `MUTED_MIX` opacity and derived from declared fg/bg. The proposed one-line `filter(name => s[name])` over-corrects and trades an invention for the omission of a real derived value.
- **B4 — no longer discretionary.** `aphrodite-mela/src/design/bridge.ts:9` throws `Reference hash mismatch` on any byte change to the SHA-256-pinned `toss` and `karrot`. Both are in Lane A. Drop the pins, key on the reference's own `verified:` date. **Must land before 2026-10-09.**
- **Deferred:** B1 (the omd CLI's `migrateDesignMd()` output already imports into aphrodite's *unmodified* reader at painted 7 / skipped 0 for toss and clears B1's own acceptance bar for 207/440 — publish it as `graph.json` from the CLI if wanted, but do not route it through `export-formats.ts`, which drags a 200-line Core DTCG factory and the export UI with it). B3 (~2h, premise verified: aphrodite's export already reads as `core-v2` and fails only on claim markers). B5 (~1h). The real value gap is `typography_assets.roles[]`, which is absent from all 440 migrated graphs — worth ~3h whenever Track B resumes, and unlisted in the roadmap.

### Lane E — Deliberately not doing · see §5

---

## 4. Rejected, with the measurement that rejected it

These were load-bearing steps in one or more of the three drafts. They are not carried forward, and the reason is recorded so they are not re-proposed.

1. **Relax the `extract-state-values` selector join** — 70 of 86 state-bearing bundles already join on exact equality; the tool reports 67 only because 3 yield an empty delta. The 16 orphans have reps and state bases that are *different DOM elements*. Any output for `line` is a fabricated attribution. W9 replaces it.
2. **Pin the manifest `--as-of`** — publishes an expired observation as current and deletes the one automatic signal that the catalog's central claim went stale. W10 replaces it.
3. **`statedComponentCount == interactiveComponentCount` as completion predicate** — satisfied by deleting unmeasurable components; vacuous for 36 verified references with no interactive component. W12 replaces it.
4. **A capture-receipt / attestation gate as the primary anti-forgery mechanism** — the bundles are gitignored, so in CI it degrades to "a row exists in a file the same author edits in the same commit." W5 keeps the visibility and drops the claim of proof.
5. **Promote `token_value_possibly_derived` to blocking** — fires 0 times on verified references (count is 5, all partial/legacy), and `derivedValueSignals` scans the *prose body*, so blocking it makes deleting the honest sentence the cheapest green, leaving the unqualified hex in the token block and now undetectable. Declared is a confession, not a review request; keep it advisory.
6. **Batch-delete the 53 byte-identical spacing ladders as fabrications** — byte-identity is a spelling test, defeated by changing one digit (measured: ~41 further references carry edited variants). 46 of the 49 ladder references with a verification file mention those px values in their proof text, and `4/8/12/16/24/32/48/64` is the most common real spacing decision in the industry. `shadow: {none:'none'}` on 122 references is a checkable brand fact about flat design. Handle per value inside Lane A; never as one batch approval, which is structurally July.
7. **A tier-count rule in `check-counts.mjs`** — the triple changes by construction on three dates inside the sprint. W7 makes the prose count-agnostic instead.
8. **The `verified`-after-2026-11-01 date ratchet on the state gate** — exempts every reference this plan produces. Lane B applies the tightening uniformly on 10-12.
9. **Extend `component-hex-grounding` to the seven indexed state keys with a "green count must not drop" doneWhen** — the extension fails 16 references today, 12 of them currently 100% green (baemin, dabang, eslite, gangnamunni, google, ibm, kakao, kakaobank, nhncloud, pinkfong, tesla, zapier). Grounding 30+ state hexes in 16 prose bodies is hours of authorial writing; deleting the values satisfies the identical doneWhen in five minutes, and would delete the six ubie hover/focus values corrected on 09-16. If done at all: name the 16, fix them one at a time inside Lane A, and never with a "must not drop" condition.
10. **Seed a `capture_unattested` code from the 177 bundles** — 448 of 884 source entries (50.7%) have no matching bundle surface; only 9 of 140 references have full coverage. It demotes 131/140 on day 3 and settles the 10-12 composition three weeks before anyone decides it.
11. **A provenance gate bound to `.verification.md`'s `Raw bundles:` line** — present in 4 of 440 files, so "exits 0 across the 440" is vacuous for 436; and every successful recapture makes it fail, because the named bundle is July's.
12. **`propose-verification-v2.mjs` as the traceability guard** — it returns `{ok:false, reason:"already-has-verification_v2"}` (line 100) for every reference that has a block, i.e. it is a no-op on all 140 and on everything this plan authors. Add a `--reaudit` mode for Lane A; do not build a gate on it.

---

## 5. What this plan gives up, explicitly

- **~130 badges on 2026-10-12.** The catalog will read roughly 10 verified where it reads 140 today. This is not a failure mode of the plan; it is the plan.
- **The entire 299 `verification_v2_missing` track this quarter.** Zero of them promote from a v2 block alone; 0 of the workable 183 have a bundle; their evidence expires 09-06..09-30, so unaccompanied judgement work on them is throwaway. The five cheapest honest promotions (drdiary, 42dot, mildang, tabling, payhere — one live state observation each, and drdiary's 67-claim block is already written and validates against the shipped evaluator) are real but they are single-digit, they buy 13 days of badge before churning back down, and each one costs a capture session that cohort A needs more.
- **Cohort C badge recovery for ~110 of 112** — pending the free measurement in Lane C, which may change this.
- **Q10b (component form).** 3–4 weeks in full, and the pure data conversion is the cheap half. It would freeze a *third* state vocabulary while the existing two overlap in three of seven terms and `pressed` — 2,226 of the 4,748 captured state elements — has no Core slot at all. Four of Core's seven states (disabled, loading, error, success) have **zero** captured values across all 177 bundles, so a Core-vocabulary state map would ship mostly empty, which invites exactly the substitution the hard rule forbids. Reduced to what is defensible before the deadline it is the `TOKEN_FIELD_MAP` fix (in Lane B) and a written vocabulary decision — nothing else.
- **Issue #97.** Not a retrieval, a new capability: all 528 captured surfaces are `1440x900` (hardcoded at `capture-reference-evidence.ts:456`), there are zero images in 145MB of evidence, and zero scroll or video data. 2–4 weeks, contending for the same browser automation as Lane A. The honest reply is to defer the fixtures alongside the scroll-effect work the issue already defers, and revisit after 2026-10-12.
- **Catalog growth, including the JP wave.** Measured: deepening the 120 thin references (26.9% of all generates) to the ≥5-component cohort's handoff rate is worth ~1,296 extra handoffs; adding 560 new references to reach 1000 is worth ~1,308 at the measured tail rate. **120 fixes equal 560 new references**, and the evidence for the 120 is already on disk. Growth's SEO argument is weak on the numbers (45 impressions and 0.62 clicks per reference page per 28 days; 109 of 164 pages earned zero clicks). The write gate stays shut, and unshutting it costs migrating two real legacy readers — `extract-tokens.ts` (1,704 lines of numbered-section parsing) and `font-registry.ts` (582 lines) — not the four the skill names (`generate-css.ts` does not read DESIGN.md at all; `logos.ts` is 39 lines of frontmatter).
- **Aphrodite B1, B3, B5.**
- **The 146 `component_state_prose_only` advisories**, except where Lane B's 10-12 tightening converts them into real work.

---

## 6. Owner decisions

| # | Decision | Recommendation | Cost of deferring |
|---|---|---|---|
| **D1** | Publish the true status, derived at read time (W10), accepting ~10/314/116 on 2026-10-12. | **Yes.** Ship W10 on 09-21. | It gets decided *for* you: CI goes red at 00:17 UTC on 10-10 with nothing changed, the obvious fix breaks two test files and `npm publish`, and the composition then flips on whoever's next deploy. The alternative that will look attractive under that pressure is freezing the manifest, which publishes expired observations as current. Deferring past 09-21 also leaves the five sitemapped English SEO pages 404-ing at priority 0.78. |
| **D2** | The claim-grounding standard. Is toss's practice acceptable — the whole `spacing` and `rounded` scale grounded on a single TDS button doc page, via `method: computed-style-and-official-doc`? | **Not for new work.** Lane A's ten meet a stricter bar (a claim cites a surface where that value was actually measured); record it in `spec/`. Do **not** apply retroactively — that demotes the 140 a second time for a rule they were never given. | 15 capture days spent against an undefined bar, and the result is unfalsifiable. The 299 track also cannot start, because it is the same question. Deferring past 09-23 is the expensive version. |
| **D3** | Cohort C — fund the 112 or let them expire. | **Decide on 09-23 from Lane C's free measurement, not now.** All three prior drafts pre-committed to the sacrifice before the zero-cost measurement that was supposed to inform it. | Capture days get spent on cohort B by default, and cohort C — the genuinely hollow tier, median 2 components, 16 of 112 at ≥5 — is the one whose recovery would actually repair July. |
| **D4** | Q5 — direct commits to `aphrodite-mela` (separate repo at `/Users/kwakseongjae/Desktop/projects/aphrodite-mela`, outside this repo's CI). | **Yes, scoped to B2 and B4 only.** | Past 2026-10-09, Lane A's own recapture of toss and karrot throws `Reference hash mismatch` in aphrodite's importer, silently from omd's side, in the middle of the sprint. B2 is 15 minutes and is the only live hard-rule violation across both repositories. |
| **D5** | Q6 — the working tree: 127 modified + 64 untracked entries, 8 days old. | **Land or shelve it before 09-18.** | W5 and W12 both gate on `--base origin/main`; with no clean base the ratchet is unenforceable. And W1 puts 145MB of untracked-but-unignored files on disk on day one — one `git add -A` commits the evidence archive, directly against Q7. (`web/references` itself is clean, which is the one piece of luck here.) |
| **D6** | An off-machine copy of the 145MB evidence. | **Yes, today, encrypted, one copy.** | 4,748 unrepeatable state observations exist in exactly one gitignored copy on one disk. They are July's DOM and cannot be re-observed at any price. `local-store.manifest.json` records `{why, recordedAt, note, trees}` — that is custody proof, not survival. |
| **D7** | The sustainable verified population. At a 90-day product-surface TTL, holding N verified references requires N/13 honest recaptures every week, forever. 12/week caps the population at ~156 — barely above today's 140 and incompatible with a 1000-reference catalog. | **Declare `verified_v2` a curated tier of ~40 demand-ranked references (≈3 recaptures/week) and say so on the site.** It is a claim about the references people actually use, not an aspiration for 440. | Every recovery cycle rebuilds the cliff it just climbed down from. Lane A staggers its own dates, which prevents the December repeat, but the population question returns every quarter until it is answered once. |
| **D8** | `sync-catalog.mjs:105-120` invents per-brand facts for every new or refreshed reference: `metaphor_density: 'low'`, `vocabulary_register: 'brand-appropriate'`, `antipatterns: ['off-brand']`, `signature_motion: 'See §15 Motion.'`, `has_personas: true`. 239/440 carry that exact voice triple; 199/440 the antipatterns; 53 share the tone list `['clean','bold','warm','dark']`. The shipped `omd:init` recommender reads this file. | **Omit the field.** It is the product's own rule. | This is the ubie hover values and the bunjang interpolation *industrialised* — a heuristic default presented as a per-brand fact, in a data file the product consumes. Every reference added or refreshed manufactures more of it, including Lane A's ten. |

---

## 7. The three numbers this plan does not have yet

Named so they are not silently assumed:

1. **How many of the 140 survive per-claim expiry (W4).** Known: krds does (0 of 193 claims cite its expiring product-surface source), and 87.6% of all claims are product-surface-grounded with 94 of 140 at 100%, so the answer is small. **Measured Fri 09-18, published the same day with the restored references named.**
2. **The true unit cost of an honest recapture.** **Measured Sun 09-20 on `line`, the hardest member of the cohort**, and again on the first committed reference on 09-24. The 10-reference target stands or falls on it, and the 09-30 checkpoint is where it gets acted on.
3. **Cohort C's auto-confirm rate against its existing July bundles.** **Measured in Lane C**, read-only, zero capture cost, feeding decision D3 on 09-23.

---

*One last framing, for whoever picks this up under pressure on 2026-10-10: the gate cannot tell a re-observation from a text edit, and it never will, because the repository cannot observe the world. Four text edits that restore 134–141 badges are listed by measured yield in §0. They are listed there so that choosing one is a choice, made in daylight, and not an accident of a red build at 00:17 UTC.*
---

## Orchestrator verification note (2026-09-17)

This plan was produced by subagents. Before filing it I re-ran its load-bearing
claims against the shipped evaluator rather than taking them on report. What I
checked, and what I found:

| Claim | Result |
|---|---|
| The expiry cliff is real | **Confirmed.** `asOf` 2026-10-09 → 140 verified · 10-10 → 130 · 10-12 → **0** |
| `SOURCE_TTLS["product-surface"] 90 → 180` revives everything | **Confirmed.** One line, evaluated at 2026-10-12 → **141** verified |
| No test guards that constant | **Confirmed.** No assertion on `SOURCE_TTLS` anywhere in `web/__tests__`, `web/src` or `test/` |
| The five English SEO pages hard-404 | **Confirmed.** `evolution/page.tsx:48` calls `notFound()` unless `quality.status === "verified_v2"`, `sitemap.ts:128` still lists them, and all five — baemin, toss, kakao, naver, karrot — carry `nextReverifyAt: 2026-10-09` |
| aphrodite-mela breaks on the same date | **Confirmed.** `src/design/bridge.ts:3-4` SHA-256-pins karrot and toss; `:10` throws `Reference hash mismatch` when the hash moves. Recapturing those two references is what triggers it |

I did not independently re-verify the 299-backlog measurement (inject a synthetic
`verification_v2` block into all 299 → 0 promotions, 295 then blocked by
`interactive_state_missing`), the per-brand krds claim distribution, or the
harness-repair estimates. Those come from the survey agents and are marked here as
unverified rather than silently inherited.

One correction the plan makes to an earlier document is worth surfacing:
`docs/VERIFICATION_V2_BACKLOG_2026-09-17.md` says 188 references could be completed
without new measurement. The survey puts that number at **0**, because none of the
183-reference workable subset retains an evidence bundle and their own
`.verification.md` evidence expires 2026-09-06..30 — before the badge wall. If that
holds, the backlog document is wrong on its most actionable line and should be
corrected rather than left standing.
