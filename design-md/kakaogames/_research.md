# 카카오게임즈 — CREATE research ledger

Date: 2026-07-13
Mode: CREATE
Raw UI evidence: `artifacts/reference-evidence/kakaogames.json` only

## Confidence summary

| Area | Confidence | Basis | Boundary |
|---|---|---|---|
| Public typography | High | 224 loaded SUIT Variable uses and matching font source in supplied artifact | Homepage/error public surfaces only |
| Public neutral colors | High | Repeated computed values in supplied artifact | No generic product semantic palette asserted |
| Static game-card and hero-arrow geometry | High | Selector/surface-backed computed styles in supplied artifact | Default state only |
| Company history, mission, and values | High | First-party company profile | Narrative context only |
| SUIT license | High | Official font-project license | Not a Kakao Games ownership assertion |
| Product states, motion, responsive rules, in-game UI | Absent | No supporting source or raw capture | Omitted |

## Source ledger

| Tier | URL | Evidence class | Use | Result |
|---|---|---|---|---|
| Tier 1 | https://kakaogames.com/ | product-surface | Raw computed typography, colors, cards, buttons | Used only through supplied packet |
| Tier 1 | https://kakaogames.com/error/ | product-surface | Raw public utility-shell observations | Used only through supplied packet |
| Tier 1 | https://kakaogames.com/en-us/about/ | official-doc | 2016 founding, global publisher/developer scope, mission, values, culture | Narrative only |
| Tier 1 | https://kakaogames.com/en-us/news/list/ | official-doc | Current multi-title global portfolio context | Narrative only |
| Tier 1 | https://webofficial.kakaogames.com/live/official/file/csr/report/2024-kakaogames-esg-Eng.pdf | official-doc | Global portfolio/expansion context | Narrative only |
| Tier 1 | https://github.com/sun-typeface/SUIT/blob/main/LICENSE | license | SIL OFL 1.1 boundary for loaded SUIT Variable | Font license only |
| Tier 2 | https://getdesign.md/kakaogames | catalogue attempt | Cross-check | No usable Kakao Games record returned |
| Tier 2 | https://styles.refero.design/?q=kakaogames | catalogue attempt | Cross-check | General catalogue returned; no usable Kakao Games style record |

## Reconciliation notes

- The raw packet is authoritative for computed-style, font, component, and interaction claims. No capture was rerun and no MCP was used.
- Browser-default `#0000ee` anchors are not treated as brand color evidence.
- The empty interaction log is an explicit cap on interactive states, not a reason to delete static geometry.
- Existing first-party corporate context supplies a company story and current scope, but it does not bridge into unobserved game-client UI.
- No conflict remains after keeping all claims in their original evidence domain.
