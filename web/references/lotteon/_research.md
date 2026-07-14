# 롯데ON CREATE research ledger — 2026-07-14

## Scope

This CREATE packet uses `artifacts/reference-evidence/lotteon.json` as the only raw computed-style, font, component, and interaction evidence. No browser capture was rerun and no MCP source was used. Web research was limited to first-party company/product context and the two required Tier 2 attempts.

## Source ledger

| Tier | URL | Source class | Result / allowed use | Confidence |
|---|---|---|---|---|
| 1 | https://www.lotteon.com/p/display/main/lotteon | product-surface | Supplied evidence source: home computed styles, components, fonts, and three selected-tab interactions | High |
| 1 | https://www.lotteon.com/p/mylotte/recent/product | product-surface | Supplied evidence source: recent-products computed styles, components, and fonts | High |
| Context | https://www.lotte.co.kr/business/compDetail.do?compCd=L207 | official-doc | Official history/service context: Lotte.com origin, 2018 unit, April 2020 Lotte ON launch, integrated commerce, offline infrastructure, vertical services | High |
| Context | https://story.lotteon.com/ | official-doc | Official current product/culture context: discovery framing, online/offline synergy, product-experience ambition, current service areas | High |
| Font license | https://github.com/orioncactus/pretendard/blob/main/LICENSE | license | Upstream Pretendard SIL Open Font License 1.1; documents the upstream family only, not a Lotte ON redistribution permission or UI-use claim | High for the upstream license boundary |
| 2 | https://getdesign.md/lotteon | third-party catalog attempt | Direct built-in web open returned an internal error; subsequent site search found no brand-specific result | None for tokens |
| 2 | https://styles.refero.design/?q=lotteon | third-party catalog attempt | Direct built-in web open returned an internal error; subsequent site search found no brand-specific result | None for tokens |

## Evidence-domain separation

| Domain | What is retained | What is not promoted |
|---|---|---|
| Product surface | Color, spacing, radius, typography, component geometry, loaded font use, and selected tab state from the supplied bundle | Brand history, license, responsive rules, unknown states |
| Corporate official document | Origin, launch, integrated-commerce scope, vertical service direction | Product visual tokens or component values |
| Official Lotte ON Story | Current discovery/product-experience narrative and source-backed copy samples | Product visual tokens or a complete writing system |
| Upstream Pretendard license | Licence boundary for the upstream typeface | Lotte ON hosting terms, a brand-asset claim, or any evidence of product use beyond the supplied bundle |
| Declared font resources | Avenuel Didot and Roboto Condensed remain declared-only with 0 observed visible use | Canonical UI family, specimen, or license claim |
| Tier 2 catalog attempts | Attempt records only | Any token, component, or corroboration claim |

## Reconciliation notes

1. `#000000` is a measured selected-tab/search-icon value. It is recorded as a narrowly scoped primary token, not as an inferred brand-wide button color.
2. `Pretendard` and `NotoSansKR` were independently loaded and visibly used. They are separate tokenized families; neither is a fallback for the other.
3. A selector-backed repeated `c-product-card` is retained as a static card because its 0px radius and 368px height are measured. No interaction state is claimed for it.
4. The image tab has both unselected and selected measured values. The supplied three interactions support selected only; no hover, focus, pressed, disabled, or error value is added.
5. Pretendard's upstream repository publishes SIL Open Font License 1.1. That establishes only the upstream licence boundary; the supplied bundle's computed family plus loaded FontFace/source URLs establish Lotte ON live use. No public Lotte ON licence or redistribution term for its hosted subset files was located.

## Confidence boundaries for future work

- Reinspect with controlled multi-viewport capture before adding mobile breakpoints or responsive tokens.
- Capture explicit focus, disabled, error, empty, loading, success, dialog, toast, toggle, and motion states before documenting them as product behavior.
- Locate a Lotte ON first-party licence or distributed-font page before adding a product-hosted-font licence or specimen-availability claim.
- Re-run Tier 2 only in an environment that can safely access and search the catalog domains; do not replace missing results with adjacent ecommerce references.
