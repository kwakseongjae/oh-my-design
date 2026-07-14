# Zendesk Garden — Research Source Map

**Brand:** Zendesk Garden
**Site:** https://garden.zendesk.com/
**Created:** 2026-07-13
**Mode:** `omd:add-reference` CREATE

## Confidence summary

| Area | Confidence | Basis and boundary |
|---|---|---|
| Static documentation tokens | High | Three supplied public Garden surfaces, selector-backed computed styles, 70 coverage score. |
| Primary/icon button and sidebar-list geometry | High | Native-button or static-`li` representative selectors in the supplied packet; 43 static variants total. |
| Color-role context | High | Official Garden Palette plus matching supplied computed values. Official semantics do not replace packet provenance. |
| Typography family | High confidence in absence | The packet has one system-ui stack with no served source; no official product-family assignment or license was found. A Zendesk font token is omitted. |
| Interaction states | High confidence in absence | `interactionCount: 0` and `interactionKinds: 0`; only defaults remain. |
| Corporate/current-evolution narrative | High | First-party Zendesk company, Garden, and support-announcement pages. These are narrative context, not CSS-token evidence. |
| Tier 2 cross-check | Attempt recorded | Both mandated endpoints returned built-in open internal errors; neither is used as evidence or as an absence conclusion. |

## Tier 1 — supplied computed-style evidence (primary for tokens)

| Surface | Source class | Evidence role | Date |
|---|---|---|---|
| `https://garden.zendesk.com/` | product-surface | Home header, h1, system-stack, color and shape observations | 2026-07-13 |
| `https://garden.zendesk.com/components/button` | official-doc | Native button/icon button/list-item measurements and documentation heading | 2026-07-13 |
| `https://garden.zendesk.com/design/color` | product-surface | Cross-route color observations and documentation chrome | 2026-07-13 |

Artifact: `artifacts/reference-evidence/zendesk.json`, captured at `2026-07-13T15:03:36.575Z` by `playwright_cli`. It reports 3 surfaces, 43 component variants, 3 classified component types, 1 observed static state, and 0 interaction kinds / interactions. Per task instruction, it is the sole raw computed-style, font, component, and interaction source.

## First-party context and design sources

| Source | Confidence | Usable facts | Evidence boundary |
|---|---|---|---|
| https://garden.zendesk.com/ | High | Garden is Zendesk’s design system and source of truth; the site is an evolving shared library across design, content strategy, and engineering; Garden 9 is current. | Product/design-system narrative and source domain, not a replacement for raw token proof. |
| https://garden.zendesk.com/design/palette/ | High | Garden separates UI and brand palettes; UI colors serve structure, actions, and validation; named palette values match several captured colors. | Semantic/narrative color context; only supplied computed values become tokens. |
| https://garden.zendesk.com/components/typography/ | High | Garden documents type components and a scale. | Does not name a verified Zendesk UI family in this pass. |
| https://garden.zendesk.com/patterns/loaders/ | High | Garden distinguishes skeleton, spinner, dots, progress, and inline loaders by task. | Purpose-level states guidance; no loader CSS/motion token is promoted. |
| https://www.zendesk.com/company/ | High | Zendesk frames its mission around simplifying business complexity and customer connections; it tells a kitchen-table origin story. | Company narrative only; do not populate Garden CSS tokens. |
| https://support.zendesk.com/hc/en-us/articles/9850316391322-Announcing-an-updated-look-to-the-team-member-and-end-user-sign-in-experiences | High | In 2025 Zendesk announced a modernized sign-in presentation aligned to current UI frameworks and brand standards. | Current-evolution narrative only; no sign-in CSS is imported. |
| https://github.com/zendeskgarden | High | Official Garden organization/brand-asset domain. | No package, font, token, or license is inferred without supplied evidence. |

## Font and license research

The supplied packet’s `fonts` array contains only a high-confidence `system-ui` operating-system stack (733 uses) and `fontOrLicenseUrls` is empty. Garden’s official Typography documentation was inspected as an official design source; it documents components but did not supply a first-party named UI-family assignment or font license in this pass. The official Garden GitHub organization was also checked as a brand-asset source. No font asset, external license, declared-only face, or Zendesk product-font claim is added. This is an absence at the font-family boundary only; the measured size/weight/line-height siblings remain documented.

## Tier 2 attempts

| Source | Result | Date |
|---|---|---|
| https://getdesign.md/zendesk | Built-in web open attempted; returned an internal error. No token or absence claim taken from it. | 2026-07-13 |
| https://styles.refero.design/?q=zendesk | Built-in web open attempted; returned an internal error. No token or absence claim taken from it. | 2026-07-13 |

## Reconciliation

The official Garden palette is consistent with captured `#1f73b7`, `#293239`, `#5c6970`, `#b0b8be`, `#4eab89`, and `#cd3642`, so it adds only semantic names. The static native primary button, native icon button, and static sidebar `li` have direct selectors and truthful semantics, so they are promoted to `tokens.components`; link/anchor observations are not recast as buttons. No interactive component state is promoted because interactions are absent. No unresolved promoted-token conflict remains.

**Conflicts unresolved:** none.
