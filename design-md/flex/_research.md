# flex — Research Source Map

**Brand**: flex (플렉스) — Korean HR SaaS
**Site**: https://flex.team/
**Created**: 2026-05-14
**Pipeline**: omd:add-reference CREATE (3-tier verification)

---

## Tier 1 — Live computed-style observation (PRIMARY)

| Surface | Method | Date | Artifact |
|---|---|---|---|
| `https://flex.team/` (marketing landing, 1280×720) | Chrome DevTools Protocol over `:9222` WebSocket, `Runtime.evaluate(getComputedStyle)` across 40 elements | 2026-05-14 | `assets/_reference/.raw-inspect.json` (full dump, 40 samples), `assets/_reference/.live-inspect-proof.json` (9 curated raw_samples), `assets/_reference/tokens.json`, `assets/_reference/structure.json`, `assets/_reference/fonts.json` |

**Confidence:** HIGH (live runtime values, not author intent).
**Coverage:** header, nav, hero (dark), intro manifesto cards, service section, h1/h2/h3, primary/secondary CTA pills, dark cards.

### Corporate facts source

- `https://thevc.kr/Flex` — founder (장해남), founding (2019-05), HQ (Seongnam), Series B, employees, revenue. Confidence: HIGH (TheVC pulls from DART filings).
- `https://flex.team/` hero copy + intro section — voice samples ("근본부터 해결", "한 곳에 모아 연결", "효율을 넘어 더 큰 성장"). Confidence: HIGH (live capture, see structure.json `tone_observed`).

---

## Tier 2 — 3rd-party directories (CROSS-CHECK)

| Source | Result | Date |
|---|---|---|
| `https://getdesign.md/flex` | **No entry** | 2026-05-14 |
| `https://styles.refero.design/?q=flex.team` | **No results** | 2026-05-14 |

**Systemic note:** Same pattern as the 2026-05-13 KR-10 batch — both 3rd-party indexes have weak Korean coverage. Documented in §4 footer.

---

## Tier 3 — Reconcile

No Tier 1 ↔ Tier 2 conflicts because Tier 2 returned empty. All §4 values trace to Tier 1 live inspect; tokens.json `_source` field cites the exact CDP method.

**Conflicts unresolved:** none.

---

## IP / brand-asset guardrails applied

- Logo / wordmark are **not** rehosted in the catalog; references-only via live URL.
- No verbatim taglines transcribed into the catalog's promotional surfaces. The catalog uses fresh voice samples (illustrative, marked).
- All quoted copy in DESIGN.md §10 voice samples is bracketed as **observed on flex.team 2026-05-14** and used for *style anatomy* analysis, not redistribution.
