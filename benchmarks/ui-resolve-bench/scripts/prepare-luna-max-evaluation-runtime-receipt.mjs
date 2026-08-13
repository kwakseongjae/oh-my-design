#!/usr/bin/env node
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { accessSync, constants, cpSync, existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, realpathSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { homedir } from "node:os";
import { dirname, isAbsolute, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
export const defaultRepoRoot = resolve(here, "../../..");
export const SCRIPT_PATH = "benchmarks/ui-resolve-bench/scripts/prepare-luna-max-evaluation-runtime-receipt.mjs";
export const DEFAULT_CONFIG_PATH = "benchmarks/ui-resolve-bench/config/omd-luna-max-wow-preview-v0.1.json";
export const EVALUATION_AUTHORITIES = Object.freeze({
  evaluator: "benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs",
  evaluator_adapters: "benchmarks/ui-resolve-bench/config/autopilot-greenfield-adapters-v0.1.json",
  task_set: "benchmarks/ui-resolve-bench/config/autopilot-greenfield-tasks-v0.1.json",
  task_set_validator: "benchmarks/ui-resolve-bench/scripts/validate-autopilot-greenfield-task-set.mjs",
  adapter_validator: "benchmarks/ui-resolve-bench/scripts/validate-autopilot-greenfield-adapters.mjs",
});
export const VIEWPORTS = Object.freeze([
  { id: "desktop-1440", width: 1440, height: 900 },
  { id: "mobile-390", width: 390, height: 844 },
  { id: "mobile-320", width: 320, height: 720 },
  { id: "zoom-200-reflow-equivalent", width: 720, height: 450 },
]);
export const CHROMIUM_ARGS = Object.freeze(["--disable-background-networking", "--disable-component-update", "--no-first-run"]);

const COMMIT = /^[a-f0-9]{40}$/;
const SHA = /^[a-f0-9]{64}$/;
const FONT = /\.(?:dfont|otc|otf|ttc|ttf|woff2?)$/i;

export function sha256(bytes) { return createHash("sha256").update(bytes).digest("hex"); }
export function canonicalJson(value) {
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonicalJson(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
}

function git(root, ...args) {
  return execFileSync("git", ["-C", root, ...args], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}
function gitBytes(root, commit, path) {
  return execFileSync("git", ["-C", root, "show", `${commit}:${path}`], { encoding: "buffer", stdio: ["ignore", "pipe", "pipe"] });
}
function canonicalAbsolute(path, label) {
  if (typeof path !== "string" || !isAbsolute(path) || resolve(path) !== path || path.split(sep).includes("..")) throw new Error(`${label} must be a canonical absolute path`);
}
function regular(path, label, executable = false) {
  canonicalAbsolute(path, label);
  if (!existsSync(path)) throw new Error(`${label} missing: ${path}`);
  const info = lstatSync(path);
  if (!info.isFile() || info.isSymbolicLink()) throw new Error(`${label} must be a regular non-symlink file: ${path}`);
  if (realpathSync(path) !== path) throw new Error(`${label} path aliases are forbidden: ${path}`);
  if (executable) accessSync(path, constants.X_OK);
}
function repoFile(root, commit, path, label = path) {
  const absolute = resolve(root, path);
  if (absolute === root || !absolute.startsWith(`${root}${sep}`)) throw new Error(`${label} escapes repository`);
  regular(absolute, label);
  const bytes = readFileSync(absolute);
  if (!bytes.equals(gitBytes(root, commit, path))) throw new Error(`${label} differs from exact source commit`);
  return { path, bytes: bytes.length, sha256: sha256(bytes) };
}

export function assertCleanExactSource({ root, sourceCommit, configPath = DEFAULT_CONFIG_PATH }) {
  root = realpathSync(resolve(root));
  if (!COMMIT.test(sourceCommit ?? "")) throw new Error("source commit must be an exact lowercase 40-character SHA");
  if (git(root, "rev-parse", "HEAD") !== sourceCommit) throw new Error("source commit drift");
  if (git(root, "status", "--porcelain=v1", "--untracked-files=all")) throw new Error("source worktree must be exact clean HEAD");
  const receiptAuthority = repoFile(root, sourceCommit, SCRIPT_PATH, "receipt authority");
  const configAuthority = repoFile(root, sourceCommit, configPath, "benchmark config");
  const config = JSON.parse(readFileSync(resolve(root, configPath), "utf8"));
  const authorities = {};
  for (const [id, path] of Object.entries(EVALUATION_AUTHORITIES)) {
    const entry = repoFile(root, sourceCommit, path, id);
    const declared = config.authorities?.[id];
    if (declared?.path !== path || declared.sha256 !== entry.sha256) throw new Error(`benchmark config authority drift: ${id}`);
    authorities[id] = entry;
  }
  return { root, receiptAuthority, configAuthority, authorities };
}

export function selectBrowserExecutable(env = process.env, which = (command) => execFileSync("which", [command], { encoding: "utf8" }).trim()) {
  const candidates = [env.CHROME_PATH, "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "/Applications/Chromium.app/Contents/MacOS/Chromium", "/usr/bin/google-chrome", "/usr/bin/chromium"].filter(Boolean);
  let selected = candidates.find(existsSync);
  if (!selected) {
    for (const command of ["google-chrome", "chromium"]) {
      try { selected = which(command); if (selected) break; } catch { /* identical fallback order to evaluator */ }
    }
  }
  if (!selected) throw new Error("Chrome/Chromium executable not found");
  const absolute = resolve(selected);
  regular(absolute, "browser executable", true);
  return absolute;
}

function dependencyRequire(root, specifier) {
  for (const base of [join(root, "package.json"), join(root, "web/package.json")]) {
    try { return createRequire(base).resolve(specifier); } catch { /* evaluator uses the same root then web fallback */ }
  }
  throw new Error(`evaluator dependency missing: ${specifier}`);
}
function dependency(root, name, runtimeSpecifier) {
  const packagePath = dependencyRequire(root, `${name}/package.json`);
  const runtimePath = dependencyRequire(root, runtimeSpecifier);
  regular(packagePath, `${name} package metadata`);
  regular(runtimePath, `${name} runtime bytes`);
  const packageBytes = readFileSync(packagePath);
  const runtimeBytes = readFileSync(runtimePath);
  const metadata = JSON.parse(packageBytes);
  if (!metadata.version) throw new Error(`${name} version missing`);
  return {
    name, version: metadata.version,
    package_json: { path: packagePath, bytes: packageBytes.length, sha256: sha256(packageBytes) },
    runtime: { path: runtimePath, bytes: runtimeBytes.length, sha256: sha256(runtimeBytes) },
  };
}
function bundledDependency(bundleRoot, name, runtimeRelative) {
  const packagePath = join(bundleRoot, "node_modules", name, "package.json");
  const runtimePath = join(bundleRoot, "node_modules", name, runtimeRelative);
  regular(packagePath, `${name} bundled package metadata`); regular(runtimePath, `${name} bundled runtime bytes`);
  const packageBytes = readFileSync(packagePath); const runtimeBytes = readFileSync(runtimePath); const metadata = JSON.parse(packageBytes);
  if (!metadata.version) throw new Error(`${name} bundled version missing`);
  return { name, version: metadata.version, package_json: { path: packagePath, bytes: packageBytes.length, sha256: sha256(packageBytes) }, runtime: { path: runtimePath, bytes: runtimeBytes.length, sha256: sha256(runtimeBytes) } };
}
function dependencyTree(root, current = root) {
  const files = [];
  for (const name of readdirSync(current).sort((a, b) => Buffer.from(a).compare(Buffer.from(b)))) {
    const path = join(current, name); const info = lstatSync(path);
    if (info.isSymbolicLink()) throw new Error(`evaluation dependency bundle symlink forbidden: ${path}`);
    if (info.isDirectory()) files.push(...dependencyTree(root, path));
    else {
      if (!info.isFile()) throw new Error(`evaluation dependency bundle unsupported entry: ${path}`);
      const bytes = readFileSync(path);
      files.push({ path: path.slice(root.length + 1).split(sep).join("/"), mode: info.mode & 0o777, bytes: bytes.length, sha256: sha256(bytes) });
    }
  }
  return files;
}
function bundleSummary(root) {
  const files = dependencyTree(root);
  return { path: root, files, file_count: files.length, bytes: files.reduce((sum, item) => sum + item.bytes, 0), sha256: sha256(canonicalJson(files)) };
}
function copyDependencyBundle({ sourceRoot, out }) {
  canonicalAbsolute(out, "evaluation dependency bundle output");
  if (realpathSync(dirname(out)) !== dirname(out)) throw new Error("evaluation dependency bundle output parent path aliases are forbidden");
  if (existsSync(out)) throw new Error(`evaluation dependency bundle output must be fresh: ${out}`);
  mkdirSync(out, { recursive: true, mode: 0o700 });
  mkdirSync(join(out, "node_modules"), { recursive: false, mode: 0o700 });
  writeFileSync(join(out, "package.json"), `${JSON.stringify({ name: "omd-luna-evaluator-runtime", private: true })}\n`, { encoding: "utf8", flag: "wx", mode: 0o600 });
  for (const name of ["playwright-core", "axe-core"]) {
    const source = dependencyRequire(sourceRoot, `${name}/package.json`);
    const directory = dirname(source);
    // cpSync dereferences neither directory nor nested entries: reject all aliases before copying.
    dependencyTree(directory);
    cpSync(directory, join(out, "node_modules", name), { recursive: true, dereference: false, errorOnExist: true, preserveTimestamps: false });
  }
  return bundleSummary(out);
}
export function evaluatorDependencies(root, sourceCommit, { dependencySourceRoot = root, dependencyBundleOut = null } = {}) {
  const lock = repoFile(root, sourceCommit, "package-lock.json", "dependency lock");
  const lockValue = JSON.parse(readFileSync(join(root, "package-lock.json"), "utf8"));
  const sourceRoot = realpathSync(resolve(dependencySourceRoot));
  const dependencies = [dependency(sourceRoot, "playwright-core", "playwright-core"), dependency(sourceRoot, "axe-core", "axe-core/axe.min.js")];
  for (const item of dependencies) {
    const locked = lockValue.packages?.[`node_modules/${item.name}`]?.version;
    if (locked !== item.version) throw new Error(`${item.name} installed version differs from committed lock`);
  }
  if (!dependencyBundleOut) throw new Error("evaluation dependency bundle output is required");
  const bundle = copyDependencyBundle({ sourceRoot, out: dependencyBundleOut });
  const bundled = [bundledDependency(bundle.path, "playwright-core", "index.js"), bundledDependency(bundle.path, "axe-core", "axe.min.js")];
  for (let index = 0; index < dependencies.length; index += 1) {
    const before = dependencies[index]; const after = bundled[index];
    if (before.version !== after.version || before.package_json.sha256 !== after.package_json.sha256 || before.runtime.sha256 !== after.runtime.sha256) throw new Error(`evaluation dependency bundle copy drift: ${before.name}`);
  }
  return { lock, dependencies: bundled, bundle };
}

export function defaultFontRoots(platform = process.platform, home = homedir()) {
  if (platform === "darwin") return ["/System/Library/Fonts", "/Library/Fonts", join(home, "Library/Fonts")];
  if (platform === "win32") return [join(process.env.WINDIR ?? "C:\\Windows", "Fonts")];
  return ["/usr/share/fonts", "/usr/local/share/fonts", join(home, ".fonts"), join(home, ".local/share/fonts")];
}
export function fontInventory(fontRoots, { explicit = false } = {}) {
  const roots = [];
  const fonts = [];
  const walk = (directory) => {
    for (const entry of readdirSync(directory, { withFileTypes: true }).sort((a, b) => Buffer.from(a.name).compare(Buffer.from(b.name)))) {
      const path = join(directory, entry.name);
      if (entry.isSymbolicLink()) { if (FONT.test(entry.name)) throw new Error(`font symlink forbidden: ${path}`); continue; }
      if (entry.isDirectory()) walk(path);
      else if (entry.isFile() && FONT.test(entry.name)) {
        regular(path, "font file");
        const bytes = readFileSync(path);
        fonts.push({ path, bytes: bytes.length, sha256: sha256(bytes) });
      }
    }
  };
  for (const candidate of fontRoots) {
    const path = resolve(candidate);
    if (!existsSync(path)) { if (explicit) throw new Error(`font root missing: ${path}`); continue; }
    canonicalAbsolute(path, "font root");
    const info = lstatSync(path);
    if (!info.isDirectory() || info.isSymbolicLink() || realpathSync(path) !== path) throw new Error(`font root must be a canonical non-symlink directory: ${path}`);
    roots.push(path); walk(path);
  }
  if (roots.length === 0 || fonts.length === 0) throw new Error("font inventory must contain at least one root and font file");
  fonts.sort((a, b) => Buffer.from(a.path).compare(Buffer.from(b.path)));
  return { roots, files: fonts, file_count: fonts.length, total_bytes: fonts.reduce((sum, item) => sum + item.bytes, 0), sha256: sha256(canonicalJson(fonts)) };
}

export function buildEvaluationRuntimeReceipt({ root, sourceCommit, source, browserExecutable, fontRoots, explicitFontRoots = false, browserVersion = null, dependencySourceRoot = root, dependencyBundleOut }) {
  regular(browserExecutable, "browser executable", true);
  const browserBytes = readFileSync(browserExecutable);
  const version = browserVersion ?? execFileSync(browserExecutable, ["--version"], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  if (!version || /[\r\n]/.test(version)) throw new Error("browser version must be one non-empty line");
  const deps = evaluatorDependencies(root, sourceCommit, { dependencySourceRoot, dependencyBundleOut });
  const fonts = fontInventory(fontRoots, { explicit: explicitFontRoots });
  return {
    schema_version: "0.1", kind: "omd-luna-max-evaluation-runtime-receipt", pass: true,
    source_commit: sourceCommit,
    source_authority: source.receiptAuthority,
    benchmark_config: source.configAuthority,
    evaluation_authorities: source.authorities,
    host: { node_version: process.version, platform: process.platform, arch: process.arch },
    browser: { executable_path: browserExecutable, executable_bytes: browserBytes.length, executable_sha256: sha256(browserBytes), version },
    dependencies: { package_lock: deps.lock, bundle: deps.bundle, resolved: deps.dependencies },
    fonts,
    evaluator_runtime: {
      engine: "chromium", headless: true, launch_args: [...CHROMIUM_ARGS],
      contexts: { viewports: VIEWPORTS.map((item) => ({ ...item })), reduced_motion: "reduce", locale: "en-US", device_scale_factor: "playwright-default" },
      screenshots: { full_page: true, format: "png" },
      network_policy: { local_origin_only: true, allowed_external_protocols: ["blob:", "data:"], all_other_requests: "abort-blockedbyclient" },
    },
    provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0,
  };
}

function parseArgs(argv) {
  const values = new Map();
  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i];
    if (!item.startsWith("--")) throw new Error(`unexpected argument: ${item}`);
    const key = item.slice(2); const value = argv[++i];
    if (!value || value.startsWith("--")) throw new Error(`missing value for ${item}`);
    if (key === "font-root") values.set(key, [...(values.get(key) ?? []), value]);
    else { if (values.has(key)) throw new Error(`duplicate argument: ${item}`); values.set(key, value); }
  }
  return values;
}
function freshOutput(path, root) {
  canonicalAbsolute(path, "output");
  if (path === root || path.startsWith(`${root}${sep}`)) throw new Error("output must be outside the source repository");
  if (existsSync(path)) throw new Error(`output must be fresh: ${path}`);
  mkdirSync(dirname(path), { recursive: true });
  if (realpathSync(dirname(path)) !== dirname(path)) throw new Error("output parent path aliases are forbidden");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const root = realpathSync(resolve(process.env.OMD_EVALUATION_REPO_ROOT ?? defaultRepoRoot));
  const sourceCommit = args.get("source-commit");
  const output = args.get("out");
  const dependencyBundleOut = args.get("dependency-bundle-out");
  if (!sourceCommit || !output || !dependencyBundleOut) throw new Error("usage: prepare-luna-max-evaluation-runtime-receipt.mjs --source-commit <exact-HEAD> --out <fresh-absolute-path> --dependency-bundle-out <fresh-absolute-directory> [--dependency-source-root <absolute-directory>] [--font-root <absolute-directory> ...]");
  const source = assertCleanExactSource({ root, sourceCommit });
  // Validate every output boundary before materializing the immutable bundle.
  freshOutput(output, root);
  const browserExecutable = selectBrowserExecutable();
  const suppliedFontRoots = args.get("font-root");
  const receipt = buildEvaluationRuntimeReceipt({ root, sourceCommit, source, browserExecutable, fontRoots: suppliedFontRoots ?? defaultFontRoots(), explicitFontRoots: Boolean(suppliedFontRoots), dependencySourceRoot: args.get("dependency-source-root") ?? root, dependencyBundleOut });
  writeFileSync(output, `${canonicalJson(receipt)}\n`, { encoding: "utf8", flag: "wx", mode: 0o600 });
  process.stdout.write(`${sha256(readFileSync(output))}  ${output}\n`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch((error) => { process.stderr.write(`${error.message}\n`); process.exitCode = 1; });
