# i2-audit-J.md — Persona J (Junior Designer pivoting to dev) walk-through

**Date:** 2026-04-27
**Auditor persona:** J — Figma-fluent, design-vocab sensitive, expects 10-15 turn depth, will reject fluff & vocabulary errors.
**Scenario:** `/omd-harness https://figma.com/file/abc...` against a folder with minimal Next.js code + `@figma/code-connect` in devDependencies + no DESIGN.md.

---

## Step 1 — `/omd-harness https://figma.com/file/abc...`

**Path:** `skills/omd-harness/SKILL.md:17-26` extracts the trailing arg as `task`.

The harness skill captures the Figma URL as the literal task string. Nothing in the SKILL.md treats `https://figma.com/...` as a *URL signal* vs free-text intent. There is **no URL-shape detection** in the launcher prior to handing to master.

**Verdict:** Launcher passes URL through, but blind. Master will be the first thing that has to recognize a URL.

---

## Step 2 — Does master DETECT the URL? Does it call url-token-extractor? Does the extractor handle figma.com (vs stripe.com)?

### CRITICAL — Figma URL is a documented branch but has zero implementation

`agents/omd-master.md:56` lists the INTAKE branch:

> `URL given in task → URL_EXTRACT, then SLOT_GATE`

This is the **only** mention of `URL_EXTRACT` in the master agent. There is:
- no state definition for `URL_EXTRACT` in the §1 state machine table (`omd-master.md:53-67`)
- no instruction telling master to call the extractor (the listed CLI on `omd-master.md:258` is `omd extract <url> --internal` annotated `(Phase B helper, future)` — i.e., not wired)
- no mention of `extractUrl()` from `src/core/url-token-extractor.ts` in master's tool inventory

### CRITICAL — `url-token-extractor.ts` cannot handle figma.com

`src/core/url-token-extractor.ts:47-89` is hard-coded to `npx -y dembrandt@latest extract "<url>" --format dtcg`. dembrandt is a **Playwright-based DOM/computed-style scraper for live web pages**. It expects to render a page and read CSS custom properties. Figma file URLs (`figma.com/file/<key>/...`) are:

1. Behind auth — dembrandt has no Figma OAuth/PAT
2. A canvas-rendered editor, not a DOM with semantic CSS — there are no `--color-*` custom props on the relevant nodes
3. Served as the Figma editor SPA, not the design surface

The proper extractor for `figma.com/file/...` URLs is the **Figma REST API** (`/v1/files/<key>` + `/v1/files/<key>/styles` + `/v1/files/<key>/variables`) with a `FIGMA_TOKEN`. None of this exists in the codebase. dembrandt against a Figma file URL will return either an auth-wall page or empty DTCG → fall through `url-token-extractor.ts:192` to `'Fallback extraction unimplemented'`.

So even *if* master calls `extractUrl()`, the result on a Figma URL is guaranteed to be `tool: 'fallback', dtcg: null, warnings: ['dembrandt failed: ...', 'Fallback extraction unimplemented...']`.

### MAJOR — `@figma/code-connect` detected but never used as a token source

`src/core/context-detect.ts:104` notices `@figma/code-connect` in devDependencies and uses it **only** as a heuristic for persona=J. There is no follow-up action like "scan `figma.config.json` / `*.figma.tsx` files for component bindings" — which is exactly what code-connect provides (component → Figma node mapping that is locally readable, no token needed). This is a missed extraction opportunity that is *strictly available offline*. As J I notice this immediately: "you knew I had code-connect, why didn't you parse the config?"

**Verdict:** Master has no live Figma path. The architecture has a stub branch (`URL_EXTRACT`), a generic web-DOM extractor (dembrandt), and a persona heuristic — none of these compose into "process a Figma URL." This is the central missing functionality for persona J.

---

## Step 3 — Fallback to catalog matching when extraction fails

`skills/omd-harness/SKILL.md:60-103` describes the catalog fallback. It is reasonably robust (loads `reference-fingerprints.json`, scores keyword/brand/category, shows top-5). The 67-entry fingerprints file is intact (verified — `grep -c '"id"' = 67`, `airbnb`/`apple`/etc present with `tone_keywords`, `visual_theme`, `antipatterns`).

But the fallback has **no Figma-specific branch**. The skill does not say "if URL is figma.com and extraction returns null, ask the user to paste a screenshot OR provide the Figma PAT OR point at the local `figma.config.json`." It just degrades to "pick a catalog reference" — which to J feels insulting (*"I gave you my actual design system; you handed me a list of other companies"*).

There is also a perverse incentive: `data/reference-fingerprints.json:6` lists a `figma` reference id, and `web/references/figma/DESIGN.md` exists. The catalog scorer will likely surface `figma` as a top match given the Figma URL keyword — i.e., the system will recommend Figma's own brand DS *as a substitute for the user's Figma file*. That is wrong-shaped: J shared their own design source, not a request to imitate Figma.com.

**Verdict:** Catalog fallback exists and works mechanically, but the *semantics* on a Figma URL is misleading. MAJOR.

---

## Step 4 — Long thoughtful answer ("저는 spacing scale로 8pt grid 쓰고, type ramp는 modular 1.25 비율로...")

### J classification — works (with caveats)

`src/core/signal-classifier.ts:126-134`:
- `isLongAnswer = wordCount >= 18 || charCount >= 80` — my Korean prose is ~30+ chars per clause; will trigger
- `designVocab` regex (line 127) includes `spacing|hierarchy|호흡|여백|간격|위계` — "spacing scale", "type ramp", "modular 1.25" → **only `spacing` matches**. "type ramp" / "modular scale" / "8pt grid" are NOT in the regex. "ramp" / "grid" / "scale" / "modular" / "ratio" all absent.
- One match is sufficient (regex.test returns true), so `personaSignal = 'J'` will fire — *if* `isLongAnswer` is true. With my example (~30 Korean chars first clause, ~80+ total) it should flip to J.

But notice: the regex misses the **most distinctively J vocabulary** (8pt grid, modular scale, type ramp, line-height, leading, tracking, x-height, kerning, optical adjustment). A Junior who *only* uses these terms (without `spacing`, `padding`, `margin`, `호흡`, `여백`, `위계`) will be misclassified as `unclear` or even `S` (if they say `원칙` or `prefer`). The vocab list is partial.

### Pacing adjustment — partially works

`agents/omd-master.md:103-108` (RULE 4 Mirror & mode):
- ≥ 20 words → respond 50-80 words, prose with options
- Korean colloquial → respond Korean colloquial

J signal does NOT change probe count — `omd-master.md:109-110` (RULE 5) sets J cap = 12 turns. So "wants 10-15 turn depth" is *partially* honored: 12 cap is in the J ballpark but trims the upper end. There's no instruction to *increase depth of each probe* (e.g., "if J: ask about modular ratio explicitly, ask about token naming convention, ask about elevation system"). The probes remain the same generic audience/tone/anti slot as for V.

### MAJOR — no J-specific question library

The slot definitions (`omd-master.md:69-89`) are persona-agnostic. A Junior wants questions like "8pt or 4pt base?", "type scale ratio?", "do you want me to honor your existing radius scale or propose one?". None of these exist. Master will ask `audience` / `tone_seed` — exactly what V/F get. As J I will read this as the system not knowing what to do with my depth.

**Verdict:** Classification fires (luckily), but pacing/depth payoff is thin. MAJOR.

---

## Step 5 — Plan emit: does OMD-PLAN.md respect my taste signals?

`src/core/plan-emitter.ts:10-25` defines `PlanInputs`. Notable absences for J:

- No `spacing_scale` field (my 8pt grid)
- No `type_scale_ratio` field (my 1.25 modular)
- No `radius_scale` field
- No `elevation_system` field
- No `extracted_tokens` field — even if `extractUrl()` had returned a `dtcg` blob, there is **nowhere in `PlanInputs` to put it**. The plan would not surface palette/typography/depth from the URL extraction. `plan-emitter.ts:56-65` (§3 Reference & Tone) only accepts `reference_id`, `reference_url` (URL string), `tone_seed`, `reference_urls[]`. The OMD-PLAN section emits the URL as a one-liner, not as a structured token table.

`plan-emitter.ts:128-132` writes a hidden HTML comment with `persona_signal` — internal only, never surfaces to the user. Plan is identical for J vs V vs F vs S except for that comment. The comment promises adaptation that the file does not deliver.

### MAJOR — fabrication risk

If master *did* run dembrandt on the Figma URL and got `dtcg: null`, but then drafted a plan with "tone_seed: editorial-warm" by guessing from the URL slug, that violates `omd-master.md:303-304` rule "Never fabricate §11–13 facts." There is no guard in `plan-emitter.ts` ensuring `tone_seed` traces to either an actually-extracted token or a user-stated keyword. As J I will catch this on read — and reject.

**Verdict:** Plan ignores extracted tokens (because there's no schema for them) and ignores design-vocab depth I shared. The plan is shaped for V, not J. MAJOR.

---

## Step 6 — ui-junior generates wireframes — do they cite tokens correctly?

`agents/omd-ui-junior.md:43-71` mandates `## Tokens cited` with `§<n>` references and rule on line 121: "Never introduce a token not in DESIGN.md."

This is solid IF DESIGN.md has tokens. But in J's flow, DESIGN.md does not yet exist (Phase 5 generates it via `omd init prepare --ref <id>`). The only `<id>` that can be passed is a **catalog reference id** (because URL extraction failed, see Step 2). So the Phase 5 patch will populate §2/§3 with, e.g., Toss Blue `#3182f6` from the toss reference — *not* from my Figma file.

`omd-ui-junior.md:39` example wireframe even hard-codes `Toss Blue (#3182f6)` as the example. Junior will read my Figma palette as irrelevant. The wireframes will cite tokens correctly *to a DESIGN.md that contains the wrong tokens*.

There is no rule like "if user provided a Figma URL, before Phase 5 emit, confirm token table matches user's source." Phase 5 has a mandatory gate (`omd-master.md:219`) — but as J I'd have to spot the mismatch in the patch myself.

**Verdict:** Citation discipline is fine. The upstream substitution of catalog tokens for Figma tokens is what bites. CRITICAL because it pretends to know my design system while citing someone else's.

---

## Step 7 — microcopy — is §10 Voice respected from my Figma extraction?

`agents/omd-microcopy.md:21-23` reads §10 Voice from DESIGN.md. §10 in the catalog-matched DESIGN.md will be the *catalog reference's* voice fingerprint (e.g., toss `voice_fingerprint.register = "trustworthy-neutral"` — see `data/reference-fingerprints.json`). Not mine.

`agents/omd-microcopy.md:54-58` Korean rules ("Honorific level follows §10 — never mix") would apply that catalog register strictly. If I am J building a playful internal tool, but caught the toss reference fallback, I'll get formal honorific microcopy with "송금하기" archetypes. The microcopy agent has no path to read tone signals from a Figma file's text-style names (which often encode voice — e.g., `display/serious` vs `display/playful`).

There is no §10 Voice extraction from URL in `url-token-extractor.ts` either — the extractor maps DTCG to §1/§2/§3/§6 only (`url-token-extractor.ts:139-149`), with `section_7_dos_donts: '[user fills]'` and no §10. So even on the happy path, voice never propagates from the URL.

**Verdict:** Microcopy rigor is high *within* the §10 it sees, but §10 it sees is the catalog substitute, not mine. MAJOR.

---

## Cross-cutting findings

### CRITICAL
1. **Figma URL handling is a stub.** `omd-master.md:56` lists `URL_EXTRACT` as a branch but nothing implements it; `url-token-extractor.ts` only knows dembrandt (Playwright DOM scraper) which cannot see Figma file canvases without the Figma REST API + token. (`agents/omd-master.md:56`, `src/core/url-token-extractor.ts:47-89`)
2. **`@figma/code-connect` detected but unused as a token source.** Persona heuristic only. No parser for `figma.config.json` / `*.figma.tsx` bindings, which would be the offline win. (`src/core/context-detect.ts:104-107`)
3. **Catalog fallback is semantically wrong on a Figma URL.** Will likely top-rank the `figma` catalog reference (Figma.com's own DS) as a substitute for the user's Figma file. (`skills/omd-harness/SKILL.md:76-83` + `data/reference-fingerprints.json` containing `figma` id)
4. **`PlanInputs` schema has no slot for extracted tokens.** Even if extraction worked, the plan cannot surface palette/typography/depth structurally — only as a URL string. (`src/core/plan-emitter.ts:10-25`)

### MAJOR
5. **`signal-classifier` designVocab regex misses core J vocabulary.** `8pt grid`, `type ramp`, `modular scale`, `tracking`, `leading`, `line-height`, `x-height`, `radius scale`, `elevation` not present. (`src/core/signal-classifier.ts:127`)
6. **No J-specific question library.** Slot table is persona-agnostic; J gets the same `audience`/`tone_seed` probes as V. (`agents/omd-master.md:69-89`)
7. **`personaSignal` written to plan as HTML comment only** — promises adaptation that the rendered plan doesn't deliver. (`src/core/plan-emitter.ts:128-132`)
8. **Phase 5 patch will cite catalog tokens as if they were user's.** No "user's source confirms token table" gate before patch. (`agents/omd-master.md:219`, `agents/omd-ui-junior.md:39`)
9. **Microcopy §10 Voice never propagates from URL.** `dtcgToOmdPreview` maps §1/§2/§3/§6 only; §7/§8/§10 marked `[user fills]` / `[needs ...]`. (`src/core/url-token-extractor.ts:139-149`)
10. **`reference-fingerprints.json` voice_fingerprint is sometimes null** (e.g., airtable, line 40) — so microcopy via catalog may have nothing to cite; agent-side handling unclear (`omd-microcopy.md:62-64` says halt if §10 missing, but doesn't address nullish fingerprint).

### MINOR
11. `agents/omd-master.md:283-296` trace example dated `2026-04-28` — fine, but cosmetic.
12. `src/core/visual-anchor.ts:36-80` ASCII variant `C-airy` line 71 has trailing-whitespace asymmetry (`(water)     │` vs siblings) — purely cosmetic.
13. `omd-microcopy.md:64` typo-ish: "Run omd init Phase 4.5" — there is no documented Phase 4.5 in `omd-master.md` (Phase 4 → Phase 5).
14. `omd-master.md:307` "Never invent reference ids — only the 67 in `reference-fingerprints.json` are valid" — verified count is 67. Good. But no analogous rule for "never invent tokens from a URL extraction that returned null."

### Design-vocab nits I'd call out as J
- `agents/omd-microcopy.md:50` lists `"seamless", "powerful", "robust", "delightful"` as forbidden marketing fluff — agree, but `delightful` is contested (commonly used by mature DS docs e.g. Material). Minor; not a vocab error per se.
- `data/reference-fingerprints.json:11` describes Airbnb as `"warm, photography-forward"` with `tone_keywords: ["warm", ...]` — consistent with #ff385c Rausch. No "warm-applied-to-cool-palette" error caught in the spot-checks I did. Good.

---

## Verdict

**REJECT.** The advertised entry point (`/omd-harness <figma-url>` against a Next.js + `@figma/code-connect` repo) is the highest-value scenario for persona J — and it is the worst-served path in the system. URL_EXTRACT is a stub; the only extractor (dembrandt) cannot see Figma files; code-connect bindings are detected but discarded; catalog fallback semantically substitutes someone else's brand DS for mine; PlanInputs has no schema for extracted tokens; J vocabulary is half-present in the classifier; downstream Phase 5/6/7 will cite catalog tokens as if they were mine. As J I would close the terminal at Phase 5 patch review.

**To unblock J:** (1) implement a `figma:` URL branch using the Figma REST API + `FIGMA_TOKEN` env var, (2) implement a `figma.config.json` / code-connect parser as a no-token offline path, (3) extend `PlanInputs` with a `extracted_tokens` block, (4) extend `designVocab` regex with `8pt|4pt|grid|ramp|modular|leading|tracking|line.height|x.height|radius.scale|elevation`, (5) add J-tier slot questions (base unit, type ratio, radius scale, elevation system) gated on `inferred_persona_signal === 'J'`, (6) add a Phase 5 pre-patch gate that diffs proposed §2/§3 tokens against any user-provided source.

The catalog/system below the URL layer (67 fingerprints, ui-junior token discipline, microcopy §10 enforcement, plan-as-file pattern) is genuinely good — it just doesn't reach J because Step 2 fails.
