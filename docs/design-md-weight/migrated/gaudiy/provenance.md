# Gaudiy provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and evidence detail for the T2 migration. Canonical source remains `web/references/gaudiy/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | gaudiy |
| name | Gaudiy |
| country | JP |
| category | consumer-tech |
| homepage | https://gaudiy.com/ |
| primary_color | `#050505` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=gaudiy.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

The logo record is a third-party favicon-service URL, not a Gaudiy-hosted asset file, so it is indexed here only and the portable Assets section says so rather than promoting it as a brand asset. Two destinations (E2a): the URL is here; the statement that it is a service pointer rather than a first-party file is in the portable `Typography & Assets` → `Assets`.

`tokens.note`, verbatim from the source frontmatter:

> Deliberately monochrome 'glitch'/editorial identity. primary = border/CTA ink black (#050505 on recruit, #000000 on corporate); body text never pure black — settles on #333333. No saturated accent hue anywhere; emphasis comes from black-on-white inversion + sharp 0px corners + heavy 1–2px black borders. Surfaces are white #ffffff and grey #eeeeee.

Two destinations (E2a): the note is preserved verbatim here, and its substantive content — the two-surface ink split, the charcoal body rule, the accent-hue constraint, the inversion/0px/border emphasis mechanic, and the two surface colors — is carried as values and rules in the portable `Foundations` → `Semantic color` and `Experience` → `Scope`.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-17 |
| added | 2026-06-17 |
| tokens.extracted | 2026-06-17 |
| surfaces inspected | 2026-06-17 |
| sibling verification notes | 2026-06-17 |

Source footer, verbatim: **Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces) · **Conflicts unresolved:** none.

The footer's conflict line in full: "none. (Two-surface variance noted, not a conflict: corporate uses 1px `#000000` borders / `#777777` muted grey; recruit uses heavier 2px `#050505` borders / `#555555` muted grey. Both retained as separate variants in §4.)"

## Sibling verification file (E2)

`web/references/gaudiy/.verification.md` exists (confirmed by path, not by glob — it is a dotfile). It was read in full and used as an evidence grade only. Sibling-only values stay in this ledger; none of them is a portable-body fact (B1). The wave27 revision removed the earlier portable Breakpoints clause that had treated the sibling band width as a body measurement.

Method, verbatim from the sibling: playwright getComputedStyle (live DOM) — global playwright (chromium, headless, Chrome UA, ja-JP locale), goto each surface with `waitUntil: domcontentloaded` + 4.5s settle, cookie/modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, header/nav, buttons, links, plus a full-DOM background/text/border/font frequency scan.

Sibling-only values deliberately kept out of the portable document, so that no value in the portable body originates outside the legacy source:

| Sibling value | Why it stays here |
|---|---|
| recruit outline CTA "カジュアル面談に申し込む" height 80px | The legacy component record states 64px, measured on "コーポレートサイトへ". Both heights are real; only the legacy-declared one is promoted. |
| news/press card height 100px | Sibling-only measurement; the legacy record carries the border, radius, and padding but no height. |
| solid black inline CTA width 136px / height 30px | Sibling-only measurement. |
| grey section band measured 1440×4474px | Sibling-only. The sample is here. The portable body carries the source Desktop range `1024-1440px` (Breakpoints table) and the source height `~4474px` (Grid & Container). This sibling band-width measurement stays in this ledger. |
| favicon 128×128 PNG, 995 bytes, content-type image/png, 450B generic-globe threshold | Logo-decision evidence, below. |
| body (gaudiy.com) `color: rgb(0, 0, 0)`, `font-size: 16px` | The document-level body color differs from the dominant text color the legacy promotes (`#333333`); both are recorded here and only the legacy's promoted role is in the portable body. |

## Evidence class

The source's closing HTML comment separates its own layers, verbatim in substance:

- Token-level claims (its sections 1–9) are sourced from the two live inspections below.
- Voice samples (its section 10) are verbatim from the live surfaces — corporate hero, vision subhead, recruit title.
- Brand narrative (its section 11): founding year 2018, Tokyo, CEO 石川裕也 (Yuya Ishikawa), product Gaudiy Fanlink, a fan-community platform that lets IP and entertainment brands run digital fan experiences — fan tokens, digital collectibles, community engagement — on top of blockchain rails. The Sony Group + Bandai Namco strategic partnership and the 松竹 / 東映アニメーション / 東宝 funding are stated on the corporate hero's live news cards (verified live 2026-06-17). The founding year and CEO are, in the source's words, widely documented public facts about the company, not directly quoted from a verified Gaudiy statement in that turn.
- Personas (its section 13) are fictional archetypes; names are illustrative and do not refer to real people.
- Interpretive claims — the source names "monochrome as conviction" and "editorial-brutalist as a rejection of glossy crypto branding" — are editorial readings connecting the observed design to Gaudiy's positioning, not sourced Gaudiy statements.

The motion section (its section 15) falls inside the philosophy layer (sections 10–15) and outside the live-inspect list. The sibling's raw samples contain no transition, animation, duration, or easing record.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| corporate | corporate site | https://gaudiy.com/ | 2026-06-17 |
| recruit | recruit special site | https://special.gaudiy.com/pre-series-c/recruit | 2026-06-17 |

The recruit surface was reached via a `recruit.gaudiy.com` → 200 redirect.

## Sources

### Tier 1 (from the legacy footer, verbatim scope notes)

- https://gaudiy.com/ — "corporate, live computed style"
- https://special.gaudiy.com/pre-series-c/recruit — "recruit special site, live computed style"

### Tier 2 (no usable record)

- getdesign.md/gaudiy — no Gaudiy entry ("No designs found for 'gaudiy'")
- styles.refero.design/?q=gaudiy — no Gaudiy results

### Excluded third-party source

The "Gaudi - Design System" Figma community file that surfaced in search is a generically-named third-party file ("Gaudi", not Gaudiy the company) and was NOT used as a source. The sibling records this exclusion explicitly; all token claims are grounded in the two live inspections above.

## Raw samples (from the sibling)

| Target | Record |
|---|---|
| body (gaudiy.com) | `color: rgb(0, 0, 0)`; `background-color: rgb(255, 255, 255)`; `font-size: 16px`; default font cascade resolves to `sans-serif` for body copy |
| hero h2 "ファンと共に、" | `font-family: "Noto Sans JP"`; `font-size: 64px`; `font-weight: 700`; `line-height: 89.6px`; `letter-spacing: -3.2px`; `color: rgb(51, 51, 51)` (#333333) |
| hero h2 "時代を進める。" | `font-size: 64px`; `font-weight: 700`; `line-height: 89.6px`; `letter-spacing: -3.2px`; `color: rgb(51, 51, 51)` (#333333) |
| section h2 "ファン国家の創造" | `font-size: 28px`; `font-weight: 700`; `line-height: 39.2px`; `letter-spacing: 1.6px` (positive); `color: rgb(51, 51, 51)` (#333333); Noto Sans JP |
| section h2 "たぶんチャンス。" | `font-size: 28px`; `font-weight: 700`; `letter-spacing: 1.6px`; Noto Sans JP |
| news/press card "Gaudiy Groupが松竹、東映アニメーション、東宝より追加調達…" | `border: 1px solid rgb(0, 0, 0)` (#000000); `border-radius: 0px`; `padding: 12px 16px 10px`; `color: rgb(51, 51, 51)`; height 100px |
| solid black inline CTA "くわしく見る" | `background-color: rgb(0, 0, 0)` (#000000); `color: rgb(255, 255, 255)`; `border-radius: 0px`; `padding: 9px`; width 136px / height 30px |
| round close button | `background-color: rgb(0, 0, 0)`; `border-radius: 50%`; 32×32px (the single round shape) |
| grey section band (gaudiy.com) | `background-color: rgb(238, 238, 238)` (#eeeeee); `border-radius: 0px`; 1440×4474px full-width band |
| recruit outline CTA "カジュアル面談に申し込む" | `background-color: rgb(255, 255, 255)`; `color: rgb(51, 51, 51)`; `border: 2px solid rgb(5, 5, 5)` (#050505); `border-radius: 0px`; `padding: 0px 16px`; height 80px |
| recruit outline CTA "コーポレートサイトへ" | `border: 2px solid rgb(5, 5, 5)` (#050505); `border-radius: 0px`; height 64px |
| recruit job-role card "プロダクトデザイナー" | white bg; `border: 2px solid rgb(5, 5, 5)` (#050505); `border-radius: 0px`; `padding: 8px 16px 18px`; height 160px (also デザインディレクター, PdM, データサイエンティスト, 法務, 労務, Corporate IT) |
| corporate background-color frequency | `rgb(255,255,255)` (#ffffff), `rgb(0,0,0)` (#000000) ×4, `rgb(238,238,238)` (#eeeeee) ×4 — no saturated bg colors found (accent scan returned empty) |
| corporate text-color frequency | `rgb(51,51,51)` (#333333) ×223, `rgb(0,0,0)` (#000000) ×64, `rgb(119,119,119)` (#777777) ×7, `rgb(255,255,255)` (#ffffff) ×7, `rgb(101,101,101)` (#656565) ×3 |
| recruit text-color frequency | `rgb(51,51,51)` (#333333) ×285, `rgb(0,0,0)` (#000000) ×53, `rgb(255,255,255)` (#ffffff) ×25, `rgb(5,5,5)` (#050505) ×14, `rgb(85,85,85)` (#555555) ×7 |
| recruit border frequency | `2px solid rgb(5, 5, 5)` (#050505) ×21, `1px solid rgb(0, 0, 0)` (#000000) ×3 — sharp-border-heavy, monochrome |
| font frequency (both surfaces) | `sans-serif`, `"Noto Sans JP"`, `"Noto Sans"`, `Times` (fallback) — no brand display font beyond the Noto family |
| box-shadow | `none` across hero, nav, headings, news cards, job cards, and CTAs on both surfaces (shadowless system confirmed) |
| document.title (corporate) | 株式会社Gaudiy Group｜ファンと共に、時代を進める。 |
| document.title (recruit) | 採用特設サイト \| 株式会社Gaudiy Group |

## Sibling-recorded published strings kept byte-exact here

A5 applies to strings the verification sibling names as measured, not only to strings the legacy body carries. These four are sibling-only and are preserved here verbatim rather than paraphrased:

- `Gaudiy Groupが松竹、東映アニメーション、東宝より追加調達…` — corporate news/press card headline
- `デザインディレクター` — recruit job-role card
- `Corporate IT` — recruit job-role card
- `株式会社Gaudiy Group｜ファンと共に、時代を進める。` — corporate document title

The recruit document title `採用特設サイト | 株式会社Gaudiy Group` appears in both the legacy body (as a voice sample) and the sibling; it is carried in the portable `Content & Locales` and here. Two destinations (E2a).

## Conflict matrix (from the sibling)

| Field | Tier 1 (live) | getdesign.md | refero.design | Resolution |
|---|---|---|---|---|
| Token data availability | full computed-style capture, 2 surfaces | no Gaudiy entry ("No designs found for 'gaudiy'") | no Gaudiy results | Tier 1 authoritative — both Tier 2 sources have no Gaudiy coverage |
| Border ink | `#050505` (recruit, 2px ×21) / `#000000` (corporate, 1px) | — | — | Both retained; `#050505` chosen as primary_color (structural ink) |
| Body text | `#333333` (#333 charcoal, dominant) | — | — | Tier 1 |
| Accent hue | none (accent scan empty) | — | — | Tier 1 — monochrome system confirmed |

No conflicts: both Tier 2 catalogs return no Gaudiy data, so there is nothing to reconcile against the live inspect. The corporate ↔ recruit border-weight / muted-grey variance is documented as an intentional two-surface split, not a conflict.

## Logo decision (from the sibling)

`https://www.google.com/s2/favicons?domain=gaudiy.com&sz=128` returns a valid 128×128 PNG at 995 bytes (content-type image/png), well above the 450B generic-globe threshold. This resolves that the pointer is a real icon rather than a generic placeholder; it does not make the URL a first-party Gaudiy asset, which is why the portable Assets section declines to promote it as one.

## Country note (from the sibling)

JP country — the ≥2 brand-owned regional source rule is a KR/TW gate and does not apply. Both Tier 1 sources here are nonetheless brand-owned: gaudiy.com corporate and special.gaudiy.com recruit.

## Claim ledger

| Claim | Surface |
|---|---|
| tokens.colors.ink `#050505` | recruit |
| tokens.colors.ink-pure `#000000` | corporate |
| tokens.colors.text `#333333` | corporate + recruit |
| tokens.colors.muted `#555555` | recruit |
| tokens.colors.muted-alt `#777777` | corporate |
| tokens.colors.faint `#656565` | corporate |
| tokens.colors.canvas `#ffffff` | corporate + recruit |
| tokens.colors.surface `#eeeeee` | corporate |
| tokens.colors.on-ink `#ffffff` | corporate + recruit |
| tokens.typography.family.display / latin / fallback | corporate + recruit |
| tokens.typography.display-hero (64 / 700 / 1.40 / -3.2) | corporate |
| tokens.typography.section (28 / 700 / 1.40 / +1.6) | corporate |
| tokens.typography.body (16 / 400 / 1.50) | corporate + recruit |
| tokens.typography.cta (16 / 400 / 1.50) | corporate + recruit |
| tokens.spacing.xs 8 / sm 9 / md 10 / base 16 / lg 18 / xl 32 / xxl 64 | corporate + recruit |
| tokens.rounded.sm / md / lg = 0 | corporate + recruit |
| tokens.rounded.full = 9999 | corporate |
| tokens.shadow.none | corporate + recruit |
| tokens.components.cta-solid.* | corporate |
| tokens.components.cta-outline.* | recruit |
| tokens.components.news-card.* | corporate |
| tokens.components.job-card.* | recruit |
| tokens.components.section-band.* | corporate |
| tokens.components.nav-link.* | corporate + recruit |
| tokens.components.close-round.* | corporate |

## Derived editorial inventory

Index of the sentences in the portable body that carry the complete derived-editorial qualifier, so the qualification can be audited without re-reading the whole file. Measured, not remembered: **22 qualifier sites across 21 headings** in `DESIGN.md`, counted with `grep -o` on the full qualifier string (`derived editorial implementation inference` 22 / `not Gaudiy-authored` 22 / `separately published UI specification` 22). Each is a reading the migration attached to observation, not a Gaudiy publication.

| # | Portable location | Reading qualified |
|---:|---|---|
| 1 | Experience → Scope, interface paragraph | "glitch" identity, defiance, counter-move, emphasis-by-inversion, separation-by-bands-and-borders, greys as a neutral ladder, engineered block, zine-like cadence, editorial-brutalist, magazine-not-dashboard, refusal-to-round-as-conviction |
| 2 | Experience → Scope, narrative paragraph | vision phrase read as reframing fandom into co-creation; backer roster as core proof point; monochrome as the visible form of what the company refuses |
| 3 | Experience → Primary tasks | the selection of the three tasks |
| 4 | Experience → Audience | reading the two surfaces as those stakeholder groups |
| 5 | Experience → Distinctive traits | monochrome as commitment, charcoal as softening, sharpness as brand |
| 6 | Experience → Principles | the five principles and their UI implications |
| 7 | Experience → Application rules | the Do list, the moved restraint rule, and the attached reasons |
| 8 | Experience → Avoid | the Don't list and the attached reasons |
| 9 | Foundations → Semantic color | charcoal as a softened black for warmth and readability, border ink as the color that draws every box, inversion rather than color as the emphasis mechanic, plus the following constraint (do not add a hue; retain the corporate/recruit split as two variants) |
| 10 | Foundations → Spacing | asymmetric padding read as an optically balanced editorial touch |
| 11 | Foundations → Elevation | editorial-brutalist choice, sharp/graphic/defiant, opposite-of-consumer-tech, and the four levels read as an elevation ladder |
| 12 | Foundations → Motion | durations, easing role names, Use assignments, inversion-flip signature, glitch/cut punctuation, no-bounce/no-spring, reduced-motion line — all as source-stated rather than computed |
| 13 | Typography & Assets → Family | scripts kept on separate faces; no substitute family; generic fallback not presented as a brand display face |
| 14 | Typography & Assets → Type roles | weight/font-switch as the hierarchy signals and no color hierarchy; tracking flip as a deliberate editorial signature; charcoal as comfort for long Japanese copy; the two script-to-font roles as never swapped |
| 15 | Typography & Assets → Assets | third-party favicon pointer not promoted as a brand image; no-shadow imagery read as consistent with the flat system |
| 16 | Components & States → How to read | every role description, every interactive-kind verdict, every applicability verdict, each reason, and the English readings placed beside the Japanese labels |
| 17 | Components & States → State record | the nine rows read as the system's state contract, and their per-state assignments |
| 18 | Layout & Platforms → Whitespace | whitespace, segmentation, and border repetition read as rhythm and philosophy |
| 19 | Layout & Platforms → Breakpoints | the three-tier table read as a responsive contract, extended by name to touch targets, collapsing strategy, and image behavior |
| 20 | Content & Locales, voice paragraph | voice characterisation, register readings in the tone table, and the design-carries-the-same-seriousness claim |
| 21 | Content & Locales, forbidden register | the restraint-signals-seriousness explanation |
| 22 | Governance → Recorded unresolved decisions | corporate/recruit variance read as an intentional two-surface split rather than a conflict to reconcile |

Evidence-class boundary sentences, distinct from the qualifiers above, that state what a piece of evidence is rather than what it means: the Fanlink-description-belongs-to-the-narrative pointer in Scope; the narrative-does-not-supply-tokens line in Scope; the founding-year/CEO public-fact line in Scope; the hex-values-are-the-observed-part line in Semantic color; the accent-scan constraint in Semantic color; the two-surface-variance line in Semantic color; the philosophy-layer line in Motion; the record-scope row in Font evidence; the no-computed-hover/focus/pressed line in Components; the labels-are-verbatim line in Components; the philosophy-layer/two-inspections line in the State record; the single-desktop-width line in Breakpoints; the Japanese-is-the-published-string line in Content & Locales; the cited-clichés-are-not-Gaudiy-copy line in Content & Locales.

## Omission ledger

| Omitted from the portable body | Value kept here verbatim | Reason |
|---|---|---|
| `ease-enter` curve | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Unattributed. The sibling records no transition, animation, duration, or easing sample; the source's own closing note places its motion section in the philosophy layer, outside the live-inspect list. Name and use survive in the portable Motion table. |
| `ease-exit` curve | `cubic-bezier(0.4, 0.0, 1, 1)` | Unattributed, and identical to the `ease-exit` example in `spec/omd-v0.1.md` — the legacy spec table that names itself a non-brand implementation default and forbids moving its curves into a reference DESIGN.md. |
| `ease-standard` curve | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Unattributed, on the same evidence as the two above. |
| Personas — fictional personas 3인, §13, D2 삭제 | Not re-hosted. Names, ages, cities, and biographies are omitted from this ledger (D2a). | D2: the source labels them fictional archetypes with illustrative names. |
| Tool-facing section (its section 9) | Quick Color Reference, Example Component Prompts, and Iteration Guide are not carried. | Tool-specific commands, prompt wrappers, and restatements of rules already held as values. One restraint rule stated only there — use the solid black inversion CTA sparingly, for the single primary action — was moved into the portable Application rules rather than dropped (A3). |

The source contains no `[FILL IN]` placeholder, so this migration emits none and the ledger records none.

## Notes on evidence separation

- No sibling structural classification (heading level, section-name reading) crossed into the portable body as a fact (B1).
- The generic `focus` observation is a different evidence type from a `focus-visible` treatment. The source never records `focus-visible`, so no `focus-visible` row in the portable body carries a value.
- The corporate site, the recruit special site, the Gaudiy Fanlink product, and the linked Tech Blog / Gaudiy AI Lab / Member note / CEO'S note destinations are separate evidence domains. Only the first two were inspected, and no value observed on them was written as a fact about the others.
