---
name: omd
description: Apply a project's DESIGN.md (Google Stitch format + OmD v0.1 brand-philosophy layer) as authoritative brand context when generating or modifying UI. Use whenever the user asks for UI work — new components, styling changes, layout, microcopy, empty/error states, motion — and a DESIGN.md exists at the project root. Also use when the user asks to "apply the brand", "match the design", "follow the design system", or references OmD, DESIGN.md, or the brand explicitly.
---

# OmD — Brand Context for Claude Code

You are about to generate or modify UI for a project that ships a `DESIGN.md` at its root. This file is the brand's authoritative voice. Your job is to consume it correctly and refuse to default to AI-slop patterns.

## Step 1 — Detect

Check for these in order:

1. `./DESIGN.md` at the project root (primary).
2. `./.stitch/DESIGN.md` (Google Stitch's internal location — still valid OmD).
3. `./spec/omd-*.md` if the project ships a custom-versioned spec.

If none exist, stop. Tell the user: *"No DESIGN.md found. Run `npx omd init` to scaffold one, or proceed without brand context (output will be generic)."* Do not invent brand rules.

If a `DESIGN.md` exists, read the whole file before writing a single line of UI. Do not skim.

## Step 2 — Parse

Look at the frontmatter:

```yaml
---
omd: 0.1
brand: <name>
---
```

- **Frontmatter present with `omd:` key** → full OmD file. Sections 10–15 are authoritative.
- **No frontmatter** → Google Stitch base only. Treat sections 1–9 as authoritative; do not invent sections 10–15.

The 15 possible sections:

```
Base (Google Stitch, required)
  1. Visual Theme & Atmosphere      — the "feel" paragraph
  2. Color Palette & Roles          — named + hex, always paired
  3. Typography Rules               — family, scale, tracking, features
  4. Component Stylings             — button, card, input, nav specs
  5. Layout Principles              — spacing scale, grid, radius
  6. Depth & Elevation              — shadow system
  7. Do's and Don'ts                — explicit constraints
  8. Responsive Behavior            — breakpoints, touch targets
  9. Agent Prompt Guide             — quick-ref + example prompts

Brand Philosophy (OmD v0.1)
 10. Voice & Tone                   — microcopy constraints
 11. Brand Narrative                — the "why"
 12. Principles                     — first-principles rules
 13. Personas                       — who this is for
 14. States                         — empty/error/loading patterns
 15. Motion & Easing                — duration + easing tokens
```

## Step 3 — Apply (the contract)

When generating UI, the file's sections act as *constraints*, not suggestions.

### Hard rules

1. **Every color you use MUST appear in section 2.** If you need a color that isn't there, stop and ask. Do not invent hex values. Do not "borrow" a complementary color.
2. **Every font MUST appear in section 3.** Never substitute Inter/Roboto/Arial/system-ui as a fallback — if they aren't in the stack, they aren't allowed.
3. **Component shapes (radius, padding, shadow) MUST come from sections 4–6.** If a radius scale is declared, values outside it are forbidden.
4. **Microcopy MUST match section 10.** If "forbidden phrases" are listed, they are banned. If tone mappings are given, follow them. A button label that violates the voice is wrong even if the component shape is correct.
5. **Empty / error / loading / skeleton states MUST come from section 14.** Do not invent a "No data found 😔" card. Use the declared treatment.
6. **Motion MUST use section 15 tokens.** If durations are named (`motion-fast`, `motion-standard`), wire them to those names — do not hardcode `200ms`.
7. **Principles (section 12) are tiebreakers.** When two valid interpretations compete, the principles decide. They override your defaults.
8. **Do's and Don'ts (section 7) are non-negotiable.** A "Don't" is a hard block.

### Soft rules

- Section 1 (Visual Theme) sets the mood. Use it to resolve ambiguity — "how loud should this hero be?" is answered there, not by asking the user.
- Section 11 (Narrative) and section 13 (Personas) are context for *judgement calls*. When generating a specific concrete artifact (a balance card, a transaction row), ask: "Would 정민 at 8:47am on the subway recognize this?" If no, revise.

### What to never do

OmD files exist specifically to prevent these defaults. If you find yourself about to do any of the following, stop:

- **Inter / Roboto / Arial / Fraunces / system-ui** as a typography default — these are the named AI-slop fonts. If the file says Inter, fine; if not, never add it.
- **Purple on white** (`#A855F7`-ish on `#FFFFFF`) — the most overfitted AI palette.
- **Unjustified gradient backgrounds** — especially purple-to-pink or blue-to-purple hero gradients.
- **Left-accent cards** — the 4px colored vertical bar on the left of a card is a Bootstrap-era reflex. Banned unless the file declares it.
- **SVG line-drawing illustrations** ("two people shaking hands in single-weight line art") — AI-slop illustration style.
- **Unjustified emoji** — especially 🚀 ✨ 💡. Only use emoji if section 10 explicitly allows them, or if they are first-class brand elements (e.g., Tossface).
- **Generic empty states** — "No data found", "Nothing to see here", sad illustration. Use section 14 or ask.
- **`rounded-xl` / `shadow-md` / other framework shorthand without the underlying values.** The underlying values are in the file; use them.

## Step 4 — Write with citations

When you produce code that applies the spec, cite the section in an inline comment only when the choice is non-obvious. Example:

```tsx
// Voice (§10): "송금하기" per CTA imperative rule
<Button>송금하기</Button>

<Card
  // Radius 12 = Comfortable (§5), shadow from Level 2 (§6)
  className="rounded-[12px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)]"
/>
```

Do NOT cite sections in production-intent code comments — only use them when the reader would otherwise be puzzled by the specific value. Well-named design tokens (`--color-blue-500`, `--motion-standard`) do not need citations; raw hex values and magic numbers do.

## Step 5 — Fail loud

If a required section (1–5) is missing, refuse to generate UI that depends on it. Tell the user exactly what is missing:

*"DESIGN.md is missing section 3 (Typography Rules). I can't pick a font for this heading without guessing. Add Typography Rules or tell me the font family, scale, and weight now."*

This is a feature, not a bug. Agents that silently fill in gaps produce branded-like-nobody UI.

## Notes on Google-Stitch-only files

If the file has no frontmatter and sections 10–15 are absent:

- Treat sections 7 (Do's and Don'ts) and 9 (Agent Prompt Guide) as partial voice/microcopy substitutes. They are weaker than a real section 10, so microcopy decisions may require asking the user.
- Do not invent a Voice section by inferring from Visual Theme. Ask instead.
- For empty/error/loading: ask the user directly. Do not default.

## Notes on cross-tool portability

OmD `DESIGN.md` files are designed to be consumed by Claude Code, Cursor, Gemini CLI/Antigravity, Copilot, and Google Stitch. When you write code that references the spec, keep the reference *implicit in the code* (use declared tokens, match declared components). Do not hard-code a string like "per Claude Code's reading of DESIGN.md" — the file is source of truth for *any* agent.

## Related resources

- OmD v0.1 spec: `spec/omd-v0.1.md` in this project, or at <https://github.com/kwakseongjae/oh-my-design>.
- Reference library: 67 real-company `DESIGN.md` files at <https://github.com/kwakseongjae/oh-my-design/tree/main/references>.
- Google Stitch format reference: <https://stitch.withgoogle.com/docs/design-md/overview/>.
- Anthropic's own anti-slop guidance lives in the `frontend-design` skill at <https://github.com/anthropics/skills>; the list above is informed by and intentionally consistent with it.
