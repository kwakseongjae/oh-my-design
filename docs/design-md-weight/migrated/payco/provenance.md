# PAYCO provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/payco/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | payco |
| name | PAYCO |
| country | KR |
| category | fintech |
| homepage | `https://www.payco.com` |
| primary_color | `#FF2233` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=payco.com&sz=256` |
| omd format (source) | 0.1 |
| verified | 2026-06-03 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog identity `primary_color` `#FF2233` is dual: identity here, and portable Semantic color / components. The favicon URL is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a Google s2 favicon URL, kept as the catalog identity pointer and classified in the portable document as that identity pointer.

No `ds.type` / `ds.url` field exists in the source YAML. Portable B2a closes use the toss-form `not PAYCO-authored or a separately published UI specification`. The source does not name a published PAYCO UI specification.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-03 |
| tokens.extracted | 2026-06-09 |
| surfaces inspected (sibling) | 2026-06-03 |
| sources captured (sibling) | 2026-06-03 |

The source footer records the verification verbatim as **Verified:** 2026-06-03. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved, kept as the source footer states: `#FF2233` (CSS `:root --brand-color`) and `#ff1414` (legacy GNB border) coexist; `#FF2233` is the canonical brand red per the custom property declaration. Portable Semantic color restates that conflict; this row is the ledger copy (E2a).

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | homepage HTML | `https://www.payco.com` | 2026-06-03 |
| common-css | production CSS bundle | `https://www.payco.com/share/css/common.css?1778564615926` | 2026-06-03 |

YAML token claims resolve to the homepage HTML + CSS bundle / live inspect / 2026-06-03. `tokens.source` is `prose-derived`.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | `https://www.payco.com` | 2026-06-03 |
| common-css-live | product-surface | `https://www.payco.com/share/css/common.css?1778564615926` | 2026-06-03 |

### Tier 1

- https://www.payco.com (homepage HTML)
- https://www.payco.com/share/css/common.css?1778564615926 (full CSS bundle, 398 KB)

### Tier 2 (no usable record)

- getdesign.md/payco — NOT LISTED (no data)
- refero ?q=PAYCO — no KR result

## Claim ledger

Claims attach to the homepage HTML + CSS bundle inspect of 2026-06-03.

| claim | surface |
|---|---|
| tokens.colors.primary | home / common-css |
| tokens.colors.primary-legacy | home / common-css |
| tokens.colors.heading | home / common-css |
| tokens.colors.body | home / common-css |
| tokens.colors.muted | home / common-css |
| tokens.colors.placeholder | home / common-css |
| tokens.colors.secondary | home / common-css |
| tokens.colors.surface | home / common-css |
| tokens.colors.divider | home / common-css |
| tokens.colors.border | home / common-css |
| tokens.colors.disabled-bg | home / common-css |
| tokens.colors.disabled-text | home / common-css |
| tokens.colors.canvas | home / common-css |
| tokens.colors.on-primary | home / common-css |
| tokens.typography.family.sans | home / common-css |
| tokens.typography.family.mono | home / common-css |
| tokens.typography.hero.size / weight / tracking / use | home / common-css |
| tokens.typography.section-sub.size / weight / lineHeight / use | home / common-css |
| tokens.typography.nav.size / weight / use | home / common-css |
| tokens.typography.subtext.size / weight / lineHeight / use | home / common-css |
| tokens.typography.button-lg.size / weight / use | home / common-css |
| tokens.typography.body.size / weight / lineHeight / tracking / use | home / common-css |
| tokens.typography.button-md.size / weight / use | home / common-css |
| tokens.typography.input.size / weight / use | home / common-css |
| tokens.spacing.xs / sm / md / base / lg / xl / section | home / common-css |
| tokens.rounded.sm / md / lg / full | home / common-css |
| tokens.shadow.panel | home / common-css |
| tokens.components.button-primary.* | home / common-css |
| tokens.components.button-secondary.* | home / common-css |
| tokens.components.button-ghost.* | home / common-css |
| tokens.components.button-disabled.* | home / common-css |
| tokens.components.button-cta-modern.* | home / common-css |
| tokens.components.input-standard.* | home / common-css |

## Sibling file

Sibling read (not the migration input): `web/references/payco/.verification.md`. SHA-256 `81c6a10d888b2614210882ddfc48e45ca3f805763a47181fd35b7c41722a8c4d`.

Nothing in the sibling was used to establish a portable body fact that the source body does not already record. Values it carries that the visible source body does not:

- Homepage HTML 19,911 bytes; CSS bundle 398,170 bytes (source writes 398 KB)
- Live CSS `body, th, td, input, select, textarea, button { font-family: 'Apple SD Gothic Neo', '나눔고딕', NanumGothic, ng, '돋움', dotum, Helvetica, sans-serif; font-size: 16px; line-height: 1.27; letter-spacing: -1px; color: #2a303a }`
- `.gnb .wrap { height: 110px; border-bottom: 4px solid #ff1414 }` — GNB wrap height 110px
- `.snb_header_wrap { height:184px; background-color:var(--brand-color) }`
- `.bn_big { width: 198px; height: 48px; border-width: 1px; border-style: solid }`
- `.inp { height: 32px; padding-left: 20px; border: 1px solid #d4d4d4; background: #fff; font-size: 12px; line-height: 32px; color: #666; }` — sibling-only `line-height: 32px` on the input
- `.bn_disabled, .bn_disabled a:hover, .bn_disabled a:active, .bn_disabled a:focus { border-color: #d2d2d2; background: #dadada; color: #aaacae }`
- `.halt_apply .bottom_area .btn_link { border-radius:8px; background-color:var(--brand-color); color:#fff; height:51px; padding:16px 10px; font-size:14px; font-family:Pretendard Variable }`
- `@font-face { font-weight:700; font-family:'Pretendard Variable'; src:url(//payco-cdn.cdn.toastoven.net/PAYCO_CONTENTS/payco/www/font/Pretendard-Bold.eot) }`
- getdesign.md/payco page returned 12,568 bytes with no PAYCO design data
- country KR; two brand-owned regional sources listed

Those sibling-only strings stay in this ledger. They are not portable tokens.

## Proof notes

- No `verification_v2` block in the source YAML
- components_harvested: true
- tokens.source: prose-derived
- Uncaptured hover/focus-visible/loading visual treatments on the declared buttons are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- 2015 launch, NHN Entertainment / Hangame / NAVER early-gaming-arm, 페이코 라이프, and the OG four-part mission are narrative context, not token sources, except where the source DESIGN.md itself records a computed value
- Same-hex / same-numeral splits in the portable body, kept unmerged: `tokens.colors.canvas` `#ffffff` is not `tokens.colors.on-primary` `#ffffff`; `tokens.colors.primary` `#FF2233` is not `tokens.colors.primary-legacy` `#ff1414`; `tokens.spacing.lg: 48` is not `.bn_big` height 48px; `tokens.spacing.base: 32` is not input height 32px; `tokens.rounded.sm: 8` is not `button-cta-modern.radius: 8px` written as a spacing step; YAML `button-ghost.fg` `#2d2d2d` is not §4 Ghost text `#191a1c`

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Two inspected files as this contract's token surfaces; values stay attached; `tokens.source: prose-derived` as extraction class rather than as a published PAYCO token sheet |
| Experience Scope `:11` | Atmosphere readings (urgency / confidence / accessibility; energetic rhythm without visual clutter; functional and trustworthy; nothing extraneous competes with the moment of payment or redemption; speed and benefit one tap away); hex values, `--brand-color`, and the grey-chrome / call-to-action sentence beside them are the source's own |
| Experience Scope `:13` | Founding-and-mission narrative (2015 / NHN Entertainment / Hangame / NAVER early-gaming-arm / mass consumer / bank-account clause / OG four-part mission / 페이코 라이프 / employment-commerce-government / subsidiary / tagline closing sentence) as context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three primary tasks from inspected homepage and CSS controls; not from the source's persona section |
| Audience `:28` | Dropping the persona section rather than promoting it; carrying no name, motivation, or affiliation classification; using only the source wording mass consumer rather than power users |
| Distinctive traits `:32` | Groupings and readings of the recorded-value list |
| Principles `:43` | Five items; every *UI implication* as the source's own editorial reading, not a published PAYCO UI specification |
| Application rules `:53` | Six Do rules and the reasons attached to them |
| Avoid `:64` | Five Don'ts and the reasons inside them |
| Semantic color `:78` | Role names from §2 labels and YAML keys; canvas off on-primary; primary off primary-legacy; heading off body; `#666` / `#999` keep-both; `#f4f4f4` as §9 writing not a YAML color key; homepage/CSS attachment |
| Semantic color `:97` | Nav-link `#191919` as a §3 body writing off YAML color keys; ghost-button §4 `#191a1c` beside YAML `button-ghost.fg` `#2d2d2d` rather than collapsed |
| Spacing `:113` | Seven YAML spacing keys unmerged from padding, height, and section-padding writings that share a numeral |
| Shape `:126` | Four rounded keys; §9 pill 20px–100px and legacy-flat 0 kept beside them; `button-cta-modern.radius` 8px off `tokens.rounded.sm`; input `0px` off YAML rounded keys; `full: 9999` unattached to a component |
| Elevation `:130` | Flat observed layering plus one panel shadow, one dimmed overlay, the z-index list, and the GNB underline, rather than a general elevation ladder |
| Motion `:140` | Measured 0.5s / width / layout-only transforms / no-cubic-bezier as the motion record rather than a default curve; five-kind promotion gate |
| Font evidence `:155` | NotoSans as promotional/section family; `'Pretendard Variable'` as newer-flow family rather than `tokens.typography.family.sans`; Apple SD Gothic Neo stack as legacy base; `monospace` on `family.mono` |
| Family `:164` | Fallback prohibition; Don't mix Pretendard Variable and legacy `'Apple SD Gothic Neo'` in the same component context |
| Type roles `:168` | YAML unitless ratios kept as ratios; YAML `use` verbatim; §3 px / color / selector spellings beside them; hero split into `.kv_heading` and `.main_title`; body `16` off spacing and off input height |
| Type roles `:181` | Each YAML type-role size on its own key path; `hero` 52 and `button-lg` 18 off spacing; `section-sub` 32 off `tokens.spacing.base`; `nav` 24 off `subtext` 24; `button-md` 13 off page-level error body 13px; `input` 12 off inline-error 12px |
| Assets `:185` | Google s2 favicon as a catalog identity pointer rather than as an NHN PAYCO-hosted brand file |
| Capture record `:192` | Preserving the source §14 captured-state body rather than treating the capture as incomplete until a catalog graph exists |
| Capture record `:203` | Every interactive-kind and applicability verdict and the reason for either; YAML `Primitive type` only when the token set records that type; YAML `button-disabled` as recipe not a fifth map; YAML/§4 keep-both; not a complete state-coverage claim |
| Disabled recipe `:328` | YAML `button-disabled` as the disabled treatment recipe, including Primitive type `button` preserved on that recipe, not a fifth interactive component with its own map |
| Layout `:345` | Homepage/CSS layout record rather than a universal PAYCO grid; 159 / 115 / 25 kept on layout sentences rather than as replacements of spacing keys; 1600px as the source's min-width writing |
| Content `:364` | Adjectives, Do/Don't table, and sample annotations as source copy; reading the table as register guidance rather than a complete product-microcopy guide |
| Named gaps `:398` | List as unnamed values the source already named, rather than as coverage of domains the source never named |

Portable `DESIGN.md` carries 26 complete B2a qualifications. This table is 26 data rows. Preamble sentences on this page are not portable qualifications. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not PAYCO-authored or a separately published UI specification."

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 personas, 4 slots (illustrative archetypes; names, ages, and cities; role labels and motivations) | Deleted. Not promoted as individuals, tasks, or Audience groups. Affiliation classification and motivation are not re-hosted. Portable Audience uses only the source wording mass consumer rather than power users. |
| Source §9 Agent Prompt Guide remaining after color/type/component/radius/transition constraints were moved | Deleted as tool-facing prompt. Unique constraints (`#f4f4f4` info panels; 8px modern CTAs; 20px–100px pill badges/tags; flat 0 for legacy button variants; `width 0.5s` ease; 198×48px) already live in Experience / Foundations / Components / Layout. |
| Unattributed cubic-bezier curves | None in the source (`no cubic-bezier custom curves found in the CSS bundle`). Nothing to delete. The no-curve sentence and the B3 promotion gate stay in portable Motion. |
| Sibling-only computed values listed under Sibling file | Ledger only |
| Tier 2 getdesign / Refero lookup detail | Ledger only |
