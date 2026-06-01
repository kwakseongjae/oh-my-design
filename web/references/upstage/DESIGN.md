---
id: upstage
name: Upstage
display_name_kr: 업스테이지
country: KR
category: ai
homepage: "https://www.upstage.ai"
primary_color: "#d2ff95"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=upstage.ai&sz=256"
verified: "2026-05-15"
omd: "0.1"
ds:
  name: Upstage Brand Resource Center
  url: "https://www.upstage.ai/resources/brand-resource-center"
  type: brand
  description: "Upstage's brand resource hub — logo / symbol assets + IP rights statement. Token spec lives only in production CSS (Geist + Espeak proprietary face + violet #5B52FF × plum #3C043B + Solar accent #D2FF95)."
  og_image: "https://cdn.prod.website-files.com/6743d5190bb2b52f38e99e37/680a25ee07a17eed6deeff74_OG.avif"
---

# Upstage — DESIGN.md

> Reference research only. Brand assets, logo, and the proprietary Espeak display face are property of Upstage Co., Ltd. (주식회사 업스테이지). No verbatim taglines, marketing copy, or asset binaries are reproduced. Token values quoted below are factual CSS custom property values observed via live runtime inspection of the public `www.upstage.ai` surface, under analytical fair-use.

## 1. Visual Theme & Atmosphere

Upstage looks like an enterprise AI company that decided to spend its visual budget on **one purple, one display face, and one rotating word** — and then on absolutely nothing else. The home surface ships in a deep plum hero canvas (`#3C043B`, exposed as `--colors--grey-background`), pairs it with a near-mint Solar accent (`#D2FF95`, a vivid mid-step of the `--colors--green-yellow-*` ladder), and reserves a single interactive violet (`#5B52FF`, observed 55 times across CTAs and links) as the only chromatic gesture that ever does work. The page is built on Webflow, layers Untitled UI and Spark Library tokens underneath an Upstage-namespaced override layer (74 `--*` custom properties on `:root`), and exposes the seams honestly — `_sub---untitled-ui--*`, `_sub---spark-library--*`, and `_sub---elements-webflow-library--*` all coexist on the document root, with the `--colors--*` and `--style--*` prefixes representing the brand's actual decisions. Type is even more disciplined: **Geist** runs 869 of ~930 sampled text elements (~93%), a single custom display face called **Espeak** lights up the hero H1 at 57.6px / weight 600, and the variable industry word inside the hero (`Insurance`, `Healthcare`, `Manufacturing`, `Financial Services`) shifts to a humble **monospace** mid-sentence — a typographic gesture that says *this slot is configurable* without spending a single color or weight to mark it. Radius is binary (797 elements at 0px, 134 at 8px, nothing meaningful between), elevation is effectively zero (the underlying Webflow library exposes one 10%-alpha shadow token, almost never applied), and rhythm comes from surface-color shifts band to band — plum hero → white product band → dark industry grid → white customer band → dark deployment matrix → near-black footer (`#191722`, slightly violet-tinted, not pure black). The atmosphere reads *competent, technical, restrained* — the visual equivalent of an enterprise pitch deck that knows it doesn't need to shout.

**Atmospheric anchors**:
- **Plum-violet axis, not blue.** Where most enterprise AI brands default to a corporate blue, Upstage commits to violet primary (`#5B52FF`) on a plum canvas (`#3C043B`) — distinguishable in a sea of cobalt competitors.
- **Solar yellow-green as scarcity asset.** `#D2FF95` appears only adjacent to the Solar product narrative — never as a default button surface or section background.
- **One body family, one display face, one swap.** 93% Geist coverage + Espeak-only hero + monospace industry word = three families, three jobs, no overlap.
- **Type-as-imagery on industry cards.** Each high-stakes industry (Insurance / Healthcare / Manufacturing / Financial Services) presents as a giant industry word on a dark surface — no stock photography, no industry icons.
- **Binary geometry.** Sharp (0px) for sections, cards, hero, footer; soft (8px) only for pressable controls and a few content chips. Nothing in between.

## 2. Color System

### Brand
| Token | Hex | Live source | Role |
|---|---|---|---|
| Upstage Violet (primary) | `#5B52FF` | live computed `rgb(91,82,255)` on `.button.is-secondary` × 2 sampled CTAs; 55 element occurrences | Interactive foreground; link; secondary-button text; filled-primary button background variant |
| Violet pressed | `#1E116E` | `--_sub---spark-library--foreground-interactive-hover` | Hover / pressed state of primary |
| Violet deep | `#281CA5` | `--elements-webflow-library--secondary--color-1` | Emphasis / filled-button alt |
| Solar yellow-green | `#D2FF95` | mid-step of `--colors--green-yellow-*` (50 = `#f6ffe5`); live-observed as decorative accent | **Single-use chromatic accent** tied to the Solar product narrative |

### Ink (text)
| Token | Hex | Frequency in DOM | Role |
|---|---|---|---|
| Body gray | `#70757F` | **428 elements (dominant text color)** | Default body, paragraph, muted subhead |
| Near-black | `#0A0D14` | 58 elements | Headings on light surfaces |
| Muted purple-gray | `#6E7191` | 20 elements | Secondary muted / footnote |
| White | `#FFFFFF` | 213 elements | Text & UI on dark surfaces |
| White @50% | `rgba(255,255,255,0.5)` | 14 elements | Muted secondary copy on dark hero |

### Surface
| Token | Hex | Role |
|---|---|---|
| Page white | `#FFFFFF` | Default page background |
| Subtle band | `#F9FAFB` | `--colors--base--subtle` — light section break |
| Footer near-black | `#191722` | Footer band — *intentionally violet-tinted, not pure `#000`* |
| Plum decorative | `#3C043B` | `--colors--grey-background` — hero canvas. **Non-obvious choice**: a deep plum named as "grey" in the token system. |
| Lavender interactive | `#F0ECFD` | `--_sub---spark-library--background--interactive` — active/hover surface |
| Purple-100 | `#DDE3FF` | `--colors--purple-100` — cool tint for chips / info |

### Border
| Token | Hex | Role |
|---|---|---|
| Default hairline | `#EEEEEE` | `--border-color--border-primary` |
| Neutral subtle | `#F7F7FC` | `--_sub---elements-webflow-library--neutral--200` |

### Ladders observed (under-layer)
Untitled UI primary scale (`#fcfaff 25 / #f9f5ff 50 / #f4ebff 100 / #d6bbfb 300 / #6941c6 700`) and Untitled UI gray scale (`#eaecf0 200 / #475467 600 / #101828 900`) sit underneath the Upstage-namespaced surface tokens. Treat them as inherited primitives, not Upstage decisions.

## 3. Typography

| Slot | Family | Size / Weight | Live evidence |
|---|---|---|---|
| Hero H1 | **Espeak**, Arial, sans-serif | 57.6px / 600 | 3 sampled hero phrases |
| Hero H1 industry swap word | **monospace** (browser default) | 48px / 600 | 4 industry-word swaps |
| Section H2 | Geist | ~36-48px / 600 | "High-performance AI built by experts" et al. |
| Body large | Geist | 18px / 400 | **603 elements (dominant body size)** |
| Body | Geist | 16px / 400 | 115 elements |
| Button | Geist | 16-18px / 500 | `.button.is-secondary` + inline arrow CTA |
| Caption / small | Geist | 14px / 400 | 30 elements |
| Micro / legal | Geist | 12px / 400 | 23 elements |

**Weight discipline** (observed): 400 = 786 elements, 500 = 129 (buttons + nav + emphasised body), 600 = 15 (all headings), 700 = 8 (stat/proof labels). **Six weights are not the system — four are.**

**Critical voice rule on type**: the hero rotates `Insurance / Finance / Healthcare / Manufacturing` by changing the *font family* mid-sentence (Espeak → monospace), not the color or weight. Any port that wants to reproduce this rotating-vertical hero must keep the typographic shift as the variable-slot signal.

## 4. Radius & Geometry

| Value | Frequency | Role |
|---|---|---|
| `0px` | 797 elements | Sections, cards, hero, footer, images |
| `8px` | 134 elements | Buttons, content chips, hero secondary surfaces |
| `100%` | 5 elements | Avatar / icon circles |
| `100px` | 1 element | Single pill |
| `50%` | 1 element | One round element |

**Binary rule**: Upstage's geometry encodes pressability. Sharp = layout. 8px = "you can click this." Nothing in between, no `4px / 12px / 16px` middle terms. Token: `--style--radius-8px: 8px`.

## 5. Elevation

Effectively **zero box-shadow** on observed elements. The underlying Webflow library exposes `--_sub---elements-webflow-library--general--shadow-03: #14142b1a` (violet-black 10%), but production almost never invokes it. Depth = surface-color contrast (plum → white → dark → near-black) + hairline borders. *Do not import drop-shadow card patterns from neighbour systems if porting this brand — Upstage doesn't ship them.*

## 6. Spacing & Layout

- **Canvas**: 1280px desktop sweet spot; `--style--max-full-width: 100vw`.
- **No `--space-*` ladder** exposed on `:root`. Section vertical rhythm appears to use ~64-96px band gaps with 16/24/32 internal step (Webflow class-driven, not token-driven).
- **Hero alignment**: left-aligned starting ~10% from canvas edge, not centered.
- **Vertical rhythm = surface flips**: each H2 section change is also a background-color change. The rhythm is *chromatic*, not numerical.

## 7. Interactive Components

### Primary CTA — multiple variants, one violet
1. **`Try now`** — persistent top-right of nav. Filled violet `#5B52FF` background, white text, 8px radius, weight 500.
2. **`Try demo`** — hero inline arrow. Transparent background, white text, `→` arrow glyph, 18px / 500.
3. **`Learn more →`** — repeated inline across every product / solution card. Text-color inherits section surface (white on dark, violet on light), 18px / 500, no chrome.
4. **`.button.is-secondary`** (e.g. *Developer Console*, *Learn more* on solution cards) — white pill surface, violet text `#5B52FF`, 8px radius, weight 500. 16px.

### Nav (top)
Transparent over hero, white below. Five primary categories (Products / Solutions / Resources / Company / Pricing) + persistent `Try now` filled CTA on the right.

### Card
Product / solution / customer cards: 8px radius, transparent background, `#70757F` body paragraph, no drop shadow, inline `Learn more →` link as the only interactive affordance.

### Industry card (signature)
Giant industry word (`Insurance` / `Healthcare` / `Manufacturing` / `Financial Services`) at 48px+ as the entire card front. **Typography is the imagery.**

## 8. Motion (partially captured)

CDP single-pass did not extract transition durations or cubic-bezier curves. Inferred from observed `--_sub---spark-library--background--interactive: #F0ECFD` hover surface: standard Webflow ~150-200ms ease for interactive state changes. **Flagged for UPDATE pass** — exact motion tokens not authoritative here.

## 9. Accessibility (observed)

- **Body gray `#70757F` on white** ≈ 4.6:1 — passes WCAG AA for normal text (≥4.5:1).
- **Violet `#5B52FF` on white** (secondary-button text) ≈ 5.2:1 — passes AA comfortably.
- **White on plum `#3C043B`** = ≥10:1 — strong pass for hero copy.
- **White @ 50% on plum hero** = ≈5:1 — at AA edge; acceptable for ≥18px text but borderline for finer hero subhead at smaller weights. Flagged as observed-as-shipped trade-off, not a guideline.
- **No landmark / role inventory verified** in this CDP pass — `<header>`, `<footer>`, `<nav>` are used semantically (positive), but a deeper axe-style audit is out of scope.

## 10. Voice & Microcopy (analyst characterisation, no verbatim copy)

Upstage's marketing voice is **declarative, enterprise-confident, lightly punchy**. Sentences are short. Heroes state a verb-object intent rather than a feature list. Industry callouts are single nouns (`Insurance`, `Healthcare`) — the brand trusts the reader to fill in the relevance. Section H2s read as engineering-credible category claims ("High-performance AI built by experts", "Flexible deployment, enterprise-ready anywhere") — proof-of-capability framing, not benefit framing.

**Tone vector**: technically grounded · enterprise-formal · zero-hype · pragmatic-bilingual (Korean root, English-first marketing).

**Fresh OmD-derivation alternatives** (not Upstage copy — illustrative shape-only):
- *Build the AI. Ship the workflow. We bring the model.*
- *Enterprise-grade Solar. Deploy where your data lives.*
- *One model. Four industries. Production-ready.*

**Do NOT reproduce** any verbatim Upstage hero, button label, or proof statement in derivative work — voice is the shape only.

## 11. Brand Narrative (factual)

Upstage Co., Ltd. (주식회사 업스테이지) is a Korean LLM and enterprise AI company headquartered in Gangnam, Seoul, with offices at the Korea Science and Technology Center (한국과학기술회관 2관, 스파크플러스 강남5호점 812-817호, 22 Teheran-ro 7-gil, Gangnam-gu). CEO is **Sunghun Kim (김성훈)**. Business Registration No. 830-88-01918. The company's flagship is the **Solar** family of LLMs (Solar Pro 3 / Pro 2 / Mini) and the **Syn Pro** Japanese-locally-trained LLM. Product surface includes **Document Parse** (PDF/scan → structured), **Information Extract** (key-value structuring), **Studio** (build/deploy agents), **AI Space**, and the **Upstage Marketplace**. Deployment matrix spans API, on-premise, and marketplace channels. Stated industry focus: insurance, healthcare, manufacturing, financial services. Source: live capture of the home + footer + brand-resource-center surfaces on 2026-05-15.

Founding-year, total-funding, headcount, and investor list **not verified in this pass** — public profiles (Crunchbase / TheVC) were not consulted to keep scope tight. Flagged for UPDATE.

## 12. Personas (inferred — verify before reuse)

These are reasoned inferences from the surface IA and proof bands, not user research:

- **Enterprise IT decision-maker** — insurance/healthcare/manufacturing CIO or VP of Engineering. Comes in via the Solutions tab, leaves via *Contact us* or *Try demo*. Cares about: deployment options (on-prem vs API), customer logos, compliance posture.
- **AI/ML engineer** — practitioner evaluating Solar models for production. Comes in via Products → Solar Pro 3 → Developer Console, leaves via Documentation. Cares about: benchmark numbers, pricing per token, latency, fine-tuning paths.
- **Procurement / partnership lead** — coming in via Partners / Public tenders. Cares about: business credentials (KR business-info disclosure), Newsroom signals, certifications.

`[FILL IN]` named personas, demographics, and motivations require Upstage-internal data — left as placeholders.

## 13. Anti-Patterns (what NOT to import)

1. **Do not introduce a third type family**. Geist + Espeak + monospace-swap is the entire system. A fourth face breaks the rotating-word gesture.
2. **Do not import drop-shadow card chrome.** Upstage achieves depth via surface-color contrast and hairline borders. Adding `box-shadow: 0 8px 24px rgba(0,0,0,0.08)` will read as a different system entirely.
3. **Do not soften the binary radius.** Adding `4px` / `12px` / `16px` middle terms erases the layout-vs-pressable distinction.
4. **Do not over-saturate the Solar yellow-green.** `#D2FF95` works *because* it appears once, near the Solar narrative. Repeating it as a default highlight color cheapens it.
5. **Do not default to blue.** Cobalt primary is the enterprise-AI cliche Upstage is consciously avoiding. If porting, stay on the violet-plum axis or pick a different non-blue.
6. **Do not center-align the hero.** Left-aligned hero with the typographic-swap industry word is the brand-defining composition.

## 14. References & Citations

- **Live capture, home**: `https://www.upstage.ai/` — 44 curated DOM samples, 930+ element frequency sweep, 74 `:root` CSS custom properties, viewport 1280×713 dpr=1, captured 2026-05-15. Method: Chrome DevTools Protocol :9222 / `Runtime.evaluate getComputedStyle`. Browser: Chrome/148.0.7778.97. Raw artifacts in `references/upstage/assets/_reference/_root-vars.json`, `_raw-capture.json`, `_curated-samples.json`, `_structure-raw.json`.
- **Live capture, Tier-1 brand surface**: `https://www.upstage.ai/resources/brand-resource-center` — HTTP 200, H1 "Brand Resource Center", categories Brand Identity / Product Identity / Media kit / Our leadership, asset distribution only (no token specs). Captured 2026-05-15. Artifact: `_brand-resource-center.json`.
- **Tier-1 negative**: `design.upstage.ai`, `brand.upstage.ai`, `www.upstage.ai/brand`, `www.upstage.ai/brand-resources` — all 000/404 (verified 2026-05-15 via curl).
- **Tier-1 codebase negative**: `github.com/UpstageAI` — 12 public repos, all AI/research/cookbook (`UpstageAI/cookbook`, `UpstageAI/Gym`, `UpstageAI/mcp-upstage`, `UpstageAI/opencode`, `UpstageAI/solar-prompt-cookbook`, `UpstageAI/vllm`, …). **Zero design-system / Storybook / token-library repo** as of 2026-05-15.
- **Tier-2 indexes**: `getdesign.md/upstage` → 200 but no curated entry; `styles.refero.design/?q=upstage` → 200 search shell, no result cards. Both verified 2026-05-15.
- **Business factual**: `https://www.upstage.ai/resources/brand-resource-center` footer block — KR-mandated business-information disclosure (CEO, registration number, address) reproduced as factual reference, not promotional.

## 15. Verification Footer

**Verification date**: 2026-05-15
**Verification method**: live CDP :9222 + Tier 1/2 URL probes + GitHub org enumeration
**Live-inspect proof**: `references/upstage/assets/_reference/.live-inspect-proof.json` (8 raw_samples, ≥5 required floor)
**Confidence per section**:
- §1 Visual theme & §2 Color & §3 Typography & §4 Radius & §5 Elevation & §7 Interactive: **High** (live computed-style evidence)
- §6 Spacing: **Medium** (no `--space-*` ladder exposed; observations are visual not token-derived)
- §8 Motion: **Low** — single-pass CDP did not capture transition tokens; flagged UPDATE
- §9 A11y: **Medium** — contrast computed, but no landmark/role audit run
- §10 Voice: **High** (analyst characterisation only — no verbatim reproduction)
- §11 Brand narrative: **High** for HQ / CEO / registration / product names (sourced from public footer); **Low** for funding/headcount/founding-year (not verified this pass)
- §12 Personas: **Low** (inferred — `[FILL IN]` required before product reuse)
- §13 Anti-patterns: **High** (derived from live evidence)

**Flags (carry into audit row)**:
1. Tier-1 official DS = **partial-positive** (asset distribution surface exists; token specification does not).
2. Tier-2 indexes both empty for `upstage` — consistent with the systemic KR-coverage gap.
3. Espeak display face is a proprietary commissioned typeface — reference-only; substitute with a tonally similar open display in any derivative work.
4. Solar yellow-green `#D2FF95` is a single-use chromatic accent — repeating it broadly will read as a different brand.
5. The rotating-industry hero word ships as a **typographic shift (monospace mid-sentence)**, not a color or weight shift — preserve that gesture or the hero composition breaks.
6. Motion tokens and component-state coverage incomplete — UPDATE pass recommended on a product detail page (e.g. `/products/solar-pro-3`) and Documentation surface.

**IP guardrails confirmed**: brand assets reference-only (logos / Espeak face not redistributed); no verbatim Upstage marketing copy quoted; §10 voice samples are fresh OmD-derived shape-only alternatives; KR business-information block reproduced as factual disclosure, not promotion.

## 16. Do's and Don'ts

### Do
- Reserve interactive violet #5B52FF as the only chromatic gesture that does work — links, CTAs, and secondary-button text, the way it appears across its 55 sampled occurrences
- Anchor the brand on the plum canvas #3C043B (the '--colors--grey-background' hero) paired with violet primary, staying on the violet-plum axis instead of any cobalt default
- Build vertical rhythm from surface-color flips band to band (plum hero to white product band to dark industry grid to near-black footer #191722), not from drop shadows or a numeric spacing ladder
- Keep type to the three-family, three-job system: Geist for ~93% of body and headings, Espeak only on the hero H1 at 57.6px/600, and a monospace mid-sentence swap for the rotating industry word
- Encode the binary radius literally — 0px for sections, cards, hero, and footer; 8px ('--style--radius-8px') only for pressable controls and content chips
- Set body copy in Geist gray #70757F (the dominant 428-element text color) at 18px/400, the way most paragraph text ships

### Don't
- Spread the Solar yellow-green #D2FF95 broadly — keep it as a single-use accent adjacent to the Solar product narrative, never a default button surface or section background
- Introduce a fourth type family beyond Geist, Espeak, and the monospace swap, which would break the rotating-word gesture
- Soften the binary geometry with 4px, 12px, or 16px middle radii, which erases the layout-versus-pressable distinction
- Import drop-shadow card chrome like 'box-shadow: 0 8px 24px rgba(0,0,0,0.08)' — Upstage ships effectively zero elevation and builds depth from surface contrast and #EEEEEE hairlines
- Default to a corporate blue primary, the enterprise-AI cliche Upstage consciously avoids in favor of the violet-plum axis
- Center-align the hero or signal the rotating industry word with color or weight — keep it left-aligned with the typographic monospace shift as the variable-slot cue
