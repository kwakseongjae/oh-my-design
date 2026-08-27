# ElevenLabs audit log (F3 — separate-session audit)

Auditor: fresh session, not the migration worker.
Scope audited: B2 · B2a and E1 · E2 · E2a–c only (rulebook **v9**).
Out of scope and untouched: token values, component tables, state applicability, section structure.
Date: 2026-08-26

## Fixes

### B2a — qualification added (2)

1. **DESIGN.md:47** — under `### Official brand guidance`, the sentence
   "It is not a font package, a font-license source, or a source for unlisted UI
   CSS values" is a derivation boundary authored by this reconstruction, not
   something the brand page publishes about itself, and it sat under a heading
   that frames its bullets as brand-published rules. Rewritten so the boundary
   carries a complete adjacent qualification ("… is a derived editorial
   implementation inference from the verified surfaces and that official brand
   material; it is not ElevenLabs-authored or a separately published UI
   specification"). The three boundary items are preserved.
2. **DESIGN.md:86** — "Each pairing is a distinct role, and one is not a
   substitute for the other" has no counterpart in the source; it is a
   role-separation judgment written during migration. The qualification at
   DESIGN.md:75 covers the role names and bounded-use readings in the table
   above it, not this proposition. Rewritten with its own complete adjacent
   qualification. Both hex values and both role pairings are unchanged.

### E1 — process leak removed (1)

3. **DESIGN.md:158** — "exact asset and metadata URLs remain in provenance"
   named the sidecar inside the portable body (`process-leak-check.mjs`:
   `in provenance`). Replaced with "the exact asset and metadata URLs are not
   carried in this contract", which keeps the boundary a standalone reader
   needs without naming the pipeline. `node test-v2/tools/process-leak-check.mjs`
   now reports zero hits for elevenlabs.

### E2 · E2a · E2c — log corrected against the actual files (5)

4. **provenance.md → Derived editorial range** — the ledger listed 18 line
   numbers and the body now carries 20. Added the brand-page evidence-domain
   reading (`:47`) and the color role-pairing separation (`:86`) in line order.
   Every listed line was re-grepped; the range is now neither narrow nor wide.
5. **migration-log → §4 Public actions row** — E2a. The white action's shadow
   string is carried in two portable places (component DESIGN.md:199 and
   Foundations elevation DESIGN.md:108); the row recorded only the component
   range. Disposition and reason now name both.
6. **migration-log → §4 Editorial card row** — E2a. Same defect for the card's
   shadow string (component DESIGN.md:238, Foundations elevation
   DESIGN.md:109). Both destinations now recorded.
7. **migration-log → §6 row** — E2/E2c. The row claimed §6 delivered "both
   shadow strings byte-for-byte". Legacy §6 carries only the two prose readings;
   the full strings come from the §4 component records. Reason rewritten to
   match the actual disposition and to point at the components that also keep
   them.
8. **migration-log → §7 Don't row** — E2a. The fourth Don't item is carried
   twice — Avoid (DESIGN.md:67) and Official brand guidance (DESIGN.md:46, in
   the imperative `Do not alter…` form). Both destinations now recorded.

### Log/body consistency (2)

9. **migration-log → F1** — "Eighteen" qualified passages no longer matched the
   body. Updated to twenty, with the two audit-added lines named.
10. **migration-log → F2** — "Double destinations are recorded on both sides"
    was stronger than the file was (E2c). The four dual destinations the
    migration pass missed are now named as audit additions.

## Reviewed, not changed (E3 — reported rather than distorted)

- **DESIGN.md:11 / :39 / :159 / :289** — "brand rules govern brand use, not a UI
  component library", "art direction belongs to platform-brand materials rather
  than to this parent marketing token set". These read as observations about
  what the cited source contains and as statements about this contract's own
  contents, not as inferences about ElevenLabs doctrine; :39 additionally sits
  under the grouping qualification at :36. Qualifying them would be
  over-application, so they were left as written.
- **DESIGN.md:18** — "The current public account is broader than the original
  voice model" is a comparative summary of attributed About-page content, and
  the causal claim that follows it is already qualified in the same paragraph.
- **DESIGN.md:90** — "It supplies no selector-backed CSS value …, so no platform
  hue is promoted" is a non-promotion (an omission), not an asserted inference
  about the brand.
- **§3 evidence-class boundaries restated in the Assets block (:158–160)** — a
  prose restatement inside the portable body, not a value landing in two
  destinations; no E2a row change made.

## Worker self-report — verified

- The three self-corrections hold. `source token record`, `preserved as
  recorded`, and `retained` are absent from all three files, and the domains the
  source never establishes (`editor`, `voice-library`, `empty-state`, `button
  label`) appear nowhere. D1a re-checked entry by entry against the source: every
  Named gaps domain is established as existing and unresolved by §§1–8, §14, §15.
- The B2a ledger was accurate at 18/18 before this audit (each line carried both
  halves of the complete form); it was narrow only against the two passages this
  audit found. Now 20/20.
- **A5 (not this audit's remit, reported as seen):** no loss found. `ElevenLabs`,
  `ElevenAgents`, `ElevenCreative`, `ElevenAPI` (6 each in body, as in source),
  `Piotr Dąbkowski`, `Mati Staniszewski`, the curly `“11”` and `Don’t` forms,
  `Inter`, `Waldenburg`, `Geist Mono`, `WaldenburgFH`, `Waldenburg-ML`,
  `aria-haspopup="listbox"`, `role="tab"`, `aria-selected` all survive byte for
  byte, and the frontmatter `use:` strings are verbatim in provenance.

## Out-of-scope observation (report only)

- `process-leak-check.mjs` currently reports 93 of 110 migrated bodies leaking
  (198 hits), dominated by `catalog graph`, `legacy spec template`, and
  `in provenance`. elevenlabs was one hit and is now clean; the rest is a
  catalog-wide E1 sweep for whoever owns that pass.

AUDIT_DONE elevenlabs fixes=10

### 인증문 정정 (2026-08-26, 의미 검토 반영)

위 "Worker self-report — verified" 절의 어휘 부재 인증 두 건이 실측과 어긋난다. 감사가
편집한 파일 안에 있는데도 grep 없이 워커 자기보고를 승인했다 — 기록을 고쳐 쓰지 않고
실측을 덧붙인다.

- `retained` **부재 아님**: `provenance.md:156` "Tier 1 light/neutral values retained",
  `:159` "Retain Inter/Waldenburg live public roles". portable `DESIGN.md`에는 0회이므로
  워커의 자체 교정(본문에서 제거) 자체는 성립하고, 인증문이 범위를 세 파일로 넓힌 것이 오류다.
- `editor` / `voice-library` **부재 아님**: `provenance.md:86`에 있다. 다만 이는 sibling
  `web/references/elevenlabs/.verification.md:43`에서 온 **증거 도메인 경계** 기술이지
  미해상 gap 열거가 아니다 — portable 본문에는 0회다. 그렇게 적으면 참이 되고 D1a 근거도
  함께 선다. (`editor`가 `DESIGN.md`에 23회 나오는 것은 대부분 `editorial` 등의 부분 일치다.)

교훈: F3의 실패 양상이 하나 늘었다. v7 이전은 "같은 저자가 자기 문장을 못 본다"였는데,
여기서는 **신선한 세션이 grep 없이 워커 자기보고를 그대로 승인했다.** 감사자는 자기가
편집한 파일에 대해서도 실측해야 한다.
