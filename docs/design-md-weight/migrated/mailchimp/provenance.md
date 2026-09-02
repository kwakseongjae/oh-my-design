# Mailchimp provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/mailchimp/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | mailchimp |
| name | Mailchimp |
| country | US |
| category | marketing |
| homepage | `https://mailchimp.com` |
| primary_color | `#ffe01b` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=mailchimp.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-17 |
| added | 2026-06-17 |
| tokens.source | reconciled |
| tokens.extracted | 2026-06-17 |
| tokens.note | primary = live Cavendish Yellow CTA (#ffe01b, rgb 255,224,27); Peppercorn ink (#231e15) is the text/heading + 1px button outline; Teal Ink (#004e56) is the link color. Live inspect + refero Tier 2 agree (Press Black/Voltage Yellow/Teal Ink). getdesign.md has no Mailchimp entry. |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog `primary_color` `#ffe01b` is dual: identity here, and a keep-on-same-hex-as-primary record in `DESIGN.md` Scope / Semantic color / Start Free Trial. The favicon URL is dual: identity here, and a portable Assets pointer in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-17 |
| added | 2026-06-17 |
| surfaces inspected | 2026-06-17 |
| tokens.extracted | 2026-06-17 |

The source footer records the verification verbatim as **Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none (Tier 1 live inspect and refero Tier 2 agree on color taxonomy, type system, and radii) — as the source footer records.

## Surfaces and sources

| id | kind | url | inspected / captured |
|---|---|---|---|
| home | product-surface | `https://mailchimp.com/` | 2026-06-17 |
| brand-assets | official-doc | `https://mailchimp.com/about/brand-assets/` | 2026-06-17 |
| home-live | product-surface | `https://mailchimp.com/` | 2026-06-17 |
| brand-assets-live | official-doc | `https://mailchimp.com/about/brand-assets/` | 2026-06-17 |
| about | official-doc | `https://mailchimp.com/about/` | 2026-06-17 |
| voice | official-doc | `https://styleguide.mailchimp.com/voice-and-tone/` | 2026-06-17 |

YAML `homepage` is `https://mailchimp.com` (catalog identity; not a brand-assets token-surface claim by itself).

### Tier 1 (as listed in the source footer)

- `https://mailchimp.com/` (homepage live DOM — hero CTA, nav, pricing cards, badges)
- `https://mailchimp.com/about/brand-assets/` (official brand page — "Cavendish Yellow is Mailchimp's hero color. We use Peppercorn for accents.")

### Additional brand-owned voice / narrative sources (source HTML comment and §10 / §11)

- `https://styleguide.mailchimp.com/voice-and-tone/` (official content style guide)
- `https://mailchimp.com/about/` (mission "empower the underdog", founding story)

These are voice and narrative sources, not computed-token surfaces.

### Tier 2

- styles.refero.design/style/24929007-7e62-4c96-a940-7de65438a578 (Mailchimp — confirms Press Black `#231e15`, Voltage Yellow `#ffe01b`, Teal Ink `#004e56`, Graphik Web + Means Web, 26px pill / 3px nav / 8px badge / 10px card, warm-tinted shadow)
- getdesign.md/mailchimp — no entry (not listed)

These are cross-check attempts. Refero labels Press Black / Voltage Yellow are corroboration names, not replacements for Mailchimp's Cavendish Yellow / Peppercorn.

### Narrative (not interface tokens)

- Official About: `https://mailchimp.com/about/`
- Wikipedia: `https://en.wikipedia.org/wiki/Mailchimp`
- Dave Lu founder-stories: `https://www.davelu.com/p/founder-stories-ben-chestnut-of-mailchimp`
- Inside Philanthropy: `https://www.insidephilanthropy.com/home/2021-9-22-after-a-big-acquisition-mailchimps-co-founders-are-the-latest-multi-billionaires-to-watch`
- Source §11, kept as narrative context in portable Scope: built to give small-business owners the marketing tools their larger competitors took for granted; an almost unheard-of path; the design system is a direct expression of that posture; rejecting the cold polish of enterprise software; small operator, not the incumbent; What Mailchimp refuses (gradient-heavy, frictionless SaaS aesthetic; hyperbolic over-promising of growth marketing); what it embraces (editorial serif; voltage-yellow; Freddie the wordless winking mascot; outsider-art illustration).
- Source §15 Easings Use: Arriving — cards, dropdowns, sheets; Dismissals; Two-way transitions. Signature pair `motion-standard / ease-enter`. Motion is warm and human but restrained; gimmicky against the editorial register.

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: reconciled` and `tokens.extracted: 2026-06-17`. That producer string is ledger metadata. `components_harvested: true` is ledger metadata.

## Claim ledger

Claims use YAML anchors from the source: `home` = mailchimp.com / home-live / live-inspect / 2026-06-17; `brand-assets` = mailchimp.com/about/brand-assets / brand-assets-live / official color-name copy / 2026-06-17.

| claim | surface |
|---|---|
| tokens.colors.primary / ink / on-primary / canvas / surface / surface-warm / hairline / ink-deep / ink-pure / charcoal / graphite / teal / slate / forest / sand | home |
| tokens.typography.family.display / family.sans / display-hero / heading-lg / heading / heading-sm / body / label / caption | home |
| tokens.spacing.* / tokens.rounded.* / tokens.shadow.hairline / tokens.shadow.elevation | home |
| tokens.components.button-primary / button-outline / button-outline-light / nav-link / card / card-elevated / badge-peppercorn / input-radio | home |
| Cavendish Yellow / Peppercorn color names | brand-assets |

## Capture selectors

The source DESIGN.md does not record `data-omd-capture` pointers. Component geometry is bound to the YAML keys and the live homepage URL above. Sibling class names stay on the sibling-handling section and are not portable facts.

## Sibling handling (`web/references/mailchimp/.verification.md`)

The sibling exists — confirmed with `find web/references/mailchimp -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-17. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), realistic Chrome UA, goto https://mailchimp.com/ domcontentloaded + 4.5s settle, Escape×2 + modal/overlay dismissal pass, full-page lazy-load scroll, then `getComputedStyle` on body, h1/h2/h3, header/nav, buttons, links, cards, badges, inputs, plus a full-DOM background/text/border-radius frequency scan. Second surface https://mailchimp.com/about/brand-assets/ inspected for the official color-name copy.
- Surfaces: `https://mailchimp.com/` homepage; `https://mailchimp.com/about/brand-assets/` brand-assets. Sibling Sources also names `https://styleguide.mailchimp.com/voice-and-tone/` and `https://mailchimp.com/about/`.
- Homepage raw samples: document.title `Email & SMS Marketing Platform | Mailchimp`; body Graphik Web stack; h1 "Email & SMS marketing minus the learning curve" Means Web 48px / 400 / 48px / -1px / `#231e15`; h2 "Marketing that delivers results" Means Web 40px / 400 / 40px / -0.5px; Primary CTA "Start Free Trial" `#ffe01b` / `#231e15` / 26px / 12px 24px / 44px / 1px peppercorn ring / 13px / 500; "Log In" outline; "Customize my experience" white ring / 6px 16px / 32px; nav "Industries and Solutions" 3px / 8px / 13px / 500; trust badge "Risk-Free • No Credit Card Required" 8px / 4px 12px; option card 10px / `#bcbab6`; featured plan card warm-tinted elevation; Deep Ink cookie bar `#241c15`.
- Brand-assets raw samples: "Cavendish Yellow is Mailchimp's hero color. We use Peppercorn for accents."

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts. This paragraph names the dropped field kind; it does not assert that the strings are absent from this file (E2d).

- document.title `Email & SMS Marketing Platform | Mailchimp`
- h2 "Recommended for your business" (white Means Web 40px on a photographic block)
- h3 "Reach more customers with SMS" (Graphik Web 24px / 400 / 32px / -0.32px)
- brand-assets headings "Brand Assets" and "Our colors"
- frequency-scan extra text color `rgb(85,85,85)` / `#555555`
- frequency-scan radius `4px` ×143 and `50%` ×13
- sibling class selectors `.ctaPrimary` / `.ctaSecondary` / `.iaNav__cta` / `.no_cc_peppercorn_badge` / `.card` / `.card--closed` / `.singlePlanCard` / `.singlePlanCard__sends` / `.singlePlanCard__terms` / `.cookie-setting-link`
- sibling tag note that the nav item is a BUTTON (source YAML type is `tab`; that YAML type is the portable primitive)
- `.singlePlanCard__terms` computed `font-size: 13px` (source Caption role remains 11px)
- refero Means Web 300 and Graphik Web 700 as additional weights named only in the sibling conflict matrix
- playwright method string, settle timing, and frequency counts (`×90`, `×23`, `×1413`, `×732`, `×310`, and the other scan tallies)
- `rgb()` forms of hexes the source already writes

Values the sibling shares with the source body (corroboration, not new portable facts): `#ffe01b`, `#231e15`, `#004e56`, `#ffffff`, `#f5f5f5`, `#241c15`, `#27455c`, `#468254`, `#e7b75f`, `#403b3b`, `#bcbab6`, Means Web, Graphik Web, 26px / 3px / 8px / 10px / 32px radii, 48px / 40px / 24px / 16px / 13px type, 44px / 32px control heights, "Start Free Trial", "Log In", "Customize my experience", "Industries and Solutions", "Risk-Free • No Credit Card Required", "Email & SMS marketing minus the learning curve", "Marketing that delivers results", Cavendish / Peppercorn brand-assets sentence, box-shadow none on most surfaces, warm-tinted featured-card shadow.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / ink / ink-deep / teal / canvas / surface / surface-warm / slate / forest / sand / charcoal / graphite / hairline / ink-pure / on-primary | home |
| tokens.typography.family.display / family.sans | home |
| tokens.typography.display-hero / heading-lg / heading / heading-sm / body / label / caption | home |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home |
| tokens.rounded.xs / sm / md / lg / pill | home |
| tokens.shadow.hairline / elevation | home |
| tokens.components.button-primary / button-outline / button-outline-light / nav-link / card / card-elevated / badge-peppercorn / input-radio | home |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §9 Agent Prompt Guide — construction prompts, quick color reference, and iteration guide | Deleted. Tool-facing recreate-the-control prompts. Values they restated are already in Foundations / Typography / Components / Experience. The one unique placement ("Yellow `#ffe01b` CTA pill right-aligned") moved to Layout (A3). No receiving slot and no delegation (A2, A3). |
| §13 Personas — 3 fictional archetypes (name, age, and city fields present) | Deleted. The source's own §13 header states they are fictional archetypes, not individual people. Not promoted into the portable body, and not re-listed here as identifiers (D2, D2a). Experience `Audience` carries only the two group-level contexts the Brand Narrative / About mission independently record (small-business owner, underdog). |
| §15 unattributed easing curves | Deleted at the value boundary. The source named `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, and `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` with no computed-sample attribution. `ease-exit` matches the `spec/omd-v0.1.md` template example. Duration tokens `120ms` / `200ms` / `320ms`, easing Use writings, signature pair, no-spring / no-overshoot, and reduced-motion stay in Foundations Motion. B3 promotion gate stays in Foundations Motion. |

§9 deletion check (A3). Every value the construction prompts name was confirmed present elsewhere in the portable body before the section was dropped, except the right-aligned yellow nav CTA, which Layout now records. Hero white / 48px Means Web / weight 400 / -1px / `#231e15` / yellow CTA `#ffe01b` / `#231e15` text / 26px / 12px 24px / 13px Graphik Web 500 / 1px peppercorn ring / body 16px Graphik Web — Display Hero + Start Free Trial + Semantic color. Option card white / 1px solid `#bcbab6` / 10px / no shadow / 8px / title 24px Graphik Web / `#231e15` / body 16px `#000000` — Option Card + Heading Small + Pure Black. Featured pricing card white / 10px / warm-tinted shadow / 24px 16px / peppercorn trust badge — Featured Plan Card + Trust Badge. Top nav white header / Graphik Web 13px 500 / `#231e15` / 3px / teal `#004e56` on active / yellow CTA — Nav Link + Start Free Trial + Layout right-aligned placement.

## Derived editorial inventory

Portable `DESIGN.md` carries 22 complete B2a qualifications. This table is 22 data rows. Preamble sentences on this page are not portable qualifications.

| Location | Qualified reading |
|---|---|
| Experience Scope ¶1 | Two inspected product URLs as this contract's token surfaces; About and the content style guide as named narrative/voice sources that do not supply computed tokens; values stay attached; catalog `primary_color` `#ffe01b` kept on the same hex as `tokens.colors.primary`; content style guide treated as a voice source rather than as a separately published UI specification |
| Experience Scope ¶2 | Page as outsider-art, warm, hand-made, editorial, tactile, or human; yellow against peppercorn as the entire brand in two colors; Means Web as vintage printing press or literary magazine; serif-display-over-grotesque-body split as inverted from a typical SaaS playbook; result as the antithesis of frictionless minimalism |
| Experience Scope ¶3 | Origin-to-current-service narrative (2001 / Atlanta / Ben Chestnut / Dan Kurzius / Rocket Science Group / bootstrap / Intuit / ~$12 billion, quoted origin line, quoted mission, small-business-owner origin clause, almost-unheard-of bootstrap path, design-system-as-posture sentence, closing refuse/embrace sentences) classified as context that does not by itself supply interface tokens; Wikipedia / Dave Lu / Inside Philanthropy classified as narrative citations rather than token sources; refuse-gradient-SaaS / embrace-editorial-serif reading classified as an editorial connection of observed chrome to positioning rather than as a published brand manifesto |
| Primary tasks | Selecting the three surface-or-control outcomes as primary tasks; not from the Personas section |
| Audience | Dropping the three archetypes rather than promoting them; carrying no name, age, city, motivation, or affiliation classification; reading the Brand Narrative's small-business owner and the About-page underdog as audience |
| Distinctive traits | Classifying the Key Characteristics list as that restatement; groupings and readings inside the list |
| Principles | Five numbered items as derived editorial implementation inference; stems the source states, which rest on Mailchimp-published mission and style-guide sentences, plus every UI implication as the source's own editorial reading; toss-form close |
| Application rules | Nine Do rules and the reasons attached to them |
| Avoid | Eight Don't prohibitions and the reasons inside them |
| Semantic color | Role names from token-set keys; pairing each hex to its token-set path; catalog `#ffe01b` on the same hex as primary; ink and on-primary kept as two keys sharing `#231e15`; ink kept off ink-deep and ink-pure; Mailchimp Cavendish / Peppercorn names kept rather than replaced by refero Voltage Yellow / Press Black; sibling-only frequency-scan hexes off the token set; `#ffffff` canvas / page / card / nav off Secondary-on-Dark Text `#ffffff` off Trust Badge Text `#ffffff`; Peppercorn `#231e15` ink/on-primary off Trust Badge Background `#231e15`; Pure Black `#000000` off Option Card Text `#000000` |
| Spacing | Px samples treated as observed values rather than as an assertion of a complete mathematical scale; unitless steps kept on their own keys rather than rewritten as a grid; `4`/`8`/`12`/`16`/`24`/`32`/`48`/`80` unmerged from a radius step, rounded.sm, nav padding, button padding, body 16px, Heading Small 24px, Heading 32px, rounded.pill, Display Hero 48px |
| Shape | Five rounded keys kept (`3`/`8`/`10`/`26`/`32`); component heights off the rounded map |
| Elevation | Representative `box-shadow: none` as the only elevation record for the observed elements, not a depth scale for every surface |
| Motion | Five-kind promotion gate; refusal of a partial confirmation — one curve, or a match against an official framework or vendor document; three duration tokens kept; three easing-role Use writings kept; source duration/easing-role pair kept without promoting omitted curve values; signature-motion and reduced-motion sentences kept; no-spring / no-overshoot stance kept; three unattributed curves omitted |
| Font evidence | Six evidence-class rows as the source's resolution table, not a published type specimen; official-product-use row not independently establishing a UI family; YAML family names and §3 fallback stacks kept as two records; typography beyond the two inspected public surfaces projected as Outside these captures |
| Family | Two family names kept on display versus sans; §3 fallback stacks kept as fallbacks rather than as UI faces; h3 24px kept on Graphik Web rather than on Means Web |
| Type roles | Pairing each YAML role to its token-set path; unitless `1.0` / `1.33` / `1.35` kept as ratios beside §3 px spellings; YAML `use` verbatim; longer §3 role name beside them; YAML sizes beside §3 px / rem spellings; body `16` kept off spacing `base: 16`; Heading `32` kept off spacing `xl` and rounded.pill; Display Hero `48` kept off spacing `xxl` |
| Assets | Google s2 favicon as catalog identity pointer; Freddie illustrations as first-party imagery rather than a type-role replacement |
| Capture / How to read | Interactive-kind and applicability verdicts and the reason for either; three commit CTAs keep loading/error/success; nav closes loading/error/success on a destination-tab role; radio keeps error and closes loading/success; badge `Kind: non-interactive`; option card and featured plan card C4 omit kind and map; those two card observations treated as default-only; YAML `use` / font / padding / radius / border / height / type / shadow byte forms; 3px / 8px / 10px / 26px / 32px keep-apart; captured nav hover/active teal is not `focus-visible`; none of the §14 rows is Verified live on the two inspected URLs; absence of an observation is not `not-applicable`; loading/error/success follow product role not primitive kind; Core §4.4 by control meaning; not a complete state-coverage claim |
| Layout | 640px / 1024px / 1280px / ~1200px figures read under the source's own Responsive Behavior table rather than as a newly measured cross-viewport specification; §9 right-aligned yellow nav CTA as a recorded placement; 44px / 32px / 13px kept on the controls that established them |
| Content | Source voice classified as a plainspoken, genuine, wry implementation context rather than as a complete product-microcopy guide beyond the quoted style-guide and homepage lines; quoted strings required byte-exact; style guide treated as a named voice source rather than as a UI specification; English read as the captured homepage locale rather than as a complete locale profile |
| Named gaps | List as a catalog of source-unnamed values or smallest-boundary omissions, not coverage of domains the source never named |

## Proof notes

- Conflicts unresolved: none
- `tokens.source: reconciled`
- `components_harvested: true`
- Uncaptured hover/disabled/loading/error/success treatments are omitted except the captured nav teal hover/active text. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- Option card and featured plan card omit kind and applicability map (C4). Trust badge is `kind: non-interactive`. Start Free Trial, Log In, and Customize my experience keep loading / error / success on commit roles (C2). Nav link closes loading / error / success on a destination-tab role (C2). Radio option row keeps error `applicable` as a form field and closes loading / success on the field role.
- No focus-visible treatment is asserted anywhere. The captured nav hover/active teal text is not promoted as `focus-visible` (B1).
- Official About and the content style guide are narrative/voice sources, not interface-token sources
- No YAML `ds.type`. Mailchimp's published brand-assets page and content style guide are named color-name and voice sources, not a first-party UI component specification. B2a uses the no-published-UI-spec form (`not Mailchimp-authored or a separately published UI specification`).
- Source HTML comment states that interpretive claims such as "warmth over polish as a rejection of enterprise software" and "one action one color" are editorial readings connecting Mailchimp's observed design and stated values, not directly sourced Mailchimp statements. Those readings stay inside the portable B2a wraps rather than as unpublished doctrine.
