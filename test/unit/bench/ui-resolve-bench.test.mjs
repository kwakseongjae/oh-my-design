import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { treeManifest } from "../../../benchmarks/ui-resolve-bench/scripts/_lib.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const prepare = join(repoRoot, "benchmarks/ui-resolve-bench/scripts/prepare-sandbox.mjs");
const competitors = JSON.parse(readFileSync(join(repoRoot, "benchmarks/ui-resolve-bench/competitors.json"), "utf8"));
const pinnedVendors = "/tmp/omd-ui-skills-bench/vendors";

function prepareVariant(variant, { vendors = null, offLabel = false } = {}) {
  const parent = mkdtempSync(join(tmpdir(), "ui-resolve-test-"));
  const out = join(parent, variant);
  const command = [prepare, "--task", "pricing-conversion-v0.1", "--variant", variant, "--out", out];
  if (vendors) command.push("--vendors", vendors);
  if (offLabel) command.push("--allow-off-label");
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
    });
    expect(manifest.task.core_prompt_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(manifest.task.prompt_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(manifest.task.prompt_sha256).not.toBe(manifest.task.core_prompt_sha256);
    expect(manifest.variant.activation_delta).toContain("$omd:apply");
    expect(manifest.variant.activation_delta_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(manifest.safety).toEqual({
      third_party_installer_executed: false,
      hooks_enabled: false,
      source_symlinks_allowed: false,
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
    expect(competitors.variants["omd-full-harness"]).toMatchObject({
      install_dir: "omd-harness",
      declared_name: "omd:harness",
      activation: expect.stringContaining("$omd:harness"),
    });
    for (const variant of Object.values(competitors.variants).filter((item) => item.declared_name)) {
      expect(variant.activation).toContain(`$${variant.declared_name}`);
      expect(variant.install_dir).not.toContain("/");
    }
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
