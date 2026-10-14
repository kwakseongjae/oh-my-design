# ui-skills.com listing — PR draft (not submitted)

Prepared 2026-10-14 on `feat/referral-1`. **Do not open this PR or fork the repo yet.** It posts publicly
under the owner's GitHub account, and the main session confirms with the owner first.

## Preconditions (check before submitting)

1. `feat/referral-1` is merged to `main`. The entries below use `name: omd-feel` / `omd-cjk-type-shader`.
   On `main` today `skills/omd-feel/SKILL.md` still says `name: omd:feel`, and ui-skills reviewers check
   that "frontmatter matches the registry entry" (voiys PR #90). The install line
   `npx skills add kwakseongjae/oh-my-design --skill omd-feel` also only resolves after the rename:
   the skills CLI matches `--skill` exactly against frontmatter `name`.
2. Re-check that each `rawUrl` returns 200 (all four did on 2026-10-14: `omd-feel/SKILL.md`,
   `omd-feel/reference.md`, `omd-cjk-type-shader/SKILL.md`, `omd-apply/SKILL.md`).
3. Registry format read at ibelick/ui-skills `c628a59177` (2026-10-14). Re-read
   `src/data/registry.ts` and `AGENTS.md` before submitting in case the shape changed.

## Their rules (from ibelick/ui-skills `AGENTS.md` and accepted PRs)

- Add skills in `src/data/registry.ts` only. Fill `slug`, `user`, `repo`, `rawUrl`, `githubUrl`,
  `name`, `description`, `topics`. `files` lists extra markdown files beside `SKILL.md`.
- Topics come from the `TopicSlug` union. A new topic only when it is a core topic (also update
  `TopicSlug`, `topicsBySlug`, `relatedTopicSlugs`, `primaryDesignTopicSlugs`). There is no CJK,
  Korean or i18n topic, so these entries use existing topics and do not propose one.
- Curated, no bulk import. Once a publisher is listed, `npm run check:publisher-skills` reports
  their new skills weekly, so later OmD skills (e.g. `hangul`) are reviewed without a new PR.
- Third-party PRs that were accepted or are open in good shape touch two files:
  `src/data/registry.ts` and `src/data/agent-skills-digests.json` (`npm run digests`), and quote
  `npm run typecheck`, `npm test`, `npm run check:digests`, `npm run check:skills`.
- No `omd-*` slug exists in the registry (397 entries checked), so no collisions.

## Which skills, and why these

| Skill | Fit | Submit? |
|---|---|---|
| `omd-feel` | Interface-feel rules with numbers and sources. Inherits Jakub Krehel's make-interfaces-feel-better, which ui-skills already lists (`craft`, `interaction`, `visual`). Its 113 rules carry a provenance tier that sets enforcement. | **Yes** |
| `omd-cjk-type-shader` | One shader effect for a CJK display headline; the text stays real DOM text; WebGL2 with static fallback and reduced-motion; English SKILL.md; Apache-2.0 dependency pinned. Nothing in the registry covers CJK typography. | **Yes** |
| `omd-apply` | Applies a project `DESIGN.md` to UI work. Strong idea, but the SKILL.md is Korean-first, 433 lines, and routes to OmD's own specialist roles, so it reads as part of a harness rather than a standalone skill. | Optional, second PR |
| `omd-restraint` | Not in `skills/` on any branch as of 2026-10-14. | No |
| `hangul` | Untracked in the owner's checkout, not on `main`. Strongest CJK candidate; the weekly publisher audit picks it up once it ships. | Later |

Risk to state honestly in the PR: `omd-feel/SKILL.md` mixes Korean and English (its `reference.md`
and `provenance.md` are English). If the reviewer wants English-only, an English `SKILL.md` body is a
small follow-up on our side, not a reason to change the entry.

## Exact registry entries

Append inside `registrySource` (they group by publisher; a new publisher goes at the end):

```ts
  {
    slug: "omd-feel",
    user: "kwakseongjae",
    repo: "oh-my-design",
    rawUrl:
      "https://raw.githubusercontent.com/kwakseongjae/oh-my-design/main/skills/omd-feel/SKILL.md",
    githubUrl:
      "https://github.com/kwakseongjae/oh-my-design/blob/main/skills/omd-feel/SKILL.md",
    files: ["reference.md", "provenance.md"],
    name: "omd-feel",
    topics: ["craft", "interaction", "motion", "accessibility"],
    description:
      "Apply or audit interface feel with 113 numeric rules across 17 axes (motion timing, easing, concentric radius, tabular numbers, 44px targets, focus rings, reduced motion), each tagged by source tier so spec rules block and opinions only suggest.",
  },
  {
    slug: "omd-cjk-type-shader",
    user: "kwakseongjae",
    repo: "oh-my-design",
    rawUrl:
      "https://raw.githubusercontent.com/kwakseongjae/oh-my-design/main/skills/omd-cjk-type-shader/SKILL.md",
    githubUrl:
      "https://github.com/kwakseongjae/oh-my-design/blob/main/skills/omd-cjk-type-shader/SKILL.md",
    name: "omd-cjk-type-shader",
    topics: ["typography", "visual", "motion"],
    description:
      "Render a Korean, Japanese or Chinese display headline as sumi ink bleeding into hanji paper while it stays real, selectable text, with a WebGL2 layer, a static fallback, reduced-motion support and a real-GPU verify script.",
  },
```

Optional third entry (separate PR, only if the owner wants it):

```ts
  {
    slug: "omd-apply",
    user: "kwakseongjae",
    repo: "oh-my-design",
    rawUrl:
      "https://raw.githubusercontent.com/kwakseongjae/oh-my-design/main/skills/omd-apply/SKILL.md",
    githubUrl:
      "https://github.com/kwakseongjae/oh-my-design/blob/main/skills/omd-apply/SKILL.md",
    name: "omd-apply",
    topics: ["systems", "visual", "color"],
    description:
      "Read the project's DESIGN.md before any UI change and use only its tokens for components, color, type and spacing, treating unknown values as absent instead of inventing them.",
  },
```

Fact check for the descriptions (all from the skill files on this branch):
- `omd-feel`: "17축·113규칙", tier table SPEC/DS → BLOCK, CONV → WARN, OP/FOLK → FYI, distribution
  SPEC 61 · DS 24 · CONV 19 · OP 7 · FOLK 2 (`skills/omd-feel/SKILL.md` §0). Axes named in the
  frontmatter description.
- `omd-cjk-type-shader`: frontmatter description and §3, §5, §6, §7 (real DOM text, WebGL2 via
  `@paper-design/shaders` 0.0.81, Apache-2.0, static fallback, `prefers-reduced-motion`, `scripts/verify.mjs`).
- `omd-apply`: AGENTS.md "OmD apply" rules (cite only DESIGN.md tokens) and the hard rule "unknown means
  absent".

Install commands (verified against vercel-labs/skills: `--skill` is exact-match on frontmatter `name`):

```bash
npx skills add kwakseongjae/oh-my-design --skill omd-feel
npx skills add kwakseongjae/oh-my-design --skill omd-cjk-type-shader
```

## PR title

```
Add omd-feel and omd-cjk-type-shader from kwakseongjae/oh-my-design
```

## PR body

```markdown
Adds two skills from [oh-my-design](https://github.com/kwakseongjae/oh-my-design) to the registry.

**omd-feel** turns interface feel into numbers you can check: 113 rules across 17 axes (motion timing, easing, concentric radius, tabular numbers, 44px targets, focus rings, reduced motion). Every rule carries a source tier, and the tier sets how hard it is enforced: WCAG/HIG/design-system-token rules block, practitioner conventions warn, single opinions only suggest. It builds on Jakub Krehel's make-interfaces-feel-better, which is already listed here. The full rule table is in `reference.md` and the sources in `provenance.md`, both listed under `files`.

**omd-cjk-type-shader** is one effect for Korean, Japanese and Chinese display headlines: sumi ink bleeding into hanji paper. The heading stays real, selectable DOM text from the first frame; a WebGL2 layer (`@paper-design/shaders` 0.0.81, Apache-2.0, pinned) adds the ink. It ships a static fallback, respects `prefers-reduced-motion`, and includes a `verify.mjs` that checks on a real GPU that the text stays selectable. I couldn't find anything in the registry for CJK typography, so this fills that gap without adding a topic.

- Entries use existing topics: `craft`, `interaction`, `motion`, `accessibility` for omd-feel; `typography`, `visual`, `motion` for omd-cjk-type-shader.
- `name` matches each SKILL.md's frontmatter, and `npx skills add kwakseongjae/oh-my-design --skill <name>` installs it.
- Includes the digests for both skills.

One note: omd-feel's `SKILL.md` is partly in Korean (the rule table and provenance files are English). If you'd prefer an English-only entry point, I can ship an English `SKILL.md` upstream.

## Validation

- `npm run typecheck`: <fill in at submission>
- `npm test`: <fill in>
- `npm run digests` and `npm run check:digests`: <fill in>
- `npm run check:skills`: <fill in; note pre-existing upstream 404s separately>
- Both `rawUrl`s return HTTP 200 and their frontmatter `name` matches the entry.
```

## Submission steps (for whoever submits, after owner GO)

1. Fork ibelick/ui-skills, branch `add-oh-my-design-skills`.
2. Paste the two entries into `src/data/registry.ts`.
3. `npm install && npm run digests` → commit the `src/data/agent-skills-digests.json` change.
4. Run `npm run typecheck`, `npm test`, `npm run check:digests`, `npm run check:skills`; put the real
   numbers in the Validation section. Do not leave the placeholders.
5. Open the PR with the title and body above.
