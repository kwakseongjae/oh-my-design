#!/usr/bin/env node
/**
 * run-grok46-omd-cell.mjs — omd-autopilot-v2 cell wrapper (grok-4.6 lane draft)
 *
 * Ports the OmD authority-controller machinery from
 * run-luna-max-wow-preview-cell.mjs onto run-grok.mjs.
 *
 * This draft is self-contained (node: builtins only). It does not import
 * prepare-luna-max-wow-preview.mjs, _lib.mjs, or any path outside this
 * directory.
 *
 * OPEN-QUESTIONS (do not invent answers at call sites; fail-close instead):
 *
 * 1. Activation disclosure bytes.
 *    Luna hashes OMD_EXTERNAL_STAGING_ACTIVATION imported from
 *    prepare-luna-max-wow-preview.mjs (not in this directory) and writes
 *    that digest as receipt.activation.sha256 / OMD_AUTHORITY_CONTROLLER_ACTIVATION_SHA256.
 *    This draft requires --activation-disclosure-file or --activation-sha256.
 *    Without the preregistered disclosure string we cannot prove the same digest.
 *
 * 2. Grok run_terminal_command / tool_result wire shape.
 *    run-grok.mjs documents streaming-messages-json as Anthropic Messages
 *    API NDJSON (system / assistant.message.content / result). It does not
 *    document the exact tool_use input key (command vs other) or the
 *    tool_result success/exit/stdout fields. The parser accepts Anthropic-
 *    shaped tool_use/tool_result plus content_block_start/delta reconstruction.
 *    Success is fail-closed unless adopted-and-validated is visible in the
 *    tool_result payload. Unknown tool names are not treated as activation.
 *
 * 3. Execution-root interpretation.
 *    The brief says execution root = "prepared-cells 디렉토리". Luna uses
 *    <cell>/.benchmark/execution/ as the execution root (workspace copy +
 *    authority-controller-runtime + omd-external-staging siblings) so that
 *    run-codex's spatial contract holds: staging is a sibling of --workspace
 *    named omd-external-staging, and dirname(workspace) owns the runtime
 *    and OMD-AUTHORITY-CONTROLLER.json. This draft follows that Luna +
 *    run-codex geometry. It does NOT place a shared runtime at the parent
 *    prepared-cells/ directory (that would alias across cells).
 *
 * 4. Authority identifier string.
 *    Luna writes authority.identifier = "omd-luna-max-preregistered-authority-controller".
 *    The grok-lane identifier is not specified in the three input files.
 *    This draft uses "omd-grok46-preregistered-authority-controller".
 *
 * 5. run-grok sandbox write to the staging sibling.
 *    run-codex passes --add-dir <omd-external-staging>. Current run-grok.mjs
 *    has no equivalent; it only forwards GROK_SANDBOX as --sandbox.
 *    Whether the controller child can write compiled-core + checkpoint
 *    outside cwd is unproven. See RUN-GROK-CHANGES.md.
 *
 * 6. --omd-controller-env is a proposed run-grok flag.
 *    Until RUN-GROK-CHANGES.md is applied, run-grok.mjs will ignore the
 *    flag and will not inject the 8 env keys into the grok child. This
 *    wrapper does not also leak the 8 keys via process.env (the brief
 *    names the JSON file as the transfer method).
 *
 * 7. Exact single-shell wrapper.
 *    Luna accepts only `zsh -lc '<exact command>'` (not bash/sh) as the
 *    standard wrapper. Preserved. If grok typically wraps with bash -lc,
 *    that is currently fail-close (activation-raw-command-not-exact).
 *
 * 8. cell.json vs manifest.json.
 *    Luna cells expose .benchmark/cell.json (task.id, arm.variant_id).
 *    run-grok cells expose .benchmark/manifest.json (task.id, variant.id,
 *    runtime_target). This draft accepts either and fail-closes if the
 *    variant is not omd-autopilot-v2 or runtime_target (when present)
 *    is not grok.
 *
 * 9. Other grok tool names (bash / shell / execute).
 *    The brief names run_terminal_command only. Other names are ignored
 *    for activation counting. Forbidden review-v2 / package-v2 scan is
 *    therefore limited to run_terminal_command command strings.
 */

import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  chmodSync,
  cpSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  realpathSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

export const OMD_VARIANT = "omd-autopilot-v2";
export const DEFAULT_TIMEOUT_MS = 900_000;
export const OMD_STAGING_ENV = "OMD_BENCH_EXTERNAL_STAGING_ROOT";
export const OMD_PACKAGE_ENV = "OMD_BENCH_COMPILED_CORE_PACKAGE";
export const OMD_CHECKPOINT_ENV = "OMD_BENCH_CORE_CHECKPOINT";
export const OMD_AUTHORITY_RECEIPT_ENV = "OMD_AUTHORITY_CONTROLLER_RECEIPT";
export const OMD_AUTHORITY_RECEIPT_SHA_ENV = "OMD_AUTHORITY_CONTROLLER_RECEIPT_SHA256";
export const OMD_AUTHORITY_ACTIVATION_SHA_ENV = "OMD_AUTHORITY_CONTROLLER_ACTIVATION_SHA256";
export const OMD_AUTHORITY_RUN_DIR_ENV = "OMD_AUTHORITY_CONTROLLER_RUN_DIR";
export const OMD_AUTHORITY_EXECUTABLE_ENV = "OMD_AUTHORITY_CONTROLLER_EXECUTABLE";

export const OMD_CONTROLLER_ENV_KEYS = Object.freeze([
  OMD_STAGING_ENV,
  OMD_PACKAGE_ENV,
  OMD_CHECKPOINT_ENV,
  OMD_AUTHORITY_RECEIPT_ENV,
  OMD_AUTHORITY_RECEIPT_SHA_ENV,
  OMD_AUTHORITY_ACTIVATION_SHA_ENV,
  OMD_AUTHORITY_RUN_DIR_ENV,
  OMD_AUTHORITY_EXECUTABLE_ENV,
]);

export const OMD_AUTHORITY_RUNTIME_PREFIXES = Object.freeze([
  "scripts/activate-autopilot-design-system.cjs",
  "scripts/prepare-design-md-core-review.cjs",
  "scripts/compile-design-md-core.cjs",
  "scripts/adopt-design-md-core.cjs",
  "scripts/validate-project-design-system.cjs",
  "scripts/design-md-core-schema.cjs",
  "scripts/design-md-core-conformance.cjs",
  "scripts/design-md-core.cjs",
  "spec/schema/",
]);

const AUTHORITY_IDENTIFIER = "omd-grok46-preregistered-authority-controller";
const HERE = dirname(fileURLToPath(import.meta.url));
const DEFAULT_RUNNER = join(HERE, "run-grok.mjs");

function invariant(value, message) {
  if (!value) throw new Error(message);
}

export function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function writeJsonExclusive(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, { flag: "wx" });
}

function parseArgs(argv) {
  const values = new Map();
  for (let index = 0; index < argv.length; index += 1) {
    const key = argv[index];
    if (!key.startsWith("--")) continue;
    const next = argv[index + 1];
    invariant(next && !next.startsWith("--"), `missing value for ${key}`);
    values.set(key.slice(2), next);
    index += 1;
  }
  return values;
}

function regular(path, label) {
  invariant(existsSync(path), `${label} missing`);
  const info = lstatSync(path);
  invariant(info.isFile() && !info.isSymbolicLink(), `${label} must be a regular file`);
}

function directory(path, label) {
  invariant(existsSync(path), `${label} missing`);
  const info = lstatSync(path);
  invariant(info.isDirectory() && !info.isSymbolicLink(), `${label} must be a directory`);
}

function fileBinding(path) {
  regular(path, `artifact ${path}`);
  const bytes = readFileSync(path);
  return { path: resolve(path), sha256: sha256(bytes), bytes: bytes.length };
}

function walk(root, current = root, ignored = new Set()) {
  const files = [];
  for (const name of readdirSync(current).sort()) {
    const absolute = join(current, name);
    const rel = relative(root, absolute).split(sep).join("/");
    if ([...ignored].some((prefix) => rel === prefix || rel.startsWith(`${prefix}/`))) continue;
    const info = lstatSync(absolute);
    invariant(!info.isSymbolicLink(), `symlink forbidden: ${rel}`);
    if (info.isDirectory()) files.push(...walk(root, absolute, ignored));
    else {
      invariant(info.isFile(), `unsupported entry: ${rel}`);
      files.push({
        path: rel,
        mode: info.mode & 0o777,
        bytes: info.size,
        sha256: sha256(readFileSync(absolute)),
      });
    }
  }
  return files;
}

export function tree(root, ignore = []) {
  const files = walk(root, root, new Set(ignore));
  return {
    files,
    sha256: sha256(files.map((file) => `${file.path}\0${file.mode}\0${file.sha256}`).join("\n")),
  };
}

// ── Luna shell parser (item28: substring is not an invocation) ──────────────

function stripShellHeredocBodies(source) {
  const lines = String(source).split("\n");
  const kept = [];
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    kept.push(line);
    const match = line.match(/<<-?\s*(['"]?)([A-Za-z_][A-Za-z0-9_]*)\1/);
    if (!match) continue;
    const delimiter = match[2];
    while (index + 1 < lines.length) {
      index += 1;
      const closing = lines[index].match(new RegExp(`^\\s*${delimiter}(?=\\s|["']|$)(.*)$`));
      if (closing) {
        if (closing[1]) kept.push(closing[1]);
        break;
      }
    }
  }
  return kept.join("\n");
}

function shellTokens(source) {
  const text = stripShellHeredocBodies(source);
  const tokens = [];
  let word = "";
  let quote = null;
  const pushWord = () => {
    if (word) {
      tokens.push({ type: "word", value: word });
      word = "";
    }
  };
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (quote) {
      if (char === quote) quote = null;
      else if (char === "\\" && quote === '"' && index + 1 < text.length) word += text[index += 1];
      else word += char;
      continue;
    }
    if (char === "'" || char === '"') {
      quote = char;
      continue;
    }
    if (char === "\\" && index + 1 < text.length) {
      word += text[index += 1];
      continue;
    }
    if (/\s/.test(char)) {
      pushWord();
      if (char === "\n") tokens.push({ type: "operator", value: "\n" });
      continue;
    }
    const pair = text.slice(index, index + 2);
    if (["&&", "||", "<<", ">>", ";;"].includes(pair)) {
      pushWord();
      tokens.push({ type: "operator", value: pair });
      index += 1;
      continue;
    }
    if ([";", "|", "&", "<", ">", "(", ")"].includes(char)) {
      pushWord();
      tokens.push({ type: "operator", value: char });
      continue;
    }
    word += char;
  }
  pushWord();
  return tokens;
}

function shellInvocations(source, depth = 0) {
  if (depth > 3) return [];
  const tokens = shellTokens(source);
  const invocations = [];
  let argv = [];
  let skipRedirectTarget = false;
  const finish = () => {
    if (argv.length === 0) return;
    while (argv.length && /^[A-Za-z_][A-Za-z0-9_]*=/.test(argv[0])) argv.shift();
    if (argv.length) {
      invocations.push(argv);
      const executable = argv[0].split("/").at(-1)?.toLowerCase();
      if (["sh", "bash", "zsh", "dash", "ksh"].includes(executable)) {
        const commandIndex = argv.findIndex((value, index) => index > 0 && /^(?:-[^-]*c|--command)$/.test(value));
        if (commandIndex >= 0 && argv[commandIndex + 1]) {
          invocations.push(...shellInvocations(argv[commandIndex + 1], depth + 1));
        }
      }
    }
    argv = [];
  };
  for (const token of tokens) {
    if (token.type === "operator") {
      if ([";", ";;", "&&", "||", "|", "&", "\n", "(", ")"].includes(token.value)) finish();
      else skipRedirectTarget = true;
      continue;
    }
    if (skipRedirectTarget) {
      skipRedirectTarget = false;
      continue;
    }
    argv.push(token.value);
  }
  finish();
  return invocations;
}

function unwrapExecutionArgv(input) {
  let argv = [...input];
  for (let depth = 0; depth < 8 && argv.length; depth += 1) {
    while (argv.length && /^[A-Za-z_][A-Za-z0-9_]*=/.test(argv[0])) argv.shift();
    if (!argv.length) return null;
    const executable = argv[0].split("/").at(-1)?.toLowerCase();
    let index = 1;
    if (executable === "command") {
      if (argv.slice(1).some((value) => value === "-v" || value === "-V" || /^-[p]*[vV]/.test(value))) return null;
      while (argv[index]?.startsWith("-") && argv[index] !== "--") index += 1;
      if (argv[index] === "--") index += 1;
    } else if (executable === "exec") {
      while (index < argv.length) {
        const value = argv[index];
        if (value === "--") {
          index += 1;
          break;
        }
        if (value === "-a") {
          index += 2;
          continue;
        }
        if (value.startsWith("-")) {
          index += 1;
          continue;
        }
        break;
      }
    } else if (executable === "env") {
      while (index < argv.length) {
        const value = argv[index];
        if (value === "--") {
          index += 1;
          break;
        }
        if (/^[A-Za-z_][A-Za-z0-9_]*=/.test(value)) {
          index += 1;
          continue;
        }
        if (["-u", "--unset", "-C", "--chdir", "-a", "--argv0"].includes(value)) {
          index += 2;
          continue;
        }
        if (value === "-S" || value === "--split-string") {
          const split = shellTokens(argv[index + 1] ?? "").filter((token) => token.type === "word").map((token) => token.value);
          argv = [...split, ...argv.slice(index + 2)];
          index = 0;
          break;
        }
        const splitString = value.match(/^--split-string=(.*)$/);
        if (splitString) {
          argv = [
            ...shellTokens(splitString[1]).filter((token) => token.type === "word").map((token) => token.value),
            ...argv.slice(index + 1),
          ];
          index = 0;
          break;
        }
        if (value.startsWith("-")) {
          index += 1;
          continue;
        }
        break;
      }
    } else if (executable === "timeout" || executable === "gtimeout") {
      while (index < argv.length) {
        const value = argv[index];
        if (value === "--") {
          index += 1;
          break;
        }
        if (["-k", "--kill-after", "-s", "--signal"].includes(value)) {
          index += 2;
          continue;
        }
        if (value.startsWith("-")) {
          index += 1;
          continue;
        }
        index += 1;
        break;
      }
    } else if (executable === "nice") {
      while (index < argv.length) {
        const value = argv[index];
        if (value === "--") {
          index += 1;
          break;
        }
        if (value === "-n" || value === "--adjustment") {
          index += 2;
          continue;
        }
        if (/^-(?:n)?\d+$/.test(value) || value.startsWith("--adjustment=")) {
          index += 1;
          continue;
        }
        if (value.startsWith("-")) {
          index += 1;
          continue;
        }
        break;
      }
    } else if (executable === "nohup") {
      while (argv[index]?.startsWith("-") && argv[index] !== "--") index += 1;
      if (argv[index] === "--") index += 1;
    } else if (executable === "sudo") {
      const consumesNext = new Set([
        "-a", "--auth-type", "-u", "--user", "-U", "--other-user", "-g", "--group",
        "-h", "--host", "-p", "--prompt", "-C", "--close-from", "-R", "--chroot",
        "-D", "--chdir", "-r", "--role", "-t", "--type", "-T", "--command-timeout",
      ]);
      while (index < argv.length) {
        const value = argv[index];
        if (value === "--") {
          index += 1;
          break;
        }
        if (/^[A-Za-z_][A-Za-z0-9_]*=/.test(value)) {
          index += 1;
          continue;
        }
        if (consumesNext.has(value)) {
          index += 2;
          continue;
        }
        if (value.startsWith("-")) {
          index += 1;
          continue;
        }
        break;
      }
    } else return argv;
    argv = argv.slice(index);
  }
  return argv.length ? argv : null;
}

// ── Authority runtime ───────────────────────────────────────────────────────

export function authorityRuntimeClosure(root) {
  try {
    const files = tree(root).files.filter((file) => OMD_AUTHORITY_RUNTIME_PREFIXES.some((prefix) => (
      prefix.endsWith("/") ? file.path.startsWith(prefix) : file.path === prefix
    )));
    const required = OMD_AUTHORITY_RUNTIME_PREFIXES.filter((prefix) => !prefix.endsWith("/"));
    if (required.some((path) => !files.some((file) => file.path === path))
      || !files.some((file) => file.path.startsWith("spec/schema/"))) {
      return { pass: false, files, sha256: null, reason: "authority-runtime-closure-incomplete" };
    }
    return { pass: true, files, sha256: sha256(canonical(files)), reason: null };
  } catch (error) {
    return { pass: false, files: [], sha256: null, reason: String(error?.message ?? error) };
  }
}

export function materializeAuthorityRuntime(source, execution) {
  const root = join(execution, "authority-controller-runtime");
  mkdirSync(root, { recursive: false, mode: 0o700 });
  for (const prefix of OMD_AUTHORITY_RUNTIME_PREFIXES) {
    const from = join(source, prefix);
    const to = join(root, prefix);
    mkdirSync(dirname(to), { recursive: true });
    cpSync(from, to, { recursive: true, errorOnExist: true });
  }
  let closure = authorityRuntimeClosure(root);
  invariant(closure.pass, closure.reason);
  for (const file of closure.files) chmodSync(join(root, file.path), 0o400);
  for (const dir of [join(root, "scripts"), join(root, "spec/schema"), join(root, "spec"), root]) {
    if (existsSync(dir)) chmodSync(dir, 0o500);
  }
  closure = authorityRuntimeClosure(root);
  invariant(closure.pass, closure.reason);
  return {
    root,
    executable: join(root, "scripts/activate-autopilot-design-system.cjs"),
    ...closure,
  };
}

export function prepareOmdExternalStaging({
  execution,
  workspace,
  metadata,
  authorityRuntime,
  disclosure = null,
  activationSha256 = null,
}) {
  invariant(metadata.variant_id === OMD_VARIANT, "prepareOmdExternalStaging is omd-autopilot-v2 only");
  const canonicalExecution = realpathSync(execution);
  const canonicalWorkspace = realpathSync(workspace);
  const root = join(canonicalExecution, "omd-external-staging");
  invariant(dirname(root) === canonicalExecution && !existsSync(root), "OmD staging root must be a fresh direct child of the cell execution boundary");
  mkdirSync(root, { recursive: false, mode: 0o700 });
  directory(root, "OmD external staging root");
  invariant(realpathSync(root) === root && !root.startsWith(`${canonicalWorkspace}${sep}`), "OmD staging root must be canonical and outside the project workspace");
  const packageRoot = join(root, "compiled-core");
  const checkpointPath = join(root, "project-adoption-checkpoint.json");
  invariant(!packageRoot.startsWith(`${canonicalWorkspace}${sep}`) && !checkpointPath.startsWith(`${packageRoot}${sep}`), "OmD package/checkpoint containment contract drift");

  const promptCandidates = [
    join(workspace, ".benchmark/PROMPT.md"),
    join(workspace, ".benchmark/invocation-prompt.txt"),
  ];
  const promptText = promptCandidates.filter((path) => existsSync(path)).map((path) => readFileSync(path, "utf8")).join("\n");
  if (disclosure) {
    invariant(promptText.includes(disclosure), "OmD prepared prompt is missing the preregistered external staging activation");
  }
  const activationHash = activationSha256 ?? (disclosure ? sha256(disclosure) : null);
  invariant(typeof activationHash === "string" && /^[a-f0-9]{64}$/.test(activationHash), "activation.sha256 is required and must be a 64-char hex digest");

  const receiptPath = join(execution, "OMD-EXTERNAL-STAGING.json");
  writeJsonExclusive(receiptPath, {
    schema_version: "0.1",
    kind: "omd-grok46-cell-local-external-staging",
    variant_id: OMD_VARIANT,
    cell_execution_root: canonicalExecution,
    project_workspace: canonicalWorkspace,
    staging_root: root,
    compiled_package_root: packageRoot,
    checkpoint_path: checkpointPath,
    environment: {
      staging_root: OMD_STAGING_ENV,
      compiled_package: OMD_PACKAGE_ENV,
      checkpoint: OMD_CHECKPOINT_ENV,
    },
    preregistered_activation_sha256: activationHash,
    initial_tree_sha256: tree(root).sha256,
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
    network_calls: 0,
  });

  const authorityReceiptPath = join(execution, "OMD-AUTHORITY-CONTROLLER.json");
  const controllerRunDir = `.omd/runs/${String(metadata.task_id ?? "benchmark-task").replace(/-landing$/, "")}`;
  writeJsonExclusive(authorityReceiptPath, {
    schema_version: "0.1",
    kind: "omd-autopilot-external-authority-controller-activation",
    status: "active",
    authority: { role: "project-owner", identifier: AUTHORITY_IDENTIFIER },
    scope: {
      cell_id: metadata.cell_id ?? "controller-fixture",
      project_workspace: canonicalWorkspace,
      run_dir: controllerRunDir,
      single_deterministic_activation: true,
      review_approval: true,
      project_adoption_checkpoint: true,
      controller_executable: authorityRuntime?.executable,
      authority_runtime_root: authorityRuntime?.root,
      authority_runtime_closure: { sha256: authorityRuntime?.sha256, files: authorityRuntime?.files },
    },
    activation: { sha256: activationHash },
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
    network_calls: 0,
  });

  return {
    root,
    packageRoot,
    checkpointPath,
    disclosure,
    activationSha256: activationHash,
    receiptPath,
    receiptSha256: sha256(readFileSync(receiptPath)),
    authorityReceiptPath,
    authorityReceiptSha256: sha256(readFileSync(authorityReceiptPath)),
    authorityRuntimeRoot: authorityRuntime?.root,
    authorityExecutable: authorityRuntime?.executable,
    authorityRuntimeSha256: authorityRuntime?.sha256 ?? null,
    controllerRunDir,
  };
}

export function buildOmdControllerEnv(staging) {
  const env = {
    [OMD_STAGING_ENV]: staging.root,
    [OMD_PACKAGE_ENV]: staging.packageRoot,
    [OMD_CHECKPOINT_ENV]: staging.checkpointPath,
    [OMD_AUTHORITY_RECEIPT_ENV]: staging.authorityReceiptPath,
    [OMD_AUTHORITY_RECEIPT_SHA_ENV]: staging.authorityReceiptSha256,
    [OMD_AUTHORITY_ACTIVATION_SHA_ENV]: staging.activationSha256,
    [OMD_AUTHORITY_RUN_DIR_ENV]: staging.controllerRunDir,
    [OMD_AUTHORITY_EXECUTABLE_ENV]: staging.authorityExecutable,
  };
  invariant(canonical(Object.keys(env).sort()) === canonical([...OMD_CONTROLLER_ENV_KEYS].sort()), "OmD controller env key set drift");
  for (const key of OMD_CONTROLLER_ENV_KEYS) {
    invariant(typeof env[key] === "string" && env[key], `OmD controller env missing ${key}`);
  }
  return env;
}

// ── Post-run audits (Luna rules, grok event adapter) ────────────────────────

export function auditOmdExternalStaging(staging) {
  if (!staging) return { applicable: false, pass: true, violations: [] };
  const violations = [];
  const visit = (root, current = root) => {
    for (const name of readdirSync(current).sort()) {
      const path = join(current, name);
      const info = lstatSync(path);
      if (info.isSymbolicLink()) violations.push({ path: relative(root, path), reason: "symlink-forbidden" });
      else if (info.isDirectory()) visit(root, path);
      else if (!info.isFile()) violations.push({ path: relative(root, path), reason: "unsupported-entry" });
    }
  };
  try {
    directory(staging.root, "OmD external staging root");
    visit(staging.root);
  } catch (error) {
    return {
      applicable: true,
      pass: false,
      root: staging.root,
      violations: [{ path: ".", reason: "staging-missing-or-invalid", detail: String(error?.message ?? error) }],
      tree: null,
    };
  }
  const expected = [
    "compiled-core/.omd/system/adoption-receipt.json",
    "compiled-core/.omd/system/coverage.json",
    "compiled-core/.omd/system/graph.json",
    "compiled-core/.omd/system/manifest.json",
    "compiled-core/.omd/system/provenance.json",
    "compiled-core/DESIGN.md",
    "project-adoption-checkpoint.json",
  ];
  const observed = violations.length === 0 ? tree(staging.root).files.map((item) => item.path).sort() : [];
  if (violations.length === 0 && canonical(observed) !== canonical(expected.sort())) {
    violations.push({ path: ".", reason: "exact-compiled-package-and-checkpoint-file-set-required", expected, observed });
  }
  return {
    applicable: true,
    pass: violations.length === 0,
    root: staging.root,
    violations,
    tree: violations.length === 0 ? tree(staging.root) : null,
  };
}

function collectStrings(value, depth = 0) {
  if (depth > 6 || value == null) return [];
  if (typeof value === "string") {
    // Observed grok wire (pilot cell 2026-08-15): tool_result.content is a
    // JSON-encoded string like {"type":"Bash","output":[116,111,...]} whose
    // output is a byte array. Decode nested JSON and byte arrays so success
    // markers in terminal output are visible to the audit.
    const trimmed = value.trim();
    if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
      try {
        return [value, ...collectStrings(JSON.parse(trimmed), depth + 1)];
      } catch {
        return [value];
      }
    }
    return [value];
  }
  if (Array.isArray(value)) {
    if (
      value.length > 0 &&
      value.every((item) => Number.isInteger(item) && item >= 0 && item <= 255)
    ) {
      try {
        return [Buffer.from(value).toString("utf8")];
      } catch {
        return [];
      }
    }
    return value.flatMap((item) => collectStrings(item, depth + 1));
  }
  if (typeof value === "object") {
    if (typeof value.text === "string" && (value.type === "text" || value.type == null)) return [value.text];
    return Object.values(value).flatMap((item) => collectStrings(item, depth + 1));
  }
  return [];
}

function toolNameOf(value) {
  return String(value ?? "").split("/").at(-1);
}

function isTerminalCommandTool(name) {
  return toolNameOf(name) === "run_terminal_command";
}

function commandFromInput(input) {
  if (typeof input?.command === "string") return input.command;
  return null;
}

function contentBlocksFromEvent(event) {
  const blocks = [];
  if (Array.isArray(event?.message?.content)) blocks.push(...event.message.content);
  if (Array.isArray(event?.content)) blocks.push(...event.content);
  return blocks;
}

/**
 * Reconstruct run_terminal_command tool_use records from grok
 * streaming-messages-json (Anthropic-shaped NDJSON).
 *
 * Unknown extra shapes are ignored. Missing success evidence is fail-close
 * later — this function does not invent a completed result.
 */
export function collectGrokTerminalCommands(events) {
  const tools = new Map();
  const streamByIndex = new Map();

  const upsert = ({ id, name, input }) => {
    const key = id ?? `anon:${sha256(canonical({ name, input }))}`;
    const record = tools.get(key) ?? { id: id ?? key, name: name ?? null, input: null, command: null, results: [] };
    if (name) record.name = name;
    if (input && typeof input === "object") {
      record.input = input;
      const command = commandFromInput(input);
      if (command != null) record.command = command;
    }
    tools.set(key, record);
    return record;
  };

  const ingestResult = ({ toolUseId, raw }) => {
    if (!toolUseId) return;
    const record = tools.get(toolUseId) ?? {
      id: toolUseId,
      name: null,
      input: null,
      command: null,
      results: [],
    };
    const exitCode = raw?.exit_code ?? raw?.exitCode ?? raw?.input?.exit_code ?? null;
    const status = raw?.status ?? null;
    const isError = raw?.is_error === true || raw?.isError === true;
    record.results.push({
      content: collectStrings(raw?.content ?? raw?.output ?? raw?.result ?? raw?.aggregated_output ?? raw).join("\n"),
      isError,
      exitCode: typeof exitCode === "number" ? exitCode : exitCode == null ? null : Number(exitCode),
      status: typeof status === "string" ? status : null,
    });
    tools.set(toolUseId, record);
  };

  for (const event of events) {
    if (event?.type === "content_block_start" && event.content_block?.type === "tool_use") {
      const block = event.content_block;
      streamByIndex.set(event.index, { id: block.id, name: block.name, json: "" });
      upsert({ id: block.id, name: block.name, input: block.input });
    }
    if (event?.type === "content_block_delta" && event.delta?.type === "input_json_delta") {
      const streamed = streamByIndex.get(event.index);
      if (streamed) streamed.json += String(event.delta.partial_json ?? "");
    }
    if (event?.type === "content_block_stop") {
      const streamed = streamByIndex.get(event.index);
      if (streamed?.json) {
        try {
          upsert({ id: streamed.id, name: streamed.name, input: JSON.parse(streamed.json) });
        } catch {
          streamed.parse_error = true;
        }
      }
    }

    for (const block of contentBlocksFromEvent(event)) {
      if (block?.type === "tool_use") upsert({ id: block.id, name: block.name ?? block.tool, input: block.input });
      if (block?.type === "tool_result") {
        ingestResult({
          toolUseId: block.tool_use_id ?? block.toolUseId ?? block.id,
          raw: block,
        });
      }
    }

    if (event?.type === "tool_use") {
      upsert({
        id: event.id ?? event.tool_use_id,
        name: event.name ?? event.tool,
        input: event.input ?? event.arguments,
      });
    }
    if (event?.type === "tool_result" || event?.type === "tool_use_result") {
      ingestResult({
        toolUseId: event.tool_use_id ?? event.toolUseId ?? event.id,
        raw: event,
      });
    }
  }

  return [...tools.values()].filter((tool) => isTerminalCommandTool(tool.name));
}

function grokToolsToLunaCommandEvents(tools) {
  const events = [];
  for (const tool of tools) {
    const id = String(tool.id ?? `cmd:${sha256(String(tool.command ?? ""))}`);
    const command = String(tool.command ?? "");
    events.push({ type: "item.started", item: { type: "command_execution", id, command } });
    if (tool.results.length === 0) continue;
    const last = tool.results.at(-1);
    const successful = last.isError !== true
      && (last.exitCode == null || last.exitCode === 0)
      && (last.status == null || last.status === "completed" || last.status === "success");
    events.push({
      type: successful ? "item.completed" : "item.failed",
      item: {
        type: "command_execution",
        id,
        command,
        exit_code: last.exitCode ?? (last.isError ? 1 : null),
        status: last.status ?? (successful ? "completed" : "failed"),
        aggregated_output: last.content ?? "",
        stdout: last.content ?? "",
        output: last.content ?? "",
      },
    });
  }
  return events;
}

/**
 * Luna auditOmdControllerCommands judgment, preserved:
 *  - syntactic activation only when unwrapExecutionArgv target is node + controller operand
 *    (rg/cat/diagnostic substring is not activation — item28)
 *  - exact raw command is the literal env form, the expanded canonical form,
 *    or a single `zsh -lc` wrapper of either
 *  - exactly one successful activation with adopted-and-validated output
 *  - env assignment / --approve / --prepare-checkpoint / --reviewer /
 *    review-v2|package-v2 are forbidden
 */
export function auditOmdControllerCommands(events, runDir, controllerExecutable = "scripts/activate-autopilot-design-system.cjs") {
  const commandEvents = Array.isArray(events) && events.some((event) => event?.item?.type === "command_execution")
    ? events
    : grokToolsToLunaCommandEvents(collectGrokTerminalCommands(events));

  const observed = new Map();
  const lifecycle = new Map();
  for (const event of commandEvents) {
    if (!/^item\.(?:started|completed|failed)$/.test(String(event.type)) || event.item?.type !== "command_execution") continue;
    const command = String(event.item.command ?? "");
    if (!command) continue;
    const id = String(event.item.id ?? `${event.type}:${sha256(command)}`);
    observed.set(id, { ...event, item: { ...event.item, command } });
    const record = lifecycle.get(id) ?? { command, events: [] };
    record.events.push(event);
    record.command = command;
    lifecycle.set(id, record);
  }

  const activations = [];
  const forbidden = [];
  const literalCommand = `node $${OMD_AUTHORITY_EXECUTABLE_ENV} . $${OMD_AUTHORITY_RUN_DIR_ENV}`;
  const expandedCommand = `node ${controllerExecutable} . ${runDir}`;
  const exactRawActivation = (command) => {
    if (command === literalCommand || command === expandedCommand) return true;
    const tokens = shellTokens(command);
    return tokens.length === 3 && tokens.every((token) => token.type === "word")
      && tokens[0].value.split("/").at(-1) === "zsh" && tokens[1].value === "-lc"
      && (tokens[2].value === literalCommand || tokens[2].value === expandedCommand);
  };
  const syntacticActivation = (command) => shellInvocations(command).some((invocation) => {
    const argv = unwrapExecutionArgv(invocation);
    if (!argv?.length) return false;
    const executable = argv[0].split("/").at(-1)?.toLowerCase();
    if (!["node", "nodejs"].includes(executable)) return false;
    const operand = String(argv[1] ?? "").replace(/^\.\//, "");
    return operand === `$${OMD_AUTHORITY_EXECUTABLE_ENV}`
      || resolve(operand || ".") === resolve(controllerExecutable)
      || operand.split("/").at(-1) === "activate-autopilot-design-system.cjs";
  });

  for (const [id, record] of lifecycle) {
    const command = record.command.trim();
    const activationLike = syntacticActivation(command);
    if (!activationLike) continue;
    if (!exactRawActivation(command)) {
      forbidden.push({ id, reason: "activation-raw-command-not-exact", command_sha256: sha256(record.command) });
      continue;
    }
    const finalEvent = record.events.at(-1);
    const exitCode = finalEvent?.item?.exit_code;
    const status = finalEvent?.item?.status;
    const successful = finalEvent?.type === "item.completed"
      && (exitCode == null || exitCode === 0)
      && (status == null || status === "completed" || status === "success");
    const output = [finalEvent?.item?.aggregated_output, finalEvent?.item?.stdout, finalEvent?.item?.output]
      .find((value) => typeof value === "string" && value.length > 0);
    if (!successful) forbidden.push({ id, reason: "activation-not-successfully-completed", command_sha256: sha256(record.command) });
    else if (output && !/adopted-and-validated/.test(output)) {
      forbidden.push({ id, reason: "activation-success-output-unproven", command_sha256: sha256(record.command) });
    } else activations.push(id);
  }

  for (const event of observed.values()) {
    const command = String(event.item.command ?? "");
    for (const invocation of shellInvocations(command)) {
      const argv = unwrapExecutionArgv(invocation);
      if (!argv?.length) continue;
      const normalized = argv.map(String);
      const joined = normalized.join(" ");
      if (new RegExp(`${OMD_AUTHORITY_EXECUTABLE_ENV}=`).test(command)
        || (/prepare-design-md-core-review\.cjs/.test(joined) && /--approve/.test(joined))
        || (/adopt-design-md-core\.cjs/.test(joined) && /--prepare-checkpoint/.test(joined))
        || /--reviewer|--authority-transition-approved/.test(joined)
        || /(?:review|package)-v[2-9]\b/.test(joined)) {
        forbidden.push({ id: String(event.item.id), reason: "direct-or-repeated-authority-command", command_sha256: sha256(command) });
      }
    }
  }

  return {
    pass: activations.length === 1 && forbidden.length === 0,
    exact_activation_count: activations.length,
    activation_item_ids: activations,
    forbidden,
    evidence_mode: "grok-streaming-messages-json-run_terminal_command-tool_use",
  };
}

export function auditOmdControllerOutcome({ workspace, staging, authorityReceiptSha256, runDir }) {
  const violations = [];
  const activationPath = join(workspace, runDir, "system/activation.json");
  const designPath = join(workspace, "DESIGN.md");
  const proofPath = join(workspace, runDir, "system/proof.json");
  for (const [file, label] of [[activationPath, "activation"], [designPath, "DESIGN"], [proofPath, "proof"]]) {
    try { regular(file, `OmD ${label}`); } catch { violations.push(`${label}-missing-or-invalid`); }
  }
  let activation = null;
  let proofValue = null;
  if (!violations.includes("activation-missing-or-invalid")) {
    try { activation = readJson(activationPath); } catch { violations.push("activation-json-invalid"); }
  }
  if (!violations.includes("proof-missing-or-invalid")) {
    try { proofValue = readJson(proofPath); } catch { violations.push("proof-json-invalid"); }
  }
  if (activation) {
    let designSha = null;
    let proofSha = null;
    try { designSha = sha256(readFileSync(designPath)); } catch { /* recorded above */ }
    try { proofSha = sha256(readFileSync(proofPath)); } catch { /* recorded above */ }
    if (activation.schema_version !== "0.1"
      || activation.kind !== "omd-autopilot-deterministic-system-activation"
      || activation.status !== "adopted-and-validated"
      || activation.authority_controller_receipt_sha256 !== authorityReceiptSha256
      || !designSha || !proofSha
      || activation.outputs?.design_md_sha256 !== designSha
      || activation.outputs?.proof_sha256 !== proofSha) {
      violations.push("activation-binding-invalid");
    }
    if (!proofValue || proofValue.pass !== true || proofValue.status !== "passed"
      || proofValue.design_md_sha256 !== activation.outputs?.design_md_sha256) {
      violations.push("activation-project-proof-invalid");
    }
  }
  const stagingAudit = auditOmdExternalStaging(staging);
  if (!stagingAudit.pass) violations.push("external-staging-invalid");
  return {
    applicable: true,
    pass: violations.length === 0,
    activation: activation && violations.length === 0 ? fileBinding(activationPath) : null,
    violations,
    staging: stagingAudit,
  };
}

function auditImmutableFile(path, expectedSha256) {
  try {
    regular(path, `immutable receipt ${path}`);
    const bytes = readFileSync(path);
    const actualSha256 = sha256(bytes);
    return {
      pass: actualSha256 === expectedSha256,
      binding: { path: resolve(path), sha256: actualSha256, bytes: bytes.length },
      reason: actualSha256 === expectedSha256 ? null : "sha256-drift",
    };
  } catch (error) {
    return { pass: false, binding: null, reason: String(error?.message ?? error) };
  }
}

function parseEvents(path) {
  if (!existsSync(path)) return [];
  return readFileSync(path, "utf8").split(/\r?\n/).filter(Boolean).map((line) => {
    try { return JSON.parse(line); } catch { return { type: "unparseable", raw_sha256: sha256(line) }; }
  });
}

// ── Cell workspace copy (Luna copyExecutionWorkspace, grok target) ──────────

function readCellIdentity(cell) {
  const cellJsonPath = join(cell, ".benchmark/cell.json");
  const manifestPath = join(cell, ".benchmark/manifest.json");
  const cellJson = existsSync(cellJsonPath) ? readJson(cellJsonPath) : null;
  const manifest = existsSync(manifestPath) ? readJson(manifestPath) : null;
  const variant_id = cellJson?.arm?.variant_id ?? cellJson?.variant_id ?? manifest?.variant?.id ?? null;
  const task_id = cellJson?.task?.id ?? manifest?.task?.id ?? null;
  const cell_id = cellJson?.cell_id ?? manifest?.cell_id ?? null;
  const runtime_target = cellJson?.runtime?.provider ?? manifest?.runtime_target ?? null;
  return { cellJson, manifest, variant_id, task_id, cell_id, runtime_target };
}

function copyExecutionWorkspace(cell, target) {
  mkdirSync(target, { recursive: false });
  for (const name of readdirSync(cell)) {
    if (name === ".benchmark") continue;
    cpSync(join(cell, name), join(target, name), { recursive: true, errorOnExist: true });
  }
  mkdirSync(join(target, ".benchmark"), { recursive: false });
  // The two prompt artifacts are DIFFERENT by design: PROMPT.md is the bare
  // task prompt (receipt/evaluator), invocation-prompt.txt is what the model
  // receives (activation prefix + task + workspace boundary). Copy each from
  // its own source and verify per-file byte identity.
  const invocationPath = join(cell, ".benchmark/invocation-prompt.txt");
  const promptPath = join(cell, ".benchmark/PROMPT.md");
  invariant(existsSync(invocationPath), "prepared cell is missing invocation-prompt.txt");
  invariant(existsSync(promptPath), "prepared cell is missing PROMPT.md");
  cpSync(invocationPath, join(target, ".benchmark/invocation-prompt.txt"));
  cpSync(promptPath, join(target, ".benchmark/PROMPT.md"));
  invariant(
    readFileSync(join(target, ".benchmark/invocation-prompt.txt")).equals(readFileSync(invocationPath))
      && readFileSync(join(target, ".benchmark/PROMPT.md")).equals(readFileSync(promptPath)),
    "copied execution prompt differs from exact materialized bytes",
  );
  const identity = readCellIdentity(cell);
  const initial = tree(target, [".benchmark"]);
  writeJsonExclusive(join(target, ".benchmark/manifest.json"), {
    runtime_target: "grok",
    task: { id: identity.task_id },
    variant: { id: identity.variant_id },
    workspace: {
      initial_sha256: tree(target).sha256,
      product_initial_sha256: initial.sha256,
      product_initial_files: initial.files,
      product_ignore: [".benchmark"],
    },
  });
  return { metadata: identity, initial: tree(target) };
}

async function resolveActivation(args) {
  const disclosurePath = args.get("activation-disclosure-file");
  const shaArg = args.get("activation-sha256");
  let disclosure = null;
  let activationSha256 = null;
  if (disclosurePath) {
    regular(resolve(disclosurePath), "activation disclosure");
    disclosure = readFileSync(resolve(disclosurePath), "utf8");
    activationSha256 = sha256(disclosure);
  }
  if (shaArg) {
    invariant(/^[a-f0-9]{64}$/.test(shaArg), "--activation-sha256 must be a 64-char hex digest");
    if (activationSha256) invariant(activationSha256 === shaArg, "activation disclosure digest differs from --activation-sha256");
    else activationSha256 = shaArg;
  }
  if (!activationSha256) {
    // Default authority (OQ1 resolved 2026-08-15): the preregistered
    // disclosure is the same 1,145-byte OMD_EXTERNAL_STAGING_ACTIVATION text
    // exported by the Luna lane — byte-identical across lanes by the fairness
    // contract (it is the body of the frozen omd activation prefix).
    const luna = await import("./prepare-luna-max-wow-preview.mjs");
    disclosure = luna.OMD_EXTERNAL_STAGING_ACTIVATION;
    invariant(
      typeof disclosure === "string" && disclosure.length > 0,
      "OMD_EXTERNAL_STAGING_ACTIVATION export missing",
    );
    activationSha256 = sha256(disclosure);
  }
  return { disclosure, activationSha256 };
}

function sealCellResult({ path, runResult, controllerAudit, processInfo }) {
  const sealed = {
    ...(runResult ?? {
      schema_version: "0.2",
      runtime: { runtime_target: "grok", agent: "grok-build-cli" },
      process: processInfo ?? null,
    }),
    controller_audit: controllerAudit,
  };
  const clone = structuredClone(sealed);
  delete clone.record_sha256;
  sealed.record_sha256 = sha256(canonical(clone));
  writeJsonExclusive(path, sealed);
  return sealed;
}

export function runOmdCell(options) {
  const cell = resolve(options.workspace);
  directory(cell, "prepared cell");
  const identity = readCellIdentity(cell);
  invariant(identity.variant_id === OMD_VARIANT, `this wrapper is omd-autopilot-v2 only (observed ${identity.variant_id ?? "null"})`);
  invariant(identity.task_id, "prepared cell is missing task id");
  if (identity.runtime_target != null) {
    invariant(identity.runtime_target === "grok", `prepared cell runtime_target must be grok (observed ${identity.runtime_target})`);
  }

  const execution = join(cell, ".benchmark/execution");
  invariant(!existsSync(execution), "cell execution already started");
  mkdirSync(execution, { recursive: false });

  const isolated = join(execution, "workspace");
  copyExecutionWorkspace(cell, isolated);
  const canonicalWorkspace = realpathSync(isolated);
  const metadata = {
    cell_id: identity.cell_id ?? options.cellId ?? null,
    task_id: identity.task_id,
    variant_id: identity.variant_id,
  };

  const materialized = materializeAuthorityRuntime(canonicalWorkspace, execution);
  const authorityRuntime = {
    ...materialized,
    root: realpathSync(materialized.root),
    executable: realpathSync(materialized.executable),
  };
  const staging = prepareOmdExternalStaging({
    execution: realpathSync(execution),
    workspace: canonicalWorkspace,
    metadata,
    authorityRuntime,
    disclosure: options.disclosure ?? null,
    activationSha256: options.activationSha256,
  });
  const omdEnv = buildOmdControllerEnv(staging);
  const envFile = join(execution, "OMD-CONTROLLER-ENV.json");
  writeJsonExclusive(envFile, omdEnv);
  const envFileBinding = fileBinding(envFile);

  const runner = resolve(options.runnerBin ?? DEFAULT_RUNNER);
  regular(runner, "run-grok runner");
  const timeoutMs = Number(options.timeoutMs ?? DEFAULT_TIMEOUT_MS);
  const childEnv = {};
  for (const key of ["PATH", "TMPDIR", "LANG", "LC_ALL", "TERM", "USER", "SHELL", "HOME", "GROK_SANDBOX"]) {
    if (process.env[key]) childEnv[key] = process.env[key];
  }

  const spawn = spawnSync(process.execPath, [
    runner,
    "--workspace", canonicalWorkspace,
    "--timeout-ms", String(timeoutMs),
    "--omd-controller-env", envFile,
  ], {
    cwd: canonicalWorkspace,
    encoding: "utf8",
    timeout: timeoutMs + 30_000,
    maxBuffer: 64 * 1024 * 1024,
    env: childEnv,
  });

  writeFileSync(join(execution, "runner.stdout"), spawn.stdout ?? "", { flag: "wx" });
  writeFileSync(join(execution, "runner.stderr"), spawn.stderr ?? "", { flag: "wx" });

  const runResultPath = join(canonicalWorkspace, ".benchmark/run-result.json");
  const eventsPath = join(canonicalWorkspace, ".benchmark/events.jsonl");
  const events = parseEvents(eventsPath);
  const runResult = existsSync(runResultPath) ? readJson(runResultPath) : null;
  const timedOut = spawn.error?.code === "ETIMEDOUT" || runResult?.process?.timed_out === true;

  const authorityRuntimePost = authorityRuntimeClosure(staging.authorityRuntimeRoot);
  const authorityRuntimeIntact = authorityRuntimePost.pass && authorityRuntimePost.sha256 === staging.authorityRuntimeSha256;
  const commands = auditOmdControllerCommands(events, staging.controllerRunDir, staging.authorityExecutable);
  const outcome = auditOmdControllerOutcome({
    workspace: canonicalWorkspace,
    staging,
    authorityReceiptSha256: staging.authorityReceiptSha256,
    runDir: staging.controllerRunDir,
  });
  const stagingReceiptAudit = auditImmutableFile(staging.receiptPath, staging.receiptSha256);
  const authorityReceiptAudit = auditImmutableFile(staging.authorityReceiptPath, staging.authorityReceiptSha256);

  const violations = [];
  if (!authorityRuntimeIntact) violations.push(authorityRuntimePost.reason ?? "authority-runtime-closure-drift");
  if (!stagingReceiptAudit.pass) violations.push(stagingReceiptAudit.reason ?? "staging-receipt-sha256-drift");
  if (!authorityReceiptAudit.pass) violations.push(authorityReceiptAudit.reason ?? "authority-receipt-sha256-drift");
  if (!commands.pass) {
    violations.push(
      commands.exact_activation_count === 0
        ? "authority-activation-missing"
        : commands.exact_activation_count > 1
          ? "authority-activation-duplicate"
          : (commands.forbidden[0]?.reason ?? "authority-command-audit-failed"),
    );
  }
  if (!outcome.pass) violations.push(...outcome.violations);
  if (!runResult) violations.push("grok-run-result-missing");
  if (spawn.error) violations.push(`grok-spawn-error:${spawn.error.message}`);
  if (timedOut) violations.push("grok-timeout");
  if (spawn.status !== 0 && !timedOut && !spawn.error) violations.push("grok-process-nonzero");

  const controllerAudit = {
    schema_version: "0.1",
    kind: "omd-grok46-authority-controller-audit",
    pass: violations.length === 0,
    reason: violations[0] ?? null,
    violations,
    env_file: envFileBinding,
    authority_runtime: {
      expected_sha256: staging.authorityRuntimeSha256,
      observed_sha256: authorityRuntimePost.sha256,
      intact: authorityRuntimeIntact,
      reason: authorityRuntimePost.reason,
      executable: staging.authorityExecutable,
      root: staging.authorityRuntimeRoot,
    },
    authority_receipt: {
      binding: authorityReceiptAudit.binding,
      expected_sha256: staging.authorityReceiptSha256,
      intact: authorityReceiptAudit.pass,
      reason: authorityReceiptAudit.reason,
    },
    staging_receipt: {
      binding: stagingReceiptAudit.binding,
      expected_sha256: staging.receiptSha256,
      intact: stagingReceiptAudit.pass,
      reason: stagingReceiptAudit.reason,
    },
    staging: outcome.staging,
    commands,
    outcome,
    grok_events: existsSync(eventsPath) ? fileBinding(eventsPath) : null,
    grok_run_result: existsSync(runResultPath) ? fileBinding(runResultPath) : null,
  };

  const processInfo = {
    exit_code: spawn.status,
    signal: spawn.signal,
    timed_out: timedOut,
    error: spawn.error?.message ?? null,
  };
  const cellResultPath = join(execution, "cell-result.json");
  const sealed = sealCellResult({
    path: cellResultPath,
    runResult,
    controllerAudit,
    processInfo,
  });
  return {
    cell_result: sealed,
    cell_result_path: cellResultPath,
    pass: controllerAudit.pass,
    process: processInfo,
    workspace: canonicalWorkspace,
    execution,
  };
}

export async function main(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);
  invariant(args.has("workspace"), "usage: run-grok46-omd-cell.mjs --workspace <prepared-cell> [--activation-disclosure-file <path> | --activation-sha256 <hex>] [--timeout-ms 900000] [--runner-bin <run-grok.mjs>] [--cell-id <id>]");
  const activation = await resolveActivation(args);
  const result = runOmdCell({
    workspace: args.get("workspace"),
    timeoutMs: args.has("timeout-ms") ? Number(args.get("timeout-ms")) : DEFAULT_TIMEOUT_MS,
    runnerBin: args.get("runner-bin"),
    cellId: args.get("cell-id"),
    disclosure: activation.disclosure,
    activationSha256: activation.activationSha256,
  });
  process.stdout.write(`${JSON.stringify({
    pass: result.pass,
    cell_result: result.cell_result_path,
    controller_audit_pass: result.cell_result.controller_audit?.pass ?? false,
    controller_audit_reason: result.cell_result.controller_audit?.reason ?? null,
    grok_exit_code: result.process.exit_code,
    timed_out: result.process.timed_out,
  })}\n`);
  if (!result.pass) process.exitCode = 1;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    await main();
  } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 1;
  }
}
