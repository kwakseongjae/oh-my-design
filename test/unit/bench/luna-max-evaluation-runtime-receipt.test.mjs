import { execFileSync } from "node:child_process";
import { chmodSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, symlinkSync, unlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  CHROMIUM_ARGS,
  DEFAULT_CONFIG_PATH,
  EVALUATION_AUTHORITIES,
  SCRIPT_PATH,
  VIEWPORTS,
  assertCleanExactSource,
  buildEvaluationRuntimeReceipt,
  canonicalJson,
  fontInventory,
  selectBrowserExecutable,
  sha256,
} from "../../../benchmarks/ui-resolve-bench/scripts/prepare-luna-max-evaluation-runtime-receipt.mjs";

function git(root, ...args) { return execFileSync("git", ["-C", root, ...args], { encoding: "utf8" }).trim(); }
function put(root, path, bytes) { const target = join(root, path); mkdirSync(dirname(target), { recursive: true }); writeFileSync(target, bytes); }

function fixtureRepo() {
  const root = realpathSync(mkdtempSync(join(tmpdir(), "omd-luna-evaluation-runtime-")));
  git(root, "init", "-q"); git(root, "config", "user.email", "bench@example.invalid"); git(root, "config", "user.name", "Bench Test");
  put(root, SCRIPT_PATH, readFileSync(resolve(SCRIPT_PATH))); chmodSync(join(root, SCRIPT_PATH), 0o755);
  const authorities = {};
  for (const [id, path] of Object.entries(EVALUATION_AUTHORITIES)) {
    const bytes = Buffer.from(`fixture ${id}\n`); put(root, path, bytes); authorities[id] = { path, sha256: sha256(bytes) };
  }
  put(root, DEFAULT_CONFIG_PATH, `${JSON.stringify({ authorities })}\n`);
  put(root, "package.json", `${JSON.stringify({ name: "fixture", private: true })}\n`);
  put(root, "package-lock.json", `${JSON.stringify({ lockfileVersion: 3, packages: { "": {}, "node_modules/playwright-core": { version: "1.61.1" }, "node_modules/axe-core": { version: "4.11.2" } } })}\n`);
  put(root, "node_modules/playwright-core/package.json", `${JSON.stringify({ name: "playwright-core", version: "1.61.1", main: "index.js" })}\n`);
  put(root, "node_modules/playwright-core/index.js", "module.exports = {};\n");
  put(root, "node_modules/axe-core/package.json", `${JSON.stringify({ name: "axe-core", version: "4.11.2" })}\n`);
  put(root, "node_modules/axe-core/axe.min.js", "globalThis.axe={};\n");
  git(root, "add", "."); git(root, "commit", "-qm", "fixture");
  return { root, sourceCommit: git(root, "rev-parse", "HEAD") };
}

function fixtureRuntime() {
  const root = realpathSync(mkdtempSync(join(tmpdir(), "omd-luna-runtime-host-")));
  const browser = join(root, "fake-chrome");
  writeFileSync(browser, "#!/bin/sh\nprintf 'Fixture Chrome 151.0.0.1\\n'\n"); chmodSync(browser, 0o755);
  const fonts = join(root, "fonts"); mkdirSync(fonts); writeFileSync(join(fonts, "Alpha.ttf"), "alpha-font\n"); writeFileSync(join(fonts, "Beta.otf"), "beta-font\n");
  return { browser, fonts };
}

describe("Luna Max evaluation runtime receipt", () => {
  it("binds exact clean HEAD evaluator/task/adapters/validators bytes", () => {
    const fixture = fixtureRepo();
    const source = assertCleanExactSource(fixture);
    expect(Object.keys(source.authorities).sort()).toEqual(Object.keys(EVALUATION_AUTHORITIES).sort());
    expect(source.authorities.evaluator.sha256).toMatch(/^[a-f0-9]{64}$/);
    writeFileSync(join(fixture.root, EVALUATION_AUTHORITIES.evaluator), "tampered\n");
    expect(() => assertCleanExactSource(fixture)).toThrow(/clean HEAD/);
  });

  it("fails commit drift, missing authorities, and symlink authority substitution", () => {
    const drift = fixtureRepo();
    expect(() => assertCleanExactSource({ ...drift, sourceCommit: "f".repeat(40) })).toThrow(/commit drift/);
    const missing = fixtureRepo();
    writeFileSync(join(missing.root, EVALUATION_AUTHORITIES.adapter_validator), "");
    expect(() => assertCleanExactSource(missing)).toThrow(/clean HEAD/);
    const alias = fixtureRepo();
    const authority = join(alias.root, EVALUATION_AUTHORITIES.evaluator);
    const target = join(alias.root, "target.mjs"); writeFileSync(target, readFileSync(authority));
    unlinkSync(authority); symlinkSync(target, authority); git(alias.root, "add", "."); git(alias.root, "commit", "-qm", "symlink substitution");
    alias.sourceCommit = git(alias.root, "rev-parse", "HEAD");
    expect(() => assertCleanExactSource(alias)).toThrow(/non-symlink/);
  });

  it("selects the evaluator's CHROME_PATH and rejects a symlink executable", () => {
    const root = realpathSync(mkdtempSync(join(tmpdir(), "omd-luna-browser-")));
    const browser = join(root, "chrome"); writeFileSync(browser, "#!/bin/sh\nexit 0\n"); chmodSync(browser, 0o755);
    expect(selectBrowserExecutable({ CHROME_PATH: browser })).toBe(browser);
    const alias = join(root, "chrome-alias"); symlinkSync(browser, alias);
    expect(() => selectBrowserExecutable({ CHROME_PATH: alias })).toThrow(/non-symlink|aliases/);
  });

  it("hashes a deterministic sorted font inventory and rejects font symlinks", () => {
    const root = realpathSync(mkdtempSync(join(tmpdir(), "omd-luna-fonts-")));
    writeFileSync(join(root, "z.ttf"), "z"); writeFileSync(join(root, "a.otf"), "a");
    const first = fontInventory([root], { explicit: true });
    const second = fontInventory([root], { explicit: true });
    expect(first.sha256).toBe(second.sha256);
    expect(first.files.map((item) => item.path)).toEqual([join(root, "a.otf"), join(root, "z.ttf")]);
    symlinkSync(join(root, "a.otf"), join(root, "alias.ttf"));
    expect(() => fontInventory([root], { explicit: true })).toThrow(/font symlink/);
  });

  it("records dependency bytes, browser bytes/version, host, exact evaluator flags, and zero calls", () => {
    const fixture = fixtureRepo(); const runtime = fixtureRuntime(); const source = assertCleanExactSource(fixture);
    const bundleParent = mkdtempSync(join(tmpdir(), "omd-luna-evaluation-bundle-")); const bundle = join(realpathSync(bundleParent), "bundle");
    const receipt = buildEvaluationRuntimeReceipt({ root: fixture.root, sourceCommit: fixture.sourceCommit, source, browserExecutable: runtime.browser, fontRoots: [runtime.fonts], explicitFontRoots: true, dependencyBundleOut: bundle });
    expect(receipt).toMatchObject({
      kind: "omd-luna-max-evaluation-runtime-receipt", pass: true, source_commit: fixture.sourceCommit,
      host: { node_version: process.version, platform: process.platform, arch: process.arch },
      browser: { executable_path: runtime.browser, version: "Fixture Chrome 151.0.0.1", executable_sha256: sha256(readFileSync(runtime.browser)) },
      evaluator_runtime: { engine: "chromium", headless: true, launch_args: [...CHROMIUM_ARGS], contexts: { viewports: [...VIEWPORTS], reduced_motion: "reduce", locale: "en-US" }, screenshots: { full_page: true }, network_policy: { local_origin_only: true } },
      provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0,
    });
    expect(receipt.dependencies.resolved.map((item) => [item.name, item.version])).toEqual([["playwright-core", "1.61.1"], ["axe-core", "4.11.2"]]);
    expect(receipt.dependencies.resolved.every((item) => item.package_json.sha256 && item.runtime.sha256)).toBe(true);
    expect(receipt.dependencies.bundle).toMatchObject({ path: bundle, file_count: expect.any(Number), sha256: expect.stringMatching(/^[a-f0-9]{64}$/) });
    expect(receipt.dependencies.resolved.every((item) => item.runtime.path.startsWith(`${bundle}/`))).toBe(true);
  });

  it("CLI emits canonical fresh output outside the repo and refuses overwrite", () => {
    const fixture = fixtureRepo(); const runtime = fixtureRuntime();
    const outRoot = realpathSync(mkdtempSync(join(tmpdir(), "omd-luna-runtime-output-"))); const output = join(outRoot, "receipt.json");
    const cli = join(fixture.root, SCRIPT_PATH);
    const bundle = join(realpathSync(outRoot), "bundle"); const args = [cli, "--source-commit", fixture.sourceCommit, "--out", output, "--dependency-bundle-out", bundle, "--font-root", runtime.fonts];
    execFileSync(process.execPath, args, { env: { ...process.env, OMD_EVALUATION_REPO_ROOT: fixture.root, CHROME_PATH: runtime.browser } });
    const bytes = readFileSync(output, "utf8"); const receipt = JSON.parse(bytes);
    expect(bytes).toBe(`${canonicalJson(receipt)}\n`);
    expect(receipt.fonts.file_count).toBe(2);
    expect(() => execFileSync(process.execPath, args, { env: { ...process.env, OMD_EVALUATION_REPO_ROOT: fixture.root, CHROME_PATH: runtime.browser } })).toThrow();
    const inside = join(fixture.root, "receipt.json");
    expect(() => execFileSync(process.execPath, [cli, "--source-commit", fixture.sourceCommit, "--out", inside, "--dependency-bundle-out", join(realpathSync(outRoot), "second-bundle"), "--font-root", runtime.fonts], { env: { ...process.env, OMD_EVALUATION_REPO_ROOT: fixture.root, CHROME_PATH: runtime.browser } })).toThrow();
  });

  it("requires a fresh dependency bundle and rejects symlinked package contents", () => {
    const fixture = fixtureRepo(); const runtime = fixtureRuntime(); const source = assertCleanExactSource(fixture);
    const base = realpathSync(mkdtempSync(join(tmpdir(), "omd-luna-bundle-adversarial-")));
    const target = join(fixture.root, "node_modules/playwright-core/index.js"); symlinkSync(target, join(fixture.root, "node_modules/playwright-core/alias.js"));
    expect(() => buildEvaluationRuntimeReceipt({ root: fixture.root, sourceCommit: fixture.sourceCommit, source, browserExecutable: runtime.browser, fontRoots: [runtime.fonts], explicitFontRoots: true, dependencyBundleOut: join(base, "bundle") })).toThrow(/symlink forbidden/);
  });
});
