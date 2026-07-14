# Research ledger — マイナビ (`mynavi`)

**Extracted:** 2026-07-13
**Mode:** OmD CREATE packet
**Raw style evidence authority:** `artifacts/reference-evidence/mynavi.json` only. No browser capture was rerun and no MCP was used.

## Confidence summary

| Area | Confidence | Basis | Boundary |
|---|---|---|---|
| Three public source surfaces | High | Packet records `https://www.mynavi.jp/`, `/service/`, and `/company/` at 1440×900 | Public routes only. |
| Body ink, title/heading values, spacing, tab geometry | High | Selector-backed computed values in packet | Each promoted value remains tied to its source domain. |
| `Noto Sans JP` public-title role | High | Packet reports loaded/high confidence, visible `h1` use, and Google Fonts sources | Does not establish a universal app/product font. |
| Yu Gothic computed stack | Low / unresolved | 819 computed uses, but no matching FontFace/source match | Not promoted or substituted. |
| Logo lettering context | Medium | First-party Mynavi News feature describes its custom construction | Not a distributed font or a CSS token source. |
| History, purpose, current direction | High | First-party corporate history, purpose, company, and top-message pages | Narrative only; never used as style-token evidence. |
| Tier 2 coverage | Attempted, unusable | Both direct built-in web opens returned internal errors | No Tier 2 value used. |

## Tier 1 — supplied computed-style and component evidence

| Source | Semantic domain | Observed material used | Omitted boundary |
|---|---|---|---|
| `https://www.mynavi.jp/` | Corporate public home | `#323746` body/list ink; 14px/400/24.5px body baseline; 39px list left inset | No account, career-search, or job-application UI. |
| `https://www.mynavi.jp/service/` | Public service directory | `Noto Sans JP` 40px title; `a.tab-show-item` static tab (`#dddddd`, `#000000`, 4px, `2px 3px`, 38px) | No selected/changed tab state or shared product tab system. |
| `https://www.mynavi.jp/company/` | Corporate information | `#0071bb` local `h2`; `#e7f6fd` information block | No global palette claim. |

Packet preflight: **3 surfaces / coverage 66 / 30 component variants / 0 observed states / 0 interaction kinds / 0 interactions**. The single machine component is intentionally an honest cap: it is the selector-backed static tab, not a generic inferred button or row.

## First-party context and brand-asset sources

| Source | Evidence class | Facts used | Excluded use |
|---|---|---|---|
| [Company](https://www.mynavi.jp/company/) | Official corporate context | Support for work, learning, and many forms of life; company framing | No color/font/component inference. |
| [History](https://www.mynavi.jp/company/history/) | Official corporate history | 2007 portal-brand unification; 2011 rename to Mynavi; subsequent service expansion | No visual-token inference. |
| [Purpose](https://www.mynavi.jp/recruit/career/company/purpose/) | Official culture/purpose | Purpose and five values | Voice/principle context only. |
| [Top message](https://www.mynavi.jp/company/message/) | Official current-direction statement | Social-innovator evolution through people and technology | Narrative context only. |
| [Logo lettering feature](https://news.mynavi.jp/article/font_quiz-2/) | First-party brand asset context | Logo renewal used custom-made lettering with an intentionally friendly, connected character | No distributable-font, licence, or UI-family claim. |

## Font and licence research

No first-party product-font announcement, font download, or font licence was found in the allowed research pass. This is not a licence assertion. It is an absence boundary: only the packet’s loaded `Noto Sans JP` public-title evidence is used as a font-family token. The Google Fonts WOFF2 URLs in the packet corroborate loading, but they do not make the unresolved Yu Gothic system stack a Mynavi font.

## Tier 2 attempts

| Service | Direct attempt | Result | Reconciliation consequence |
|---|---|---|---|
| getdesign | `https://getdesign.md/mynavi` | Built-in web open returned an internal error; no usable record was returned. | No Tier 2 token, component, font, or state value used. |
| Refero | `https://styles.refero.design/?q=mynavi` | Built-in web open returned an internal error; no usable record was returned. | No Tier 2 token, component, font, or state value used. |

## Reconciliation decision log

1. `#323746`, `#000000`, `#0071bb`, `#dddddd`, and `#e7f6fd` are retained because each has a selector/surface-backed raw sample.
2. The corporate-heading blue is not reframed as a universal primary/action token; its evidence is one company-information heading.
3. `Noto Sans JP` is retained as a limited title family because it is loaded/high confidence and visibly computed on page titles.
4. The Yu Gothic stack, declared `swiper-icons`, button-like links, list rows, cookie-consent controls, and all unobserved state/motion/form/dialog values are omitted at the smallest unresolved boundary.
5. The static service-directory tab is retained despite 0 interactions. Its default geometry is directly measured; its `states` field truthfully records the absence of changed interactive evidence.
6. No conflict was found between usable sources. Conflict summary: **none**.
