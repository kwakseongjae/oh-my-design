# Gogolook provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the Gogolook migration. Canonical source remains `web/references/gogolook/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | gogolook |
| name | Gogolook |
| country | TW |
| category | consumer-tech |
| homepage | https://whoscall.com |
| primary_color | `#0CD25F` |
| logo | `type: favicon`, `slug: https://cdn.prod.website-files.com/6824b7a0497f20e292c20ff9/68ac49dd7f01530f6ef06b10_Webclip.png` |
| omd format (source) | 0.1 |
| verified | 2026-06-01 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |
| ds.name | Whoscall Brand Guidelines |
| ds.url | https://whoscall.com/en/brand |
| ds.type | brand |
| ds.description | Whoscall's official brand page — logo, the documented brand green #0CD25F, and usage guidelines. |

`ds.type: brand` is kept as a value, not paraphrased away (A1c): it records that the design-system evidence for this reference is a published brand page rather than a published UI-specification site. The portable body names that page as the Whoscall Brand Guidelines and uses the three colors it documents. The description sentence itself is 0 in `DESIGN.md` and 1 here.

`tokens.source: prose-derived` is the source's own grading of the token block: the machine-readable values were derived from the document's prose on 2026-06-09, eight days after the 2026-06-01 live inspection that produced the prose. The portable body states that relation in plain language and does not carry the field name.

The logo entry is a favicon / webclip URL on a Webflow-hosted CDN domain. The source records the URL and the `type: favicon` classification and nothing further about its ownership or license, so the URL is recorded here only and is not presented in the portable body as a separately published Gogolook brand-asset file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-01 |
| tokens.extracted | 2026-06-09 |
| surfaces inspected | 2026-06-01 |

Conflicts unresolved, quoted verbatim from the source footer: `none`.

## Surfaces

The source declares no surface ids and no per-surface anchors. The rows below are its own URL list with its own parenthetical descriptors, unaltered.

| url | source descriptor | inspected |
|---|---|---|
| https://whoscall.com | live marketing / download surface (homepage in YAML) | 2026-06-01 |
| https://whoscall.com/en/brand | documented brand color page — Whoscall Green #0CD25F, Dark Gray #2C3E50, White #FFFFFF | 2026-06-01 |
| https://www.gogolook.com/about | corporate brand / company background | 2026-06-01 |
| https://medium.com/gogolook-tech | brand-owned engineering/tech blog | 2026-06-01 |

## Sources

### Tier 1

Footer list, verbatim: https://www.gogolook.com/about (corporate brand / company background), https://whoscall.com/en/brand (documented brand color page — Whoscall Green #0CD25F, Dark Gray #2C3E50, White #FFFFFF), https://medium.com/gogolook-tech (brand-owned engineering/tech blog).

The YAML homepage `https://whoscall.com` is the live marketing surface the body and the sibling attach live values to. It is not repeated in the footer Tier 1 list; both appearances are recorded and neither is dropped.

### Tier 2 (no usable record)

Quoted verbatim from the source footer: `getdesign.md/gogolook — NOT LISTED. refero — not listed. Note: documented brand green #0CD25F is the catalog primary; the live download CTA renders the near-twin #05F067.`

## Source frontmatter strings (verbatim)

The source's frontmatter carries its own `use:` role descriptions and lowercase hex forms whose exact byte form differs from the §2/§4 prose that restates them in uppercase. They are reproduced verbatim here so that no source-authored string is lost to a near-duplicate paraphrase (A5).

| Frontmatter key | Verbatim string |
|---|---|
| `tokens.colors.brand` | `#0cd25f` |
| `tokens.colors.cta` | `#05f067` |
| `tokens.colors.brand-tint` | `#e6faef` |
| `tokens.colors.dark-gray` | `#2c3e50` |
| `tokens.colors.text` | `#262626` |
| `tokens.colors.canvas` | `#ffffff` |
| `tokens.colors.accent-pink` | `#f53f90` |
| `tokens.colors.accent-teal` | `#019d91` |
| `typography.hero.use` | "Nunito rounded display hero" |
| `typography.body.use` | "Noto Sans body copy" |
| `typography.button.use` | "Pill button label" |
| `components.button-primary.use` | "Primary download CTA pill, 56px height" |
| `components.button-secondary.use` | "Secondary demo pill, 56px height" |
| `components.button-premium.use` | "Premium / upgrade action on light-green surface, 57px height" |
| `typography.family` | `sans: "Noto Sans"`, `mono: "Noto Sans"` |

The portable body uses the prose / sibling uppercase hex forms (`#0CD25F`, `#05F067`, `#E6FAEF`, `#2C3E50`, `#FFFFFF`, `#F53F90`, `#019D91`) because those are the forms the brand page and the live-inspect notes record. `#262626` is the same in both cases.

## Claim ledger

The source attributes documented brand-page colors to `https://whoscall.com/en/brand` and live values to `https://whoscall.com`. Token-block values are graded `prose-derived` and dated 2026-06-09. Nothing in this column comes from inventing a surface the source does not name.

| Claim | Evidence class | Surface named by the source |
|---|---|---|
| tokens.colors.brand `#0CD25F` / YAML `#0cd25f` | documented brand page | https://whoscall.com/en/brand |
| tokens.colors.dark-gray `#2C3E50` / YAML `#2c3e50` | documented brand page | https://whoscall.com/en/brand |
| tokens.colors.canvas `#FFFFFF` / YAML `#ffffff` | documented brand page and live ground | https://whoscall.com/en/brand and https://whoscall.com |
| tokens.colors.cta `#05F067` / YAML `#05f067` | live computed | https://whoscall.com |
| tokens.colors.brand-tint `#E6FAEF` / YAML `#e6faef` | live computed | https://whoscall.com |
| tokens.colors.text `#262626` | live computed | https://whoscall.com |
| tokens.colors.accent-pink `#F53F90` / YAML `#f53f90` | live computed | https://whoscall.com |
| tokens.colors.accent-teal `#019D91` / YAML `#019d91` | live computed | https://whoscall.com |
| tokens.typography.family.sans / .mono `Noto Sans` | YAML family block | — |
| tokens.typography.hero 118 / 500 / 1.1 Nunito | live computed | https://whoscall.com |
| tokens.typography.body 16 / 400 / 1.5 Noto Sans | live computed | https://whoscall.com |
| tokens.typography.button 16 / 500 / 1.0 | live computed (pill labels) | https://whoscall.com |
| tokens.spacing xs 8 / sm 16 / base 16 / lg 32 / xl 48 / section 64 | prose-derived named set | — |
| tokens.rounded sm 40 / md 40 / lg 100 / full 9999 | named set; 100 and 40 also live on controls | https://whoscall.com (100px, 40px) |
| tokens.components.button-primary.* (`type: button`) | live computed | https://whoscall.com |
| tokens.components.button-secondary.* (`type: button`, `bg: rgba(255,255,255,0.8)`) | live computed | https://whoscall.com |
| tokens.components.button-premium.* (`type: button`) | live computed | https://whoscall.com |
| Company description — Taiwan TrustTech, Whoscall caller-ID and anti-scam | corporate background | https://www.gogolook.com/about |

## Portable derived-editorial scope

The derived-editorial set is the following, and it is one-to-one with the body. Measured on `DESIGN.md` with `grep -oF … | wc -l`: `derived editorial implementation inference` 17, `Gogolook-authored` 17, `separately published UI specification` 17.

| Reading | DESIGN.md line | Legacy source | Qualifier placement |
|---|---:|---|---|
| Scope atmosphere and evidence-domain readings (friendly protection vs enterprise security; "you're protected"; trusted neighbor; near-twin; proxy refusal; corporate/blog not token sources) | 15 | §1, §11 | adjacent on the same line |
| Primary tasks read from captured controls | 21 | §4 controls; not §13 | adjacent on the same line |
| Audience group-level reading | 30 | §3 product characterization; §11 product | adjacent on the same line |
| Distinctive-trait characterizations ("near-twin", "identity hue", "used as accents, not primaries") | 34 | §1, §2 | adjacent on the same line |
| Five principles | 45 | §12 | header of the list |
| Application rules | 55 | §7 Do | header of the list |
| Avoidances | 64 | §7 Don't | header of the list |
| Semantic-color role names and characterizations | 77 | §2 | header of the color groups |
| Spacing measurement-class (named prose set ≠ live padding; not an independently computed scale) | 95 | §5 spacing vs §4 padding | adjacent on the same line |
| Elevation reading (restrained, fill not shadow) | 108 | §6 | adjacent on the same line |
| Qualitative motion character | 114 | §15 | adjacent on the same line |
| Font-evidence class sorting | 124 | migration sort of §3 | adjacent on the same line |
| Family substitution ban and canonicity reading | 139 | §3 | adjacent on the same line |
| Type pairing reading (invite / sober / multilingual) | 141 | §3 | adjacent on the same line |
| §14 qualitative state constraint (not invented values) | 164 | §14 | adjacent on the same line |
| Layout composition, qualitative scaling, and named-set-not-a-measured-grid reading | 246 | §5, §8 | adjacent on the same line |
| Voice reading (trusted neighbor; the source's "we've got your back" / "threat detected" pair sits under this qualifier) | 255 | §10 | adjacent; the pair is the next sentence |

None of these 17 items carries separate Gogolook authorship in the source. The three documented brand-page colors are not in this set; they are published on the brand page.

## Sibling verification file (adopted as corroboration)

`web/references/gogolook/.verification.md` exists (checked with `find web/references/gogolook -type f`, since a dotfile is invisible to `ls` and to a `*` glob). It was adopted as Proof corroboration, not as a widening source. Inspection date 2026-06-01, method `playwright getComputedStyle (live DOM) + raw source-file fetch`, and the four URLs match the source footer plus the YAML homepage. No viewport, no selector inventory, and no extra hex or metric was taken from it into the portable body.

Sibling raw samples that corroborate values already in the source (mentions of corroboration, not new body facts):

- Documented brand page: Whoscall Green `#0CD25F`, Dark Gray `#2C3E50`, White `#FFFFFF`
- Live `whoscall.com`: download pill `rgb(5,240,103) = #05F067`, text `#262626`, border-radius 100px, height 56px, font 16px / 500
- Live premium button `rgb(230,250,239) = #E6FAEF`, border-radius 40px, height 57px
- Live Nunito hero 118px / 500; Noto Sans body 16px
- Live category accents `#F53F90`, `#019D91`; light-green tint `#E6FAEF`; primary text `#262626`

The RGB expansions `rgb(5,240,103)` and `rgb(230,250,239)` are sibling-source evidence for `#05F067` and `#E6FAEF`. This paragraph mentions them as a disposition pointer, not a portable-body use. The portable `DESIGN.md` does not carry those RGB strings as values.

## Omission ledger

| Omitted | Reason |
|---|---|
| §13 persona entries 3 (fictional role titles and segment descriptions) | Fictional biography (D2). Not promoted, and deliberately not re-recorded here, not even as titles. The source's group-level product characterization — a Taiwan-rooted multilingual consumer product, and people who use Whoscall for caller identification and anti-scam — survives in the body's Audience because the source states those groups outside the persona entries as well. |
| §9 Agent Prompt Guide | Tool-facing prompt packaging with no receiving slot. Every hex, size, radius, padding, height, and family inside it already stands in §2, §3, or §4, so nothing unique was lost (A3). |
| Logo slug URL | Kept in this ledger only (Identity row above). The source classifies it as `type: favicon` and states nothing about ownership or license. |
| Sibling RGB expansions `rgb(5,240,103)` and `rgb(230,250,239)` | Corroboration of hex values already in the source. Mentioned here as disposition, not a portable-body use. |
| YAML lowercase hex forms (`#0cd25f`, `#05f067`, `#e6faef`, `#2c3e50`, `#ffffff`, `#f53f90`, `#019d91`) | Byte form kept in the verbatim table above. The portable body uses the prose / sibling uppercase forms the brand page and live-inspect notes record. |

## Proof notes

- verification method recorded by the sibling and consistent with the source footer: playwright `getComputedStyle` plus raw source-file fetch, 2026-06-01
- components_harvested: true
- Interaction expansions: 0. Only default component observations are present.
- Uncaptured hover / pressed / focus / disabled treatments are omitted. They are not `not-applicable` grounds. Applicability follows control meaning. State coverage is not claimed complete.
- Loading, error, and success are closed as `not-applicable` on all three recorded controls for a role reason — each is a destination marketing CTA that sends the reader onward and commits no operation that pends — never for absence of observation (C2).
- No motion duration, curve, animation name, transition property, or reduced-motion behavior is attributed. The B3 promotion gate is written in the body's Foundations Motion paragraph.
- Source SHA-256: `ee088f48dbd6803ae8c995be1e008c90724ea19efcab296604ab0b4248e4514a`
- Sibling SHA-256: `2b8b88b73d7be3e91401037db9de399c71aede7c0ab823ac06920d6a9c613a7a`
