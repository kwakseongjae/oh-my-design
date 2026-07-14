# Sony — CREATE research ledger

Date: 2026-07-13
Packet: `artifacts/reference-create/runs/2026-07-13-sony/packet.md`
Raw style evidence: `artifacts/reference-evidence/sony.json`
Capture policy: supplied packet only; no browser recapture and no MCP used.

## Confidence summary

| Area | Confidence | Basis | Boundary |
|---|---|---|---|
| Public header navigation link | High | Repeated, selector-backed anchor sample on all three supplied surfaces | A link/list item, not proof of a button or app navigation control. |
| Public catalog title and lead typography | High | Direct `m-h1` and `m-text-lead` computed-style samples on products/electronics surfaces | Public catalog/editorial hierarchy only. |
| SST W20 Roman and Bold live use | High | Loaded FontFaceSet result plus computed use (725 / 56) | No public font source URL or redistribution right in packet. |
| Sony history, Purpose, values, and 2021 evolution | High | First-party Group history, Purpose, and corporate-blog pages | Narrative/corporate context, not token evidence. |
| SST design intent and trademark boundary | High | First-party Sony Design SST story | Does not grant a public license or prove every product/runtime use. |
| Tier 2 reconciliation | No value | Both required attempts returned Internal Error | No absence determination and no Tier 2 token imported. |

## Source ledger

| Tier | URL | Kind | Result used | Confidence |
|---|---|---|---|---|
| Tier 1 packet | `https://www.sony.com/en/` | Public corporate home / product-surface | Header link colors, geometry, SST W20 Roman live use; one dialog-open interaction boundary | High |
| Tier 1 packet | `https://www.sony.com/en/SonyInfo/products/` | Public product catalog / product-surface | White canvas; `m-h1` and `m-text-lead` computed type/color values | High |
| Tier 1 packet | `https://www.sony.com/en/SonyInfo/products/#electronics` | Public product catalog / product-surface | Corroborates catalog/header family; no additional token needed | High |
| First party | `https://www.sony.com/en/SonyInfo/CorporateInfo/History/` | Official corporate history | 1946 origin, 1958 naming, founding prospectus context | High |
| First party | `https://www.sony.com/en/SonyInfo/CorporateInfo/purpose_and_values/` | Official corporate Purpose/values | Current Purpose and published values | High |
| First party | `https://www.sony.com/en/SonyInfo/blog/2021/04/08/` | Official corporate blog | 2021 management transition and current identity/direction context | High |
| First party | `https://www.sony.com/en/SonyInfo/design/stories/sst-font/` | Official design/font source | SST design intent, multilingual/legibility narrative, trademark boundary | High |
| First party | `https://www.sony.com/en/SonyInfo/Careers/message/index.html` | Official careers/culture source | Leadership/culture phrasing for narrative only | Medium |
| Tier 2 attempt | `https://getdesign.md/sony` | Independent directory | Built-in retrieval returned Internal Error; no value used | None |
| Tier 2 attempt | `https://styles.refero.design/?q=sony` | Independent directory search | Built-in retrieval returned Internal Error; no result card/value used | None |

## Reconciliation notes

- The raw packet is the sole source for computed styles, FontFaceSet status, components, and interaction evidence.
- All captured URLs are public corporate/portal/catalog domains. They are kept separate from native devices, PlayStation, entertainment services, and authenticated Sony products.
- Loaded SST W20 Roman and Bold are preserved as public-surface facts; system, unresolved, and declared-only results are omitted at their own field boundary.
- The sole promoted component is an actual observed anchor, deliberately represented as `listItem`. The dialog interaction does not create a dialog token.
- Conflict summary: none. Tier 2 failed to return values, so it creates no conflicting competing claim.
