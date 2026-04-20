# Tests

All test code lives under `test/`. Run with `npm test` (one-shot) or
`npm run test:watch` (watch mode). Both unit and integration suites
run under Vitest, so `npm test` is the single source of truth for CI
and PR review.

## Folder convention

```
test/
├── unit/           ← isolated module tests, mirror src/ layout
│   ├── core/       ← src/core/*
│   └── utils/      ← src/utils/*
├── integration/    ← end-to-end DESIGN.md generation across refs
└── scripts/        ← dev helpers (not picked up by vitest)
```

- **Unit tests** (`*.test.ts`) live under `test/unit/<area>/` and
  mirror the `src/<area>/` directory. When you add a module under
  `src/`, add its test under the matching `test/unit/` path.
- **Integration tests** (`*.test.{ts,mjs}`) live under
  `test/integration/` and exercise multiple modules end-to-end.
- **Scripts** under `test/scripts/` are dev helpers run via
  `npx tsx test/scripts/<name>.ts`. They are not tests and are
  excluded from the vitest include pattern.

## Coverage map

| Module | Test |
|---|---|
| `src/core/customizer.ts` | `unit/core/customizer.test.ts` |
| `src/core/reference-parser.ts` | `unit/core/reference-parser.test.ts` |
| `src/core/renderer.ts` | `unit/core/renderer.test.ts` |
| `src/core/token-resolver.ts` | `unit/core/token-resolver.test.ts` |
| `src/utils/color.ts` | `unit/utils/color.test.ts` |
| `src/core/components.ts` | _(indirect via renderer.test.ts)_ |
| `src/core/shadcn-mapper.ts` | _(no direct coverage)_ |
| `src/core/preview-generator.ts` | _(no direct coverage)_ |
| `src/utils/spacing.ts` | _(no direct coverage)_ |
| `src/utils/typography.ts` | _(no direct coverage)_ |
| `src/presets/*` | _(indirect via renderer.test.ts → `_base`)_ |
| Reference + preference inline-mod logic (mirrors `web/.../generate-css.ts`) | `integration/design-md-consistency.test.mjs` |

Rows marked _no direct coverage_ are gaps — open a PR to add unit
tests under the matching `test/unit/<area>/` path.

## Adding tests

1. **Unit**: create `test/unit/<area>/<module>.test.ts`, import from
   `../../../src/<area>/<module>.js`, use `describe` / `it` / `expect`
   from `vitest`.
2. **Integration**: create `test/integration/<scenario>.test.{ts,mjs}`.
   Compute fixtures at the top of the file or inside `beforeAll`,
   then assert behaviors per `it()`.
3. **Dev script**: drop under `test/scripts/`; document the runner
   command in a top-of-file comment.

When opening a PR, update the coverage map above if you added a new
module without a test, or filled in a previously-empty row.
