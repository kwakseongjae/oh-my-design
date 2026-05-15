# Upbit — _research.md

**Date**: 2026-05-14
**Pipeline**: omd:add-reference CREATE
**id**: upbit · country=KR · category=finance/crypto-exchange · operator=Dunamu

## Tier 1 — Official DS lookup (mandatory attempt)

| Endpoint | Status | Result |
|---|---|---|
| `https://design.upbit.com` | DNS 000 | no-resolve — no public DS subdomain |
| `https://upbit.com/brand` | 301 → marketing root | no DS page |
| `https://upbit.com/about` | 301 → marketing root | no DS page |
| `https://design.dunamu.com` | DNS 000 | no-resolve |
| `https://dunamu.com` | 200 | corporate site; vision/IR/ESG/services, no public DS surface |
| `blog.naver.com/dunamupr` | linked from dunamu.com | PR blog, not a design surface |
| WebSearch `"upbit" design system` | — | no canonical hit |
| GitHub `dunamu / upbit design tokens` | — | no public repo |

**Conclusion**: Dunamu/Upbit do not publish an external design system as of 2026-05-14. Documented negative result.

## Tier 1 — Live CDP inspect (substitute for missing DS)

- WS endpoint: `ws://localhost:9222` (Chrome 148)
- Surface 1: `https://upbit.com/home` — 41 samples
- Surface 2: `https://upbit.com/exchange?code=CRIX.UPBIT.KRW-BTC` — 80 samples
- Total raw samples: 121
- Method: `Runtime.evaluate` → `getComputedStyle` over 20 element selectors (button, a, input, role=button, role=tab, header/nav children, market/coin classes, table rows/cells/headers, h1–h3, price classes, Emotion `css-*` classes)
- Artifacts: `assets/_reference/raw-capture.json`, `raw-capture-exchange.json`, `tokens.json`, `structure.json`, `fonts.json`, `.live-inspect-proof.json` (12 raw samples + 2 surface URLs + tab ids)

Confidence: **high** for color / radius / typography / control sizing (direct computed values). **Medium** for state/motion (inferred from production behavior, not from a token export).

## Tier 2 — Cross-check (both attempted)

| Source | Status | Result |
|---|---|---|
| `https://getdesign.md/upbit` | 200 | page text: "No designs found for 'upbit'" — negative |
| `https://styles.refero.design/?q=upbit` | 200 | search interface, no result cards — negative |

**Systemic note**: consistent with 2026-05-13 KR-10 batch finding — both 3rd-party indexes have weak Korean coverage. Not a brand-quality signal.

## Tier 3 — Reconcile

No Tier 2 signal to reconcile against. §3 / §4 written directly from Tier 1 live observation. Conflict matrix not applicable. Footer logs `Conflicts unresolved: none`.

## Philosophy sources (§10–15)

- `https://dunamu.com` corporate (vision / services / portfolio).
- `https://upbit.com/home` (title element: "가장 신뢰받는 디지털 자산 거래소" — used as positioning signal, not lifted as a tagline).
- Observable surface behavior over both captured surfaces.
- Korean financial-UI locale convention (KR/JP/TW red=up, blue=down) — established convention, not Upbit-specific.

**Style-ref alignment**: Per skill rule P-1, KR brand → toss tone. Adopted Toss-style §10–15 shape (voice adjectives + Do/Don't + 3 illustrative samples + numbered principles + persona disclaimer + 7-row states + duration/easing/rules motion table). Voice characterization is original synthesis — no Toss copy lifted, no Upbit copy lifted.

## IP guardrails applied

- No verbatim taglines reproduced. Title-tag phrase ("가장 신뢰받는 디지털 자산 거래소") referenced only as positioning evidence in §11, not as headline copy.
- Voice samples in §10 marked "illustrative — characterizing the observed register."
- Persona block in §13 carries explicit disclaimer (public surveys + app-store reviews, no internal data).
- Brand assets (coin marks, Upbit logo) referenced for context, not reproduced.

## Confidence per section

| § | Confidence | Basis |
|---|---|---|
| 1 Identity | high | direct observation + Dunamu portfolio |
| 2 Layout | high | live inspect both surfaces |
| 3 Color | very high | computed style, 121 samples |
| 4 Components | high | computed style on real CTAs / table cells / tags |
| 5 Iconography | medium | observation, no asset export |
| 6 Imagery | medium | observation |
| 7 Motion | medium | observed behavior, no token export |
| 8 Voice | high | direct surface copy register |
| 9 A11y | high | contrast computed from captured hex |
| 10 Voice & Tone | high | observed register, fresh characterization |
| 11 Brand Narrative | medium-high | public corporate signal |
| 12 Principles | high | derived from observed restraint |
| 13 Personas | medium | public surveys, archetypal |
| 14 States | medium | inferred from production behavior |
| 15 Motion & Easing | medium | inferred timing, durations conservative |

---
**Captured by**: omd:add-reference CREATE pipeline · 2026-05-14
