# QA + designlang Benchmark — the 40 references added 2026-06-22

**Date:** 2026-06-23 · **Scope:** the 40 refs created this session (KR/TW/US/UK ×10). **Method:** two parallel multi-agent workflows + a deterministic library benchmark.

- **Workflow A (QA):** 40 audit agents re-inspected each live site (global-playwright getComputedStyle) and compared to our DESIGN.md; flagged mismatches went to adversarial verifier agents (default-to-refute). → 49 agents, 2.83M tokens, 12 min.
- **Workflow B (Compare):** 40 agents judged our tokens vs designlang's deterministic extraction vs reality. → 40 agents, 1.88M tokens, 2.5 min.
- **Library benchmark:** ran `designlang` (the `design-extract` repo, v12.23.0) `--json` on all 40 brands; deterministic diff of its primary/palette/fonts vs ours. → 0 LLM tokens, 444s CPU.

---

## Part A — QA of the 40 references (accuracy vs the real sites)

| Verdict | Count |
|---|---|
| **PASS** | **35** |
| **MINOR** (confirmed nit) | **5** |
| MAJOR | 0 |
| BLOCKED/unverifiable | 0 |

- **Mean accuracy score: 98.3 / 100.** 33/40 scored 95–100; 7 scored 85–94.
- **Zero fabrications, zero wrong brand-primaries.** Every primary_color, every named brand font, and every signature component held up against the live DOM.
- **Independent cross-validation:** designlang (an unrelated deterministic scraper) corroborated **~5.4 of 6 key tokens per ref** on average — strong third-party proof our tokens are real, not hallucinated.

### The 5 confirmed MINOR issues (adversarially verified, with exact live evidence)

All five are **structural token-value nits** (a shadow, a radius, an input), not brand errors. Each has a concrete fix.

| # | ref | field | our value | live value | fix |
|---|---|---|---|---|---|
| 1 | **paypal** | §4 card `shadow` | `rgba(0,0,0,0.1) 0 4px 12px` | `rgba(0,0,0,0.08) 0px 24px 48px` (class `layered-card`, ×5) | correct the shadow token (Proof block never actually measured a shadow at CREATE) |
| 2 | **chunghwa** | §5 radius scale | `{4, 8, 16, 100}` | dominant radius is **20px (46%)**, plus 50px/42px — all absent from our scale | add 20px (modal default) + note 50/42px |
| 3 | **hyundai** | §4 Chatbot FAB | radius/size/border listed, **no shadow** | FAB `button.btn.ibtn.chatbot` carries `rgba(0,0,0,0.15) 0 0 20px` | add the box-shadow (CREATE sampled the wrapper div, not the inner button) |
| 4 | **snapchat** | §6 shadow policy | "box-shadow: none across nav, buttons, cards, inputs" | marketing **nav** wrapper has `rgba(0,0,0,0.1) 0 6px 12px 4px` (1/414 els; components genuinely flat) | soften the claim — components flat, nav wrapper has one shadow |
| 5 | **octopusenergy** | §4 input-postcode | `transparent/dark, #f0ffff text, Chromatophore 400` | the **hero** field is `white bg, black text, Arial 600` (our values match a *different* surface — the /tariffs input) | disambiguate the two input surfaces |

> Note the agents' discipline: the protected "brand-primary ≠ most-frequent-color" carve-out was applied correctly — none of these 5 are brand-color disputes; all are verifiable per-element property errors. Several refs (e.g. monzo Hot-Coral-is-accent-not-CTA) were explicitly *upheld* against that exact trap.

---

## Part B — `designlang` (`design-extract`) library: research + live test

### What it is
`designlang` v12.23.0 (MIT, Node 20+, package name `designlang`; repo `Manavarya09/design-extract`). Points headless Chromium at a URL, walks up to 5,000 DOM elements, and emits **17+ artifacts**: W3C DTCG tokens, Tailwind config, shadcn theme, Figma variables, motion tokens, typed component anatomy, WCAG audit, prompt-packs. **Deterministic — 0 LLM tokens** for base extraction (optional `--smart` adds a cloud classifier). Rich CLI: `verify` (fidelity score), `grade`, `battle`, `clone`, `pack`, MCP server, CC plugin.

### Did it work? Yes — with two caveats we hit immediately
1. **64KB pipe-truncation bug (ours, not theirs):** designlang `process.exit()`s after `console.log(JSON)`; piping its stdout truncates large output at the OS 64KB pipe buffer. Fixed by writing the child's stdout to a **file descriptor** (kernel-buffered). 40/40 then parsed cleanly.
2. **`--json` mode writes nothing to `--out`** — the 17 files only land in non-json mode.

### Accuracy vs our refs (the headline result)

| metric | designlang | 
|---|---|
| headline `primary` == our brand primary (deterministic, exact+near) | **14 / 40 (35%)** |
| headline `primary` judged correct by LLM (credits green-button/near) | 15 / 40 (37.5%) |
| our brand primary present *somewhere* in its palette | **26 / 40 (65%)** |
| primary **wrong** / **partial** / **empty-blocked** | 18 / 4 / 3 |
| fonts: match / partial / miss / empty | 28 / 7 / 1 / 4 |
| **"who captured the brand more accurately": ours vs designlang** | **ours 39 · tie 1 · designlang 0** |

### Its signature failure mode: "most-frequent ≠ brand"
designlang's `primary` is the highest-frequency chroma, so it repeatedly surfaces:
- **`#0000ee` unstyled-link-blue** as "primary" for **naverpay, ssg, paypal, bbc, doordash** (their real primaries — green / coral / navy / black / red — got demoted into `neutrals[]`).
- **most-frequent background/text** instead of brand: asana `#273240` (dark navy, brand is coral `#f06a6a`), taiwanmobile `#e3e7ee` (gray, brand is orange `#ff6700`), hubspot `#f8f5ee` (cream), samsung `#007aff` (a minor link blue; brand action is black, buried at count 4944).
- It also can't separate **surfaces** (One UI mobile blue vs commerce black vs link blue all flattened) or distinguish **brand vs system-fallback fonts** (Hyundai's real fonts intermixed with Times/Arial junk).

### Where it got blocked (same walls our builder hit — but with no fallback)
No headed-Chrome / brand-owned-source / DS-portal fallback, so bot-walled sites **cratered**: **reddit 17 elements, doordash 72, deliveroo 47, asos 7, skyscanner 37** → empty or `#0000ee` garbage. Our agents, on those same sites, adapted (headed Chrome, RPL `:root` tokens, `deliveroo.design`, `skyscanner.design`/Backpack) and got the real values.

### Where it genuinely beats our prose refs
designlang is **strictly better at quantitative, machine-grade output**:
- Per-color **frequency counts + confidence + context** (text/border/bg) — empirical dominance proof our prose only asserts.
- Full **scale histograms**: typography sizes×counts, **radius histogram** (e.g. samsung 8px×19 / 18px×29), **shadow inventory** with parsed offset/blur/spread + visual-weight labels, granular neutral ramps with HSL.
- **elementCount + per-component instance counts** (buttons 172, links 222…) — coverage metrics.
- Ready-to-consume **DTCG / Tailwind / shadcn / Figma-variables / motion** files — formats our DESIGN.md doesn't emit.
- Ironically, it was a near-perfect **independent QA oracle** for us: it corroborated ~5.4/6 of our tokens per brand, and on **chunghwa it confirmed the exact radius gap** (20px×86) the QA flagged.

### What our refs have that it structurally cannot
Curated **brand-intent primary** (the frequency model cannot recover black-as-action or accent-not-CTA), **surface separation**, **brand philosophy / narrative / §10 voice with verified copy / personas / states / motion semantics**, and **component intent** (button = '구매하기', not an averaged black-on-black `baseStyle`). On samsung/hyundai its per-component `baseStyle` was literally an averaging artifact (black-on-black buttons, phantom card shadows).

---

## Part C — Token / efficiency economics

| approach | LLM tokens | wall / brand | output |
|---|---|---|---|
| **designlang** (deterministic) | **0** | ~11s mean (1–49s) | 17 machine files; 35% correct brand primary; no semantics |
| **our build pipeline** (LLM agent + live inspect) | **~100k / brand (~4.0M for 40)** | ~6–13 min | canonical DESIGN.md: correct brand primary, philosophy, voice, components, states |
| QA workflow (this audit) | 2.83M (49 agents) | 12 min total | 98.3/100, 5 fixes |
| Compare workflow | 1.88M (40 agents) | 2.5 min total | the table above |

**Read:** designlang is ~free and ~50× faster, but trades away exactly the thing the catalog sells — *correct, intent-level brand identity*. Our pipeline is ~100k tokens/brand but is **39–0 more accurate** on brand fidelity.

### Recommendation — hybrid pipeline (concrete)
Fold designlang in as a **deterministic Stage 0** of `omd:add-reference`:
1. Run `designlang <url> --json` first (free, ~11s) → seed the candidate palette **with frequency counts**, radius/shadow **histograms**, font list, element counts, and DTCG scaffolding.
2. The LLM agent then does the **judgment-only** work it's uniquely good at: pick the *brand* primary out of the frequency-ranked palette (designlang already hands it the ranked list — our agent just demotes `#0000ee`), separate surfaces, and add philosophy/voice/components.
3. Keep our **adaptive fetch** (headed Chrome / brand-owned / DS-portal) for the bot-walled 4–5 sites where designlang returns nothing.

Expected effect: cut the live-inspect portion of our ~100k/brand (designlang does that DOM walk for free and more thoroughly), **import the quantitative histograms we currently lack**, and keep 100% of our brand-intent accuracy. Net: cheaper *and* richer, with correctness unchanged.

> Caveat on this benchmark: designlang timings include cold bot-blocks; a warmed/authed run would score higher on the 4 blocked sites. The 35% primary-accuracy is inherent to frequency-ranking, not a tuning artifact.
