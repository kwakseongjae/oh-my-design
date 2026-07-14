# MIXI — CREATE research ledger

**ID:** `mixi`
**Mode:** CREATE
**Date:** 2026-07-13
**Raw computed-style evidence:** `artifacts/reference-evidence/mixi.json` only

## Evidence policy

The supplied Playwright collector bundle is the sole raw evidence for computed styles, font loading/declarations, components, and interaction results. No browser capture was rerun and no MCP tool was used. First-party web research below supplies company, product, brand, culture, and declared-font context; it does not promote a UI token without a matching supplied surface claim.

## Tier 1 — supplied corporate-surface capture

| Surface | URL | Evidence retained | Confidence |
|---|---|---|---|
| Home | `https://mixi.co.jp/` | Header button/default geometry, home news card/category label, `#e5004d` news label, Noto Sans JP usage | High for listed selector-backed values |
| About | `https://mixi.co.jp/about/` | 15px/400/27px corporate body, `#5c5c5c` breadcrumb, shared header | High for listed selector-backed values |
| Conduct guidelines | `https://mixi.co.jp/about/conductguidelines/` | 35px/600/52.5px guideline heading, shared header | High for listed selector-backed values |

Capture summary: 3 surfaces, coverage 71, 30 component variants, 4 component types, 0 interaction expansions, 0 observed changed states. Noto Sans JP is loaded/high with 337 visible uses. `mixi-bold`, `mixi-medium`, Noto Sans, and swiper-icons are declared-only with zero visible uses.

## First-party company, brand, and culture context

| Source | URL | Facts used | Confidence / boundary |
|---|---|---|---|
| About MIXI | `https://mixi.co.jp/en/about/` | Purpose, mission, MIXI Way, values, bold logo rationale, red/orange emotion marks, president’s current innovation/surprise framing | High. Corporate narrative only; no CSS token extraction. |
| Company history | `https://mixi.co.jp/en/company/history/` | 1997 Find Job!, 2004 mixi SNS, 2013 MONSTER STRIKE, 2022 MIXI name change, later portfolio milestones | High. Company/product history only; no shared UI claim. |
| Future of MIXI | `https://mixi.co.jp/en/ir/individual/plan/` | Third Founding and We-Time Economy strategy around people enjoying content together | High. Strategy context only. |
| MIXI DESIGN activity report | `https://design-note.mixi.co.jp/n/n72743daaf24b` | Designer Relations, 3C framing, knowledge sharing, community activity | High. Design-culture context only. |

## Font / asset ledger

| Family | Bundle status | Evidence domain | Decision |
|---|---|---|---|
| Noto Sans JP | loaded/high, 337 uses | Live corporate computed surface | Canonical corporate-web UI family only. |
| mixi-bold | declared, 0 uses; MIXI-hosted WOFF/TTF source | Declared brand asset | Keep as declared-only; no font specimen, licence, or product-use claim. |
| mixi-medium | declared, 0 uses; MIXI-hosted WOFF/TTF source | Declared brand asset | Keep as declared-only; no font specimen, licence, or product-use claim. |
| Noto Sans | declared, 0 uses | Declared implementation resource | Omit from tokens. |
| swiper-icons | declared, 0 uses | Declared implementation resource | Omit from text/font tokens. |

## Tier 2 attempts

| Service | URL | Result | Confidence |
|---|---|---|---|
| getdesign | `https://getdesign.md/mixi` | Built-in web open returned an internal safe-open failure; no usable record. | No cross-check value. |
| Refero | `https://styles.refero.design/?q=mixi` | Built-in web open returned an internal safe-open failure; no usable MIXI result. | No cross-check value. |

## Confidence by canonical area

| Area | Confidence | Reason |
|---|---|---|
| Corporate black/white base and measured news red | High | Selector-backed values from three supplied official routes. |
| Corporate typography specimen | High | Noto Sans JP is loaded/high and directly computed in captured roles. |
| Header button and news label geometry | High | Direct selector/tag/class and raw dimensions/styles in bundle. |
| Interaction/state system | Absent | Bundle explicitly reports zero interactions; no state values are inferred. |
| Product-service UI | Absent | Corporate surfaces do not establish mixi2, gaming, sports, or other service UI. |
| MIXISANS use/licence | Unresolved | Font files are declared but not visibly used; no official licence/product-use material was established. |
| Brand narrative and current evolution | High | Official about, history, strategy, and MIXI DESIGN sources. |

## Reconciliation conclusion

There is no unresolved canonical conflict. The capture and first-party narrative are compatible once their domains are kept distinct: corporate web values supply the token graph; history, strategy, logo rationale, and design-culture sources explain MIXI without being promoted into product UI facts. Tier 2 supplied no usable competing values.
