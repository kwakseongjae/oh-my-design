# U.S. Web Design System — Research Ledger

**Reference id:** `uswds`
**Created:** 2026-07-14
**Capture evidence date:** 2026-07-13
**Confidence:** high for the three supplied documentation surfaces and their static measurements; bounded for all other USWDS and agency surfaces.

## Scope and evidence boundaries

The only raw computed-style, font, component, and interaction evidence used is `artifacts/reference-evidence/uswds.json`. It contains three official surfaces at 1440×900, score 76, 50 component variants, and zero interaction records. No new browser capture or MCP call was run.

Product/system documentation, marketing/corporate history, licensing, and declared-only fonts are recorded separately below. They do not expand the frontmatter token graph unless the supplied evidence packet independently supports the token.

## Source ledger

| Tier | URL | Domain / class | Confidence | Used for |
|---|---|---|---|---|
| Tier 1 | https://designsystem.digital.gov/ | product-surface | High | Supplied computed styles: home canvas, header, search control, Public Sans use. |
| Tier 1 | https://designsystem.digital.gov/components/overview/ | official-doc | High | Supplied component/docs styles: side navigation, text input, outline control. |
| Tier 1 | https://designsystem.digital.gov/components/accordion/ | official-doc | High | Supplied accordion static baseline and vivid blue. |
| Tier 1 | https://designsystem.digital.gov/about/ | official-doc | High | Official 2015 origin, GSA maintenance, mission, vision, polestar, and community context. |
| Tier 1 | https://designsystem.digital.gov/components/typography/ | official-doc | High | Official readability rationale and included-typeface context. |
| Tier 1 | https://designsystem.digital.gov/design-tokens/typesetting/font/ | official-doc | High | Official role/type family configuration context. |
| Tier 1 | https://designsystem.digital.gov/about/website-policies-notices/ | license | High | GSA open-source and redistribution policy boundary. |
| Tier 2 attempt | https://getdesign.md/uswds | design-directory | Unavailable | Built-in web fetcher rejected this URL as unsafe to open on 2026-07-14. No token/result asserted. |
| Tier 2 attempt | https://styles.refero.design/?q=uswds | design-directory | Unavailable | Built-in web fetcher rejected this URL as unsafe to open on 2026-07-14. No match/absence asserted. |

## Font ledger

| Family | Evidence status | Boundary |
|---|---|---|
| Public Sans Web | Loaded/high; 841 observed uses; 18 first-party WOFF2 source URLs in the packet. | Promoted as the observed documentation UI family. Official typography documentation says Public Sans is open-source and maintained by the Design System. |
| Source Sans Pro Web | Loaded/high; 143 observed uses; 12 first-party WOFF2 source URLs in the packet. | Promoted only for the observed documentation form/input baseline. |
| Roboto Mono Web | Loaded/high; 6 observed uses; 10 first-party WOFF2 source URLs in the packet. | Kept as useful live evidence but not promoted to a token because no stable code-role specimen was selected. |
| Merriweather Web | Declared-only; zero visible uses; 8 first-party WOFF2 source URLs in the packet. | Retained as an official available typeface in prose only; not rendered or tokenized as current UI use. |

## Reconciliation decision

The supplied Tier 1 packet is authoritative for measured values. Tier 2 produced no usable result, therefore no Tier 1/Tier 2 value discrepancy exists. `verification_v2.conflicts` is an empty array and the canonical footer uses the repository-standard exact form: `**Conflicts unresolved:** none`.

## Omitted boundaries

- No hover, focus, pressed, disabled, checked, error, toast, dialog, tab, or toggle visual state: interaction count is zero.
- No universal agency product UI, native app UI, responsive breakpoint, motion, easing, or reduced-motion tokens.
- No inferred semantic success, warning, error, or active colors.
- No Merriweather specimen or fallback substitution.
