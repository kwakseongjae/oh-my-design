# Dr.Now (닥터나우) provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and evidence detail for the T2 migration. Canonical source remains `web/references/drnow/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | drnow |
| name | Dr.Now (닥터나우) |
| country | KR |
| category | healthcare |
| homepage | https://doctornow.co.kr |
| primary_color | `#FF8D00` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=doctornow.co.kr&sz=256` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The logo record is a third-party favicon-service URL rather than a Dr.Now-hosted asset file. It is kept here as the catalog identity record and is not promoted into the portable Assets contract as a brand asset.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-03 |
| tokens.extracted | 2026-06-09 |

The source carries no `verification_v2` block and no `## Proof` block. Its evidence is the Tier 1 URL list below plus the token set it derived from those stylesheets.

## Evidence class

`tokens.source: prose-derived`. The color scale, type scale, spacing, radii, shadows, and component records are declared stylesheet values — the official `:root` `--P*` / `--G*` token block and the CSS typography utility classes — rather than per-element computed-style measurements of a rendered page. The source reports no visible-use element count for the font family and no interaction-expansion capture. Treat every value as a declared stylesheet fact scoped to the surface family that declared it.

## Sources

### Tier 1

| URL | What it supplied |
|---|---|
| https://doctornow.co.kr | HTML + styled-components; web-app surface |
| https://userweb-static.doctornow.co.kr/20260602-2002-38d1546d91/_next/static/css/72c28a0cfb28f079.css | Tailwind + styled-components bundle; type scale utility classes, animations |
| https://file.doctornow.co.kr/official/css/style.css | Official brand CSS with the `--P` / `--G` `:root` token block |
| https://file.doctornow.co.kr/official/css/default.css | Pretendard font import + reset |
| https://company.doctornow.co.kr/company | Company pages; brand CSS served from `file.doctornow.co.kr` |

### Tier 2 (no usable record)

- getdesign.md/drnow — NOT LISTED (no data).
- refero `?q=닥터나우` — no result found for this brand.

## Conflicts recorded by the source

| Conflict | Source resolution |
|---|---|
| Hero banner gradient `#FF7501` is slightly warmer than token `--P500` `#FF8D00` | Both are genuine observed values; the official `:root` token system treats `#FF8D00` as P500 canonical. Kept as a surface-scoped split in Foundations and Governance. |
| `.btn-now` CTA uses the deep `#D9480F` → `#F3463B` gradient while the web app uses flat `#FD7E14` for most buttons | Two surface contexts maintained separately. Kept as a surface-scoped split in Components and Governance. |

## Claim ledger

Every value below traces to the source `web/references/drnow/DESIGN.md`. Column "source location" is the legacy section or YAML path.

| Claim | Source location | Portable destination |
|---|---|---|
| `tokens.colors.primary` … `primary-900`, `primary-100`, `primary-300` | YAML `tokens.colors`, §2 Primary scale | Foundations → Semantic color (orange table) |
| `tokens.colors.surface-10/20/40`, `border`, `placeholder`, `meta`, `body`, `body-root`, `strong`, `heading`, `canvas` | YAML `tokens.colors`, §2 Neutral scale | Foundations → Semantic color (neutral table) |
| `tokens.colors.info` `#228BE6`, `yellow` `#FCC419`, `error` `#FA5252` | YAML `tokens.colors`, §2 Accent & System | Foundations → Accent and system |
| Hero banner `#FF7501` | §4 Conflicts unresolved | Foundations → surface-scoped orange; Governance → recorded conflicts |
| `.btn-now` gradient `#D9480F` → `#F3463B` | §4 Brand Gradient CTA, §7 Don't | Components → Brand Gradient CTA; Experience → Avoid; Governance |
| `tokens.typography.family.sans` / `.mono` = Pretendard Variable | YAML `tokens.typography.family`, §3 | Typography & Assets → Font evidence, Type roles |
| Korean fallback chain (Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic) | §9 Agent Prompt Guide (only occurrence in the source) | Typography & Assets → Font evidence |
| Class-suffix type scale, 32/42 … 12/18 px | §3 Type Scale table | Typography & Assets → Type scale |
| `h-32` … `caption` size / weight / unitless lineHeight / use | YAML `tokens.typography` | Typography & Assets → Type roles (ratios preserved as ratios) |
| Typography rules (button 17/600, body 15–16, headings 22–32, meta 12–14, antialiased, no italic) | §3 Rules | Typography & Assets → Typography rules |
| `tokens.spacing` xs–section | YAML `tokens.spacing`, §5 | Foundations → Spacing; Layout & Platforms |
| `tokens.rounded` sm / md / lg / full, scale 4/6/8/12/16/32/99px | YAML `tokens.rounded`, §7 Don't | Foundations → Shape |
| `tokens.shadow.floating` / `modal` / `dropdown`, scrim and inset values | YAML `tokens.shadow`, §6 | Foundations → Elevation |
| `button-primary`, `button-outline`, `button-disabled` (type `button`) | YAML `tokens.components`, §4 | Components & States (primitive type preserved per component) |
| `tag-primary`, `tag-gray` (type `badge`) | YAML `tokens.components`, §4 | Components & States (non-interactive, reason declared) |
| `card`, `section-card` (type `card`) | YAML `tokens.components`, §4 | Components & States (non-interactive, reason declared) |
| `nav-item` (type `tab`, active variant) | YAML `tokens.components`, §4 | Components & States → Navigation Item |
| Layout container 92% / 1050px / 1064px, 96–128px sections, 64px bar | §5 | Layout & Platforms |
| Breakpoints 768px / 1064px, mobile reductions, 8px vs 12px card gap, 32–56px display reduction | §8 | Layout & Platforms → Responsive behavior |
| Duration scale 100/200/300/500/1500/15000ms, easing set, motion rules | §15 | Foundations → Motion |
| Eight state records with copy and values | §14 | Components & States → State record |
| Voice fingerprint, Do/Don't dimension table, three illustrative samples | §10 | Content & Locales |
| Five principles with UI implications | §12 | Experience → Principles |
| Do rules / Don't rules | §7 | Experience → Capture-bound application / Avoid |
| Founding year, mission pillars, taglines, scale figures | §11 | Experience → Scope (fenced as brand narrative) |

## Derived editorial inventory

Where the portable `DESIGN.md` carries an adjacent complete B2a qualifier. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not Dr.Now-authored or a separately published UI specification." Line numbers are into the portable file; this is an index of the derived-reading sites, not a completeness claim.

- Scope — reading the `prose-derived` extraction as declared stylesheet values rather than per-element measurements: 11
- Primary tasks — three tasks read off the source's state contract and stated mission: 21
- Audience — group-level restatement after the illustrative personas were dropped: 30
- Distinctive traits — the five-item selection, and reading radius as role-assigned rather than one universal step: 34
- Principles — five items and each *UI implication*: 44
- Foundations Motion — reading the rest of the section as system-level declarations, plus the five-kind per-component promotion gate: 142
- Assets — treating the catalog logo record as a favicon-service identity pointer held in this ledger rather than a Dr.Now-owned brand asset: 232
- Components & States — every interactive-kind verdict, every applicability verdict, and the reason given for either: 239
- Content & Locales — the voice characterization and the Do/Don't dimension table: 420

Evidence-class boundary sentences in the portable body (a different class from B2a, listed separately so the two are not conflated):

- Scope, 13 — the "Korea's #1" descriptor and the §11 figures are catalog prose with no attached source URL; they are not verified market-position or clinical facts, and nothing in the document establishes a medical, efficacy, or safety claim.
- Content & Locales, 430 — the source's own "illustrative, modeled on brand copy" label travels with the three voice samples.
- Content & Locales, 438 — the voice contract covers register and tone only; medical, efficacy, dosage, and safety language may not be derived from it.

## Omission ledger

| Item | Status |
|---|---|
| Reduced-motion behavior | Unresolved. The source declares motion durations, easings, and rules but no reduced-motion rule. Named in Governance without a value. |
| Success checkmark color | Unresolved. §14 describes the checkmark as green; no green value exists in the source's color scale. Named in Governance without a value. |
| Per-curve selector attribution | Unresolved. §15 declares system-level easings without attaching each curve to a named selector, except `screen-slide-in`. The portable Motion section states the promotion condition instead of inventing an attribution. |
| First-party logo / image / icon asset URL | Not established by the source. The only logo record is the favicon-service URL above. |

## Notes on evidence separation (healthcare domain)

- The brand-narrative figures in §11 (founding year, consultation count, partner-institution count, download milestone) and the descriptor "Korea's #1 telemedicine platform" carry no source URL in the legacy file. They are preserved in the portable Scope as source-recorded narrative, explicitly fenced from the stylesheet-derived interface facts.
- The source contains no efficacy, dosage, indication, or safety copy. The portable Content & Locales section states that boundary so its register guidance is not read as authority for clinical language.
- The §14 state strings are product UI copy and are preserved in Korean, byte-exact. The §10 voice samples are labeled illustrative by the source; that label is preserved alongside them so the two evidence classes stay separate.
