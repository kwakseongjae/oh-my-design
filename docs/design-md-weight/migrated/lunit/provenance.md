# Lunit provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the Lunit migration. Canonical source remains `web/references/lunit/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | lunit |
| name | Lunit |
| name_ko | 루닛 |
| country | KR |
| category | healthcare |
| homepage | https://www.lunit.io |
| primary_color | `#1032cf` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=lunit.io&sz=256` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The logo slug is a third-party favicon-proxy URL, not a Lunit-published asset file. The portable Assets section names it as a catalog pointer.

The YAML key `tokens.source: prose-derived` stays in this ledger (`prose-derived` count in the portable body: 0). The portable Scope states in plain language that the machine-readable value set is dated 2026-06-09 and was drawn from the record's own prose after the 2026-05-14 inspection.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-05-14 |
| tokens.extracted | 2026-06-09 |
| live inspect (source §15 / proof file) | 2026-05-14 |
| proof `captured_at` | 2026-05-14T10:56:00+09:00 |

Conflicts unresolved: none. Source footer, verbatim: "None. All Tier 1 measurements are internally consistent (single source = live DOM on 2026-05-14)."

Verification method recorded by the source: Chrome DevTools Protocol :9222, `Runtime.evaluate` + `getComputedStyle` on production DOM. Surface: `https://www.lunit.io/` (English root). Confidence as the source states it: HIGH for color, type, radius, elevation; MEDIUM for spacing (only viewport-relative measured).

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing homepage (English root) | https://www.lunit.io/ | 2026-05-14 |

Named in the source and not used as token surfaces:

| id | kind | url | note |
|---|---|---|---|
| about | corporate narrative | https://www.lunit.io/en/about/ | no DS content |
| careers | corporate narrative | https://www.lunit.io/en/careers/ | no DS content |
| investors | investor-relations (referenced indirectly) | investors.lunit.io | no design content |
| insight-products | clinical products named in prose | INSIGHT CXR / DBT / MMG | marketing semantic colors do not live here; no computed tokens in this record |

## Sources

### Official design-system lookup (negative result, from the source)

- `design.lunit.io` — DNS fails (HTTP 000, no such subdomain)
- Lunit GitHub org `github.com/lunit-io` — 10 public repos enumerated: `archon`, `benchmark-ssl-pathology`, `CoEval`, `dicom-rs`, `lumberjack`, `mmg-model-nia`, `nlst-nodule-detection`, `ocelot23algo`, `openslide`, `spec-cxr`. All medical-imaging / ML research code; no design-system / tokens / component-library / Storybook repo
- keyword scan of `www.lunit.io` HTML for `design-system / design-tokens / brand-guidelines / lunit-ui / storybook` — no hits (the only match was a generic `Figma` string in cookie-vendor copy)
- Source conclusion: Lunit does not publish an open design system, Storybook, or brand-guidelines site as of 2026-05-14

The source's motive reading ("they have no incentive to ship a public DS") is an editorial sentence in the source footer. It is not promoted into the portable body.

### Third-party DS directories (no usable record)

- `getdesign.md/lunit` — not present
- `styles.refero.design/?q=lunit` — not present

Those directory findings describe this catalog's coverage. They stay here. Portable-body counts: `getdesign` 0, `refero` 0.

### Stack fingerprint (observed, source §15)

- CMS: WordPress + Oxygen Builder (`oxy-*` and `ct-*` class prefixes)
- Scroll motion: AOS (`aos-init aos-animate`) — the library and class names also stand in the portable Motion section
- Fonts: Lexend (likely Google Fonts), ClashGrotesk (likely Fontshare / Indian Type Foundry)
- Analytics: Google, HubSpot, Microsoft (per cookie-consent disclosure)
- CSS custom properties: only WordPress defaults (`--wp-*`, `--wp--preset--*`) — no Lunit-namespaced custom properties exported globally, which the source says corroborates the "no public DS" finding

CMS, analytics, and `--wp-*` custom-property detail stay in this ledger. They are not portable tokens.

## Canonical proof — live-inspect file the source points at

There is no `web/references/lunit/.verification.md` (`ls -a` / `find … -name '.verification.md'`). The source §14 points at `assets/_reference/.live-inspect-proof.json` for the raw CDP `getComputedStyle` samples (requirement ≥5; 8 captured). That file is adopted here as the raw inspect record the source names. It is not a `.verification.md` sibling.

| Field | Value |
|---|---|
| path | `web/references/lunit/assets/_reference/.live-inspect-proof.json` |
| SHA-256 | `d0354e4f8346b656084da53aa562ca213d130680ab6aad1555d7f3b7ad2e224e` |
| captured_at | 2026-05-14T10:56:00+09:00 |
| method | Chrome DevTools Protocol (CDP) :9222 Runtime.evaluate + getComputedStyle |
| browser | Chrome/148.0.7778.97 |
| page URL | https://www.lunit.io/ |
| page title | Early Detection & Precision Oncology Medical AI Software \| Lunit |
| viewport | w 1280, h 713 |
| raw_samples | 8 |

Also pointed at by source §14, and read:

| File | SHA-256 |
|---|---|
| `assets/_reference/tokens.json` | `cf347001389d2607d0cb541410d5d0b87e1fee8672d90516b950d33ce4ad54af` |
| `assets/_reference/fonts.json` | `7ba2c7ce9883314123fe463dc9ce8245067ed57354bd1508435436147acf17c4` |
| `assets/_reference/structure.json` | `3fbefea1097f4e18863a060745fde0978a3353437a81e35ecc49791c06a8dbfc` |

**Why the proof file is adopted.** Date, method family (CDP `getComputedStyle`), URL, and sample count agree with the source §15 short form. It is the raw record the source names. Values that exist only in the proof or in `tokens.json` / `structure.json` and not in the source `DESIGN.md` stay in this ledger and are not portable tokens.

## Where the proof file and the source DESIGN.md diverge

Neither side is selected. Portable values follow the source `DESIGN.md`.

| # | Class | Source DESIGN.md | Proof file | Portable |
|---|---|---|---|---|
| 1 | Direct contradiction | Hero H1 weight 400, line-height 84px (YAML `1.08`) | `fontWeight: "300"`, `lineHeight: "92px"` | Source writings. Proof 300 / 92px not promoted |
| 2 | Direct contradiction | CTA `Lexend 16.4px / weight ~400`, padding `~14px 28px` | `fontWeight: "500"`, `padding: "7px 24px"`, `lineHeight: "22.4px"` | Source writings. Proof padding/weight/lh not promoted |
| 3 | Direct contradiction | Nav family Lexend | Top-link `INVESTORS` computes `ClashGrotesk, system-ui, sans-serif` | Source Lexend writing. Proof family not promoted as a replacement |
| 4 | Primitive type | YAML `tokens.components.cta-pill.type: button` | sample tag `a` | YAML `button` kept as Primitive type (A1b). Proof tag stays here |
| 5 | Copy inventory | Stats band `10,000+ Customer Sites · 65+ Countries · 700+ Publications` | same three plus `100+ Partnerships` | Source three-part string. The fourth item is proof-only |
| 6 | Source IP rule | Source §15: no verbatim taglines reproduced in DESIGN.md | H1 text `Conquer Cancer Through Cutting-Edge AI`; H2 sequence in `structure.json` | Not promoted. Quoted in the asset-sidecar table below as the proof/`structure.json` record, not as portable copy |

`tokens.json` also records `color.ink.muted: #141414`, which is not a YAML `tokens.colors` key and is not in the source DESIGN.md body. Not promoted.

## Asset-sidecar strings, recorded here and not promoted

The source DESIGN.md declined to copy live headings into itself (`structure.json` `ip_note`: "Section headings are NOT copied into DESIGN.md verbatim"). This ledger records that those strings exist in the sidecar files the source points at. Mention here is disposition of the sidecar, not use as a portable token.

From `structure.json` / proof H1: the captured homepage H1 and the H2 sequence the sidecar lists. From proof stats text: `100+ Partnerships`. From proof page title: `Early Detection & Precision Oncology Medical AI Software | Lunit`. From proof CTA sample: tag `a`, padding `7px 24px`, weight 500. From proof hero sample: weight 300, line-height `92px`. From proof viewport: 1280×713. From `tokens.json`: `#141414`.

## Claim ledger

Claims use YAML anchors from the source. Surface `home` = `https://www.lunit.io/` / computed-style / 2026-05-14. Token values themselves were packed into YAML on 2026-06-09 from the record's own prose (`tokens.source: prose-derived`).

| claim | surface |
|---|---|
| tokens.colors.hero-ink `#151515` | home |
| tokens.colors.body-ink `#232f32` | home |
| tokens.colors.signature-blue `#1032cf` | home |
| tokens.colors.bright-blue `#2a4eef` | home |
| tokens.colors.canvas `#ffffff` | home |
| tokens.colors.dark `#000000` | home |
| tokens.colors.footer `#eff0f4` | home |
| tokens.colors.on-dark `#ffffff` | home |
| tokens.typography.family.sans `Lexend` | home |
| tokens.typography.family.mono `Lexend` | home |
| tokens.typography.hero 78 / 400 / 1.08 use `Hero H1, ClashGrotesk` | home |
| tokens.typography.section 52 / 400 / 1.10 use `Section H2, ClashGrotesk` | home |
| tokens.typography.body-lg 20 / 300 / 1.40 use `Lead body, Lexend` | home |
| tokens.typography.body 18 / 300 / 1.40 use `Standard body, Lexend` | home |
| tokens.typography.body-sm 15 / 400 use `Small body, Lexend` | home |
| tokens.typography.nav 13 / 400 use `Uppercase nav, tracked, Lexend` | home |
| tokens.spacing xs 4 / sm 8 / md 12 / base 16 / lg 24 / xl 32 / xxl 48 / section 64 | home |
| tokens.rounded sm 4 / md 4 / lg 4 / full 9999 | home |
| tokens.shadow.none `none` | home |
| tokens.components.cta-pill type button / bg `#000000` / fg `#ffffff` / radius 9999 / use `Primary marketing CTA Contact Us, the single pill` | home |
| tokens.components.surface type card / bg `#ffffff` / fg `#232f32` / radius 0 / use `Square-cornered section/card/image surface` | home |
| tokens.components.blue-band type badge / bg `#1032cf` / fg `#ffffff` / radius 0 / use `Signature blue system-affordance band` | home |

## Capture selectors (from the proof file; not portable tokens)

| Sample key | Pointer |
|---|---|
| hero-h1 | `h1.lunit-hero__headline.f-size-6xl` |
| stat-number | `div.supreme-stats-wrapper` |
| cta-4 | `a.lunit-header__cta-button.btn.btn-primary.btn-md` |
| nav-link-1 | `a.lunit-header__top-link` |
| footer | `footer.supreme-footer` |
| body-p-1 | `p` (unnamed class) |
| section-bg-3 | `section.oxy-superbox-section.supreme-element.supreme-lunit-technology-hero.aos-init` |
| raw1-button-16 | `button.CybotCookiebotDialogBodyButton` (`Allow all`) |

Cookie-banner geometry (`3.75px` radius) is in the source DESIGN.md as a third-party cookie chip. The Cookiebot class name is proof-only and stays here.

## Derived editorial inventory

Sites in the portable `DESIGN.md` that carry an adjacent complete qualifier. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not Lunit-authored or a separately published UI specification." This is an index of the derived-reading sites, not a completeness claim. Portable `DESIGN.md` carries 26 complete B2a qualifications. This table is 26 data rows. Preamble sentences on this page are not portable qualifications.

| Location | Qualified reading |
|---|---|
| Experience Scope `:9` | English homepage as this contract's token surface; INSIGHT product names as the source's own bound on where marketing semantic colors do not live; about/careers and the investor-relations pointer as pages that do not supply tokens |
| Experience Scope `:11` | YAML keys kept beside longer prose rather than choosing one; listed values as the captured English-homepage layer rather than a declared global or INSIGHT product palette; canvas and inverse as two roles of the same hex in that list; 2026-06-09 machine-readable set as drawn from the record's own prose after the inspection rather than a published token specification |
| Experience Scope `:13` | Characterizations (journal-article read, withheld blue, geometric thesis, anti-tropes, scientific composure, editorial band switching, motion as positioning signal, *we know who is looking*) as source readings, not a published UI specification; hex values, families, radii, and labels beside them are the source's own |
| Primary tasks `:19` | Selecting the three primary tasks from recorded controls; not from a persona section |
| Audience `:28` | Dropping later agent-selection grouping rather than promoting it; carrying no name, age, city, motivation, or affiliation classification; reading source-named groups as audience |
| Distinctive traits `:32` | Classifying the list as a restatement of Key Characteristics, and the groupings and the readings inside them |
| Principles `:45` | Five stems as thesis or voice rules the source states; each UI implication attached to a stem; toss-form close |
| Application rules `:55` | Six Do rules and the reasons attached to them |
| Avoid `:66` | Don't list and refusal list, and the reasons inside them |
| Semantic color `:81` | Role names from token-set keys; pairing each hex to its token-set path; canvas `#ffffff` (page canvas and Surface Background) off on-dark `#ffffff` (label on dark CTAs/bands and Primary CTA Text) off Blue band Text `#ffffff` (label on signature-blue, not a third color key); dark `#000000` as dark-band / CTA fill off standing-copy ink off Secondary nav Color `#000000` when that nav is on light; hero ink off body ink; signature blue off bright blue; marketing-surface observation off INSIGHT product UI |
| Bright blue `:86` | `#2a4eef` kept off a `focus-visible` treatment; a generic Focus mention is not `focus-visible` treatment evidence |
| Semantic notes `:92` | "Unusual relative to other B2B health-AI sites" reading of the blue-as-system / black-as-brand-action split |
| Spacing `:98` | Unitless YAML map kept off the two px paddings; `sm: 8` not the `8` in the nav range; `lg: 24` not a pixel length; eight-step unitless map as recorded steps rather than a complete mathematical scale |
| Shape `:115` | YAML `4` unmerged from prose `0px` / `100px` / `3.75px`; `0px` off `100px` off `9999` off `3.75px`; binary 0-or-pill rule as the source's geometric thesis rather than a published Lunit radius specification |
| Elevation `:127` | Page read as editorial spreads rather than a stack of UI cards; depth from full-bleed band switching, not drop shadows |
| Motion `:133` | Restraint as a positioning signal — motion as a luxury the audience does not need |
| Motion `:135` | Five-kind promotion gate; refusal of a partial confirmation; a match against an official framework or vendor document is not that gate |
| Font evidence `:143` | Evidence-class sorting; official-product-use row as a negative lookup rather than a Lunit type specification; live ClashGrotesk/Lexend surface-use; `system-ui` / `Arial` fallbacks as not brand faces; License row as font-author terms rather than Lunit brand assets |
| Family `:164` | Both family writings kept; stacks refused as brand faces; Inter substitution refused as a brand-face promotion |
| Family `:166` | Lexend reading-fatigue rationale as typeface-author background plus editorial |
| Type roles `:170` | YAML unitless kept beside §3 px; YAML `use` verbatim; `hero` `78` / `1.08` off `78px` / `84px`; `section` `52` off `~48–56px`; `body` `18` off `18.4px`; `nav` `13` off `13.2px`; `body-lg` `20` / `1.40` beside `20px / 28px` |
| Type roles `:181` | Hero wrap rule called editorial; LIGHT weight called the brand voice |
| Assets `:194` | Google s2 favicon as catalog identity pointer rather than a Lunit-hosted brand file; imagery register and blue-in-imagery / blue-withheld-from-CTA as the source's own asset rules rather than a published illustration specification; source headings kept out because the source declined to copy them |
| Capture record `:203` | Applicability note, interactive-kind and applicability verdicts and the reason for either; YAML primitive type attached only when recorded; non-YAML components labelled `not in the token set`; C4 omission of kind/map for Surface and Blue band; static default-only geometry plus the one recorded card-hover ink-shift rather than a complete interaction set; `#2a4eef` not assigned to a `focus-visible` row; not a complete state-coverage claim |
| Layout `:327` | Patterns as homepage recordings rather than a cross-surface layout specification; page as editorial spreads; copy-block measure comfortable |
| Content `:342` | Voice rules as structural instructions, not Lunit-authored doctrine or a complete product-microcopy guide; `루닛` kept beside `Lunit` rather than as a replacement |

No published first-party UI specification was found; the B2a example form is used as-is.

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 "When to Reach for This System" (agent-selection brief, including the consumer-fintech / lifestyle / social contrast) | Deleted as tool-facing selection guidance. Audience in the portable body is the §1 group wording only. No persona biographies existed to delete. |
| Source §3 Inter-300 substitute instruction as a brand-face token | Not promoted as the brand face. The portable Family section records the source instruction and refuses the substitution. The instruction string `Inter 300` survives there as the refused instruction, not as a family token |
| Source §9 Agent-style construction remaining after Do/Don't were moved | No separate §9 prompt block in this atypical source. Do/Don't lived in source §16 and moved to Experience |
| Unattributed cubic-bezier curves | None in the source. Nothing to delete. Duration and signature-motion statements were not deleted |
| Source footer motive sentence about incentive to ship a public DS | Kept in this ledger's lookup section; not in the portable body |
| Proof-only computed values listed under divergences | Ledger only |
| `structure.json` heading strings the source declined to copy into DESIGN.md | Ledger only, under Asset-sidecar strings |

## IP / licensing notes (from the source)

- Brand assets in `assets/_reference/` are for reference inspection only
- No verbatim taglines from `www.lunit.io` are reproduced in the source DESIGN.md. The portable body keeps that bound
- Lexend is OFL-licensed. ClashGrotesk is free via Fontshare for commercial use under their license — verify license terms before shipping derivative work
