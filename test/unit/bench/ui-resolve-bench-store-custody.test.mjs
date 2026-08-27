import { execFileSync } from "node:child_process";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { boundReportDirs, ignoredExceptions } from "../../../scripts/bench-store.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");

/**
 * Bench run outputs live in the immutable store, not git. The exception is a run
 * something in git reads BY PATH — those have to survive a clean checkout or the
 * gate reading them cannot run at all.
 *
 * This suite exists because that invariant broke silently once: --ingest untracked
 * 634 report directories while nine test files went on reading them, and because an
 * untrack leaves the working copy behind, the suite kept passing here and failed on
 * every clean checkout for three days. Nothing compared the two lists.
 */
describe("bench store custody", () => {
  const bound = boundReportDirs();

  it("has runs that git binds by path at all", () => {
    // A zero here would make both assertions below vacuously true.
    expect(bound.length).toBeGreaterThan(0);
  });

  it("keeps every path-bound run out of the store-only ignore", () => {
    // Regenerate with: node scripts/bench-store.mjs --sync-ignore
    expect(ignoredExceptions()).toEqual(bound);
  });

  it("commits them, so a clean checkout can read what the gates read", () => {
    const trackedDirs = new Set(
      execFileSync("git", ["ls-files", "benchmarks/ui-resolve-bench/reports"], { cwd: repoRoot })
        .toString("utf8").split("\n").filter(Boolean)
        .map((path) => path.split("/")[3]),
    );
    expect(bound.filter((dir) => !trackedDirs.has(dir))).toEqual([]);
  });
});
