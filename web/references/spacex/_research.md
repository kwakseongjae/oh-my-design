# Research Sources for SpaceX

Extraction date: 2026-04-20
Base DESIGN.md sections 1–9 pre-exist; this file is authored alongside the OmD v0.1 Philosophy layer augmentation (§10–15) on the same date.

## Tier 1 — Official Design System
- Not found. SpaceX does not publish a public design-system site, figma library, or token repo. The DESIGN.md §1–9 tokens (Space Black `#000000`, Spectral White `#f0f0fa`, D-DIN / D-DIN-Bold, ghost button rgba, 32px radius) were extracted directly from the live site's CSS bundle (see Tier 4).

## Tier 2 — Brand / Press Kit
- https://www.spacex.com/updates/ — the public newsroom. Used as tonal reference (past-tense, dated, factual mission recaps). Not fetched verbatim for the Philosophy layer, but cited as the register that §10 Voice table rows ("Mission milestones") describe.

## Tier 3 — Engineering / Design Blog
- Not available. SpaceX does not run an engineering blog in the Stripe / Atlassian / Shopify sense. Technical communication is delivered through launch webcasts, post-flight anomaly recaps, and individual program pages on spacex.com.

## Tier 4 — Live Site Recon
- Pages inspected:
  - https://www.spacex.com/mission/ (Playwright MCP, 2026-04-20) — mission statement, hero headline, milestone ledger with dates, reusability thesis, CTA labels.
  - https://www.spacex.com/human-spaceflight/ (Playwright MCP, 2026-04-20) — founding thesis sentence, reusability framing, full set of CTA labels ("EXPLORE", "LEARN MORE", "RESERVE YOUR RIDE", "JOIN A MISSION", "ORDER NOW").
  - https://www.spacex.com/vehicles/starship/ (Playwright MCP, 2026-04-20) — vehicle spec register (SI-first, imperial-second), Starship / Super Heavy / Raptor descriptions, payload-capacity framing.
  - https://www.spacex.com/mission/ (curl, 2026-04-20) — the `<meta name="description">` tag containing the authoritative corporate one-liner ("SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.").
- Browser: Playwright MCP (headless Chromium) for the SPA-rendered pages; curl for the server-rendered meta tags.
- Viewports: default Playwright desktop. SpaceX is an Angular SPA — server HTML contains only the app shell; all on-page copy is client-rendered.

## Confidence
- **High** (direct live verification, 2026-04-20): §10 voice samples (5 of 6 tagged `<!-- verified -->`); §11 founding year (2002), mission statement, founding thesis sentence, milestone dates; §12 vehicle-spec unit convention (SI / imperial); §15 countdown tick model.
- **Medium** (synthesized from verified corpus + widely-documented aerospace terminology): §11 RUD framing; §12 principle #4 (iteration culture), #7 (mission-not-founder); §14 live-indicator treatment (Active Red `#cc0000` dot).
- **Low / Inferred** (editorial reading, not documented by SpaceX): §10 forbidden phrases list specifics (e.g., the 🚀 emoji ban is an editorial extrapolation from the observed zero-emoji site surface); §12 principle #5 "no ornament" phrasing; §15 signature-motion choreography (photograph crossfade timing, live-pulse 1.2s cycle) — consistent with the site's observed register but not timed from a stopwatch on the live site.

## Notes
- SpaceX's public site is deliberately minimal on textual surface — the majority of brand voice lives in launch webcasts (YouTube) and post-flight press releases, neither of which were scraped for this augmentation. A future pass could add a transcript-based voice-sample block.
- No admin / logged-in surfaces exist on spacex.com for consumer accounts; account-creation and purchase flows live on starlink.com and shop.spacex.com and were out of scope.
- No dark-mode toggle — the site is already pure-black by default.

---

## Philosophy Layer — added 2026-04-20

Style reference: `claude` (auto-picked for 🇺🇸 US region; minimal, precise, non-hype prose register).

Sources used:
- https://www.spacex.com/mission/ — used for: Voice samples, Brand Narrative founding quote, milestone ledger, principles #1 / #7 / #8.
- https://www.spacex.com/human-spaceflight/ — used for: Brand Narrative founding-thesis sentence, reusability-as-air-travel framing, CTA voice samples.
- https://www.spacex.com/vehicles/starship/ — used for: Principle #2 (SI-first unit convention), vehicle-spec tone-table row.

---

## Philosophy Layer QA (2026-04-20) — Diagnostic Rubric

Rubric source: `research/2026-04-20_philosophy-layer-diagnostic.md` (D1–D11).

| # | Dimension | Score | Notes |
|---|---|---|---|
| D1 | §10 intro standalone, 3–5 lines, voice qualifiers | 🟢 | Standalone prose, ~5 lines. Voice qualifiers: "declarative, technical, and unsentimental", "aerospace-grade documentation", "closer to a NASA press release than a consumer tech product page". No OMD peer comparison. |
| D2 | §10 tone table 7–10 rows with brand-surface row | 🟢 | 8 rows. Brand-surface rows: "Vehicle specs" (aerospace-specific unit convention), "Mission milestones" (dated factual recap), "Founder / mission quotes" (em-dash attribution once-per-surface). |
| D3 | §10 forbidden phrases with brand-specific items | 🟢 | Generic bans ("revolutionary", "game-changing", "unleash") + brand-specific: 🚀 emoji ban with reason, hedging modifiers on quantified claims, sentence-case on hero surfaces, "next-gen" as product name. |
| D4 | §10 voice samples ≥3 with verification tier markers | 🟢 | 6 samples. 5 verified with URL + 2026-04 date; 1 illustrative (empty-state) with clear marker. All marked. |
| D5 | §11 narrative with inline citations + footer manifest | 🟢 | Inline `[spacex.com/mission/]` + `[spacex.com/human-spaceflight/]` markdown links in the narrative. Footer HTML comment is the complete source manifest. Numerical claims (founding year 2002, milestone dates) traced to the mission page. RUD framing marked `<!-- source: synthesized ... not a DESIGN.md token -->`. |
| D6 | §12 principles with explicit UI implication | 🟢 | All 8 principles use explicit `*UI implication:*` label followed by a concrete, testable UI rule (e.g. "SI unit primary, imperial secondary, separated by ` / `"; "default text-transform is uppercase unless body paragraph ≥2 sentences"). |
| D7 | §12 count 5–10 (target 7–9) | 🟢 | 8. |
| D8 | §13 personas ≤3 sentences, behavior-first, disclaimer | 🟢 | 4 personas, each 3 sentences. Disclaimer present and explicitly excludes astronauts. Behavior-first ("reads the Starship vehicles page to check current Raptor thrust"), minimal background. |
| D9 | §14 states 10–12, core types covered, no UI-pattern pollution | 🟢 | 12 rows. Covers Empty (×2), Loading (×2), Error (×3 incl. aerospace-specific RUD row), Success (×2), Skeleton (explicitly "not used" with reason), Disabled. Brand-authentic row: "Error (test flight RUD)". No UI patterns counted as states. |
| D10 | §15 spring stance explicit + rationale | 🟢 | "Spring / overshoot — explicitly forbidden." Rationale: aerospace register is deterministic, a Falcon 9 first stage does not bounce. Explicitly names `cubic-bezier(0.34, 1.56, 0.64, 1)` as banned. |
| D11 | §15 reduce-motion rule present | 🟢 | "Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`." Includes specific per-motion behavior (crossfade → cut, live-pulse → static, countdown unaffected). |

**Result**: 11 🟢 / 0 🟡 / 0 🔴. **PASS.**

Gaps / caveats flagged:
- Voice sample #6 (empty state `"NO RESULTS."`) is marked illustrative because SpaceX's public site does not expose an authenticated filter surface; a future pass with access to the SpaceX careers-search page or the Starlink admin UI could upgrade this sample to verified.
- Signature-motion durations (crossfade `motion-slow` = 600ms, live-pulse 1.2s cycle) are consistent with the observed site register but were not measured with a stopwatch on the live site; they are engineering-defensible defaults, not forensic extractions.
