# Jumpit (점핏) — Research log

**Captured**: 2026-05-15
**Brand**: 점핏 (Jumpit) — Korean developer-focused recruitment platform
**Parent**: Saramin HR (사람인HR, KOSDAQ: 143240)
**Launched**: 2019 (initial open beta), 2020-12 public launch
**Live domain**: `jumpit.saramin.co.kr` (apex `jumpit.co.kr` 301-redirects)
**Stack**: Next.js (App Router) + styled-components, CloudFront (ICN57 Seoul edge)

---

## Tier 1 — Official design system (live + canonical)

### Live token capture — CDP `:9222`
- **Method**: Chrome DevTools Protocol over WebSocket, `Runtime.evaluate` with `getComputedStyle` selectors `button, a, input, h1, h2, h3, [class*=Button|Card|Chip|Tag|Badge], nav, header, footer`. WebSocket handshake required `suppress_origin=True`.
- **Surface 1**: `https://jumpit.saramin.co.kr/` — 52 element samples
- **Surface 2**: `https://jumpit.saramin.co.kr/positions?sort=popular` — 60 element samples
- **Total**: 112 raw element samples + `:root` CSS var scan (returned 0 vars — styled-components runtime emits hashed classes, not custom properties)
- **Proof**: `assets/_reference/.live-inspect-proof.json` (10 curated raw_samples, ≥5 floor satisfied)

### Canonical DS / brand portal — **NEGATIVE (documented)**
Probed with `curl -sIL` (HTTPS) and `gh api`:
- `design.jumpit.co.kr` — no DNS
- `design.jumpit.saramin.co.kr` — no DNS
- `brand.jumpit.co.kr` — no DNS
- `jumpit.saramin.co.kr/brand` / `/design` / `/about` — no canonical DS pages
- `github.com/saramin` org → public; `saramin.github.io` resolves as tech blog ("사람인 tech blog"); GitHub search `org:saramin design` → **0 results**; existing public repos are `a11y` (web-accessibility training), `appstore-status-bot`, `zf1` (Zend legacy) — none are a component library
- `npmjs.com` — no `@jumpit/*` or `@saramin/*` design-system packages surface in package search
- Figma Community — no published "Jumpit" or "Saramin" UI kit

**Conclusion**: Saramin/Jumpit has chosen not to externalise a public design system. The closest authoritative artefact is the rendered production CSS itself (captured above). This is consistent with the systemic Korean-coverage finding logged in `2026-05-13-kr10.md` / `2026-05-14-kr10.md`.

### Corporate / brand context (factual)
- Parent operator: **Saramin HR** (사람인HR), KOSDAQ-listed (ticker 143240), founded 2005, HQ Guro-gu Seoul
- Jumpit positions itself as a "developer-only" channel separating engineering recruitment from Saramin's generalist marketplace
- Primary competitive position: vs. Wanted (원티드) and Programmers (프로그래머스 채용) — the Korean developer-recruitment triad
- Tagline pattern observed in public copy: "개발자 커리어를 위한 점핏" (descriptive — not reproduced as design copy)

---

## Tier 2 — Third-party catalog cross-check

### getdesign.md
- URL: `https://getdesign.md/jumpit`
- Result (verified 2026-05-15): explicit text **"No designs found for 'jumpit'."**
- Status: ✗ empty — no token table, no component list

### styles.refero.design
- URL: `https://styles.refero.design/?q=jumpit`
- Result (verified 2026-05-15): no result cards returned. Also tried `?q=점핏` — same negative result.
- Status: ✗ empty

**Tier 2 systemic note**: both catalogues consistently empty for Korean recruitment platforms (Wanted is in refero only because of its global Tier-1 Wanted Sans typeface release — Jumpit has no equivalent public artefact). Tier 1 live capture is the authoritative source for this entry.

---

## Reconcile (Tier 1 ↔ Tier 2)

| Field                       | Tier 1 (live)            | Tier 2 (catalogs) | Resolution                                          |
| --------------------------- | ------------------------ | ----------------- | --------------------------------------------------- |
| Brand colour                | `#00DD6D` (1 chrome use) | — (no data)       | Tier 1 authoritative — `#00DD6D` documented as the single brand accent |
| Primary CTA fill            | `#000000` 8px pill       | —                 | Tier 1 — Jumpit deliberately withholds brand green from the primary CTA |
| Body / UI font              | Pretendard Variable      | —                 | Tier 1 — observed on 100% of 112 sampled elements   |
| Display font                | none (Pretendard reused) | —                 | Tier 1 — no proprietary brand face                   |
| Radius scale                | 0 / 8 / 20 / 100         | —                 | Tier 1 — three pill radii encode interactive role    |
| `:root` design-token vars   | 0                        | —                 | Confirmed no public token contract                   |
| Card elevation              | none (`box-shadow: none`) | —                | Tier 1 — depth is surface tint, not shadow           |

**No unresolved conflicts.** Tier 2 silence is documented, not a contradiction.

---

## Confidence per section (used in DESIGN.md authoring)

| Section            | Confidence | Basis                                                                                         |
| ------------------ | ---------- | --------------------------------------------------------------------------------------------- |
| §1 Visual Theme    | High       | 112 live samples, two surfaces, frequency-analysed                                            |
| §2 Colour          | High       | Brand green & full ink ladder directly observed                                               |
| §3 Typography      | High       | Pretendard Variable on 100% of samples; weight policy clean                                   |
| §4 Components      | Medium-high | Primary CTA, role chip, outlined dropdown captured exactly; card internals inferred           |
| §5 Layout          | Medium     | Section anatomy clear; exact spacing scale not measured                                       |
| §6 Iconography     | Low        | Not specifically inspected this pass — flagged                                                |
| §7 Imagery         | Medium     | Hero carousel cards observed (32/700 white over photos)                                       |
| §8 A11y            | Medium     | No `<h1>` on home noted; full WAI walk-through pending                                        |
| §9 Voice fragments | Medium     | Korean developer-vernacular tone clearly observable, but not adopted verbatim (IP guardrail)  |
| §10-15 Philosophy  | Medium     | Toss style-ref applied per skill rule P-1 (KR brand); narrative based on reported facts only  |

---

## IP guardrail log

- **Brand assets**: logo, name (점핏 / Jumpit), brand green `#00DD6D`, and the parent-org name (Saramin) used reference-only.
- **No verbatim taglines** lifted. Observed copy fragments like "요즘 폼 미친 기업s", "#꿀 피드", "테마별 모음.zip" are recorded as **voice shape** (developer-vernacular Korean + English-inflected slang) in §10, not reproduced as design copy. All §10 voice samples are fresh OmD reconstructions in the same register.
- **Token values** reproduced as factual CSS computed-style values under analytical fair-use — same convention as the rest of the catalog (Toss / Wanted / Channel Talk).
- **Personas** marked as inferred where not sourced from public Saramin IR / Jumpit blog posts.

---

## Follow-ups (UPDATE pass recommended)

1. Capture a JobCard at the result-strip and detail-page level for inner-spacing + funding-stage chip family.
2. Inspect a saved-jobs / application-form flow for error/success/disabled colour ladder.
3. Mobile viewport (390×844) capture — pill chip overflow + bottom-tab if present.
4. Iconography family (line-icon style? Saramin-shared? Custom Jumpit set?) not inspected.
5. Motion / transition tokens — none captured (single static page-load pass).

---

**Tier 1 sources:**
- Live CDP capture `:9222` on `jumpit.saramin.co.kr/` and `/positions?sort=popular` — 2026-05-15
- `assets/_reference/.live-inspect-proof.json` (10 raw_samples retained)
- Saramin HR public corporate filings (KOSDAQ 143240) for parent-org context
- `saramin.github.io` (tech blog) — Tier-1 negative-confirmation source

**Tier 2 sources:**
- `https://getdesign.md/jumpit` → "No designs found for 'jumpit'." (verified 2026-05-15)
- `https://styles.refero.design/?q=jumpit` → no result cards (verified 2026-05-15)

**Conflicts unresolved:** none
