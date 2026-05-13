# Research Sources for NVIDIA

Extraction date: 2026-04-20

## Tier 1 — Official Design System

Not found as a publicly exposed, documented design system in the form Shopify Polaris / IBM Carbon / Adobe Spectrum use. NVIDIA operates a multi-framework product surface (PrimeReact, Fluent UI, Element Plus) rather than a single canonical DS site. Tokens in `DESIGN.md` sections 1–9 were extracted from live site recon.

## Tier 2 — Brand / Press Kit

- [brand.nvidia.com](https://brand.nvidia.com) — Public brand portal. Attempted WebFetch on 2026-04-20 returned a near-empty shell (client-rendered, auth-gated subpages not fetchable). Did not surface directly usable voice guidelines via WebFetch — follow-up via Playwright MCP recommended for future passes.
- [nvidia.com/en-us/about-nvidia](https://www.nvidia.com/en-us/about-nvidia/) — Company self-description, Jensen Huang culture quote.
- [nvidia.com/en-us/about-nvidia/corporate-timeline](https://www.nvidia.com/en-us/about-nvidia/corporate-timeline/) — Founding date, founders, GPU→AI milestone sequence.

## Tier 3 — Engineering / Design / Research Blog

- [nvidia.com/en-us/research](https://www.nvidia.com/en-us/research/) — Research mission phrasing, philosophy, research areas.
- [blogs.nvidia.com/blog/what-is-accelerated-computing](https://blogs.nvidia.com/blog/what-is-accelerated-computing/) — Jensen Huang sustainability / accelerated-computing quote.

## Tier 4 — Live Site Recon (base DESIGN.md)

- [nvidia.com/en-us](https://www.nvidia.com/en-us/) — Homepage microcopy, CTA labels, section headlines (verified 2026-04-20).
- [developer.nvidia.com](https://developer.nvidia.com/) — Developer portal microcopy, tagline register (verified 2026-04-20).

## Confidence

- **High** (Tier 2/3 direct quote): Jensen Huang culture quote, Jensen Huang accelerated-computing quote, founding date and founders, GPU→AI milestone dates, self-description "pioneered accelerated computing".
- **High** (live-verified microcopy): All §10 voice samples marked `verified:` — "Learn More", "Register Now", "Watch On Demand", "Out Now", "Read Blog", the Blackwell/token-cost headline, the developer-portal assistant tagline.
- **Medium** (cited, not re-fetched verbatim): Research mission phrasing (paraphrased in §10).
- **Low / Interpretive** (editorial readings of the DS, marked as such in footer): Sharp-corners-as-hardware-signal framing, GTC-as-only-theatrical-surface claim, persona archetypes.

## Notes

- brand.nvidia.com was listed in the task brief as a preferred source but did not yield content via WebFetch (likely client-rendered and/or auth-gated). Recommend a Playwright MCP pass for a future v0.1.1 uplift to pull voice/tone guideline language directly.
- NVIDIA does not publish a single voice-and-tone guideline page comparable to Mailchimp Content Style Guide or GOV.UK Style Guide. The voice model in §10 was synthesized from three authoritative registers: product-page microcopy (nvidia.com), developer-portal copy (developer.nvidia.com), and founder / keynote register (about page + accelerated-computing blog).

---

## Philosophy Layer — added 2026-04-20

- [nvidia.com/en-us/](https://www.nvidia.com/en-us/) — used for §10 voice samples (verified), tone table "Headlines" and "Benchmark claims" rows.
- [developer.nvidia.com](https://developer.nvidia.com/) — used for §10 voice sample (verified), tone table "Developer docs" row.
- [nvidia.com/en-us/about-nvidia/](https://www.nvidia.com/en-us/about-nvidia/) — used for §10 tone table "Keynote / founder voice" row, §11 narrative ("pioneered accelerated computing" citation).
- [nvidia.com/en-us/about-nvidia/corporate-timeline/](https://www.nvidia.com/en-us/about-nvidia/corporate-timeline/) — used for §11 founding, §12 principle 8 (long time horizons).
- [blogs.nvidia.com/blog/what-is-accelerated-computing/](https://blogs.nvidia.com/blog/what-is-accelerated-computing/) — used for §11 Jensen Huang sustainability quote.
- [nvidia.com/en-us/research/](https://www.nvidia.com/en-us/research/) — used for §10 tone table "Research page" row, §12 principle 9 (research public or not research).

Style reference: `claude` (auto-picked for US region per SKILL.md Phase 10-2). Justification: Western engineering-technical register, measured claims, benchmark-first voice — aligns with NVIDIA's datasheet-with-headline register far better than `stripe` (payments-commerce) or `notion` (neutral general).

---

## Philosophy Layer QA (2026-04-20) — Diagnostic Rubric

| # | Dimension | Score | Notes |
|---|---|---|---|
| D1 | §10 intro standalone, 3–5 lines, voice qualifiers | 🟢 | Standalone opener ("NVIDIA speaks like the engineering team that built the silicon it is selling"). 5 lines, ≥3 voice qualifiers (declarative, technically exact, capability-first). No peer comparison. |
| D2 | §10 tone table 7–10 rows with brand-surface row | 🟢 | 9 rows. Includes brand-specific surfaces: "Keynote / founder voice", "Research page", "Benchmark / performance claims", "Community / developer forum". |
| D3 | §10 forbidden phrases with brand-specific items | 🟢 | Generic bans + NVIDIA-specific: no competitor-diminishing, no gaming-marketing adjectives ("epic", "insane", "beast") in enterprise surfaces, no generic "AI-powered X" without named architecture. |
| D4 | §10 voice samples ≥3 with verification tier markers | 🟢 | 10 samples: 6 `verified:` (with nvidia.com / developer.nvidia.com URLs), 2 `cited:` (about page + Jensen quote), 2 `illustrative:` (error + empty state). All marked. |
| D5 | §11 narrative with inline citations + footer manifest | 🟢 | Inline markdown links to corporate-timeline, about-nvidia, blogs.nvidia.com, research. Numerical claim (4M developers / 40K companies) marked as base-carried not re-verified. Footer carries structured source tiering. |
| D6 | §12 principles with explicit UI implication | 🟢 | All 9 principles carry `*UI implication:*` label with a concrete UI rule. |
| D7 | §12 count 5–10 (target 7–9) | 🟢 | 9 principles. |
| D8 | §13 personas ≤3 sentences, behavior-first, disclaimer | 🟢 | 4 archetypes, each ≤3 sentences. Behavior-dominant (tools used, evaluation criteria). Disclaimer present at top. |
| D9 | §14 states 10–12, core types covered, no UI-pattern pollution | 🟢 | 12 rows. Empty/Loading/Error/Success/Skeleton/Disabled all present. Brand-authentic row: "Benchmark / metric rendering" (numeric-first typography as a state class). No UI patterns counted as states. |
| D10 | §15 spring stance explicit + rationale | 🟢 | Explicit forbidden-on-product-UI stance with rationale ("engineering precision — benchmarks, tolerances, thermal envelopes") + scope carve-out (GTC keynote as broadcast surface, not UI). |
| D11 | §15 reduce-motion rule present | 🟢 | Present; collapses all motion tokens to instant, removes metric counter animation, disables green-edge reveal delay. |

**Result**: 11 🟢 / 0 🟡 / 0 🔴. **PASS.**
