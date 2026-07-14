# Pega UX Design System — CREATE Research Ledger

**Reference id:** `pega`
**Created:** 2026-07-13
**Raw UI-evidence boundary:** `artifacts/reference-evidence/pega.json` only. No browser capture was rerun and no MCP was used.

## Confidence summary

| Area | Confidence | Basis | Boundary |
| --- | --- | --- | --- |
| Public Pega UX System colors, geometry, and type metrics | High | Supplied computed-style evidence across 3 surfaces / 16 component variants | Public documentation surfaces only; not corporate marketing or authenticated product UI |
| Roboto Flex as current public UX System UI family | High | 184 loaded, visible uses plus Pega’s official design-resource listing | Does not promote runtime system stacks or declared-only faces |
| Dark `link-as-button` default component | High | Selector, explicit class, geometry, and repeated surface presence | Default only; no interaction/state evidence |
| Search-input default component | High | Selector, input type, geometry, and repeated surface presence | Default only; no focus/error/disabled evidence |
| Menu-row default component | High | Selector/role, geometry, and repeated surface presence | Retained as listItem, not button |
| Company history and current positioning | High | Pega first-party corporate about page | Narrative context only |
| Corporate visual evolution | Medium | First-party 2021 brand article | Dated corporate narrative; no machine-token use |
| Tier 2 corroboration | None | Both retrieval attempts yielded no usable record | Not treated as a negative factual finding |

## Source ledger

| Tier / domain | URL | What it supports | What it does not support |
| --- | --- | --- | --- |
| Tier 1 / supplied product-surface | https://design.pega.com/ | Computed public-system body, masthead, version-control, search, menu-row, dark `link-as-button`, and Roboto Flex use | Corporate campaign rules, authenticated product UI, interaction states |
| Tier 1 / supplied official-doc | https://design.pega.com/components/ | Computed components-route heading | A complete semantic color system or component state matrix |
| Tier 1 / official design asset | https://design.pega.com/resources/design-resources/ | Pega UX System ’25 Design Kit, icon resources, named Roboto Flex family | A licence grant for Pega-specific assets |
| Tier 1 / licence | https://github.com/googlefonts/roboto-flex | Roboto Flex SIL Open Font License 1.1 context | Pega product design tokens or asset ownership |
| Tier 1 / corporate | https://www.pega.com/about | Since-1983 history, AI/workflow positioning, values and stakeholder context | Design-system computed values |
| Tier 1 / corporate evolution | https://www.pega.com/de/insights/articles/go-behind-scenes-how-pega-brand-evolving | 2021 account of corporate visual-brand evolution | Current Pega UX System token values |
| Tier 1 / system purpose | https://design.pega.com/about/get-started/ | Prescribed workflow approach, Constellation naming, accessibility/localization intent | Measured interaction state values |
| Tier 1 / system guidance | https://design.pega.com/patterns/forms/ | Labels/helper-text guidance and accurate-outcome framing | A state token contract |
| Tier 2 attempt | https://getdesign.md/pega | Attempt logged: built-in web open returned safe-open internal error | No record, component, token, or absence conclusion |
| Tier 2 attempt | https://styles.refero.design/?q=pega | Attempt logged: safe-open internal error; domain search returned no Pega style record | No record, component, token, or absence conclusion |

## Reconciliation decisions

1. **Use only packet UI values.** The deep header blue, dark action, white canvas/text, component-route accent pair, Roboto Flex, and component geometry all originate in the supplied bundle.
2. **Keep domains separate.** Pega corporate identity and brand-evolution material informs narrative sections only. It does not populate color, component, or typography tokens.
3. **Promote Roboto Flex, not fallbacks.** The bundle records it as loaded/high confidence with visible use, and Pega’s design resource names it. `-apple-system` and Arial remain runtime fallbacks; DM Sans, JetBrains Mono, and Source Serif 4 remain declared-only.
4. **Use the anchor CTA as a button only because the class is explicitly `link-as-button`.** A menu row stays `listItem`; no semantic upgrade is inferred from appearance alone.
5. **Retain static geometry with no interaction claims.** The bundle reports 0 interaction actions and 0 observed states, so component tokens say “default observed only” and omit all state-specific values.
6. **No unresolved conflict.** Tier 2 yielded no competing value. The conflict matrix records the lack of usable corroboration and the Tier 1 scope; the canonical conflict summary is exactly `none`.
