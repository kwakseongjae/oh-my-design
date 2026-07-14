# Sakura Internet — CREATE research ledger

**Reference:** `sakura-internet`
**Date:** 2026-07-13
**Mode:** CREATE
**Evidence boundary:** `artifacts/reference-evidence/sakura-internet.json` is the sole raw computed-style, FontFaceSet, component, and interaction evidence. No browser capture was rerun and no MCP was used.

## Evidence preflight

| Check | Result |
|---|---|
| Official supplied surfaces | 2 — `https://www.sakura.ad.jp/` and `https://www.sakura.ad.jp/brand-assets/` |
| Coverage score | 75 |
| Component variants | 29 across card, listItem, button, and tab classifications |
| Interaction evidence | 3 tab interactions; `selected` and `tab-selected` only |
| Token promotion floor | Met: static `service-card service-initiative-list` card and native selected `case-tab-button` tab both have selector-backed geometry |

## Source ledger

| Tier | URL | Confidence | Used for | Boundary |
|---|---|---|---|---|
| Tier 1 raw | `https://www.sakura.ad.jp/` | High for supplied selector/style/font values | Public colors, Noto Sans JP, static service list, selected tab | Corporate marketing only; not cloud-console UI. |
| Tier 1 raw | `https://www.sakura.ad.jp/brand-assets/` | High for supplied asset-surface observations | Pink/white asset-surface sample; Haru TP M visible use | Brand-assets surface only. |
| Tier 1 context | `https://www.sakura.ad.jp/corporate/corp/history/` | High | Origin, timeline, logo refresh, current platform evolution | Narrative only. |
| Tier 1 context | `https://www.sakura.ad.jp/corporate/corp/` | High | Vision and stakeholder framing | Narrative only. |
| Tier 1 brand asset | `https://www.sakura.ad.jp/corporate/corp/design/` | High | Haru TP description and listed uses | Does not establish a redistribution licence or generic product typography. |
| Tier 2 attempt | `https://getdesign.md/sakura-internet` | None / unusable | Cross-check attempted | Built-in web open returned an internal error; no value used. |
| Tier 2 attempt | `https://styles.refero.design/?q=Sakura%20Internet` | None / unusable | Cross-check attempted | Built-in web open returned an internal error; browser-harness could not attach (`Connection lost`); no value used. |

## Extraction decisions

### Promoted machine tokens

- `#FF5577`, `#FFFFFF`, `#1D1D1D`, `#F1F1F1`, `#6D6D75`, and `#CCCCCF` have supplied color/property/surface evidence and are explained in §2.
- Noto Sans JP is a loaded/high-confidence public family with 166 visible uses and a Sakura-hosted WOFF2 source.
- Haru TP M is separately retained as a brand family: it is loaded/high confidence in the supplied material and the official design page names Haru TP as an original expressive typeface. It is not substituted for ordinary Noto Sans JP UI copy.
- The spacing values 8, 16, 32, and 40; radii 8 and 46; and the card shadow are tied to listed selector samples, not inferred as a full design scale.
- `service-initiative-list` is a static `card` based on a `div.service-card.service-initiative-list`. It is retained precisely because interaction absence does not erase measured default geometry.
- `case-tab-selected` is a native button-classified `tab`. Its state summary names only the supplied selected/tab-selected evidence.

### Omitted boundaries

- No colour, typography, component, or state value is taken from getdesign or Refero.
- The supplied `a.news-panel-link` and `a.button.button-primary.service-row-button` remain raw evidence only. Their anchor semantics do not justify presenting them as button tokens.
- Unobserved hover, focus, pressed, disabled, checked, validation, menu, dialog, toast, and motion values are omitted rather than synthesised.
- No system fallback is represented as Haru TP or as an inferred Sakura proprietary product font.
- No responsive breakpoint, mobile surface, native app, authenticated console, or product-doc component contract is inferred from public corporate/asset captures.

## Confidence summary

| Area | Confidence | Reason |
|---|---|---|
| Public corporate colour/type/default geometry | High | Supplied selector-backed computed styles on the home surface. |
| Selected tab state summary | High | Three supplied tab interactions with selected/tab-selected markers. |
| Haru TP as brand expression | High | Loaded/high capture evidence plus first-party design narrative. |
| Haru TP redistribution/licence | Unresolved and omitted | No official licence source located in the collected first-party material. |
| Broader product/cloud-console system | Unresolved and omitted | No such surface was included in supplied raw evidence. |
| Tier 2 corroboration | Unavailable and unused | Both required attempts failed without a usable record. |
