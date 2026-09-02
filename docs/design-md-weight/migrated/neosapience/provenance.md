# Neosapience provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/neosapience/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | neosapience |
| name | Neosapience |
| display_name_kr | 네오사피엔스 |
| country | KR |
| category | ai |
| homepage | https://neosapience.com |
| primary_color | `#fe7e43` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=neosapience.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |

There is no `ds.name` / `ds.url` / `ds.type` field in the source; that absence is recorded here and is not filled (A1c).

Token note from source (verbatim): `Two-surface system. Corporate (neosapience.com): minimal flat Pretendard, deep-navy #09162d headings, orange accent #fe7e43, gray-900 #111827 body, no shadows. Product (typecast.ai): playful Plus Jakarta Sans display + Roboto UI, orange #f97316 pill CTAs, peach tints, large radii. primary = corporate brand orange #fe7e43.`

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.extracted | 2026-06-26 |
| surfaces inspected | 2026-06-26 |

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| corporate | corporate | https://neosapience.com | 2026-06-26 |
| corporate-ko | corporate KO mirror | https://company.typecast.ai/ko/ | 2026-06-26 |
| product | product | https://typecast.ai/ | 2026-06-26 |

## Sources

### Tier 1

- https://neosapience.com (corporate, EN)
- https://company.typecast.ai/ko/ (corporate, KO mirror)
- https://typecast.ai/ (product)

### Tier 2 (no usable record)

- getdesign.md/neosapience — "No designs found for 'neosapience'" (NOT LISTED)
- getdesign.md/typecast — "No designs found for 'typecast'" (NOT LISTED)
- styles.refero.design `?q=neosapience` and `?q=typecast` — no brand-specific style; query returns the default featured browse list only

## Claim ledger

Token-level claims (§1–9) are sourced from live inspect (2026-06-26) via playwright getComputedStyle, as the source HTML comment records.

| claim | surface |
|---|---|
| tokens.colors.primary `#fe7e43` | corporate |
| tokens.colors.product-cta `#f97316` | product |
| tokens.colors.amber `#f7b500` | product |
| tokens.colors.ink `#09162d` | corporate |
| tokens.colors.ink-product `#262626` | product |
| tokens.colors.body `#111827` | corporate |
| tokens.colors.nav `#1f2937` | corporate |
| tokens.colors.body-product `#404040` | product |
| tokens.colors.muted `#4b5563` | corporate |
| tokens.colors.muted-alt `#6b7280` | corporate |
| tokens.colors.canvas `#ffffff` | both |
| tokens.colors.surface `#f4f4f4` | corporate |
| tokens.colors.surface-alt `#f9fafb` | corporate |
| tokens.colors.peach `#ffe7d4` | product |
| tokens.colors.tab-active `#ffc98f` | product |
| tokens.colors.tab-border `#e5e5e5` | product |
| tokens.colors.ink-pure `#000000` | corporate |
| tokens.typography.family.corporate Pretendard | corporate |
| tokens.typography.family.product-display Plus Jakarta Sans | product |
| tokens.typography.family.product-ui Roboto | product |
| tokens.typography.family.product-fallback Spoqa Han Sans | product |
| tokens.typography.display-hero 66 / 600 / 1.06 | product |
| tokens.typography.section-product 48 / 700 / 1.2 | product |
| tokens.typography.heading 36 / 700 / 1.25 | corporate |
| tokens.typography.lead 18 / 500 / 1.55 | corporate |
| tokens.typography.nav 16 / 500 / 1.5 | corporate |
| tokens.typography.body 16 / 400 / 1.5 | both |
| tokens.typography.button 18 / 700 / 1.0 | product |
| tokens.typography.caption 14 / 400 / 1.5 | both |
| tokens.spacing.xs–section (4 / 8 / 12 / 16 / 20 / 24 / 30 / 40 / 48 / 64) | both |
| tokens.rounded.nav–full (6 / 8 / 12 / 16 / 24 / 30 / 9999) | split by surface as named |
| tokens.shadow.none | corporate |
| tokens.shadow.product-soft | product |
| tokens.components.cta-primary | product |
| tokens.components.cta-inline | product |
| tokens.components.nav-link | corporate |
| tokens.components.feature-tab | product |
| tokens.components.emotion-chip | product |
| tokens.components.usecase-card | product |
| tokens.components.corporate-card | corporate |
| tokens.components.research-item | corporate |

Voice samples (§10) are verbatim from the live surfaces (corporate section heading, product hero H1/H2, product CTA).

Brand narrative (§11): founding year and CEO name beyond the homepage are, in the source HTML comment, widely documented public knowledge, not directly quoted from a verified company statement in this turn. The dated research-paper list is observed live on neosapience.com.

## Live inspect notes (source HTML comment)

- https://neosapience.com (corporate, EN) — body Pretendard rgb(17,24,39) `#111827`; H1/section 36px/700 rgb(9,22,45) `#09162d`; nav links rgb(31,41,55) `#1f2937` 16px/500 radius 6px; research list rows border 1px solid `#000000` padding 16px h62; orange accent rgb(254,126,67) `#fe7e43`; surfaces `#f4f4f4` / `#f9fafb`; box-shadow none; corporate card bg `#f4f4f4` radius 12px.
- https://company.typecast.ai/ko/ (corporate, KO mirror) — identical system; title "네오사피엔스 - 자연스러운 감정이 담긴 음성 인공지능 기술과 가상인간를 통한 생성형 AI 콘텐츠 제작 플랫폼"; H1 "네오사피엔스 소개".
- https://typecast.ai/ (product) — hero H1 66px/600 Plus Jakarta Sans rgb(38,38,38) `#262626`; primary CTA "TRY FOR FREE" bg rgb(249,115,22) `#f97316` radius 9999px padding 10px 30px h60 18px/700 Roboto; emotion chips radius 9999px `#262626`; feature tabs border 2px `#ffc98f` active / `#e5e5e5` inactive radius 8px; use-case cards radius 30px white with soft shadow; tints `#ffe7d4`, amber `#f7b500`; body `#404040`.

## Sibling (`web/references/neosapience/.verification.md`)

The sibling exists. It is a separate canonical file, not the migration input. Values it carries that the visible source body does not already record are transcribed here and are not promoted into `DESIGN.md`.

Sibling-only (corroboration or extra inspect, not portable-body facts):

- Method: playwright getComputedStyle; `domcontentloaded` + 3.5–4.5s settle; Escape/cookie dismissal; modal-strip pass; full-DOM colour-frequency scan
- Corporate H1 sample "About Neosapience"
- Corporate H2 hero lead sample "Neosapience is an AI startup at the forefront…" with computed `padding: 32px 0px 40px` and color `rgb(9, 22, 45)` on that lead sample
- Corporate body computed `line-height: 24px` beside the source's unitless `1.5` (not a replacement)
- Corporate nav link computed height 40px (YAML `nav-link` has no height key)
- Research-row sample "Dec 6, 2023 DRAFT: Dense Retrieval…"
- KO nav labels "회사 소개" / "미션"
- Product `document.title`: "AI Voice Generator & Text-to-Speech | Voiceover Tool"
- Emotion-chip sibling spelling without the middot: "Happy  Paige" / "Sad Nia" / "Angry Riley" / "Whisper Chad"
- Product freq-scan `rgba(254,126,67,0.1)` (one hit); product radius freq `24px` ×50, `4px` ×21
- Logo live gate: HTTP 200, `image/png`, 657 bytes
- KR brand-owned source count note (getdesign.md / refero / Google favicon excluded)

Sibling corroboration of source-body values (already in `DESIGN.md`): Pretendard / Plus Jakarta Sans / Roboto / Spoqa Han Sans; `#fe7e43` / `#f97316` / `#09162d` / `#262626` / `#111827` / `#1f2937` / `#404040` / `#f4f4f4` / `#f9fafb` / `#ffe7d4` / `#f7b500` / `#ffc98f` / `#e5e5e5` / `#000000`; 36px/700 headings; 66px/600 hero; 48px/700 section; 18px/500 lead; 16px/500 nav; 16px/400 body; TRY FOR FREE 10px 30px h60; Try me 10px 20px h44; feature-tab padding 4px 20px 4px 16px h40; emotion-chip 0px 20px 0px 12px h40; use-case 20px 30px h64 r30; research row 1px solid `#000000` padding 16px h62; `box-shadow: none`; KO title and H1 "네오사피엔스 소개".

## Omission ledger

| Item | Disposition |
|---|---|
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted. Tool-facing recreate-the-control prompts and a restated color list. Values they name are already in Foundations / Typography / Components. No receiving slot and no delegation (A2, A3). Itemised below. |
| §13 personas | Source labels three fictional archetypes informed by publicly observable segments. Dropped at the field boundary: names, ages, cities, biographies, motivations, and affiliation classifications are not promoted and are not re-hosted in this file (D2, D2a). Audience in the portable body reads only source-named groups. |
| §15 unattributed curves | Curve *values* omitted from the portable body. Names and uses kept. `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` matches the legacy spec-template example. `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` and `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` are likewise unattributed (philosophy layer, not live inspect). Durations 120ms / 200ms / 320ms and signature-motion / reduced-motion rules are kept. B3 five-kind promotion gate stays in Foundations Motion. |

§9 deletion check (A3). Every value the construction prompts name was confirmed present in the portable body before the section was dropped. Corporate research hero 36px Pretendard 700 `#09162d` — Type roles / Application rules. Lead 18px Pretendard 500 — Type roles. Nav 16px Pretendard 500 `#1f2937`, orange `#fe7e43` on active — Nav Link / Semantic color. Typecast hero 66px Plus Jakarta Sans 600 `#262626` — Type roles. Primary CTA `#f97316`, white text, 9999px, 10px 30px, 18px Roboto 700, `TRY FOR FREE` — Typecast Primary CTA. Emotion-chip row white pills `#262626`, 9999px, 0px 20px 0px 12px, 40px, 16px Roboto, `Happy · Paige` / `Sad · Nia` / `Angry · Riley` — Emotion Preset Chip. Feature segmented control `#404040`, 8px, 2px `#ffc98f` / `#e5e5e5`, 4px 20px 4px 16px, `Text-to-Speech` / `Voice Cloning` — Feature Tab (Smart Emotion from §4, not only from §9). Corporate content card `#f4f4f4`, 12px, no shadow, `#111827` — Corporate Content Card. Iteration-guide surface split, orange reservation, no corporate shadows, pills vs 6–12px chrome, navy/near-black headings, Pretendard body, peach/amber on product — Application rules / Avoid / Foundations.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 `:9` | Two inspected URLs as this contract's token surfaces; KO mirror as the same corporate system in Korean rather than as a third token surface; values stay attached; catalog `primary_color` `#fe7e43` kept on the same hex as `tokens.colors.primary` rather than as a second orange |
| Experience Scope ¶2 `:11` | Two deliberately different surfaces; the split is the whole story; calm research-grade white room; academic and trustworthy; well-typeset paper; opposite mood; whispers versus shouts; shared warm-orange spine and hangul-first typographic discipline; oranges as siblings that both signal "the action / the brand"; human rather than clinical; serious AI research house and approachable creator tool without either voice undermining the other |
| Experience Scope ¶3 `:13` | 2017 founding, 김태수 (Taesu Kim, CEO), 2018-onward paper list, Typecast, Typecast SSFM, and the refuses/embraces closing classified as narrative context that does not by itself supply interface tokens; source "not directly quoted from a verified company statement in this turn" bound on founding details beyond the homepage |
| Primary tasks `:19` | Selecting the four surface-or-label outcomes as primary tasks — corporate mission-and-publication reading, Typecast hero/demo invitation, Typecast feature-and-emotion switching, corporate top-nav destinations; not from the Personas section |
| Audience `:29` | Dropping fictional archetypes rather than promoting them; carrying no name, age, city, motivation, or affiliation classification; reading only source-named groups as audience |
| Distinctive traits `:33` | Classifying the Key Characteristics list as that restatement; groupings and readings inside the list |
| Principles `:45` | Five numbered items as derived editorial implementation inference; toss-form close; source HTML comment's "two faces, one spine" / "warm, not clinical" editorial flag |
| Application rules `:55` | Eight Do rules and the reasons attached to them |
| Avoid `:68` | Eight Don't prohibitions and the reasons inside them |
| Semantic color `:85` | Role names from token-set keys; pairing each hex to its token-set path; primary off product-cta; ink off ink-product off ink-pure; body off body-product; nav off those inks; muted off muted-alt; canvas off surface off surface-alt; peach off amber; tab-active off tab-border; two oranges as siblings only as the source's own wording rather than as a third mixed orange; canvas role off Typecast CTA text and off emotion-chip / corporate-nav background as component-field attachments rather than extra colors keys |
| Spacing `:119` | Unitless steps kept on their own keys rather than rewritten as a grid; `16`/`24`/`30`/`40`/`48`/`64` unmerged from rounded, type, and component height; corporate-hero 32–40px vertical-padding notable and product-CTA 10px / 20–30px padding notable kept off the `tokens.spacing` key list |
| Shape `:135` | Seven rounded keys kept on their own path; `tokens.rounded.full: 9999` unmerged from spacing or height |
| Elevation `:147` | Two-surface elevation system — flat corporate, one soft product shadow; tappable-and-friendly / never-heavy-stacked-card clauses as purpose rather than as extra tokens |
| Motion `:151` | §15 as philosophy-layer rather than live-inspect; duration table, easing names, two-surface motion rules, and reduced-motion as source-stated rather than computed CSS; omitted `ease-exit` matching the legacy spec-template example; omitted `ease-enter` / `ease-standard` as unattributed |
| Motion `:167` | Functional-and-quiet-on-corporate / slightly-more-playful-on-product; chip-and-tab scale/opacity; fade-in from below; near-instant corporate transitions; no-bounce-or-heavy-spring; reduced-motion-fully-functional |
| Family `:184` | "one font per job, per surface", "heavy display, light body", "hangul-first sizing", and "headings are never pure black" as implementation rules rather than as a separately published type specimen; trailing do-not-present-fallback-or-system-face / do-not-mix-display-into-corporate as those same implementation rules |
| Type roles `:195` | Pairing each YAML role to its token-set path; YAML `use` verbatim beside longer §3 Notes; unitless ratios kept; body size 16 off spacing base 16 and off nav size 16 as a second key; section-product 48 off spacing s48; caption YAML 14 beside §3 14–16px; Button 18px off Corporate Lead 18px; inline demo CTA 16px / 700 Roboto as a component-local writing off the Button type-role |
| Assets `:210` | Google s2 favicon URL as a catalog identity pointer rather than as a first-party mark file |
| Capture record `:218` | Interactive-kind and applicability verdicts and the reason for either; corporate-card and research-item kind left unresolved (C4); feature-tab / nav-link / emotion-chip / use-case card loading/error/success closed on role grounds; Typecast Primary CTA loading/error/success closed because the public hero CTA hands off; Typecast Inline CTA loading and error kept applicable because that control commits voice synthesis; §14 table as philosophy-layer product/flow states rather than computed component treatments; each control's recorded height, padding, radius, and font kept on that control's own rows rather than merged with spacing, type, or rounded keys; generic `focus` in motion-fast use is not `focus-visible` treatment; absence of a capture is not `not-applicable`; Core §4.4 by control meaning; not a complete state-coverage claim |
| Layout Whitespace `:418` | Corporate calm / product energy / flat corporate segmentation |
| Layout Image behavior `:452` | "unmistakable target", "comfortable tap minimum", and "no shadow at any size" as purpose clauses on recorded heights and radii |
| Content & Locales `:457` | Two registers as measured / research-forward / mission-driven versus warm / inviting / creator-friendly; shared thread as confidence without hype |
| Content & Locales `:477` | Forbidden-register list as a content constraint drawn from the source's Voice & Tone section; no further locale behavior added beyond the recorded voice samples, the KO mirror title, and hangul-first body size |
| Named gaps `:513` | List as source-unnamed curve values and uncomputed interaction treatments, not as coverage of surfaces the source never named |

## Proof notes

- components_harvested: true
- tokens.source: live-extract
- Conflicts unresolved: none
- Uncaptured hover / focus-visible / pressed treatments are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- Official founding details beyond the homepage are narrative context with the source's own "not directly quoted" bound; they are not token sources
- `tokens.source: live-extract` is ledger metadata
