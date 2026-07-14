# SoftBank CREATE research ledger — 2026-07-13

## Confidence summary

| Area | Confidence | Decision |
|---|---|---|
| Public-surface scope | High | Three supplied, brand-owned public captures; score 71. |
| Foreground and canvas | High | `#333333` and `#ffffff` repeat across all three surfaces. |
| Corporate body metrics | High | `surface-3::body` provides 16px / 400 / 24px. |
| Enterprise heading metrics | High | Repeated `surface-2::h2` provides 32px / 700 / 43.2px. |
| Font family | Unresolved | Meiryo-led computed stack has no loaded match; omit UI-family token. |
| Global navigation list item | High | Static `li`, selector/class-backed, 12 occurrences across two surfaces. |
| Interactive states | Absent | Packet reports zero interactions and zero observed states; publish no hover/focus/pressed/disabled/error values. |
| Official brand narrative | High | First-party company history, Group identity, strategy, and trademark sources. |
| Tier 2 corroboration | Absent, non-conflicting | Both required attempts returned no SoftBank-specific record. |

## Source ledger

| Source | Domain | What it supports | What it does not support |
|---|---|---|---|
| `artifacts/reference-evidence/softbank.json` | Raw public computed evidence | Surface scope, raw colors/metrics, font status, components, zero interaction count | Company history, logo meaning, font licence, uninspected product UI |
| https://www.softbank.jp/ | Consumer marketing | Tier 1 home surface and raw measured components | Authenticated mobile product or account UI |
| https://www.softbank.jp/biz/about/ai/ | Enterprise marketing | Tier 1 AI surface, h2 metrics, shared navigation list item | General consumer-app component system |
| https://www.softbank.jp/corp/aboutus/governance/security/ | Corporate governance | Tier 1 body metrics, shared navigation list item, utility control proof | Mobile or enterprise workflow behaviour |
| https://www.softbank.jp/en/corp/aboutus/profile/ | Official corporate | Business scope and company context | Visual token values |
| https://www.softbank.jp/en/corp/aboutus/profile/history/ | Official corporate | Operating-company history and 2006/2015 milestones | UI style or product-font use |
| https://group.softbank/en/philosophy/identity | Official Group identity | Logo origin, silver/Mincho identity context, Information Revolution narrative | UI-family, product-token, or font-license proof |
| https://www.softbank.jp/en/corp/ir/policy/strategy/ | Official corporate strategy | Current “Activate AI for Society” direction | Component or interaction evidence |
| https://www.softbank.jp/corp/aboutus/governance/intellectual-property/trademark/ | Official trademark policy | Mark ownership and multi-brand boundary | Licence to redistribute assets or a webfont |
| https://getdesign.md/softbank | Tier 2 attempt | Attempt recorded; no SoftBank-specific record returned | Token corroboration |
| https://styles.refero.design/?q=softbank | Tier 2 attempt | Attempt recorded; no SoftBank-specific record returned | Token corroboration |

## Reconciliation notes

- The official Group identity page names silver and a Mincho typeface for the logo. Those are retained as narrative identity facts, but neither becomes a UI color/font token because the supplied public computed evidence does not establish that mapping.
- The raw packet has `Meiryo` in 879 computed uses but explicitly labels it unresolved. Numeric body and heading values can remain selector-backed facts without promoting the unresolved family or a system fallback.
- The preflight’s 40 variants includes many controls, but `interactionCount: 0` means no button, input, tab, or toggle state can be truthfully summarized. Static default component geometry remains valid raw evidence.
- The static global-navigation `li` is high confidence and selector-backed on more than one surface. It is mapped to `listItem`, not button, because no button semantics are evidenced for that element.
- No unresolved conflict is reported by the evidence packet. Tier 2 noncoverage is treated as absent corroboration, not a conflict.
