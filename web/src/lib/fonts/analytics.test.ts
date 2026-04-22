/**
 * Analytics helpers — verify wire-level GA4 event shapes.
 *
 * We mock `@/lib/gtag` so every `track*` call is observable as a
 * (event_name, params) tuple. The assertions cover the three things
 * most likely to drift silently:
 *   1. Event names use the `fp_` namespace + snake_case
 *   2. ID parameter is always `reference` (house convention), not
 *      `font_id` / `ref_id`
 *   3. Cardinality controls (length buckets, sorted scripts) hold
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/gtag", () => ({
  event: vi.fn(),
}));

import { event } from "@/lib/gtag";
import {
  trackBrowseFilter,
  trackCustomizeOpen,
  trackCustomizeSave,
  trackExportCopy,
  trackExternalClick,
  trackHeroChipClick,
  trackHeroSubmit,
  trackMatchFallback,
  trackMatchSelect,
  trackMatchView,
  trackModalReset,
  trackModalSimilarPick,
  trackModalTweak,
  trackOpen,
  trackQueryRefine,
  trackSavedDelete,
  trackSavedOpen,
  trackShareLand,
  trackStageEnter,
} from "./analytics";

const mockedEvent = vi.mocked(event);

function lastCall(): [string, Record<string, unknown>] {
  const calls = mockedEvent.mock.calls;
  expect(calls.length).toBeGreaterThan(0);
  const [name, params] = calls[calls.length - 1];
  return [name as string, (params ?? {}) as Record<string, unknown>];
}

beforeEach(() => {
  mockedEvent.mockClear();
});

describe("analytics — event names", () => {
  it("every emitted event uses the fp_ namespace and snake_case", () => {
    trackOpen("direct");
    trackHeroSubmit({ queryLen: 0, scripts: [], source: "input" });
    trackMatchView({ kind: "ai", pickCount: 3, queryLen: 0, scripts: [] });
    trackMatchSelect({ fontId: "x", rank: 1, kind: "ai", queryLen: 0 });
    trackCustomizeOpen({ fontId: "x", source: "match" });
    trackCustomizeSave({ fontId: "x", hasCustomizations: false, nameLen: 0 });
    trackExportCopy({ channel: "css", surface: "modal", fontId: "x" });
    trackStageEnter({ to: "hero", from: null });
    trackHeroChipClick({ position: 0, queryLen: 0 });
    trackMatchFallback("network");
    trackBrowseFilter({ script: "all", mood: null });
    trackModalTweak({ fontId: "x", kind: "color" });
    trackModalSimilarPick({ from: "a", to: "b" });
    trackModalReset("x");
    trackSavedOpen("x");
    trackSavedDelete("x");
    trackExternalClick({ destination: "get_font", fontId: "x" });
    trackShareLand("x");
    trackQueryRefine({ queryLen: 0, scripts: [] });

    const names = mockedEvent.mock.calls.map(([n]) => n as string);
    for (const name of names) {
      expect(name).toMatch(/^fp_[a-z][a-z0-9_]*$/);
      expect(name.length).toBeLessThanOrEqual(40);
    }
  });
});

describe("analytics — ID parameter is always `reference` (not font_id)", () => {
  it("emits `reference` on every event that carries a font id", () => {
    const eventsWithId: Array<() => void> = [
      () => trackMatchSelect({ fontId: "pretendard", rank: 1, kind: "ai", queryLen: 10 }),
      () => trackCustomizeOpen({ fontId: "pretendard", source: "match" }),
      () => trackCustomizeSave({ fontId: "pretendard", hasCustomizations: true, nameLen: 5 }),
      () => trackExportCopy({ channel: "css", surface: "modal", fontId: "pretendard" }),
      () => trackModalTweak({ fontId: "pretendard", kind: "color" }),
      () => trackModalReset("pretendard"),
      () => trackSavedOpen("pretendard"),
      () => trackSavedDelete("pretendard"),
      () => trackExternalClick({ destination: "get_font", fontId: "pretendard" }),
      () => trackShareLand("pretendard"),
    ];

    for (const fire of eventsWithId) {
      mockedEvent.mockClear();
      fire();
      const [, params] = lastCall();
      expect(params).toHaveProperty("reference", "pretendard");
      expect(params).not.toHaveProperty("font_id");
      expect(params).not.toHaveProperty("ref_id");
    }
  });
});

describe("analytics — cardinality controls", () => {
  it("bucket lengths into stable string ranges", () => {
    const cases: Array<[number, string]> = [
      [0, "0"],
      [1, "1-5"],
      [5, "1-5"],
      [6, "6-15"],
      [15, "6-15"],
      [16, "16-30"],
      [30, "16-30"],
      [31, "31-60"],
      [60, "31-60"],
      [61, "61-120"],
      [120, "61-120"],
      [121, "121+"],
      [9999, "121+"],
    ];

    for (const [len, expected] of cases) {
      mockedEvent.mockClear();
      trackHeroSubmit({ queryLen: len, scripts: [], source: "input" });
      const [, params] = lastCall();
      expect(params.query_len_bucket).toBe(expected);
    }
  });

  it("sorts scripts alphabetically before joining so order never leaks", () => {
    // hangul + latin vs latin + hangul must collapse to the same string
    mockedEvent.mockClear();
    trackHeroSubmit({ queryLen: 10, scripts: ["latin", "hangul"], source: "input" });
    const [, a] = lastCall();

    mockedEvent.mockClear();
    trackHeroSubmit({ queryLen: 10, scripts: ["hangul", "latin"], source: "input" });
    const [, b] = lastCall();

    expect(a.scripts).toBe(b.scripts);
    expect(a.scripts).toBe("hangul+latin");
  });

  it("empty scripts array becomes `any` (not '')", () => {
    trackHeroSubmit({ queryLen: 10, scripts: [], source: "input" });
    const [, params] = lastCall();
    expect(params.scripts).toBe("any");
  });
});

describe("analytics — match_view carries the fallback reason only when present", () => {
  it("AI path does not include fallback_reason", () => {
    trackMatchView({ kind: "ai", pickCount: 3, queryLen: 10, scripts: ["latin"] });
    const [name, params] = lastCall();
    expect(name).toBe("fp_match_view");
    expect(params.kind).toBe("ai");
    expect(params).not.toHaveProperty("fallback_reason");
  });

  it("fallback path includes the reason", () => {
    trackMatchView({
      kind: "fallback",
      pickCount: 3,
      queryLen: 10,
      scripts: ["latin"],
      fallbackReason: "rate_limited",
    });
    const [, params] = lastCall();
    expect(params.kind).toBe("fallback");
    expect(params.fallback_reason).toBe("rate_limited");
  });
});

describe("analytics — stage_enter carries from/to", () => {
  it("first entry uses `init` when `from` is null", () => {
    trackStageEnter({ to: "hero", from: null });
    const [, params] = lastCall();
    expect(params.to).toBe("hero");
    expect(params.from).toBe("init");
  });

  it("later transitions pass the previous stage verbatim", () => {
    trackStageEnter({ to: "match", from: "hero" });
    const [, params] = lastCall();
    expect(params).toMatchObject({ to: "match", from: "hero" });
  });
});
