# oh-my-design CLI v2 — activation and growth strategy

## Product sentence

> Verified reference → portable `DESIGN.md` → real product UI → repeatable verification.

The CLI is the bootstrapper and health check. It is not a second design app and it does not generate a result without the user's coding agent. Its job is to install the verified context and workflows that make the next natural-language product request materially better.

## What the research changes

Primary-source review:

- [Taste Skill docs](https://www.tasteskill.dev/docs) reduce activation to one sentence, one install command, copyable prompts, and visibly different style outcomes.
- [Impeccable getting started](https://impeccable.style/tutorials/getting-started/) turns design critique into a shared human/AI vocabulary and a repeatable browser iteration loop.
- [Impeccable repository](https://github.com/pbakaus/impeccable) pairs agent skills with deterministic detectors instead of relying on a prompt alone.
- [Next.js getting started](https://nextjs.org/docs/app/getting-started) organizes documentation around tasks, persistent navigation, and copyable commands rather than an internal package inventory.

OmD should not imitate their visual style or overstate one-shot generation. It should combine their low-friction activation with OmD's defensible advantage: versioned reference evidence, an owned `DESIGN.md`, real product-route validation, and the rule that unknown brand facts remain absent.

## First 60 seconds

1. User sees three outcomes before seeing a skill list: create a system, ship a surface, rescue an existing UI.
2. User copies `npx oh-my-design-cli@latest`.
3. Installer detects the channel and explains exactly what that channel receives.
4. User restarts the coding agent and runs `npx oh-my-design-cli@latest doctor`.
5. User copies one product prompt, not another opaque CLI command.
6. Activation is complete only when a real surface changes, `DESIGN.md` exists, and the product route has been checked.

## Documentation information architecture

The localized web routes are identical in English, Korean, Japanese, Simplified Chinese, and Traditional Chinese (Taiwan):

| Route | User question |
|---|---|
| `/docs/<locale>` | What result can this produce, and why is it different? |
| `/docs/<locale>/getting-started` | What do I run in the next five minutes? |
| `/docs/<locale>/workflows` | What prompt should I copy for my goal? |
| `/docs/<locale>/demo` | How do I run a truthful 5-, 15-, or 30-minute live demo? |
| `/docs/<locale>/skills` | What explicit controls exist when I need them? |
| `/docs/<locale>/showcase` | What working result exists, what was controlled, and how can I inspect its evidence? |
| `/docs/<locale>/troubleshooting` | What failed, and what is the next action? |
| `/docs/<locale>/ai` | What stable source should my agent read? |

The npm package also ships `docs/CLI_QUICKSTART.md`, so installation and recovery do not depend on the website being available.

## Live demo format

Use one repository, one visible problem, and one protected behavior. Do not begin with the skill inventory.

### Demo brief

- Starting point: a functional but generic onboarding, checkout, or dashboard.
- Protected contract: routes, field names, product copy, and data behavior remain unchanged.
- Design input: one verified OmD reference plus the project's existing brand assets.
- First prompt: set up or reconcile `DESIGN.md` and show the proposed delta before writing.
- Second prompt: improve one complete surface and include critical states.
- Final prompt: run interface-feel, accessibility, and real-route verification.

### What the audience sees

1. Before screen and its concrete problems.
2. The exact prompt copied from the docs.
3. Proposed `DESIGN.md` decisions, including intentionally absent unknowns.
4. Working UI on the real route.
5. A compact verification report and changed-file list.
6. One correction recorded as a durable project preference.

Record the prompt, input commit, output commit, elapsed time, changed files, checks, and any human correction. A showcase without those fields is inspiration, not reproducible proof.

## Acquisition and activation loop

```text
Search / social proof
  → localized outcome page
  → install copy
  → doctor complete
  → first product prompt copied
  → DESIGN.md created
  → real route verified
  → reproducible case shared
  → next qualified user
```

Measure the loop with existing/new events:

- `act_install_copy {surface: docs}`
- `cli_locale_change {from,to,page}`
- `cli_recipe_copy {kind,surface: docs}`
- doctor state distribution from opt-in CI examples or issue templates
- repository-level case manifest count
- docs → Builder click-through, kept separate from CLI activation

North-star activation is not npm downloads. It is a user who installs, reaches a truthful doctor state, creates or adopts `DESIGN.md`, and verifies one real product surface.

## Execution queue after this release

1. Run the now source-verified Codex role schema in a clean external fixture and publish one complete current-version harness checkpoint trace; channel installation and role discovery are proven, but the full v1.9 harness experience still needs a public end-to-end trace.
2. Keep Applepresso as the disclosed controlled new-product case, then publish two current-version cases: an existing-page rescue and a user-preference correction. Each must include the same prompt/input/output/validation/limitations manifest and distinguish initial generation time from later presentation editing.
3. Add a browser playground that edits a disposable example repository, not a fake visual-only sandbox.
4. Expose versioned Markdown equivalents for each docs route and link them from the localized `llms.*.txt` indexes.
5. Add a channel capability matrix sourced from installer tests so documentation cannot drift from what Claude Code, Codex, OpenCode, and Cursor actually receive.
6. Test two live-demo openings: result-first before/after versus evidence-first reference selection. Optimize for verified first-surface completion, not copy clicks alone.

## Release gates

- Bare install reaches the interactive installer.
- Invalid channels fail loudly.
- Installer upgrades never delete user hooks or private reference folders.
- `doctor` distinguishes not installed, incomplete, missing `DESIGN.md`, and ready.
- All 40 localized routes build with canonical/hreflang metadata.
- Copyable natural-language prompts are not rendered as shell commands.
- Home retains overlay-only scroll affordance without reserving a gutter.
- Home → `/builder` → reference selection → preview still passes on desktop and mobile.
- No claim implies that the CLI itself generated an unrelated UI or that every channel supports the same agent features.
