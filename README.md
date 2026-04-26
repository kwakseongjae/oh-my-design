<p align="center">
  <img src="logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>Generate DESIGN.md from 67 real company design systems.</strong> Interactive wizard. Zero AI calls.
</p>

<p align="center">
  <strong>Now with the OmD v0.1 Philosophy Layer.</strong> Voice · Narrative · Principles · Personas · States · Motion — so Claude Code matches your brand, not the AI's default.
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/kwakseongjae/oh-my-design?style=flat-square" alt="License" /></a>
  <a href="https://github.com/kwakseongjae/oh-my-design/stargazers"><img src="https://img.shields.io/github/stars/kwakseongjae/oh-my-design?style=social" alt="GitHub Stars" /></a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" />
  <img src="https://img.shields.io/badge/AI%20calls-zero-blue?style=flat-square" alt="Zero AI" />
  <img src="https://img.shields.io/badge/references-67-7c5cfc?style=flat-square" alt="67 References" />
</p>

<p align="center">
  <a href="README.ko.md">한국어</a> | <a href="README.ja.md">日本語</a> | <a href="README.zh-TW.md">繁體中文</a> | English
</p>

---

## What is oh-my-design?

**oh-my-design (OmD)** is an open spec for giving AI coding agents enough brand context to produce on-brand UI instead of the AI's statistical default.

`DESIGN.md` as [Google defined it](https://stitch.withgoogle.com/docs/design-md/overview/) is a **token document** — colors, typography, components. Necessary, but not sufficient. When an agent generates UI from tokens alone, the output is coherent but branded like nobody — it defaults to Inter-on-white, purple gradients, unjustified emojis. OmD v0.1 adds a **brand-philosophy layer** on top: **Voice · Narrative · Principles · Personas · States · Motion**. Drop an OmD `DESIGN.md` at your project root and the agent's output stops being generic and starts being yours.

Three pieces:

1. **[Spec](spec/omd-v0.1.md)** — versioned, additive to Google Stitch, MIT-licensed.
2. **[Claude Code skill](.claude/skills/omd/SKILL.md)** — auto-applies the spec as a hard constraint when generating UI in Claude Code.
3. **[67 reference files](references/)** — real-company `DESIGN.md` files you can fork, customize with the interactive builder, and ship.

**No API keys. No AI calls. Everything runs client-side.**

## Ecosystem v1 — agent integration (new)

`oh-my-design` now ships a coding-agent ecosystem so `DESIGN.md` is **read and respected** by Claude Code, Codex, OpenCode, and Cursor while you work — not just generated once and forgotten.

```bash
npm install -g oh-my-design

cd my-project

# 1. One-time: install agent skills (.claude/skills, .codex/skills, .opencode/agents)
omd install-skills

# 2. Bootstrap DESIGN.md from a reference + your project description
#    (run from inside Claude Code/Codex/OpenCode and the omd:init skill drives this)
omd init recommend "warm approachable B2C marketplace"
omd init prepare --ref airbnb --description "warm approachable B2C marketplace"

# 3. Install / refresh shim files so all four agents read DESIGN.md
omd sync

# 4. As you work, log preferences whenever the agent gets a design choice wrong
omd remember "CTAs are never uppercase"

# 5. Periodically fold pending preferences into DESIGN.md
omd learn                           # list pending
omd learn --mark-applied <id>       # after the fold
```

### What gets installed

| File | Owned by | Purpose |
|---|---|---|
| `DESIGN.md` | you | Single source of truth — brand & UI spec |
| `CLAUDE.md` | `omd sync` | Pointer (`@./DESIGN.md`) for Claude Code |
| `AGENTS.md` | `omd sync` | Pointer for Codex CLI **and** OpenCode (single file covers both) |
| `.cursor/rules/omd-design.mdc` | `omd sync` | Auto-attaches DESIGN.md when Cursor edits UI files |
| `.claude/skills/omd-*/SKILL.md` | `omd install-skills` | Claude Code skill bundle (5 skills) |
| `.codex/skills/omd-*/SKILL.md` | `omd install-skills` | Codex skill bundle (5 skills) |
| `.opencode/agents/omd-*.md` | `omd install-skills` | OpenCode agent bundle (5 agents) |
| `.omd/preferences.md` | `omd remember` | Append-only design correction log |
| `.omd/sync.lock.json` | `omd sync` | Drift detection state |

Shim and skill files use a `<!-- omd:start -->` marker so user edits outside the marker are preserved across `omd sync` runs.

### The five skills

| Skill | Trigger | What it does |
|---|---|---|
| `omd:init` | "make me a DESIGN.md" / "set up brand" | Recommends a reference, asks for project description, generates a Hybrid variation that **preserves the reference's voice** while applying project-context deltas, writes DESIGN.md + shims |
| `omd:apply` | Any UI / styling / microcopy / motion task | Loads DESIGN.md + pending preferences as authoritative brand context, **auto-logs** any user correction it detects via `omd remember` |
| `omd:sync` | "shim drift" / "AGENTS.md sync" | Runs `omd sync` with appropriate flags |
| `omd:remember` | "remember that ..." / "we don't ..." | Appends a structured entry to `.omd/preferences.md` |
| `omd:learn` | "fold preferences into DESIGN.md" | Groups pending preferences by scope, proposes coherent DESIGN.md edits, flips status to applied |

Source: [`skills/`](skills/) in this repo. `omd install-skills` copies these into your project's agent directories.

### CLI commands

```
omd init recommend <description>   # tag-stem-matched reference suggestions (top-5)
omd init prepare --ref <id> --description <text>
                                   # stages .omd/init-context.json + delta_set
omd install-skills [--agent ...]   # copy skills/* into .claude /.codex /.opencode
omd reference list                 # list bundled reference ids
omd reference show <id>            # print a reference DESIGN.md to stdout
omd sync [--force | --check]       # write or audit shim files
omd remember <note> [--scope ...]  # append a preference entry
omd learn                          # list pending preferences
omd learn --mark-applied <id>      # after applying to DESIGN.md
omd learn --mark-rejected <id> --reason <text>
```

`omd sync --check` is CI-friendly: exit 1 if shims drifted or DESIGN.md changed without a follow-up sync.

### What's deterministic vs. agent-driven

| Layer | Done by | Why |
|---|---|---|
| Reference recommendation | CLI (tag + stem match, MMR-style category diversity) | Fast, no API key |
| Token deltas (color hue / saturation / lightness / spacing / radius / weight / letter-spacing) | CLI (controlled vocabulary of 41 keywords + ~75 synonyms, additive composition with clamp) | Deterministic; same description → same delta_set |
| Section structure & tokens not in delta_set | CLI baseline, agent-preserved | Reference fidelity |
| Voice-preserved narrative rewrite | **Agent (Claude Code / Codex / OpenCode session)** | Style transfer needs an LLM; the `omd:init` skill prompt enforces voice fingerprint preservation |

### Status

This ecosystem is **v0.2.0-beta**. The CLI surface (sync / remember / learn / init prepare) is stable and unit-tested. The agent-side Hybrid variation quality depends on the host LLM following the `omd:init` skill prompt — empirical results vary; please file issues with archived sessions.

## OmD v0.1 Philosophy Layer

The 6 sections OmD adds on top of Google Stitch's 9:

| Section | Purpose |
|---|---|
| **10. Voice & Tone** | Microcopy constraints — button labels, errors, onboarding |
| **11. Brand Narrative** | The "why" — what the brand rejects, what it's trying to move |
| **12. Principles** | 5–10 first-principles rules that break ties when tokens don't |
| **13. Personas** | 2–4 concrete users so agents ground output in real use cases |
| **14. States** | Empty / loading / error / skeleton patterns — prevents generic "No data found" |
| **15. Motion & Easing** | Named duration + easing tokens — the dimension Stitch's 9 sections miss |

**Ten references ship with a full Philosophy Layer today:**
Toss · Claude · Line · Stripe · Linear · Vercel · Notion · Airbnb · Apple · Figma — each with voice, narrative, principles, personas, states, and motion sourced against public references.

See [references/toss/DESIGN.md](references/toss/DESIGN.md) for a full OmD v0.1 example.

## What's inside

- **Builder** — pick a reference, tune colors / radius / dark mode, select components, hit Export. The **Philosophy** filter isolates the 10 references with a full brand philosophy.
- **Design Systems Directory** ([oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems)) — 34 of the 67 references have a verified public design system or brand-guidelines page; the directory links straight out to each one with live thumbnails.
- **Personal Curation** ([oh-my-design.kr/curation](https://oh-my-design.kr/curation)) — a short MBTI-style quiz that maps your design personality to one of the 67 references and drops you straight into the builder with that reference preloaded.

## 67 Supported References

| Category | Companies |
|----------|-----------|
| **AI & LLM** | Claude, Cohere, ElevenLabs, Minimax, Mistral AI, Ollama, OpenCode AI, Replicate, RunwayML, Together AI, VoltAgent, xAI |
| **Design Tools** | Airtable, Clay, Figma, Framer, Miro, Webflow |
| **Developer Tools** | Cursor, Expo, Lovable, Raycast, Superhuman, Vercel, Warp |
| **Productivity** | Cal.com, freee, Intercom, Linear, Mintlify, Notion, Resend, Zapier |
| **Consumer Tech** | Airbnb, Apple, Baemin, Dcard, IBM, Kakao, Karrot, LINE, Mercari, NVIDIA, Pinkoi, Pinterest, SpaceX, Spotify, Uber |
| **Fintech** | Coinbase, Kraken, Revolut, Stripe, Toss, Wise |
| **Backend & DevOps** | ClickHouse, Composio, Hashicorp, MongoDB, PostHog, Sanity, Sentry, Supabase |
| **Automotive** | BMW, Ferrari, Lamborghini, Renault, Tesla |
| **Marketing** | Semrush |

> Use the **country filter** in the builder to browse by region (Korea, Taiwan, Japan, France, Italy, Germany, UK, US).

## Exported DESIGN.md

Follows the [Google Stitch DESIGN.md format](https://stitch.withgoogle.com/docs/design-md/overview/) — base sections 1–9, plus the OmD v0.1 Philosophy Layer (sections 10–15) when enabled:

**Base (Google Stitch)**
1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide

**OmD v0.1 Philosophy Layer (additive)**

10. Voice & Tone
11. Brand Narrative
12. Principles
13. Personas
14. States
15. Motion & Easing

Plus: Style Preferences, Included Components, Iconography & SVG Guidelines, Document Policies.

## Project Structure

```
oh-my-design/
  spec/              OmD v0.1 spec (authoritative)
  .claude/skills/omd/ Claude Code skill bundle
  references/        67 company DESIGN.md files
  src/               CLI core (TypeScript)
  web/               Next.js web builder
    src/app/         Landing + Builder + Directory pages
    src/components/  Wizard, Preview, Export
  test/              CLI Vitest suite (unit/, integration/, scripts/)
```

Web tests are colocated next to source files (`web/src/**/*.test.ts`).

## Testing

Two suites, both under Vitest, both must pass:

```bash
npm test                # CLI: 370 tests — unit + per-reference smoke
cd web && npm test      # Web: 88 tests — generate-css, config-hash, survey
```

The integration suite (`test/integration/all-references.test.ts`) runs the full generation pipeline against every `references/<id>/DESIGN.md`, so a malformed reference surfaces as a per-ref failure in PR review. See [test/README.md](test/README.md) for the folder convention and module-by-module coverage map.

## Acknowledgments

- [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) — the upstream collection of DESIGN.md files that seeded this project.
- [kzhrknt/awesome-design-md-jp](https://github.com/kzhrknt/awesome-design-md-jp) — Japanese-market design-system references.

oh-my-design extends these collections with an interactive customization wizard, A/B style preferences, component selection, a Design Systems directory, and a CLI export pipeline.

## License

[MIT](LICENSE)
