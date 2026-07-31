import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { buildHumanEscalationGallery } from "../../../benchmarks/ui-resolve-bench/scripts/build-human-escalation-gallery.mjs";

function writeJson(path, value) {
  mkdirSync(join(path, ".."), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

function fixture() {
  const root = mkdtempSync(join(tmpdir(), "ui-resolve-human-gallery-"));
  const runs = join(root, "runs");
  const candidates = ["slate", "ember"].map((variant) => {
    const directory = `onboarding-t1-${variant}`;
    const screenshots = join(runs, directory, ".benchmark", "screenshots");
    mkdirSync(screenshots, { recursive: true });
    writeFileSync(join(screenshots, "desktop.png"), `${variant}-desktop`);
    writeFileSync(join(screenshots, "mobile.png"), `${variant}-mobile`);
    return {
      variant_id: `private-${variant}`,
      label: "candidate",
      directories: [directory],
    };
  });
  const selection = join(root, "selection.json");
  writeJson(selection, {
    schema_version: "0.1",
    methodology_epoch: "fixture-v1",
    selected: [{
      pair_key: "onboarding-trial-1",
      task: {
        id: "onboarding-setup-v0.1-trial-1",
        version: "0.3.0",
        core_prompt_sha256: "fixture",
      },
      selection: "unresolved",
      candidates,
      reasons: {
        cross_judge_disagreement: { fidelity: ["private-ember", "private-slate"] },
        reversal_inconsistency: {},
        tie_or_both_fail: {},
      },
    }],
  });
  const salt = join(root, "salt.txt");
  writeFileSync(salt, "fixture-private-salt-value");
  return { root, runs, selection, salt };
}

describe("UI-Resolve human escalation gallery", () => {
  it("groups selected trials into identity-free family pages", () => {
    const data = fixture();
    const out = join(data.root, "public");
    const reveal = join(data.root, "private", "reveal.json");
    const result = buildHumanEscalationGallery({
      selectionPath: data.selection,
      runsRoot: data.runs,
      out,
      revealOut: reveal,
      saltFile: data.salt,
      reviewer: "owner",
    });
    expect(result).toMatchObject({ families: 1, comparisons: 1 });
    const html = readFileSync(join(out, "onboarding-setup-v0.1", "index.html"), "utf8");
    expect(html).toContain("Export this page");
    expect(html).toContain("focus({preventScroll:true})");
    expect(html).not.toContain("private-slate");
    expect(html).not.toContain("private-ember");
    expect(readFileSync(reveal, "utf8")).toContain("private-slate");
  });

  it("keeps private reveals outside the public gallery", () => {
    const data = fixture();
    const out = join(data.root, "public");
    expect(() => buildHumanEscalationGallery({
      selectionPath: data.selection,
      runsRoot: data.runs,
      out,
      revealOut: join(out, "reveal.json"),
      saltFile: data.salt,
      reviewer: "owner",
    })).toThrow(/separate/i);
  });
});
