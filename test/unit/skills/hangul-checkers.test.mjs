import { execFileSync, spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const repoRoot = resolve(import.meta.dirname, "../../..");
const scripts = resolve(repoRoot, "skills/hangul/scripts");
const selfTest = (name) => execFileSync(process.execPath, [resolve(scripts, name), "--self-test"], { encoding: "utf8" });
const run = (name, args, cwd = repoRoot) => spawnSync(process.execPath, [resolve(scripts, name), ...args], { cwd, encoding: "utf8" });
const checkers = [
  { name: "copy-check.mjs", fixture: "fixtures/copy" },
  { name: "check.mjs", fixture: "fixtures" },
];
const levels = { BLOCK: "error", WARN: "warning", FYI: "notice" };

function expectGithubCounts(result, jsonResult) {
  const report = JSON.parse(jsonResult.stdout);
  const lines = result.stdout.trimEnd().split("\n");
  expect(result.status).toBe(jsonResult.status);
  expect(result.status).toBe(report.exit);
  expect(result.stderr).toBe("");
  for (const [severity, level] of Object.entries(levels)) {
    expect(lines.filter((line) => line.startsWith(`::${level} `))).toHaveLength(report.summary[severity]);
  }
  expect(lines).toHaveLength(report.findings.length + 1);
  expect(lines.at(-1)).toBe(`${report.summary.BLOCK} BLOCK · ${report.summary.WARN} WARN · ${report.summary.FYI} FYI · exit ${report.exit}`);
  return lines;
}

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

  it.each(checkers)("$name emits one GitHub annotation per finding", ({ name, fixture }) => {
    const bad = resolve(scripts, fixture, "bad");
    for (const flags of [[], ["--strict"]]) {
      const json = run(name, ["--json", ...flags, bad]);
      const github = run(name, ["--format=github", ...flags, bad]);
      const lines = expectGithubCounts(github, json);
      expect(github.status).toBe(1);
      expect(lines.at(-1)).toBe(run(name, [...flags, bad]).stdout.trimEnd().split("\n").at(-1));
      for (const [index, finding] of JSON.parse(json.stdout).findings.entries()) {
        expect(lines[index]).toMatch(/^::(?:error|warning|notice) file=.+,line=\d+,title=(?:HW|HG)-[\w-]+::/);
        expect(lines[index]).toContain(`file=${finding.file},line=${finding.line},title=${finding.rule}::`);
      }
    }
  });

  it.each(checkers)("$name prints just the summary when there are no findings", ({ name, fixture }) => {
    const good = resolve(scripts, fixture, "good");
    expectGithubCounts(run(name, ["--format=github", good]), run(name, ["--json", good]));
  });

  it.each(checkers)("$name escapes GitHub paths and messages and keeps strict exits", ({ name }) => {
    const dir = mkdtempSync(resolve(tmpdir(), "hangul-github-"));
    const file = "copy,:100%\r\n.html";
    try {
      writeFileSync(resolve(dir, file), '<html lang="ko">\n<style>body { font-family: "Example,:100%\r\nFace", sans-serif; }</style>\n<body><p>볼수 있어요.</p><img alt="50%,: 사진" /></body>\n</html>\n');
      const json = run(name, ["--json", file], dir);
      const github = run(name, ["--format=github", file], dir);
      const lines = expectGithubCounts(github, json);
      expect(github.status).toBe(0);
      const annotations = lines.slice(0, -1);
      expect(annotations.length).toBeGreaterThan(0);
      for (const line of annotations) {
        expect(line).toContain(" file=copy%2C%3A100%25%0D%0A.html,line=");
        expect(line).not.toContain("\r");
      }
      if (name === "check.mjs") {
        expect(annotations.some((line) => line.includes("Example,:100%25%0D%0AFace"))).toBe(true);
      } else {
        expect(annotations.some((line) => line.includes("alt text '50%25,: 사진'"))).toBe(true);
      }
      const strict = run(name, ["--format=github", "--strict", file], dir);
      expectGithubCounts(strict, run(name, ["--json", "--strict", file], dir));
      expect(strict.status).toBe(1);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it.each(checkers)("$name rejects GitHub output combined with JSON", ({ name, fixture }) => {
    for (const flags of [["--format=github", "--json"], ["--json", "--format=github"]]) {
      for (const inputs of [[], [resolve(scripts, fixture, "bad")]]) {
        const result = run(name, [...flags, ...inputs]);
        expect(result.status).toBe(2);
        expect(result.stdout).toBe("");
        expect(result.stderr).toBe("--format=github cannot be used with --json\n");
      }
    }
  });

  it("copy checker keeps context selection and string listings with GitHub output", () => {
    const fixture = resolve(scripts, "fixtures/copy/ctx-report");
    for (const context of ["report", "app"]) {
      expectGithubCounts(
        run("copy-check.mjs", ["--format=github", "--context", context, fixture]),
        run("copy-check.mjs", ["--json", `--context=${context}`, fixture]),
      );
    }
    const human = run("copy-check.mjs", ["--list", "--context=report", fixture]);
    const github = run("copy-check.mjs", ["--format=github", "--list", "--context=report", fixture]);
    const listings = (output) => output.split("\n").filter((line) => /  \[/.test(line));
    expect(listings(human.stdout).length).toBeGreaterThan(0);
    expect(listings(github.stdout)).toEqual(listings(human.stdout));
    expect(github.status).toBe(human.status);
  });
});
