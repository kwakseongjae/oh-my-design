# Fastcampus provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration of `web/references/fastcampus/DESIGN.md`. The canonical source remains that file until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | fastcampus |
| name | Fastcampus |
| display name (KR) | 패스트캠퍼스 |
| country | KR |
| category | education |
| homepage | https://fastcampus.co.kr |
| primary_color | `#fc1c49` |
| logo | favicon `https://www.google.com/s2/favicons?domain=fastcampus.co.kr&sz=256` (third-party favicon proxy, not a brand-published asset) |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

Note on `tokens.source: prose-derived`: the frontmatter token block was assembled from the body prose on 2026-06-09, three weeks after the 2026-05-15 live inspection that the body cites. That is why several frontmatter values fix a single number where the prose gives a range (`h1: 34` against "32-36px", `h2: 26` against "24-28px") and why one frontmatter value contradicts the prose outright (`typography.family.mono`). Both forms are carried in the portable body as conflicts; neither was chosen.

## Freshness

| Event | Date |
|---|---|
| verified (source footer) | 2026-05-15 |
| surfaces inspected | 2026-05-15 |
| sibling proof files captured | 2026-05-15T07:09:53Z |
| tokens.extracted | 2026-06-09 |

Conflicts unresolved: the source footer states "none". Three source-versus-sibling conflicts were found and left unresolved — see **Conflicts found during migration** below. They are not the whole count: the source also contradicts itself in four places, each recorded where it belongs rather than in that table — the mono family and the fixed h1 / h2 sizes in the Identity note above, and the rank-badge corner clip and the `커뮤니티` / `기업교육` nav roles in the portable body, both carried as conflicts with neither reading chosen.

## Surfaces and sources

### Tier 1 (live CDP inspect, 2026-05-15)

| url | kind | what the source says it established |
|---|---|---|
| https://fastcampus.co.kr/ | home storefront | 40 raw samples, 103 `--fds-color-*` / `--c-primary-*` CSS custom properties, the Pretendard Variable font stack, the 40px / 700 banner H3 sample, 11-plus category-pill carousel samples, the rank badge and the enrolment-count pill |
| https://fastcampus.co.kr/category_online_all | second route | 2 additional structure samples, described by the source as category-page GNB confirmation |
| internal "Fastcampus Design System" (`fds-` prefix) | runtime token set | evidenced directly by the `--fds-color-*` and `--fds-semantic-*` namespace on `:root` of the production site |

### Tier 1 official DS — authoritative negative

The source records a negative result and its probes: `design.fastcampus.co.kr` did not resolve in DNS; `tech.day1company.io` refused the connection; `fastcampus.co.kr/design` and `/brand` returned 404; no Figma Community kit was found; and no org-level design-system, Storybook, or tokens repository is published by Day1Company. The system exists internally as a Material-style token set but lives only as production runtime CSS.

### Tier 2 (no usable record)

- https://getdesign.md/fastcampus — empty, verified 2026-05-15 ("No designs found for 'fastcampus'")
- https://styles.refero.design/?q=fastcampus — empty, verified 2026-05-15 (no result cards returned)

## Sibling evidence files

There is no `web/references/fastcampus/.verification.md` sibling. The source's own footer instead cites `assets/_reference/.live-inspect-proof.json`, and three further sibling files sit beside it. All four were read for this migration.

| Sibling | Adopted? |
|---|---|
| `assets/_reference/.live-inspect-proof.json` | Read. Used only to grade evidence class — which values are live samples and which the source derived. No value is promoted from it into the portable body. |
| `assets/_reference/tokens.json` | Read. It carries the 103 `:root` custom properties. No value is promoted from it into the portable body. |
| `assets/_reference/fonts.json` | Read. It corroborates the source's `html` / `body` font declarations verbatim. No value is promoted from it. |
| `assets/_reference/structure.json` | Read. It carries the header and document-width geometry. Only the document width, which the source's own body already states as the 1280px container figure, is reflected in the portable body; nothing else is promoted. |

Values that exist only in the siblings and were deliberately **not** promoted, because the legacy `DESIGN.md` never carried them and a sibling value is not a portable token: `--c-secondary = #ff7450`, `--c-secondary-darken = #ff6037`, `--c-secondary-rgb = 255, 116, 80`, `--swiper-navigation-size = 44px`, `--fds-semantic-border-focus = #37393b`, `--fds-semantic-status-success = #3b83ff`, `--fds-semantic-status-info = #4caf50`, `--fds-semantic-status-warning = #fc1c49`, `--fds-semantic-status-alert = #f8930f`, `--fds-semantic-label-placeholder = #a0a2a3`, `--fds-semantic-label-tertiary = #b7b9ba`, `--fds-semantic-background-default = #f5f5f6`, `--fds-semantic-background-divider = #e7e7e8`, `--fds-semantic-background-raised = #e7e7e8`, `--fds-semantic-border-default = #e7e7e8`, `--fds-semantic-border-secondary = #cfd0d1`, `--fds-semantic-border-strong = #b7b9ba`, `--fds-semantic-label-disabled = #b7b9ba`.

## Conflicts found during migration

The source footer says "Conflicts unresolved: none". These three were found and are recorded rather than resolved. None of them changes a value in the portable body.

| Conflict | Detail |
|---|---|
| Second-route description | The source calls `https://fastcampus.co.kr/category_online_all` a "category-page GNB confirmation". The sibling proof file's two samples for that route are a not-found page: an `h3` reading `페이지를 찾을 수 없습니다.` in `rgb(37, 39, 41)` and an `a` reading `홈으로 이동하기` on `rgb(252, 28, 73)`. The portable Scope therefore says the route carries structural confirmation of the same global navigation, which the sibling's identical header record supports, and claims nothing about a category listing. |
| Focus color | The source derives its focus treatment (2px outline, `#fc1c49`) from the primary semantic token. The sibling records `--fds-semantic-border-focus = #37393b`. Neither is promoted to a `focus-visible` treatment in the portable body; the source's derived statement is carried in the state contract with its derivation named, and the sibling value stays here. |
| GNB position | The source records the header as sticky from its CSS-module class naming. The sibling's computed header record says `position: static`. The portable body carries the source's statement with its basis named ("from its CSS-module class naming") and does not assert a computed position. |

## Evidence classes recorded by the source

| Layer | Class the source assigns it |
|---|---|
| Home-route colors, type metrics, category pills, carousel arrows and dots, course card, rank badge, enrolment-count pill, GNB | live CDP inspect, 2026-05-15, 40 raw samples plus 103 `:root` custom properties |
| Primary CTA (filled, renewal skin, tinted surface) | "Inferred from `--c-primary` semantic" / "inferred from category-pill geometry; matches 40px target height" / "Inferred from `--fds-semantic-primary-primary-low`" |
| Search input | "Inferred from category-page CSS-module pattern" |
| Disabled treatment | "Inferred from neutral ladder" |
| Tags and chips (yellow, red, blue, pink) | "Inferred from extended hue ramps"; exact chip alpha values flagged as unresolved by the source itself |
| Page H1 and Section H2 type roles | the prose marks both "(inferred)"; the frontmatter fixes them at 34 and 26 |
| Mono family | the prose marks it "(inferred)"; the frontmatter sets `Pretendard Variable` |
| Spacing scale | "Fastcampus does not expose a `--fds-space-*` token namespace at `:root`"; the scale is read off raw geometry as "Inferred token" |
| Motion — Swiper transitions, pill hover fade, card hover micro-scale, page transitions | "Motion data was not exhaustively captured in this pass"; individual lines marked "(inferred — Swiper / module default)" and "(inferred — common Korean-marketplace convention; not directly captured)" |
| Motion tokens and easing table | "**Motion tokens are inferred** — `--fds-motion-*` is not exposed at `:root`" |
| Skeleton shimmer 1.5s linear | "(inferred — Mantine / FDS default)" |
| Keyboard focus outline | "(inferred from `--c-primary` semantic)" |
| Brand narrative — 2014 founding, Day1Company parent, Colosso / RealClass siblings | "data based on public Korean tech-press coverage of Day1Company / 데이원컴퍼니"; the source adds that founder, exact founding-month, and headcount details "are not exhaustively verified from public English-language sources" |
| Personas (4) | "Personas inferred from observable surface targeting on `/` and `/category_online_all`; not from a published Fastcampus persona doc." |
| Forbidden phrases | "illustrative — not from a published Fastcampus guide; derived from observable restraint on `/`" |
| Voice samples (3) | "OmD-original — no verbatim Fastcampus copy reproduced; tone-shape only" |

## Derived-editorial scope carried in the portable body

The table above records the classes the **source** assigns. The portable body qualifies a wider set than that as derived editorial implementation inference, each qualifier adjacent to the passage it covers. This ledger is a one-row-per-occurrence index of that wider set, and its extent is measured rather than asserted: over the portable body, `grep -oF 'derived editorial' DESIGN.md | wc -l` reads 17, and the 17 rows below carry those 17 body line numbers. Counted per file with the same command, the phrase reads 3 in this file — one of them inside the command quoted in this paragraph — 5 in `migration-log.md`, and 3 in `audit-log.md`; those are mentions of this ledger and of the audit finding, not qualifiers standing in a contract body, and they are not part of the 17. What the measurement bounds is the agreement between this index and the body: the same 17 occurrences appear in both. It does not certify that every interpretive sentence in the body has been found and qualified — that judgement is the F1 and F3 passes', and the F3 audit of 2026-08-26 found three the migration worker had missed.

| Body line | Portable location | Qualified as derived editorial |
|---|---|---|
| 13 | §1 Scope | the commerce-red-not-warning-red reading and the "programmed market" register reading |
| 15 | §1 Scope — brand narrative | reading the brand name as *fast + campus*, and reading the visual evolution from the early-2010s directory page as the signal of the positioning *(qualifier added by the F3 audit, 2026-08-26)* |
| 32 | §1 Audience | naming individual learners and the `기업교육` track as the two audience groups |
| 36 | §1 Distinctive traits | every trait that describes how a value is used rather than what it is |
| 50 | §1 Principles | all 5 items |
| 60 | §1 Avoid | all 8 items (6 restate the source's Don'ts, 2 are evidence boundaries) |
| 116 | §2 Semantic color — extended hue ramps | reading the per-band color frequency as an intentional convention rather than a coincidence of content |
| 128 | §2 Semantic color — yellow and orange | reading the two as adjacent accent slots rather than as a primary/secondary brand-color duo |
| 134 | §2 Spacing | the whole scale, because it was read off measured geometry rather than a published token set |
| 161 | §2 Motion | the three durations, the easing role assignments, and the carousel and hover rules — the carousel rule including the `5s` auto-advance interval restored to that passage on 2026-08-26 |
| 201 | §3 Type roles | the binary-cadence reading and the inverted-density reading |
| 203 | §3 Type roles — Korean punctuation and register | `~님` read as reserved for instructor-facing surfaces, a convention about surfaces the 2026-05-15 inspection did not cover *(qualifier added by the F3 audit, 2026-08-26)* |
| 341 | §4 Course Card | treating the source's own hover treatment as grounds for an interactive kind, and reading the tile as a destination that commits nothing of its own |
| 432 | §4 State contract | both lists, apart from the recorded hover fill step and the neutral ladder they draw on |
| 474 | §5 Layout & Platforms | the commerce-dense "programmed market" reading of the above-the-fold stack |
| 489 | §6 Content & Locales | the voice characterization, the per-context register table, and the `~만나자` register reading |
| 503 | §6 Content & Locales — Register | `~합니다` read as reserved for legal, refund, and receipt screens, a convention about surfaces the inspection did not cover *(qualifier added by the F3 audit, 2026-08-26)* |

Of these, the motion set, the spacing scale, the persona label, the forbidden-phrase list, and the narrative attribution are the source's own labelling (rows in the previous table). The rest is this migration's evidence-class judgement, which is why the qualifier is written into the portable body rather than held only here.

## Claim ledger

`home` = https://fastcampus.co.kr/ ; `category` = https://fastcampus.co.kr/category_online_all. Both inspected 2026-05-15. Frontmatter token values were assembled from the body prose on 2026-06-09 (`tokens.source: prose-derived`), so the surface column names the surface the **body** attributes the value to.

| claim | surface / basis |
|---|---|
| tokens.colors.primary `#fc1c49`, primary-darken `#c9032a`, primary-renewal `#d60039`, primary-low `#ffdad8` | home `:root` custom properties |
| tokens.colors.error `#c5213b` | home `:root` (`--fds-color-red-600`) |
| tokens.colors.yellow `#ffeb3b` / yellow-low `#fff9c4` / yellow-deep `#f57f17` | home `:root` yellow ramp |
| tokens.colors.orange `#f8930f` | home `:root` orange ramp |
| tokens.colors.pink `#e91e63` / pink-low `#fce4ec` | home `:root` pink ramp |
| tokens.colors.green `#43a047` | home `:root` green ramp |
| tokens.colors.blue `#3b83ff` / blue-low `#ebf3ff` | home `:root` blue ramp |
| tokens.colors.surface `#f5f5f6`, divider `#e7e7e8`, border-light `#cfd0d1`, disabled-text `#a0a2a3`, muted `#747678`, heading `#252729`, label `#171b1f`, white `#ffffff` | home `:root` neutral ladder and static neutrals |
| the remaining ramp steps (yellow, orange, red, pink, green, blue, neutral) | home `:root`, 103 custom properties |
| tokens.typography.family.sans | home computed font stack |
| tokens.typography.banner size/weight/lineHeight/use | home banner H3 sample, 40px / 700 on a 96px two-line block |
| tokens.typography.body / gnb-compact / button / rank size/weight/lineHeight/use | home samples (nav links, category pills, rank badge) |
| tokens.typography.h1 / h2 | body prose, marked inferred; frontmatter fixes 34 / 26 |
| tokens.typography.family.mono | frontmatter only; contradicted by the body prose |
| tokens.spacing xs/sm/md/base/lg/xl/section | body prose, read off raw geometry |
| tokens.rounded sm/md/lg | home samples (4px pills, 19px dots and count pill) |
| tokens.rounded full `9999` | frontmatter only; no recorded element uses it, and the body states there is no full-pill radius on category navigation |
| tokens.components.pill-selected / pill-unselected | home category-pill carousel |
| tokens.components.button-primary / button-tinted | derived from the primary and primary-low semantic tokens plus category-pill geometry |
| tokens.components.card / rank-badge | home rank rail |
| tokens.components.tag-free / tag-discount / tag-blue / tag-pink | derived from the extended hue ramps |
| tokens.components.input | derived from a category-page CSS-module pattern |
| carousel arrow and dot-cluster geometry | home banner rail samples |
| enrolment-count pill geometry | home rank rail sample |

## Omission ledger

| Item | Disposition |
|---|---|
| §15 easing — the emphasized and decelerate curve values | Deleted from the portable body. The source attributes them to no Fastcampus publication and to no 2026-05-15 observation, and states outright that `--fds-motion-*` is not exposed at `:root`. The role names and their uses survive in Foundations, and the two exact curves are named as a gap in Governance. The values as the source carried them: `cubic-bezier(0.4, 0, 0.2, 1)` for the emphasized role and `cubic-bezier(0, 0, 0.2, 1)` for the decelerate role. `easing-default` is the plain `ease` keyword and was kept. |
| §2 orange ramp, fifth step | The source records this step as `#fa a93f`, which is not a renderable hex. It is elided in the portable ramp and named as a gap in Governance rather than repaired. The sibling `tokens.json` records `--fds-color-orange-400` as `#f9a93f`; that sibling value is **not** promoted. |
| §13 Personas — four archetypes with age bands, buying patterns, and channel behaviour | Deleted. The source labels them inferred from observable surface targeting rather than taken from a published Fastcampus persona document. Not promoted to primary tasks or Audience, and not rehosted here: no age band, buying pattern, or segment description is reproduced in either output file. The one surface fact they rested on — that the global navigation exposes a `기업교육` corporate-training track — is a live-recorded nav label and survives on its own in Typography and Audience. |
| §10 Voice samples, three OmD-original lines | Deleted from both output files. The source labels them tone-shape samples that reproduce no verbatim Fastcampus copy, so they are synthetic rather than published strings, and no synthetic voice sample is promoted. The lines as the source carried them, recorded here once so the deletion is visible: "이번 기수는 금요일에 마감해요. 들어가실 자리가 두 개 남았어요.", "여름 인텐시브, 21일까지 25% 할인. 결제 후 7일 이내 환불 가능해요.", "찜한 강의가 아직 없어요. 분야부터 골라볼까요?" |
| Competitor comparisons | Not carried into the portable body, which states Fastcampus's own register directly instead of by contrast. The comparative material the source used: Inflearn's calm-mint catalog with a single mint accent, its `#f8f9fa` Mantine gray-0 neutral, its 32px nav pills, its 34px hero, its flat 16px/600 nav, its "no carousel auto-advance" stance, its `부담없이 시작하기` CTA and its strict `지식공유자님` honorific; Classum's institutional blue chrome; Toss's 12-16px radii; Coursera's "Earn" and Udemy's "Save 90%" imperatives. Two of these values do survive in the portable body on Fastcampus's own account rather than as comparisons — 34px as the Fastcampus H1 role and 32px as a Fastcampus spacing step. |
| `tech.day1company.io` follow-up instruction | Not carried into the portable body. The source recommends an UPDATE pass on that domain if it comes back online; that is a pipeline instruction, not a design fact. |
| `[FILL IN]` placeholders | The source carries none; none is emitted. |

## Proof notes

- Source `tokens.source: prose-derived`, `components_harvested: true`, `verified: 2026-05-15`, two routes on one origin.
- Interaction expansions: none recorded. Only default treatments are promoted per component, and no hover, focus, or pressed paint appears in any component's state table.
- Uncaptured hover, focus, and pressed treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Every `not-applicable` entry in the portable file states the control's role as its reason: the two category pills, the two carousel controls, and the course card are destination or paging roles that commit nothing, and the search field has no completion of its own to confirm. No entry anywhere uses an absence of observation as grounds.
- The source records no `focus-visible` observation of any kind, so no `focus-visible` row in the portable file carries a treatment value. The source's derived focus outline is kept in the state contract with its derivation named.
- The catalog logo pointer is a Google favicon proxy URL. It is recorded in both this ledger and the portable Assets section, in both places as a catalog pointer rather than a Fastcampus-published asset.
- Public Korean tech-press coverage of Day1Company is narrative context, not a token source.
