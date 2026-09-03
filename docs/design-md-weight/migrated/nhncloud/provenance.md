# NHN Cloud provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the NHN Cloud migration. Canonical source remains `web/references/nhncloud/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | nhncloud |
| name | NHN Cloud |
| country | KR |
| category | backend-devops |
| homepage | https://www.nhncloud.com |
| primary_color | `#125de6` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=nhncloud.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| ds.name | TOAST UI |
| ds.url | https://ui.toast.com |
| ds.type | system |
| ds.description | NHN Cloud's official, continuously maintained open-source JavaScript UI catalog; it is a distinct developer/documentation surface, not a published token sheet for the NHN Cloud marketing site. |

Token note from the source, quoted in full:

> Machine tokens are limited to selector-backed values from the NHN Cloud public corporate marketing route. TOAST UI and NHN Cloud documentation are recorded as separate source domains.

The logo slug is a third-party favicon-proxy URL, not an NHN Cloud-hosted brand file. The portable Assets section names it as a catalog pointer.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| sibling bundle timestamp | 2026-07-13T11:09:29.190Z |

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| corporate-marketing | marketing | https://www.nhncloud.com/kr | 2026-07-13 |
| toast-catalog | documentation-catalog | https://ui.toast.com/ | 2026-07-13 |
| cloud-docs | documentation-chrome | https://docs.nhncloud.com/ko/nhncloud/ko/overview/ | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| corporate-marketing-live | product-surface | https://www.nhncloud.com/kr | 2026-07-13 |
| toast-catalog-live | product-surface | https://ui.toast.com/ | 2026-07-13 |
| cloud-docs-live | product-surface | https://docs.nhncloud.com/ko/nhncloud/ko/overview/ | 2026-07-13 |
| company-about | official-doc | https://company.nhncloud.com/about?lang=en | 2026-07-13 |
| toast-ui-official | official-doc | https://ui.toast.com/ | 2026-07-13 |
| toast-ui-license | official-doc | https://github.com/nhn/toast-ui.doc | 2026-07-13 |
| pretendard-license | license | https://github.com/orioncactus/pretendard/blob/main/LICENSE | 2026-07-13 |

### Tier 1

- https://www.nhncloud.com/kr (corporate marketing computed styles and loaded Pretendard Variable)
- https://ui.toast.com/ (official TOAST UI catalog)
- https://docs.nhncloud.com/ko/nhncloud/ko/overview/ (separate documentation chrome)
- https://company.nhncloud.com/about?lang=en (official company history and brand context)

### Tier 2 (no usable record)

- https://getdesign.md/nhncloud — attempted; built-in web open returned a non-retryable error and search returned no record.
- https://styles.refero.design/?q=nhncloud — attempted; built-in web open returned a non-retryable error and search returned no record.

Those directory findings describe this catalog's coverage. They stay here. They are lookup queries, not portable copy.

### Narrative (not interface tokens)

- Official company history and brand context: https://company.nhncloud.com/about?lang=en
- TOAST UI catalog self-description: https://ui.toast.com/
- Pretendard licence: https://github.com/orioncactus/pretendard/blob/main/LICENSE
- TOAST UI Doc source/licence pointer: https://github.com/nhn/toast-ui.doc

## Claim ledger

Claims use YAML anchors from the source: `corporate` = corporate-marketing / corporate-marketing-live / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary `#125de6` | corporate-marketing |
| tokens.colors.on-primary `#ffffff` | corporate-marketing |
| tokens.colors.dark `#111111` | corporate-marketing |
| tokens.colors.muted `#727781` | corporate-marketing |
| tokens.colors.border `#51565f` | corporate-marketing |
| tokens.typography.family.ui `Pretendard Variable` | corporate-marketing |
| tokens.typography.body.size / weight / use `Corporate-marketing body sample` | corporate-marketing |
| tokens.typography.cta.size / weight / use `40px corporate header CTA` | corporate-marketing |
| tokens.typography.cta-lg.size / weight / use `48px corporate section CTA` | corporate-marketing |
| tokens.spacing.cta-sm-y `8` | corporate-marketing |
| tokens.spacing.cta-sm-x `19` | corporate-marketing |
| tokens.spacing.cta-lg-y `10` | corporate-marketing |
| tokens.spacing.cta-lg-x `27` | corporate-marketing |
| tokens.spacing.menu-y `8` | corporate-marketing |
| tokens.spacing.menu-x `16` | corporate-marketing |
| tokens.rounded.cta `30` | corporate-marketing |
| tokens.rounded.control `6` | corporate-marketing |
| tokens.rounded.menu `8` | corporate-marketing |
| tokens.shadow.menu-overlay `0px 4px 8px rgba(0, 0, 0, 0.06)` | corporate-marketing |
| tokens.components.corporate-header-cta.* | corporate-marketing |
| tokens.components.corporate-section-cta.* | corporate-marketing |
| tokens.components.resource-menu-trigger.* | corporate-marketing |

## Capture selectors

| Component | Pointer |
|---|---|
| Corporate Header CTA | `home::[data-omd-capture="13"]` / YAML `home::[data-omd-capture=13]` |
| Corporate Section CTA | `home::[data-omd-capture="29"]` / YAML `home::[data-omd-capture=29]` |
| Resource Menu Trigger | `home::[data-omd-capture="130"]` / YAML `home::[data-omd-capture=130]` |
| Resource Menu | `home::[data-omd-interaction-capture="menu-0-0"]` |
| Documentation-chrome CTA (not promoted as the corporate CTA token) | `surface-3::[data-omd-capture="3"]` |

## Sibling file

`web/references/nhncloud/.verification.md` exists and was read in full. It is adopted as **evidence grade only**: no value in it was promoted into the portable body that the legacy `DESIGN.md` did not already establish.

- **Inspected:** 2026-07-13
- **Method (verbatim):** supplied deterministic collector evidence (`artifacts/reference-evidence/nhncloud.json`) plus first-party, official-font/licence, and Tier 2 web checks. No browser capture was rerun and no MCP session was used.

Values that exist in the sibling and not in the source `DESIGN.md` stay in this ledger. They are not portable tokens. Mention here is disposition of the sibling, not use as a portable value.

Sibling-only observations recorded here:

- Bundle metadata: captured at `2026-07-13T11:09:29.190Z`; three public routes; 49 component variants; five observed state markers; two menu interaction expansions; one interaction kind; coverage score 94.
- Raw sample `home::body`: `Pretendard Variable`, 16px / 400 / 24px; `rgb(0, 0, 0)`. YAML body records size 16 and weight 400 with use `Corporate-marketing body sample` and no line-height; the `24px` line-height and `rgb(0, 0, 0)` writing stay here.
- Collector class fragment on the header CTA: `rounded-30 … bg-blue-700`.
- Documentation-chrome menu shell at `surface-3::[data-omd-interaction-capture="menu-0-0"]`: `#111111`, white, 1px `#727781` border, 8px radius, `8px 0px`, Noto Sans KR 14px/300. The source DESIGN.md records the documentation-chrome CTA, not this docs menu shell.
- `role="menu"` on the corporate expanded panel.
- RGB writings `rgb(18, 93, 230)`, `rgb(114, 119, 129)`, `rgb(17, 17, 17)` beside hexes the source already carries.
- Overlay shadow compact writing `0px 4px 8px rgba(0,0,0,0.06)` (no spaces inside `rgb`). The portable token keeps the YAML form `0px 4px 8px rgba(0, 0, 0, 0.06)`.
- Historical values the sibling names as removed rather than current tokens: `#00A9FF`, `#0088D9`, `#E5F6FF`, `#009BF2`, `#FA2828`, `#F7F9FC`, generic 13px TOAST UI typography, previous dark CTA, ghost CTA, newsletter input, and unobserved state variants.
- TOAST UI Doc MIT licence and © NHN Cloud attribution from `https://github.com/nhn/toast-ui.doc`. The source DESIGN.md names that URL as an official-doc source; the MIT string itself is sibling-only.
- Sibling scope row wording “not an authenticated cloud-console surface”. The source DESIGN.md already names `cloud console` as a surface without an established layout rule; the sibling’s `authenticated` adjective is not copied into the portable body.

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- tokens.source: live-extract
- ds.type: system (TOAST UI). The published TOAST UI catalog is a first-party developer/documentation surface; it is not a published token sheet for the NHN Cloud marketing site. Portable B2a closes use the adapted form that names that catalog, not the unmodified example that would deny a published specification.
- Collector markers for hover and pressed exist on the corporate CTA selectors; no distinct computed state value is promoted. Uncaptured focus/disabled/error/success/loading/empty/toast/dialog/form-validation treatments are omitted. They are not `not-applicable` solely for that reason. Applicability follows control meaning. State coverage is not claimed complete.
- Official company history, TOAST UI catalog self-description, and the Pretendard OFL 1.1 licence are narrative or licence context, not marketing-token sources, except where the source DESIGN.md itself records a computed value.
- Same-hex role splits in the portable body, kept unmerged: `#FFFFFF` / YAML `#ffffff` is the corporate CTA on-primary label (Semantic color; Header CTA; Section CTA) and, separately, Resource Menu panel text; `#727781` is resource-menu trigger text and the expanded-menu / overlay hairline border; `#125DE6` / YAML `#125de6` is the corporate CTA fill and border and, separately, a documentation-chrome CTA that is not the corporate CTA token; `#E9F1FF` is documentation-chrome only and is not a corporate or TOAST token.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Three inspected routes as this contract's surfaces; company page as narrative that does not supply interface tokens; TOAST UI as that distinct catalog rather than as a token sheet for the marketing site; machine tokens limited to the corporate marketing route |
| Experience Scope `:11` | Characterizations (narrow, high-contrast action system; interface not literalizing the symbol story with a broad decorative palette; blue as a deliberate conversion signal) as source readings, not a published UI specification; hex values, loaded face, three-dot wording, and three-surface split beside them are the source's own |
| Experience Scope `:13` | Official-history and catalog narrative (2014 / Pangyo 2015 / April 2022 / NHN Cloud Corp. 2022 / growth-effort list / logo explanation / TOAST UI self-description / application list / catalog-is-not-the-corporate-design-system sentence) as brand context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three primary tasks from captured corporate-marketing controls; not from the source's persona section |
| Audience `:28` | Dropping the persona section rather than promoting it; carrying no affiliation classification or motivation; using only the source wordings customers and developer-facing |
| Distinctive traits `:32` | Classifying the list as a restatement of measured values, and the groupings inside it |
| Principles `:43` | Four items; numbered stems resting on first-party company and catalog sentences; every *UI implication* as the source's own editorial reading, not taken from the published TOAST UI catalog as a marketing-token sheet |
| Application rules `:59` | Four Do rules and the reasons attached to them |
| Application rules `:66` | Keeping the Agent Prompt Guide unique constraint on this page rather than as a tool prompt |
| Avoid `:70` | Four Don'ts and the reasons inside them |
| Avoid `:77` | Keeping the Agent Prompt Guide unique prohibition here rather than as a tool prompt |
| Semantic color `:85` | Pairing each hex to its token-set path; YAML lowercase beside body uppercase; `tokens.colors.muted` unmerged from `tokens.colors.border`; documentation-chrome `#E9F1FF` not promoted as a corporate marketing or TOAST UI token |
| Spacing `:106` | Six YAML spacing keys unmerged; `menu-y` / `menu-x` not read as a single component's padding |
| Shape `:116` | Three rounded keys as the marketing-versus-resource-control split, not a universal radius scale |
| Elevation `:120` | One overlay as menu-local rather than as a card-elevation ladder |
| Motion `:124` | Five-kind promotion gate; a partial confirmation, including a match against the published TOAST UI catalog, is not that gate |
| Font evidence `:132` | Evidence-class sorting; loaded Pretendard Variable as the only general corporate UI family promoted here; Noto Sans KR as documentation-chrome evidence; Noto Sans CJK KR unresolved; declared-only faces omitted; system-font substitute refused |
| Family `:147` | Pretendard Variable as the sole corporate UI family on this capture; those substitutes refused |
| Type roles `:159` | Three roles unmerged; YAML `use` verbatim; body `16` off spacing `16` and off the trigger's 16px font |
| Assets `:163` | Google s2 favicon as a catalog identity pointer rather than as an NHN Cloud-hosted brand file |
| Capture record `:173` | Not promoting the documentation-chrome CTA observed at `surface-3::[data-omd-capture="3"]` as the corporate CTA token |
| Capture record `:177` | Applicability note; every interactive-kind and applicability verdict and the reason for either; YAML `Primitive type` only when the token set records that type; Resource Menu labelled `not in the token set`; not a complete state-coverage claim |
| Resource Menu `:275` | Omitting `kind` and a state-applicability map because that pair is not interactive-kind evidence in the token set |
| Layout `:284` | 40px/48px pairing and 30px-versus-6px/8px split as that marketing-surface cluster; “intentionally limited” as the source's own layout sentence rather than as a published grid; 1440×900 as the supplied capture size rather than as a breakpoint system |
| Content `:291` | Naming the company statement business-enabling and practical; instructing that corporate copy stay direct, capability-led, and concrete about the operational outcome; naming the catalog voice developer-oriented; refusing to turn documentation labels into corporate-marketing microcopy |
| Named gaps `:325` | List as unnamed values rather than as coverage of domains the source never named |

Portable `DESIGN.md` carries 26 complete B2a qualifications. This table is 26 data rows. Preamble sentences on this page are not portable qualifications. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog."

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 personas, 3 slots (role labels and motivations; no name, age, or city existed) | Deleted. Not promoted as individuals, tasks, or Audience groups. Affiliation classification and motivation are not re-hosted. Portable Audience uses only source wordings the company/catalog pages already use. |
| Source §9 Agent Prompt Guide remaining after color/type/component constraints were moved | Deleted as tool-facing prompt. Unique constraints (white-on-`#125DE6` 30px pill CTA; 40px / `8px 19px` / 15px-400 or 48px / `10px 27px` / 17px-500; transparent trigger; expanded panel; do not synthesize a cloud-console UI or TOAST UI widget library) already live in Experience / Foundations / Components. |
| Unattributed cubic-bezier curves | None in the source. Nothing to delete. The no-token constraint and the B3 promotion gate stay in portable Motion. |
| Sibling-only computed values listed under Sibling file | Ledger only |
| Tier 2 getdesign / Refero lookup detail | Ledger only |
