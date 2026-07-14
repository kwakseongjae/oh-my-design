# Thumbtack Thumbprint (`thumbtack`) — Research Ledger

Date: 2026-07-13
Mode: CREATE
Raw visual evidence: `artifacts/reference-evidence/thumbtack.json` only

## Confidence summary

| Area | Confidence | Basis | Boundary |
|---|---|---|---|
| Public Thumbprint colors, typography metrics, spacing, radii, and component geometry | High where promoted | Supplied deterministic computed-style packet across three official public Thumbprint URLs | Documentation-system routes at 1440x900 only |
| Rise UI family | High | Visible computed family + loaded/high FontFace + 358 uses + Thumbtack-hosted WOFF/WOFF2 records | No permission to copy, rehost, or substitute the font |
| Documentation primary button | High | Selector-backed `<button>` on Button v2 documentation with six occurrences | Default geometry plus separate static disabled specimen; no interaction transition |
| Global search | High | Selector-backed `<input type=search role=combobox>` on all three supplied routes | Default geometry only; no focus, error, or input event |
| Documentation list row | High | Selector-backed static `<li>` on Button v2 documentation | Content-row geometry only; no row action semantics |
| Product/company evolution and stakeholder context | High | First-party press and careers sources | Narrative and philosophy only, never machine CSS tokens |
| Source Code Pro / system-ui | High as non-UI-family evidence | Declared-only and system classification in supplied packet | Not a Rise fallback or brand fact |
| Public Rise license | Absent | No standalone first-party public license found in the permitted discovery pass | Do not infer reuse rights from a served WOFF2 |
| Tier 2 corroboration | Absent | Both required direct built-in-web attempts produced no parsed result | No values used; no absence claim |

## Source ledger

| Tier | Evidence class / domain | URL | Outcome and permitted use |
|---|---|---|---|
| Tier 1 | Product surface, supplied packet | `https://thumbprint.design/` | Home computed styles, public CTA, search input, Rise body type, and spacing/radius measurements. |
| Tier 1 | Official documentation, supplied packet | `https://thumbprint.design/components/button/v2/react` | Button v2 examples, static disabled specimen, documentation list row, and heading measurements. |
| Tier 1 | Product surface, supplied packet | `https://thumbprint.design/tokens` | Public token-doc body, list, and navigation samples. |
| Tier 1 | Official documentation | `https://thumbprint.thumbtack.com/guidelines/typography` | Rise family, weights, and documented type-scale context. No computed token is copied from search prose. |
| Tier 1 | Official documentation | `https://thumbprint.thumbtack.com/overview/product-design` | Official product-use statement for Rise and the documented design-system context. |
| Tier 1 | Brand asset | `https://fonts.thumbtack.com/thumbtack-rise/v10/ThumbtackRiseVF.woff2` | Official browser-served Rise font asset corroborating the packet’s FontFace result. No reuse license implied. |
| Tier 1 | Official document | `https://press.thumbtack.com/announcements/thumbtack-introduces-ai-powered-experience-to-reinvent-how-homeowners-care-for-their-homes/` | Current AI-guided home-care evolution, project-start model, matching, and confidence framing for §§1 and 10–12. |
| Tier 1 | Official document | `https://press.thumbtack.com/announcements/thumbtack-reveals-tremendous-growth-helping-millions-people-accomplish-their-personal-projects-30m-funding-sequoia-tiger-global-management/` | 2008 history and original customer/pro marketplace flow for §11. |
| Tier 1 | Official document | `https://careers.thumbtack.com/` | Homeowner peace-of-mind and small-business-growth stakeholder framing for §§10–13. |
| Tier 2 | getdesign | `https://getdesign.md/thumbtack` | Direct built-in-web attempt returned no parsed result; no record or token used. |
| Tier 2 | Refero | `https://styles.refero.design/?q=thumbtack` | Direct built-in-web attempt returned no parsed result; no record or token used. |

## Evidence decisions

- **Domain separation:** public Thumbprint design-system values alone back `tokens`. Marketplace, corporate, careers, press, and AI-product-evolution facts are narrative context, never color or component substitutes.
- **Font separation:** Rise is the only UI family promoted because it is both visible computed use and loaded/high. Source Code Pro is declared-only; system-ui is system-only. Neither is rendered as Rise.
- **Component selection:** the Button v2 primary example, home search input, and documentation list row each have a selector, a supplied surface, and measured static geometry. The link-like or row-like observations are not called buttons unless their tag/role supports that classification.
- **Interaction boundary:** zero interaction records removes unobserved dynamic states only. It retains static button, input, and list measurements. The one captured disabled button is reported only as a separate static specimen, with no timing or transition claim.
- **Conflict resolution:** the packet reports no unresolved conflict. Tier 2 was unavailable rather than contradictory, so `verification_v2.conflicts` is `[]` and the footer’s exact resolution is `none`.
- **Unknown-means-absent:** no focus ring, hover, pressed state, product-app card, mobile breakpoint, motion curve, public font license, or marketplace-wide color role is emitted without evidence.
