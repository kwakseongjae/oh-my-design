# Woori Bank (`wooribank`) — Research Ledger

Created: 2026-07-14
Mode: OmD CREATE
Raw visual evidence: `artifacts/reference-evidence/wooribank.json` only

## Confidence summary

| Area | Confidence | Basis | Boundary |
|---|---|---|---|
| Official corporate identity colors and dawn-symbol meaning | High | First-party CI page gives exact RGB values and symbol explanation | Brand asset guidance; not a public-bank control library |
| Public desktop neutral colors, typography metrics, geometry, and static defaults | High for recorded values | Supplied deterministic computed-style artifact; 3 surfaces, score 81 | Public desktop routes only; no auth/native/mobile/interactions |
| Named UI font family | None promoted | Visible stacks lack matching loaded FontFace; named Noto fonts are declared-zero-use | No fallback or system font may stand in as a Woori family |
| Corporate lineage and current direction | High | First-party history, museum, vision/value, and ESG pages | Narrative context, not UI tokens |
| Tier 2 corroboration | None | getdesign and Refero attempts/searches yielded no usable Woori Bank record | No Tier 2 numeric/component value promoted |

## Source ledger

| Tier | Source | Date accessed | Confidence | Facts used | Evidence boundary |
|---|---|---:|---|---|---|
| Raw Tier 1 | `artifacts/reference-evidence/wooribank.json` | 2026-07-14 | High for contained observations | 3 public routes; computed values; FontFace inventory; static component samples; 0 interaction records | The only source for computed style, font status, component values, and interaction evidence |
| Tier 1 | https://www.wooribank.com/ | 2026-07-13 capture | High | Public home h1/nav neutral chrome and NotoSans computed declaration | Does not establish loaded font family or authenticated banking UI |
| Tier 1 | https://spot.wooribank.com/pot/Dream?withyou=PODEP0001 | 2026-07-13 capture | High | Legacy utility control/input samples | Does not establish product-wide components or interaction states |
| Tier 1 | https://spot.wooribank.com/pot/Dream?withyou=ln | 2026-07-13 capture | High | Legacy text input sample | One route; medium-confidence component detection |
| Tier 1 | https://spot.wooribank.com/pot/Dream?withyou=BPBKI0056 | 2026-07-14 | High | Dawn symbol; `#0067AC`, `#20C4F4`, `#0083CA`; CI usage boundary | Corporate CI assets, not product CSS |
| Tier 1 | https://spot.wooribank.com/pot/Dream?withyou=BPBKI0084 | 2026-07-14 | High | Published historical “firsts” and present innovation framing | Corporate narrative only |
| Tier 1 | https://spot.wooribank.com/pot/Dream?withyou=HMMUM0024 | 2026-07-14 | High | 1899 Daehancheonil Bank predecessor context | Museum/history narrative only |
| Tier 1 | https://spot.wooribank.com/pot/Dream?withyou=BPBKI0049 | 2026-07-14 | High | Vision, slogan, and four core values | Voice/principles context only |
| Tier 1 | https://spot.wooribank.com/pot/Dream?withyou=BPPCT0068 | 2026-07-14 | High | ESG vision, long-term direction, transparency/inclusion context | ESG narrative only |
| Tier 2 attempt | https://getdesign.md/wooribank | 2026-07-14 | None | Attempt recorded | Built-in open failed; search had no Woori Bank record; no value used |
| Tier 2 attempt | https://styles.refero.design/?q=wooribank | 2026-07-14 | None | Attempt recorded | Built-in open failed; search had no Woori Bank record; no value used |

## Font and licence ledger

| Family | Artifact status | Source / licence evidence | Decision |
|---|---|---|---|
| `NotoSans` / `Noto Sans KR` | Computed `NotoSans` is unresolved; `Noto Sans KR` is declared with zero visible uses | Google Fonts URLs occur only in the supplied artifact; no official Woori Bank font/usage statement found | Not a UI-family token; no specimen/substitution |
| 맑은 고딕 / `Malgun Gothic` | Unresolved computed stack, 306 uses | No loaded FontFace or official Woori Bank deployment/licence source in the artifact/research | Not a Woori Bank font token |
| `Noto Sans CJK KR` | Declared, zero visible uses, 12 first-party font files | First-party font-source URLs are evidence of declaration, not visible use or a licensing grant | Declared-only; excluded |
| `Roboto` | System, zero visible uses | Two first-party source URLs in artifact, but no product-use statement | System only; excluded |
| 돋움 / `dotum` / Arial | Unresolved or system computed context | No official brand font evidence | Excluded |

## Research decisions

- Use the official CI palette for `primary_color` and asset-color tokens, with distinct claim provenance.
- Use the supplied artifact’s repeated white/black/gray values for public web tokens; do not convert a single low-confidence blue or green fill into a brand/product color.
- Omit a named typography-family token because the strict visible-computed → loaded FontFace → source chain is incomplete.
- Promote only the selector-backed static native text input into `tokens.components`; do not promote generic detector categories, anchors/rows as buttons, or unobserved states.
- Preserve the corporate history, vision, and ESG material in narrative sections while keeping it outside computed-style claims.
