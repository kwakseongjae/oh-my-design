# Research ledger — KB국민은행 (`kb-kookmin`)

**Created:** 2026-07-14
**Canonical evidence date:** 2026-07-13
**Mode:** CREATE
**Confidence posture:** high for selector-backed public-web values; medium for official group narrative/brand context; absent for unobserved product states, app flows, webfont deployment, and Tier 2 catalogue corroboration.

## Scope decision

The packet fixes the identity and catalog fields: `kb-kookmin`, KR, fintech, https://www.kbstar.com/, and KB국민은행. The supplied `kb-kookmin.json` is the only raw computed-style, font, component, and interaction evidence used. It has three product snapshots: public home, online banking, and a duplicate public-home snapshot. No collector, browser raw-inspection flow, MCP, repository capture, or computed-style rerun was used.

## Tier 1 — supplied product evidence

| Source | Confidence | What it supports | What it does not support |
|---|---|---|---|
| `https://www.kbstar.com/` (`home`) | High | `#ffffff`, `#333333`, `#5a5a5a`, `#ffcc00`, `#0c4ad1`, `#dddddd`; 13–20px type samples; square links/utility controls; flat selector samples. | A global primary button, a responsive grid, font deployment, or interactive state transitions. |
| `https://obank.kbstar.com/quics?page=C018702` (`surface-2`) | High for raw element values; medium for selected item classification | `#333333` selected static ARIA item, 14px/400/14px selected-item sample, system stack beginning Roboto. | A general tab system or observed tab-change interaction. |
| `https://www.kbstar.com/` (`surface-3`) | High corroboration | Repeats home values. | A distinct route, viewport, breakpoint, or independent product surface. |

### Font determination

The bundle reports 352 `맑은 고딕` first-family uses as unresolved/low confidence and 67 Roboto uses as a high-confidence system stack. It has no `fontFaces` object and no source URLs. Therefore no computed family is promoted as a KB UI-family token. The one Times occurrence is omitted at the smallest field boundary.

### Component determination

The detector found 33 variants, but only the selector-backed outline-anchor, inline-anchor, and selected-row samples are promoted. Each is mapped to `listItem`: the anchors have no button semantics, and the selected row is a `li` with `role="presentation"` despite its static `aria-selected="true"` value. Transparent icon/utility buttons have insufficient semantic context; low-confidence carousel/listbox/menu samples are kept only in `.verification.md`. This preserves measured siblings without inventing a generic banking component family.

### Interaction determination

`interactionKinds: 0` and `interactionCount: 0`. The one observed selected state is static `aria-selected="true"`; it is not evidence of a transition. Hover, focus, pressed, disabled, dialog, toast, error, loading, success, and responsive variants are absent.

## First-party context and brand evidence

| Source | Confidence | Fact retained | Domain boundary |
|---|---|---|---|
| [KBFG history](https://www.kbfg.com/eng/about/group/history/merge.htm) | High | Kookmin Bank and Housing & Commercial Bank merger formed KB Kookmin Bank; history describes people-and-business service. | Company history, not a product style source. |
| [KBFG CI](https://www.kbfg.com/kor/about/corporate/ci.htm) | High | Star-b is forward-looking group identity; group identity uses a unique logotype and colour system. | Corporate brand asset, not a numeric bank UI token source. |
| [KB국민은행 CI guide](https://omoney.kbstar.com/quics?page=C017667) | High | The bank’s own CI guide identifies the logotype as a unique typeface and says the signature must not be arbitrarily altered; it also supplies image-based colour guidance. | Bank brand asset, not numeric product-token or component evidence. |
| [KBFG corporate font](https://www.kbfg.com/kor/about/corporate/font.htm) | High | KB금융체 has separate heading/body designs; official rationale connects straight and curved forms with trust/friendliness. | Distributed/group brand asset context only; no route-level use, file, or licence claim. |
| [KBFG mission, vision, and values](https://www.kbfg.com/kor/about/group/value.htm) | High | Group mission/vision and the customer focus, professionalism, innovation, trust/integrity, shared-growth values. | Group philosophy, not verbatim bank-product copy guidance. |
| [KBFG 2024 annual report](https://www.kbfg.com/common/jsp/fileDownUtil.jsp?filepath=%2Fdata%2Fannual_report%2F2024+KB_ar_full+version.pdf) | Medium-high | Digital-first core-banking modernisation and consultation-friendly terminal redesign were described as ongoing/planned evolution. | Time-bounded report context; no completed/current screen token claim. |

## Official font/license outcome

KB금융체 is confirmed as an official KB Financial Group type asset. Neither the official group font page nor the bank CI material located a downloadable font file, licence statement, or product-route deployment. It is documented in §3 as a separate official brand asset with unresolved licence/loadability boundary, not placed in `tokens.typography.family` and not rendered through a fallback.

## Tier 2 attempts

| Service | URL/query | Result | Confidence/use |
|---|---|---|---|
| getdesign | https://getdesign.md/kb-kookmin | Built-in open returned an internal error; KB국민은행/KB Kookmin site searches returned no result. | No evidence used. |
| Refero | https://styles.refero.design/?q=KB%20Kookmin%20Bank | Built-in open returned an internal error; KB국민은행/KB Kookmin site searches returned no result. | No evidence used. |

## Reconciliation summary

- Tier 1 selector-backed values control all machine-readable tokens.
- The official bank and group CI materials confirm the yellow/star and logo expression but do not turn image-based asset guidance into a bank product fill, component, or state.
- The official corporate font is explained without a fallback, UI-family token, or licence assertion.
- Tier 2 contains no retrieved competing claim; conflict matrix result is `none`.
- Unknowns were omitted at field/group boundary: UI family, global spacing/radius scale, generic component set, state/motion contract, grid/breakpoints, and native/authenticated product behaviour.
