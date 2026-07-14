# Palantir Blueprint — CREATE research ledger

**Created:** 2026-07-14
**Canonical evidence date:** 2026-07-13
**Mode:** CREATE
**Confidence posture:** high for selector-backed public landing/Docs values and the static Docs card; high for the official project description and repository licence; medium for the connection from Palantir corporate culture to editorial voice; absent for a named text UI family, unobserved component states, mobile behavior, authenticated product UI, and Tier 2 corroboration.

## Method and evidence boundary

The packet fixes this reference’s identity: `palantir`, US, `developer-tools`, `https://blueprintjs.com/`, and **Palantir Blueprint**. `artifacts/reference-evidence/palantir.json` is the only raw computed-style, font, component, and interaction evidence used. It reports two distinct public surfaces, coverage score 63, twelve detected component variants, and one menu interaction. No browser capture was rerun and no MCP was used.

Built-in web search was used only for first-party product/company context, current product evolution, repository/font-license discovery, and the two Tier 2 attempts. It did not produce new computed values.

## Tier 1 — supplied product evidence

| Surface | Confidence | Supports | Does not support |
|---|---|---|---|
| https://blueprintjs.com/ (`home`) | High for recorded selectors | Dark `#111418` landing canvas, white title, minimal action geometry, `#2d72d2` filled action, 28px landing title metrics. | A universal dark app theme, a full button-state system, responsive behavior, or a named text family. |
| https://blueprintjs.com/docs/ (`surface-2`) | High for recorded selectors | `#1c2127` Docs text, 36px Docs heading, 16px body, `#215db0` welcome-card text, and the static card’s raw geometry/shadow. | A complete component catalogue, app-product behavior, or all Blueprint package theme variables. |

### Component decision

The detector reported 12 variants. `docs-welcome-card` is the sole structured component token because it has a selector-backed static `bp6-card` default with a documentation-surface source and measured background, foreground, radius, padding, height, shadow, and font metrics. Its type is exactly `card`.

The one interaction is a Docs version-menu expansion. It yields `expanded`/`menu-open` evidence for that one menu snapshot only. The interactive-looking landing and Docs actions have useful measured defaults, but no complete per-variant observed-state summary; they are retained in human evidence notes and omitted from `tokens.components` rather than generalized. The `menuitem` anchor is treated as a list-item observation, not button semantics.

### Font decision

The packet records `-apple-system` as a high-confidence system stack with 112 visible uses. It is not a proprietary or named Blueprint face, so no `tokens.typography.family` entry or fallback specimen is created. Typography metrics remain because they are independently measured.

The packet also records `blueprint-icons-16`, `blueprint-icons-20`, and `codicon` as declared-only `@font-face` records with zero visible uses. The official Docs confirm the icon CSS loading requirement, and the official repository confirms Apache 2.0 for the project. Neither supports a text-family token or a redistribution assertion for every hosted asset.

## First-party context and official sources

| Source | Confidence | Fact retained | Boundary |
|---|---|---|---|
| [Blueprint landing](https://blueprintjs.com/) | High | Blueprint is an open-source project developed at Palantir. | Landing/product identity; not corporate or application-product evidence. |
| [Blueprint Docs](https://blueprintjs.com/docs/) | High | React toolkit, complex data-dense desktop-interface focus, v6.x availability, package-level component/icon documentation. | Official product context; supplied computed evidence controls numeric tokens. |
| [Official Blueprint repository](https://github.com/palantir/blueprint) | High | Official package inventory and the project’s Apache 2.0 statement. | Repository/licence context only; no inferred screen styles. |
| [Official project license](https://github.com/palantir/blueprint/blob/develop/LICENSE) | High | Apache License 2.0 text for the repository project. | Code/project licence, not a promise about all brand assets or browser-hosted files. |
| [Palantir company context](https://www.palantir.com/offerings/energy/) | High | Palantir’s stated 2003 origin and data/decision/operations framing. | Corporate narrative only; it supplies no Blueprint color, component, or typography token. |
| [Palantir values](https://www.palantir.com/careers/infrastructure) | High | “The Best Idea Wins,” ownership, and mission focus as culture context. | Voice/principle context only. |

## Tier 2 attempts

| Service | URL / query | Outcome | Use |
|---|---|---|---|
| getdesign | https://getdesign.md/palantir | Built-in web open returned an internal retrieval error on 2026-07-14. | No value used; no absence conclusion. |
| Refero | https://styles.refero.design/?q=Palantir%20Blueprint | Built-in web open returned an internal retrieval error on 2026-07-14. | No value used; no absence conclusion. |

## Reconciliation and confidence

### High

- Captured `#111418`, `#2d72d2`, `#ffffff`, `#1c2127`, `#5f6b7c`, `#215db0`; measured title/body metrics; 4/8/12/16/20px spacing observations; 0/4/30px radii; and the static Docs card default.
- Blueprint’s stated desktop/data-density focus, project ownership, component/icon documentation, v6.x availability, and Apache 2.0 project licence.

### Medium

- Editorial phrasing that Blueprint is “measured utility” or “task-first”: an interpretation of the captured product surfaces plus official documentation.
- Use of Palantir values to inform the prose layer. Those values are not converted into UI specifications.

### Absent / deliberately omitted

- Named Blueprint text-family token and live font specimen.
- Hover, focus, pressed, selected, disabled, required, error, loading, success, toast, dialog, animation, reduced-motion, mobile, breakpoint, grid, and authenticated-application claims.
- Unmeasured Blueprint package variables, component shapes, or Palantir proprietary-product UI facts.
- Tier 2 content and a Tier 2 absence claim.

## Final decision

The canonical reference is Verified v2-shaped with a strict claim graph: each scalar color, typography metric, spacing/radius/shadow value, and every field of the single static `card` component points to a supplied surface and source. `conflicts: []` and the footer’s exact `none` form are used because the supplied evidence packet reports no unresolved conflict and Tier 2 did not yield a competing value. The result preserves the useful observed static geometry while omitting unknowns at their smallest field or group boundary.
