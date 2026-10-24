# Skills

You don't call these by name. Ask for the outcome ("set up our design system",
"make this feel better", "why does this look AI-made?") and the agent picks the
skill. Each name links to the `SKILL.md` the agent reads.

## DESIGN.md

- **[omd-init](../../skills/omd-init/SKILL.md)** — Starts your project's DESIGN.md from a
  company in the archive that fits your product. It keeps that company's tone,
  asks before deciding anything about your product, and points `CLAUDE.md`,
  `AGENTS.md` and the Cursor rule at the result.
- **[omd-apply](../../skills/omd-apply/SKILL.md)** — Every UI change answers to DESIGN.md,
  including the vague ones like "make it warmer".
- **[omd-autopilot](../../skills/omd-autopilot/SKILL.md)** — One prompt to a built, checked
  screen. It decides whether you need a design system first, asks at most one
  batch of questions, then builds the real page and verifies it.

## Frontend, CJK first

- **[omd-humanize](../../skills/omd-humanize/SKILL.md)** — Edits product copy in Korean,
  English, Japanese and Chinese (Simplified and Traditional) until it reads like
  someone local wrote it. Facts, numbers, commands and links stay put.
- **[omd-cjk-type-shader](../../skills/omd-cjk-type-shader/SKILL.md)** — A Korean, Japanese
  or Chinese display heading that reads as sumi ink soaking into hanji, with
  Japanese line-start rules and phrase-aware breaks. The heading stays real,
  selectable text.
- **[omd-feel](../../skills/omd-feel/SKILL.md)** — Interface details with numbers attached:
  motion timing, easing, tap targets, focus rings, tabular figures. 113 rules,
  each graded by where it came from; builds on Jakub Krehel's
  make-interfaces-feel-better. Apply them, or audit against them.
- **[omd-restraint](../../skills/omd-restraint/SKILL.md)** — "Make it simpler", measured. One
  focal point with at least twice the area of the next, five pieces or fewer on
  the first screen, one accent. Audits the rendered page on desktop and mobile,
  or cuts until it passes.
- **[omd-slop-audit](../../skills/omd-slop-audit/SKILL.md)** — Finds what makes a screen look
  generated (card walls, icon tiles, gradients with no brand reason, abstract
  copy) and cites a rule ID and a line for each.
- **[omd-landing](../../skills/omd-landing/SKILL.md)** — A scroll-native one-page landing:
  concept, composition, assets and scroll choreography, all from your DESIGN.md.
- **[omd-shader-hero](../../skills/omd-shader-hero/SKILL.md)** — A full-bleed hero in two inks
  from your DESIGN.md colors. Ordered dither, so the inks never mix into mud, and
  the headline's contrast is measured rather than assumed.

## Install one

```bash
npx skills add kwakseongjae/oh-my-design --skill omd-feel
```

`npx oh-my-design-cli@latest` installs all of them, along with the internal
skills the workflows call on their own (preference loop, shim sync, review and
writing roles, live capture), the specialist sub-agents and the reference
catalog. Internal skills aren't listed here. They work without being asked.

What each agent receives (Cursor gets the portable skills, without sub-agents
or hooks) is in [Install](install.md).
