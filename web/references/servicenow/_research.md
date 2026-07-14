# Research ledger — ServiceNow Horizon

**Reference:** `servicenow`
**Prepared:** 2026-07-14
**Capture evidence date:** 2026-07-13
**Confidence policy:** high = direct supplied computed-style/FontFaceSet evidence or direct first-party statement; medium = first-party contextual support that does not establish a token; unavailable = source attempt failed and supplies no claim.

## Source ledger

| Tier | Source | Domain | Confidence | What it supports | What it cannot support |
|---|---|---|---|---|---|
| Tier 1 | https://horizon.servicenow.com/ | Product/design-system | High | Header navy, page-title typography, primary action, navigation trigger, live ServiceNowSans use. | Hover/focus/pressed/disabled states; universal product UI. |
| Tier 1 | https://horizon.servicenow.com/getting-started/about-horizon | Product/design-system | High | Horizon scope, creator audiences, type/body samples, link-card geometry. | An app-specific component system or responsive metrics. |
| Tier 1 | https://horizon.servicenow.com/workspace/components | Official documentation | High | Workspace page-link default geometry and component-page context. | Interaction states, because the packet records none. |
| Tier 1 | https://horizon.servicenow.com/getting-started/principles | Official documentation | High | Fluid, Symphonic, and Inspiring principle narrative. | Exact visual token values. |
| Tier 1 | https://horizon.servicenow.com/getting-started/whats-new | Official documentation | High | Winter 2025 ServiceNow Sans update; Spring 2026 AI/accessibility/mobile/library evolution. | A visual replacement for the supplied capture. |
| Context | https://www.servicenow.com/company/leadership/frederic-luddy.html | Corporate | High | 2004 founding, original work-simplification intent. | Token, component, font, or interaction facts. |
| Context | https://www.servicenow.com/workflow/culture/making-world-work-better-everyone.html | Corporate/culture | Medium | Stated corporate purpose. | Product-surface or design-token evidence. |
| Tier 2 | https://getdesign.md/servicenow | Third-party catalog | Unavailable | Attempt recorded. | Any value or reconciliation outcome; built-in web open returned an internal fetch error. |
| Tier 2 | https://styles.refero.design/?q=servicenow | Third-party catalog | Unavailable | Search attempt recorded. | Any value or reconciliation outcome; built-in web open returned an internal fetch error. |

## Raw evidence summary

- Packet: `artifacts/reference-evidence/servicenow.json`.
- Preflight: 3 surfaces, coverage score 81, 57 component variants, 6 component classes.
- Loaded/high: `ServiceNowSans` (722 uses), `ServiceNowSansLight` (34), `ServiceNowSansBook` (18).
- Declared-only/zero-use faces are kept out of tokens: Font Awesome 7 Brands, Font Awesome 7 Pro, Lato, ServiceNow Sans Mono, and weight-named ServiceNow aliases.
- Interaction coverage is exactly zero. Static/default measurements remain documented; all interactive state claims are omitted.

## Reconciliation decision

Tier 2 produced no readable evidence, so there is no Tier 1/Tier 2 value conflict to resolve. The reference retains only the packet’s direct, selector-backed values and first-party narrative facts in their own domains. The conflict result is exactly `none`.
