# Research Sources for Tesla

Extracted: 2026-04-20

## Tier 1 — Official Design System

Not found as an external-facing design system. Tesla's design language is proprietary and consumed internally; no `design.tesla.com`, no public token file, no GitHub organization with published design tokens. The marketing site (tesla.com) is the authoritative live surface.

## Tier 2 — Brand / Press Kit

Not publicly available. Tesla does not publish a brand style guide or press asset library in the conventional sense. Logos and product imagery are distributed on request via press@tesla.com; no typography or color specification is published.

## Tier 3 — Engineering / Design Blog

- [tesla.com/blog](https://www.tesla.com/blog) — engineering and product updates (Cloudflare-blocked for programmatic fetch; readable in browser)
- Tesla's Master Plan essays (linked below) function as the closest analogue to a design-philosophy blog

## Tier 4 — Live Site Recon (Base DESIGN.md §1–9)

Performed during base DESIGN.md authoring (pre-2026-04-20). Captured in sections 1–9:
- Electric Blue `#3E6AE1`, Carbon Dark `#171A20`, Graphite `#393C41`, Pewter `#5C5E62`, Silver Fog `#8E8E8E`, Light Ash `#F4F4F4`
- Universal Sans Display / Universal Sans Text
- 4px button radius, 40px minimum CTA height
- `0.33s` transition timing on color / background-color / border-color / box-shadow
- 100vh hero sections, lazy-load below-fold, `tds-site-header--white-background` nav toggle
- Observed button labels: "Order Now", "View Inventory", "Learn", "Order", "Ask a Question", "Schedule a Drive Today"

## Philosophy Layer — added 2026-04-20

- [tesla.com/impact](https://www.tesla.com/impact) — official mission statement *"Our mission is to accelerate the world's transition to sustainable energy."* Used for: §10 voice samples, §11 narrative (mission).
- [tesla.com/master-plan-part-4](https://www.tesla.com/master-plan-part-4) — Master Plan Part IV (September 2025), *"sustainable abundance"* framing and the five guiding principles (growth is infinite; innovation removes constraints; technology solves tangible problems; autonomy benefits all humanity; greater access drives greater growth). Used for: §11 narrative (current positioning), §12 principles (first-principles framing).
- [tesla.com/ns_videos/Tesla-Master-Plan-Part-3.pdf](https://www.tesla.com/ns_videos/Tesla-Master-Plan-Part-3.pdf) — Master Plan Part 3 (April 2023), 41-page technical paper modeling an electrified global energy economy. Used for: §11 narrative (mechanism), §12 principles (spec-over-adjective).
- [en.wikipedia.org/wiki/Tesla,_Inc.](https://en.wikipedia.org/wiki/Tesla,_Inc.) — founding history (Eberhard & Tarpenning, July 2003; Musk Series A, Feb 2004; Straubel CTO, May 2004; 2009 five-co-founder settlement) and 2025 delivery / storage figures. Used for: §11 narrative (origin), §11 numerical claims.
- tesla.com marketing-surface live recon (base DESIGN.md §1 / §4) — observed button labels and UI chrome patterns. Used for: §10 voice samples, §14 states, §15 motion timings.

**Fetch note**: tesla.com returns HTTP 403 to programmatic `WebFetch` requests due to Cloudflare bot protection. Primary surfaces were cross-referenced through web search and through the live-recon observations captured in the base DESIGN.md.

## Confidence

- **High** (cited from official Tesla surfaces): mission statement wording, Master Plan Part IV "sustainable abundance" framing, Master Plan Part III existence and April 2023 publication date, live CTA labels observed in base DESIGN.md recon.
- **Medium** (Wikipedia-sourced, not re-verified against SEC / Tesla IR filings): 2025 delivery figure (1.66M vehicles), 2025 battery storage deployment (46.7 GWh), co-founder settlement details.
- **Low / Illustrative** (marked in-text): the order-flow error voice sample (`"This configuration isn't available…"`) — pattern-consistent but not a verified live string.

## Notes

- Tesla publishes no public brand guideline and no design-token repository; the live marketing site is the authoritative reference.
- The Philosophy layer is deliberately framed around the company's founding (Eberhard/Tarpenning) and its published Master Plan documents rather than around Elon Musk as a persona — per the task's critical-rule guidance that Tesla ≠ Musk.
- Style reference: `claude` (US / minimal / considered-tone peer). The forbidden-spring stance and the "product is the hero; UI is scaffolding" principle are direct analogues to Claude's "considered, not eager" motion stance.

---

## Philosophy Layer QA (2026-04-20) — Diagnostic Rubric

Applied per `research/2026-04-20_philosophy-layer-diagnostic.md`.

| # | Dimension | Score | Notes |
|---|---|---|---|
| D1 | §10 intro standalone, 3–5 lines, voice qualifiers | 🟢 | Standalone prose, 5 lines, voice qualifiers present ("short declarative sentences", "nouns before adjectives", "number rather than word"); no comparison to OMD peers. |
| D2 | §10 tone table 7–10 rows with brand-surface | 🟢 | 9 rows; includes brand-surface rows (Vehicle specs, Master Plan essays, Autonomy disclosures) that no other OMD file carries. |
| D3 | §10 forbidden phrases with brand-specific items | 🟢 | Generic bans ("revolutionary", "game-changer") plus Tesla-adjacent specifics ("unleash", "experience the future", "buckle up", stacked lifestyle adjectives on specs, asking-a-question CTA patterns). |
| D4 | §10 voice samples ≥3 with verification tier markers | 🟢 | 6 samples; 3 verified via live recon (Order Now / View Inventory, Learn / Order, Ask a Question / Schedule a Drive), 2 cited from tesla.com/impact and /master-plan-part-4, 1 explicitly marked illustrative. |
| D5 | §11 narrative with inline citations + footer manifest | 🟢 | 3 paragraphs with inline citations to Wikipedia (founding), tesla.com/impact (mission), tesla.com/master-plan-part-3 PDF, tesla.com/master-plan-part-4; numerical claims (1.66M / 46.7 GWh) marked `<!-- not re-verified -->`; footer manifest complete. |
| D6 | §12 principles with explicit UI implication | 🟢 | All 8 principles carry an explicit `*UI implication:*` label separating rationale from concrete UI rule. |
| D7 | §12 count 5–10 (target 7–9) | 🟢 | 8 principles — within target range. |
| D8 | §13 personas ≤3 sentences, behavior-first, disclaimer | 🟢 | 4 archetypes (engineer, family, performance buyer, fleet manager), each ≤3 sentences, behavior-focused, disclaimer present at top. |
| D9 | §14 states 10–12, core types covered, no UI-pattern pollution | 🟢 | 11 rows; Empty (×2), Loading (×2), Skeleton, Error (×3 variants), Success (×2), Disabled. Brand-authentic rows: silent-white load, no-spinner inside CTA, no-toast success. |
| D10 | §15 spring stance explicit + rationale | 🟢 | *"No spring or overshoot easings anywhere…brand register is considered, not playful"* — explicit forbidden stance with rationale. |
| D11 | §15 reduce-motion rule present | 🟢 | Present: `prefers-reduced-motion: reduce` collapses all `motion-*` tokens to `motion-instant`; carousel auto-advance halts. |

**Result**: 11 🟢 / 0 🟡 / 0 🔴. **PASS.**
