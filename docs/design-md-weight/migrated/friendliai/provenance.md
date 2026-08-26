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

## Canonical proof — sibling verification file

**Adopted 2026-08-26.** The earlier migration recorded that this file did not exist. It does. The measurement that produced that claim was wrong, not the repository — see the revision entry in `migration-log.md`. Every field below is transcribed from the file itself.

| Field | Value |
|---|---|
| sibling | `web/references/friendliai/.verification.md` |
| bytes | 6,380 |
| lines | 67 |
| SHA-256 | `1415e992dc2bc5c17bbdffbf21b35505824d68b03db372aa62996ddd61a1e967` |
| heading | `# FriendliAI — Verification Notes (2026-07-02)` |
| grade | `## Proof — Tier 1 live inspect` |
| inspected | 2026-07-02 |
| raw samples | 20 — bullet lines matching `^- ` inside the sibling's `### Raw samples` block, counted with `awk` over that block; the block has no wrapped bullets, so bullets and lines coincide there |

**Why it is adopted.** The date, the method family (`playwright getComputedStyle`), and the three brand-owned URLs all agree with what the source `DESIGN.md` footer and trailing comment state in short form, so the sibling corroborates the source rather than contradicting or widening it. It is the raw record the source's own trailing comment points at ("see web/references/friendliai/.verification.md for raw samples"), and it carries the per-element measurements that the source states only in aggregate.

**Method, quoted from the sibling:** "playwright getComputedStyle (live DOM) — global playwright (chromium, headless, 1440×900), goto `domcontentloaded` + 3.5s settle, cookie/modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, header/nav, buttons, links, cards, badges, inputs, plus a full-DOM background/text color frequency scan across two surfaces."

The viewport in that quote, 1440×900, is the only viewport the sibling records. It is the sole ground under the portable body's single-viewport qualification on the breakpoint table (portable line 403), which until now rested on the source's silence rather than on a stated viewport.

**Sources, from the sibling's `**Sources:**` list:**

- https://friendli.ai/ — homepage, live computed style
- https://friendli.ai/blog — "FriendliAI official blog — brand-owned, second surface"
- https://docs.friendli.ai/guides/intro — "FriendliAI official docs — brand-owned; HEAD 200"

The third is the same URL the source footer lists and the same treatment: `HEAD 200` is reachability, not a computed value, so nothing is attributed to it and nothing is promoted from it. That matches the Tier 1 row above, which was written from the source alone and is now backed.

### Korean regional requirement, from the sibling

The sibling names the same three brand-owned URLs as satisfying the KR ≥2 requirement, and adds, quoted: "getdesign.md / refero.design / Google favicon are explicitly NOT counted toward the KR brand-owned requirement." The catalog `logo` slug is that Google favicon proxy. The Identity note above already declined to present it as a brand asset in the portable body; the ground for that decision is now the sibling's own exclusion rather than an inference.

### Third-party consent widget, excluded on the sibling's own terms

The sibling states, quoted: "the cookie-consent widget buttons ("Accept" / "Decline" / "Preferences") render in `Roboto` with `rgb(0, 58, 250)` (#003afa) and 3px radius — this is a third-party consent tool, NOT FriendliAI's brand system, and was excluded from the palette and component tokens."

The migration reflects that exclusion in full, and it did so before the sibling was read — the source `DESIGN.md` never carried these values either, because the source author had already applied the exclusion upstream. What changes now is the ground: the exclusion is an explicit, quoted decision in the verification record, not a silent absence.

Measured in the portable body (`grep -oF … | wc -l`, and word-boundary `grep -oE` for the radius, which would otherwise match inside `13px`):

| Excluded value | Portable body |
|---|---|
| `Accept` | 0 |
| `Decline` | 0 |
| `Preferences` | 0 |
| `Roboto` | 0 |
| `003afa` | 0 |
| `rgb(0, 58, 250)` | 0 |
| `3px` as a standalone length (`(^|[^0-9])3px`) | 0 |

The two `3px` substring hits in the portable body are both `13px`, the Tag type role, at lines 188 and 378.

### Tier 2 record stays out of the portable body (E1)

The sibling's Tier 2 cross-check reports that `getdesign.md/friendliai` returns "friendliai — 0 DESIGN.md files | getdesign.md" and that `styles.refero.design/?q=friendli` returns its default browse grid with the landing copy "Browse 2,000+ AI-readable design systems". Both strings are third-party page copy, not FriendliAI copy, and the finding itself is a statement about this catalog's verification coverage rather than a fact about the FriendliAI brand. It is ledger material and stays here. Portable-body counts: `getdesign` 0, `refero` 0, and 0 for both quoted strings.

The sibling's conflict matrix resolves ten fields to Tier 1 with "**Conflicts unresolved:** none", matching the source footer already quoted under Freshness.

### Sibling-only values, recorded here and not promoted

The sibling measures the live DOM; the portable contract reconstructs the source `DESIGN.md`. Those are different evidence domains, so a value that exists only in the sibling is a ledger entry and never a portable token.

| Sibling-only value | Portable body |
|---|---|
| Blog H1 headline text, truncated in the sibling itself: `How Kilo Code and FriendliAI Bring…` | 0 |
| Homepage `document.title`: `FriendliAI \| The Frontier AI Inference Cloud` | 0 |
| Blog `document.title`: `FriendliAI Blog` | 0 |
| Announcement banner geometry: height 48px, `padding: 0px 16px` | 0 for `0px 16px` |
| Radius frequency scan: 4px ×48, 8px ×40, 12px ×15, 32px ×10, 360px ×8, 3px ×3, 5px ×1, 6px ×1 | 0 for `6px` as a standalone length; 0 for every count |
| Background frequency scan: `rgb(255,255,255)` ×80, `rgb(247,248,250)` ×19, `rgb(217,226,236)` ×15, `rgb(0,149,255)` ×7, `rgb(10,16,26)` ×2, `rgb(42,98,219)` ×1, `rgb(36,59,83)` ×1, `rgb(16,42,67)` ×1 | 0 |
| Text frequency scan: `rgb(10,16,26)` ×822, `rgb(36,83,186)` ×292, `rgb(0,0,0)` ×124, `rgb(72,101,129)` ×74, `rgb(36,59,83)` ×51, `rgb(255,255,255)` ×29, `rgb(110,122,132)` ×21, `rgb(167,173,178)` ×13, `rgb(83,118,150)` ×3 | 0 |
| Feature card `box-shadow: none` stated as a computed declaration | 0 for `box-shadow` |
| Elevated spotlight card `padding: 30px 30px 0px` | 0 |
| Inline link `font-size: 16px` bound to the `#2453ba` anchor | 0 as a binding |
| Method detail: `1440×900`, `domcontentloaded`, `3.5s settle`, chromium headless, the dismissal pass, the element set, the frequency scan | 0 for `domcontentloaded`, `900`, `getComputedStyle`, `playwright` |
| `docs.friendli.ai` `HEAD 200` | 0 for `HEAD 200` |
| The two third-party Tier 2 page strings above | 0 |

Verified literally: `grep -oF '<value>' docs/design-md-weight/migrated/friendliai/DESIGN.md | wc -l` = 0 for `How Kilo Code`, `FriendliAI | The Frontier AI Inference Cloud`, `FriendliAI Blog`, `0px 16px`, `30px 30px 0px`, `box-shadow`, `document.title`, `domcontentloaded`, `getComputedStyle`, `playwright`, `HEAD 200`, `rgb(`, `×822`, `×292`, `getdesign`, `refero`, `Accept`, `Decline`, `Preferences`, `Roboto`, `003afa`. Word-boundary `grep -oE '(^|[^0-9])(3|6)px'` = 0. Non-promotion list size: **21 literal values plus 2 word-boundary lengths = 23 checked, all 0.**

**One deliberate exception, and its authorization.** `SaansLocalFont Fallback` is a sibling-only string and it now appears **once** in the portable body, in Named gaps, by explicit instruction to record both sides of the family-name divergence rather than select one. It is carried there as the marker of an unresolved question, never as a token: no type role, no component record, and no rule in the body uses it as a family value. It is also the sibling's literal spelling of something the source itself already establishes in paraphrase — the source's §3 says Saans is "served as `SaansLocalFont` with a local fallback", and `"SaansLocalFont Fallback"` is the name of that fallback face. Portable-body count for `SaansLocalFont Fallback`: 1, at the Named gaps entry.

## Where the sibling and the source diverge

Eight places. None is repaired by choosing a side; the values in the portable body are unchanged.

**Direct contradictions (2)**

1. **Elevated Spotlight Card padding.** Sibling: `padding: 30px 30px 0px` — asymmetric, bottom side zero. Source frontmatter: `padding: "30px"`; source §4: `Padding: 30px`. The source collapses a three-value padding into one. The portable body carries the source's form (line 365) and it stays. Recorded here rather than in the body, because the source establishes no four-side question for that card and inventing one in the body would rest a portable gap on a sibling-only value.
2. **Font family, naming level.** Sibling computes `font-family: SaansLocalFont, "SaansLocalFont Fallback"` on body and `SaansLocalFont` on h1 and the nav link. The token `Saans` appears nowhere in any computed sample. The source names the typeface `Saans` and calls the served form `SaansLocalFont` "with a local fallback". Neither name is selected; both are now stated in the portable Named gaps.

**Portable-body claims the sibling does not support (2)**

3. **Surface coverage of the family.** The sibling records a `font-family` only for homepage elements — body, hero h1, nav link. None of its four blog samples (blog h1, HIGHLIGHTS badge, topic tag pill, search input) carries a family value. The portable body's Font evidence row previously read "Both captured surfaces compute visible text as Saans"; corrected 2026-08-26 to state the homepage computation and to say plainly that no separate computed family is recorded for the blog. The Family bullet's justification was corrected in the same pass for the same reason.
4. **Line heights marked "live computed" in the claim ledger.** Of the five unitless line heights, only the body role's is backed by a raw sample: the sibling records `line-height: 24.8px` on body, which is the source's `1.55`. The sibling's h1, h2, nav, blog-h1, and tag samples record size, weight, and colour with **no** line-height. So `1.10`, `1.20`, `1.30`, and `1.40` are source-stated, not individually corroborated. The ledger rows below are left as the source's own `live-extract` assertion, and this boundary note is the qualification on them.

**Values one record carries and the other does not (4)**

5. **Radius `6px ×1`** appears in the sibling's radius frequency scan. The source's `rounded` scale is 4 / 8 / 12 / 32 / 360 plus the card-local 5px, and neither record explains the 6px. Not promoted; portable-body count 0.
6. **Topic Tag Pill border.** Source §4 and the portable record carry `Border: 1px solid #d9e2ec`. The sibling's tag-pill sample records background, colour, radius, padding, and font, and **no** border. Source-only, not corroborated. Value unchanged.
7. **Log in (Quiet) font.** Source §4 and the portable record carry `Font: 14px / 530 / Saans`. The sibling's "Log in" quiet-link sample records colour, radius, padding, and height, and **no** font. Source-only, not corroborated. Value unchanged.
8. **Body weight 400 and the secondary button's padding.** The sibling's body sample records family, colour, size, line height, and background, and no `font-weight`; its "Talk to an engineer" sample records no padding. The source states `400` and `0 12px` respectively. Source-only, not corroborated. Values unchanged.

What the sibling **does** corroborate, element by element: every hex in the palette; the primary CTA's full record; the secondary CTA's fill, text, radius, height, and font; the search input including its `#d9e2ec` border; the HIGHLIGHTS badge in full; the tag pill except its border; the feature card including `border-radius: 32px` and its `#d9e2ec` border; the elevated card's `5px` radius and its `rgba(0, 0, 0, 0.25) 0px 0px 35px 0px` shadow byte for byte; sizes and weights for hero, blog title, subhead, nav, body, button, and tag; and the four voice samples verbatim.

## Raw live-inspect record

Reproduced from the source's own sources comment. The sibling adopted above is the raw record that comment points at, and it has now been read; the aggregate below and the sibling's per-element samples agree everywhere they overlap, with the eight exceptions listed under the divergence section.

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
