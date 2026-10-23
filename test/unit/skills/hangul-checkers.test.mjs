import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const repoRoot = resolve(import.meta.dirname, "../../..");
const scripts = resolve(repoRoot, "skills/hangul/scripts");
const selfTest = (name) => execFileSync(process.execPath, [resolve(scripts, name), "--self-test"], { encoding: "utf8" });

describe("hangul checkers", () => {
  it("typography checker passes its fixtures", () => {
    expect(selfTest("check.mjs")).toContain("self-test: PASS");
  });

  it("copy checker passes its fixtures", () => {
    expect(selfTest("copy-check.mjs")).toContain("self-test: PASS");
  });

  it("copy checker reports every writing rule the skill lists", () => {
    const skill = readFileSync(resolve(repoRoot, "skills/hangul/SKILL.md"), "utf8");
    const listed = [...skill.matchAll(/^\d+\.\s+\*\*(HW-\d+)\b/gm)].map((m) => m[1]);
    expect(listed).toEqual(Array.from({ length: 14 }, (_, i) => `HW-${i + 1}`));
    const checker = readFileSync(resolve(scripts, "copy-check.mjs"), "utf8");
    for (const id of listed) expect(checker).toContain(`id: '${id}'`);
  });

  it("copy checker exits 1 on a misspelling and 0 on clean copy", () => {
    const run = (dir) => {
      try {
        execFileSync(process.execPath, [resolve(scripts, "copy-check.mjs"), resolve(scripts, "fixtures/copy", dir)], { encoding: "utf8" });
        return 0;
      } catch (error) {
        return error.status;
      }
    };
    expect(run("bad")).toBe(1);
    expect(run("good")).toBe(0);
  });
});
