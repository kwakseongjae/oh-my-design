# Acer (宏碁) — CREATE research ledger

Date: 2026-07-13
Mode: CREATE
Raw visual evidence boundary: `artifacts/reference-evidence/acer.json` only. No browser recapture and no MCP source was used.

## Evidence inventory

| Tier / domain | Source | Confidence | Used for | Boundary |
|---|---|---|---|---|
| Tier 1 / product surface | https://www.acer.com/kr-ko/ | High | Home colors, Noto Sans computed use, heading, primary and tertiary CTA geometry | Public Korean home only; no native-product inference. |
| Tier 1 / product surface | https://www.acer.com/us-en/laptops | High | Feature-card and locale-select geometry, muted/subtle colors | Public US laptop catalog only. |
| Tier 1 / product surface | https://www.acer.com/corporate/en | High | Cross-surface font/color occurrence and corporate narrative | Corporate presentation is not product UI evidence. |
| License | https://github.com/notofonts/noto-fonts/blob/main/LICENSE | High | Noto Sans SIL Open Font License boundary | Does not make Noto a proprietary Acer font or a universal Acer product family. |
| First-party narrative | https://www.acer.com/corporate/en/overview/milestones | High | Origin, Acer name, business evolution, sustainable-innovation era | Narrative only; no UI tokens. |
| First-party narrative | https://www.acer.com/corporate/en/ | High | Mission, global technology-company scope | Narrative only; no public design-system claim. |
| First-party narrative | https://news.acer.com/acer-unveils-conscious-technology-vision-to-help-tackle-climate-change | High | Conscious Technology direction | Do not map the statement to a green semantic UI token. |
| First-party narrative | https://www.acer.com/sustainability/uploads/files/shares/sustainability-report/2024_Acer_Sustainability_Report.pdf | High | Current sustainability/culture framing and executive statement | Narrative only; no visual token claim. |
| First-party narrative | https://www.acer.com/sustainability/uploads/files/shares/esg-governance/Standards_of_Business_Conduct_en.pdf | High | Human, progressive, curious values | Supports voice framing, not literal product microcopy. |

## Tier 2 cross-check attempts

| Service | Attempt | Result | Promotion decision |
|---|---|---|---|
| getdesign | https://getdesign.md/acer | Direct built-in web retrieval attempt could not open the URL through the available safe-fetch path. | No value imported. |
| refero | https://styles.refero.design/?q=Acer | Direct built-in web retrieval attempt could not open the URL through the available safe-fetch path. | No value imported. |

## Reconciliation decisions

- Retain the supplied capture’s distinct surfaces rather than treating the corporate, catalog, and regional home pages as one undocumented system.
- Promote only selector-backed static components: two `.agw-btn` CTA classes, `.card-feature`, and the observed `<select>`.
- Do not create a generic link-button token. The retained CTA anchors have measured `.agw-btn` primary/tertiary class semantics; other links and rows were not promoted.
- The packet records `interactionCount: 0`; interactive component `states` therefore says only that the default static baseline was observed. No hover, focus, pressed, disabled, checked, error, or transition value is supplied.
- Treat `Noto Sans` as live public-web use because the packet shows loaded FontFace-backed visible use. Keep `Noto Sans JP`, `Noto Sans TC`, and `Material Icons` declared-only; keep `acer-icons` as an icon asset rather than text typography.
- The supplied capture reports no unresolved conflict. Structured `conflicts: []`, the conflict matrix, and the DESIGN.md footer use the repository no-conflict form: `none`.

## Omitted as unknown

- Native Acer product UI and authenticated account, cart, checkout, support, or system-state patterns.
- Official public Acer design-system documentation and a component state contract.
- A proprietary Acer text font, universal radius scale, semantic success/error palette, shadow scale, motion duration, easing, and state values.
- Any Tier 2 token or component claim.
