# 원스토어 — CREATE research ledger

Date: 2026-07-13 · Mode: CREATE · Canonical target: `web/references/onestore/`

## Evidence confidence

| Area | Confidence | Basis | Decision |
|---|---|---|---|
| Storefront canvas/foreground | High | Supplied computed-style artifact across five product surfaces | Retained as machine tokens with claim paths |
| `#2A1F60` background | Medium | Two supplied home-route background occurrences | Retained only as `brand-surface`; no CTA/semantic expansion |
| Storefront body metrics | High | Repeated supplied home computed-style samples | Retained without a brand font family |
| Storefront brand UI font | Unresolved | Only system stack is visibly used; no loaded brand FontFace/source | Omitted from `tokens.typography.family` |
| Developer button/input defaults | Medium | Selector-backed static samples on supplied developer portal | Retained as developer-surface components; state values omitted |
| Interaction/state system | Absent | `interactionCount: 0`, `observedStates: 0` | No hover/focus/pressed/disabled/error tokens |
| One Store Mobile Gothic family | High for distribution/use terms; unresolved for live product deployment | First-party font page and 2021 announcement | Kept in typography narrative only |
| Company history, mission, ecosystem | High | Three first-party corporate pages | Used only for narrative, principles, voice, and stakeholder context |

## Source ledger

### Tier 1 — supplied product-surface evidence

| URL | Domain | Confidence | Used for |
|---|---|---|---|
| https://m.onestore.co.kr/ | Consumer storefront | High | Computed canvas/foreground/body metrics; limited `#2A1F60` background; list-item samples |
| https://m.onestore.co.kr/v2/ko-kr/game | Consumer storefront | High | Product-surface coverage; foreground/canvas corroboration only |
| https://m.onestore.co.kr/v2/ko-kr/about/oneplay | Product information | High | Product-surface coverage; foreground/canvas corroboration only |
| https://m.onestore.co.kr/v2/ko-kr/app/0000117501/about | Consumer storefront | High | Product-surface coverage; foreground/canvas corroboration only |
| https://dev.onestore.net/dev | Developer product | High for supplied default samples | Static GeneralButton and LoginField default geometry; declared-only font inventory |

### Tier 1 — first-party context, assets, and licence/use boundary

| URL | Evidence class | Confidence | Used for | Boundary |
|---|---|---|---|---|
| https://www.onestorecorp.com/about/corp/ | Official company/product history | High | 2016 origin, platform positioning, current evolution, culture and voice | Not UI-token evidence |
| https://onestorecorp.com/sv/ccm/ | Official mission/customer commitment | High | Mission, customer-first principle, stakeholder frame | Not storefront microcopy or component evidence |
| https://onestorecorp.com/sv/fordev/ | Official developer-support material | High | Ecosystem/creator context | Not developer-portal component evidence |
| https://www.onestorecorp.com/brand/ | Brand asset | High | BI/CI/app-icon/badge context | Not marketplace palette or component evidence |
| https://www.onestorecorp.com/sv/fordev_font/ | Brand asset | High | Mobile Gothic Body/Title/POP descriptions and distribution | Not live product font-use evidence |
| https://onestorecorp.com/news/presskit/2021/2021-05-17.html | Licence/use announcement | High | Free commercial-use boundary for the three fonts | Not a loaded-font or product-use assertion |

### Tier 2 — both attempted

| URL | Result | Treatment |
|---|---|---|
| https://getdesign.md/onestore | Built-in web open returned an internal error; no usable record | Not used as a value source |
| https://styles.refero.design/?q=onestore | Built-in web open returned an internal error; no usable result/card | Not used as a value source |

## Reconciliation notes

- Product, developer, corporate, brand-asset, and font-licence evidence are intentionally kept separate.
- `Times`, `helvetica`, and `Arial` are not claimed as One Store brand fonts. Helvetica/Arial are documented as system-stack evidence only; Times is unresolved.
- `geistSans`, `geistMono`, and `notoSansKr` are declared-only from the developer portal and are not promoted.
- The preflight’s 53 component variants are preserved in the raw evidence packet. The canonical token set honestly caps at two static, selector-backed developer controls because interaction evidence is absent and no consumer component can be safely generalized.
- `verification_v2` uses only repository-valid source kinds: `product-surface`, `official-doc`, `brand-asset`, and `license`; its scalar-token claim paths are exactly the scalar leaves in `tokens`.
