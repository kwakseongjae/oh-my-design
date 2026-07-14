# 聯合新聞網 — research ledger

**Reference:** `udn`
**CREATE packet:** `artifacts/reference-create/runs/2026-07-13-udn/packet.md`
**Raw UI evidence:** `artifacts/reference-evidence/udn.json`
**Evidence date:** 2026-07-13

## Confidence summary

| Area | Confidence | Basis and boundary |
|---|---|---|
| Public-surface scope | High | The supplied packet identifies three udn URLs and reports three captured desktop surfaces. |
| UI type family | High | Noto Sans TC is loaded/high with 1,279 visible uses and 105 Google Fonts source URLs. |
| Colors and measured geometry | High for listed values | Every promoted token has a direct selector/surface-backed `verification_v2` claim and a raw sample in `.verification.md`. |
| Load-more button | High | Real `button`, 16 occurrences on two category surfaces, with exact default geometry. |
| Newsletter input | High for default; bounded for error | Real email input on all three routes. Error interactions were captured, but no distinct error-style value exists. |
| Corporate and product narrative | High | First-party UDN Group, journalism, and official mobile-product pages. Used only as narrative context. |
| Font-license boundary | High | Official Noto documentation states the Open Font License boundary. It does not make Noto a udn brand asset. |
| Tier 2 corroboration | Unavailable | The getdesign attempt returned directory/terms material rather than an udn record; the Refero attempt returned an unrelated Current style reference. Neither supplies udn evidence. |

## Source ledger

| Tier / domain | URL | What it supports | What it does not support |
|---|---|---|---|
| Tier 1 / public product surface | https://udn.com/news/index | Packet source for home colors, type, tab/link observations, email input, and form-error capture | Mobile app, account, subscription, paywall, or generic button claims |
| Tier 1 / public product surface | https://udn.com/news/cate/2/6638 | Packet source for the real category load-more button | Whole-site component system or interaction states |
| Tier 1 / public product surface | https://udn.com/news/cate/2/6649 | Packet source for category-page corroboration and input presence | Mobile/responsive or authenticated-product claims |
| Tier 1 / corporate history | https://www.udngroup.com/ | 1951 origin, 1999 udn launch, mission, values, milestones, digital transformation | Public CSS, numeric palette, or component geometry |
| Tier 1 / journalism/current evolution | https://www.udngroup.com/journalism | Digital-first shift, subscription-economy context, multimedia storytelling | Uncaptured reader workflow or interface tokens |
| Tier 1 / mobile-product narrative | https://mobile.udn.com/re/udnnews.shtml | Official current app positioning and reader-service cues | Raw mobile CSS, breakpoints, or app components |
| Tier 1 / license | https://notofonts.github.io/noto-docs/website/use/ | Noto OFL terms and webfont-use context | Proprietary udn-typeface claim |
| Tier 2 attempt | https://getdesign.md/udn | Attempt recorded; built-in web search returned directory/terms material, not an udn record | Independent tokens or component corroboration |
| Tier 2 attempt | https://styles.refero.design/?q=udn | Attempt recorded; built-in web search returned an unrelated Current style reference, not an udn record | Independent tokens or component corroboration |

## Reconciliation decision

The canonical set is deliberately narrow: six selector-backed color values, one loaded UI family, three measured type roles, four observed spacing values, two radii, no-shadow depth, and two selector-backed static controls. The category anchor and tab anchor are not recast as buttons because their observed semantics are links. The real category `button` and email `input` retain measured default geometry only.

`interactionCount: 3` preserves the fact that form-error interactions were captured. It does not justify an error color, border, message, or any hover/focus/pressed/disabled value because the target styles show no distinct state delta. The component-harvest marker confirms preflight and component promotion, not an inferred interactive library.

No fallback font, system stack, generic card, declared-only icon font, inferred mobile rule, corporate color, subscription pattern, or paywall state is synthesized. `conflicts: []` is used because the evidence packet and two Tier 2 attempts produced no unresolved conflict.
