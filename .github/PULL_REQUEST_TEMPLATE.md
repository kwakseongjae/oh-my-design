<!--
Thanks for contributing to oh-my-design!
Fill the sections that apply. Delete the rest.
The type selector at top helps reviewers skim — please check one.
-->

## Type

- [ ] **New reference** — `references/<brand>/DESIGN.md` for a brand not yet covered
- [ ] **Philosophy Layer** — OmD v0.1 sections 10–15 added to an existing reference
- [ ] **Reference update** — correcting facts, tokens, or screenshots in an existing reference
- [ ] **Spec change** — modifying `spec/omd-*.md`
- [ ] **Bug fix** — fixing a regression or incorrect behavior
- [ ] **Feature / enhancement** — adding or improving functionality
- [ ] **Chore / infra** — CI, tooling, build config, dependencies, cleanup
- [ ] **Docs** — README, contributing guide, spec clarifications
- [ ] **Other** — please describe below

## Summary

<!-- 1–3 sentences. What does this PR do, and why? -->

## Test plan / screenshots

<!--
- For code changes: what did you test? Paste commands or list flows.
- For UI changes: screenshots or short screen recording.
- For content changes: N/A is OK.
-->

---

<!--
Per-type checklists below. Fill the one that matches. Delete the rest.
-->

### New Reference

**Brand:** <!-- e.g. Toss, Stripe -->  
**Category:** <!-- AI/LLM, Fintech, Dev Tools, Consumer Tech, etc. -->  
**Country:** <!-- for the builder's country filter -->  
**Official design / brand page (if public):** <!-- URL, or "N/A" -->

Sections 1–9 (Google Stitch base — **required**):

- [ ] 1. Visual Theme & Atmosphere — 2–3 paragraphs + Key Characteristics
- [ ] 2. Color Palette & Roles — **descriptive name + exact hex** for every color
- [ ] 3. Typography Rules — font stack, hierarchy table, principles
- [ ] 4. Component Stylings — buttons, cards, inputs, nav, overlays
- [ ] 5. Layout Principles — spacing scale, grid, radius scale, whitespace philosophy
- [ ] 6. Depth & Elevation — shadow system with values
- [ ] 7. Do's and Don'ts — explicit hard constraints
- [ ] 8. Responsive Behavior — breakpoints, touch targets, image rules
- [ ] 9. Agent Prompt Guide — quick color ref, example prompts, iteration guide

Sections 10–15 (OmD v0.1 Philosophy Layer — recommended, skip if out of scope).

**Sources** — list URLs used to verify tokens, type stack, and brand philosophy. Reviewers spot-check.

---

### Philosophy Layer

**Brand being upgraded:** <!-- e.g. Line, Anthropic -->

- [ ] YAML frontmatter has `omd: 0.1` and `brand: <name>`
- [ ] Section 10 — Voice & Tone (voice prose + tone table + forbidden phrases)
- [ ] Section 11 — Brand Narrative (under 200 words)
- [ ] Section 12 — Principles (5–10 first-principles rules)
- [ ] Section 13 — Personas (2–4 concrete sketches with name, context, quote)
- [ ] Section 14 — States (empty / loading / error / skeleton / success)
- [ ] Section 15 — Motion & Easing (named durations + easings + ≥1 signature motion)

**Sources for philosophy claims** — interviews, blog posts, press kits, founder writing. Personas and narrative must trace back to sources; reviewers reject invented material.

---

### Spec change

**Target version:** <!-- v0.1.1 (patch), v0.2 (minor), v1.0 (major) -->

- [ ] Patch or minor bump (follow versioning policy in `spec/omd-v0.1.md` §6)
- [ ] Major bump — discussion issue opened first: <!-- link -->
- [ ] Migration guide for existing files (if breaking)
- [ ] JSON Schema reflects the change (if section names changed)

---

### Bug fix

- [ ] Steps to reproduce are in the PR description
- [ ] Root cause identified (not just the symptom)
- [ ] Regression test added where practical
- [ ] `npm test` passes
- [ ] Manually verified fix (describe in Test plan)

---

### Feature / enhancement

- [ ] `npm test` passes; new tests added for new behavior
- [ ] Builder runs (`npm run dev` in `web/`) and the feature works end-to-end
- [ ] Screenshots or recording for UI-visible changes
- [ ] No new runtime dependencies, or justification in Summary
- [ ] No secrets / keys / `.env` accidentally committed
- [ ] If this touches `export-panel.tsx`, `generate-css.ts`, or `applyOverridesToMd`: verified at least one existing reference still exports a valid DESIGN.md

---

### Chore / infra

- [ ] No behavior change to builder output (confirmed by diffing an export)
- [ ] CI still green

---

### Docs

- [ ] Links resolve
- [ ] README change applied to all 4 language variants (`.md`, `.ko.md`, `.ja.md`, `.zh-TW.md`) — or a note on why not
- [ ] Spelling / grammar pass

---

## Final checklist (all PRs)

- [ ] PR title is descriptive (e.g. `Add Line DESIGN.md v0.1`, not `update`)
- [ ] Commit history is clean (squash fixup commits if noisy)
- [ ] I'm OK with this PR being MIT-licensed per repo license
- [ ] If this adds content about a brand I don't work at, it is based on public sources only

<!--
Anti-slop policy: PRs that claim a brand uses Inter/Roboto/Arial without citation, or include invented personas/narrative, will be sent back for sources. See spec/omd-v0.1.md for the full rationale.
-->
