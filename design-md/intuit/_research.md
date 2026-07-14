# Intuit QuickBooks — Research Ledger

**Created:** 2026-07-13
**Reference id:** `intuit`
**Method boundary:** Raw CSS, fonts, component observations, and interaction counts come only from `artifacts/reference-evidence/intuit.json`. This ledger records separate web research for first-party context and Tier 2 attempts; it does not add raw UI facts.

## Confidence summary

| Area | Confidence | Basis | Boundary |
|---|---|---|---|
| Loaded UI family | High | Supplied FontFaceSet-backed `Avenir Next forINTUIT`, 203 uses, 48 source URLs; official QuickBooks typography agrees on the family. | Exact token spelling follows the supplied loaded record. |
| Public colors and geometry | High where tokenized | Repeated computed values and named selectors on supplied brand/product surfaces. | No official color-card value or image-only scale is converted into a token. |
| Global navigation button | High | Supplied `div[role=button]` with exact default geometry and computed styles. | No state behavior: interaction count is zero. |
| Public product expression | Medium | One selector-backed 52px outlined action on the product-expression route. | Kept as contextual measured evidence, not a second generic component token. |
| Company and brand narrative | High | First-party Intuit and QuickBooks pages. | Narrative never substitutes for product/app CSS evidence. |
| Font licensing | Unresolved | Official resource page identifies an SSO-controlled library but no public licence terms were retrieved. | No licence claim or redistribution permission is asserted. |
| Tier 2 corroboration | None | Both requested attempts were made but built-in web safe-open rejected both URLs. | No Tier 2 value is used. |

## Source ledger

| Tier/domain | URL | Date | Result | Permitted use |
|---|---|---:|---|---|
| Tier 1 — raw official documentation surface | https://design.intuit.com/quickbooks/brand/ | 2026-07-13 | Supplied capture `home`; 1440×900 | Selector-backed brand-hub colors, typography, navigation geometry, and raw proof. |
| Tier 1 — raw product-expression surface | https://design.intuit.com/quickbooks/product/ | 2026-07-13 | Supplied capture `surface-2`; 1440×900 | Selector-backed local outlined-action values and raw proof. |
| Tier 1 — raw authentication surface | https://federation.intuit.com/as/authorization.oauth2?scope=openid+profile+email&response_type=code&redirect_uri=https%3A%2F%2Fpartnerauth.platform.intuit.com%2Fexternal_partner%2Fintuit_eiam%2Fcallback&client_id=9d678f82-f00e-4e8f-875e-484cac84cbc1&state=awb.228bcc57-93dd-4b7c-8691-6e252452f1e8 | 2026-07-13 | Supplied capture `surface-3` | Domain-separated declared/system font record only; no QuickBooks brand token promotion. |
| Tier 1 — QuickBooks brand | https://design.intuit.com/quickbooks/brand/ | 2026-07-14 | Official hub says it champions small businesses and documents brand expression. | §1, §11, §12 narrative context. |
| Tier 1 — QuickBooks type | https://design.intuit.com/quickbooks/brand/design-foundations/type/ | 2026-07-14 | Official primary font, hierarchy, case, emphasis, and 4px-grid guidance. | §3 and §7/§10 content guidance; official product-use corroboration. |
| Tier 1 — QuickBooks resources | https://design.intuit.com/quickbooks/resources/ | 2026-07-14 | Official asset/resource listing; SSO required. | Asset-access and licence boundary only. |
| Tier 1 — Intuit history | https://www.intuit.com/company/origins/ | 2026-07-14 | 1983 founding, customer-problem focus, DOS→web→mobile→cloud→AI evolution. | §1 and §11 company context only. |
| Tier 1 — Intuit culture | https://www.intuit.com/company/operating-values/ | 2026-07-14 | Customer obsession, integrity, courage, collaboration, community care. | §12–13 principle context only. |
| Tier 2 — getdesign | https://getdesign.md/intuit | 2026-07-14 | Attempted with built-in web; safe-open rejected URL as unsafe. | None. |
| Tier 2 — refero | https://styles.refero.design/?q=intuit | 2026-07-14 | Attempted with built-in web; safe-open rejected URL as unsafe. | None. |

## Reconciliation decision

The evidence packet has no reported unresolved conflict. The graph therefore uses `conflicts: []`, and the canonical footer records the repository-standard exact form: `**Conflicts unresolved:** none`. Marketing/brand documentation, public product expression, and authentication remain distinct domains. The sole promoted component is the role-backed default global-navigation button; it remains present despite zero interaction coverage because its default static geometry is directly measured.
