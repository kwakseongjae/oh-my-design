# Melon provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/melon/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | melon |
| name | Melon |
| country | KR |
| category | entertainment |
| homepage | `https://www.melon.com` |
| primary_color | `#00CD3C` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=melon.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-01 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The favicon slug is dual-destination: identity metadata here, and a portable asset record in `DESIGN.md` §3. It is a favicon-service URL keyed to the domain rather than a Melon-hosted brand file, and the portable record says so.

The source frontmatter carries no `tokens.note` and no `added` key.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-01 |
| tokens.extracted | 2026-06-09 |
| Tier 1 live inspect | 2026-06-01 |

The source footer records the verification verbatim as **Verified:** 2026-06-01. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none recorded by the source.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface (desktop web) | `https://www.melon.com` | 2026-06-01 |

### Tier 1 (brand-owned, as listed in the source footer)

- `https://www.melon.com` — official Melon service homepage, live CSS source. Every token claim in this migration is sourced here.
- `https://tech.kakaoent.com` — Kakao Entertainment tech, Melon's operator. Named by the source as a Tier 1 source; the source attaches no design value to it, and none is reconstructed.
- `https://www.kakaocorp.com/page/service/service/Melon` — Kakao Corp official Melon service page. Named by the source as a Tier 1 source; the source attaches no design value to it, and none is reconstructed.

### Tier 2

- getdesign.md/melon — NOT LISTED.
- refero — not listed.

Those directory findings describe this catalog's coverage. They stay here. They are lookup queries, not portable copy. The source footer's Note — live login button renders #00D344, a near-twin of the CSS signature green #00CD3C — is a token fact already carried in the portable body.

## Claim ledger

Every claim below is sourced from the single `home` surface (`https://www.melon.com`, live inspect 2026-06-01).

| Claim | Surface |
|---|---|
| `tokens.colors.signature-green` `#00cd3c` | home |
| `tokens.colors.green-dark` `#00b523` | home |
| `tokens.colors.green-login` `#00d344` | home |
| `tokens.colors.text-primary` `#1a1a1a` | home |
| `tokens.colors.text-body` `#666666` | home |
| `tokens.colors.text-muted` `#999999` | home |
| `tokens.colors.red-accent` `#df2607` | home |
| `tokens.colors.canvas` `#ffffff` | home |
| `tokens.typography.family.sans` `Pretendard` | home |
| `tokens.typography.family.mono` `Pretendard` | home |
| `tokens.typography.heading.size / weight / use` `Headings/primary text, near-black #1a1a1a` | home |
| `tokens.typography.control.size / weight / use` `Interactive controls and inputs` | home |
| `tokens.typography.body.size / weight / use` `Dense list rows and metadata, muted gray` | home |
| `tokens.spacing.xs / sm / md / base / lg / xl / xxl / section` | home |
| `tokens.rounded.sm / md / lg / full` | home |
| `tokens.shadow.none` `"none"` | home |
| `tokens.components.login-button` `type: button` `bg` `#00d344` `fg` `#ffffff` `radius` `0` `font` `14px/400` `use` `Primary login, sharp-cornered green` | home |
| `tokens.components.search-input` `type: input` `bg` `#ffffff` `fg` `#999999` `radius` `0` `font` `13px/400` `use` `Search field, light-gray text` | home |
| `tokens.components.list-row` `type: listItem` `bg` `#ffffff` `fg` `#666666` `radius` `0` `font` `12px/400` `use` `Dense chart/list row text` | home |

## Sibling handling (`web/references/melon/.verification.md`)

The sibling exists — confirmed with `find web/references/melon -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record, and none of its structural classifications was promoted into `DESIGN.md`.

Its own record, transcribed here:

- Inspected 2026-06-01. Method: playwright getComputedStyle (live DOM) + raw source-file fetch.
- Sources: `https://www.melon.com`; `https://static.melon.co.kr/static/web/resource/style/w1/jw/x/vcztjn3yp.css`; `https://tech.kakaoent.com`; `https://www.kakaocorp.com/page/service/service/Melon`.
- live melon.com CSS: signature green #00cd3c appears ~11x (active nav / tabs / player buttons)
- live melon.com CSS: darker green variant #00b523
- live melon.com CSS: near-black text #1a1a1a, muted gray #666, light gray #999, red accent #df2607
- live melon.com: body text computed rgb(102,102,102) = #666666, Pretendard, 12px
- live melon.com: login button background rgb(0,211,68) = #00D344, text #FFFFFF, border-radius 0px, height 42px, font 14px/400
- live melon.com: search input border-radius 0px, height 40px, font 13px/400, placeholder/text #999999, background transparent
- Country sources name the same three URLs as the source footer and add the gloss that each page is Korean.

Values and strings the sibling carries that the migration source does not, kept here and not promoted:

- The CSS file URL `https://static.melon.co.kr/static/web/resource/style/w1/jw/x/vcztjn3yp.css`.
- The capture method string `playwright getComputedStyle (live DOM) + raw source-file fetch`.
- The short hex writings `#666` and `#999` (the source writes `#666666` and `#999999`).
- The login-button `rgb(0,211,68)` byte form. The source writes `#00D344` and "near-twin"; the `rgb()` writing stays here.
- The country-source gloss that the three pages are Korean, and the `>= 2 non-Western` classification.

Hex values, the `~11x` count, `rgb(102,102,102)`, Pretendard, 12px body, login 42px / 14px/400 / 0px, search 40px / 13px/400 / `#999999` / `transparent`, and the three Tier 1 URLs also stand in the source DESIGN.md and are portable there.

## Byte-form notes

- The source frontmatter records spacing and radius steps unitless (`xs: 2` … `section: 48`; `sm: 0`, `md: 0`, `lg: 0`, `full: 9999`). The portable body keeps the unitless steps. `full: 9999` stays a step and is not given a px suffix.
- YAML hex is lowercase (`#00cd3c`, `#00b523`, `#00d344`, `#1a1a1a`, `#df2607`, `#ffffff`). Source prose is uppercase (`#00CD3C`, `#00B523`, `#00D344`, `#1A1A1A`, `#DF2607`, `#FFFFFF`). Both writings stay; neither is selected.
- YAML `tokens.components.search-input.bg` is `#ffffff`; source §4 Search Input background is `transparent`. Both writings stay; neither is selected.
- The same hex `#ffffff` / `#FFFFFF` is recorded in four roles and is not merged: YAML `tokens.colors.canvas` (Ground), `tokens.components.login-button.fg` (login text), `tokens.components.search-input.bg` (YAML search background, beside §4 `transparent`), and `tokens.components.list-row.bg` (list-row background).
- YAML component `font` shorthands are `14px/400`, `13px/400`, `12px/400`. Source §4 writes `14px / 400`, `13px / 400`, `12px / 400`. Both writings stay.
- YAML `tokens.typography.family.mono` is `Pretendard`, the same family as sans. That assignment is preserved rather than resolved into a separate monospace face.
- No unitless line-height is recorded in the source. None is supplied.

## Proof notes

- One brand-owned Tier 1 product surface, live-inspected 2026-06-01. The second and third Tier 1 URLs in the source footer (`https://tech.kakaoent.com`, `https://www.kakaocorp.com/page/service/service/Melon`) are operator/service pages with no design value attached by the source.
- `components_harvested: true`; three component records in the source token set (`login-button`, `search-input`, `list-row`).
- Uncaptured hover/pressed/focus/disabled treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- No published first-party UI specification was found; the B2a example form is used as-is.
- `tokens.source` is `prose-derived`; `tokens.extracted` is 2026-06-09, eight days after the 2026-06-01 inspect. Both dates are kept as recorded.

## Derived editorial inventory

Sites in the portable `DESIGN.md` that carry an adjacent complete qualifier. Complete form used: "a derived editorial implementation inference from the verified surface; it is not Melon-authored or a separately published UI specification." This is an index of the derived-reading sites, not a completeness claim. Portable `DESIGN.md` carries 26 complete B2a qualifications. This table is 26 data rows. Preamble sentences on this page are not portable qualifications.

| Location | Qualified reading |
|---|---|
| Experience Scope bound | melon.com desktop web as this contract's token surface; Kakao Entertainment tech page and Kakao Corp Melon service page as operator/service facts that do not supply interface tokens |
| Experience Scope atmosphere | Dense, white, content-first surface; utilitarian and high-density; tightly ruled spreadsheet of songs rather than a soft consumer app; green rationed carefully; quiet grayscale hierarchy that lets the green do all the signaling; unmistakably brand-green-on-white; scan, tap, and keep listening |
| Experience Scope brand account | Utility at scale; streaming is a daily utility; the brand's job is to be fast, dense, and unmistakably green-on-white; narrative context that does not by itself supply interface tokens |
| Primary tasks | Selecting the three primary tasks from recorded modules and controls; not from the persona section |
| Audience | Dropping the three persona entries; carrying no name, age, city, or motivation; reading the source's "scan, tap, and keep listening" / "came to listen, not to read" group as audience |
| Distinctive traits | Classifying the list as a restatement of the recorded layer; characterizing bullets (rationed carefully, grid-like, lets the green do all the signaling) |
| Principles | Six numbered stems from source §12 |
| Application rules | Five Do rules and the reasons attached to them |
| Avoid | Four Don't rules and the reasons inside them |
| Semantic color | YAML lowercase hex kept beside prose uppercase hex; characterizations (brand-defining Melon green, only saturated color allowed to carry meaning, disciplined grayscale ladder) |
| Semantic color component-local | Login-button background and search-input YAML background kept on those components rather than promoted to a general role |
| Spacing | Unitless YAML steps not rewritten as replacement px; compression at the low end as suiting a content-first streaming UI that must show many rows at once |
| Shape | YAML `0` off prose `0px`; 0px corners as uniformly square / grid-like rather than a soft, rounded consumer feel; `full: 9999` as a recorded step rather than a universal radius scale |
| Elevation | Flatness; depth through color and contrast rather than drop shadows or layered surfaces; single tightly organized sheet as the elevation contract |
| Motion qualitative | Static and efficiency-driven character; implication of restrained, functional motion (if any); "stay subtle and quick" |
| Motion B3 gate | Five-kind promotion gate (computed transition properties, animation name, duration, easing, reduced-motion behavior); refusal of a partial confirmation; a match against an official framework or vendor document is not that gate |
| Font evidence | Evidence-class sorting; official-product-use row as a negative lookup; live Pretendard surface-use; License row unresolved rather than a Melon brand asset; 맑은 고딕 as a recorded fallback rather than the brand face |
| Family | Pretendard as deliberately small and dense, suiting a content-first streaming UI that must show many rows at once; 맑은 고딕 refused as the brand face; sans and mono kept as the same family rather than resolved into a separate monospace face |
| Type roles | YAML numbers kept beside §3 px; YAML `use` verbatim; heading `14` off control `13` and off login-button `14px` |
| Type hierarchy | Color, not size, does most of the hierarchy work; type system as deliberately small and dense |
| Assets | Google s2 favicon as catalog identity pointer rather than a Melon-hosted brand file |
| Capture record | Applicability note above (not "following"); `focus` / `focus-visible` evidence-kind distinction; interactive-kind and applicability verdicts and the reason for either; YAML primitive type attached only when recorded; kind and map omitted on the list-row; YAML values beside §4 values where they differ; Active / selected (nav, tabs, player) kept as a surface-level named appearance; no nav, tab, or player component introduced; not a complete state-coverage claim |
| Components square restatement | 0px corners as uniformly square, reinforcing the dense, grid-like streaming layout rather than a soft, rounded consumer feel |
| Layout | Density as the point rather than a compromise; wayfinding riding on color rather than on heavy chrome; ruled cells rather than floating cards; density-first philosophy as the constant across a narrower layout; 40-42px control heights as suggesting comfortable tap targets; 40px search input and 42px login button as desktop-capture measurements rather than cross-viewport specifications |
| Content | Voice adjectives, register, and "through the green, not through chatty copy" as the reviewed material's own voice guidance |
| Named gaps | List as unnamed values rather than as coverage of domains the source never named |

No published first-party UI specification was found; the B2a example form is used as-is.

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 Personas — three entries | Whole section dropped. The source does not mark them as independently verified audience records. Fictional or unverified personas are neither promoted to verified tasks nor re-hosted in a sidecar. No name, age, or city was present to delete (D2, D2a). Role-label strings are named only on the migration-log deletion row (copy-loss disposition), not here. |
| Source §9 Agent Prompt Guide | Deleted as tool-facing prompt. Brand constraints already live in Foundations, Typography, Components, Experience application rules, and Avoid. Checked value by value before deletion: see the next paragraph. |
| Unattributed cubic-bezier curves | None in the source. Nothing to delete. Duration and signature-motion statements were not deleted because the source names none to keep; the no-token constraint, the qualitative character, and the B3 promotion gate stay in portable Motion. |
| Sibling-only computed values listed under Sibling handling | Ledger only |
| Tier 2 getdesign / refero lookup detail | Ledger only |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. White `#FFFFFF` ground, Pretendard with 맑은 고딕 fallback, 12px body, 13-14px controls, `#1A1A1A` headings, `#666666` body, `#999999` placeholders, square `0px` corners, signature green `#00D344` / `#00CD3C` for primary actions and active states, white `#FFFFFF` text, 42px height, 14px/400 font, search transparent background, `#999999` text and placeholder, 40px height, 13px/400, red `#DF2607` as a rare accent, and the avoid-rounded-cards / drop-shadows / large-type rule — all are Experience, Foundations, Typography, or Components entries. §9 contributed no value that is absent elsewhere.
