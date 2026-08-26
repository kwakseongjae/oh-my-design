# FriendliAI provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the FriendliAI migration. Canonical source remains `web/references/friendliai/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | friendliai |
| name | FriendliAI |
| display_name_kr | 프렌들리에이아이 |
| country | KR |
| category | ai |
| homepage | https://friendli.ai/ |
| primary_color | `#2a62db` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=friendli.ai&sz=128` |
| omd format (source) | 0.1 |
| added | 2026-07-02 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

The logo slug is a third-party favicon-proxy URL, not a FriendliAI-published asset file, so it is recorded here only and is not presented as a brand asset in the portable body.

Token note from source, verbatim: "primary = live 'Get started' CTA blue (#2a62db); link text runs a slightly deeper blue (#2453ba). Ink near-black navy (#0a101a) on a cool-grey canvas (#f7f8fa). Distinctive variable-font weights (530 / 650) via the Saans typeface."

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| surfaces inspected | 2026-07-02 |

Conflicts unresolved: none (source footer, verbatim: "**Conflicts unresolved:** none").

Verification method recorded by the source: `omd:add-reference` CREATE, live inspect of 2 surfaces via Playwright `getComputedStyle`.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing homepage | https://friendli.ai/ | 2026-07-02 |
| blog | blog index | https://friendli.ai/blog | 2026-07-02 |

## Sources

### Tier 1

- https://friendli.ai/ — homepage; hero H1, hero H2, primary and secondary CTA, announcement banner, feature cards, body type, canvas
- https://friendli.ai/blog — blog; blog H1, HIGHLIGHTS badge, topic tag pills, search input
- https://docs.friendli.ai/guides/intro — listed by the source as a Tier 1 source; no computed value in the source is attributed to it, and none is promoted

### Tier 2 (no usable record)

- getdesign.md/friendliai — 0 DESIGN.md files (no entry)
- styles.refero.design/?q=friendli — no FriendliAI match (default browse grid returned)

## Raw live-inspect record

Reproduced from the source's own sources comment, which the source states is backed by raw samples in the sibling `web/references/friendliai/.verification.md`.

- Homepage — hero H1 "The Frontier AI Inference Cloud" (Saans 56px / weight 650 / color rgb(10,16,26) #0a101a); subhead H2 "Inference performance drives profitability" (22px / 530 / rgb(72,101,129) #486581); "Get started" CTA bg rgb(42,98,219) #2a62db / white / radius 4px / 32px height; "Talk to an engineer" bg white / black text; announcement banner "GLM-5.2 is live. #1 throughput on OpenRouter" bg rgb(0,149,255) #0095ff; feature cards white / 1px #d9e2ec / 32px radius; body font SaansLocalFont / rgb(10,16,26) / 16px / lh 24.8px; canvas rgb(247,248,250) #f7f8fa.
- Blog — blog H1 36px / weight 600; HIGHLIGHTS badge bg rgb(10,16,26) #0a101a / white / 360px pill; topic tag pills white / rgb(36,59,83) #243b53 / 360px; search input white / 1px rgb(217,226,236) #d9e2ec / 360px pill.

## Claim ledger

| Claim | Surface | Evidence class |
|---|---|---|
| tokens.colors.primary `#2a62db` | home | live computed |
| tokens.colors.link `#2453ba` | home | live computed |
| tokens.colors.accent `#0095ff` | home | live computed |
| tokens.colors.ink `#0a101a` | home, blog | live computed |
| tokens.colors.slate `#243b53` | blog | live computed |
| tokens.colors.navy `#102a43` | home | live computed |
| tokens.colors.muted `#486581` | home | live computed |
| tokens.colors.slate-mid `#537696` | home | live computed |
| tokens.colors.grey `#6e7a84` | home | live computed |
| tokens.colors.faint `#a7adb2` | home | live computed |
| tokens.colors.canvas `#f7f8fa` | home | live computed |
| tokens.colors.hairline `#d9e2ec` | home, blog | live computed |
| tokens.colors.hairline-soft `#e5ebf2` | home | live computed |
| tokens.colors.on-primary `#ffffff` | home | live computed |
| tokens.colors.black `#000000` | home | live computed |
| tokens.typography.family.sans `Saans` | home, blog | live computed (`SaansLocalFont` with a local fallback) |
| tokens.typography.display-hero 56 / 650 / 1.10 | home | live computed |
| tokens.typography.blog-title 36 / 600 / 1.20 | blog | live computed |
| tokens.typography.subhead 22 / 530 / 1.30 | home | live computed |
| tokens.typography.nav 15 / 500 / 1.40 | home | live computed |
| tokens.typography.body 16 / 400 / 1.55 | home | live computed (lh 24.8px) |
| tokens.typography.button 14 / 530 | home | live computed |
| tokens.typography.tag 13 / 500 | blog | live computed |
| tokens.spacing xs 4 / sm 8 / md 12 / base 16 / lg 24 / xl 32 / section 48 | home, blog | live computed |
| tokens.rounded sm 4 / md 8 / lg 12 / xl 32 / full 360 | home, blog | live computed |
| tokens.shadow.elevated `rgba(0,0,0,0.25) 0px 0px 35px 0px` | home | live computed |
| tokens.shadow.none `none` | home, blog | live computed |
| tokens.components.button-primary.* (`type: button`) | home | live computed |
| tokens.components.button-secondary.* (`type: button`) | home | live computed |
| tokens.components.feature-card.* (`type: card`) | home | live computed |
| tokens.components.elevated-card.* (`type: card`) | home | live computed |
| tokens.components.tag-pill.* (`type: badge`) | blog | live computed |
| tokens.components.highlight-badge.* (`type: badge`) | blog | live computed |
| tokens.components.search-input.* (`type: input`) | blog | live computed |
| tokens.components.nav-link.* (`type: tab`, `active: text #2453ba`) | home | live computed |
| Voice samples (4, §10) | home | verbatim live copy |
| Brand positioning strings (§1, §11) | home | verbatim live copy |
| Product structure (dedicated / serverless endpoints, containers) | home | read from the site's Product and Solutions navigation |

Values recorded in §4 prose but absent from the source frontmatter: the Log in (Quiet) control (`#537696` text, 4px radius, 0px 4px padding, 32px height, 14px / 530), and the Feature Card title `#0a101a` / body `#6e7a84` text roles, which appear only in the source's §9 quick reference.

## Evidence-class boundaries carried into the body

- Founding and heritage framing (systems research on efficient large-model serving) is described by the source itself as general public knowledge about the company, not a directly quoted FriendliAI statement.
- The source states that interpretive claims — "numbers over adjectives", "engineer as first-class user", "precision as personality" — are editorial readings connecting the observed design and copy to the positioning, not FriendliAI statements.
- §5 layout, §6 depth philosophy, §7 do/don't rules, §8 responsive breakpoints, §12 principles, §14 states, and §15 motion character carry no separate evidence attribution in the source; they are treated as derived editorial inference and qualified adjacently in the body.
- Throughput, latency, and cost claims are FriendliAI-published assertions reproduced as brand copy. No UI value in the body rests on them, and this record does not verify them.

## Omission ledger

| Omitted | Reason |
|---|---|
| §13 personas — three named fictional archetypes with ages, cities, employers, and motivations | Fictional biography. Not promoted, and deliberately not re-recorded here, not even as names. The source's own group-level segments (ML platform engineers, AI product teams, infrastructure leads) survive in the body's Audience. One string went with them: "Book a demo", which appears in the source only inside a persona's reasoning and is a contrast phrase attributed to other vendors, not FriendliAI copy. The published contrast the source does attribute to FriendliAI — "Request a demo" never standing in place of "Get started" — survives in the body's Forbidden register. |
| `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | The three exact curves carry no attribution in the source, whose motion section is part of an unsourced philosophy layer; `ease-exit` is the same value carried by the legacy authoring template. Token names, durations, and uses survive in the body; the curves are dropped rather than promoted. |
| §9 tool-facing prompt wrappers, iteration checklist, and the quick color reference restatement | Tool-specific prompt packaging with no receiving slot. The two values that existed only there — Feature Card title `#0a101a` and body `#6e7a84`, and the right-aligned header placement of the primary button — were moved into Components and Layout instead of dropped. |

## Proof notes

- Interaction expansions: 1 (`nav-link.active` text `#2453ba`). Every other component record is a default-state observation.
- Hover, button-press, and focus-ring treatments are named in the source's motion prose without values; they are omitted as visual treatments and are not `not-applicable` grounds. State coverage is not claimed complete.
- The source never records `focus-visible` as a captured state; no `focus-visible` treatment value appears anywhere in the outputs.
- Four components (Feature Card, Elevated Spotlight Card, Topic Tag Pill, HIGHLIGHTS Badge) carry no interactive-kind evidence, so kind and the state-applicability map are omitted for them.
- Loading, error, and success are closed as `not-applicable` on Log in (Quiet) and Top Navigation Item for role reasons — a destination link and a navigation item commit no operation of their own — never for absence of observation.
