# Firstory provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, proof, and omission record for the T2 migration. Canonical source remains `web/references/firstory/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | firstory |
| name | Firstory |
| country | TW |
| category | saas |
| homepage | https://firstory.me |
| primary_color | `#fb355e` |
| logo | `type: github`, `slug: Firstory` (GitHub org avatar `https://avatars.githubusercontent.com/u/36988299?v=4`, 15,372 bytes, PNG 460×460) |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-10 |
| components_harvested | true |

Token note from source: `primary = raspberry-pink CTA (#fb355e) on a warm off-white canvas (#fbfaf9); Poppins 700 display over Open Sans body; flat shadcn/Tailwind-style system (oklch source tokens, hairline rings instead of shadows).`

## Freshness

| Event | Date |
|---|---|
| added | 2026-06-10 |
| verified | 2026-06-10 |
| tokens.extracted | 2026-06-10 |
| surfaces inspected | 2026-06-10 |
| sibling verification notes | 2026-06-10 |

Conflicts unresolved: none.

## Sibling verification file — adopted

`web/references/firstory/.verification.md` (2026-06-10) is present and is **adopted** as the evidence record for this migration. It supplies the inspection method, the raw sample list, the conflict matrix, the country-source list, and the logo decision reproduced below. Nothing in it contradicts the legacy `DESIGN.md`; where it carries more detail than the legacy body (per-sample selectors, alpha values, frequency counts), that detail is recorded here and is not promoted into the portable body.

**Method:** playwright `getComputedStyle` (live DOM) — global playwright (chromium, headless), goto `https://firstory.me` (302 → /en) and `https://firstory.me/en/pricing`, `domcontentloaded` + 3.5s settle, modal-dismiss pass, then `getComputedStyle` on body, h1/h2/h3, nav buttons, links, CTAs, cards, badges, plus a full-DOM background/text color frequency scan. Site authors colors in oklch (Tailwind v4 / shadcn stack); values converted to hex via canvas `fillStyle` round-trip in-page. zh-TW homepage (`https://firstory.me/zh`) captured for headings/CTA copy.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home-en | marketing homepage | https://firstory.me/en | 2026-06-10 |
| pricing | marketing pricing surface | https://firstory.me/en/pricing | 2026-06-10 |
| home-zh | zh-TW marketing homepage (copy capture) | https://firstory.me/zh | 2026-06-10 |
| blog | brand-owned blog (HTTP 200 check only) | https://firstory.blog | 2026-06-10 |
| github-org | official GitHub org (id 36988299 via api.github.com, HTTP 200) | https://github.com/Firstory | 2026-06-10 |

Live-inspected first-party sources for all token claims: `https://firstory.me/en`, `https://firstory.me/en/pricing`, `https://firstory.me/zh`. Brand-owned corroboration: `https://firstory.blog`, `https://github.com/Firstory`.

Second-tier design-catalog sources: none available. `getdesign.md/firstory` → "No designs found for 'firstory'"; `styles.refero.design ?q=firstory` search performed via live navigate — result cards are unrelated fuzzy matches on "story", no Firstory style page. No conflicts to reconcile.

TW brand-owned regional requirement (≥2) is met by `https://firstory.me`, `https://firstory.blog`, and `https://github.com/Firstory`. `getdesign.md`, `refero.design`, and the Google favicon proxy are explicitly NOT counted toward it.

Discovery-only narrative sources, not cited for design claims: INSIDE (`從聲音交友 180 度變身大平台的創業物語`, on Firstory's pivot), Meet / Business Next (`一畢業就創辦 Firstory`, founding story; and the KKBOX seed-round coverage).

## Raw samples

- `https://firstory.me/en` · body · `font-family: "Open Sans"` · `font-size: 16px` · `line-height: 24px` · `color: oklch(0.185 0.02 260)` = #0d131c · `background-color: oklch(0.985 0.002 75)` = #fbfaf9
- `https://firstory.me/en` · H1 "Start Your Media Business with Podcasting" · Poppins · `font-size: 72px` · `font-weight: 700` · `line-height: 72px` · `letter-spacing: -1.8px` · color #0d131c
- `https://firstory.me/en` · hero CTA "Get started today" · bg `oklch(0.6493 0.2297 15.7001)` = #fb355e · color #fafafa · `border-radius: 16px` · `padding: 0px 32px` · height 40px · `font-size: 16px` / 500 Open Sans
- `https://firstory.me/en` · nav item "Features"/"Pricing"/"Blog" · transparent bg · color #0d131c · `border-radius: 10px` · `padding: 8px 16px` · height 36px · `font-size: 14px` / 500 Open Sans
- `https://firstory.me/en` · announcement pill "First Wave in Asia-Pacific! …" · bg #ffe6e7 @0.80 · border `1px solid #ffe6e7` · `border-radius: 16px` · height 38px · 16px / 400
- `https://firstory.me/en` · H2 "From Core Essentials to Powerful Advanced Features" · Poppins · `font-size: 36px` · `font-weight: 700` · `line-height: 40px` · `letter-spacing: -0.9px`
- `https://firstory.me/en` · H3 feature head "🌐Distribute to Major Podcast Platforms" · Poppins · `font-size: 30px` · 700 · `line-height: 36px` · `letter-spacing: -0.75px`
- `https://firstory.me/en` · solution card "AI Studio…" · bg #ffffff · `border-radius: 16px` · `padding: 32px` · height 193px · title 18px / 600 Poppins
- `https://firstory.me/en` · FAQ trigger "How do I get started with Firstory?" · `padding: 20px 24px` · height 64px · 16px / 500 Poppins · color #0d131c
- `https://firstory.me/en/pricing` · H1 "Simple, Transparent Pricing" · Poppins · `font-size: 48px` · 700 · `letter-spacing: -1.2px`
- `https://firstory.me/en/pricing` · billing toggle "Monthly" (inactive) · bg #f6efe5 · color #242a34 · `border-radius: 3.35544e+07px` (full pill) · `padding: 8px 20px` · height 36px · 14px / 500
- `https://firstory.me/en/pricing` · billing toggle "Yearly" (active) · bg #fb355e · color #fafafa · full pill · `padding: 8px 20px` · 14px / 500
- `https://firstory.me/en/pricing` · plan CTA "14-Day Free Trial" (featured) · bg #fb355e · color #fafafa · `border-radius: 12px` · `padding: 0px 10px` · height 37px · 14px / 500
- `https://firstory.me/en/pricing` · plan CTA "Start Free" (quiet) · bg #fbfaf9 · color #0d131c · `border-radius: 12px` · height 36px · 14px / 500
- `https://firstory.me/en/pricing` · pricing plan card · bg #ffffff · `border-radius: 16px` · `padding: 24px 0px` · class `ring-foreground/10 bg-card` (hairline ring, no shadow)
- `https://firstory.me/en/pricing` · featured plan card · bg #ffffff · `border: 2px solid #fb355e` · `border-radius: 16px` · 359×583px
- `https://firstory.me/en/pricing` · badge "Save 22%" · bg #ffe6e7 · color #962339 · full pill · `padding: 2px 8px` · `font-size: 12px` / 600 · height 21px
- `https://firstory.me/en/pricing` · badge "Recommend" · bg #fb355e · color #fafafa · full pill · `padding: 4px 16px` · `font-size: 12px` / 600 · height 24px
- `https://firstory.me/en/pricing` · plan price "$0" / "$84" / "$180" · Poppins · `font-size: 36px` · `font-weight: 700` · color #0d131c
- `https://firstory.me/en/pricing` · footer link "Privacy Policy" · color #4f5661 · `font-size: 14px` / 400 Open Sans; footer heading "Product" #0d131c 14px / 600
- `https://firstory.me/en` · top background colors (frequency scan, hex-converted): #fb355e ×36, #ffffff ×28, #fb365e@0.50 ×20, #edf0f6 ×11, #ff3162@0.10 ×6, #ffe6e7 ×6, #fbfaf9 ×4
- `https://firstory.me/en` · top text colors (frequency scan): #0d131c ×526, #4f5661 ×142, #fb355e ×63, #000000 ×43, #00c950 ×21, #fafafa ×9
- `https://firstory.me/en/pricing` · top background colors: #fbfaf9 ×173, #ffe6e7 ×44, #edf0f6 ×36, #edeff5@0.50 ×19, #fb355e ×3; top text: #0d131c ×516, #fb355e ×240, #4f5661 ×192
- box-shadow: declared only as fully transparent ring placeholders (`rgba(0,0,0,0) 0px 0px 0px 0px, …`) on CTAs/cards — no rendered shadows anywhere measured (flat system); default borderColor #e0e3e8 (0px width unless ring applied)
- document.title (en): "Firstory: Podcast Subscriptions & Monetization"; (zh): "Firstory：Podcast 訂閱與創作者變現的 AI 工具"; (pricing): "Pricing — Firstory"
- `https://firstory.me/zh` · H1 "用 Podcast 開啟你的媒體事業"; H2 "從核心功能到強大的進階特色", "受到全球創作者的信賴", "準備好開始你的 Podcast 之旅了嗎？"; CTAs "立即開始", "免費開始", "免費試用 14 天"

Two figures in the raw list differ from the legacy body and are recorded as-is rather than reconciled: the featured plan CTA measures `height 37px` in the raw sample while the legacy component token records `36px`, and the full-pill radius computes as `3.35544e+07px` while the token records `9999px`. The legacy token values are what the portable body carries; these raw readings stay here.

## Claim ledger

All token claims resolve to the live inspection of 2026-06-10. `home-en` = `https://firstory.me/en`; `pricing` = `https://firstory.me/en/pricing`; `home-zh` = `https://firstory.me/zh`.

| claim | surface |
|---|---|
| tokens.colors.primary / on-primary / ink / canvas | home-en |
| tokens.colors.ink-soft / beige / pink-tint / pink-deep | pricing |
| tokens.colors.muted / card / surface-cool / hairline / success | home-en |
| tokens.typography.family.display / body | home-en |
| tokens.typography.display-hero / section / subsection / card-title / body / nav | home-en |
| tokens.typography.display-page / caption | pricing |
| tokens.spacing.* | home-en, pricing |
| tokens.rounded.sm / md / lg | home-en, pricing |
| tokens.rounded.full | pricing |
| tokens.shadow.none | home-en, pricing |
| tokens.components.button-primary / nav-item / card-solution / announcement-pill | home-en |
| tokens.components.button-plan / button-quiet / billing-toggle / card-plan-featured / badge-save / badge-recommend | pricing |
| §4 FAQ Accordion / Navigation / Footer values | home-en |
| §10 voice samples (zh-TW) | home-zh |
| §10 voice samples (EN) | home-en |

## Conflict matrix (from the adopted verification file)

| Field | Live inspect | getdesign | refero | Resolution |
|---|---|---|---|---|
| Primary action color | #fb355e (hero CTA, active toggle, featured border) | — (404) | — (not listed) | Live only — #fb355e |
| Canvas | #fbfaf9 (oklch(0.985 0.002 75)) | — | — | Live only |
| Display font | Poppins 700 (h1/h2/h3, prices) | — | — | Live only |
| Body font | Open Sans 400/500 | — | — | Live only |
| Shadows | none rendered (transparent ring placeholders) | — | — | Live only — flat system |

## Logo decision

- Google favicon proxy `https://www.google.com/s2/favicons?domain=firstory.me&sz=128` → 332 bytes, HTML error document (unusable).
- `https://cdn.simpleicons.org/firstory` → 404.
- GitHub org avatar `https://avatars.githubusercontent.com/u/36988299?v=4` → 15,372 bytes, valid PNG 460×460. → `logo: { type: github, slug: Firstory }`.

The catalog logo record is identity metadata, so it stays here and is not promoted into the portable body as a mark asset.

## Omission ledger

Values and content removed from the portable body, with what was removed and why.

| Removed | Where it was | Reason |
|---|---|---|
| `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | §15 Easings table | Unattributed curve. The source labels the whole motion block a derivation from stack defaults, and no per-component computed evidence exists. Deleted rather than carried. |
| `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | §15 Easings table | Same. This exact string is also the worked example in the legacy authoring format, so it is boilerplate rather than an observation of this brand. |
| `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | §15 Easings table | Same; it is the CSS `ease` default. The billing-toggle motion rule survives in the body without the curve reference. |
| Three fictional persona entries — names, ages, cities, and invented biographies | §13 Personas | Fictional archetypes. Neither promoted to the portable body nor re-recorded here as evidence; the demographics are dropped outright. Only the group-level segments the source itself calls publicly observable survive, in Experience → Audience: independent Taiwanese podcasters starting a first show, growing shows monetizing through member subscriptions and listener donations, and advertisers buying podcast ads across Chinese-language shows. |
| §9 Quick Color Reference, Example Component Prompts, Iteration Guide | §9 Agent Prompt Guide | Tool-facing prompt packaging and restatement. Every hex, radius, size, alpha and pairing rule it names is already carried in Foundations, Typography & Assets, or Components & States; nothing unique to §9 was dropped. |
| Footer **Verified** / source-tier lines / **Conflicts unresolved** | §4 end matter | Freshness and source ledger; recorded above instead. |
| Trailing HTML source comment (sections 10–15 evidence note) | end of file | Same: evidence and authority record. Its substantive limits — voice samples verbatim, personas fictional, §14/§15 illustrative, interpretive claims editorial — are carried into the body as adjacent qualifications. |

## Proof notes

- Source `omd: "0.1"`, `tokens.source: live-extract`, `components_harvested: true`.
- Interaction expansions: 0. Only default appearances were computed; the billing toggle additionally has a recorded active segment.
- The source records no `focus-visible` observation and no generic `Focus` capture. `focus-visible` applicability is held by control meaning in the body and carries no treatment value.
- `loading` / `error` / `success` are closed as `not-applicable` on all six declared interactive controls by product role — every one of them navigates, switches a view, or discloses on-page copy — not by absence of observation. State coverage is not claimed complete.
- Cards, badges, the announcement pill, the navigation bar, and the footer carry values with no interactive-kind evidence; kind and applicability maps are omitted rather than decided.
- §14 state stances and §15 motion tokens are the source's own derivations, marked `(illustrative)` there; they are carried at that authority with an adjacent qualification and are not attached to component applicability.
- Portable derived-editorial scope — the full inventory, not only the two illustrative blocks above. Thirteen places in the portable body carry the complete adjacent boundary: §1 Scope (the atmosphere reading and "what the design refuses"); §1 Distinctive traits (the character words and the bilingual "visually unified" reading); §1 Principles (the five items); §1 Principles (the eight application rules); §1 Avoid (the eight prohibitions); §2 Semantic color (the character readings, including the unmeasured `#962339`/`#ffe6e7` pairing); §2 Elevation (the hierarchy attribution, the ranking of the featured plan as the pricing page's most important object, and the "reaches for the pink, never for depth" reading); §2 Motion (the three durations, and the motion rules plus the reduced-motion rule carried at the same stated authority); §3 Type roles ("Poppins persuades, Open Sans informs", "solid 1.0 line-height", "prices are display type"); §4 Capture record (the role readings that close `loading` / `error` / `success`); §4 Derived state stances (the nine §14 stances); §5 (the breakpoint table, the collapsing behavior, and the whitespace stances); §6 (the Tone column, the voice characterization, and the forbidden register).
- Each of those carries the same adjacent complete wording: derived editorial implementation inference from the verified surfaces; not Firstory-authored or a separately published UI specification. Documentary facts (the founding, the pivot, the KKBOX round), the measured token values, and the verbatim published strings are deliberately left unqualified.
