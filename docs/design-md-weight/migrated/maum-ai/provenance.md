# maum.ai provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the maum.ai migration. Canonical source remains `web/references/maum-ai/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | maum-ai |
| name | maum.ai (ex-MindsLab) |
| display_name_kr | 마음AI (구 마인즈랩) |
| country | KR |
| category | ai |
| homepage | https://maum.ai/ |
| primary_color | `#4262ff` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=maum.ai&sz=128` |
| omd format (source) | 0.1 |
| added | 2026-07-02 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

The logo slug is a third-party favicon-proxy URL, not a maum.ai-published asset file, so it is recorded here only and is not presented as a brand asset in the portable body.

Token note from source, verbatim: "primary = live hero CTA blue (#4262ff, 시작하기) with a darker #3652d8 border; secondary action system is a charcoal #343434 full-pill (Contact/Chatbot). Text is near-black #111111 on white; #ff4d4d is the single warm accent. Flat, near-shadowless system."

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| surfaces inspected | 2026-07-02 |

Conflicts unresolved: none (source footer, verbatim: "**Conflicts unresolved:** none").

Verification method recorded by the source footer: `omd:add-reference` CREATE — live inspect.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing homepage | https://maum.ai/ | 2026-07-02 |
| brain-blog | BRAIN Team research blog | https://maum-ai.github.io/ | 2026-07-02 |

## Sources

### Tier 1

- https://maum.ai/ — homepage; live computed style; source of all token claims
- https://maum-ai.github.io/ — official maum.ai BRAIN Team research blog; brand-owned; second surface
- https://github.com/maum-ai — official GitHub organization; brand-owned

### Tier 2 (no usable record)

- getdesign.md/maum-ai — no real entry (generic SPA shell; returns 200 + identical shell for any slug)
- styles.refero.design/?q=maum — no maum.ai match (only unrelated fuzzy "ma*" results)

## Canonical proof — sibling verification file

**Adopted.** Checked with `ls -a` and `find web/references/maum-ai -name '.verification.md'`.

| Field | Value |
|---|---|
| sibling | `web/references/maum-ai/.verification.md` |
| bytes | 5741 |
| lines | 63 |
| SHA-256 | `8c16ab1f4f9dd538fdc86487aabfe59552645d0c46945126f77ec525ee30fb3c` |
| heading | `# maum.ai (마음AI, 구 마인즈랩) — Verification Notes (2026-07-02)` |
| grade | `## Proof — Tier 1 live inspect` |
| inspected | 2026-07-02 |

**Why it is adopted.** The date, the method family (`playwright getComputedStyle`), and the three brand-owned URLs all agree with what the source `DESIGN.md` footer and trailing comment state in short form, so the sibling corroborates the source rather than widening the portable contract. The source trailing comment is the short form of the same live inspect.

**Method, quoted from the sibling:** "playwright getComputedStyle (live DOM) — global playwright (chromium, headless), goto https://maum.ai/ domcontentloaded + scroll pass, cookie/modal dismissal, then `getComputedStyle` on body, h1/h2/h3, buttons, links, inputs/textarea, card-like containers, plus a full-DOM background/text color + radius + font frequency scan. Second surface https://maum-ai.github.io/ inspected the same way."

**Sources, from the sibling:**

- https://maum.ai/ (homepage, live computed style — Tier 1 source for all token claims)
- https://maum-ai.github.io/ (maum.ai BRAIN Team official research blog — brand-owned)
- https://github.com/maum-ai (official GitHub organization — brand-owned)

### Korean regional requirement, from the sibling

The sibling names the same three brand-owned URLs as satisfying the KR ≥2 requirement, and adds that getdesign / refero / Google favicon do NOT count. The catalog `logo` slug is that Google favicon proxy. The Identity note above already declined to present it as a brand asset in the portable body; the ground for that decision is now the sibling's own exclusion rather than an inference.

### Logo decision, from the sibling

Quoted: Candidate 1 — Google favicon proxy `https://www.google.com/s2/favicons?domain=maum.ai&sz=128`: `curl -sL` returned **1027 bytes**, `content-type: image/png` (well above the 450B generic-globe floor). **Selected.** `logo.type: favicon` with the full proxy URL as `slug`. Not promoted as a portable brand asset.

### Tier 2 record stays out of the portable body

The sibling's Tier 2 cross-check reports that `getdesign.md/maum-ai` returns HTTP 200 but no real entry — an identical ~14.7–14.8KB generic SPA shell for `maum-ai`, `maum`, `maumai`, and a random non-existent slug (`zzznotabrandxyz`, 14837B), with no "maum" / "마음" / `#4262ff` string in the page. `styles.refero.design/?q=maum` returned only unrelated fuzzy "ma*" style cards (Maëlan Le Meur, MAKR, MANNA, Minimal Collective, etc.). Both findings are statements about this catalog's coverage rather than facts about the maum.ai brand. They stay here. The sibling's conflict matrix resolves five fields to Tier 1 with "No conflicts — Tier 2 is silent, Tier 1 is the sole authority. Nothing unresolved."

## Sibling-only values, recorded here and not promoted

The sibling measures the live DOM; the portable contract reconstructs the source `DESIGN.md`. A value that exists only in the sibling is a ledger entry and never a portable token.

| Sibling-only value | Treatment |
|---|---|
| Charcoal round button `Chatbot Inquiry` height 90px (sibling raw sample) vs source height 65px for the combined charcoal-round component | Not promoted. Portable body keeps the source's 65px. |
| Header buttons `Contact` / `Guide` / `Log in`: color `#111111`, 16px / 500, height 56px | Not promoted. The source component inventory does not declare these controls. |
| Display wordmark `MAIED` `font-size: 115.2px` / `line-height: 116.64px` | Not promoted as a replacement. Portable body keeps the source's 115px (7.20rem) / 1.01. |
| BRAIN Team blog H1 `font-size: 48px` `font-weight: 700` `color: rgb(255, 255, 255)`; body `color: rgb(28, 30, 33)`; title `Blog \| maum.ai BRAIN Team` | Not promoted as type tokens. The portable body keeps the source's verbatim H1 string `maum.ai BRAIN Team` as voice copy. |
| Radius frequency scan: `20px` ×17, `6px` ×12, `4px` ×6, `9999px` ×4, `10px` ×4, `8px` ×3 | Counts not promoted. `10px` is absent from the source radius scale and is not added to Foundations. |
| Font frequency scan: `Pretendard` ×592, `Roboto` ×42, `Jamsil, sans-serif` ×5, `Orbitron, sans-serif` ×1 | Counts not promoted. `Roboto` is not a source family and is not presented as a brand face. |
| body `background: rgba(0, 0, 0, 0)` | Not promoted. |
| Background frequency scan: `rgb(255,255,255)` ×16, `rgb(242,243,248)` ×13, `rgb(66,98,255)` ×2, `rgb(52,52,52)` ×2, `rgb(242,245,249)` ×2 | Counts not promoted. The hexes themselves are already source tokens. |
| Text frequency scan: `rgb(17,17,17)` ×393, `rgb(89,89,89)` ×63, `rgb(0,0,0)` ×47, `rgb(91,99,109)` ×46, `rgb(255,77,77)` ×41, `rgb(37,99,235)` ×6, `rgb(142,142,142)` | Counts not promoted. The source trailing comment already records the same `#111111` ×393 ladder; portable body uses the hexes, not the counts. |
| Method detail: `domcontentloaded`, scroll pass, cookie/modal dismissal, chromium headless, frequency scan | Not promoted. |
| `github.com/maum-ai` HEAD 200, org avatar image/png 200 | Not promoted as a token. |
| Third-party Tier 2 page strings and the random slug `zzznotabrandxyz` | Not promoted. |

Sibling blog `document.title`, written unescaped so the bytes are not table-escaped: Blog | maum.ai BRAIN Team

## Where the sibling and the source diverge

None of these is repaired by choosing a side; the values in the portable body follow the source `DESIGN.md`.

1. **Charcoal round height.** Sibling: `Chatbot Inquiry` height 90px and `Contact Us` height 65px as two samples. Source YAML and §4: one charcoal-round component at height 65px. Portable body keeps 65px.
2. **MAIED size / line-height.** Sibling: 115.2px / 116.64px. Source table: 115px (7.20rem) / 1.01. Portable body keeps both source writings (px and rem) rather than selecting the sibling's computed pair.
3. **Header buttons.** Sibling records `Contact` / `Guide` / `Log in` at 16px / 500 / 56px in `#111111`. Source §4 Navigation records top nav items `Physical AI` / `Defense` / `MAIED` / `Company` at 16px / 700 in `#8e8e8e` with active `#111111`. The header-button set is sibling-only and is not added as a component.
4. **Radius `10px` ×4 and `4px` ×6.** Sibling frequency scan. Source rounded scale is 6 / 8 / 20 / 9999. `4px` exists in the source as a spacing step (`xs`), not as a radius. Neither extra radius is promoted.
5. **`Roboto` ×42.** Sibling font scan. Source families are Pretendard / Jamsil / Orbitron only. Not promoted.

What the sibling **does** corroborate, element by element: every hex in the palette; the primary CTA's full record (`시작하기`, `#4262ff`, `#3652d8` 1px border, 8px radius, `0px 32px`, 50px, Pretendard 16px / 700, white text); `Contact Us` charcoal fill, 9999px, `20px 32px`, 20px / 600; contact field `#f2f3f8` / `#dee4eb` / 6px / 64px / `#111111` / 16px; product card 20px / `1px solid #ffffff` / `40px 0px` / `box-shadow: none`; nav `#8e8e8e` Pretendard 16px / 700; section heading Jamsil 36px / 700 / 45px; body Pretendard `#111111` 16px / 20px line-height; `box-shadow: none` across nav/hero/headings/buttons/cards; `document.title` `마음AI`; blog H1 `maum.ai BRAIN Team`.

## Raw live-inspect record

Reproduced from the source's own trailing sources comment. The sibling adopted above is the raw record that comment compresses.

- Primary CTA `시작하기` — bg rgb(66,98,255) `#4262ff` / border 1px solid rgb(54,82,216) `#3652d8` / radius 8px / padding 0px 32px / height 50px / Pretendard 16px weight 700 / white text
- Charcoal round buttons `Chatbot Inquiry`/`Contact Us` — bg rgb(52,52,52) `#343434` / radius 9999px / padding 20px 32px / 20px weight 600 / white text
- Contact inputs/textarea — bg rgb(242,243,248) `#f2f3f8` / border rgb(222,228,235) `#dee4eb` / radius 6px / height 64px / text rgb(17,17,17) `#111111` / 16px
- Product cards — radius 20px / border 1px solid `#ffffff` / padding 40px 0px / box-shadow none
- Nav links — color rgb(142,142,142) `#8e8e8e` / Pretendard 16px weight 700; header buttons ink rgb(17,17,17) `#111111`
- Section heading `MAUM.AI Foundation Model` — Jamsil 36px weight 700 lh 45px; `MAIED` — Orbitron 115px weight 700 white
- Body — Pretendard, color rgb(17,17,17) `#111111`, 16px, lh 20px
- fg frequency: `#111111` ×393, `#595959` ×63, `#000000` ×47, `#5b636d` ×46, `#ff4d4d` ×41, `#8e8e8e`, `#2563eb` ×6
- box-shadow: none across nav/hero/headings/buttons/cards (shadowless system confirmed)
- document.title: `마음AI`
- Second surface — https://maum-ai.github.io/ (official maum.ai BRAIN Team research blog, Docusaurus): H1 `maum.ai BRAIN Team`

## Claim ledger

| Claim | Surface | Evidence class |
|---|---|---|
| tokens.colors.primary `#4262ff` | home | live computed |
| tokens.colors.primary-border `#3652d8` | home | live computed |
| tokens.colors.dark `#343434` | home | live computed |
| tokens.colors.ink `#111111` | home | live computed |
| tokens.colors.ink-pure `#000000` | home | live computed |
| tokens.colors.body `#5b636d` | home | live computed |
| tokens.colors.muted `#595959` | home | live computed |
| tokens.colors.nav-muted `#8e8e8e` | home | live computed |
| tokens.colors.accent-red `#ff4d4d` | home | live computed |
| tokens.colors.link-blue `#2563eb` | home | live computed |
| tokens.colors.canvas `#ffffff` | home | live computed |
| tokens.colors.surface `#f2f3f8` | home | live computed |
| tokens.colors.surface-alt `#f2f5f9` | home | live computed |
| tokens.colors.hairline `#dee4eb` | home | live computed |
| tokens.colors.on-primary `#ffffff` | home | live computed |
| tokens.typography.family display Jamsil / body Pretendard / techno Orbitron | home | live computed |
| tokens.typography.display-techno 115 / 700 / 1.01 | home | live computed (source 115px / 7.20rem; sibling 115.2px) |
| tokens.typography.section 36 / 700 / 1.25 | home | live computed (lh 45px) |
| tokens.typography.heading-sm 18 / 700 / 1.25 | home | live computed |
| tokens.typography.button-lg 20 / 600 / 1.40 | home | live computed |
| tokens.typography.button 16 / 700 / 1.25 | home | live computed |
| tokens.typography.nav 16 / 700 / 1.19 | home | live computed |
| tokens.typography.body 16 / 500 / 1.25 | home | live computed (lh 20px) |
| tokens.spacing xs 4 / sm 8 / md 16 / base 20 / lg 32 / xl 40 / xxl 64 | home | live computed |
| tokens.rounded sm 6 / md 8 / lg 20 / full 9999 | home | live computed |
| tokens.shadow.none `none` | home | live computed |
| tokens.components.button-primary.* (`type: button`) | home | live computed |
| tokens.components.button-dark-round.* (`type: button`) | home | live computed |
| tokens.components.input-text.* (`type: input`) | home | live computed |
| tokens.components.card-outline.* (`type: card`) | home | live computed |
| tokens.components.card-surface.* (`type: card`) | home | live computed |
| tokens.components.nav-link.* (`type: tab`, active ink `#111111`) | home | live computed |
| tokens.components.badge-accent.* (`type: badge`) | home | live computed |
| Voice samples (3, §10) | home, brain-blog | verbatim live copy |
| Brand positioning `Physical AI 플랫폼` | home | verbatim live copy |
| Product lineup `JINDO BOT`, `AIden`, `MAIED`, `Defense` | home | read from the homepage product lineup |

Values recorded in §9 example prompts but absent from the source frontmatter component records: Product Showcase Card title in Jamsil weight 700 `#111111` and body 16px Pretendard weight 500 `#5b636d`. Moved into the portable Product Showcase Card rather than dropped.

Same-hex `#ffffff` keeps four source jobs unmerged: `tokens.colors.canvas`, `tokens.colors.on-primary`, product-card hairline `1px solid #ffffff`, and top-nav background. The portable body records each job in its own row rather than collapsing them.

## Evidence-class boundaries carried into the body

- Founding year 2014, founder 유태준 (Taejun Yoo), and the MindsLab→maum.ai rebrand are described by the source itself as widely documented public facts, not a directly quoted maum.ai statement.
- The source states that interpretive claims — "engineered, not decorated", "frontier signalled through type" — are editorial readings connecting the observed design to the positioning, not maum.ai statements.
- §5 layout philosophy, §6 shadow philosophy, §7 do/don't rules, §8 responsive breakpoints, §12 principles, §14 states, and §15 motion character carry no separate computed attribution in the source; they are treated as derived editorial inference and qualified adjacently in the body.
- Token-level claims (§1–9) are sourced from the live inspection, as the source's trailing comment states.

## Derived editorial inventory

Portable `DESIGN.md` carries 25 complete B2a qualifications. This table is 25 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope | Bound that neither captured surface stands in for an uncaptured one; calm engineered confidence; airy breathable bands; the eye trained to read indigo as the action; de-facto Korean product font; heavier editorial Korean voice; deliberate sci-fi flourish; two-track button geometry; looks built, not decorated; build-in-the-open research-forward posture; refuses/embraces pairing |
| 2 | Primary tasks | Selecting four recorded surface outcomes as primary tasks; the source declares no task list |
| 3 | Audience | Biography-drop (no name, age, city, motivation, or affiliation classification); source-named groups only: enterprise AI buyers, robotics/defense procurement, ML engineers evaluating the foundation model |
| 4 | Distinctive traits | Characterizing adjectives on the eight recorded bullets ("two-track", "techno wordmark", "flat depth") |
| 5 | Principles | The five numbered items and their UI implications |
| 6 | Application rules | The eight Do rules and the reasons attached |
| 7 | Avoid | The seven Don't rules and the reasons inside them |
| 8 | Foundations Semantic color | Role names and wider use descriptions around live-computed hexes |
| 9 | Foundations Spacing | Named steps read as a ~4px base with a dominant 8/16/20/32 rhythm |
| 10 | Foundations Shape | 20px called the workhorse card radius |
| 11 | Foundations Elevation | Near-shadowless system; depth through tint and hairline; color instead of elevation |
| 12 | Foundations Motion | Duration roles; easing-use assignments; reduced-motion rule; motion character |
| 13 | Typography Font evidence | Sorting the evidence-class table; resolution cells (no published type spec, no distributed file, no declared-only family, no license, no outside-capture type value) |
| 14 | Typography Family | Pretendard as document default; Jamsil as heavier Korean face; Orbitron as geometric sci-fi face; three-job assignment |
| 15 | Typography Type roles | Four hierarchy readings (calm functional / three jobs / hangul-first / weight not size) |
| 16 | Assets | Imagery as first-party page content, not a published illustration specification; third-party favicon proxy declined as a brand file |
| 17 | Components Capture record | Applicability-by-meaning note; omit-kind for three non-interactive records; every kind and applicability verdict and its reason |
| 18 | State treatments | Nine-row state contract as composed, uncomputed treatments |
| 19 | Layout Whitespace | Engineered breathing room; flat segmentation; two-track button rhythm; ~4px base / dominant rhythm as a reading of the recorded scale; generous breathing room for 40px vertical padding |
| 20 | Layout Responsive | Breakpoint table and collapsing rules; inspections taken at a desktop viewport |
| 21 | Layout Touch targets | Comfortable / unmistakable / easy as readings of recorded heights |
| 22 | Layout Image behavior | No-shadow imagery as consistent with the flat system; 20px radius and translucent white outline across breakpoints |
| 23 | Content Voice samples | Parenthetical captions (positioning, frontier-model framing, engineering identity) on three verbatim live strings |
| 24 | Content Voice and tone | Precise / confident / frontier-facing register, including the tone table |
| 25 | Content Forbidden register | Consumer-app cuteness, exclamation-heavy hype, revolutionary/game-changing superlatives, unexplained jargon |

## Omission ledger

| Omitted | Reason |
|---|---|
| §13 personas — three named fictional archetypes with ages and cities, introduced by the source as fictional archetypes informed by publicly observable audience groups | Fictional biography. Not promoted, and deliberately not re-recorded here, not even as names or cities. The source's own group-level segments (enterprise AI buyers, robotics/defense procurement, ML engineers evaluating the foundation model) survive in the body's Audience. |
| `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | The three exact curves carry no attribution in the source, whose motion section is part of an unsourced philosophy layer; `ease-exit` is the same value carried by the legacy authoring template. Token names, durations, and uses survive in the body; the curves are dropped rather than promoted. |
| §9 tool-facing prompt wrappers, iteration checklist, and the quick color reference restatement | Tool-specific prompt packaging with no receiving slot. The one value pair that existed only there — Product Showcase Card title in Jamsil weight 700 `#111111` and body 16px Pretendard weight 500 `#5b636d` — was moved into Components instead of dropped. |

## Proof notes

- Interaction expansions: 1 (`nav-link.active` text `#111111`). Every other component record is a default-state observation.
- Hover, button-press, and focus treatments are named in the source's motion prose without values; they are omitted as visual treatments and are not `not-applicable` grounds. State coverage is not claimed complete.
- The source never records `focus-visible` as a captured state; no `focus-visible` treatment value appears anywhere in the outputs.
- Three components (Product Showcase Card, Tinted Surface Card, Accent Highlight) carry no interactive-kind evidence, so kind and the state-applicability map are omitted for them.
- Loading, error, and success are closed as `not-applicable` on Top Navigation Item for a role reason — a navigation item commits no operation of its own — never for absence of observation.
- **Proof grade.** The Tier 1 proof for this reference is the adopted sibling `web/references/maum-ai/.verification.md`: `## Proof — Tier 1 live inspect`, dated 2026-07-02. See "Canonical proof" above.
- The sibling records no interaction state anywhere — no hover, no focus, no pressed sample — so it gives no ground to revisit any state applicability verdict, in either direction.
- Type-role Notes keep the YAML `use` writing beside the §3 Notes writing. Component Font fields keep the YAML `font` writing beside the §4 Font writing. Charcoal Use keeps the YAML `use` writing beside the §4 Use writing. A slash-inserted third font form is not used.
