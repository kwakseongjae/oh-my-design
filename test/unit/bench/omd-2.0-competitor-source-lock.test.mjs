import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { mkdtempSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  auditCheckedOutSources,
  projectOfficialUiUxCodexInstall,
  validateLockShape,
} from "../../../benchmarks/ui-resolve-bench/scripts/audit-omd-2.0-competitor-source-lock.mjs";
import { sha256, treeManifest } from "../../../benchmarks/ui-resolve-bench/scripts/_lib.mjs";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../../..");
const lockPath = join(repoRoot, "benchmarks/ui-resolve-bench/config/omd-2.0-competitor-source-lock-v0.1.json");
const auditScript = join(repoRoot, "benchmarks/ui-resolve-bench/scripts/audit-omd-2.0-competitor-source-lock.mjs");
const lock = JSON.parse(readFileSync(lockPath, "utf8"));

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function git(cwd, args) {
  return execFileSync("git", args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

function createSyntheticCheckout(root, source, index) {
  const checkout = join(root, source.checkout_dir);
  mkdirSync(join(checkout, source.source_path), { recursive: true });
  if (source.id === "ui-ux-pro-max-2.14.2-2.0") {
    const assets = join(checkout, source.source_path);
    mkdirSync(join(assets, "templates/base"), { recursive: true });
    mkdirSync(join(assets, "templates/platforms"), { recursive: true });
    mkdirSync(join(assets, "data"), { recursive: true });
    mkdirSync(join(assets, "scripts"), { recursive: true });
    writeFileSync(join(assets, "templates/base/skill-content.md"), "# {{TITLE}}\n{{DESCRIPTION}}\n{{QUICK_REFERENCE}}\n", "utf8");
    writeFileSync(join(assets, "templates/base/quick-reference.md"), "Pinned quick reference.\n", "utf8");
    writeFileSync(join(assets, "templates/platforms/codex.json"), `${JSON.stringify({
      platform: "codex",
      installType: "full",
      folderStructure: { root: ".agents", skillPath: "skills/ui-ux-pro-max", filename: "SKILL.md" },
      scriptPath: "skills/ui-ux-pro-max/scripts/search.py",
      frontmatter: { name: "ui-ux-pro-max", description: "fixture" },
      sections: { quickReference: true },
      title: "ui-ux-pro-max",
      description: "fixture",
      skillOrWorkflow: "Skill",
    }, null, 2)}\n`, "utf8");
    writeFileSync(join(assets, "data/styles.csv"), "style\nfixture\n", "utf8");
    writeFileSync(join(assets, "scripts/search.py"), "print('fixture')\n", "utf8");
    for (const bundled of source.install.bundled_skills) {
      mkdirSync(join(assets, "skills", bundled), { recursive: true });
      writeFileSync(join(assets, "skills", bundled, "SKILL.md"), `---\nname: ${bundled}\n---\n`, "utf8");
    }
  } else {
    writeFileSync(join(checkout, source.source_path, "SKILL.md"), `---\nname: ${source.install.declared_name}\n---\n`, "utf8");
  }
  const licensePath = join(checkout, source.license.evidence_path);
  mkdirSync(dirname(licensePath), { recursive: true });
  if (!source.license.inside_source_boundary) writeFileSync(licensePath, `${source.license.spdx}\n`, "utf8");
  else writeFileSync(licensePath, `${source.license.spdx}\n`, "utf8");
  git(checkout, ["init", "-q"]);
  git(checkout, ["config", "user.email", "benchmark@example.invalid"]);
  git(checkout, ["config", "user.name", "Benchmark Fixture"]);
  git(checkout, ["add", "."]);
  git(checkout, ["commit", "-qm", `fixture-${index}`]);
  git(checkout, ["remote", "add", "origin", source.repository]);
  const commit = git(checkout, ["rev-parse", "HEAD"]);
  git(checkout, ["branch", "-M", "main"]);
  if (source.source_ref.requested_ref.startsWith("refs/tags/")) {
    const tag = source.source_ref.requested_ref.slice("refs/tags/".length);
    git(checkout, ["tag", tag]);
    source.source_ref.tag_object = null;
  } else {
    source.source_ref.requested_ref = "refs/heads/main";
  }
  source.source_ref.resolved_commit = commit;
  source.official_source = `${source.repository}/tree/${commit}/${source.source_path}`;
  const manifest = treeManifest(join(checkout, source.source_path));
  source.source_tree.files = manifest.files.length;
  source.source_tree.bytes = manifest.files.reduce((sum, file) => sum + file.bytes, 0);
  source.source_tree.sha256 = manifest.sha256;
  source.license.evidence_sha256 = sha256(readFileSync(licensePath));
  if (source.id === "ui-ux-pro-max-2.14.2-2.0") {
    const projection = projectOfficialUiUxCodexInstall(checkout, source);
    source.install_projection.files = projection.files.length;
    source.install_projection.bytes = projection.bytes;
    source.install_projection.sha256 = projection.sha256;
  }
  return checkout;
}

describe("OmD 2.0 competitor official-source lock", () => {
  it("pins only the four official repositories with exact immutable source evidence", () => {
    expect(() => validateLockShape(lock)).not.toThrow();
    expect(lock.sources.map((source) => [source.id, source.source_ref.requested_ref, source.source_ref.resolved_commit])).toEqual([
      ["anthropic-frontend-design-2.0", "refs/heads/main", "f17010c9bb483898c1d9c9f42dde2b3a98889434"],
      ["impeccable-4.0.4-prompt-bounded-2.0", "refs/tags/skill-v4.0.4", "9a949fb543d44cfb406f61bcab99d95d7f12cf1d"],
      ["ui-ux-pro-max-2.14.2-2.0", "refs/tags/v2.14.2", "0ed327fc18736cd0e9e073b007be17d581360908"],
      ["taste-skill-main-2.0", "refs/heads/main", "e988add20dab0fa97d7a76781c48961c8184288e"],
    ]);
    expect(lock.sources.map((source) => source.benchmark_variant_id)).toEqual([
      "anthropic-frontend-design",
      "impeccable-prompt-only",
      "ui-ux-pro-max",
      "taste-eligible-scope-only",
    ]);
    expect(lock.sources.every((source) => source.source_tree.files > 0 && source.source_tree.bytes > 0)).toBe(true);
    expect(lock.sources.every((source) => source.activation.prompt_extraction === "forbidden")).toBe(true);
    const uiUx = lock.sources.find((source) => source.id === "ui-ux-pro-max-2.14.2-2.0");
    expect(uiUx.install).toMatchObject({ platform: "codex", root: ".agents/skills", directory: "ui-ux-pro-max" });
    expect(uiUx.install_projection).toMatchObject({
      files: 147,
      bytes: 2480163,
      sha256: "2f5fc370aef42eb74b4806d951782bdd7e6297594e27a7731e0f6e682a371d84",
    });
    expect(lock.execution_boundary).toMatchObject({ provider_calls: 0, model_calls: 0, browser_calls: 0 });
  });

  it("keeps Taste prompt-only to its exact public MIT bundle and fails closed outside declared scope", () => {
    const taste = lock.sources.find((source) => source.id === "taste-skill-main-2.0");
    expect(taste.source_tree).toMatchObject({ files: 1, bytes: 87253 });
    expect(taste.license.spdx).toBe("MIT");
    expect(taste.activation.policy).toContain("entire exact file");
    expect(taste.activation.policy).toContain("No unpublished bundle");
    expect(taste.benchmark_eligibility.tracks).toEqual(["landing-page", "portfolio", "redesign"]);
    expect(taste.benchmark_eligibility.excluded).toEqual(["dashboard", "data-table", "multi-step-product-ui"]);
    expect(taste.benchmark_eligibility.fail_closed_policy).toContain("ineligible before matrix creation");
  });

  it("defines Impeccable prompt-only as bounded official local guidance rather than a SKILL-only extraction", () => {
    const impeccable = lock.sources.find((source) => source.id === "impeccable-4.0.4-prompt-bounded-2.0");
    expect(impeccable.activation.delivery_mode).toBe("full-official-skill-local-guidance-only");
    expect(impeccable.activation.prompt_only_definition).toContain("one-shot read-only context helper");
    expect(impeccable.activation.prompt_only_definition).toContain("SKILL.md alone would be an unreviewed extraction");
    expect(impeccable.benchmark_eligibility.excluded).toEqual([
      "hooks",
      "live-mode",
      "provider-backed-assets",
      "self-launched-browser",
    ]);
  });

  it("rejects repository substitution, prompt extraction, and nonzero execution calls", () => {
    const wrongRepository = clone(lock);
    wrongRepository.sources[0].repository = "https://example.com/not-official";
    expect(() => validateLockShape(wrongRepository)).toThrow(/official repository/);
    const extracted = clone(lock);
    extracted.sources[3].activation.prompt_extraction = "allowed";
    expect(() => validateLockShape(extracted)).toThrow(/permits prompt extraction/);
    const called = clone(lock);
    called.execution_boundary.model_calls = 1;
    expect(() => validateLockShape(called)).toThrow(/model_calls must stay zero/);
  });

  it("audits exact clean checkouts, refs, tree bytes, and license bytes without network", () => {
    const fixture = clone(lock);
    fixture.sources.forEach((source) => {
      source.source_ref.tag_object = null;
    });
    const root = mkdtempSync(join(tmpdir(), "omd-2-competitor-lock-"));
    fixture.sources.forEach((source, index) => createSyntheticCheckout(root, source, index));
    const report = auditCheckedOutSources(fixture, root);
    expect(report.status).toBe("pass");
    expect(report.checks).toHaveLength(4);
    expect(report.checks.map((check) => check.benchmark_variant_id)).toEqual([
      "anthropic-frontend-design",
      "impeccable-prompt-only",
      "ui-ux-pro-max",
      "taste-eligible-scope-only",
    ]);
    expect(report.checks.every((check) => check.clean_checkout)).toBe(true);
    expect(report.checks.find((check) => check.id === "ui-ux-pro-max-2.14.2-2.0").install_materialization_match).toBe(true);
    expect(report).toMatchObject({ provider_calls: 0, model_calls: 0, browser_calls: 0 });
  });

  it("supports a provider-free lock-only CLI preflight", () => {
    const output = execFileSync(process.execPath, [auditScript, "--lock-only"], {
      cwd: repoRoot,
      encoding: "utf8",
    });
    expect(JSON.parse(output)).toEqual({
      status: "pass",
      lock_id: "omd-2.0-competitor-source-lock-v0.1",
      sources: 4,
    });
  });
});
