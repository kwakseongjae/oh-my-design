# Research ledger — 숲 (`soop`)

**Created:** 2026-07-14
**Canonical evidence date:** 2026-07-13
**Mode:** CREATE
**Confidence posture:** high for selector-backed static public-product values and the loaded Pretendard match; medium for first-party company, advertising, and brand-policy context; absent for interaction states, authenticated flows, responsive behaviour, a proprietary SOOP font, and Tier 2 corroboration.

## Scope decision

The packet fixes the identity and catalog fields: `soop`, KR, consumer-tech, `https://www.sooplive.co.kr/`, and 숲. `artifacts/reference-evidence/soop.json` is the only raw computed-style, font, component, and interaction evidence used. It was not refreshed, supplemented by browser capture, or collected through MCP. Built-in web search was used only for first-party/company context, official brand/advertising/font licence discovery, and the two requested Tier 2 attempts.

The preflight is three supplied surfaces, coverage 66, and 54 component variants. The evidence has `interactionCount: 0`, so canonical components retain measured default geometry only.

## Tier 1 — supplied product evidence

| Source | Confidence | What it supports | What it does not support |
|---|---|---|---|
| `https://www.sooplive.com/` (`home`) | High | `#0182ff` local public accent; `#f6f6f9` content surface; `#e8ebed` / `#757b8a` chip pair; `#17191c` text; loaded Pretendard; repeated 400×45 search input. | Universal CTA semantics, state transitions, responsive rules, authenticated viewer flows, or broadcaster controls. |
| `https://www.sooplive.com/` (`surface-2`) | High corroboration | Exact repeat of the 400×45 input and public-home values. | A second route, breakpoint, or independent product surface. |
| `https://esports.sooplive.com/` (`surface-3`) | Medium-high by selector | SOOP blue link/underline samples and a separate esports visual context. | A reason to replace consumer-home values with dark esports controls or to merge the two surface systems. |

### Font determination

Pretendard is the sole loaded/high-confidence family: 1,401 uses and 18 SOOP-hosted FontFace URLs back its computed deployment. FOUREYES, Gmarket, Noto Sans, NotoSansThai, SSFlowerRoadRegular, and swiper-icons are declared-only. The unresolved computed `a` and `s` entries are omitted. No system fallback is presented as a SOOP brand or UI family.

### Component determination

The detector lists 54 static variants. The canonical `home-search-input` is deliberately limited to a selector-backed repeated `<input>` whose default geometry appears on both home snapshots. Observed links and list rows are preserved in raw proof, not reclassified as buttons. The zero interaction count removes only hover/focus/pressed/disabled/error and other unobserved states; it does not erase the input’s default values.

## First-party context and brand evidence

| Source | Confidence | Fact retained | Domain boundary |
|---|---|---|---|
| [SOOP brand guide](https://res.sooplive.com/policy/contents/brand_guide.html) | High | SOOP is the company’s representative service name and trademark; its name, mark, BI, and CI are protected brand assets. | Brand-use policy, not a numeric product UI source. |
| [SOOP ESG 2024 overview](https://corp.sooplive.com/esg/2024/index.php?page=overview) | High | The company describes AI/data-enabled global-platform direction, global-service launch, and operations in the United States, Thailand, Hong Kong, and Vietnam. | Corporate/current-evolution context, not route parity or UI token evidence. |
| [SOOP user satisfaction management](https://corp.sooplive.com/esg/2023/index.php?page=winwin) | High | Service improvement is described as both company-level and feedback-informed from planning. | Service principle context, not an interaction or copy specification. |
| [SOOP Creative Guide](https://static.file.sooplive.co.kr/da_guide_file/2024/10/24/SOOP_CreativeGuide.pdf) | High | Advertising-copy examples specify Pretendard and compact spacing/hierarchy. | Advertising/marketing asset; it does not supply a product-wide type scale. |
| [Name-change disclosure](https://kind.krx.co.kr/external/2024/03/29/002491/20240227002860/70659.htm) | High | The statutory name changed from AfreecaTV Co., Ltd. to SOOP Co., Ltd. in March 2024. | Official company-history record, not brand-token evidence. |

## Font and licence discovery

The SOOP evidence itself proves product deployment of Pretendard through computed use plus a matching loaded FontFace and SOOP-hosted font URLs. The upstream [Pretendard licence](https://github.com/orioncactus/pretendard/blob/main/LICENSE) publishes SIL OFL 1.1. This licence is described as an upstream font fact only; it is not used to infer a proprietary SOOP type asset or a licence for any declared-only family.

## Tier 2 attempts

| Source | Attempt date | Outcome | Confidence / handling |
|---|---:|---|---|
| getdesign | 2026-07-14 | Built-in open of `https://getdesign.md/soop` returned an internal retrieval error. | Unavailable; no values used. |
| Refero | 2026-07-14 | Built-in open of `https://styles.refero.design/?q=soop` returned an internal retrieval error. | Unavailable; no values used and no absence conclusion drawn. |

## Confidence ledger

### High

- The loaded Pretendard UI family, public `#0182ff` accent, `#f6f6f9` surface, `#17191c` foreground, `#757b8a` muted text, `#e8ebed` chip surface, 16/70/8px local spacing observations, 45/30px local radii, and no-shadow search input are selector-backed supplied evidence.
- SOOP’s representative-name/trademark statement, feedback-informed service framing, and 2024 global platform direction are first-party materials.

### Medium

- The interpretation that the public system is compact and discovery-forward: grounded in the captured content/chip/search geometry, but retained as prose rather than a new token.
- The connection between the 2024 name change and the current SOOP public identity: supported by statutory disclosure and brand guide, while not establishing any historical screen design.

### Absent / intentionally omitted

- Official public product design system, a universal CTA component, proprietary SOOP UI family, application states, state transitions, responsive rules, accessibility contract, authenticated viewer/broadcaster UI, global/local surface parity, and Tier 2 catalogue evidence.

## Reconciliation summary

- Product-surface evidence controls every machine-readable token and component leaf.
- Official brand, company, advertising, and licence sources remain narrative/context evidence rather than substitutes for product computed styles.
- No font is promoted from declared-only status, and no fallback family is used as a SOOP fact.
- Tier 2 returned no retrievable competing claim; the conflict matrix records this as unavailable, not absent.
- The reference promotes one measured static input variant and sets `tokens.components_harvested: true`; every component scalar leaf has a verification-v2 claim.
