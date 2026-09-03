# MUJI provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/muji/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | muji |
| name | MUJI |
| country | JP |
| category | ecommerce |
| homepage | https://www.muji.com |
| primary_color | `#7f0019` |
| logo | favicon `https://www.google.com/s2/favicons?domain=muji.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled). Catalog `primary_color` `#7f0019` is dual: identity here, and Foundations MUJI Maroon / `tokens.colors.brand` in `DESIGN.md`. It is not YAML `tokens.colors.primary` `#333333`. The favicon slug is dual: identity here, and a portable Assets URL in `DESIGN.md` Typography & Assets (E2a). Homepage `https://www.muji.com` is identity here and Experience catalog homepage identity.

Source footer note, kept verbatim as evidence class: MUJI publishes no public token-level design system; chrome values are read from the live site and brand-color registries, then conformed to the brand's documented minimalist doctrine.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.extracted | 2026-06-09 |
| sibling inspected | 2026-06-06 |

Conflicts unresolved (source footer): none. `#7f0019` is consistently reported as the singular MUJI brand color; the brand intentionally avoids a broader chromatic palette.

Sibling `.verification.md` records a different regional host and different computed samples (see Raw samples). Those samples are not portable tokens.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| muji-com | product-surface (source) | https://www.muji.com | 2026-06-06 (source footer: live production site) |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| muji-com-live | product-surface | https://www.muji.com | 2026-06-06 |
| brandcolorcode | brand-color registry | https://brandcolorcode.com/muji | 2026-06-06 |
| encycolorpedia | brand-color registry | https://encycolorpedia.com/7f0019 | 2026-06-06 |
| fontalternatives | typeface note | https://fontalternatives.com/inspiration/muji-helvetica | 2026-06-06 |
| dezeen-2017 | narrative interview | https://www.dezeen.com (2017-12-13 Kenya Hara interview) | 2026-06-06 |
| bworldonline | narrative | https://www.bworldonline.com | 2026-06-06 |

### Tier 1

- https://www.muji.com (live production site — Helvetica Neue type stack, near-white surfaces, square-corner buttons, maroon logo plate)
- brandcolorcode.com/muji and encycolorpedia.com (MUJI Red `#7f0019` / RGB 127,0,25 confirmed across sources)

### Tier 2

- fontalternatives.com (Helvetica Neue confirmed as MUJI's Latin typeface under Kenya Hara)
- dezeen.com / bworldonline.com (Kenya Hara "emptiness" 空/無 design philosophy, art director since 2001)

### Narrative (not interface tokens)

- Founding: December 1980 as a 40-item private label inside the Seiyu supermarket chain, not as a standalone company; 「わけあって、安い」 founding slogan; 無印良品 = "no-brand quality goods" / "no-mark quality goods"
- Kenya Hara art director since 2001; 2017 Dezeen conversation on emptiness (空 / 無) as distinct from minimalism
- Source HTML comment: those founding details are widely documented and used as context

## Claim ledger

Claims use YAML paths from the source. Portable destinations are `docs/design-md-weight/migrated/muji/DESIGN.md` unless noted.

| claim | surface / source writing |
|---|---|
| tokens.colors.primary `#333333` | YAML + §2 Ink |
| tokens.colors.primary-hover `#000000` | YAML + §4 Primary hover |
| tokens.colors.brand `#7f0019` | YAML + catalog primary_color + §2 MUJI Maroon |
| tokens.colors.brand-hover `#6b0015` | YAML + §2 Maroon Deep |
| tokens.colors.canvas `#ffffff` | YAML + §2 White |
| tokens.colors.surface `#f7f7f7` | YAML + §2 Off-White |
| tokens.colors.foreground `#333333` | YAML + §2 Ink (second key on the same hex) |
| tokens.colors.muted `#666666` | YAML + §2 Ink Secondary |
| tokens.colors.on-primary `#ffffff` | YAML + Primary button text |
| tokens.colors.hairline `#dddddd` | YAML + §2 Hairline |
| tokens.colors.border-strong `#cccccc` | YAML + §2 Border Strong |
| tokens.colors.error `#c0392b` | YAML + §2 Error |
| tokens.colors.success `#4a7c59` | YAML + §2 Success |
| tokens.typography.family.sans `Helvetica Neue` | YAML + §3 Latin |
| tokens.typography.family.mono `Helvetica Neue` | YAML (second key) |
| tokens.typography.page-title | YAML + §3 Hierarchy |
| tokens.typography.section | YAML + §3 Hierarchy |
| tokens.typography.subheading | YAML + §3 Hierarchy |
| tokens.typography.lead | YAML + §3 Hierarchy |
| tokens.typography.body | YAML + §3 Hierarchy |
| tokens.typography.body-small | YAML + §3 Hierarchy |
| tokens.typography.caption | YAML + §3 Hierarchy |
| tokens.typography.price | YAML + §3 Hierarchy |
| tokens.typography.button | YAML + §3 Hierarchy |
| tokens.spacing `[4, 8, 12, 16, 24, 32, 48, 64, 96]` | YAML + §5 |
| tokens.rounded.sm / md / lg `2`; full `9999` | YAML + §5 |
| tokens.shadow.subtle `0 2px 8px rgba(0,0,0,0.08)` | YAML + §6 |
| tokens.shadow.modal `0 4px 24px rgba(0,0,0,0.16)` | YAML + §6 |
| tokens.components.button-primary / button-secondary / button-tertiary / button-brand / button-disabled | YAML + §4 |
| tokens.components.input / input-error | YAML + §4 |
| tokens.components.card-product / card-editorial | YAML + §4 |
| tokens.components.tag-sale / tag-neutral | YAML + §4 |
| tokens.components.tab / segmented | YAML + §4 |
| tokens.components.toast / notice-inline / dialog | YAML + §4 |
| tokens.components.checkbox / toggle | YAML + §4 |

## Token-block component strings

| Component key | Verbatim token-block fields |
|---|---|
| `button-primary` | `type: button`, `bg: "#333333"`, `fg: "#ffffff"`, `radius: "2px"`, `padding: "14px 24px"`, `font: "14px / 400"`, `states: "hover #000000"`, `use: "Single primary action (add to cart / checkout)"` |
| `button-secondary` | `type: button`, `bg: "#ffffff"`, `fg: "#333333"`, `border: "1px solid #333333"`, `radius: "2px"`, `padding: "13px 24px"`, `font: "14px / 400"`, `states: "hover bg #f7f7f7"`, `use: "Secondary actions"` |
| `button-tertiary` | `type: button`, `bg: "transparent"`, `fg: "#666666"`, `border: "1px solid #dddddd"`, `radius: "2px"`, `padding: "10px 16px"`, `font: "13px / 400"`, `use: "Low-priority actions, filters"` |
| `button-brand` | `type: button`, `bg: "#7f0019"`, `fg: "#ffffff"`, `radius: "2px"`, `padding: "14px 24px"`, `font: "14px / 400"`, `states: "hover #6b0015"`, `use: "Sale / campaign CTAs only"` |
| `button-disabled` | `type: button`, `bg: "#eeeeee"`, `fg: "#999999"`, `radius: "2px"`, `use: "Out-of-stock, unavailable"` |
| `input` | `type: input`, `bg: "#ffffff"`, `fg: "#333333"`, `border: "1px solid #cccccc"`, `radius: "2px"`, `padding: "12px 14px"`, `font: "14px / 400"`, `focus: "border #333333, no glow"`, `use: "Standard form field"` |
| `input-error` | `type: input`, `bg: "#ffffff"`, `border: "1px solid #c0392b"`, `radius: "2px"`, `use: "Validation failure, help text #c0392b"` |
| `card-product` | `type: card`, `bg: "#ffffff"`, `radius: "0px"`, `padding: "0"`, `shadow: "none"`, `use: "Catalog grid card, photo is the card"` |
| `card-editorial` | `type: card`, `bg: "#ffffff"`, `border: "1px solid #eeeeee"`, `radius: "2px"`, `padding: "20px"`, `shadow: "none"`, `use: "Story modules, info panels"` |
| `tag-sale` | `type: badge`, `bg: "#7f0019"`, `fg: "#ffffff"`, `radius: "0px"`, `padding: "2px 8px"`, `font: "11px / 400"`, `use: "Sale indicator, printed-label feel"` |
| `tag-neutral` | `type: badge`, `bg: "#eeeeee"`, `fg: "#666666"`, `radius: "0px"`, `padding: "2px 8px"`, `font: "11px / 400"`, `use: "NEW, category labels"` |
| `tab` | `type: tab`, `fg: "#999999"`, `font: "14px / 400"`, `active: "text #333333, 2px bottom border #333333"`, `use: "PDP detail tabs, category switching"` |
| `segmented` | `type: tab`, `bg: "#eeeeee"`, `radius: "2px"`, `font: "13px / 400"`, `active: "bg #ffffff, text #333333"`, `use: "View toggles, sort modes"` |
| `toast` | `type: toast`, `bg: "#333333"`, `fg: "#ffffff"`, `radius: "2px"`, `padding: "12px 16px"`, `shadow: "0 2px 8px rgba(0,0,0,0.12)"`, `font: "13px / 400"`, `use: "Transient confirmation"` |
| `notice-inline` | `type: card`, `bg: "#f7f7f7"`, `fg: "#333333"`, `border: "2px solid #7f0019"`, `radius: "0px"`, `padding: "12px 16px"`, `use: "Shipping info, stock notices"` |
| `dialog` | `type: dialog`, `bg: "#ffffff"`, `fg: "#333333"`, `radius: "2px"`, `padding: "32px"`, `shadow: "0 4px 24px rgba(0,0,0,0.16)"`, `use: "Confirmation, size guide, login"` |
| `checkbox` | `type: toggle`, `border: "1px solid #cccccc"`, `radius: "2px"`, `active: "#333333 fill, white check"`, `use: "Filters, terms agreement, square"` |
| `toggle` | `type: toggle`, `bg: "#cccccc"`, `radius: "9999px"`, `active: "track #333333, white thumb"`, `use: "Newsletter / setting switches"` |

## Raw samples (sibling only — not portable tokens)

Sibling `web/references/muji/.verification.md` inspected `https://www.muji.us/` on 2026-06-06 via playwright getComputedStyle. Those samples are a different regional host from the source's muji.com chrome writing. They stay here. They are not promoted into the portable body (B1).

- live www.muji.us body text: color `#4d4d4d`, font 14px, family Roboto
- live www.muji.us page background: color `#ffffff`
- live www.muji.us heading/nav: color `#ffffff`, font 12px, / 400, family Roboto
- live www.muji.us button: color `#7f0019`, background `#ffffff`, border-radius 0px, font 14px
- live www.muji.us link: color `#ffffff`

Country sources in the sibling: country JP; brand-owned live source named there is `https://www.muji.us/`. The portable contract's catalog homepage remains the source's `https://www.muji.com`.

## Source closing note

The source HTML comment assigns evidence class as follows (kept as class, not as portable tokens):

- Direct verification via WebSearch (2026-06-06) for brandcolorcode / encycolorpedia / fontalternatives / dezeen 2017-12-13 / bworldonline, plus general brand history as widely documented context.
- encycolorpedia.com/7f0019 and colorswall — corroborate #7f0019 as MUJI's signature maroon; related tints #8c1a30, #993347 reported by registries.
- Token-level chrome values (`#333333` ink, `#f7f7f7` / `#eeeeee` / `#dddddd` neutrals, 2px button/input radius, square cards, near-black primary buttons, Helvetica Neue type scale) are read from the live muji.com chrome and conformed to MUJI's documented minimalist/emptiness doctrine. MUJI publishes no public design-token system, so these are observational, not from an official spec.
- Personas (§13) are fictional archetypes informed by publicly observable MUJI customer segments. Names are illustrative and do not refer to real people.
- Interpretive claims (e.g., "square is honest", "one color held precious", "this will do over this is the best") are editorial readings connecting MUJI's stated no-brand / emptiness philosophy to its visual system, not directly sourced MUJI statements.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | muji.com web chrome as this contract's token surface; catalog `primary_color` `#7f0019` kept off YAML `tokens.colors.primary` `#333333`; `prose-derived` as token-set source class rather than a published specification; values stay attached; regional-site footer band not a second catalog homepage |
| Experience Scope `:11` | Atmosphere readings (well-lit empty room; restraint as doctrine; typefaces chosen to vanish; whitespace as primary material; website as digital extension of the no-brand thesis) |
| Experience Scope `:13` | Founding-and-emptiness narrative, including the closing refuses/embraces sentence, classified as context that does not by itself supply interface tokens; keeping each source paragraph's last sentence as one unit with the paragraph it closes; square corners / Helvetica Neue / white grounds / reserved maroon read as the formal expression of *mu* |
| Primary tasks `:19` | Selecting the three surface-or-control outcomes as primary tasks; not from the persona section |
| Audience `:28` | Dropping fictional biographies rather than promoting them; carrying no name, age, city, motivation, or affiliation classification from those entries; reading the source-named publicly observable segments as audience |
| Distinctive traits `:32` | Classifying the list as a restatement of Key Characteristics; groupings and readings inside the list |
| Principles `:45` | Eight numbered items; interpretive claims flagged by the source closing note |
| Application rules `:58` | Eight Do rules and the reasons attached to them |
| Avoid `:71` | Eight Don't prohibitions and the reasons inside them |
| Semantic color `:88` | Role-to-path pairing; catalog maroon off YAML primary; primary unmerged from foreground; canvas unmerged from on-primary and footer text; brand unmerged from error; `#000000` as primary-hover not body ink; Ink / Info Ink / Footer Ground unmerged on the same ink hex; Sale Red writing unmerged from the brand-token writing; §2-only swatches off invented YAML keys; somber/traditional/Japanese and ink-on-paper as palette notes |
| Spacing `:126` | Unitless YAML array kept on its path; px list kept beside it; spacing steps unmerged from type size, padding, radius, and `blur(8px)` |
| Shape `:130` | YAML `2` on three keys; `full` `9999` unmerged; body `0px` off an invented `rounded.none`; "no large radii" as the source's radius rule rather than a universal scale |
| Elevation `:141` | Shadow philosophy as the source's elevation rule; toast `0.12` unmerged from YAML `subtle` `0.08`; `blur(8px)` as sticky-header observation |
| Motion `:145` | Durations and easing names as source-stated rather than computed CSS; three cubic-bezier values omitted as unattributed template matches; spring/bounce/overshoot prohibition and calm-paper register as derived reading; five-kind promotion gate |
| Font evidence `:187` | Evidence-class sorting; YAML `sans` and `mono` as two keys on the same family name; Japanese gothic stack unmerged from Helvetica Neue |
| Family `:195` | Fallback-and-surface boundary; Helvetica / Arial / gothic stacks not substitutes for the named Helvetica Neue Latin role; Japanese gothic not presented as Helvetica Neue |
| Type roles `:199` | YAML unitless sizes beside §3 px; unitless line-heights as ratios; YAML `use` beside longer §3 notes; Price Large and Nav Link as §3-only rows; type sizes unmerged from spacing; YAML section weight `400` unmerged from §9 prompt weight `300` |
| Typography rules `:217` | Light-weight-as-register, generous line-height, tracking, no-bold-for-hierarchy, and two-scripts-one-neutrality as the source's type rules rather than a separately published type specification |
| Assets `:227` | Google s2 favicon as catalog identity metadata rather than a MUJI-hosted brand file; product photography on white as first-party catalog content; product photography not replaced with invented brand-color decoration |
| Capture record `:234` | Source state contract kept rather than delegated; role-based applicability; primitive type only when YAML records one; kind/map omitted where interactive-kind is unconfirmed; named Focus not `focus-visible`; YAML `button-disabled` and `input-error` as recipes; each control's padding/radius/shadow/hex kept on that control; YAML `states`/`active` beside prose hover/checked; toast `0.12`; notice border beside Border-left; product-card `0px` off YAML rounded; Outline Tag / Filled / Banner as §4-only; not a complete state-coverage claim |
| Primary disabled recipe `:290` | YAML `button-disabled` as the disabled treatment recipe rather than a fifth interactive component with its own map; Primitive type `button` preserved on that recipe |
| Input recipes `:417` | Named Focus not `focus-visible`; YAML `input-error` as the error recipe rather than a second interactive component; Filled (subtle) as a §4-only variant with primitive type not in the token set |
| Layout & Platforms `:675` | Breakpoint table as source-stated intended behavior rather than a live computed cross-viewport capture; `~1180px` / `~720px` as content measures rather than spacing steps; source §9 section local recipe as section-internal padding and section-body ink unmerged from between-band rhythm, from the unitless spacing step, and from Type-role Body ink; emptiness-as-material and related whitespace notes as the source's layout notes |
| Content & Locales `:730` | Voice characterization (unbranded paper bag; describes, it does not sell; modest contentment) as reconstruction voice rather than a separately published microcopy specification |
| Forbidden register `:742` | Forbidden-register list, including claiming-superiority-contradicts-the-no-brand-premise and the-voice-is-this-will-do, as source-stated §10 rather than a separately published microcopy specification |
| Named gaps `:778` | List as unnamed values rather than as coverage of domains the source never named |

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics.

| Item | Disposition |
|---|---|
| §13 Personas — three fictional archetypes | Deleted. The source's own persona header and its closing note both state that the archetypes are fictional and that the names are illustrative. Biographies, ages, and cities are not re-hosted here (D2, D2a). The source's publicly observable segment list stays in Audience. |
| §15 easing curve values — `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)` | Removed from the portable body as unsourced curves; kept here verbatim. `cubic-bezier(0.0, 0.0, 0.2, 1)` and `cubic-bezier(0.4, 0.0, 1, 1)` and `cubic-bezier(0.4, 0.0, 0.2, 1)` match the example values that `spec/omd-v0.1.md` carries and defines as non-brand implementation defaults that must not be moved into a reference. The roles and their uses stay in the portable body. |
| §9 Agent Prompt Guide — Quick Color Reference, six Example Component Prompts, eight-step Iteration Guide | Deleted as tool-facing restatement. Unique values were restated rather than dropped: product-card hover `#f7f7f7` tint (Product Card + signature motion 3); section prompt heading 22px weight 300 (Type roles keep-both with YAML section weight 400); section prompt `64px vertical padding` and `body 14px line-height 1.7 `#666666`` (Layout Section local recipe `:689`, unmerged from `64px–96px between major bands` and from Type-role Body ink). |
| Legacy H1 `# Design System Inspiration of MUJI (無印良品)` | Replaced by the Core v2 identity line `# MUJI Design System`. Display name 無印良品 remains in Experience Scope. |
| Legacy footer `**Verified:** … / Tier 1 / Tier 2 / Conflicts / Note` | Moved to Freshness, Sources, and Identity above. |
| Sibling-only observations listed in Raw samples | Kept in this file. Not promoted into the portable body. |

## Proof notes

- `tokens.source: prose-derived`; `tokens.extracted: 2026-06-09`
- `components_harvested: true`; eighteen component records in the source token set
- No `ds.type` field in the source (A1c absence recorded)
- Uncaptured `focus-visible` treatments are omitted as values. They are not `not-applicable` for want of a capture; applicability follows control meaning. Named Focus on input is a different evidence kind. State coverage is not claimed complete.
- No published first-party UI specification is named in the source, so every derived-editorial close uses the toss-form `not MUJI-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석). Portable `DESIGN.md` complete B2a qualifications: 26. Derived editorial inventory data rows: 26.
- Motion has no computed-CSS evidence domain in this record. Durations, easing roles, signature motions, and reduced-motion stay with an evidence qualification; the exact curves are not carried.
