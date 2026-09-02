# Naver Pay provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/naverpay/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | naverpay |
| name | Naver Pay |
| display_name_kr | 네이버페이 |
| country | KR |
| category | fintech |
| homepage | https://new.pay.naver.com/ |
| primary_color | `#09aa5c` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=pay.naver.com&sz=128` |
| verified | 2026-06-22 |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

Token note from source, quoted in full: "primary = live Green 500 (#09aa5c) from official bridge UI guide (developers.pay.naver.com/design/bridge); brand logo bg = Naver Pay Green (#00de5a) from logo guide. Merchant center main surface (admin.pay.naver.com) and official developer design guide are the two brand-owned Tier 1 sources. Web app (new.pay.naver.com) is fully login-gated — tokens from pre-auth surfaces and official design spec."

The source `DESIGN.md` carries no `verification_v2` block and no `ds.name` / `ds.url` / `ds.type` / `ds.description` field. None is invented here. Inside that one file the evidence record is the mid-file footer (**Verified** / **Tier 1 sources** / **Tier 2 sources** / **Conflicts unresolved**) plus the trailing HTML comment "OmD v0.1 Sources — Philosophy Layer (sections 10–15)", both transcribed below.

A sibling verification file sits beside the source: `web/references/naverpay/.verification.md`. Adoption stops at this ledger: no sibling-only value is promoted to a portable token.

### Dual and multiple destinations (E2a)

- `name` `Naver Pay` is dual: this identity ledger + the portable H1 `# Naver Pay Design System` and every portable sentence that names the company. `네이버페이` is likewise dual: this ledger + portable Experience Scope and Content & Locales, byte-for-byte. The Latin form never replaces the Korean form; it sits beside it at first mention (`Naver Pay (네이버페이)`).
- `display_name_kr` `네이버페이` is dual: this table + portable Scope (`display_name_kr`: 네이버페이).
- `primary_color` `#09aa5c` is multi-destination: this ledger + portable Scope, Distinctive traits, Principles, Application rules, Semantic color (`tokens.colors.primary`), Green Payment Button, Benefit Badge, and related rows. Catalog identity and `tokens.colors.primary` stay two writings of the same hex.
- `homepage` `https://new.pay.naver.com/` is dual: this ledger + portable Experience Scope, which names the login-gated web app as the YAML capture boundary.
- `logo` slug is dual: this ledger + portable Typography & Assets Assets, which carries the same URL and records it as a third-party favicon proxy rather than a captured first-party mark.
- `verified` `2026-06-22` is dual: this ledger/Freshness + the portable voice-sample live markers.
- `tokens.source: live-extract` and `tokens.extracted: 2026-06-22` stay in this ledger only.
- `components_harvested: true` is dual: this ledger + Proof notes below. It does not reach the portable body as a field name.
- `tokens.note` is dual: quoted in full above + its operative facts in portable Scope and Semantic color.
- `omd: "0.1"` is ledger-only.
- `nid.naver.com` is dual: portable Assets (sign-in button confirmation of `#09aa5c`) + this ledger's source-comment transcript.

## Canonical proof — sibling verification file

Adopted, not merely noted. Every field in this section is transcribed from the sibling file.

| Field | Value |
|---|---|
| sibling | `web/references/naverpay/.verification.md` |
| SHA-256 | `b9e5364e50055bfdc96184f36714c5f81d3ebc02495474174ca1fb6c51a155dc` |
| heading | `# Naver Pay — Verification Notes (2026-06-22)` |
| grade | `## Proof — Tier 1 live inspect` |
| inspected | 2026-06-22 |

**Method, quoted from the sibling:** "playwright getComputedStyle (live DOM) — global playwright (chromium, channel:chrome, headless), networkidle wait + 4s settle, then `getComputedStyle` on body, headings, buttons, cards, links; full DOM background/text color frequency scan."

**Sources, from the sibling:**

- https://admin.pay.naver.com/front/m/v2 — Naver Pay merchant center (brand-owned public pre-login surface)
- https://developers.pay.naver.com/design/bridge — Official Naver Pay bridge UI design spec (brand-owned developer design guide)
- https://developers.pay.naver.com/design/brand/logo — Official Naver Pay logo brand guide (brand-owned)

**Note on primary consumer surface, quoted:** "https://new.pay.naver.com/ redirects to Naver login wall — fully authentication-gated. All token extraction is from pre-login merchant center surface and official design spec. Tokens marked `(verified live)` are from live DOM; tokens from official spec are marked `(spec)`."

### Sibling-only values, recorded here and not promoted

The sibling measures the live DOM; the portable contract reconstructs the source `DESIGN.md`. A value present only in the sibling is a ledger entry and never a portable token.

- H1 "네이버페이 네이버페이센터": `font-family: Pretendard`; `font-size: 28px`; `font-weight: 700`; `color: rgb(0, 0, 0)` *(verified live admin.pay.naver.com)*. The source never records this H1 string or a 28px / 700 Pretendard heading role.
- body computed `font-family: Pretendard, -apple-system, "system-ui", helvetica, "Apple SD Gothic Neo", sans-serif`; `color: rgb(0, 0, 0)` (sibling note: "pure black used in some contexts"); `font-size: 14px`. The source family tokens are `NanumSquareNeo` and `Pretendard` without that fallback stack; the source Don't list forbids pure black (`#000000`) for body text. The stack and the body `#000000` stay here.
- Primary hero CTA padding measured `18px 0px`. The source YAML writes `18px 24px`; portable Components keep the YAML writing. The sibling `18px 0px` stays here.
- Link "내 사업에 맞는 가입 유형 확인하기": `font-size: 18px`; `font-weight: 500`. The source records the string and `#007eff`; it does not record 18px / 500 on that link.
- Guide card live background `rgb(238, 255, 242)` ≈ `#eefff2` versus spec `#eef9f3`. The sibling resolves spec as canonical; the source already uses `#eef9f3`. `#eefff2` stays here.
- BG frequency extra: `rgb(156, 169, 188)` ×4. No counterpart in the source colour token record.
- FG frequency extra: `rgb(9, 171, 73)` ×1; `rgb(0, 0, 0)` ×336.
- nav link "공지사항": `padding: 10px 12px 12px`. The source records nav 16px / 400 / `#767678` / 8px radius / 44px height; it does not record the label 공지사항 or that padding.
- Official spec uppercase writings in the sibling conflict matrix (`#09AA5C`, `#F6F8FA`, `#1E1E23`, `#DCDEE0`) corroborate the source HTML comment; portable Semantic color keeps those official uppercase writings beside YAML lowercase.

Each sibling-only string returns 0 from a literal grep of the portable body: `네이버페이 네이버페이센터` 0, `공지사항` 0, `18px 0px` 0, `#eefff2` 0, `rgb(156, 169, 188)` 0, `-apple-system` 0.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| footer **Verified** | 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect) |
| sibling inspected | 2026-06-22 |

Every date in the record is 2026-06-22; there is no freshness spread to reconcile.

**Conflicts unresolved (source footer):** none — core green palette cross-confirmed between merchant center live DOM and official bridge UI spec (`#09aa5c` = Green 500 in both); brand logo green (`#00de5a`) is separate from interactive green (`#09aa5c`) per official logo guide, not a conflict.

The sibling conflict matrix records a green-tint discrepancy (live `#eefff2` / spec `#eef9f3`) resolved in favor of spec as the authoritative source. That resolution is the sibling's; the portable body carries the source's `#eef9f3` and does not select the live variant.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| merchant-center | product-surface (public pre-login landing) | https://admin.pay.naver.com/front/m/v2 | 2026-06-22 |
| bridge-ui | official design spec | https://developers.pay.naver.com/design/bridge | 2026-06-22 |
| logo-guide | official logo guide | https://developers.pay.naver.com/design/brand/logo | 2026-06-22 |
| web-app | login-gated consumer web app | https://new.pay.naver.com/ | named; fully login-gated — not a computed token surface |

## Sources

### Tier 1

- https://admin.pay.naver.com/front/m/v2 (Naver Pay merchant center — brand-owned, pre-login public landing)
- https://developers.pay.naver.com/design/bridge (official Naver Pay bridge UI design spec)
- https://developers.pay.naver.com/design/brand/logo (official logo guide)

### Tier 2 (no usable record)

- getdesign.md/naverpay — not found (404)
- refero — no results for "naver pay"

These two hosts are failed lookups. They are not counted toward the KR brand-owned requirement. They are not named as product-domain gaps in the portable body (D1 / D1a).

### Source HTML comment — live inspect notes

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on:

- https://admin.pay.naver.com/front/m/v2
  - Hero H2 "매출을 만드는 가장 쉬운 방법" — NanumSquareNeo 42px/700/color #1e1e23
  - H3s "Npay 포인트 혜택으로 고객의 구매를 더 쉽게" etc — Pretendard 28px/600
  - Primary CTA "가맹점 가입하기" — bg #1e1e23 / 8px radius / NanumSquareNeo 20px/700
  - Secondary btn "로그인" — bg #ffffff / border 1px solid #dcdee0 / 6px radius
  - Cards — bg #f6f8fa / radius 20–28px / shadow none
  - Link color — rgb(0,126,255) = #007eff (merchant type link, "취급불가상품안내")
  - Color frequency: #f6f8fa ×13, #ffffff ×5, #1e1e23 ×2, #eef9f3 ×1
  - Nav font: Pretendard, 16px/400, color #767678
- https://developers.pay.naver.com/design/bridge
  - Official color palette confirmed: Green 500 = #09AA5C, Green 600 = #0B9552
  - Green tints: Green 100 = #EEF9F3, Green 200 = #E3F6ED
  - Grayscale 900 = #1E1E23 (primary dark), 800 = #404048, 700 = #767678, 500 = #AAAAAC, 250 = #DCDEE0
  - Surface/card colors: Grayscale 100 = #F6F8FA
  - Input field spec: default 1px #dcdee0 border, focus 1px #09aa5c border, error state documented
  - Button spec: primary 60% width / secondary 40% (payment completion flow)
  - box-shadow: none across all components
- https://developers.pay.naver.com/design/brand/logo
  - Logo background green = #00de5a (live DOM: rgb(0,222,90)) — brand logomark context ONLY
  - Naver green (secondary logo context) = #09aa5c (same as interactive Green 500)
  - Login page (nid.naver.com redirect): rgb(9,170,92) = #09aa5c confirmed on sign-in button

Voice samples (§10) are verbatim from the live merchant center (admin.pay.naver.com 2026-06-22).

Brand narrative (§11): Naver Pay launched 2015, Naver Financial Corp established 2019. The source records these as widely documented public facts about the company.

Interpretive claims (e.g., "ecosystem trust as the product", "shadow-free for mobile commerce") are editorial readings connecting Naver Pay's observed design to its market positioning, not directly sourced Naver statements.

## Claim ledger

Token-level claims (§1–9) are sourced from the three live inspections named above. Philosophy-layer claims (§10–15) are the source's own voice, narrative, principles, state contract, and motion writings; they are not computed observations except where they restate a bridge UI fact already in §4 (input error border).

| claim | surface |
|---|---|
| tokens.colors.primary `#09aa5c` Green 500 | bridge-ui + merchant-center |
| tokens.colors.primary-hover `#0b9552` Green 600 | bridge-ui |
| tokens.colors.brand-green `#00de5a` | logo-guide |
| tokens.colors.green-tint-100 `#eef9f3` Green 100 | bridge-ui |
| tokens.colors.green-tint-200 `#e3f6ed` Green 200 | bridge-ui |
| tokens.colors.canvas `#ffffff` | merchant-center |
| tokens.colors.surface `#f6f8fa` Grayscale 100 | merchant-center + bridge-ui |
| tokens.colors.surface-alt `#f3f5f7` Grayscale 150 | source §2 (not in the HTML-comment grayscale list) |
| tokens.colors.ink `#1e1e23` Grayscale 900 | merchant-center + bridge-ui |
| tokens.colors.body `#404048` Grayscale 800 | bridge-ui |
| tokens.colors.muted `#767678` Grayscale 700 | merchant-center + bridge-ui |
| tokens.colors.muted-light `#aaaaac` Grayscale 500 | bridge-ui |
| tokens.colors.hairline `#dcdee0` Grayscale 250 | merchant-center + bridge-ui |
| tokens.colors.hairline-alt `#c8cacc` Grayscale 300 | source §2 |
| tokens.colors.on-primary `#ffffff` | YAML |
| tokens.colors.link `#007eff` | merchant-center |
| tokens.typography.family.display NanumSquareNeo | merchant-center hero H2 |
| tokens.typography.family.body Pretendard | merchant-center |
| tokens.components.button-primary | merchant-center |
| tokens.components.button-secondary | merchant-center |
| tokens.components.button-green | checkout / bridge-ui (not the merchant-center hero) |
| tokens.components.card-surface / card-benefit / card-green-tint | merchant-center |
| tokens.components.badge-green / badge-ink | YAML + merchant-center |
| tokens.components.input-default / input-focus | bridge-ui |
| tokens.components.nav-link | merchant-center |

## Curve omission ledger (E2b)

The portable Foundations → Motion section keeps the token names `ease-enter` / `ease-exit` / `ease-standard` and their uses, and omits the curve cells. The curve strings themselves are omitted from the portable body and stored here. The source's observation record covers computed colour, type, geometry, and shadow; it records no motion measurement.

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` — matches neither the legacy 0.1 spec example table nor a CSS keyword, and recurs across the catalog corpus without a per-brand source; unattributed.
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — byte-identical to the `ease-exit` example in `spec/omd-v0.1.md`, the known re-injection path for this value.
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` — the curve equivalent of the CSS `ease` keyword, i.e. an engine default rather than a measured Naver Pay token.

Grep-verified: portable `DESIGN.md` contains 0 exact `cubic-bezier(` value strings. The bare word `cubic-bezier` appears 1× in Named gaps ("the exact cubic-bezier curves").

## Derived editorial inventory

Portable `DESIGN.md` carries 41 complete B2a qualifications. This table is 41 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 `:9` | Inspected URLs as this contract's captured surfaces; login-gated web app as the YAML capture boundary rather than as a second token surface; values stay attached |
| Experience Scope ¶2 `:11` | Dominant-platform / calm-and-trustworthy / subtle-premium / Korean-fintech-confidence / two-font persuades-and-explains / shadow-free-flatness / soft-approachable-without-pill-extremes atmosphere |
| Experience Scope ¶3 `:13` | 2015/2019 founding-and-ecosystem narrative, including the closing refuses/embraces paragraph, classified as context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the four recorded surfaces and controls as primary tasks; not from the persona section |
| Audience `:29` | Biography-drop (no name, age, city, motivation, or affiliation classification); source-named groups only: Korean online merchants, small business operators, everyday shoppers using Naver Pay in checkout |
| Distinctive traits `:33` | Groupings and readings of the recorded-value list ("native display voice", "single payment-action color", "shadow-free flat system", "premium feel") |
| Principles `:46` | Five numbered items and their UI implications; official Green 500 / Grayscale 900 naming kept as published-spec; the hard-constraint implication is not |
| Application rules `:56` | Eight Do rules kept as brand rules rather than universal governance; the reasons attached |
| Avoid `:69` | Seven Don't rules and the reasons inside them |
| Semantic color `:85` | Role names from the source's labels; official step names and uppercase hex beside YAML lowercase; catalog `primary_color` beside `tokens.colors.primary`; canvas / on-primary unmerged; brand-green off UI buttons; `#e53935` kept off YAML `tokens.colors` |
| Spacing `:135` | Unitless steps unmerged from matching type sizes, radii, and paddings; 18px vertical / 35–40px card padding kept on components |
| Shape `:149` | Five rounded keys kept; green-tint `12px` kept off the YAML map; `full: 9999` off a spacing step |
| Elevation `:159` | Shadow-free merchant and developer surfaces; green focus ring as depth signal; Finda / Toss mobile-web / KakaoBank comparison |
| Motion `:163` | Duration roles, easing-use assignments, motion rules, and reduced-motion as an uncomputed philosophy-layer contract |
| Motion curve omission `:173` | Treating the three source curve values as untraceable and omitting them rather than promoting them as Naver Pay motion tokens |
| Motion B3 `:181` | Five-kind promotion gate; refusal of a partial confirmation, including a match against the published bridge UI |
| Font evidence `:197` | Evidence-class rows; no published type token from the spec pages; no exclusive distributed family; no fallback stack recorded in the source as a family token |
| Family `:212` | Fallback prohibition; NanumSquareNeo as persuasive hero layer, Pretendard as functional UI layer; the two do not swap |
| Type roles `:216` | YAML unitless ratios kept; YAML `use` verbatim; §3 longer spellings beside them; Button Primary / Button Default as §3 rows rather than extra YAML typography keys |
| Typography principles `:231` | What a weight split or a 14px body is *for* |
| Assets `:244` | Favicon URL as identity pointer; `#00de5a` as logomark color; nid.naver.com confirmation attached to the sign-in button rather than as a token surface; "no shadow at any size" as consistent with the flat system |
| State contract `:251` | Ten-row philosophy-layer table preserved as the source wrote it rather than as a computed observation of each row; bridge UI error border restated as the published spec's |
| Capture / applicability `:266` | Interactive-kind and applicability verdicts and the reason for either; YAML primitive types attached only where the token set records them; §4 Error Input labelled not in the token set; generic Focus not treated as focus-visible; not a complete state-coverage claim |
| Primary CTA keep-apart `:283` | 62px / `18px 24px` / 20px / 8px as this button's geometry |
| Secondary keep-apart `:308` | 44px / 6px / 16px as this button's geometry |
| Green payment keep-apart `:332` | Checkout geometry kept off the merchant-center hero; 60% / 40% width spec kept on the payment completion flow |
| Surface Feature Card `:353` | 20px as this card's geometry; kind omitted rather than invented |
| Benefit Showcase Card `:364` | 28px as this card's geometry; kind omitted rather than invented |
| Green Tint Guide Card `:376` | 12px / `40px 26px` as this card's geometry; kind omitted rather than invented |
| Benefit Badge `:388` | Status marker rather than a control; 12px font and 9999px radius as this badge's geometry |
| Dark Label Badge `:399` | Status marker rather than a control |
| Default Input `:415` | 6px / 16px as this field's geometry; recorded green border as generic focus rather than as `focus-visible` treatment |
| Top Nav `:439` | Destination-select control, so loading / error / success are not-applicable on the item; 8px / 16px / 44px as this nav's geometry |
| Layout Whitespace `:471` | Breathing room; flat segmentation by tint; large radius as warmth in a payment context |
| Layout Breakpoints `:501` | Breakpoint table and collapsing rules as source-stated rather than as a captured cross-viewport pass; tap-comfort reading of 62px and 44px |
| Content gloss keep-both `:525` | English renderings kept beside the published Korean strings rather than substituted |
| Content Voice `:529` | Practical / merchant-friendly / confidence-instilling register, including the five context rows |
| Content role notes `:541` | Declarative / benefit-first / outcome-framed / matter-of-fact / calm-and-actionable captions on the published strings |
| Forbidden register `:545` | Authoring rule rather than a Naver Pay-published policy |
| Locale `:549` | Hangul-first 14px as a reading of the recorded body role |
| Named gaps `:583` | Named gaps rather than a domain inventory; unnamed values rather than permissions to invent |

## Omission ledger

| Item | Disposition |
|---|---|
| §13 Personas — four fictional archetypes | Deleted. The source's own persona header and its closing note both state that the archetypes are fictional and that the names are illustrative. Biographies, ages, cities, motivations, and affiliation classifications are not re-hosted here, not even as names or cities (D2, D2a). The source's publicly observable segment list stays in Audience. |
| §15 easing curve values — `cubic-bezier(0.2, 0.6, 0.25, 1)` (`ease-enter`), `cubic-bezier(0.4, 0.0, 1, 1)` (`ease-exit`), `cubic-bezier(0.25, 0.1, 0.25, 1)` (`ease-standard`) | Removed from the portable body as unsourced curves; kept here verbatim (E2b). The roles and their uses stay in the portable body. |
| §9 Agent Prompt Guide — Quick Color Reference, five Example Component Prompts, seven-step Iteration Guide | Deleted as tool-facing restatement. Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped (A2, A3). The one unique official-spec fact that lived in the HTML comment rather than in §9 — primary 60% width / secondary 40% (payment completion flow) — was moved onto the Green Payment Button. |
| Legacy H1 `# Design System Inspiration of Naver Pay` | Replaced by the Core v2 identity line `# Naver Pay Design System`. |
| Legacy footer `**Verified:** … / Tier 1 / Tier 2 / Conflicts unresolved` | Moved to Freshness and Sources above. |
| YAML `omd: "0.1"`, `tokens.source: live-extract`, `tokens.extracted`, `components_harvested: true` | Ledger metadata (A1c). `live-extract` and `components_harvested` are not portable field names. |
| Sibling-only observations listed above | Kept in this file. Not promoted into the portable body. |

This ledger names omitted *classes* (fictional archetypes; unattributed curves; tool-facing prompts). It does not re-host the deleted biographies as names, ages, or cities (D2a). It does not assert that those strings are absent from *this file* while listing them (E2d).

## Proof notes

- Interaction expansions: the source records default component observations plus named Focus Input (bridge UI) and nav active (`text #09aa5c on active`). Uncaptured hover (except the named `#0b9552` color shift on green interactive elements), `focus-visible`, pressed, and most loading/error/success *treatments* are omitted. They are not `not-applicable` solely for want of a capture. Applicability follows control meaning. State coverage is not claimed complete.
- The source never records `focus-visible` as a captured state; no `focus-visible` treatment value appears in the portable body. The green input border is kept as generic focus (B1).
- Three card records carry no interactive-kind evidence, so kind and the state-applicability map are omitted for them (C4).
- Two badges are `Kind: non-interactive` as status markers.
- Loading, error, and success are closed as `not-applicable` on Primary CTA, Secondary, Top Nav, and (for loading/success) Default Input for role reasons — never for absence of observation (C1, C2).
- Green Payment Button keeps loading/error/success applicable because it commits a payment.
- **Proof grade.** The Tier 1 proof for this reference is the sibling `web/references/naverpay/.verification.md`: `## Proof — Tier 1 live inspect`, dated 2026-06-22.
- Official published specs exist (bridge UI, logo guide). Derived-editorial closes therefore use the adapted form that *names* those specs rather than the toss-form that would deny them (rulebook v12 B2a 전제 주석).
- B3 is held in Foundations Motion in full text (five evidence kinds + per-component gate + partial-confirmation refusal).
- `tokens.source: live-extract` is ledger metadata.
