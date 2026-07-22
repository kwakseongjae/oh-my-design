import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { treeManifest } from "../../../benchmarks/ui-resolve-bench/scripts/_lib.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const prepare = join(repoRoot, "benchmarks/ui-resolve-bench/scripts/prepare-sandbox.mjs");
const competitors = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/competitors.json"), "utf8"));
const families = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/benchmark-families.json"), "utf8"));
const releaseTrain = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/release-train.json"), "utf8"));
const pinnedVendors = "/tmp/omd-ui-skills-bench/vendors";
const taskIds = ["pricing-conversion-v0.1", "onboarding-setup-v0.1", "incident-operations-v0.1"];

function prepareVariant(variant, { vendors = null, offLabel = false } = {}) {
  const parent = mkdtempSync(join(tmpdir(), "ui-resolve-test-"));
  const out = join(parent, variant);
  const command = [prepare, "--task", "pricing-conversion-v0.1", "--variant", variant, "--out", out];
  if (vendors) command.push("--vendors", vendors);
  if (offLabel) command.push("--allow-off-label");
  if (competitors.variants[variant]?.declared_name && !competitors.variants[variant]?.vendor_dir) {
    command.push("--allow-dirty-source");
  }
  execFileSync(
    process.execPath,
    command,
    { cwd: repoRoot, encoding: "utf8" },
  );
  return out;
}

function installedSkillName(path) {
  const content = readFileSync(path, "utf8");
  const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  expect(frontmatter, `${path} must contain frontmatter`).not.toBeNull();
  const value = frontmatter[1].match(/^name:\s*(.+?)\s*$/m)?.[1];
  expect(value, `${path} must declare a name`).toBeTruthy();
  return value.replace(/^(?:"([\s\S]*)"|'([\s\S]*)')$/, (_, doubleQuoted, singleQuoted) => (
    doubleQuoted ?? singleQuoted
  ));
}

describe("UI-Resolve Bench sandbox preparation", () => {
  it("locks a three-task smoke slice with distinct state adapters and task-owned design oracles", () => {
    const tasks = taskIds.map((taskId) => JSON.parse(readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks", taskId, "task.json"),
      "utf8",
    )));
    expect(tasks.map((task) => task.behavior_adapter)).toEqual([
      "pricing-v1",
      "onboarding-v1",
      "dashboard-v1",
    ]);
    expect(tasks.every((task) => task.design_oracle?.selectors && task.design_oracle?.font_family)).toBe(true);
    expect(tasks.every((task) => task.viewports.some((viewport) => viewport.name === "css-zoom-surrogate-200"))).toBe(true);
  });

  it("keeps model, skill, harness, prompt arena, and transfer results in separate families", () => {
    expect(Object.keys(families.families)).toEqual(["model", "skill", "harness", "prompt-arena", "factorial"]);
    expect(families.families.model.skills_allowed).toBe(false);
    expect(families.families.skill.paired_baseline).toBe("no-skill");
    expect(families.families.harness.rank_mode).toBe("pareto");
    expect(families.families["prompt-arena"].public_rank).toBe(false);
    expect(families.sample_policy).toMatchObject({
      patch_smoke: { tasks: 3, runs_per_task: 3 },
      internal_candidate: { tasks: 12, runs_per_task: 5 },
      verified_public: { minimum_tasks: 24, runs_per_task: 10 },
    });
  });

  it("defines every 0.0.1 patch experiment without allowing the calendar to force 2.0.0", () => {
    const patchVersions = releaseTrain.releases
      .map((release) => release.version)
      .filter((version) => version.startsWith('1.9.'));
    expect(patchVersions.length).toBeGreaterThanOrEqual(14);
    expect(patchVersions).toEqual(
      Array.from({ length: patchVersions.length }, (_, index) => `1.9.${index + 1}`),
    );
    expect(releaseTrain.releases.at(-1)).toMatchObject({ status: "gated", experiment: "frontier-release" });
    expect(releaseTrain.rules).toMatchObject({
      benchmark_and_product_versions_are_separate: true,
      failed_experiments_remain_visible: true,
      score_rule_change_requires_suite_version: true,
      calendar_can_force_2_0_0: false,
      number_9_can_force_2_0_0: false,
      continue_patch_train_until_frontier_gates: true,
    });
  });

  it("separates no-context and raw DESIGN.md controls", () => {
    const baseline = prepareVariant("baseline");
    const raw = prepareVariant("raw-design-md");

    expect(existsSync(join(baseline, "DESIGN.md"))).toBe(false);
    expect(existsSync(join(raw, "DESIGN.md"))).toBe(true);
    expect(readFileSync(join(raw, ".benchmark/PROMPT.md"), "utf8")).toContain("If this repository contains `DESIGN.md`");
  });

  it("copies the canonical OmD skill without executing installers or hooks", () => {
    const out = prepareVariant("omd-portable");
    const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
    const prompt = readFileSync(join(out, ".benchmark/PROMPT.md"), "utf8");

    expect(existsSync(join(out, ".agents/skills/omd-apply/SKILL.md"))).toBe(true);
    expect(installedSkillName(join(out, ".agents/skills/omd-apply/SKILL.md"))).toBe("omd:apply");
    expect(prompt).toContain("$omd:apply");
    expect(prompt).not.toContain("$omd-apply");
    expect(existsSync(join(out, ".codex/agents"))).toBe(false);
    expect(existsSync(join(out, ".claude/agents"))).toBe(false);
    expect(existsSync(join(out, ".opencode/agents"))).toBe(false);
    expect(manifest.skill.files).toBeGreaterThan(0);
    expect(manifest.skill).toMatchObject({
      declared_name: "omd:apply",
      install_platform: "agents",
      install_root: ".agents/skills",
      install_dir: "omd-apply",
      install_adapter: "omd-channel-name-v1",
      source_attestation: expect.objectContaining({
        vcs: "git",
        dirty: expect.any(Boolean),
        explicit_dirty_opt_in: expect.any(Boolean),
        publishable: expect.any(Boolean),
      }),
    });
    expect(manifest.skill.source_attestation.explicit_dirty_opt_in)
      .toBe(manifest.skill.source_attestation.dirty);
    expect(manifest.skill.source_attestation.publishable)
      .toBe(!manifest.skill.source_attestation.dirty);
    expect(manifest.task.core_prompt_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(manifest.task.prompt_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(manifest.task.prompt_sha256).not.toBe(manifest.task.core_prompt_sha256);
    expect(manifest.variant.activation_delta).toContain("$omd:apply");
    expect(manifest.variant.activation_delta_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(manifest.safety).toEqual({
      third_party_installer_executed: false,
      hooks_enabled: false,
      agent_tool_enabled: false,
      source_symlinks_allowed: false,
    });
  });

  it("adapts the same OmD source contract to Claude Code without loading Codex shims", () => {
    const parent = mkdtempSync(join(tmpdir(), "ui-resolve-claude-"));
    const out = join(parent, "omd-portable");
    execFileSync(process.execPath, [
      prepare,
      "--task", "pricing-conversion-v0.1",
      "--variant", "omd-portable",
      "--out", out,
      "--runtime", "claude-code",
      "--allow-dirty-source",
    ], { cwd: repoRoot, encoding: "utf8" });
    const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));

    expect(existsSync(join(out, ".claude/skills/omd-apply/SKILL.md"))).toBe(true);
    expect(existsSync(join(out, ".agents/skills/omd-apply/SKILL.md"))).toBe(false);
    expect(existsSync(join(out, "CLAUDE.md"))).toBe(true);
    expect(existsSync(join(out, "AGENTS.md"))).toBe(false);
    expect(manifest).toMatchObject({
      runtime_target: "claude-code",
      skill: {
        declared_name: "omd:apply",
        install_platform: "claude-code",
        install_root: ".claude/skills",
      },
    });
  });

  it("preregisters declared names separately from install directories", () => {
    expect(competitors.variants["taste-skill"]).toMatchObject({
      install_root: ".agents/skills",
      install_dir: "design-taste-frontend",
      declared_name: "design-taste-frontend",
      activation: expect.stringContaining("$design-taste-frontend"),
    });
    expect(competitors.variants["omd-portable"]).toMatchObject({
      install_dir: "omd-apply",
      declared_name: "omd:apply",
      activation: expect.stringContaining("$omd:apply"),
    });
    expect(competitors.variants["omd-repair-harness"]).toMatchObject({
      kind: "agent-harness",
      declared_name: "omd:apply",
      agent_bundle: [
        { id: "omd-ux-writer" },
        { id: "omd-ux-engineer" },
      ],
      required_agent_model: "opus",
      activation: expect.stringContaining("Agent tool"),
    });
    expect(competitors.variants["omd-repair-harness"].activation).toContain("allowed_delta 0");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("bounded-repair-advisory");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("about 600 words");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("before 450 seconds");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("before 810 seconds");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("do not write a DOM shim");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("checklist and observed result, not an executable artifact");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("CDP/browser automation");
    expect(competitors.variants["omd-repair-harness"].activation).toContain("direct browser command that writes no verification program");
    expect(competitors.variants["omd-full-harness"]).toMatchObject({
      install_dir: "omd-harness",
      install_adapter: "omd-channel-name-v1",
      declared_name: "omd:harness",
      activation: expect.stringContaining("$omd:harness"),
    });
    for (const variant of Object.values(competitors.variants).filter((item) => item.declared_name)) {
      expect(variant.activation).toContain(`$${variant.declared_name}`);
      expect(variant.install_dir).not.toContain("/");
    }
  });

  it("installs the repair harness as a separate Claude agent-enabled arm", () => {
    const parent = mkdtempSync(join(tmpdir(), "ui-resolve-harness-"));
    const out = join(parent, "omd-repair-harness");
    execFileSync(process.execPath, [
      prepare,
      "--task", "pricing-conversion-v0.1",
      "--variant", "omd-repair-harness",
      "--out", out,
      "--runtime", "claude-code",
      "--allow-dirty-source",
    ], { cwd: repoRoot, encoding: "utf8" });
    const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
    const writer = readFileSync(join(out, ".claude/agents/omd-ux-writer.md"), "utf8");
    const engineer = readFileSync(join(out, ".claude/agents/omd-ux-engineer.md"), "utf8");

    expect(existsSync(join(out, ".claude/skills/omd-apply/SKILL.md"))).toBe(true);
    expect(writer).toContain("model: opus");
    expect(engineer).toContain("model: opus");
    expect(writer).toContain("advisory-only Harness Track run");
    expect(manifest.variant.kind).toBe("agent-harness");
    expect(manifest.agents.required_model).toBe("opus");
    expect(manifest.agents.installed.map((agent) => agent.id)).toEqual([
      "omd-ux-writer",
      "omd-ux-engineer",
    ]);
    expect(manifest.safety).toMatchObject({
      hooks_enabled: false,
      agent_tool_enabled: true,
    });
  });

  it("keeps the OmD harness folder shim separate from its declared activation name", () => {
    const out = prepareVariant("omd-full-harness", { offLabel: true });
    const skillFile = join(out, ".agents/skills/omd-harness/SKILL.md");
    const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
    expect(installedSkillName(skillFile)).toBe("omd:harness");
    expect(readFileSync(join(out, ".benchmark/PROMPT.md"), "utf8")).toContain("$omd:harness");
    expect(manifest.skill).toMatchObject({
      declared_name: "omd:harness",
      install_root: ".agents/skills",
      install_dir: "omd-harness",
    });
    expect(manifest.variant.track_eligibility).toMatchObject({
      eligible: false,
      off_label: true,
      explicit_opt_in: true,
    });
  });

  it.runIf(existsSync(join(pinnedVendors, "taste-skill/.git")))(
    "installs Taste under its declared activation name instead of the repository folder name",
    () => {
      const out = prepareVariant("taste-skill", { vendors: pinnedVendors });
      const skillFile = join(out, ".agents/skills/design-taste-frontend/SKILL.md");
      const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
      expect(installedSkillName(skillFile)).toBe("design-taste-frontend");
      expect(existsSync(join(out, ".agents/skills/taste-skill"))).toBe(false);
      expect(readFileSync(join(out, ".benchmark/PROMPT.md"), "utf8")).toContain("$design-taste-frontend");
      expect(manifest.skill).toMatchObject({
        declared_name: "design-taste-frontend",
        install_root: ".agents/skills",
        install_dir: "design-taste-frontend",
      });
    },
  );

  it.runIf(existsSync(join(pinnedVendors, "ui-ux-pro-max/.git")))(
    "renders the reviewed official UI UX Pro Max Codex bundle without using its Claude template",
    () => {
      const out = prepareVariant("ui-ux-pro-max", { vendors: pinnedVendors });
      const skillFile = join(out, ".codex/skills/ui-ux-pro-max/SKILL.md");
      const manifest = JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8"));
      expect(installedSkillName(skillFile)).toBe("ui-ux-pro-max");
      expect(existsSync(join(out, ".agents/skills/ui-ux-pro-max"))).toBe(false);
      expect(existsSync(join(out, ".codex/skills/ui-ux-pro-max/data/styles.csv"))).toBe(true);
      expect(existsSync(join(out, ".codex/skills/ui-ux-pro-max/scripts/search.py"))).toBe(true);
      for (const bundled of ["banner-design", "brand", "design", "design-system", "slides", "ui-styling"]) {
        expect(installedSkillName(join(out, ".codex/skills", bundled, "SKILL.md"))).toBe(bundled);
      }
      expect(manifest.skill).toMatchObject({
        declared_name: "ui-ux-pro-max",
        install_platform: "codex",
        install_root: ".codex/skills",
        install_dir: "ui-ux-pro-max",
        install_adapter: "official-codex-template-v2.5.0",
        bundled_skills: ["banner-design", "brand", "design", "design-system", "slides", "ui-styling"],
      });
      expect(readFileSync(join(out, ".benchmark/PROMPT.md"), "utf8")).toContain("$ui-ux-pro-max");
    },
  );

  it("hashes file trees deterministically and rejects escaping symlinks", () => {
    const root = mkdtempSync(join(tmpdir(), "ui-resolve-tree-"));
    mkdirSync(join(root, "nested"));
    writeFileSync(join(root, "nested", "a.txt"), "same", "utf8");
    const first = treeManifest(root).sha256;
    const second = treeManifest(root).sha256;
    expect(second).toBe(first);

    symlinkSync("/tmp", join(root, "escape"));
    expect(() => treeManifest(root)).toThrow(/symlink is not allowed/);
  });
});
