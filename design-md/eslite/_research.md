# Research ledger — 誠品 (`eslite`)

**Created:** 2026-07-14
**Canonical evidence date:** 2026-07-13
**Mode:** CREATE
**Confidence posture:** high for supplied selector-backed public-commerce values and measured component geometry; medium for first-party cultural/editorial context; absent for named product UI typography, font licensing, authenticated flows, responsive behavior, and interaction transitions.

## Method and evidence boundaries

This CREATE pass uses `artifacts/reference-evidence/eslite.json` as the only raw computed-style, font, component, surface, and interaction evidence. It was not refreshed, supplemented with browser capture, or collected through MCP. Built-in web search/open was used only for first-party company/product history, current brand evolution, official font/design/license discovery, and the two required Tier 2 attempts.

The evidence packet preflight is 3 surfaces / coverage 83 / 32 component variants. It contains `interactionKinds: 0` and `interactionCount: 0`. Measured default component geometry is preserved, while unobserved interactive behavior is absent.

## Tier 1 — supplied product evidence

| Source | Confidence | Used for | Boundary |
|---|---|---|---|
| `https://www.eslite.com/` | High | Search input and submit geometry, `#917e57`, `#ffffff`, `#212529`, `#999999`, `#cccccc`, 16px/400 public text, static input samples. | Public unauthenticated commerce home only. |
| `https://www.eslite.com/brand` | High corroboration | Repeated header/search and public-list samples. | Brand directory only; no corporate narrative fact is derived from it. |
| `https://www.eslite.com/brand/1098` | Medium-high by selector | `deep-base-product-card ec-card e-banner-product card-block` shell: white, square, 270px, 16px/400/24px. | Public expo catalog only; no physical-store or member component is inferred. |

### Font and license outcome

- `Noto Sans TC` is the first family in 891 computed uses, but the artifact calls it unresolved/low confidence because it has no matching loaded FontFace or known-system mapping.
- `NotoSerifCJKtc` has one unresolved computed use.
- `swiper-icons` is declared-only and unused as visible text.
- No first-party Eslite product-font announcement, distributed type asset, or license source was found. Accordingly, `tokens.typography.family` is omitted and no system fallback is presented as an Eslite font.

### Component and state outcome

- The high-confidence 40px public search input is promoted as an `input` with its measured default geometry. Its static focus and pressed samples are described precisely; they do not prove an interaction transition because `interactionCount` is zero.
- The public expo catalog’s selector/class-backed product-card shell is promoted as a `card`. Although the DOM element is an anchor, the supplied detector classifies its repeated `ec-card` shell as `card`; it is not converted to a button.
- Other links and rows are not given a component token because their type or reusable semantics are unresolved. No dialog, toast, tab, toggle, disabled, error, loading, success, or authenticated state is synthesized.

## First-party context and current evolution

| Source | Confidence | Facts used | Evidence boundary |
|---|---|---|---|
| [Eslite Online](https://www.eslite.com/) | High | Public online taxonomy spans books, stationery/creative goods, fashion, beauty, food, home, electronics, and brand platforms; footer links to corporate ideals, founder story, operating scope, and development history. | Public commerce and source discovery; not proof of member/checkout UI. |
| [Japan cultural-bridge feature](https://meet.eslite.com/tw/tc/article/201909260001) | High | Eslite described its Japanbridge opening as a Taiwan–Japan cultural bridge, with reading, events, Taiwanese makers, and exchange. | Cultural/place narrative, not token or typography evidence. |
| [expo platform](https://www.eslite.com/brand/1098) | High | Eslite says expo brings humanities and art into everyday life through creative perspectives and supports cultural-design brands. | Brand/product narrative; its computed catalog values remain separately sourced from the packet. |
| [35th-anniversary feature](https://meet.eslite.com/tw/tcr/article/202411040002) | High | The 2024 programme uses “Live your Dream” and presents encounters and small store stories as energy for a better future everyday life. | Current editorial/anniversary context only, not token evidence. |
| [Corporate ideals](https://www.eslitecorp.com/eslite/index.jsp?func_id=fee3ba0215&site_id=eslite_tw) and [founder story](https://www.eslitecorp.com/eslite/index.jsp?func_id=20f9eec115&site_id=eslite_tw) | Medium | Official routes are linked from Eslite Online’s footer and establish that brand-owned corporate history/ideals sources exist. | Built-in open returned only a shell; no unextracted statement from these routes is used as a fact. |

## Tier 2 — independent-directory attempts

| Source | Attempt date | Outcome | Confidence / handling |
|---|---:|---|---|
| `https://getdesign.md/eslite` | 2026-07-14 | Built-in web open returned a non-retryable safe-open internal error. | Unavailable; no values used and no absence conclusion drawn. |
| `https://styles.refero.design/?q=eslite` | 2026-07-14 | Built-in web open returned a non-retryable safe-open internal error. | Unavailable; no values used and no absence conclusion drawn. |

## Confidence ledger

### High

- Public search input default geometry: white background, `#999999` empty-field text, `#cccccc` asymmetric border, 8px 0px 0px 8px radius, 6px 12px 6px 16px padding, and 40px height.
- Search submit `#917e57`, public `#ffffff` canvas, `#212529` reading text, 16px/400/24px body sample, and 14px/500/20px compact control sample.
- Expo product-card shell: `#ffffff`, `#212529`, square, 0px padding, 270px height, 16px/400/24px.
- The cultural bridge, expo proposition, and 35th-anniversary “Live your Dream” framing in the cited first-party material.

### Medium

- Editorial interpretation that the captured commerce surface is restrained and content-led. This remains prose framing, not a token claim.
- The card detector’s component classification is supported by its repeated `ec-card` class and surface sample, while the underlying DOM is an anchor; the `card` token is explicitly scoped to that shell.

### Absent / intentionally omitted

- Named proprietary UI family, official font license, browser-loadable Eslite font specimen, official design system, generic color semantics, generic spacing/radius scale, general shadow/elevation system, interaction transitions, responsive rules, cart/checkout, member account, native app, error/disabled/loading/success states, and Tier 2 directory content.

## Publication notes

- Every semantic scalar in `tokens.colors`, `tokens.typography`, `tokens.spacing`, `tokens.rounded`, and the two promoted component objects has a matching `verification_v2.claims` path; the claim map contains no claim for an absent token leaf.
- `components_harvested: true` records that the required selector/surface-backed static component promotion was completed; it does not claim a new visual value.
- Corporate, cultural/editorial, public-commerce, and unresolved-font evidence remain separated. Tier 2 failures are recorded as attempts rather than evidence of absence.
