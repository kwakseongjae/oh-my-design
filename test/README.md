# Tests

This repo has **two test suites**, one per package. Both run under
Vitest and both must pass for a PR to ship.

| Package | Run | Convention | This README covers |
|---|---|---|---|
| **Root (CLI)** — `oh-my-design` | `npm test` (or `test:watch`) | Tests under `test/` (separate folder) | Yes |
| **Web** — `web/` (Next.js builder + result share + API) | `cd web && npm test` | Colocated (`*.test.ts` next to source) | Yes — see "Web coverage" below |

## CLI folder convention

```
test/
├── unit/           ← isolated module tests, mirror src/ layout
│   ├── core/       ← src/core/*
│   └── utils/      ← src/utils/*
├── integration/    ← cross-module end-to-end suites
└── scripts/        ← dev helpers (excluded from vitest)
```

- **Unit tests** (`*.test.ts`) under `test/unit/<area>/` mirror the
  `src/<area>/` directory. New `src/` module → matching test path.
- **Integration tests** (`*.test.{ts,mjs}`) under `test/integration/`
  exercise multiple modules. Today: `all-references.test.ts` runs
  the full CLI pipeline against every `references/<id>/DESIGN.md`.
- **Scripts** under `test/scripts/` are dev helpers
  (`npx tsx test/scripts/<name>.ts`) — not tests.

## CLI coverage map

| Module | Test |
|---|---|
| `src/core/customizer.ts` | `unit/core/customizer.test.ts` + `integration/all-references.test.ts` |
| `src/core/reference-parser.ts` | `unit/core/reference-parser.test.ts` + smoke from integration |
| `src/core/renderer.ts` | `unit/core/renderer.test.ts` |
| `src/core/token-resolver.ts` | `unit/core/token-resolver.test.ts` |
| `src/utils/color.ts` | `unit/utils/color.test.ts` |
| `src/core/components.ts` | _(indirect via renderer.test.ts)_ |
| `src/core/shadcn-mapper.ts` | _(no direct coverage — gap)_ |
| `src/core/preview-generator.ts` | _(no direct coverage — gap)_ |
| `src/utils/spacing.ts` | _(no direct coverage — gap)_ |
| `src/utils/typography.ts` | _(no direct coverage — gap)_ |
| `src/presets/*` | _(indirect via renderer.test.ts → `_base`)_ |
| `src/cli/*`, `bin/oh-my-design.ts` | _(no direct coverage — gap)_ |
| Every `references/<id>/DESIGN.md` × CLI generation pipeline | `integration/all-references.test.ts` |

## Web coverage map (`web/`)

The web package is a Next.js builder + survey/result + share/leaderboard
APIs. Tests live colocated next to source (`web/src/.../foo.test.ts`).

| Module | Test |
|---|---|
| `web/src/lib/core/generate-css.ts` (`generateShadcnCss`, `generateVanillaCss`, `applyOverridesToMd` — the actual DESIGN.md generator) | `web/src/lib/core/generate-css.test.ts` |
| `web/src/lib/core/config-hash.ts` (Builder ↔ CLI handoff) | `web/src/lib/core/config-hash.test.ts` |
| `web/src/lib/core/survey-hash.ts` | `web/src/lib/core/survey-hash.test.ts` |
| `web/src/lib/core/color.ts` | _(no direct coverage — gap)_ |
| `web/src/lib/survey/quiz-data.ts` | `web/src/lib/survey/quiz-data.test.ts` |
| `web/src/lib/survey/scoring.ts` | `web/src/lib/survey/scoring.test.ts` |
| `web/src/lib/survey/types.ts` | `web/src/lib/survey/types.test.ts` |
| `web/src/lib/extract-tokens.ts` | _(no direct coverage — gap)_ |
| `web/src/lib/design-systems.ts`, `font-registry.ts`, `logos.ts` | _(no direct coverage — gap)_ |
| `web/src/lib/kv.ts` | _(no direct coverage — gap)_ |
| `web/src/app/api/track/route.ts` | _(no direct coverage — gap)_ |
| `web/src/app/api/leaderboard/route.ts` | _(no direct coverage — gap)_ |
| `web/src/app/api/references/route.ts` | _(no direct coverage — gap)_ |
| React components (survey-wizard, builder, export-panel, share-buttons, …) | _(no direct coverage — gap)_ |

Rows marked _gap_ are open opportunities. Browser-level (Playwright)
end-to-end coverage isn't set up yet — the natural first scenario
would be the Builder → npx command roundtrip (encode in browser,
decode in CLI, output matches preview).

## Adding tests

**CLI (root):**
1. **Unit**: `test/unit/<area>/<module>.test.ts`, import from
   `../../../src/<area>/<module>.js`.
2. **Integration**: `test/integration/<scenario>.test.{ts,mjs}`.
3. **Dev script**: `test/scripts/<name>.ts`; document the runner in a
   top-of-file comment.

**Web:** colocate the test next to the source file:
`web/src/<path>/<name>.test.ts`. The web `vitest.config.ts` picks up
`src/**/*.test.ts` automatically.

When opening a PR, update the relevant coverage map row above —
either fill in a previously-empty row or add the new module.
