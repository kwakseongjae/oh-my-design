#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  assertInside,
  benchRoot,
  copyReviewedTree,
  diffTreeManifests,
  parseArgs,
  readJson,
  sha256,
  treeManifest,
  writeJson,
} from "./_lib.mjs";

const DEFAULT_LOCK = resolve(benchRoot, "config/omd-2.0-competitor-source-lock-v0.1.json");
const SHA256 = /^[a-f0-9]{64}$/;
const COMMIT = /^[a-f0-9]{40}$/;
const EXPECTED_REPOSITORIES = new Map([
  ["anthropic-frontend-design-2.0", "https://github.com/anthropics/skills"],
  ["impeccable-4.0.4-prompt-bounded-2.0", "https://github.com/pbakaus/impeccable"],
  ["ui-ux-pro-max-2.14.2-2.0", "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"],
  ["taste-skill-main-2.0", "https://github.com/Leonxlnx/taste-skill"],
]);
const EXPECTED_VARIANTS = new Map([
  ["anthropic-frontend-design-2.0", "anthropic-frontend-design"],
  ["impeccable-4.0.4-prompt-bounded-2.0", "impeccable-prompt-only"],
  ["ui-ux-pro-max-2.14.2-2.0", "ui-ux-pro-max"],
  ["taste-skill-main-2.0", "taste-eligible-scope-only"],
]);

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function normalizedRepository(value) {
  return String(value ?? "").replace(/\.git$/, "").replace(/\/$/, "");
}

function git(checkout, args) {
  return execFileSync("git", ["-C", checkout, ...args], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
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

function renderOfficialUiUxCodexSkill(checkout, source) {
  const assetsRoot = assertInside(checkout, resolve(checkout, source.source_path));
  const platformConfig = readJson(resolve(assetsRoot, source.install.template_config));
  invariant(platformConfig.platform === "codex", "UI UX projection requires the official Codex platform template");
  invariant(platformConfig.installType === "full", "UI UX projection requires the official full install");
  invariant(platformConfig.frontmatter?.name === source.install.declared_name, "UI UX declared skill name drifted");
  const configuredInstallPath = `${platformConfig.folderStructure?.root}/${platformConfig.folderStructure?.skillPath}`;
  invariant(configuredInstallPath === `${source.install.root}/${source.install.directory}`, "UI UX install path drifted");

  const template = readFileSync(resolve(assetsRoot, "templates/base/skill-content.md"), "utf8");
  const quickReference = platformConfig.sections?.quickReference
    ? readFileSync(resolve(assetsRoot, "templates/base/quick-reference.md"), "utf8")
    : "";
  const rendered = renderFrontmatter(platformConfig.frontmatter) + template
    .replace(/\{\{TITLE\}\}/g, platformConfig.title)
    .replace(/\{\{DESCRIPTION\}\}/g, platformConfig.description)
    .replace(/\{\{SCRIPT_PATH\}\}/g, platformConfig.scriptPath)
    .replace(/\{\{SKILL_OR_WORKFLOW\}\}/g, platformConfig.skillOrWorkflow)
    .replace(/\{\{QUICK_REFERENCE\}\}/g, quickReference ? `\n${quickReference}` : "");
  return { assetsRoot, rendered };
}

function materializeOfficialUiUxCodexInstall(checkout, source, output) {
  const { assetsRoot, rendered } = renderOfficialUiUxCodexSkill(checkout, source);
  const primary = join(output, source.install.directory);
  mkdirSync(primary, { recursive: true });
  writeFileSync(join(primary, "SKILL.md"), rendered, "utf8");
  copyReviewedTree(resolve(assetsRoot, "data"), join(primary, "data"));
  copyReviewedTree(resolve(assetsRoot, "scripts"), join(primary, "scripts"));
  for (const bundled of source.install.bundled_skills) {
    copyReviewedTree(resolve(assetsRoot, "skills", bundled), join(output, bundled));
  }
  writeFileSync(join(primary, "LICENSE"), readFileSync(resolve(checkout, source.license.evidence_path)));
}

export function projectOfficialUiUxCodexInstall(checkout, source) {
  const output = mkdtempSync(join(tmpdir(), "omd-uiux-install-projection-"));
  try {
    materializeOfficialUiUxCodexInstall(checkout, source, output);
    const manifest = treeManifest(output);
    return {
      ...manifest,
      bytes: manifest.files.reduce((sum, file) => sum + file.bytes, 0),
    };
  } finally {
    rmSync(output, { recursive: true, force: true });
  }
}

export function auditOfficialUiUxMaterialization(checkout, source, expectedProjection) {
  const output = mkdtempSync(join(tmpdir(), "omd-uiux-install-projection-"));
  try {
    materializeOfficialUiUxCodexInstall(checkout, source, output);
    const materialized = treeManifest(output);
    const bytes = materialized.files.reduce((sum, file) => sum + file.bytes, 0);
    invariant(materialized.files.length === expectedProjection.files.length, `${source.id} materialized install file count mismatch`);
    invariant(bytes === expectedProjection.bytes, `${source.id} materialized install byte count mismatch`);
    invariant(
      materialized.sha256 === expectedProjection.sha256,
      `${source.id} materialized install hash mismatch: ${materialized.sha256} != ${expectedProjection.sha256}; ${JSON.stringify(diffTreeManifests(expectedProjection, materialized).slice(0, 8))}`,
    );
    return {
      files: materialized.files.length,
      bytes,
      sha256: materialized.sha256,
      exact_projection_match: true,
    };
  } finally {
    rmSync(output, { recursive: true, force: true });
  }
}

export function validateLockShape(lock) {
  invariant(lock?.schema_version === "0.1", "unsupported competitor source lock schema");
  invariant(lock?.lock_id === "omd-2.0-competitor-source-lock-v0.1", "unexpected lock id");
  invariant(lock?.status === "locked-provider-zero", "lock must remain provider-zero");
  invariant(!Number.isNaN(Date.parse(lock?.observed_at)), "observed_at must be an RFC 3339 timestamp");
  invariant(Array.isArray(lock?.sources) && lock.sources.length === 4, "exactly four official sources are required");

  const seen = new Set();
  for (const source of lock.sources) {
    invariant(EXPECTED_REPOSITORIES.has(source.id), `unexpected source id: ${source.id}`);
    invariant(!seen.has(source.id), `duplicate source id: ${source.id}`);
    seen.add(source.id);
    invariant(source.benchmark_variant_id === EXPECTED_VARIANTS.get(source.id), `${source.id} benchmark variant mapping drifted`);
    invariant(
      normalizedRepository(source.repository) === EXPECTED_REPOSITORIES.get(source.id),
      `${source.id} is not pinned to its official repository`,
    );
    invariant(COMMIT.test(source.source_ref?.resolved_commit ?? ""), `${source.id} has no exact commit`);
    invariant(
      source.source_ref?.requested_ref === "refs/heads/main" || source.source_ref?.requested_ref?.startsWith("refs/tags/"),
      `${source.id} has an ambiguous requested ref`,
    );
    if (source.source_ref?.tag_object !== null) {
      invariant(COMMIT.test(source.source_ref?.tag_object ?? ""), `${source.id} has an invalid tag object`);
    }
    invariant(source.official_source?.includes(source.source_ref.resolved_commit), `${source.id} source URL is not commit-addressed`);
    invariant(Number.isInteger(source.source_tree?.files) && source.source_tree.files > 0, `${source.id} file count is invalid`);
    invariant(Number.isInteger(source.source_tree?.bytes) && source.source_tree.bytes > 0, `${source.id} byte count is invalid`);
    invariant(SHA256.test(source.source_tree?.sha256 ?? ""), `${source.id} tree hash is invalid`);
    invariant(SHA256.test(source.license?.evidence_sha256 ?? ""), `${source.id} license hash is invalid`);
    invariant(["Apache-2.0", "MIT"].includes(source.license?.spdx), `${source.id} license is not allowlisted`);
    invariant(source.activation?.prompt_extraction === "forbidden", `${source.id} permits prompt extraction`);
    invariant(
      source.activation?.exact_prefix?.includes(`$${source.install?.declared_name}`),
      `${source.id} activation does not name the installed skill`,
    );
    if (source.id === "ui-ux-pro-max-2.14.2-2.0") {
      invariant(Number.isInteger(source.install_projection?.files) && source.install_projection.files > 0, `${source.id} install file count is invalid`);
      invariant(Number.isInteger(source.install_projection?.bytes) && source.install_projection.bytes > 0, `${source.id} install byte count is invalid`);
      invariant(SHA256.test(source.install_projection?.sha256 ?? ""), `${source.id} install projection hash is invalid`);
    }
  }
  invariant(seen.size === EXPECTED_REPOSITORIES.size, "official source set is incomplete");
  for (const key of ["provider_calls", "model_calls", "browser_calls", "hooks_enabled", "third_party_installers_executed"]) {
    invariant(lock.execution_boundary?.[key] === 0, `${key} must stay zero at source freeze`);
  }
  invariant(lock.historical_integrity?.mutate_competitors_json === false, "historical competitors.json mutation is forbidden");
  invariant(lock.historical_integrity?.mutate_historical_reports === false, "historical report mutation is forbidden");
  return lock;
}

export function auditCheckedOutSources(lock, checkoutRoot) {
  validateLockShape(lock);
  invariant(checkoutRoot, "--checkout-root is required unless --lock-only is used");
  const absoluteRoot = resolve(checkoutRoot);
  const checks = lock.sources.map((source) => {
    const checkout = assertInside(absoluteRoot, resolve(absoluteRoot, source.checkout_dir));
    invariant(existsSync(checkout), `${source.id} checkout is missing: ${checkout}`);
    const head = git(checkout, ["rev-parse", "HEAD"]);
    invariant(head === source.source_ref.resolved_commit, `${source.id} HEAD mismatch: ${head}`);
    invariant(git(checkout, ["status", "--porcelain=v1"]) === "", `${source.id} checkout is dirty`);
    const origin = normalizedRepository(git(checkout, ["remote", "get-url", "origin"]));
    invariant(origin === normalizedRepository(source.repository), `${source.id} origin mismatch: ${origin}`);
    const resolvedRef = git(checkout, ["rev-parse", `${source.source_ref.requested_ref}^{commit}`]);
    invariant(resolvedRef === head, `${source.id} requested ref does not resolve to the locked commit`);
    if (source.source_ref.tag_object) {
      const tagObject = git(checkout, ["rev-parse", source.source_ref.requested_ref]);
      invariant(tagObject === source.source_ref.tag_object, `${source.id} annotated tag object mismatch`);
    }

    const sourcePath = assertInside(checkout, resolve(checkout, source.source_path));
    const manifest = treeManifest(sourcePath);
    const bytes = manifest.files.reduce((sum, file) => sum + file.bytes, 0);
    invariant(manifest.files.length === source.source_tree.files, `${source.id} source file count mismatch`);
    invariant(bytes === source.source_tree.bytes, `${source.id} source byte count mismatch`);
    invariant(manifest.sha256 === source.source_tree.sha256, `${source.id} source tree hash mismatch`);

    const licensePath = assertInside(checkout, resolve(checkout, source.license.evidence_path));
    invariant(existsSync(licensePath), `${source.id} license evidence is missing`);
    const licenseSha = sha256(readFileSync(licensePath));
    invariant(licenseSha === source.license.evidence_sha256, `${source.id} license evidence hash mismatch`);

    let installProjection = null;
    if (source.id === "ui-ux-pro-max-2.14.2-2.0") {
      installProjection = projectOfficialUiUxCodexInstall(checkout, source);
      invariant(installProjection.files.length === source.install_projection.files, `${source.id} install file count mismatch`);
      invariant(installProjection.bytes === source.install_projection.bytes, `${source.id} install byte count mismatch`);
      invariant(installProjection.sha256 === source.install_projection.sha256, `${source.id} install projection hash mismatch`);
      auditOfficialUiUxMaterialization(checkout, source, installProjection);
    }

    return {
      id: source.id,
      benchmark_variant_id: source.benchmark_variant_id,
      repository: source.repository,
      requested_ref: source.source_ref.requested_ref,
      commit: head,
      source_tree_sha256: manifest.sha256,
      source_files: manifest.files.length,
      source_bytes: bytes,
      license: source.license.spdx,
      license_evidence_sha256: licenseSha,
      clean_checkout: true,
      ...(installProjection ? {
        install_projection_sha256: installProjection.sha256,
        install_projection_files: installProjection.files.length,
        install_projection_bytes: installProjection.bytes,
        install_materialization_match: true,
      } : {}),
    };
  });
  return {
    schema_version: "0.1",
    lock_id: lock.lock_id,
    status: "pass",
    observed_at: lock.observed_at,
    checks,
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
  };
}

export function main(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);
  const lockPath = resolve(String(args.get("lock") || DEFAULT_LOCK));
  const lock = validateLockShape(readJson(lockPath));
  if (args.get("lock-only")) {
    process.stdout.write(`${JSON.stringify({ status: "pass", lock_id: lock.lock_id, sources: lock.sources.length })}\n`);
    return;
  }
  const report = auditCheckedOutSources(lock, args.get("checkout-root"));
  if (args.get("out")) writeJson(resolve(String(args.get("out"))), report);
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    main();
  } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 1;
  }
}
