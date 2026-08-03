import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  rmdirSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  isCurrentManagedHook,
  isSelfConsistentManagedHook,
  renderManagedHook,
} from './hook-contract.js';
import { unsafeManagedPath } from './install-path.js';

export type ProofPolicyTarget = 'claude-code' | 'codex';

export const PROOF_POLICY_FILES = [
  'proof-policy-hook.mjs',
  'proof-policy-hook-mapper.mjs',
  'proof-policy-state.mjs',
  'proof-trace-contract.mjs',
] as const;

export interface ProofPolicyInstallResult {
  target: ProofPolicyTarget;
  skill: string;
  destPath: string;
  status: 'created' | 'updated' | 'removed' | 'unchanged' | 'skipped-drift';
  reason?: 'unsafe-path';
}

type JsonObject = Record<string, unknown>;

const SOURCE_DIR = join('benchmarks', 'ui-resolve-bench', 'scripts');
const DEST_DIR = join('hooks', 'omd-proof-policy');
const PROOF_POLICY_MATCHERS: Record<ProofPolicyTarget, string> = {
  'claude-code': 'Bash|Edit|Write|MultiEdit|mcp__node_repl__js|node_repl',
  codex: 'Bash|apply_patch|Edit|Write|mcp__node_repl__js|node_repl',
};

function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function parseJsonObject(value: string): JsonObject | null {
  try {
    const parsed: unknown = JSON.parse(value);
    return isJsonObject(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function channelDir(target: ProofPolicyTarget): '.claude' | '.codex' {
  return target === 'claude-code' ? '.claude' : '.codex';
}

function configPath(root: string, target: ProofPolicyTarget): string {
  return join(root, channelDir(target), target === 'claude-code' ? 'settings.json' : 'hooks.json');
}

export function proofPolicyCommand(target: ProofPolicyTarget): string {
  return target === 'claude-code'
    ? 'OMD_PROOF_POLICY_REFLOW_ARTIFACT=1 node ${CLAUDE_PROJECT_DIR}/.claude/hooks/omd-proof-policy/proof-policy-hook.mjs'
    : 'OMD_PROOF_POLICY_REFLOW_ARTIFACT=1 node "$(git rev-parse --show-toplevel)/.codex/hooks/omd-proof-policy/proof-policy-hook.mjs"';
}

function proofHookGroup(target: ProofPolicyTarget): JsonObject {
  return {
    matcher: PROOF_POLICY_MATCHERS[target],
    hooks: [{
      type: 'command',
      command: proofPolicyCommand(target),
      timeout: 3,
    }],
  };
}

function proofStopHookGroup(target: ProofPolicyTarget): JsonObject {
  return {
    hooks: [{
      type: 'command',
      command: proofPolicyCommand(target),
      timeout: 3,
    }],
  };
}

function isProofPolicyHook(value: unknown, target: ProofPolicyTarget): boolean {
  return isJsonObject(value) &&
    value.type === 'command' &&
    value.command === proofPolicyCommand(target);
}

function stripProofPolicyGroups(groups: unknown[], target: ProofPolicyTarget): unknown[] {
  return groups.flatMap((group) => {
    if (!isJsonObject(group) || !Array.isArray(group.hooks)) return [group];
    const hooks = group.hooks.filter((hook) => !isProofPolicyHook(hook, target));
    return hooks.length > 0 ? [{ ...group, hooks }] : [];
  });
}

function withProofPolicyHooks(existing: JsonObject, target: ProofPolicyTarget): JsonObject {
  const existingHooks = isJsonObject(existing.hooks) ? existing.hooks : {};
  const hooks: JsonObject = { ...existingHooks };
  for (const event of ['PreToolUse', 'PostToolUse']) {
    const groups = Array.isArray(existingHooks[event]) ? existingHooks[event] : [];
    hooks[event] = [...stripProofPolicyGroups(groups, target), proofHookGroup(target)];
  }
  const stopGroups = Array.isArray(existingHooks.Stop) ? existingHooks.Stop : [];
  hooks.Stop = [...stripProofPolicyGroups(stopGroups, target), proofStopHookGroup(target)];
  return { ...existing, hooks };
}

function withoutProofPolicyHooks(existing: JsonObject, target: ProofPolicyTarget): JsonObject {
  if (!isJsonObject(existing.hooks)) return existing;
  const hooks: JsonObject = { ...existing.hooks };
  for (const event of ['PreToolUse', 'PostToolUse', 'Stop']) {
    const groups = Array.isArray(existing.hooks[event]) ? existing.hooks[event] : [];
    const retained = stripProofPolicyGroups(groups, target);
    if (retained.length > 0) hooks[event] = retained;
    else delete hooks[event];
  }
  return { ...existing, hooks };
}

function writeJsonConfig(
  root: string,
  target: ProofPolicyTarget,
  force: boolean,
  transform: (existing: JsonObject) => JsonObject,
): ProofPolicyInstallResult {
  const destPath = configPath(root, target);
  const skill = `proof-policy-config:${channelDir(target)}`;
  if (unsafeManagedPath(root, destPath)) {
    return { target, skill, destPath, status: 'skipped-drift', reason: 'unsafe-path' };
  }
  const exists = existsSync(destPath);
  const raw = exists ? readFileSync(destPath, 'utf8') : '';
  const parsed = exists ? parseJsonObject(raw) : {};
  if (!parsed && !force) return { target, skill, destPath, status: 'skipped-drift' };
  const next = transform(parsed ?? {});
  const rendered = `${JSON.stringify(next, null, 2)}\n`;
  if (exists && raw === rendered) return { target, skill, destPath, status: 'unchanged' };
  mkdirSync(dirname(destPath), { recursive: true });
  const temporary = `${destPath}.omd-${process.pid}-${Date.now()}.tmp`;
  try {
    writeFileSync(temporary, rendered, { encoding: 'utf8', flag: 'wx' });
    renameSync(temporary, destPath);
  } catch (error) {
    rmSync(temporary, { force: true });
    throw error;
  }
  return { target, skill, destPath, status: exists ? 'updated' : 'created' };
}

function installProofPolicyFile(
  packageRoot: string,
  projectRoot: string,
  target: ProofPolicyTarget,
  filename: (typeof PROOF_POLICY_FILES)[number],
  force: boolean,
): ProofPolicyInstallResult {
  const sourcePath = join(packageRoot, SOURCE_DIR, filename);
  const destPath = join(projectRoot, channelDir(target), DEST_DIR, filename);
  const skill = `proof-policy:${filename}`;
  if (!existsSync(sourcePath) || unsafeManagedPath(projectRoot, destPath)) {
    return {
      target,
      skill,
      destPath,
      status: 'skipped-drift',
      ...(unsafeManagedPath(projectRoot, destPath) ? { reason: 'unsafe-path' as const } : {}),
    };
  }
  const managed = renderManagedHook(readFileSync(sourcePath, 'utf8'));
  const exists = existsSync(destPath);
  const existing = exists ? readFileSync(destPath, 'utf8') : '';
  if (existing === managed) return { target, skill, destPath, status: 'unchanged' };
  if (exists && !force && !isSelfConsistentManagedHook(existing)) {
    return { target, skill, destPath, status: 'skipped-drift' };
  }
  mkdirSync(dirname(destPath), { recursive: true });
  const temporary = `${destPath}.omd-${process.pid}-${Date.now()}.tmp`;
  try {
    writeFileSync(temporary, managed, { encoding: 'utf8', flag: 'wx' });
    renameSync(temporary, destPath);
  } catch (error) {
    rmSync(temporary, { force: true });
    throw error;
  }
  return { target, skill, destPath, status: exists ? 'updated' : 'created' };
}

export function installProofPolicy(
  packageRoot: string,
  projectRoot: string,
  target: ProofPolicyTarget,
  force = false,
): ProofPolicyInstallResult[] {
  const files = PROOF_POLICY_FILES.map((filename) =>
    installProofPolicyFile(packageRoot, projectRoot, target, filename, force));
  if (files.some((result) => result.status === 'skipped-drift')) return files;
  return [
    ...files,
    writeJsonConfig(projectRoot, target, force, (existing) => withProofPolicyHooks(existing, target)),
  ];
}

export function removeProofPolicy(
  projectRoot: string,
  target: ProofPolicyTarget,
): ProofPolicyInstallResult[] {
  const results: ProofPolicyInstallResult[] = [];
  const config = configPath(projectRoot, target);
  if (existsSync(config)) {
    const configResult = writeJsonConfig(
      projectRoot,
      target,
      false,
      (existing) => withoutProofPolicyHooks(existing, target),
    );
    results.push(configResult);
    // A hook command that cannot be removed must keep its executable in place.
    // Leaving an inert managed bundle is safer than creating a dangling active
    // command in user-owned or invalid configuration.
    if (configResult.status === 'skipped-drift') return results;
  }
  for (const filename of PROOF_POLICY_FILES) {
    const destPath = join(projectRoot, channelDir(target), DEST_DIR, filename);
    if (!existsSync(destPath)) continue;
    const content = readFileSync(destPath, 'utf8');
    if (unsafeManagedPath(projectRoot, destPath) || !isSelfConsistentManagedHook(content)) {
      results.push({
        target,
        skill: `proof-policy:${filename}`,
        destPath,
        status: 'skipped-drift',
        ...(unsafeManagedPath(projectRoot, destPath) ? { reason: 'unsafe-path' as const } : {}),
      });
      continue;
    }
    rmSync(destPath);
    results.push({ target, skill: `proof-policy:${filename}`, destPath, status: 'removed' });
  }
  const dir = join(projectRoot, channelDir(target), DEST_DIR);
  if (existsSync(dir) && readdirSync(dir).length === 0) rmdirSync(dir);
  return results;
}

function hasExactHook(
  config: JsonObject,
  event: string,
  target: ProofPolicyTarget,
  requireMatcher = false,
): boolean {
  if (!isJsonObject(config.hooks) || !Array.isArray(config.hooks[event])) return false;
  return config.hooks[event].some((group) =>
    isJsonObject(group) &&
    (!requireMatcher || group.matcher === PROOF_POLICY_MATCHERS[target]) &&
    Array.isArray(group.hooks) &&
    group.hooks.some((hook) => isProofPolicyHook(hook, target)));
}

function findBundleRoot(): string | null {
  let current = dirname(fileURLToPath(import.meta.url));
  for (let depth = 0; depth < 8; depth += 1) {
    if (existsSync(join(current, 'skills')) && existsSync(join(current, SOURCE_DIR))) return current;
    const parent = dirname(current);
    if (parent === current) break;
    current = parent;
  }
  return null;
}

export function proofPolicyIssues(root: string, target: ProofPolicyTarget): string[] {
  const config = configPath(root, target);
  const installedPaths = PROOF_POLICY_FILES.map((filename) =>
    join(root, channelDir(target), DEST_DIR, filename));
  const anyFiles = installedPaths.some(existsSync);
  const parsed = existsSync(config) ? parseJsonObject(readFileSync(config, 'utf8')) : null;
  const anyHook = Boolean(parsed && (
    hasExactHook(parsed, 'PreToolUse', target) ||
    hasExactHook(parsed, 'PostToolUse', target) ||
    hasExactHook(parsed, 'Stop', target)
  ));
  if (!anyFiles && !anyHook) return [];

  const issues: string[] = [];
  if (!parsed) issues.push(`${target} proof-policy hook config is missing or invalid`);
  else {
    for (const event of ['PreToolUse', 'PostToolUse', 'Stop']) {
      if (!hasExactHook(parsed, event, target, event !== 'Stop')) {
        issues.push(`${target} proof-policy hook is not activated for ${event}`);
      }
    }
  }

  const bundleRoot = findBundleRoot();
  for (let index = 0; index < PROOF_POLICY_FILES.length; index += 1) {
    const filename = PROOF_POLICY_FILES[index];
    const installedPath = installedPaths[index];
    if (!existsSync(installedPath)) {
      issues.push(`missing ${target} proof-policy file: ${filename}`);
      continue;
    }
    const unsafe = unsafeManagedPath(root, installedPath);
    if (unsafe) {
      issues.push(`unsafe ${target} proof-policy path: ${filename} (${unsafe})`);
      continue;
    }
    const sourcePath = bundleRoot ? join(bundleRoot, SOURCE_DIR, filename) : '';
    if (!sourcePath || !existsSync(sourcePath)) {
      issues.push(`bundled proof-policy source is missing: ${filename}`);
    } else if (!isCurrentManagedHook(
      readFileSync(installedPath, 'utf8'),
      readFileSync(sourcePath, 'utf8'),
    )) {
      issues.push(`stale or modified ${target} proof-policy file: ${filename}`);
    }
  }
  if (target === 'codex' && !existsSync(join(root, '.git'))) {
    issues.push('Codex proof policy requires a Git project root');
  }
  return issues;
}
