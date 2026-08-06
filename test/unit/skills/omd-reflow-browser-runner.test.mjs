import { chmodSync, mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { delimiter, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { afterEach, describe, expect, it } from "vitest";

const repoRoot = resolve(import.meta.dirname, "../../..");
const runner = resolve(repoRoot, "skills/omd-apply/scripts/reflow-browser-runner.sh");
const roots = [];

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

describe("reflow browser runner", () => {
  it("derives the locked product and sibling helper before one browser-harness exec", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-runner-"));
    roots.push(root);
    const bin = join(root, "bin");
    mkdirSync(bin);
    const fakeBrowserHarness = join(bin, "browser-harness");
    writeFileSync(fakeBrowserHarness, [
      "#!/bin/sh",
      "printf '%s\\n' \"$OMD_REFLOW_ARTIFACT\" \"$OMD_REFLOW_PRODUCT\" \"$OMD_REFLOW_HELPER\"",
    ].join("\n"));
    chmodSync(fakeBrowserHarness, 0o755);
    const artifact = join(root, "closure.json");
    writeFileSync(artifact, JSON.stringify({
      static_closure_manifest: { product_path: "surfaces/review.html" },
    }));

    const result = spawnSync("sh", [runner], {
      cwd: root,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${bin}${delimiter}${process.env.PATH ?? ""}`,
        OMD_REFLOW_ARTIFACT: artifact,
      },
    });

    expect(result.status).toBe(0);
    const [reportedArtifact, product, helper] = result.stdout.trim().split("\n");
    expect(reportedArtifact).toBe(artifact);
    expect(product).toBe("surfaces/review.html");
    expect(helper).toBe(resolve(repoRoot, "skills/omd-apply/scripts/reflow-artifact.mjs"));
  });

  it("fails before browser execution when the artifact is absent", () => {
    const result = spawnSync("sh", [runner], {
      encoding: "utf8",
      env: { ...process.env, OMD_REFLOW_ARTIFACT: "/tmp/omd-missing-reflow-artifact.json" },
    });
    expect(result.status).toBe(2);
    expect(result.stderr).toContain("missing artifact");
  });
});
