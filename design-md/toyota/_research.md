# Toyota — CREATE research ledger

Date: 2026-07-13
Mode: `omd:add-reference CREATE`
Raw evidence boundary: `artifacts/reference-evidence/toyota.json` is the only computed-style, FontFace, component, and interaction source. No capture was rerun; no MCP was used.

## Confidence summary

| Area | Confidence | Basis | Boundary |
|---|---|---|---|
| Public Global surface count and coverage | High | Supplied deterministic packet: 3 surfaces, score 76, 29 component variants | Desktop 1440×900 only |
| `toyotatext_rg` public-web family | High | Loaded/high confidence, 248 visible uses, 20 Toyota-hosted font resources | Browser delivery is not a downstream licence |
| `#212121` foreground and `#034f6d` link | High | Repeated computed values across supplied Toyota Global routes | Roles are public Global-surface roles, not universal Toyota palette claims |
| `#ffffff` canvas/on-dark values | High | Measured Global-home content and footer/dark-area text | Does not establish a full neutral scale |
| Global-navigation list row | High | Repeated 80px `li.nav_text…` default capture across all three routes | Static default only; zero interaction snapshots |
| Toyota-red primary, semantic status colors, buttons/cards/forms/tabs, responsive rules, motion | Absent | No Toyota selector-level evidence in packet | Omitted rather than inferred |
| Company history, philosophy, TPS, current mobility direction | High | First-party Toyota Global history, philosophy, TPS, and mobility pages | Narrative only; not promoted to UI tokens |
| Tier 2 editorial corroboration | None | getdesign and Refero attempts both returned internal errors | No Tier 2 value used |

## Source ledger

| Tier / domain | URL | What it supports | What it does not support |
|---|---|---|---|
| Tier 1 / product surface | https://global.toyota/en/ | Computed Global-home body, heading, link, canvas/on-dark, and navigation observations | Dealer, account, vehicle HMI, or generic Toyota component system |
| Tier 1 / product surface | https://global.toyota/en/company/profile/production-sales-figures/?padid=ag478_from_header_menu | 36px/700 H1 and public company-page ToyotaText use | A universal display scale |
| Tier 1 / product surface | https://global.toyota/en/company/vision-and-philosophy/production-system/?padid=ag478_from_header_menu | Public company-philosophy typography corroboration | Interaction states or TPS-as-UI rules |
| Tier 1 / brand asset | https://global.toyota/fonts/toyotatext/toyotatext_rg.woff2 | Toyota-hosted resource corroborating loaded `toyotatext_rg` | Public downstream font licence |
| First-party context | https://global.toyota/en/company/trajectory-of-toyota/history/%26gt | Automotive history and 1937 establishment | UI tokens or component values |
| First-party context | https://global.toyota/en/company/vision-and-philosophy/philosophy/?bt_code=brand_google_pai | Toyoda Principles, mission, vision, and Toyota Way context | CSS/font/component claims |
| First-party context | https://global.toyota/en/company/vision-and-philosophy/production-system/?padid=ag478_from_header_menu | Jidoka, Just-in-Time, kaizen, human-centred work context | Product interaction-state claims |
| First-party context | https://global.toyota/en/mobility/?padid=ag478_from_header_menu | Current mobility-company transition framing | A new visual identity or application UI system |
| Tier 2 attempt | https://getdesign.md/toyota | Required attempt recorded | Returned internal error; no record used |
| Tier 2 attempt | https://styles.refero.design/?q=toyota | Required query attempt recorded | Returned internal error; no record used |

## Reconciliation decisions

- The packet’s high-frequency Cookiebot dialog/button/toggle records are vendor consent chrome. They remain raw proof but are excluded from Toyota components and tokens.
- The packet reports no interactions. The promoted component is therefore a static `listItem`, not a button/toggle/menu-state system. Its token preserves the measured default `#212121`, 0px radius, `25px 15px` padding, 80px height, and explicit no-state summary.
- `toyotatext_rg` is promoted from visible computed use backed by loaded FontFace and Toyota-hosted resources. `sans-serif` is a system family used in vendor chrome and is not substituted or promoted.
- `#034f6d` is retained as the observed deep-blue public-link role and frontmatter primary color because a primary-color schema field is required. It is not described as Toyota’s universal corporate color or a replacement for Toyota-red branding.
- No conflict remains after reconciliation because neither Tier 2 attempt produced a competing value. The canonical no-conflict form is `conflicts: []` and `**Conflicts unresolved:** none`.
