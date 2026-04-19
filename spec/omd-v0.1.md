# OmD Spec v0.1

| Field | Value |
|---|---|
| Spec version | `0.1.0` |
| Compatible with | `DESIGN.md` (Google Stitch format, 9 sections) |
| Adds | Brand Philosophy Layer (6 sections) |
| Target consumer | Claude Code, Cursor, Gemini CLI, Codex, other AI coding agents |
| Filename | `DESIGN.md` at project root |
| Status | Draft — feedback welcome at https://github.com/kwakseongjae/oh-my-design/issues |

---

## 0. Why this spec exists

`DESIGN.md` as defined by Google Stitch is a **token document** — color, typography, component, layout rules. That is necessary but not sufficient.

When an AI coding agent generates UI from tokens alone, the output is coherent but **branded like nobody** — it defaults to the statistical center of its training distribution. The Claude Design system prompt names this failure mode explicitly: gradient backgrounds, Inter-on-white, purple on white, unjustified emojis. The fix is not more tokens. The fix is **brand context** — what the brand sounds like, who it's for, what it refuses to do, and how it moves.

OmD v0.1 extends the Google 9-section format with 6 brand-philosophy sections that feed an agent the context it needs to generate on-brand output. The 9 base sections stay untouched. Existing Google-Stitch `DESIGN.md` files remain valid OmD files — the philosophy layer is **additive**.

**OmD is a spec, not a code generator.** The artifact OmD produces and governs is `DESIGN.md` itself — the spec document. OmD intentionally does not emit `theme.css`, `tokens.json`, Tailwind configs, or other stack-specific code artifacts. Agents are expected to read the spec and translate it to whatever stack the project uses. This separation is deliberate: stacks change (shadcn/ui → something else → something after that); brand philosophy doesn't. A spec that outlives any one framework is more useful than one that bakes a framework in.

---

## 1. File anatomy

```
DESIGN.md
├── Base layer (Google Stitch, required)
│   ├── 1. Visual Theme & Atmosphere
│   ├── 2. Color Palette & Roles
│   ├── 3. Typography Rules
│   ├── 4. Component Stylings
│   ├── 5. Layout Principles
│   ├── 6. Depth & Elevation
│   ├── 7. Do's and Don'ts
│   ├── 8. Responsive Behavior
│   └── 9. Agent Prompt Guide
└── Brand Philosophy layer (OmD v0.1, recommended)
    ├── 10. Voice & Tone
    ├── 11. Brand Narrative
    ├── 12. Principles
    ├── 13. Personas
    ├── 14. States
    └── 15. Motion & Easing
```

Required vs optional:

| Section | Status | Rationale |
|---|---|---|
| 1–5 | **Required** | Agents cannot generate anything coherent without theme, color, type, component, layout. |
| 6–9 | **Recommended** | Needed for production-quality output. A file without section 9 is consumable but weaker. |
| 10–15 | **Recommended** | The OmD layer. A file without these is valid but generic. |

An OmD file MUST begin with a YAML frontmatter block declaring the spec version:

```markdown
---
omd: 0.1
brand: <brand name>
---

# <Title>

## 1. Visual Theme & Atmosphere
...
```

Files without frontmatter are treated as plain Google-Stitch `DESIGN.md` (valid but not OmD-annotated).

---

## 2. Base layer (sections 1–9)

These match the [Google Stitch DESIGN.md format](https://stitch.withgoogle.com/docs/design-md/overview/). This spec does not redefine them; it only enforces two conventions the Stitch docs recommend but don't mandate:

1. **Descriptive names + exact hex values together.** `Toss Blue (#3182f6)`, not `Primary` alone, not `#3182f6` alone. This is non-negotiable — agents use the name to *reason*, and the hex to *render*.
2. **Explain the "why" at least once per section.** "Shadow-as-border replaces traditional `1px solid` throughout to enable smoother transitions and rounded corners without clipping" is correct. "Uses shadow-bordered cards" is not.

Anti-patterns to avoid (taken directly from Claude Design's anti-slop list):

- `rounded-xl` or other framework-specific shorthand without the underlying pixel value
- Generic palette names (`primary-500`) without a brand-specific descriptor
- Font choices of Inter, Roboto, Arial, or system-ui as a "safe default" — these are the default AI-slop fonts. If your brand uses Inter, state that it *deliberately* uses Inter and explain why.
- Gradient backgrounds, purple-on-white, unjustified emojis, left-accent cards as decorative choices

---

## 3. Brand Philosophy layer (sections 10–15)

This is what OmD adds. Each section is a few hundred words max — the goal is not a brand bible, it's a brief that a coding agent can fit in its context window and apply consistently.

### 10. Voice & Tone

**What to write.** How the product speaks, in 3–5 lines of prose. Then a table mapping contexts to tone shifts.

**Why agents need it.** Microcopy is where brands die. A Toss-style fintech that pushes a blunt "Delete" button where "Remove this card" would fit has lost the brand regardless of how correct its color tokens are.

**Format.**

```markdown
### 10. Voice & Tone

**Voice** — Toss speaks like a friend who happens to be a fiduciary:
calm, unhurried, zero jargon, no emoji in financial contexts.
Positive statements, never hedged. "You have ₩1,240,000" — not
"Your current balance is approximately ₩1,240,000".

| Context | Tone |
|---|---|
| CTAs | Imperative, short (송금하기, 확인) |
| Error messages | Specific, blameless, action-oriented |
| Success confirmations | Past tense, one sentence, no emoji |
| Onboarding | Second-person, present tense, one idea per screen |
| Financial amounts | Bare numerals, currency after, never "approximately" |

**Forbidden phrases.** "Please note that", "Unfortunately", "Oops",
any sentence starting with "I'm sorry".
```

### 11. Brand Narrative

**What to write.** The "why" of the brand in under 200 words. Where it came from, what it refuses to be, what category it's trying to move.

**Why agents need it.** Generation quality correlates with contextual depth. An agent that understands Toss is "fintech that rejected institutional-blue formality for an optimistic cerulean" will make better color decisions in ambiguous cases than one that only has hex codes.

**Format.**

```markdown
### 11. Brand Narrative

Toss started in 2015 as a single-feature money-transfer app in a
Korean banking market dominated by legacy institutions with
institutional-blue websites, 12-digit account numbers, and Active-X
plug-ins. Its founding rejection was of that entire aesthetic vocabulary:
the bright, optimistic blue (#3182f6) was chosen specifically because
it was **not** the indigo of KB, Shinhan, or Woori.

Toss is not a neo-bank — it's a super-app. The interface is calm
because the product is complex: one app holds transfers, investments,
credit scoring, insurance. The design's job is to flatten that
complexity into one gesture per screen. "Your money is in good hands,
and we'll make it easy" is the brand's entire ask.

What Toss refuses: the seriousness of legacy finance, the playfulness
of consumer apps, the data-viz density of Bloomberg. Toss occupies a
specific middle.
```

### 12. Principles

**What to write.** 5–10 first-principles rules, each a single sentence, derivable to concrete UI decisions.

**Why agents need it.** When a novel case appears that tokens don't cover, the agent needs a rule to fall back on. "Breathing room for money — financial amounts get 1.5× the surrounding spacing of normal text" tells the agent what to do for a balance screen that wasn't in the component list.

**Format.**

```markdown
### 12. Principles

1. **Breathing room for money.** Financial amounts get ≥1.5× the
   surrounding spacing of normal text. A balance at 30px with 32px
   margins is correct; the same balance at 16px margins looks cheap.
2. **Progressive density.** Summary screens are spacious; detail
   screens are dense. The deeper the user goes, the more information
   per pixel — they've committed to the context.
3. **One action per screen.** If a screen has two primary buttons, it
   is two screens.
4. **Blue is interaction, not decoration.** Toss Blue (#3182f6) only
   appears where the user can tap. It never decorates.
5. **Restraint communicates trust.** Shadows are single-layer, pure
   black, low opacity. No colored shadows, no multi-layer stacks. In
   finance, visual noise undermines credibility.
6. **Korean and Latin are co-equal.** Never assume one is primary.
   Typography stacks, optical weights, tabular numerals all assume
   both are rendering simultaneously.
```

### 13. Personas

**What to write.** 2–4 persona sketches, each 3–5 lines. Who the product is for in *concrete* terms — name, age bracket, context of use, the sentence they'd say about it.

**Why agents need it.** Personas ground generated UI in a real use case. A Toss screen designed "for 28-year-old Seongjae who checks his balance on the subway at 8:47am before a meeting" is different from one designed "for the user".

**Format.**

```markdown
### 13. Personas

**정민 (Jeongmin), 28, Seoul.** Software engineer. Checks balance
once a day on the subway. Expects the app to open to the balance
screen and load in <1s. If she has to tap twice to see her money,
she's already annoyed.

**이선생님 (Mr. Lee), 54, Busan.** Small business owner. Uses Toss
because his daughter set it up. Primary use: transferring to
suppliers. Needs one-tap repeat transfer. Distrusts anything that
looks like an ad. Would uninstall the app before clicking a banner.

**예은 (Yeeun), 21, Daegu.** University student. Toss is her
primary banking app — she's never used a legacy bank's interface.
Expects Toss Blue to be "banking blue". If another financial app
uses cerulean, she assumes it's imitating Toss.
```

### 14. States

**What to write.** Empty, loading, error, success, skeleton patterns. One paragraph each or a table mapping state × surface → treatment.

**Why agents need it.** The Claude Design prompt says *"Placeholder > bad attempt"* — agents will invent bad states if you don't supply good ones. This section prevents the generic gray-box skeleton and the sad "No data" illustration.

**Format.**

```markdown
### 14. States

| State | Treatment |
|---|---|
| **Empty** | Single line of body-gray text explaining *why* it's empty, plus one suggested action as a secondary button. Never an illustration. Never "No data". |
| **Loading** | Skeleton screens matching the final layout's block structure at `#f2f4f6` (grey100). No spinners on primary surfaces. Spinners only inside already-pressed buttons. |
| **Error (inline)** | `#f04452` (red500) border, error text below in `red500` 13px. One actionable sentence. Never "An error occurred." |
| **Error (toast)** | `#191f28` background, white text, 3-second auto-dismiss. One sentence. No icons. |
| **Success** | Brief flash of `#e8f3ff` (blue50) background behind the updated element, 300ms fade to default. No toast for routine actions. |
| **Skeleton** | Grey100 blocks at exact final dimensions. 1.2s shimmer at `linear-gradient` with 8% white highlight. Never on financial amounts — those show `--` until loaded. |
```

### 15. Motion & Easing

**What to write.** Duration scale, easing functions by intent (enter / exit / attention / microinteraction), and one or two signature motions.

**Why agents need it.** Motion is the one dimension Google's 9 sections don't cover. Without named durations and easings, agents produce either no motion or Material Design defaults — neither is "on-brand".

**Format.**

```markdown
### 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State changes that should feel immediate (toggle flips) |
| `motion-fast` | 150ms | Micro-interactions — hover, focus, small reveals |
| `motion-standard` | 250ms | The default — sheet opens, page transitions, card expands |
| `motion-slow` | 400ms | Emphasized transitions — success checkmarks, onboarding |
| `motion-page` | 600ms | Full-screen transitions between top-level sections |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — fast start, settle |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — slow start, accelerate out |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Delightful overshoot — confirmations, achievement states |

**Signature motions.**

1. **Money-moves.** When a balance updates, the old number slides
   up 20px and fades out (`motion-fast / ease-exit`), the new number
   slides in from below 20px (`motion-standard / ease-enter`). Never
   cross-fade money.
2. **Sheet presentation.** Bottom sheets rise from y+40px with
   `motion-standard / ease-enter` and a synchronized backdrop
   fade-in. Dismissal uses `motion-fast / ease-exit`.
3. **Reduce motion.** If `prefers-reduced-motion: reduce`, all
   `motion-*` tokens collapse to `motion-instant`. No exceptions.
```

---

## 4. Consumption contract — what agents must do

An AI coding agent that loads an OmD-compliant `DESIGN.md` is expected to:

1. **Parse frontmatter.** If `omd: 0.1` is present, load sections 10–15 as authoritative brand context *before* generating any UI.
2. **Treat section 12 (Principles) as constraints.** A generated component that violates a principle must be regenerated, not shipped.
3. **Treat section 10 (Voice & Tone) as microcopy source.** Generated button labels, error messages, and empty states MUST match the voice spec. Never invent a tone.
4. **Treat section 14 (States) as the default.** Do not generate ad-hoc empty/error states. Use the table.
5. **Apply section 15 (Motion) tokens.** If the framework exposes transition APIs, wire them to the named tokens.
6. **Fail loud on missing sections.** If a required section (1–5) is missing, the agent should refuse to generate and surface the specific gap to the user.
7. **Do not hallucinate across sections.** A value not declared in the file is not authorized to be used.

This contract is what makes OmD a *spec* rather than a template. The file is readable by humans and parseable by tools, but its primary consumer is an LLM that needs explicit constraints to produce on-brand output.

---

## 5. Compatibility

| Tool | Support | Notes |
|---|---|---|
| Google Stitch | ✅ Base 1–9 | OmD files are valid Stitch inputs. Sections 10–15 are ignored as unknown. |
| Claude Code | ✅ via `.claude/skills/omd/` | See OmD repo for the skill bundle. Once installed, `DESIGN.md` at project root is auto-consumed. |
| Cursor | ✅ Base 1–9 | Add `DESIGN.md` to `.cursor/rules/` for lazy loading. |
| Gemini CLI / Antigravity | ✅ Base 1–9 | Reads root `DESIGN.md` natively. |
| Copilot | ⚠ Partial | Reads root `DESIGN.md` if present; sections 10–15 support depends on extension. |
| VoltAgent/awesome-design-md | ✅ Base 1–9 | OmD files can be contributed as-is; philosophy layer is additive. |

---

## 6. Versioning policy

- **Minor versions (0.1 → 0.2)** may add new recommended sections or new required fields inside existing sections. Files at version N continue to validate at version N+minor.
- **Major versions (0.x → 1.0, 1.x → 2.0)** may make previously recommended sections required, or reshape the section tree. A major bump will always ship with a migration guide.
- **Patch versions (0.1.0 → 0.1.1)** are documentation and anti-pattern list updates only. No schema change.
- Files declare the exact version they target (`omd: 0.1`). An agent MAY parse newer versions with best-effort, but MUST NOT fail a v0.1 file for lacking a v0.2 section.

---

## 7. Open questions for v0.2

These are intentionally left out of v0.1 to keep the first version small:

- **Data-viz primitives** — chart palette, axis rules, annotation patterns. Too domain-specific for v0.1; may become a separate companion spec.
- **i18n / RTL** — locale-specific typography stacks, mirroring rules. v0.2 candidate.
- **Accessibility contract** — WCAG target declaration, contrast thresholds, focus-ring tokens. Currently lives inside section 4 as ad-hoc notes; v0.2 will hoist it.
- **Iconography system** — icon family, weight, optical sizing. Partial coverage in section 4; v0.2 may promote.

Feedback on which of these should be required in v0.2 is welcome.

---

## 8. JSON Schema (informative)

A non-normative JSON Schema for the file's section skeleton:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "OmD DESIGN.md section manifest",
  "type": "object",
  "required": ["omd", "brand", "sections"],
  "properties": {
    "omd": { "type": "string", "pattern": "^0\\.\\d+(\\.\\d+)?$" },
    "brand": { "type": "string" },
    "sections": {
      "type": "object",
      "required": [
        "visual_theme",
        "color_palette",
        "typography",
        "components",
        "layout"
      ],
      "properties": {
        "visual_theme":        { "type": "string" },
        "color_palette":       { "type": "string" },
        "typography":          { "type": "string" },
        "components":          { "type": "string" },
        "layout":              { "type": "string" },
        "depth":               { "type": "string" },
        "dos_and_donts":       { "type": "string" },
        "responsive":          { "type": "string" },
        "agent_prompt_guide":  { "type": "string" },
        "voice_and_tone":      { "type": "string" },
        "brand_narrative":     { "type": "string" },
        "principles":          { "type": "string" },
        "personas":            { "type": "string" },
        "states":              { "type": "string" },
        "motion":              { "type": "string" }
      }
    }
  }
}
```

This is informative rather than normative — the file's authoritative form is the markdown document. The schema exists as a target for future tooling (`omd validate`).

---

## 9. Credits

OmD v0.1 builds on:

- [Google Stitch DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/) for sections 1–9.
- [Anthropic Claude Design](https://claude.com/claude) for the architectural principle that brand context, not tokens, is what agents most lack — sections 10–15 exist to supply that context.
- [Anthropic `frontend-design` skill](https://github.com/anthropics/skills) for the anti-slop list informing section 2's conventions.
- [VoltAgent awesome-design-md](https://github.com/VoltAgent/awesome-design-md) for demonstrating the demand for a community-curated library of DESIGN.md files.

OmD is MIT-licensed and openly contributable. File issues and PRs at <https://github.com/kwakseongjae/oh-my-design>.
