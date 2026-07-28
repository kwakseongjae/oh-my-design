# Cursor Kimi K3 / GLM 5.2 attribution canary — 1.9.58

Status: **LOCKED; no-write provider execution pending**.

## Purpose

The logged-in Cursor catalog now exposes `kimi-k3-high` and `glm-5.2-high`.
Before either model can enter the benchmark controller allowlist, a
repository-free canary must prove the requested selector, runtime-reported
display name, usage attribution, exact final response, and zero tool use.

Grok and Composer benchmark outputs are not part of this denominator.

## Frozen execution

- runtime: Cursor Agent `2026.07.23-e383d2b`;
- selectors, in order: `kimi-k3-high`, then `glm-5.2-high`;
- workspace: a fresh empty `/tmp` directory per selector;
- repository files, DESIGN.md, skills, metadata, and user content: none;
- prompt: fixed instruction to return exactly `OMD_ATTRIBUTION_OK`;
- tools, edits, shell, browser, MCP, network navigation: prohibited;
- timeout: 180 seconds per selector;
- retry/fallback/Auto/Router: none.

## Acceptance

Each selector passes only when:

1. process exit is zero;
2. runtime init reports a non-empty model display name;
3. final assistant text is exactly `OMD_ATTRIBUTION_OK`;
4. at least one usage event is present with numeric input/output fields;
5. tool calls and workspace writes are zero.

Any failure remains a canary failure and does not authorize the selector in the
benchmark controller. Passing records display-name-only attribution as
Internal; it does not create immutable public attribution, quality, cost,
speed, or model-ranking evidence.
