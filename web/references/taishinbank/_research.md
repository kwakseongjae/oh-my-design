# Research ledger — 台新銀行 (`taishinbank`)

**Created:** 2026-07-14
**Canonical evidence date:** 2026-07-13
**Mode:** CREATE
**Confidence posture:** high for selector-backed Taishin public-route values and the promoted static investment card; medium-high for first-party company/product/evolution context; absent for a Taishin webfont, official font licence, authenticated banking UI, mobile app UI, general component-state system, and Tier 2 corroboration.

## Scope decision

The CREATE packet fixes the catalog identity: `taishinbank`, TW, fintech, https://www.taishinbank.com.tw/, and 台新銀行. `artifacts/reference-evidence/taishinbank.json` is the only raw computed-style, font, component, and interaction evidence. It contains two Taishin-owned public pages and one Lia-Roc association page. The external page is documented for complete provenance but cannot populate a Taishin brand, product, marketing, corporate, typography, component, or interaction claim.

No collector, browser raw-inspection flow, MCP, or computed-style rerun was used.

## Tier 1 — supplied product evidence

| Source | Confidence | What it supports | What it does not support |
|---|---|---|---|
| `https://www.taishinbank.com.tw/TSB/personal/` (`home`) | High for body colors/type metrics and raw navigation interaction facts | `#f9f9f9` page background; `#212529` foreground; 16px / 400 / 16px body metrics; one expanded menu and two selected-tab interaction records. | A Taishin font, universal primary color, global tab system, hover/focus/pressed values, or authenticated banking UI. |
| `https://www.taishinbank.com.tw/invst/product/` (`surface-2`) | High for raw body values; medium for repeated card classification | Same body background/foreground metrics; static `ts-comp-iFund-card` with transparent background, 1px `#e3e3e3`, 0px radius, 0px padding, 206px height, and no shadow. | Card interaction states, broader card scale, grid, or brand-wide component system. |
| `https://www.lia-roc.org.tw/list_article?article_content=163&menu_title=%E5%B8%B8%E7%94%A8%E5%8A%9F%E8%83%BD` (`surface-3`) | High as raw record; zero for Taishin attribution | The third packet snapshot exists and includes its own fonts/components/interactions. | Any Taishin fact. It is a separate domain and is excluded at the smallest boundary. |

### Font determination

`微軟正黑體` is unresolved/low confidence (367 bundle uses), `Noto Sans TC` is unresolved/low confidence (189), and `-apple-system` is a high-confidence operating-system stack (18). The packet contains no matching loaded FontFace source for the unresolved names. `slick` and `swiper-icons` are declared-only sources associated with the external snapshot. No official Taishin product-font statement, official distributed brand font, or licence document was located through the requested first-party search. Accordingly, `tokens.typography.family` is absent: measured size/weight/line-height siblings remain, but no font is substituted.

### Component determination

The preflight detects 66 variants. One static, selector/surface-backed Taishin component is promoted: `surface-2::div.ts-comp-iFund-card` (`card`, nine occurrences, medium confidence). Its fields are all represented in `tokens.components.investment-fund-card` and every field has a `verification_v2` claim path. The type is exactly `card`, an allowed component type. No inferred link/row is reclassified as a button.

### Interaction determination

The bundle has two interaction kinds and three records: one menu expansion and two tabs selected on the personal route. They remain raw interaction facts. The promoted card has no state record, so only its observed default geometry is carried forward. No card hover, focus, pressed, disabled, error, loading, success, dialog, toast, or authenticated state is invented.

## First-party context and brand evidence

| Source | Confidence | Fact retained | Domain boundary |
|---|---|---|---|
| [Taishin story](https://www.taishinbank.com.tw/TSB/about-taishin/brief-introduction-to-the-bank/taishin-story/index.html) | High | Official history says the bank opened in 1992 and documents its financial-holding and overseas-development milestones. | Corporate/company history, not a token source. |
| [Bank service introduction](https://www.taishinbank.com.tw/TSB/about-taishin/brief-introduction-to-the-bank/TSBankGridPage-000091-00002/) | High | Personal, family, business-owner, micro-enterprise, consumer, wealth, corporate, and digital-finance scope; customer-experience and digital-platform direction. | Product/context only; no visual claim extracted from prose. |
| [台新銀行 | Richart upgrade](https://www.taishinbank.com.tw/TSB/personal/common/news/TSBankNews-007654/) | High | The 2026 bank-brand upgrade uses Richart’s digital operations/marketing capabilities and names brand rebuilding, product upgrade, and industry innovation. | Current brand evolution, not Richart visual-token proof. |
| [Bank integration plan](https://web.taishinbank.com.tw/TSB/personal/common/news/TSBankNews-008090/) | High | Customer rights, stable service continuity, digital transformation, and risk management are stated integration priorities. | Time-sensitive organisational context only. |
| [Fair-treatment organisation](https://www.taishinbank.com.tw/TSB/fair-treatment/about/TSBankGridPage-000226/) | High | First-party fair-treatment governance and inclusive-financial-service culture. | Content/accessibility principle only; no WCAG or component evidence. |

## Official font and licence outcome

The requested first-party searches for type/font, font files, and visual/brand-identification materials did not produce an official Taishin font or licence source. This is an absence at the font-source boundary, not a reason to erase measured typography metrics. The research neither assigns a fallback nor treats the packet’s unresolved/declared family names as a bank-owned asset.

## Tier 2 attempts

| Service | URL/query | Result | Confidence/use |
|---|---|---|---|
| getdesign | https://getdesign.md/taishinbank | Built-in web open returned an internal error; `site:getdesign.md` search did not yield a Taishin-specific listing. | No evidence used. |
| Refero | https://styles.refero.design/?q=Taishin%20Bank | Built-in web open returned an internal error; Refero-domain search did not yield a Taishin-specific listing. | No evidence used. |

The two outcomes mean no record was retrievable in this turn. They do not assert a catalogue’s permanent absence.

## Reconciliation summary

- Tier 1 selector-backed Taishin values control every machine-readable token.
- The external Lia-Roc capture remains in the audit trail but is excluded from `verification_v2.sources`, token claims, palette, font conclusion, and component promotion.
- No unverified company, Richart, corporate, marketing, documentation, or font material is blended into the public-product visual tokens.
- The graph’s `sources.kind` values are only `product-surface` and `official-doc`; no Tier 2 or narrative link is encoded as a claim source.
- Tier 2 yielded no retrieved competing value. The conflict result is exactly `none`.
- Unknown values are omitted at their smallest boundaries: typography family, official font/licence, global spacing, general radius scale, general component set, all unobserved state values, grid/breakpoints, authenticated banking UI, native app UI, and brand-wide color claims.
