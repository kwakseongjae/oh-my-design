# SK텔레콤 — _research.md

**Date:** 2026-07-13
**Pipeline:** OmD CREATE packet
**id:** `sktelecom` · **country:** `KR` · **category:** `consumer-tech` · **homepage:** `https://www.sktelecom.com/`

## Evidence boundary

The only raw computed-style, font, component, and interaction input is `artifacts/reference-evidence/sktelecom.json`, captured at `2026-07-13T14:52:40.064Z`. It covers the public home and the public brand-information page at 1440×900, with two surfaces, coverage 63, 22 component variants, and zero recorded interaction expansions. No browser capture was rerun and no MCP was used.

## Tier 1 — supplied live evidence

| Surface | Artifact kind | Confidence | Extracted, retained facts | Boundary |
| --- | --- | --- | --- | --- |
| `https://www.sktelecom.com/` | `product-surface` | High for raw styles and loaded font status | SKT Sans Text/Display live use; `#727887`/white 58px top action; 16px media-tile radius; repeated 6/12/16/24/40px spacing values | Public home, not native customer products or a documented DS. |
| `https://www.sktelecom.com/view/introduce/brand.do` | `official-doc` | High for raw styles and loaded font status | `#3A46CD` static current navigation; resource-download and outline-title link dimensions; SKT Sans live use | Brand-information/corporate page, not a universal product component library. |
| SK텔레콤-hosted SKT Sans WOFF/WOFF2 URLs in the artifact | `brand-asset` | High for captured delivery | Text and Display files are loaded and match visible computed families | Delivery is not a public licence or redistribution promise. |

## Tier 1 — first-party context ledger

| Source | Confidence | Usable fact | Evidence boundary |
| --- | --- | --- | --- |
| `https://news.sktelecom.com/182728` | High | In 2022 SK텔레콤 presented an AI Company vision focused on benefiting customers through technology and services, alongside a T/B renewal. | Strategy and history; no UI palette/component values. |
| `https://news.sktelecom.com/182844` | High | The T/B renewal uses OPEN/open-door imagery; T is explained through Technology, Tomorrow, and Together, while T Blue/T Red are named qualitative brand colors. | Brand narrative; no hexadecimal palette or type specification. |
| `https://news.sktelecom.com/223776` | High | A 2026 official fact sheet describes an AI-infrastructure architect/full-stack AI-provider direction, customer-focused AI redesign, and DO THE GOOD AI. | Current corporate context; not a captured product UI system. |
| First-party search attempt for `SKT Sans` and font/licence sources | Medium | No official public font-licence or general redistribution page was returned in the consulted results. | A failed discovery result; it does not prove a licence cannot exist elsewhere. |

## Tier 2 — both attempts

| Source | Attempt | Result | Confidence / effect |
| --- | --- | --- | --- |
| getdesign | `https://getdesign.md/sktelecom` | Built-in web open blocked the URL as unsafe before content could be returned. | No record/value used. |
| Refero | `https://styles.refero.design/?q=SK%20Telecom` | Built-in web open blocked the URL as unsafe before a result list or scroll could be inspected. | No record/value used; no negative listing claim made. |

## Reconciliation

Tier 1 is the only usable token/component source. Values are retained only where the supplied artifact supplies a selector-backed computed value and provenance can be attached in `verification_v2`. First-party newsroom material supplies identity, brand evolution, and principles but is held outside machine tokens. Tier 2 did not create a conflict because neither lookup returned a usable record.

## Confidence by section

| § | Confidence | Basis and boundary |
| --- | --- | --- |
| 1 Visual theme | High | Two official public surfaces plus three first-party vision/brand/current-context sources. |
| 2 Color roles | High | Selector-backed public values; T Blue/T Red hex values intentionally omitted. |
| 3 Typography | High | Loaded FontFace-backed visible use for both SKT Sans families; licence boundary remains unresolved. |
| 4 Components | High | Selector and raw-style provenance for three anchor patterns mapped to `listItem` plus one native-button default; no interactive state is retained. |
| 5 Layout | Medium | Spacing clusters on a single desktop viewport; no grid contract asserted. |
| 6 Depth | High | Retained representatives report `box-shadow: none`; scope is local. |
| 7 Guidance | High | Derived only from supported/unsupported evidence boundaries. |
| 8 Responsive | Low | One desktop viewport only; no responsive values retained. |
| 9 Agent guide | High | Constrained summary of retained tokens and explicit boundaries. |
| 10 Voice & tone | Medium-high | First-party AI/Open/current-context language; examples are explicitly illustrative. |
| 11 Brand narrative | High | First-party 2022 vision/renewal and 2026 fact sheet. |
| 12 Principles | High | First-party strategy/brand/ESG facts with scoped UI implications. |
| 13 Personas | Medium | Stakeholder archetypes derived from official strategy, explicitly not user research. |
| 14 States | High | Empty at the state-group boundary because interactions are zero. |
| 15 Motion | High | Empty at the motion-group boundary because no timing/easing evidence exists. |

## Guardrails applied

- Product, marketing/campaign, corporate, brand-information, and declared-only font evidence are not merged into one token domain.
- No fallback typeface is represented as SKT Sans; no hosted font file is represented as a licence.
- No generic component is inferred from structural content rows, and no raw state-like selector is represented as a behavior contract.
- No design-system URL was discovered in the supplied artifact; none is claimed.
- Unknown information is omitted at the token, field, component, state, responsive, and motion boundaries rather than replaced with a plausible substitute.
