#!/usr/bin/env node
import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { basename, dirname, join, relative, resolve } from "node:path";
import {
  assertInside,
  benchRoot,
  copyReviewedTree,
  parseArgs,
  readJson,
  repoRoot,
  sha256,
  treeManifest,
  writeJson,
} from "./_lib.mjs";
import { validateTaskContract } from "./task-contract.mjs";
import { currentObjectiveMethodology } from "./objective-methodology-contract.mjs";

const args = parseArgs();
const taskId = args.get("task");
const variantId = args.get("variant");
const out = args.get("out") ? resolve(String(args.get("out"))) : null;
const vendorsRoot = args.get("vendors") ? resolve(String(args.get("vendors"))) : null;
const runtime = String(args.get("runtime") ?? "codex");

if (!taskId || !variantId || !out) {
  console.error("usage: prepare-sandbox.mjs --task <id> --variant <id> --out <new-dir> [--runtime codex|claude-code|cursor] [--vendors <dir>] [--allow-off-label] [--allow-dirty-source]");
  process.exit(2);
}
if (!new Set(["codex", "claude-code", "cursor"]).has(runtime)) {
  throw new Error(`unsupported runtime: ${runtime}`);
}
if (existsSync(out)) throw new Error(`refusing to overwrite an existing run: ${out}`);

const competitors = readJson(join(benchRoot, "competitors.json"));
const variant = competitors.variants[variantId];
if (!variant) throw new Error(`unknown variant: ${variantId}`);

const taskRoot = assertInside(join(benchRoot, "tasks"), join(benchRoot, "tasks", taskId));
const starterRoot = join(taskRoot, "starter");
const task = validateTaskContract(readJson(join(taskRoot, "task.json")));
const promptFile = readFileSync(join(taskRoot, "PROMPT.md"), "utf8");
const promptSource = promptFile.trim();

const normalizeTrack = (value) => String(value ?? "")
  .trim()
  .toLowerCase()
  .replace(/[\s_]+/g, "-");
const taskTrack = normalizeTrack(task.track);
const eligibleTracks = [...new Set((variant.eligible_tracks ?? []).map(normalizeTrack).filter(Boolean))];
const trackEligible = eligibleTracks.includes(taskTrack);
const offLabelOptIn = args.get("allow-off-label") === true || args.get("allow-off-label") === "true";
if (!taskTrack) throw new Error(`${taskId} does not declare a track`);
if (!trackEligible && !offLabelOptIn) {
  throw new Error(
    `${variantId} is not eligible for the ${taskTrack} track (eligible: ${eligibleTracks.join(", ") || "none"}). ` +
    "Use --allow-off-label only for an explicitly labelled diagnostic run.",
  );
}

copyReviewedTree(starterRoot, out);
if (variant.include_design_contract === false) rmSync(join(out, "DESIGN.md"), { force: true });

function frontmatterName(skillFile) {
  const content = readFileSync(skillFile, "utf8");
  const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!frontmatter) throw new Error(`skill is missing YAML frontmatter: ${skillFile}`);
  const name = frontmatter[1].match(/^name:\s*(.+?)\s*$/m)?.[1];
  if (!name) throw new Error(`skill frontmatter is missing name: ${skillFile}`);
  return name.replace(/^(?:"([\s\S]*)"|'([\s\S]*)')$/, (_, doubleQuoted, singleQuoted) => (
    doubleQuoted ?? singleQuoted
  ));
}

function assertSkillContract(skillFile, expectedName) {
  const receivedName = frontmatterName(skillFile);
  if (receivedName !== expectedName) {
    throw new Error(`skill name mismatch at ${skillFile}: expected ${expectedName}, received ${receivedName}`);
  }
  return receivedName;
}

function gitHeadDetached(gitRoot) {
  const result = spawnSync(
    "git",
    ["-C", gitRoot, "symbolic-ref", "-q", "HEAD"],
    { encoding: "utf8" },
  );
  if (result.status === 0) return false;
  if (result.status === 1) return true;
  throw new Error(
    `failed to inspect Git HEAD attachment at ${gitRoot}: ${result.stderr?.trim() || `exit ${result.status}`}`,
  );
}

function renderInstalledSkillName(skillFile, expectedName) {
  const source = readFileSync(skillFile, "utf8");
  const rendered = source.replace(/^name:\s*[^\r\n]+$/m, `name: ${expectedName}`);
  if (rendered === source && frontmatterName(skillFile) !== expectedName) {
    throw new Error(`could not render installed skill name at ${skillFile}`);
  }
  writeFileSync(skillFile, rendered, "utf8");
}

function renderFrontmatter(frontmatter) {
  const lines = ["---"];
  for (const [key, value] of Object.entries(frontmatter ?? {})) {
    const serialized = /[:"\n]/.test(value)
      ? `"${value.replace(/"/g, '\\"')}"`
      : value;
    lines.push(`${key}: ${serialized}`);
  }
  lines.push("---", "");
  return lines.join("\n");
}

function installOfficialUiUxCodexBundle(vendorRoot, destination, installRoot, variantConfig) {
  const assetsRoot = assertInside(vendorRoot, join(vendorRoot, variantConfig.source_path));
  const platformConfig = readJson(join(assetsRoot, "templates", "platforms", "codex.json"));
  const configuredInstallRoot = join(platformConfig.folderStructure.root, dirname(platformConfig.folderStructure.skillPath));
  const configuredInstallDir = basename(platformConfig.folderStructure.skillPath);
  if (
    platformConfig.platform !== "codex" ||
    platformConfig.installType !== "full" ||
    configuredInstallRoot !== variantConfig.install_root ||
    configuredInstallDir !== variantConfig.install_dir ||
    platformConfig.frontmatter?.name !== variantConfig.declared_name
  ) {
    throw new Error("UI UX Pro Max pinned Codex template no longer matches the preregistered install contract");
  }

  const template = readFileSync(join(assetsRoot, "templates", "base", "skill-content.md"), "utf8");
  const quickReference = platformConfig.sections.quickReference
    ? readFileSync(join(assetsRoot, "templates", "base", "quick-reference.md"), "utf8")
    : "";
  const rendered = renderFrontmatter(platformConfig.frontmatter) + template
    .replace(/\{\{TITLE\}\}/g, platformConfig.title)
    .replace(/\{\{DESCRIPTION\}\}/g, platformConfig.description)
    .replace(/\{\{SCRIPT_PATH\}\}/g, platformConfig.scriptPath)
    .replace(/\{\{SKILL_OR_WORKFLOW\}\}/g, platformConfig.skillOrWorkflow)
    .replace(/\{\{QUICK_REFERENCE\}\}/g, quickReference ? `\n${quickReference}` : "");
  mkdirSync(destination, { recursive: true });
  writeFileSync(join(destination, platformConfig.folderStructure.filename), rendered, "utf8");
  copyReviewedTree(join(assetsRoot, "data"), join(destination, "data"));
  copyReviewedTree(join(assetsRoot, "scripts"), join(destination, "scripts"));

  const bundledSkillsRoot = join(assetsRoot, "skills");
  const bundled = readdirSync(bundledSkillsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  for (const bundledName of bundled) {
    const bundledDestination = join(installRoot, bundledName);
    copyReviewedTree(join(bundledSkillsRoot, bundledName), bundledDestination);
    assertSkillContract(join(bundledDestination, "SKILL.md"), bundledName);
  }
  return bundled;
}

let skill = null;
if (variant.declared_name) {
  if (!variant.install_root || !variant.install_dir || !variant.install_platform) {
    throw new Error(`${variantId} has an incomplete install contract`);
  }
  if (!variant.activation?.includes(`$${variant.declared_name}`)) {
    throw new Error(`${variantId} activation must name the declared skill exactly: $${variant.declared_name}`);
  }
  for (const descriptor of variant.skill_bundle ?? []) {
    if (!descriptor?.declared_name || !descriptor?.source_path || !descriptor?.install_dir) {
      throw new Error(`${variantId} has an invalid skill bundle descriptor`);
    }
    if (descriptor.install_dir.includes("/")) {
      throw new Error(`${variantId} bundled skill install_dir must be a single directory`);
    }
    if (!variant.activation?.includes(`$${descriptor.declared_name}`)) {
      throw new Error(
        `${variantId} activation must name the bundled skill exactly: $${descriptor.declared_name}`,
      );
    }
  }
  let sourceRoot;
  let sourceCommit;
  let vendorRoot = null;
  let sourceGitRoot;
  let sourceDetached;
  if (variant.vendor_dir) {
    if (!vendorsRoot) throw new Error(`${variantId} requires --vendors`);
    vendorRoot = assertInside(vendorsRoot, join(vendorsRoot, variant.vendor_dir));
    sourceDetached = gitHeadDetached(vendorRoot);
    if (!sourceDetached) {
      throw new Error(`${variantId} vendor source must use a detached HEAD`);
    }
    sourceCommit = execFileSync("git", ["-C", vendorRoot, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
    if (sourceCommit !== variant.commit) {
      throw new Error(`${variantId} commit mismatch: expected ${variant.commit}, received ${sourceCommit}`);
    }
    sourceRoot = assertInside(vendorRoot, join(vendorRoot, variant.source_path));
    sourceGitRoot = vendorRoot;
  } else {
    sourceRoot = assertInside(repoRoot, join(repoRoot, variant.source_path));
    sourceCommit = execFileSync("git", ["-C", repoRoot, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
    sourceGitRoot = repoRoot;
    sourceDetached = gitHeadDetached(repoRoot);
  }
  const sourcePathspec = variant.vendor_dir ? "." : relative(sourceGitRoot, sourceRoot);
  const sourceStatus = execFileSync(
    "git",
    ["-C", sourceGitRoot, "status", "--porcelain=v1", "--untracked-files=all", "--", sourcePathspec],
    { encoding: "utf8" },
  );
  const sourceDirty = sourceStatus.trim().length > 0;
  const dirtySourceOptIn = args.get("allow-dirty-source") === true || args.get("allow-dirty-source") === "true";
  if (sourceDirty && !dirtySourceOptIn) {
    throw new Error(
      `${variantId} source tree is dirty at ${sourceGitRoot}. Commit/stash it, or use --allow-dirty-source for a non-publishable diagnostic run.`,
    );
  }
  const runtimeInstall = runtime === "claude-code" && variant.install_platform === "agents"
    ? { platform: "claude-code", root: ".claude/skills", declaredName: variant.declared_name }
    : runtime === "cursor" && variant.install_platform === "agents"
      ? {
          platform: "cursor",
          root: ".cursor/skills",
          declaredName: variant.declared_name.replace(/^omd:/, "omd-"),
        }
      : {
          platform: variant.install_platform,
          root: variant.install_root,
          declaredName: variant.declared_name,
        };
  if (runtime === "claude-code" && runtimeInstall.platform !== "claude-code") {
    throw new Error(
      `${variantId} has no reviewed Claude Code install adapter (declared platform: ${variant.install_platform})`,
    );
  }
  const installRoot = assertInside(out, join(out, runtimeInstall.root));
  const destination = assertInside(installRoot, join(installRoot, variant.install_dir));
  let bundledSkills = [];
  if (variant.install_adapter === "official-codex-template-v2.5.0") {
    if (!vendorRoot) throw new Error(`${variantId} adapter requires a pinned vendor checkout`);
    bundledSkills = installOfficialUiUxCodexBundle(vendorRoot, destination, installRoot, variant);
  } else {
    copyReviewedTree(sourceRoot, destination);
    if (variant.install_adapter === "omd-channel-name-v1") {
      renderInstalledSkillName(join(destination, "SKILL.md"), runtimeInstall.declaredName);
    } else if (variant.install_adapter) {
      throw new Error(`unsupported install adapter: ${variant.install_adapter}`);
    }
  }
  const declaredName = assertSkillContract(join(destination, "SKILL.md"), runtimeInstall.declaredName);
  for (const descriptor of variant.skill_bundle ?? []) {
    const bundledSource = assertInside(repoRoot, join(repoRoot, descriptor.source_path));
    const bundledDestination = assertInside(installRoot, join(installRoot, descriptor.install_dir));
    copyReviewedTree(bundledSource, bundledDestination);
    if (descriptor.install_adapter === "omd-channel-name-v1") {
      const bundledDeclaredName = runtime === "cursor"
        ? descriptor.declared_name.replace(/^omd:/, "omd-")
        : descriptor.declared_name;
      renderInstalledSkillName(join(bundledDestination, "SKILL.md"), bundledDeclaredName);
    } else if (descriptor.install_adapter) {
      throw new Error(`unsupported bundled skill install adapter: ${descriptor.install_adapter}`);
    }
    bundledSkills.push(assertSkillContract(
      join(bundledDestination, "SKILL.md"),
      runtime === "cursor"
        ? descriptor.declared_name.replace(/^omd:/, "omd-")
        : descriptor.declared_name,
    ));
  }
  const skillTree = treeManifest(installRoot);
  skill = {
    declared_name: declaredName,
    install_platform: runtimeInstall.platform,
    install_root: runtimeInstall.root,
    install_dir: variant.install_dir,
    install_adapter: variant.install_adapter ?? null,
    bundled_skills: bundledSkills,
    source_path: variant.source_path,
    source_commit: sourceCommit,
    source_attestation: {
      vcs: "git",
      dirty: sourceDirty,
      explicit_dirty_opt_in: sourceDirty && dirtySourceOptIn,
      status_entries: sourceStatus.trim() ? sourceStatus.trim().split("\n").length : 0,
      status_sha256: sha256(sourceStatus),
      publishable: !sourceDirty,
      detached: sourceDetached,
    },
    sha256: skillTree.sha256,
    files: skillTree.files.length,
  };
}

let agents = null;
if ((variant.agent_bundle ?? []).length) {
  if (runtime !== "claude-code") {
    throw new Error(`${variantId} agent bundle currently has only a reviewed Claude Code adapter`);
  }
  if (!skill) throw new Error(`${variantId} agent bundle requires an installed primary skill`);
  const agentRoot = assertInside(out, join(out, ".claude/agents"));
  mkdirSync(agentRoot, { recursive: true });
  const installed = [];
  for (const descriptor of variant.agent_bundle) {
    if (!descriptor?.id || !descriptor?.source_path) {
      throw new Error(`${variantId} has an invalid agent bundle descriptor`);
    }
    const sourceFile = assertInside(repoRoot, join(repoRoot, descriptor.source_path));
    if (frontmatterName(sourceFile) !== descriptor.id) {
      throw new Error(`${variantId} agent name mismatch: expected ${descriptor.id}`);
    }
    const source = readFileSync(sourceFile, "utf8");
    const requiredAgentModel = String(variant.required_agent_model ?? "inherit");
    const pinnedModel = /^model:\s*.+$/m.test(source)
      ? source.replace(/^model:\s*.+$/m, `model: ${requiredAgentModel}`)
      : source.replace(/^(tools:\s*.+)$/m, `$1\nmodel: ${requiredAgentModel}`);
    const rendered = `${pinnedModel.trim()}\n\n## Benchmark advisory boundary\n\nThis is an advisory-only Harness Track run. Do not use Write or Edit and do not modify product files. Return concise evidence, risks, and acceptance checks to the main agent; the main agent remains the only implementation owner. The parent Agent call must request model: ${requiredAgentModel}; another selector invalidates attribution.\n`;
    const destination = join(agentRoot, `${descriptor.id}.md`);
    writeFileSync(destination, rendered, "utf8");
    installed.push({
      id: descriptor.id,
      source_path: descriptor.source_path,
      model_adapter: `fixed-${requiredAgentModel}`,
      advisory_only: true,
    });
  }
  const agentTree = treeManifest(agentRoot);
  agents = {
    runtime: "claude-code",
    install_root: ".claude/agents",
    required_model: String(variant.required_agent_model ?? "inherit"),
    source_commit: skill.source_commit,
    source_attestation: skill.source_attestation,
    installed,
    sha256: agentTree.sha256,
    files: agentTree.files.length,
  };
}

const activationDelta = variant.activation
  ? runtime === "cursor"
    ? variant.activation.replace(
        /\$([a-z0-9][a-z0-9:-]*)/gi,
        (_, name) => `/${name.replace(/:/g, "-")}`,
      )
    : variant.activation
  : null;
const activation = activationDelta ? `\n\n## Variant activation\n\n${activationDelta}` : "";
const prompt = `${promptSource}${activation}\n`;
mkdirSync(join(out, ".benchmark"), { recursive: true });
writeFileSync(join(out, ".benchmark", "PROMPT.md"), prompt, "utf8");
const instructionFile = runtime === "claude-code" ? "CLAUDE.md" : "AGENTS.md";
writeFileSync(join(out, instructionFile), [
  "# UI-Resolve Bench sandbox",
  "",
  "Work only in this directory. Do not install packages, access the network, or read files outside this workspace.",
  "Follow the task in `.benchmark/PROMPT.md`. If it names an installed skill, read that skill completely and apply it.",
  `Do not alter \`.benchmark/\`, \`${instructionFile}\`, or any \`data-bench\` hook.`,
  "",
].join("\n"), "utf8");

const initialTree = treeManifest(out, { ignore: [".benchmark"] });
const productIgnore = [...new Set([
  ".benchmark",
  ".omd",
  ".agents",
  ".claude",
  ".codex",
  ".cursor",
  ".opencode",
  "AGENTS.md",
  "CLAUDE.md",
])];
const initialProductTree = treeManifest(out, { ignore: productIgnore });
const manifest = {
  schema_version: "0.1",
  prepared_at: new Date().toISOString(),
  objective_evaluator: currentObjectiveMethodology(),
  runtime_target: runtime,
  task: {
    id: task.id,
    version: task.version,
    track: taskTrack,
    core_prompt_sha256: sha256(promptFile),
    prompt_sha256: sha256(prompt),
    starter_sha256: treeManifest(starterRoot).sha256,
  },
  variant: {
    id: variantId,
    label: variant.label,
    kind: variant.kind,
    include_design_contract: variant.include_design_contract !== false,
    eligible_tracks: eligibleTracks,
    activation_delta: activationDelta,
    activation_delta_sha256: activationDelta ? sha256(activationDelta) : null,
    track_eligibility: {
      eligible: trackEligible,
      off_label: !trackEligible,
      explicit_opt_in: !trackEligible && offLabelOptIn,
    },
  },
  skill,
  agents,
  workspace: {
    name: basename(out),
    initial_sha256: initialTree.sha256,
    initial_files: initialTree.files.length,
    product_ignore: productIgnore,
    product_initial_sha256: initialProductTree.sha256,
    product_initial_files: initialProductTree.files,
  },
  safety: {
    third_party_installer_executed: false,
    hooks_enabled: false,
    agent_tool_enabled: agents !== null,
    source_symlinks_allowed: false,
  },
};
writeJson(join(out, ".benchmark", "manifest.json"), manifest);
console.log(JSON.stringify({ workspace: out, manifest }, null, 2));
