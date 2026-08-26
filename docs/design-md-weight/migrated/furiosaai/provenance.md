# FuriosaAI provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the FuriosaAI migration. Canonical source remains `web/references/furiosaai/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | furiosaai |
| name | FuriosaAI |
| display_name_kr | 퓨리오사AI |
| country | KR |
| category | ai |
| homepage | https://furiosa.ai |
| primary_color | `#e21500` |
| logo | `type: favicon`, `slug: https://cdn.prod.website-files.com/69289524195a1f9e06ade49b/6980d60efe980f28a29f0ade_Furiosa_Webclip.png` |
| omd format (source) | 0.1 |
| added | 2026-06-26 |
| verified | 2026-06-26 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |

The logo entry is a favicon URL on a Webflow-hosted CDN domain. The source records the URL and the `type: favicon` classification and nothing further about its ownership or license, so it is recorded here only and is not presented in the portable body as a separately published FuriosaAI brand-asset file.

Token note from source, verbatim: "primary = live Renegade Red CTA (#e21500); display type is ABC Favorit / ABC Favorit Mono. High-contrast black (#000000) hero sections alternate with white (#ffffff). Accent chips: mint (#70e697) News, yellow (#fffa82) Technical Updates, lavender (#cdbbff) on dark."

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.extracted | 2026-06-26 |
| surfaces inspected | 2026-06-26 |
| voice samples verified live | 2026-06-26 |

Conflicts unresolved, quoted verbatim from the source footer: "**Conflicts unresolved:** none".

Verification method recorded by the source: `omd:add-reference` CREATE, Tier 1 live inspect via playwright `getComputedStyle`.

## Surfaces

The source declares no surface ids and no per-surface anchors. The rows below are its own URL list with its own parenthetical descriptors, unaltered; no id, kind, or descriptor has been supplied by this migration.

| url | source descriptor | inspected |
|---|---|---|
| https://furiosa.ai | "homepage" | 2026-06-26 |
| https://furiosa.ai/rngd | "RNGD product page" | 2026-06-26 |
| https://furiosa.ai/about | "about" | 2026-06-26 |
| https://furiosa.ai/blog | "blog listing — category chips + cards" | 2026-06-26 |
| https://lp.furiosa.ai/furiosa-access-program | "Access Program form inputs" | 2026-06-26 |
| https://developer.furiosa.ai/latest/en/ | "developer docs — brand-owned, stock Sphinx theme" | 2026-06-26 |

### Unresolved internal count conflict (preserved, not resolved)

The source states "5 brand surfaces" in its footer (line 228) and "5 brand-owned surfaces" in its trailing sources comment (line 423), but the comment then lists **six** URLs (lines 424–429), and the footer's Tier 1 list names a different set of five — it includes `https://github.com/furiosa-ai` and omits `/about` and `/blog`. The union of both lists is the seven URLs recorded in Sources below. No value in the outputs depends on which count is correct, and the migration does not pick a winner.

## Sources

### Tier 1

Footer list, verbatim: https://furiosa.ai, https://furiosa.ai/rngd, https://developer.furiosa.ai/latest/en/, https://lp.furiosa.ai/furiosa-access-program, https://github.com/furiosa-ai

Trailing-comment list, with the source's own parentheticals:

- https://furiosa.ai (homepage)
- https://furiosa.ai/rngd (RNGD product page)
- https://furiosa.ai/about (about)
- https://furiosa.ai/blog (blog listing — category chips + cards)
- https://lp.furiosa.ai/furiosa-access-program (Access Program form inputs)
- https://developer.furiosa.ai/latest/en/ (developer docs — brand-owned, stock Sphinx theme)

`https://github.com/furiosa-ai` appears in the footer Tier 1 list only. No computed value in the source is attributed to it, and none is promoted.

### Tier 2 (no usable record)

- getdesign.md/furiosaai — "not listed (SPA shell, no FuriosaAI entry)"
- styles.refero.design — "not listed (KR AI-hardware brand not catalogued)"

## Source frontmatter strings (verbatim)

The source's frontmatter carries its own `use:` role descriptions and two value strings whose exact byte form differs from the §3/§4 prose that restates them. They are reproduced verbatim here so that no source-authored string is lost to a near-duplicate paraphrase, even where the meaning already survives in the portable body (A5).

| Frontmatter key | Verbatim string |
|---|---|
| `typography.display-xl.use` | "Oversized uppercase statement headlines, ABC Favorit" |
| `typography.display.use` | "Hero / section headlines, ABC Favorit" |
| `typography.heading.use` | "Mid-section emphasis headings" |
| `typography.section.use` | "Section titles, newsroom heads" |
| `typography.card-title.use` | "Blog / news card titles" |
| `typography.body.use` | "Body copy, ABC Favorit" |
| `typography.nav.use` | "Top nav links, ABC Favorit" |
| `typography.button.use` | "Button label, ABC Favorit Mono" |
| `typography.caption.use` | "Skip link / small labels" |
| `components.button-primary.use` | "Primary CTA — Watch the sessions, Get started" |
| `components.button-close.use` | "Modal / popup close button" |
| `components.button-skip.use` | "Skip-to-content accessibility link" |
| `components.input-text.border` | "1px solid #c0d0de" |
| `components.input-text.padding` | "0 15px" — the §4 prose writes the same padding as `0px 15px`; both byte forms are source-present and both are kept |
| `components.input-text.use` | "Furiosa Access Program form field" |
| `components.card-blog.use` | "Blog / news card on white" |
| `components.card-featured.use` | "Featured / elevated card" |
| `components.badge-news.use` | "News category label" |
| `components.badge-technical.use` | "Technical Updates category label" |
| `components.nav-link.active` | "#151515 on light scrolled header" |
| `components.nav-link.use` | "Top navigation item on dark hero" |

## Raw live-inspect record

The source's trailing comment titles itself "OmD v0.1 Sources — Philosophy Layer (sections 10–15)". Reproduced from that comment.

- "Token-level claims (§1-9) are sourced from this live inspection: Renegade Red #e21500 CTA, ABC Favorit / ABC Favorit Mono type, black/white band cadence, mint #70e697 + yellow #fffa82 category chips, lavender #cdbbff on dark, maroon #440a07 band, form input #30343b on #c0d0de."
- "Voice samples (§10) are verbatim from the live homepage and RNGD product page."
- "Brand narrative (§11): FuriosaAI is a South Korean fabless AI-chip company founded 2017 in Seoul, CEO June Paik (백준호); products Warboy (Gen 1, vision) and RNGD ("Renegade", Gen 2, LLM/multimodal inference, a Tensor Contraction Processor). These are widely documented public facts; specific details beyond the live site are general public knowledge, not directly quoted from a verified FuriosaAI statement in this turn."
- "Interpretive claims (e.g., "one red means action", "industrial not decorative as a rejection of GPU-era spectacle") are editorial readings connecting FuriosaAI's observed design to its positioning, not directly sourced FuriosaAI statements."

## Claim ledger

The source attributes its token-level claims **collectively**: "Token-level claims (§1-9) are sourced from this live inspection" of the six listed URLs. It does not name a per-value surface for any color, metric, or component record. Every row below therefore carries the collective attribution, and a surface is named only where the source itself names one in §1, §2, or §4. Nothing in this column comes from the sibling verification file.

| Claim | Evidence class | Surface named by the source |
|---|---|---|
| tokens.colors.primary `#e21500` | live computed | — (CTA, skip link, and modal close named as uses, no surface) |
| tokens.colors.canvas `#ffffff` | live computed | — |
| tokens.colors.black `#000000` | live computed | — |
| tokens.colors.ink `#151515` | live computed | — |
| tokens.colors.ink-soft `#111111` | live computed | — |
| tokens.colors.maroon `#440a07` | live computed | "one immersive blog section band" (§2) |
| tokens.colors.mint `#70e697` | live computed | "Blog and newsroom cards" (§1) |
| tokens.colors.yellow `#fffa82` | live computed | "Blog and newsroom cards" (§1) |
| tokens.colors.lavender `#cdbbff` | live computed | "dark sections" (§2) |
| tokens.colors.grey `#7f7f7f` | live computed | — |
| tokens.colors.grey-light `#d4d4d4` | live computed | — |
| tokens.colors.form-ink `#30343b` | live computed | "the Access Program surface" (§2) |
| tokens.colors.form-border `#c0d0de` | live computed | — (form inputs) |
| tokens.typography.family.sans `ABC Favorit` (fallback `Arial, sans-serif`) | live computed | — |
| tokens.typography.family.mono `ABC Favorit Mono` (fallback `Arial, sans-serif`) | live computed | — |
| tokens.typography.display-xl 84 / 400 / 1.00 / tracking -2.1 | live computed | — |
| tokens.typography.display 72 / 400 / 1.10 | live computed | — |
| tokens.typography.heading 48 / 500 / 1.20 | live computed | — |
| tokens.typography.section 36 / 400 / 1.30 | live computed | — |
| tokens.typography.card-title 24 / 400 / 1.17 | live computed | — |
| tokens.typography.body 16 / 400 / 1.60 | live computed | — |
| tokens.typography.nav 16 / 500 / 1.50 | live computed | — |
| tokens.typography.button 16 / 400 / 1.00 | live computed | — |
| tokens.typography.caption 12 / 500 / 1.00 | live computed | — |
| tokens.spacing xs 4 / sm 8 / base 12 / md 15 / lg 24 / xl 48 / section 96 | live computed | — |
| tokens.rounded sm 5 / base 6 / md 8 / lg 10 / xl 12 | live computed | — |
| tokens.shadow.card `rgba(0,0,0,0.18) 0px 18px 50px` | live computed | "the featured story" card (§1, §6) |
| tokens.shadow.none `none` | live computed | "hero, nav, CTAs, and the majority of cards" (§6) |
| tokens.components.button-primary.* (`type: button`) | live computed | — |
| tokens.components.button-close.* (`type: button`) | live computed | — ("popups / overlays", §4) |
| tokens.components.button-skip.* (`type: button`) | live computed | — |
| tokens.components.input-text.* (`type: input`) | live computed | "Furiosa Access Program form field" (frontmatter, §4) |
| tokens.components.card-blog.* (`type: card`) | live computed | "on white bands" (§4) |
| tokens.components.card-featured.* (`type: card`) | live computed | — |
| tokens.components.badge-news.* (`type: badge`) | live computed | "on cards" (§4) |
| tokens.components.badge-technical.* (`type: badge`) | live computed | "on cards" (§4) |
| tokens.components.nav-link.* (`type: tab`, `active: "#151515 on light scrolled header"`) | live computed | "Top navigation item on dark hero" (frontmatter) |
| Voice samples (3, §10) | verbatim live copy, "verified live 2026-06-26" | "the live homepage and RNGD product page" (trailing comment) |
| `INFERENCE WITHOUT CONSTRAINTS` statement headline | verbatim live copy | — |
| Nav item labels `Architecture` … `Contact` | live inspected labels | top navigation (§4) |
| Category chip labels `News`, `Technical Updates` | live inspected labels | blog and newsroom cards (§1) |
| `Blog` heading and `See all posts` tertiary link | live inspected labels | "dark sections" (§2) |
| Primary CTA labels `Watch the sessions`, `Get started`, `Get started with Furiosa Access` | live inspected labels | — |
| Company facts — founded 2017, Seoul, June Paik (백준호), Warboy, RNGD | the source's own class: "widely documented public facts … general public knowledge, not directly quoted from a verified FuriosaAI statement in this turn" | — |

Values recorded in §4 prose but absent from the source frontmatter: the Modal Close height 39px, the Skip-to-Content height 36px, the Tertiary Link (on dark) control (transparent background, `#cdbbff` text, 14px 24px padding, 16px / 400 ABC Favorit Mono, use `See all posts`), the Subtle Tile (`rgba(0,0,0,0.02)` background, 1px solid `rgba(0,0,0,0.08)` border, 10px radius), the Blog Card "no border, no shadow" note, and the eight named navigation items. All are carried in the portable body's Components & States.

## Evidence-class boundaries carried into the body

- Company facts (2017 founding, Seoul HQ, June Paik / 백준호, Warboy, RNGD as a Tensor Contraction Processor) carry the source's own class: widely documented public knowledge, not a quoted FuriosaAI statement. The body repeats that limitation in Scope.
- The source states that interpretive claims — "one red means action", "industrial not decorative as a rejection of GPU-era spectacle" — are editorial readings connecting the observed design to the positioning. The body qualifies them adjacently in Scope, Principles, Application rules, and Avoid.
- §1 atmosphere prose, §3 typography principles, §5 whitespace philosophy, §6 shadow philosophy, §7 do/don't rules, §8 responsive breakpoints, §10 voice reading and tone table, §12 principles, §14 states, and §15 motion character carry no separate evidence attribution in the source; they are treated as derived editorial inference and qualified adjacently in the body.
- The three motion durations are stated by the record without a computed transition observation; the body frames them that way rather than as live-computed values.
- The developer-documentation surface is recorded as brand-owned on a stock Sphinx theme. No token is attributed to it in the source, and none is promoted.

## Sibling verification file (not adopted)

`web/references/furiosaai/.verification.md` exists (checked with `find`, since a dotfile is invisible to `ls` and to a `*` glob). **It was not adopted.** No value, count, selector, structural classification, or published string was taken from it into any of the three outputs.

Items that exist only in the sibling and were deliberately left there: the inspection method detail (chromium, headless, viewport 1440×900, `domcontentloaded` + 3.5s settle, cookie/modal dismissal pass); the DOM-level classifications (`div.category-label`, `section.cc-blogs`, "H2 oversized", "H2 section", "H2 mid"); the frequency scans (`"ABC Favorit"` ×1255, `"ABC Favorit Mono"` ×116, background/text/radius counts); the nav-link height 54px; the `document.title` strings; the headline strings `Renegade 2026 Keynote`, `Tensor contraction, not matmul`, and `FuriosaAI and Broadcom partner`; the Tier 1 ↔ Tier 2 conflict matrix; the KR country-source list; and the logo resolution note (256×256 PNG, 3284 bytes, `<link rel="apple-touch-icon">`). None of these appears in `DESIGN.md`, `provenance.md`, or `migration-log.md`.

## Omission ledger

| Omitted | Reason |
|---|---|
| §13 personas — three named fictional archetypes with ages, cities, employers, and motivations | Fictional biography (D2). Not promoted, and deliberately not re-recorded here, not even as names or cities. The source's own group-level audiences — ML infrastructure engineers, data-center architects, Korean deep-tech investors and recruits — survive in the body's Audience, because the source states them in its own disclaimer as publicly observable groups rather than as biography. Two strings went with the personas: the "Broadcom partnership news" mention and the "RTX comparison" mention, both of which occur in the source only inside a persona's reasoning and are not FuriosaAI-attributed copy. |
| `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | The three exact curves carry no attribution in the source, whose §15 sits inside the unsourced philosophy layer; `ease-exit` repeats the value carried by the legacy authoring template at `spec/omd-v0.1.md:262`. Token names, durations, and uses survive in the body's Foundations Motion table; only the unattributed curve values are dropped, and the three curve strings are recorded verbatim in this row. |
| §9 Agent Prompt Guide — quick color reference, four example component prompts, seven-step iteration guide | Tool-facing prompt packaging with no receiving slot. Every hex, size, radius, padding, and label inside it was grepped against the rest of the source before this row was written; each already stands in §2, §3, §4, or §5, so nothing unique was lost (A3). |
| Logo slug URL | Kept in this ledger only (Identity row above). The source classifies it as `type: favicon` and states nothing about ownership or license, so the portable body records the existence of a favicon entry without presenting the URL as a published brand asset. |
| Per-sample "verified live 2026-06-26" annotations on the three voice samples | Freshness metadata. The dates are in this file's Freshness and claim-ledger rows; the sample strings themselves are byte-exact in the body. |

## Proof notes

- Interaction expansions: 2. The top navigation item records an `active` treatment (text `#151515` on the light scrolled header), and the skip link is recorded as revealed on keyboard focus. Every other component record is a default-state observation.
- The source never records `focus-visible`. It records generic `Form (focus)` in §14 and "revealed on keyboard focus" in §4. Both are preserved as separate observed states adjacent to their components, and neither is promoted into a `focus-visible` treatment value (B1). No `focus-visible` row in the outputs carries a treatment value.
- Hover, button-press, and focus treatments are named in the source's §15 motion durations without values; they are omitted as visual treatments and are not `not-applicable` grounds. State coverage is not claimed complete.
- Five components (Blog Card, Featured Card, Subtle Tile, News badge, Technical Updates badge) carry no interactive-kind evidence, so kind and the state-applicability map are omitted for them (C4).
- Loading, error, and success are closed as `not-applicable` on Modal Close, Skip-to-Content, Tertiary Link (on dark), and Top Navigation Item for role reasons — dismissal, in-page focus movement, and destination navigation commit no operation of their own — never for absence of observation (C2).
