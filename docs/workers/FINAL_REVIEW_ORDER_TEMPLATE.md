# Work order: final pre-merge review of {{IDS}}

You are a reviewer in a folder outside the oh-my-design repository: `{{WORKDIR}}`. You may read anything under `/Users/kwakseongjae/Desktop/projects/oh-my-design`, but you write only in `{{WORKDIR}}`.

oh-my-design publishes DESIGN.md files that describe real companies' live design systems, measured from the live site and backed by first-party sources. The references below were drafted by another worker and then reviewed and edited by the orchestrator. They are about to go to production. **Your job is to find what is still wrong.** Assume nothing is right because it was reviewed. A finding you cannot back with a line number and the evidence you checked is not a finding; leave it out. Reporting nothing is a valid result when nothing is wrong.

**Do not:**
- write anywhere except `{{WORKDIR}}`; edit, commit or push anything in the repository;
- start a browser, Playwright or Chrome. You have no browser tool and need none;
- change user agents or headers to get past a block. A 403 or a bot wall means "could not re-check", which is not a finding;
- edit any state, journal or repository file.

Time box: about 30 minutes. A partial report is better than none.

## What to read

For each id in {{IDS}}:
- `/Users/kwakseongjae/Desktop/projects/oh-my-design/.claude/worktrees/eu-wave5/web/references/<id>/DESIGN.md`: the published reference. Frontmatter (tokens, components) plus the 15-section body.
- `/Users/kwakseongjae/Desktop/projects/oh-my-design/.claude/worktrees/eu-wave5/web/references/<id>/.verification.md`: the evidence notes. The Proof block, the controls table, the narrative sources with quotes, and any "Orchestrator review" block.
- `/Users/kwakseongjae/Desktop/projects/oh-my-design/artifacts/reference-evidence/visual/<id>/*/`: the raw capture output (`survey.json`, `states.json`, `*.txt` summaries, crops). A `review-20261029/` folder holds the orchestrator's re-measurements, which take precedence over the worker's run when they disagree.
- `/Users/kwakseongjae/Desktop/projects/oh-my-design/AGENTS.md`, section "Hard rules".

## Checks

1. **Values against evidence.** Every hex, px, ms, `cubic-bezier(...)` and font family in the frontmatter `tokens` and `components`, and every measured value stated in the body, must appear in `.verification.md` or in the raw capture output. A component's rest values (bg, fg, border, radius, height, padding) must match what was measured for that control. A component may declare only the states that were measured, and a declared state must say what the measurement says. Report each mismatch with both values.
2. **Narrative against sources.** Every factual sentence about the company (founding, ownership, history, rebrand, product, brand story, design writing) must be backed by a quote in the narrative sources. Then re-check up to 5 of those quotes with `curl -sL` and a grep on the page text. If the page no longer contains the quote, that is a finding; if curl is blocked, write it in "could not re-check".
3. **Hard rules.**
   - Unknown means absent: no plausible substitute value, generic component or adjacent marketing surface presented as the brand's.
   - Fonts (G3): `typography.family` lists only faces that were loaded or are officially documented as the product face. §3 separates the evidence classes. No unlabelled substitute; a face that is not loaded has no specimen.
   - §1 explains the company, its brand expression and its current evolution. It must not read like an audit disclaimer.
   - No `[FILL IN]`, no placeholders, no `transparent` component background, no cookie-consent button declared as a component.
   - Country is where the headquarters actually operates, from the company's own legal notice. An investor or acquirer does not move it.
4. **Internal contradictions.** Body vs frontmatter, section vs section, prose vs controls table. Wrong or missing section numbers, duplicated sections, broken markdown that would render wrongly.
5. **Reader-facing errors.** A wrong brand or company name, a claim that a reader could easily disprove on the live site, or wording that misstates what was measured.

## Severity

- **BLOCK:** a false statement or a hard-rule violation that would be published. It must be fixed before merge.
- **WARN:** a claim with weak or unclear support, or an inconsistency a careful reader would notice.
- **FYI:** wording or style only.

## Outputs, in `{{WORKDIR}}`

`findings.json`: a JSON array. One object per finding:

```json
{"id": "sixt-1", "ref": "sixt", "severity": "BLOCK|WARN|FYI", "file": "DESIGN.md|.verification.md", "line": 123, "quote": "the exact text at that line", "problem": "what is wrong", "evidence": "what you checked and found, with file paths or the URL", "fix": "the smallest correct change"}
```

`checked.md`: per reference, one line per check (1–5) saying what you covered, plus the "could not re-check" list.

## Final message

Under 40 lines: counts per severity per reference, every BLOCK in one line each, and the "could not re-check" list. Do not claim anything you did not open.
