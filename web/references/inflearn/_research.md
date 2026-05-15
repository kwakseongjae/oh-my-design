# Inflearn — Reference Research Log

**Mode**: CREATE
**Verification date**: 2026-05-14
**Capture method**: CDP Runtime.evaluate via `localhost:9222` (browser-harness skill)

---

## Tier 1 — Live inspect + brand-owned sources

| # | Source | Type | Status | Used in §§ |
|---|--------|------|--------|------------|
| 1 | `https://www.inflearn.com/` | Live DOM inspect (CDP, 12 raw_samples, 162 `--mantine-color-*` vars + `--mantine-radius-*` + `--mantine-spacing-*` + `--mantine-font-family`) | ✅ 200 | §1, §2, §3, §4, §5, §7, §9 |
| 2 | `https://www.inflearn.com/courses` | Live DOM inspect (CDP, 8 raw_samples, pagination active-state `#00C471` confirmed, 38 mantine-Card-root tiles observed) | ✅ 200 | §4 (pagination), §5, §6 |
| 3 | `https://tech.inflab.com/` | Inflearn engineering blog index | ✅ 200 | §11 |
| 4 | `https://tech.inflab.com/20260305-new-header/` | Blog post: "MFE 환경에서 공통 헤더(GNB) 개편하기" — confirms GNB rebuild as shared MFE component | ✅ 200 | §11, §4 (GNB) |

**Capture artefacts** (live-inspect proof, ≥5 raw_samples required, **20 captured**):
- `assets/_reference/.live-inspect-proof.json` — home + courses raw_samples + palette histograms + mantine-evidence
- `assets/_reference/.live-inspect-proof-courses.json` — full /courses second-surface capture
- `assets/_reference/tokens.json` — distilled brand tokens
- `assets/_reference/structure.json` — IA + layout signals
- `assets/_reference/fonts.json` — typography sample

---

## Tier 2 — Third-party directories

| # | Source | Status | Notes |
|---|--------|--------|-------|
| 5 | `https://getdesign.md/inflearn` | ❌ Empty | Verified 2026-05-14 — page returns explicit "No designs found for 'inflearn'". |
| 6 | `https://styles.refero.design/?q=inflearn` | ❌ Empty | Verified 2026-05-14 — no result cards returned for the query. |

**Tier 2 conclusion**: Same pattern as the 2026-05-13 KR-10 batch — Tier 2 directories have weak Korean coverage. No conflict to resolve because Tier 2 produced no values. Tier 1 carries the entire system.

---

## Tier 3 — Reconcile

No conflicts. All §4 token values come from Tier 1 live inspect, with two explicit notes:

1. **`#00A760` hover / pressed green** is inferred from the palette histogram (it appears 450× and 248× on home and /courses respectively, alongside the captured primary `#00C471`). Designers wanting authoritative hover/active values should inspect a button on the courses-detail page (TODO: follow-up UPDATE pass).
2. **Disabled / focus / error focus tokens** are Mantine-default-inherited; called out as `(Inferred)` in §4 where directly captured values were not available.

---

## Tier 1 vs. Tier 2 matrix

| Field | Tier 1 (live) | getdesign | refero | Resolution |
|---|---|---|---|---|
| Primary green | `#00C471` (rgb(0,196,113), search submit + pagination active) | — | — | Tier 1 |
| Font family | Pretendard stack | — | — | Tier 1 |
| Radius scale | `xs=2px`, `sm=4px`, `md=8px`, `lg=16px`, `xl=32px` (from `--mantine-radius-*`) | — | — | Tier 1 |
| Heading colour | `#212529` | — | — | Tier 1 |
| Framework | Mantine UI (162 `--mantine-color-*` vars) | — | — | Tier 1 |
| GNB height | 65px sticky white | — | — | Tier 1 |
| Instructor term | `지식공유자` (knowledge-sharer) — from product copy + tech.inflab.com | — | — | Tier 1 |

No (unresolved) flags.

---

## Public design system surface

**No public DS docs site found** (verified 2026-05-14):
- `design.inflearn.com` — not resolving
- `inflearn-design.github.io` — not present
- Inflab GitHub org — no public DS / component-library repo discovered via `gh search`
- `tech.inflab.com` — engineering blog, contains MFE / GNB / infra posts but no canonical token table

→ Inflearn DS lives **in code on production**, accessible only via runtime inspect of Mantine theme variables. This is the same pattern as `29cm` / `ably` / `zigbang` in the 2026-05-13 KR-10 batch.

---

## Confidence

**High** for the captured surfaces (home + courses).
**Medium** for inferred states (hover/pressed/focus/disabled/error-focus) — `(Inferred)` annotations in §4 are honest about this.
**Follow-up UPDATE pass** recommended on a course detail + payment surface to capture the labelled-primary CTA, form focus, and disabled states authoritatively.

## IP guardrails applied

- No verbatim taglines: Inflearn's *"라이프타임 커리어 플랫폼"* is quoted once in §11 as factual brand-narrative context, not adopted as design copy.
- Brand assets are referenced for visual study only; no logo file copied into `assets/_reference/`.
- Voice samples in §10 are illustrative reconstructions in the casual-polite Korean register; not lifted verbatim from Inflearn surfaces.
