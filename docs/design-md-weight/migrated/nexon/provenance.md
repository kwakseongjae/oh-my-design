# Nexon provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/nexon/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | nexon |
| name | Nexon |
| country | KR |
| category | consumer-tech |
| homepage | https://www.nexon.com |
| primary_color | `#00de5a` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=www.nexon.com&sz=128` |
| omd format (source) | 0.1 (`omd: "0.1"`) |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

Token note from source: primary = live Nexon brand green (`#00de5a`, `rgb(0,222,90)`) measured on the home-page CTA with black label; chrome built on near-black `#17191d` text over white.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-09 |
| added | 2026-06-09 |
| tokens.extracted | 2026-06-09 |
| sibling inspected | 2026-06-09 |

Conflicts unresolved: none.

**Verified:** 2026-06-09 (omd-add-reference live inspect)

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface | https://www.nexon.com | 2026-06-09 |
| main | product-surface | https://www.nexon.com/Main/Index | 2026-06-09 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.nexon.com | 2026-06-09 |
| main-live | product-surface | https://www.nexon.com/Main/Index | 2026-06-09 |

### Tier 1

- https://www.nexon.com (Korean home + live DOM)
- https://www.nexon.com/Main/Index (main portal surface, live DOM)

### Sibling-named brand-owned URLs (not token surfaces)

Recorded from `web/references/nexon/.verification.md`. Not promoted into the portable body as token surfaces.

- https://company.nexon.com — Nexon Korea official corporate / IR site
- https://apps.apple.com/kr/developer/nexon-korea-corporation/id368892029 — Nexon Korea developer page on the Korean App Store

## Claim ledger

Claims use YAML paths from the source. Surface `home` = https://www.nexon.com / computed-style / 2026-06-09.

| claim | surface |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.on-primary | home |
| tokens.colors.canvas | home |
| tokens.colors.ink | home |
| tokens.colors.near-black | home |
| tokens.colors.body | home |
| tokens.colors.label | home |
| tokens.colors.muted | home |
| tokens.colors.disabled | home |
| tokens.colors.pure-black | home |
| tokens.typography.family.sans | home |
| tokens.typography.family.fallback | home |
| tokens.typography.nav-link.size / weight / lineHeight / use | home |
| tokens.typography.menu-link.size / weight / lineHeight / use | home |
| tokens.typography.cta.size / weight / lineHeight / use | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.label.size / weight / lineHeight / tracking / use | home |
| tokens.typography.caption.size / weight / lineHeight / use | home |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home |
| tokens.rounded.sm / md / lg / full | home |
| tokens.shadow.flat / ambient / elevated | home |
| tokens.components.button-primary.* | home |
| tokens.components.button-disabled.* | home |
| tokens.components.button-ghost.* | home |
| tokens.components.nav-link.* | home |
| tokens.components.menu-item.* | home |
| tokens.components.card.* | home |
| tokens.components.badge.* | home |
| tokens.components.footer-label.* | home |
| tokens.components.input-text.* | home |

## Token-set byte forms

YAML `use` strings, kept verbatim in the portable body as Token-set use lines:

| Component / role key | Verbatim `use` |
|---|---|
| nav-link | Primary GNB navigation link, ink color |
| menu-link | Secondary nav / sub-menu link |
| cta | Primary green CTA label, NEXON Gothic Bold |
| body | Standard reading text, footer copy |
| label | Muted utility labels |
| caption | Bold footer / emphasis caption |
| button-primary | Primary green CTA, black label, NEXON Gothic Bold, sharp corners |
| button-disabled | Inactive / disabled CTA, muted gray fill |
| button-ghost | Secondary text action, no fill, ink label |
| nav-link (component) | GNB top navigation item |
| menu-item | Dropdown / sub-nav list row |
| card | Game promo card on white canvas, ambient shadow |
| badge | NEW / event badge, brand green fill |
| footer-label | Bold footer label, muted gray |
| input-text | Search / login field, muted #919191 placeholder |

YAML `nav-link.active`: `Nx bottom border #00de5a`.

YAML primitive types, kept on the matching portable component records: `type: button` ×3 (`button-primary`, `button-disabled`, `button-ghost`); `type: tab` ×1 (`nav-link`); `type: listItem` ×1 (`menu-item`); `type: card` ×1 (`card`); `type: badge` ×2 (`badge`, `footer-label`); `type: input` ×1 (`input-text`).

## Sibling raw samples

From `web/references/nexon/.verification.md`. Method: playwright getComputedStyle (live DOM), 2026-06-09. Korean home page title recorded there: "넥슨".

Corroboration of source-body values (not a second authority):

- Primary CTA — background `rgb(0, 222, 90)` (`#00de5a`), color `rgb(0, 0, 0)` (`#000000`), font "NEXON Gothic Bold", 14px, weight 700
- Disabled CTA — background `rgb(159, 161, 167)` (`#9fa1a7`), color `rgb(255, 255, 255)`, 14px
- Heading/link ink — `rgb(23, 25, 29)` (`#17191d`), 16px / 14px, weight 400
- Near-black link — `rgb(8, 4, 16)` (`#080410`)
- Body text — `rgb(115, 120, 129)` (`#737881`), 12px, weight 400, font-family "malgun gothic", "sans serif"
- Label gray — `rgb(74, 78, 87)` (`#4a4e57`), 12px
- Muted label — `rgb(145, 145, 145)` (`#919191`), 12px, letter-spacing -0.3px
- Footer bold label — `rgb(159, 161, 167)` (`#9fa1a7`), 12px, weight 700
- Nav background — `rgb(255, 255, 255)` (`#ffffff`)

Sibling-only measurements (kept here; not promoted into the portable body as extra tokens):

- Disabled CTA line-height `35.98px`
- Near-black link size `15px`
- Muted label line-height `14.4px`

## Proof notes

- Token-level claims (source sections 1–9) are sourced from a live Playwright getComputedStyle inspection of https://www.nexon.com (2026-06-09), as the source HTML comment states. Source comment heading: OmD v0.1 Sources — Philosophy Layer (sections 10–15).
- Brand narrative (§11) uses widely documented public facts the source lists: 1994 Seoul founding by Jake Kim (Kim Jung-ju); *Nexus: The Kingdom of the Winds* (1996); free-to-play / item-based model; named franchises; NEXON Gothic as a free public typeface family.
- Source §13 entries are fictional archetypes. They are not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a).
- Interpretive claims about brand intent ("green as scarce power-up", "neutral frame for vivid games") are editorial readings the source itself flags, not official Nexon statements. Portable body carries adjacent complete B2a qualifications.
- `components_harvested: true`
- Uncaptured `focus-visible` treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- No published first-party UI specification is named; the B2a example form is used as-is.

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics.

| Item | Disposition |
|---|---|
| Source §13 Personas — 4 entries (name, age, city, motivation, affiliation classification) | Whole section dropped. The source's own header labels them fictional archetypes informed by publicly observable segments, not individual people. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). The source's own group wording (Korean and global players, returning veterans, prospective partners/investors) stays in Audience. |
| Source §9 Agent Prompt Guide — Quick Color Reference, three Example Component Prompts, six-step Iteration Guide | Deleted as tool-facing prompt. Brand constraints already live in Foundations, Typography, Components, Experience application rules, and Avoid. Unique values moved rather than dropped: see the next paragraph. |
| §15 cubic-bezier values — `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`; `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | Removed from the portable body as unsourced curves (philosophy layer; the source's live inspect comment covers sections 1–9). Kept here verbatim. Duration tokens, easing *role* names and uses, signature motions, and the reduced-motion rule stay in the portable body. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped.

- Primary CTA `#00de5a` with black `#000000` label — Semantic color + Primary Green CTA.
- Background Pure White `#ffffff` — Semantic color canvas.
- Heading / nav text Ink `#17191d` — Semantic color ink.
- Body text Body Gray `#737881` — Semantic color body.
- Secondary label Label Gray `#4a4e57` — Semantic color label.
- Muted / placeholder Muted Gray `#919191` — Semantic color muted + Search / Login Field.
- Disabled Disabled Gray `#9fa1a7` — Semantic color disabled + Disabled CTA.
- Primary CTA 0px radius, 12px 24px padding, 14px NEXON Gothic Bold weight 700, label "지금 플레이" — Primary Green CTA + Primary tasks.
- Game promo card white background, 4px radius, shadow `rgba(0,0,0,0.08) 0px 2px 8px` — Game Promo Card.
- Title 16px `#17191d`, body 12px `#737881` — Game Promo Card (§9-only pairing).
- Green `#00de5a` NEW badge with black text, 4px radius — NEW / Event Badge + Game Promo Card.
- GNB white background, 16px `#17191d` links, active item with `#00de5a` bottom border underline — GNB Nav Link.
- One or two appearances per viewport maximum — Application rules (§9-only constraint).
- Black on green, always — Application rules / Avoid.
- NEXON Gothic Bold for CTAs/emphasis; malgun gothic for body — Family + Application rules.
- Headings `#17191d`, body `#737881`, labels step through `#4a4e57` / `#919191` — Semantic color + Application rules.
- Sharp corners (0-4px); no pills — Shape + Avoid.
- Shadows are neutral black, low alpha, functional only — Elevation.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 | Inspected `https://www.nexon.com` and `https://www.nexon.com/Main/Index` as this contract's token surfaces; token-set note as a measurement bound rather than as tokens for surfaces the source did not inspect; values stay attached |
| Experience Scope ¶2 | Atmosphere characterizations: split personality; editorial chrome; high-voltage green; detonates; press start; power-up; glowing console button; lands like a hit; custom face shouting / system face reading; industrial pairing; most identifiable signal; pixel-grid heritage; grown-up corporate shell |
| Experience Scope ¶3 | Founding-and-portfolio narrative as context that does not by itself supply interface tokens; refuse-and-neutral-frame closing sentence kept as one unit |
| Primary tasks | Selecting the three recorded surfaces and controls as primary tasks; not from the persona section |
| Audience | Biography-drop (no name, age, city, motivation, or affiliation classification); source-named groups Korean and global players, returning veterans, prospective partners/investors |
| Distinctive traits | Grouping the recorded values as the distinctive layer; readings inside the bullets |
| Principles | The six numbered items |
| Application rules | The Do lists (§8 and §16) and the reasons attached; both writings kept; §9 one-or-two-appearances constraint |
| Avoid | The Don't lists (§8 and §16) and the reasons inside them; both writings kept |
| Foundations Semantic color | Role names from the source's labels; signature / most-identifiable / reads-cleaner characterizations; `on-primary` and `pure-black` unmerged; `tokens.colors.disabled` off footer-label foreground |
| Foundations Spacing | Unitless steps unmerged from matching radii, paddings, and type sizes; dense spacing as the Korean game-portal convention |
| Foundations Shape | Four rounded keys unmerged; `full: 9999` kept on its own key with no invented use; 0–4px as sharp geometry rather than a universal scale |
| Foundations Elevation | Elevation as purely functional rather than atmospheric; brand energy from color and typography rather than decorative depth |
| Foundations Motion | Philosophy-layer attribution; durations / roles / signature / reduced-motion kept; unsourced cubic-bezier curves omitted; five-kind gate held |
| Motion duration keep-both | `120ms` / `240ms` / `360ms` unmerged from spacing steps; `motion-fast` "focus" as a duration role rather than a `focus-visible` treatment |
| Motion B3 gate | Five-kind promotion gate (computed transition properties, animation name, duration, easing, reduced-motion behavior); refusal of a partial confirmation; a match against an official framework or vendor document is not that gate |
| Typography Font evidence | Evidence-class application readings; official-product-use as live CTA face rather than a published type specification; free-public family as distribution not a license string; fallback never substitute |
| Typography Family | Two-face split as a deliberate brand stamp; `malgun gothic` refused as a substitute for NEXON Gothic Bold |
| Type roles | YAML unitless sizes and `1.20` kept; YAML `use` and §3 notes as two writings |
| Type roles size-off-spacing | YAML `nav-link.size` `16` off `tokens.spacing.base: 16`; YAML `body.size` `12` off `tokens.spacing.md: 12` |
| Typography rules | Four source typography principles and the readings inside them |
| Assets | Google s2 slug as catalog identity pointer; NEXON Gothic free-public release as distribution not a license string; game promo imagery as first-party catalog content |
| Components Capture record | Role-based applicability; kind and map omitted where interactive-kind evidence is absent; YAML primitive type only when recorded; `focus` duration role ≠ `focus-visible`; not a complete state-coverage claim |
| Primary Green CTA | `12px 24px` / `14px / 700` as this button's geometry rather than spacing or a shared type-role row |
| Disabled CTA | Appearance record of the primary CTA, not a second control family; kind and a second map omitted |
| Ghost / Text Action | `10px 20px` as this button's geometry; retry wording kept on the capture record rather than rewritten as a proof that this ghost is the only retry control |
| GNB Nav Link | `0px 16px` / `16px / 400` as this tab's geometry; YAML `Nx bottom border #00de5a` kept beside the §4 underline wording |
| Menu Item | `8px 16px` as this list row's geometry |
| Game Promo Card | Kind and map omitted; `16px` padding and `4px` radius as this card's geometry |
| NEW / Event Badge | Status marker rather than a control |
| Footer Label | Status/label marker rather than a control; `#9fa1a7` kept on this component rather than merged into `tokens.colors.disabled` |
| Search / Login Field | `8px 12px` as this input's geometry; search and login kept on this one record |
| Layout & Platforms | Functional density; green as the spotlight; breakpoint / collapsing rows as source-stated layout rules; CTA `12px` vertical padding off `tokens.spacing.md: 12` |
| Content & Locales | Two-audience register; those lines not treated as a complete product-microcopy guide |
| Named gaps | Catalog of unnamed values rather than coverage of domains the source never named |

Portable `DESIGN.md` carries 35 complete B2a qualifications. This table is 35 data rows. Preamble sentences on this page are not portable qualifications.
