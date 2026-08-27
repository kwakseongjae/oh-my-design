# DJI separate-session audit (rulebook v9 §F3)

Scope: **B2 / B2a** and **E1 / E2 / E2a–c** only. Fresh session, not the migrating worker.
Files audited: `DESIGN.md`, `provenance.md`, `migration-log.md` in this directory.
Canonical source `web/references/dji/DESIGN.md` was read only, never written (`git status` clean).
Not touched, per the audit mandate: token values, component field tables, state applicability, document structure.

Date: 2026-08-26

## Fixes

### A. B2a — editorial interpretation without an adjacent complete limiter (portable body)

1. **Scope, opening sentence.** "DJI (大疆创新) is recorded in the source as the company that turned the consumer drone into a category." carried only a *where-it-came-from* attribution. Turning a market-history judgement into the document's first sentence is an editorial reading, and "recorded in the source as" does not finish the evidence class (B2a: the class must be distinguished to the end). Attached the fixed limiter — `derived editorial implementation inference from the source reconstruction … not DJI-authored or a separately published UI specification` — anchored to the widely-documented-public-history bound the same section already restates for the founding facts.

2. **Foundations · Shape, correspondence note.** "pairing a key with the components that share its figure is a correspondence drawn here, not a binding the source states." is an inference drawn *by the migration itself*, and it carried only half the class ("not a binding the source states" excludes the source, not DJI authorship). Attached the complete limiter. This one also failed E2c: `migration-log.md` F1 already listed this sentence among those "given an adjacent complete limiter".

### B. B2 / E1 — the approximation bound was not adjacent to every value it governs

The brand-critical fact for dji is that **ten of the twelve hexes are values the source itself calls best-fit approximations** (Titan and the sky-blue accent are named in the 500-page guide with their hex withheld). Both the Scope authority paragraph and the Foundations head asserted that every non-`#000000`/`#ffffff` hex "is flagged `approximate` inline". That was not true of the file.

3. **Three Foundations neutrals carried `≈` but no `approximate` flag** — `#f5f5f7` (Light Gray Surface), `#d2d2d7` (Border / Hairline), `#161617` (Dark Panel). The source writes them the same way, but the source's own sourcing caveat classes them as approximations and the migrated body twice claimed the flag was present. Added the inline flag to all three. Values unchanged.

4. **Approximate hexes still read as confirmed values outside Foundations** — `Spec Module` background (`#f5f5f7` / `#161617`, written bare, no `≈`), `Product Tile` (`≈#161617`), the §14 capture-record and Input `error` rows (`≈#ff3b30`), and the Type-roles §9 column (`#86868b`, bare). The component field lines and tables are off-limits to this audit, so the bound was made **adjacent** instead of per-occurrence: one carry sentence in the Scope authority paragraph, one clause in the Components & States lead-in, one clause in the Type roles lead-in. No value, table cell, or applicability row was edited.

### C. E2 / E2a / E2c — ledger accuracy against the actual files

5. `migration-log.md` §2 row claimed "All 12 hex values … kept with roles and with **each approximation flag attached inline**" — false for three values before fix 3, and never true for the component/type-scale repeats. Rewritten to state where the flags sit and where the bound is carried by a lead-in instead (E2c).

6. `migration-log.md` §9 row sent two figures to one destination: "spec label `14px` weight 500 silver `#86868b` **and** spec value `14px` weight 400 Titan → **Spec value row**". Grep shows the spec-label figure is in the **Spec label** row and the spec-value figure in the **Spec value** row. Log corrected (E2 — destination must match the file).

7. `migration-log.md` F2 row on `cubic-bezier` described all five mentions as one shape; the Motion lead-in reads "uncomputed; cubic-bezier curves omitted", which is not the table-cell wording. Row rewritten to name the five sites exactly (E2c). The substantive claim — no curve value anywhere in the portable body — re-verified and holds.

8. `migration-log.md` F1 list updated for the two sentences that gained a limiter in this audit, with the earlier partial state recorded rather than silently overwritten.

9. `provenance.md` token-note paragraph claimed the bound was "attached inline to each approximate hex". Corrected to match the file after fixes 3–4 (E2c).

10. `provenance.md` recorded the destinations of `prose-derived` twice (claim ledger, proof notes) as "portable Scope + Typography Font evidence + this ledger", **omitting Governance Named gaps**, where the string also appears (DESIGN.md:541 — was `:540` when this audit ran; the A5 pass recorded in `migration-log.md` later inserted a line above it, and only this pointer was re-measured). `migration-log.md` had the destination set right; provenance understated it. Both provenance lines corrected (E2a).

11. `provenance.md` listed the portable body's B2a sites, and the list was **narrower than the body** — missing the Semantic-color 1px-hairline reading, the Shape sharp-to-modest / precision-instrument reading, the Shape correspondence note, the Elevation full-black-lightbox reading, the Motion signature-motion characterizations, the Typography Font-evidence application readings, the Conventions headline-is-a-phrase / numbers-persuade judgements, the Text / Link accent reading, and the Spec Table Row "heart of every product page" reading. Rewritten in document order to match the body exactly; no site was listed that the body does not carry (nothing was over-listed).

## Verified, no fix needed

- **A5 / CJK byte fidelity.** All 27 brand-published strings the log names grep-match `DESIGN.md` in their original script — `未来无所不能`, `思源黑体`, `立即购买`, `了解更多`, `预订`, `继续购物`, `售罄`, `革命性`, `颠覆`, `极致`, `世界第一`, `立即购买！`, `大疆创新`, `汪滔` included. English glosses sit **beside** the original in every case (`革命性` (revolutionary), `未来无所不能` (*the future of possible*), `售罄` / "Sold out"), never replacing it.
- **Token survival.** The source's 40 distinct values (12 hex, 24 `px`, 4 `ms`) all grep-match the portable body; the body introduces none the source lacks.
- **E2a destination spot-checks.** `https://www.dji.com`, `#000000` (Scope / Distinctive / Foundations / Primary CTA / Secondary CTA / Global Header — the log's list is complete), `google.com/s2/favicons` (provenance-only, 0 hits in the body), `Brandfetch` (0), lowercase `apple` style-ref (0; the body's only "Apple" is the source's own `PingFang SC on Apple platforms`), `Kind: omitted` ×5, `Type:` = button×3 / input×1 / card×2 / badge×1.
- **E2c B3 claim.** The log claims Foundations Motion states the five-kind gate in full; the body carries `transition properties, animation name, duration, easing, and reduced-motion behavior`, `per component`, and `Official documentation of a single curve or a single duration is not that gate` verbatim. Claim is not stronger than the body.
- **E2b.** The three unattributed `cubic-bezier` strings live only in the provenance omission ledger, and that storage is recorded as the disposition in the log.

## E3 — gate behaviour, reported not worked around

- No notation was distorted to satisfy a checker in this audit, and none was found in the artefacts.
- The worker's two recorded `explicitlyNegatesClaim` rewrites were re-read against the source for meaning loss. **Neither lost meaning.** (1) Scope now reads "It records that there are no gradients-for-decoration, no rounded playful shapes, and no mascot. It reads the product as the only ornament." — the source's own two-sentence split, with an invented `so that` connective removed. (2) The Motion qualifier now carries the canonical B2a exemplar instead of "…not a documented DJI motion rule", which is a strictly stronger evidence-class statement, not a weaker one.
- The false-positive window itself is now closed upstream: `scripts/design-md-core-conformance.cjs:305` exempts any sentence carrying evidence-boundary vocabulary, so the two shapes the worker hit no longer fire. No further false positive was encountered while making the fixes above.

## Out of remit — reported for the A5 lane, not fixed here

- Source §10 prose quotes three aspirational headline examples: `See It All`, `Just Fly`, and **`Possibility in motion`**. The portable Content & Locales paragraph paraphrases that sentence and keeps only the first two (elsewhere, as voice samples). `Possibility in motion` survives in neither `DESIGN.md` nor `provenance.md`, and no `migration-log.md` row records its deletion. Restoring a brand-published string is a value edit, which this audit is forbidden to make — flagging it for the A5 pass.

**해소됨 (2026-08-26, A5 패스).** 위 지적은 감사 시점의 사실이었고 이후 A5 복원
워커가 `Possibility in motion`을 portable `DESIGN.md` Content & Locales 음성 샘플
목록에 바이트 그대로(대문자 `P` + 소문자 `in motion`) 복원했다. provenance A5 바이트
목록과 migration-log §10 행에도 기재됐다. 이 절은 감사 기록이므로 원문을 고쳐 쓰지
않고 해소 사실만 덧붙인다 — 감사가 무엇을 보았는지와 이후 무엇이 처리됐는지는 다른
사실이고, 원장은 둘 다 보여야 한다.

## Machine checks after the fixes

- `node test-v2/tools/migrate-reference.mjs --brand dji --gate-only` → `PASS`, `problems: []`.
- `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/dji/DESIGN.md --check --require-portable-core --json` → `status: pass`, `dropped: []`, `projection_roundtrip_equal: true`, `source_reconstruction_equal: true`.
- `web/references/dji/DESIGN.md` unmodified.

AUDIT_DONE dji fixes=11
