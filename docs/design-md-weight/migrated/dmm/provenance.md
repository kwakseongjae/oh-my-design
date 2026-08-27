# DMM.com (Turtle) provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/dmm/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | dmm |
| name | DMM.com (Turtle) |
| country | JP |
| category | consumer-tech |
| homepage | https://dmm.com/ |
| primary_color | `#94bcff` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=dmm.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

The logo entry is a third-party Google favicon proxy, not a DMM-published mark file. It is recorded here and named as an unresolved first-party mark in the portable Governance section.

## Token note (source frontmatter, verbatim)

> Two surfaces: the public Turtle Design System portal (turtle.dmm.com) is a dark-first system engineered for one-switch dark mode — canvas #323232, raised card #252525, accent blue #94bcff; the consumer dmm.com platform carries the legacy brand crimson #b42f5a + amber #ffc847. primary = Turtle accent blue #94bcff (the DS link/action color). Translucent overlays live in prose, not in tokens.colors.

The last sentence is a scoping note about the source frontmatter: translucent overlay values were never promoted into `tokens.colors`, and none is promoted here.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-17 |
| added | 2026-06-17 |
| tokens.extracted | 2026-06-17 |
| Tier 1 live inspect | 2026-06-17 |
| Tier 1 doc-page fetch | 2026-06-17 |

Conflicts unresolved: none.

Verification note from the source footer: `omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces`.

## Surfaces and sources

### Tier 1

| url | kind | what it supplied |
|---|---|---|
| https://turtle.dmm.com/ | design-system portal | dark-first tokens, cards, nav, live DOM |
| https://turtle.dmm.com/products/resources/ | portal resources page | Figma community library, GitHub/Storybook entries, headings |
| https://dmm.com/ | consumer platform | brand crimson + amber, live DOM |
| https://turtle.dmm.com/about/introduction/ | portal doc (WebFetch) | system composition, dark-mode statement, adoption figure, motto |
| https://turtle.dmm.com/about/design-principle/ | portal doc (WebFetch) | ABCDE principles, verbatim Japanese questions |

### Tier 2 (no usable record)

- getdesign.md/dmm — 404 (no entry)
- styles.refero.design/?q=dmm — no DMM match (fuzzy unrelated results only)

## Live inspect record (2026-06-17, playwright getComputedStyle)

- `https://turtle.dmm.com/` — body bg rgb(50,50,50) `#323232`; card bg rgb(37,37,37) `#252525`; text ladder rgb(255,255,255) / rgb(227,227,227) `#e3e3e3` / rgb(185,185,185) `#b9b9b9`; accent fg rgb(148,188,255) `#94bcff` (links), rgb(152,228,103) `#98e467` (green), rgb(247,182,231) `#f7b6e7` (pink); cards radius 12px / 24px 56px padding; pill radius 9999px; box-shadow none; font `"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`.
- `https://turtle.dmm.com/products/resources/` — Figma community library, GitHub/Storybook "(準備中)" labels; H2 24px/700 `#e3e3e3`.
- `https://dmm.com/` — consumer platform; brand bg rgb(180,47,90) `#b42f5a` (×16), rgb(255,200,71) `#ffc847` amber, link rgb(0,95,192) `#005fc0`, ink rgb(36,36,36) `#242424`.

## Doc-page record (2026-06-17, WebFetch)

- `https://turtle.dmm.com/about/introduction/` — Turtle is DMM's design system; tokens + components + templates + Storybook + Turtle MCP; "Dark-mode 対応をモード切り替えだけで完了できます"; "Do more with less"; >50% adoption as of August 2025.
- `https://turtle.dmm.com/about/design-principle/` — ABCDE principles (Achieve Goals / Bring out Abilities / Consistency / Design Intent / Evolve), each as a Japanese question (the five verbatim quotes carried in the portable Experience section). "not a completed form" / evolves with needs.

## Claim ledger

Source token claims and where each landed in the portable document.

| Source claim | Evidence | Portable destination |
|---|---|---|
| `tokens.colors.primary` `#94bcff` | turtle.dmm.com live | Foundations — Turtle accent |
| `tokens.colors.accent-green` `#98e467`, `accent-pink` `#f7b6e7` | turtle.dmm.com live | Foundations — Turtle accent |
| `tokens.colors.canvas` `#323232`, `surface` `#252525` | turtle.dmm.com live | Foundations — dark surfaces, elevation |
| `tokens.colors.on-dark` / `on-dark-soft` / `on-dark-muted` | turtle.dmm.com live | Foundations — text ladder |
| `tokens.colors.brand-crimson` / `-deep` / `-bright`, `amber`, `amber-soft` | dmm.com live (`#b42f5a` ×16) plus source §2 role prose | Foundations — consumer brand |
| `tokens.colors.light-canvas` / `light-surface` / `light-hairline` / `ink` / `ink-soft` / `ink-muted` / `link-blue` | dmm.com live plus source §2 role prose | Foundations — light neutrals and links |
| `#0000ee` classic browser blue (source §1 prose only) | dmm.com prose observation | Foundations — light neutrals and links |
| `tokens.typography.family.*` (sans / cjk / cjk-alt / legacy-cjk) | turtle.dmm.com and dmm.com computed stacks | Typography & Assets — font evidence, both stacks |
| `tokens.typography.portal-title` / `hero-title` / `section-head` / `card-head` / `body` / `body-tight` / `nav-label` / `legacy-link` | live computed | Typography & Assets — type roles table |
| Brand Title 28px / 1.80rem / 600 / 1.3 (source §3 table only) | live computed | Typography & Assets — type roles table |
| `tokens.spacing` xs 4 / sm 8 / md 12 / base 16 / lg 24 / xl 32 / card-x 56 / card-y 24 | live computed | Foundations — spacing |
| `tokens.rounded` sm 8 / md 12 / full 9999 | live computed | Foundations — shape |
| `tokens.shadow.none` | box-shadow none across hero, nav, headings, cards | Foundations — elevation |
| `tokens.components.card-link` | turtle.dmm.com live | Components & States — Resource / Product Card |
| `tokens.components.pill-button` | turtle.dmm.com live | Components & States — Portal Pill |
| `tokens.components.nav-button` | turtle.dmm.com live | Components & States — Top-Nav Trigger |
| `tokens.components.side-tab` | turtle.dmm.com live | Components & States — Sidebar Nav Item |
| `tokens.components.doc-link` | turtle.dmm.com live | Components & States — In-Page Doc Link |
| `tokens.components.crimson-tag` | dmm.com live | Components & States — Brand Crimson Tag |
| `tokens.components.amber-pill` | dmm.com live | Components & States — Promo Amber Chip |
| Legacy Platform Link `#005fc0` 12.5px / 400 (source §4 only) | dmm.com live | Components & States — Legacy Platform Link |
| Component heights 100px / 40px / 35px (source §4 only) | live measured, desktop | Components & States and Layout & Platforms — touch targets |

## Evidence-class notes

- **First-party, published.** The five ABCDE Japanese questions, "発見と熱中を、創造する。", "Turtle Design System ポータル β", "Do more with less", "プラットフォーム開発本部のフロントエンドプロダクトの50%以上で導入", "(準備中)", "not a completed form", the public-release motivation, and the Turtle composition (tokens, React components, templates, Figma library, Storybook, Turtle MCP) come from the two Tier 1 doc pages and the live portal.
- **Public corporate record, not a first-party DMM press statement.** The 1999 founding, 亀山敬司 (Keiji Kameyama), 株式会社デジタルメディアマート → 合同会社DMM.com, the Roppongi HQ, the founder's early career, and the 60+ service count are recorded in the source as widely documented public facts (Japanese Wikipedia / corporate profiles) plus the live portal tagline. The portable Experience section carries that qualification with the facts.
- **Derived editorial interpretation.** The source itself flags its interpretive claims — "luminance step replaces shadow so it survives the theme switch", "dark-first as a peer not a bolt-on", "calm DS behind a loud crimson platform" — as editorial readings connecting Turtle's observed design to its stated principles rather than sourced DMM statements. Every derived reading in the portable document carries an adjacent qualification, and the qualified set is wider than the three claims the source itself flagged. The eighteen qualified sites are: the characterizing wording and the two-register tension in Scope; the naming and grouping of the Distinctive traits; the ABCDE UI implications; the prescriptions and causal wording in Application rules; the judgement wording inside Avoid; the elevation discipline and accent-blue readings; the motion durations, easing role assignments, and motion rules; the font-pragmatism reading; the type rules; the asset shadowless-consistency reading; the state contract table; the per-component state-applicability role determinations; the consumer-directory density reading in Grid and container; the interpretive half of Density; the responsive bands with the cross-breakpoint radius claim; the β gloss with the tone table (the 「(準備中)」 reading stays observed — the live inspect record above carries it); the forbidden-register framing; and the voice characterization. The founding history additionally carries an evidence-class qualification in Scope.
- **Personas.** The source §13 carried four named archetype biographies and labelled them fictional archetypes informed by publicly observable segments. The four biographies are deleted, not relocated here. Only the group-level segments the source itself calls publicly observable — platform-division front-end engineers and designers, plus the external community the portal was opened to — survive, in Experience → Audience.
- **Motion.** The source carried three `cubic-bezier` values, one per named easing role. No motion observation appears anywhere in the source evidence ledger, and the `ease-exit` value is byte-identical to the non-brand implementation default in `spec/omd-v0.1.md`. The three curve values are dropped at the smallest value boundary; the role names, the three durations, the reduced-motion behavior, and the motion rules survive in Foundations under a derived-inference qualification, with the five-evidence promotion gate stated there.

## Proof notes

- `components_harvested: true`; conflicts: none.
- Two surfaces inspected; no interaction expansion is recorded in the source, so no hover, focus, pressed, or disabled visual value is promoted for any component.
- Uncaptured visual treatments are omitted rather than marked `not-applicable`; applicability follows control meaning. `loading` / `error` / `success` for the Portal Pill stay open at the unresolved boundary. State coverage is not claimed complete.
- Official history and the public corporate record are narrative context, not token sources.
