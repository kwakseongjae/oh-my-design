# 中華航空 — CREATE Research Ledger

**Reference:** `china-airlines`
**Created:** 2026-07-13
**Mode:** `omd:add-reference CREATE`
**Raw UI-evidence authority:** `artifacts/reference-evidence/china-airlines.json` only

## Confidence summary

| Area | Confidence | Basis | Boundary |
|---|---|---|---|
| Public-web color, geometry, and type metrics | High | Supplied deterministic computed-style packet: 3 surfaces, score 100, 67 variants | One desktop viewport; no mobile/authenticated-product extrapolation |
| Promoted components | High | Selector/surface-backed action, selected option, and dialog plus 9 interaction captures | Only default/menu-open/dialog-open summary is retained; absent states remain absent |
| Brand UI font family | Unresolved / omitted | Roboto is explicitly classified `system`; Noto families have zero visible use | No fallback or declared face is treated as a brand font |
| Company history and current direction | High | Official company profile and official sustainability vision | Narrative only, not UI-token evidence |
| Cabin design expression | High for the cabin narrative | Official China Airlines design-story page | Separate cabin/brand domain; not used as public-web token evidence |
| Brand assets / font distribution | Unresolved | Official Brand Center was login-gated | Do not infer downloadable assets or guidelines |
| Tier 2 corroboration | Unavailable | Both prescribed URLs were attempted in built-in search/open | No negative catalog claim; no Tier 2 value used |

## Tier 1 UI evidence ledger

| ID | URL | Domain | Evidence used |
|---|---|---|---|
| `home-live` | https://www.china-airlines.com/kr/ko | Public passenger web | Colors, controls, selected option, dialog, computed type metrics |
| `about-live` | https://www.china-airlines.com/kr/ko/about-china-airlines/about-us | Corporate public web | Repeated public action/control geometry only |
| `governance-live` | https://www.china-airlines.com/kr/ko/about-china-airlines/corporate-governance | Corporate public web | Repeated public action/control geometry only |

Raw packet observations retained in canonical claims:

- Blue public action: `#23569d`, white text, 8px radius, `0px 20px` padding, 56px high, 16px/500.
- Selected option: white fill, `#23569d` text, 8px radius, `0px 12px` padding, 48px high, 16px/500, `aria-selected=true`.
- Search dialog: white surface, 20px radius, measured layered ink shadow.
- Nine interactions: two menu captures and one dialog capture per surface; no timing/easing values.

## First-party company, product, and design context ledger

| Source | Confidence | Facts used | Evidence boundary |
|---|---|---|---|
| https://www.china-airlines.com/nz/en/about-china-airlines/about-us/organization.html | High | Founded 16 December 1959 | Company history only |
| https://calec.china-airlines.com/csr/en/aboutus.html | High | 2024 refresh of vision/mission/value; safe/reliable/efficient service; sustainability direction | Brand narrative and philosophy only |
| https://www.china-airlines.com/it/en/about-us/design-story | High | Oriental aesthetics, local inspirations, home-away-from-home, warm blessings; persimmon/Song-dynasty cabin context | Cabin-design narrative only; no web-token promotion |
| https://brandcenter.china-airlines.com/ | Low for assets, high for portal existence | Official Brand Center login wall | No asset, logo-use, typography, or license fact used |

## Font and license ledger

| Source | Confidence | Facts used | Boundary |
|---|---|---|---|
| Raw packet `fonts[]` | High | Roboto system status, 1,161 uses; Noto and swiper declarations at zero visible use | Computed use without brand-family promotion |
| https://github.com/googlefonts/roboto-2/blob/main/LICENSE | High | Roboto project Apache-2.0 license context | Third-party font license, not China Airlines asset permission |
| https://notofonts.github.io/noto-docs/website/use/ | High | Noto OFL license context | Declared-only font context, not visible product/brand use |

## Tier 2 attempt ledger

| Source | Result | Token effect |
|---|---|---|
| https://getdesign.md/china-airlines | Direct built-in open attempt returned a non-retryable safe-open error | None |
| https://styles.refero.design/?q=China%20Airlines | Direct built-in open attempt returned a non-retryable safe-open error | None |

## Reconciliation decisions

1. **Retain observed static geometry.** The 67-variant preflight is satisfied by three selector/surface-backed canonical components, including a default button. Interaction evidence enriches only menu/dialog state summaries.
2. **No fallback font claim.** Roboto is a measured system stack, not a China Airlines UI family; Noto faces are declared-only. The reference retains measured typography geometry without a family token.
3. **Keep domains separate.** Passenger/corporate public-web evidence supplies tokens. Official cabin and sustainability material supplies narrative context. A login-gated brand portal and third-party licenses supply only their stated boundaries.
4. **No Tier 2 synthesis.** Both required attempts were made but yielded no usable record. The conflict summary is exactly `none` because there is no competing value to resolve.
