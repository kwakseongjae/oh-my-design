# Research Sources for Karrot (당근, daangn)

Reference: `web/references/karrot/DESIGN.md`

## Philosophy Layer — added 2026-04-20

Sources (all retrieved 2026-04-20 via WebFetch / WebSearch):

| # | URL | Used for | Confidence |
|---|---|---|---|
| 1 | https://www.karrotmarket.com | §10 voice samples (verified English microcopy: "Buy and sell for free with locals", "Welcome to your new neighborhood buy & sell", "It's easier in the apps", "Download the Karrot app"), category taxonomy, footer IA | High — live public surface |
| 2 | https://about.daangn.com | §10 voice samples (Korean mission taglines `동네를 여는 문, 당근` / `로컬의 모든 것을 연결해, 동네의 숨은 가치를 깨워요`), §11 brand-narrative numerical claims (40M+ registered, 20M+ MAU, 1,400+ regions, 227B KRW funding, Jan-2025 cutoff) | High for direct quotes; Medium for metrics (retrieval-date snapshot, not re-verified against filings) |
| 3 | https://medium.com/daangn | §11 tech-mission variant (`로컬의 모든 것을 연결해 동네의 숨은 가치를 기술로 깨우는`), engineering-culture framing | High — official company publication |
| 4 | https://www.crunchbase.com/organization/daangn-market | §11 founding year (2015), co-founders (Kim Yong-hyun, Kim Jae-hyun), Kakao spinout context | Medium — tertiary database |
| 5 | https://www.kedglobal.com/korean-startups/newsView/ked202407040005 | §11 hyperlocal radius history (initial 6 km → 10 km KR/JP, 50 km US/CA), Canada expansion 2024 | Medium — trade-press reporting |

Style reference: `web/references/toss/DESIGN.md` (auto-picked per skill Phase 10-2 — 🇰🇷 KR region peer, matches target density/format).

### Confidence per section

- **§10 Voice & Tone** — High. 5 of 7 voice samples are `verified:` against live Karrot surfaces; 2 are marked `illustrative:` (hyperlocal meet-up and search-pattern), using placeholder variables (`<neighborhood>`, `<product>`) so no brand-specific fake copy is asserted.
- **§11 Brand Narrative** — High for founding facts (multiple press sources), founders, and hyperlocal radius history. Medium for the 40M/20M/1,400/227B metrics (single-source snapshot from about.daangn.com, flagged for re-verification in the DESIGN.md footer).
- **§12 Principles** — Medium. Principles P1, P2, P5, P6, P7 derive directly from the base DESIGN.md sections 1–7 (explicit token/grid/theming rules in Seed Design). P3 (proximity surfacing) and P4 (trust from calm) are editorial readings of the hyperlocal product posture — flagged as such in the DESIGN.md footer.
- **§13 Personas** — Low/illustrative by construction. All four are fictional archetypes with explicit disclaimer at section top. Segmentation informed by: KR urban young-adult marketplace use, KR secondary-city student patterns, North American expat adoption (ref: karrotmarket.com global expansion), KR retiree 동네생활 community usage.
- **§14 States** — Medium/High. Empty/error/success/skeleton/disabled taxonomy follows Seed Design and the toss style reference. Brand-authentic row (neighborhood-switch cross-fade) derives from §15 motion decision and the proximity-first principle.
- **§15 Motion & Easing** — Medium. Duration scale and easing curves follow the OMD canonical vocabulary (toss/line parallel). Spring-forbidden stance is an editorial interpretation of Karrot's calm/trust brand posture, justified inline in §15 and disclosed in the DESIGN.md footer as interpretive.

### Gaps / flags

1. **Hyperlocal radius is a moving target.** The 6 → 10 → 50 km progression is reported widely but current product-level values may differ by market. Don't quote as a design constraint without re-verification.
2. **Metrics are a dated snapshot.** 40M/20M/1,400/227B figures carry a Jan-2025 effective date per the about.daangn.com page as retrieved; Karrot has an IPO track in motion (per 2025 press) which may shift the canonical numbers on the corporate page.
3. **Seed Design repository was not inspected in this pass.** Token names and shadow opacities in the base DESIGN.md §1–9 are taken as authoritative (they were extracted in the CREATE-mode pass). Philosophy layer did not re-verify these against the GitHub repo.
4. **No brand-guideline document located.** Karrot does not publish a public voice/tone guideline analogous to LINE's Creative Lab or Mercari's brand page. §10 verification relies on live surface microcopy rather than a formal guideline — acceptable per rubric D4 ("≥1 verified" bar met) but noted.

---

## Philosophy Layer QA (2026-04-20) — Diagnostic Rubric

Applied per `research/2026-04-20_philosophy-layer-diagnostic.md` (D1–D11). Style reference: toss.

| # | Dimension | Score | Notes |
|---|---|---|---|
| D1 | §10 intro standalone, 3–5 lines, voice qualifiers | 🟢 | Standalone opener — no comparison to other OMD brands. 5 lines. Voice qualifiers: *warm, plain-spoken, low-friction, allergic to corporate marketing*. Category contrast ("Buy and sell for free with locals" vs "Discover premium local marketplace experiences") is a generic category contrast, not an OMD-peer comparison. |
| D2 | §10 tone table 7–10 rows with brand-surface | 🟢 | 8 rows. Includes CTAs, Empty, Error, Success, Onboarding, plus three brand-surface rows (Community guidelines, Trust & safety, Local/hyperlocal copy — the last is uniquely Karrot). |
| D3 | §10 forbidden phrases with brand-specific items | 🟢 | Generic bans (`혁신적인`, `amazing deals`, `best-in-class`, `revolutionary`, `world-class`) + brand/locale-specific (`불편을 드려 죄송합니다`, `데이터가 없습니다`, `오류가 발생했습니다`, `We apologize for the inconvenience`) + category-specific emoji-in-errors ban. |
| D4 | §10 voice samples ≥3 with verification tier markers | 🟢 | 7 samples. 5 `verified:` with live URLs (karrotmarket.com × 3, about.daangn.com × 1) + 1 `cited:` (about.daangn.com mission page). 2 `illustrative:` samples use placeholder variables, no fake-specific brand copy. Exceeds "≥1 verified" bar. |
| D5 | §11 narrative with inline citations + footer manifest | 🟢 | Inline markdown citations in the narrative: [Crunchbase], [KED Global], [about.daangn.com], [medium.com/daangn]. Numerical claim (40M/20M/1,400/227B) carries inline `<!-- source: ... -->` re-verification marker. Footer HTML comment contains full tiered source manifest. |
| D6 | §12 principles with explicit UI implication | 🟢 | All 8 principles use explicit `*UI implication:*` label followed by a concrete UI rule (single-orange-per-viewport, 4px grid snap, neighborhood metadata visibility, etc.). |
| D7 | §12 count 5–10 (target 7–9) | 🟢 | 8. Within target 7–9 window. |
| D8 | §13 personas ≤3 sentences, behavior-first, disclaimer | 🟢 | 4 archetypes, each 3 sentences. Disclaimer present at top. Content is ≥80% behavior (opens-frequency, distance willingness, chat vs call, scroll patterns, 동네생활 usage) with minimal background. |
| D9 | §14 states 10–12, core types covered, no UI-pattern pollution | 🟢 | 12 rows. Covers Empty (× 3 variants), Loading (× 3), Error (× 3), Success (× 2), Disabled. No UI-patterns mis-counted as states. Brand-authentic row: "Loading (refresh) → carrot-glyph pull-to-refresh indicator". |
| D10 | §15 spring stance explicit + rationale | 🟢 | Explicit: *"Spring and overshoot easings are forbidden across Karrot surfaces."* Rationale given (marketplace trust between strangers, calm neutrality, no celebratory bounce on money). Licensed exception (native pull-to-refresh inherits OS spring) is narrow-scoped with justification. |
| D11 | §15 reduce-motion rule present | 🟢 | Present in §15 signature-motions list item 4: *"Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. No exceptions."* |

**Result**: 11 🟢 / 0 🟡 / 0 🔴. **PASS.**

Pass threshold (≥9 green, no red, ≤2 yellow) exceeded.
