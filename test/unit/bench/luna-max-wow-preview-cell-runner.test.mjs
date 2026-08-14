import { execFileSync } from "node:child_process";
import { chmodSync, cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, symlinkSync, unlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  ADMISSION_GENERATOR_PATH, DEFAULT_EVALUATOR_PATH, PREREG_CONTROLLER_PATH, PROMPT_INPUT_AUDIT_TIMEOUT_MS, RUNNER_PATH, auditOmdControllerCommands, auditOmdControllerOutcome, auditOmdExternalStaging, collectRecords, detectNativeInfrastructureBlock, prepareOmdExternalStaging, prepareRuntimeSnapshot, reconcileCrashes, runCell, sha256, toolTelemetry, tree,
} from "../../../benchmarks/ui-resolve-bench/scripts/run-luna-max-wow-preview-cell.mjs";
import { auditWowPreview, defaultGatePath } from "../../../benchmarks/ui-resolve-bench/scripts/audit-luna-max-wow-preview.mjs";
import { OMD_EXTERNAL_STAGING_ACTIVATION } from "../../../benchmarks/ui-resolve-bench/scripts/prepare-luna-max-wow-preview.mjs";

function git(root, ...args) { return execFileSync("git", ["-C", root, ...args], { encoding: "utf8" }).trim(); }
function json(path, value) { mkdirSync(dirname(path), { recursive: true }); writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`); return path; }
function bind(path) { return { path, sha256: sha256(readFileSync(path)) }; }
function summary(root) { const value = tree(root); return { files: value.files.length, bytes: value.files.reduce((n, f) => n + f.bytes, 0), sha256: value.sha256 }; }
function canonical(value) { return Array.isArray(value) ? `[${value.map(canonical).join(",")}]` : value && typeof value === "object" ? `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(",")}}` : JSON.stringify(value); }
function promptInputJson(block, extraMessages = []) {
  return JSON.stringify([
    { type: "message", role: "developer", content: [{ type: "input_text", text: `<skills_instructions>\n${block}\n</skills_instructions>` }] },
    { type: "message", role: "user", content: [{ type: "input_text", text: "- irrelevant: bullet (file: /tmp/not-a-skill)" }] },
    ...extraMessages,
  ]);
}

function fixture({ runnerMode = "success", designSystem = true, variant = "model-only", agentBrowserCall = false, externalContextCall = false, networkAttempt = false, forbiddenAuthorityCommand = false, deleteAuthorityReceipt = false, tamperAuthorityRuntime = false } = {}) {
  const base = mkdtempSync(join(tmpdir(), "omd-luna-cell-runner-")); const repo = join(base, "repo"); const materialized = join(base, "materialized");
  const cliVersion = "fixture-1"; const profile = { slug: "gpt-5.6-luna", tool_mode: "function", default_reasoning_level: "max", supported_reasoning_levels: [{ effort: "max" }] };
  const runtimeHome = join(base, "runtime-home"); mkdirSync(runtimeHome); writeFileSync(join(runtimeHome, "auth.json"), "fixture-auth"); writeFileSync(join(runtimeHome, "models_cache.json"), JSON.stringify({ fetched_at: "2026-08-13T00:00:00Z", client_version: cliVersion, models: [profile] }));
  const catalogSha = sha256(readFileSync(join(runtimeHome, "models_cache.json"))); const profileSha = sha256(canonical(profile));
  mkdirSync(repo); git(repo, "init", "-q"); git(repo, "config", "user.email", "bench@example.invalid"); git(repo, "config", "user.name", "Bench");
  for (const source of [RUNNER_PATH, ADMISSION_GENERATOR_PATH, PREREG_CONTROLLER_PATH, "benchmarks/ui-resolve-bench/scripts/run-codex.mjs", DEFAULT_EVALUATOR_PATH]) {
    const target = join(repo, source); mkdirSync(dirname(target), { recursive: true }); cpSync(resolve(source), target);
  }
  git(repo, "add", "."); git(repo, "commit", "-qm", "fixture"); const sourceCommit = git(repo, "rev-parse", "HEAD");
  mkdirSync(join(materialized, "prepared-cells"), { recursive: true });
  const cells = [];
  for (let index = 0; index < 48; index += 1) {
    const id = `cell-${String(index + 1).padStart(2, "0")}`; const cell = join(materialized, "prepared-cells", id); mkdirSync(join(cell, ".benchmark"), { recursive: true });
    if (variant !== "model-only") { mkdirSync(join(cell, ".agents/skills/frontend-design"), { recursive: true }); writeFileSync(join(cell, ".agents/skills/frontend-design/SKILL.md"), "---\nname: frontend-design\n---\n# frozen frontend design\n"); }
    if (variant === "omd-autopilot-v2" && index === 0) {
      for (const name of ["activate-autopilot-design-system.cjs", "prepare-design-md-core-review.cjs", "compile-design-md-core.cjs", "adopt-design-md-core.cjs", "validate-project-design-system.cjs", "design-md-core-schema.cjs", "design-md-core-conformance.cjs", "design-md-core.cjs"]) { const target = join(cell, "scripts", name); mkdirSync(dirname(target), { recursive: true }); cpSync(resolve("scripts", name), target); }
      cpSync(resolve("spec/schema"), join(cell, "spec/schema"), { recursive: true });
    }
    writeFileSync(join(cell, "index.html"), `<main>${id}</main>\n`); writeFileSync(join(cell, ".benchmark/invocation-prompt.txt"), `Build ${id}${variant === "omd-autopilot-v2" ? `\n\n${OMD_EXTERNAL_STAGING_ACTIVATION}` : ""}`);
    json(join(cell, ".benchmark/cell.json"), { cell_id: id, task: { id: "neighborhood-library-landing" }, arm: { variant_id: variant }, runtime: { model: "gpt-5.6-luna", effort: "max", retry_budget: 0, replacement_budget: 0, fallback_budget: 0 }, evaluation: { eligible_for_execution_and_scoring: true } });
    json(join(cell, ".benchmark/manifest.json"), { source_commit: sourceCommit }); cells.push({ id, trial_index: (index % 3) + 1, workspace_tree: summary(cell) });
  }
  json(join(materialized, "INELIGIBLE-SLOTS.json"), { count: 6, slots: Array.from({ length: 6 }, (_, i) => ({ id: `ineligible-${i}`, task_id: i < 3 ? "cold-chain-operations" : "clinic-visit-prep-locales", variant_id: "taste-eligible-scope-only", trial_index: (i % 3) + 1, workspace_created: false })) });
  const manifest = { kind: "omd-luna-max-provider-zero-materialization", source_commit: sourceCommit, prepared_cells: 48, ineligible_unexecuted_slots: 6, locked_root_sha256: "a".repeat(64), cells, evaluator_authority: { evaluator: { path: DEFAULT_EVALUATOR_PATH, sha256: sha256(readFileSync(join(repo, DEFAULT_EVALUATOR_PATH))) }, selected_task_evaluation_metadata: [{ task_id: "neighborhood-library-landing", required_states: ["default", "focus-visible", "unavailable-information"] }] }, execution: { model: "gpt-5.6-luna", effort: "max", retry_budget: 0, replacement_budget: 0, fallback_budget: 0 } };
  const materializationPath = json(join(materialized, "MATERIALIZATION.json"), manifest);
  const matrixCells = [...cells.map((cell) => ({ id: cell.id, task_id: "neighborhood-library-landing", variant_id: variant, trial_index: cell.trial_index, eligible_for_execution_and_scoring: true })), ...Array.from({ length: 6 }, (_, i) => ({ id: `ineligible-${i}`, task_id: i < 3 ? "cold-chain-operations" : "clinic-visit-prep-locales", variant_id: "taste-eligible-scope-only", trial_index: (i % 3) + 1, eligible_for_execution_and_scoring: false }))];
  const matrixPath = json(join(base, "RUN-MATRIX.locked.json"), { kind: "omd-luna-max-wow-preview", experiment_id: "omd-luna-test", source_commit: sourceCommit, maximum_cell_slots: 54, scheduled_provider_cells: 48, ineligible_unexecuted_slots: 6, cells: matrixCells });
  const preregPath = json(join(base, "PREREGISTRATION.receipt.json"), { kind: "omd-luna-max-wow-preview-preregistration-receipt", source_commit: sourceCommit, matrix_sha256: sha256(readFileSync(matrixPath)), provider_execution_allowed: false });
  const schemaPath = json(join(base, "schema.json"), { kind: "public-core-schema-liveness-receipt", pass: true, source_commit: sourceCommit });
  const runtimePath = json(join(base, "runtime.json"), { kind: "codex-luna-max-runtime-attribution-preflight", source_commit: sourceCommit, excluded_from_benchmark_denominator: true, runtime: { model: "gpt-5.6-luna", effort: "max", fallback_calls: 0 }, provider_calls: 1, model_calls: 1, browser_calls: 0 });
  const browserPath = json(join(base, "browser.json"), { kind: "codex-in-app-browser-identity-preflight", source_commit: sourceCommit, excluded_from_benchmark_denominator: true,
    browser: { type: "iab", browser_id: "iab", name: "Codex In-app Browser" }, tab: { id: "tab-about-blank", url: "about:blank", title: "about:blank" },
    capture: { surface: "codex-in-app-browser-tool", method: "agent.browsers.get(iab)+tabs.new", cryptographic_identity_verified: false },
    controller_launched_browser: false, tab_created_for_identity: true, navigation_calls: 0, provider_calls: 0, model_calls: 0, browser_calls: 1, network_calls: 0 });
  const runner = join(base, "fake-runner.mjs");
  const nativeSha = "e".repeat(64);
  writeFileSync(runner, `import{createHash}from'node:crypto';import{appendFileSync,chmodSync,readFileSync,writeFileSync,unlinkSync}from'node:fs';import{join}from'node:path';const canon=v=>Array.isArray(v)?'['+v.map(canon).join(',')+']':v&&typeof v==='object'?'{'+Object.keys(v).sort().map(k=>JSON.stringify(k)+':'+canon(v[k])).join(',')+'}':JSON.stringify(v),hash=v=>createHash('sha256').update(v).digest('hex'),cacheBytes=readFileSync(join(process.env.CODEX_HOME,'models_cache.json')),cache=JSON.parse(cacheBytes),{fetched_at,...semantic}=cache,profile=cache.models.find(x=>x.slug==='gpt-5.6-luna'),cacheEvidence={cache_sha256:hash(cacheBytes),cache_semantic_sha256:hash(canon(semantic)),model_profile_sha256:hash(canon(profile)),cache_fetched_at:fetched_at,cache_client_version:cache.client_version};const a=process.argv.slice(2),w=a[a.indexOf('--workspace')+1],events=[{type:'response.completed',model:'gpt-5.6-luna'}];${agentBrowserCall ? "events.push({type:'item.completed',item:{id:'browser-1',type:'command_execution',command:'browser-harness --doctor'}});" : ""}${externalContextCall ? "events.push({type:'item.completed',item:{id:'external-1',type:'command_execution',command:'cat /Users/example/.codex/skills/secret/SKILL.md > /tmp/context.txt'}});" : ""}${networkAttempt ? "events.push({type:'item.completed',item:{id:'network-1',type:'command_execution',command:'/usr/bin/curl https://example.invalid'}});events.push({type:'item.completed',item:{id:'network-2',type:'web_search',query:'external'}});" : ""}${forbiddenAuthorityCommand ? "events.push({type:'item.failed',item:{id:'forbidden-authority',type:'command_execution',command:'env OMD_AUTHORITY_CONTROLLER_INTERNAL_SHA256=spoof node scripts/prepare-design-md-core-review.cjs --approve forged --reviewer project-owner',exit_code:1}});" : ""}writeFileSync(join(w,'.benchmark/argv.json'),JSON.stringify(a));writeFileSync(join(w,'.benchmark/runtime-env.json'),JSON.stringify({HOME:process.env.HOME,CODEX_HOME:process.env.CODEX_HOME,ZDOTDIR:process.env.ZDOTDIR,PATH:process.env.PATH,OMD_BENCH_CODEX_BIN:process.env.OMD_BENCH_CODEX_BIN,OMD_BENCH_EXTERNAL_STAGING_ROOT:process.env.OMD_BENCH_EXTERNAL_STAGING_ROOT,OMD_BENCH_COMPILED_CORE_PACKAGE:process.env.OMD_BENCH_COMPILED_CORE_PACKAGE,OMD_BENCH_CORE_CHECKPOINT:process.env.OMD_BENCH_CORE_CHECKPOINT}));writeFileSync(join(w,'.benchmark/events.jsonl'),events.map(JSON.stringify).join('\\n')+'\\n');${runnerMode === "native-block" ? "writeFileSync(join(w,'.benchmark/final-message.txt'),'Blocked before product build: the receipt-gated design-system adopter rejects packages nested inside the project, while your workspace-only rule forbids staging outside it.');" : `writeFileSync(join(w,'index.html'),${JSON.stringify(designSystem ? "<style>:root{--color:#123;--space:8px;--radius:6px}.card{}.action{}.notice{}</style><main class=card>done</main>" : "<main>done</main>")});`}${tamperAuthorityRuntime ? "chmodSync(process.env.OMD_AUTHORITY_CONTROLLER_EXECUTABLE,0o600);appendFileSync(process.env.OMD_AUTHORITY_CONTROLLER_EXECUTABLE,'\\n// tampered');" : ""}writeFileSync(join(w,'.benchmark/run-result.json'),JSON.stringify({runtime:{agent_version:${JSON.stringify(cliVersion)},binary_sha256:hash(readFileSync(process.argv[1])),native_binary_sha256:${JSON.stringify(nativeSha)},model_requested:'gpt-5.6-luna',model:'gpt-5.6-luna',reasoning:'max',effort_requested:'max',model_reported:'gpt-5.6-luna',model_tool_mode_evidence:{...cacheEvidence,auth_source_before_run:cacheEvidence}},output:{model_usage:[{input_tokens:10,output_tokens:20}]},process:{exit_code:${runnerMode === "failed" ? 7 : 0},timed_out:${runnerMode === "timeout"}}}));${deleteAuthorityReceipt ? "unlinkSync(process.env.OMD_AUTHORITY_CONTROLLER_RECEIPT);" : ""}${runnerMode === "failed" ? "process.exitCode=7" : ""}`);
  chmodSync(runner, 0o755);
  const actualRunnerSha = sha256(readFileSync(runner));
  const canonicalRunner = realpathSync(runner);
  const staticPath = json(join(base, "static.json"), { kind: "codex-luna-max-static-runtime-capability", pass: true, source_commit: sourceCommit, runtime: { catalog_sha256: catalogSha, model_profile_sha256: profileSha, codex_cli: { wrapper: { path: canonicalRunner, sha256: actualRunnerSha }, native: { path: canonicalRunner, sha256: nativeSha }, version: cliVersion } }, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  json(join(runtimeHome, "RUNTIME-SNAPSHOT.json"), { schema_version: "0.1", kind: "omd-luna-max-immutable-runtime-snapshot", static_runtime_receipt: bind(staticPath), auth_json_sha256: sha256(readFileSync(join(runtimeHome, "auth.json"))), models_cache_sha256: catalogSha, static_runtime_catalog_sha256: catalogSha, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  const evaluator = join(base, "fake-evaluator.mjs");
  const fakeChrome = join(base, "fake-chrome"); writeFileSync(fakeChrome, "fixture-browser");
  const dependencyBundle = join(base, "evaluation-dependencies");
  mkdirSync(join(dependencyBundle, "node_modules/playwright-core"), { recursive: true }); mkdirSync(join(dependencyBundle, "node_modules/axe-core"), { recursive: true });
  writeFileSync(join(dependencyBundle, "package.json"), '{"name":"fixture-evaluator"}\n');
  writeFileSync(join(dependencyBundle, "node_modules/playwright-core/package.json"), '{"name":"playwright-core"}\n'); writeFileSync(join(dependencyBundle, "node_modules/playwright-core/index.js"), "module.exports = {};\n");
  writeFileSync(join(dependencyBundle, "node_modules/axe-core/package.json"), '{"name":"axe-core"}\n'); writeFileSync(join(dependencyBundle, "node_modules/axe-core/axe.min.js"), "globalThis.axe = {};\n");
  writeFileSync(evaluator, `import{createHash}from'node:crypto';import{mkdirSync,readFileSync,writeFileSync}from'node:fs';import{dirname,join}from'node:path';if(process.env.CHROME_PATH!==${JSON.stringify(fakeChrome)}||process.env.NODE_PATH!==${JSON.stringify(join(dependencyBundle, "node_modules"))})process.exit(9);if(process.env.OMD_EVALUATOR_READY_MARKER)writeFileSync(process.env.OMD_EVALUATOR_READY_MARKER,'{}');const a=process.argv.slice(2),o=a[a.indexOf('--out')+1],s=join(dirname(o),'screenshots');mkdirSync(s,{recursive:true});writeFileSync(join(s,'desktop-1440.png'),'png');writeFileSync(join(s,'mobile-390.png'),'png');const states={};for(const state of ['default','focus-visible','unavailable-information']){const file=state+'--desktop-1440.png';writeFileSync(join(s,file),state);states[state]=[{viewport_id:'desktop-1440',file,sha256:createHash('sha256').update(readFileSync(join(s,file))).digest('hex')}]}writeFileSync(join(s,'STATE-SCREENSHOTS.json'),JSON.stringify({schema_version:'0.1',kind:'omd-luna-max-evaluator-state-screenshots',task_id:'neighborhood-library-landing',states}));writeFileSync(o,JSON.stringify({ui_resolved:true,score:100,evidence:{protected_unknown_claims:[]}}));`);
  const dependencyFiles = tree(dependencyBundle).files; const dependencySummary = { path: dependencyBundle, files: dependencyFiles, file_count: dependencyFiles.length, bytes: dependencyFiles.reduce((n, item) => n + item.bytes, 0), sha256: sha256(canonical(dependencyFiles)) };
  const dependencyEntry = (path) => ({ path, bytes: readFileSync(path).length, sha256: sha256(readFileSync(path)) });
  const evaluationRuntimePath = json(join(base, "evaluation-runtime.json"), { kind: "omd-luna-max-evaluation-runtime-receipt", pass: true, source_commit: sourceCommit, evaluation_authorities: { evaluator: { path: DEFAULT_EVALUATOR_PATH, sha256: sha256(readFileSync(join(repo, DEFAULT_EVALUATOR_PATH))) } }, browser: { executable_path: fakeChrome, executable_sha256: sha256(readFileSync(fakeChrome)), version: "Fixture 1" }, fonts: { sha256: "c".repeat(64) }, dependencies: { package_lock: { path: "package-lock.json", bytes: 0, sha256: "a".repeat(64) }, bundle: dependencySummary, resolved: [{ name: "playwright-core", package_json: dependencyEntry(join(dependencyBundle, "node_modules/playwright-core/package.json")), runtime: dependencyEntry(join(dependencyBundle, "node_modules/playwright-core/index.js")) }, { name: "axe-core", package_json: dependencyEntry(join(dependencyBundle, "node_modules/axe-core/package.json")), runtime: dependencyEntry(join(dependencyBundle, "node_modules/axe-core/axe.min.js")) }] }, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  const admission = { schema_version: "0.1", kind: "omd-luna-max-sol-xhigh-admission", decision: "admitted", reviewer_role: "sol-xhigh-planning-review", attestation: { type: "role-attestation", cryptographic_identity_verified: false, statement: "This admission records a Sol/xhigh planning-review attestation; it is not cryptographic identity verification." }, source_commit: sourceCommit, generator_authority: { path: ADMISSION_GENERATOR_PATH, sha256: sha256(readFileSync(join(repo, ADMISSION_GENERATOR_PATH))) }, controller_authority: { path: PREREG_CONTROLLER_PATH, sha256: sha256(readFileSync(join(repo, PREREG_CONTROLLER_PATH))) }, bindings: { matrix: bind(matrixPath), preregistration: bind(preregPath), materialization: bind(materializationPath), schema: bind(schemaPath), static_runtime: bind(staticPath), runtime_attribution: bind(runtimePath), browser_identity: bind(browserPath), evaluation_runtime: bind(evaluationRuntimePath) }, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 };
  const admissionPath = json(join(base, "ADMISSION.json"), admission);
  return { base, repo, materialized, sourceCommit, runtimePath, browserPath, admissionPath, admission, runner, evaluator, cells, matrixPath, preregPath, materializationPath, runtimeHome, catalogSha, profileSha };
}
function defaultPromptInputProbe({ cwd, env }) { const builtin = ["imagegen", "openai-docs", "plugin-creator", "skill-creator", "skill-installer"].map((id) => `- ${id}: builtin (file: ${join(env.CODEX_HOME, "skills/.system", id, "SKILL.md")})`); const projectRoot = join(cwd, ".agents/skills/frontend-design/SKILL.md"); const block = [...builtin, ...(existsSync(projectRoot) ? [`- frontend-design: frozen (file: ${projectRoot})`] : [])].join("\n"); return { status: 0, stdout: promptInputJson(block) }; }
function execute(f, overrides = {}) { return runCell({ repoRoot: f.repo, materializedRoot: f.materialized, cellId: "cell-01", admission: f.admissionPath, runtimeAttributionReceipt: f.runtimePath, browserReceipt: f.browserPath, sourceCommit: f.sourceCommit, runnerBin: f.runner, evaluatorBin: f.evaluator, runtimeHome: f.runtimeHome, runtimeEnv: { ...process.env, OMD_BENCH_CODEX_BIN: f.runner }, promptInputProbe: defaultPromptInputProbe, runtimeObservation: { model_id: "gpt-5.6-luna", cache_sha256: f.catalogSha, model_profile_sha256: f.profileSha }, ...overrides }); }
function collect(f, out = join(f.base, "records.json")) { return collectRecords({ repoRoot: f.repo, materializedRoot: f.materialized, admission: f.admissionPath, runtimeAttributionReceipt: f.runtimePath, browserReceipt: f.browserPath, sourceCommit: f.sourceCommit, out }); }
function replaceVariantSkill(f, contents) {
  for (const cell of f.cells) {
    const path = join(f.materialized, "prepared-cells", cell.id); const skill = join(path, ".agents/skills/frontend-design/SKILL.md");
    writeFileSync(skill, contents); cell.workspace_tree = summary(path);
  }
  const materialization = JSON.parse(readFileSync(f.materializationPath)); materialization.cells = f.cells; json(f.materializationPath, materialization);
  f.admission.bindings.materialization = bind(f.materializationPath); json(f.admissionPath, f.admission);
}

describe("Luna Max Wow Preview one-cell runner", () => {
  it("runs exactly the next cell once and binds provider, tree, evaluator, and screenshot evidence", () => {
    const f = fixture(); const result = execute(f);
    expect(result).toMatchObject({ status: "completed", cell_id: "cell-01", model: "gpt-5.6-luna", effort: "max", provider_calls: 1, model_calls: 1, browser_calls: 1, retry_calls: 0, replacement_calls: 0, fallback_calls: 0, repair_calls: 0, manual_edits: 0 });
    expect(result.raw.events.sha256).toMatch(/^[a-f0-9]{64}$/); expect(result.workspace_before.sha256).not.toBe(result.workspace_after.sha256);
    expect(result.evaluator.result.sha256).toMatch(/^[a-f0-9]{64}$/); expect(result.proof.screenshots.map((x) => x.kind)).toEqual(expect.arrayContaining(["desktop", "mobile"]));
    expect(new Set(result.proof.screenshots.flatMap((x) => x.required_states))).toEqual(new Set(["default", "focus-visible", "unavailable-information"]));
    expect(result.proof.design_system_package).toMatchObject({ parsed: true, pass: true });
    const argv = JSON.parse(readFileSync(join(f.materialized, "prepared-cells/cell-01/.benchmark/execution/workspace/.benchmark/argv.json")));
    expect(argv).toEqual(["--workspace", expect.any(String), "--model", "gpt-5.6-luna", "--reasoning", "max", "--timeout-ms", "900000", "--disable-plugin-skill-search", "--expected-codex-version", "fixture-1", "--expected-wrapper-sha", expect.stringMatching(/^[a-f0-9]{64}$/), "--expected-native-path", realpathSync(f.runner), "--expected-native-sha", "e".repeat(64)]);
    const runtimeEnv = JSON.parse(readFileSync(join(f.materialized, "prepared-cells/cell-01/.benchmark/execution/workspace/.benchmark/runtime-env.json")));
    expect(runtimeEnv.HOME).toContain("/.benchmark/execution/provider-home"); expect(runtimeEnv.CODEX_HOME).toBe(runtimeEnv.HOME); expect(runtimeEnv.ZDOTDIR).toBe(runtimeEnv.HOME); expect(runtimeEnv.PATH).toContain("/.benchmark/execution/provider-bin"); expect(runtimeEnv.PATH).not.toContain("browser-harness");
    expect(runtimeEnv.OMD_BENCH_CODEX_BIN).toBe(realpathSync(f.runner));
    expect(result.telemetry).toMatchObject({ agent_browser_calls: 0 });
    expect(JSON.parse(readFileSync(join(f.materialized, "prepared-cells/cell-01/.benchmark/execution/PROVIDER-SPAWN-STARTED.json")))).toMatchObject({ kind: "omd-luna-max-provider-spawn-boundary", provider_calls: "unknown", model_calls: "unknown" });
    expect(() => execute(f)).toThrow(/exact next locked cell: cell-02/);
  });

  it("uses a neutral reusable HTML/CSS package gate for every arm and keeps OmD Core proof additive", () => {
    const valid = fixture(); expect(execute(valid).proof.design_system_package).toMatchObject({ parsed: true, pass: true });
    const empty = fixture({ designSystem: false }); expect(execute(empty).proof.design_system_package).toMatchObject({ parsed: false, pass: false });
  });

  it("classifies evaluator startup failure as infrastructure-invalid rather than a product score of zero", () => {
    const f = fixture(); const broken = join(f.base, "broken-evaluator.mjs");
    writeFileSync(broken, "process.stderr.write('Cannot find module playwright-core\\n'); process.exitCode = 1;\n");
    const terminal = execute(f, { evaluatorBin: broken });
    expect(terminal).toMatchObject({ status: "infrastructure-invalid", evaluator: { terminal_failure_projection: true } });
    const failure = JSON.parse(readFileSync(terminal.failure_artifact.path));
    expect(failure).toMatchObject({ evaluator_infrastructure_failure: true, evaluator_exit_code: 1 });
    expect(readFileSync(join(f.materialized, "prepared-cells/cell-01/.benchmark/execution/evaluator/stderr"), "utf8")).toContain("Cannot find module playwright-core");
  });

  it("keeps a post-ready evaluator product-validation failure in the product-failed denominator", () => {
    const f = fixture(); const productFailure = join(f.base, "product-failure-evaluator.mjs");
    writeFileSync(productFailure, "import { writeFileSync } from 'node:fs'; writeFileSync(process.env.OMD_EVALUATOR_READY_MARKER, '{}'); process.stderr.write('required state screenshot was not observed\\n'); process.exitCode = 1;\n");
    const terminal = execute(f, { evaluatorBin: productFailure });
    expect(terminal).toMatchObject({ status: "failed", evaluator: { terminal_failure_projection: true } });
    const failure = JSON.parse(readFileSync(terminal.failure_artifact.path)); expect(failure.evaluator_infrastructure_failure).toBe(false);
  });

  it("fails closed before provider spawn for a missing or tampered immutable evaluator bundle", () => {
    for (const mutate of [
      (runtime) => writeFileSync(runtime.dependencies.bundle.path + "/node_modules/playwright-core/index.js", "tampered\n"),
      (runtime) => { unlinkSync(runtime.dependencies.resolved[0].runtime.path); },
    ]) {
      const f = fixture(); const runtime = JSON.parse(readFileSync(f.admission.bindings.evaluation_runtime.path)); mutate(runtime);
      expect(() => execute(f)).toThrow(/evaluation dependency (bundle )?drift|evaluation dependency drift/);
      expect(existsSync(join(f.materialized, "prepared-cells/cell-01/.benchmark/execution/PROVIDER-SPAWN-STARTED.json"))).toBe(false);
    }
  });

  it("isolates provider HOME and exposes only the cell arm project skill", () => {
    const modelOnly = fixture(); const modelResult = execute(modelOnly); const modelIsolation = JSON.parse(readFileSync(modelResult.provider_runtime_isolation.path));
    expect(modelIsolation.skills).toMatchObject({ variant_id: "model-only", project_skill_files: [], global_user_and_plugin_skill_roots: { projected_into_isolated_home_or_project: false, visibility_claimed_without_prompt_input_audit: false, raw_event_external_context_audit_required: true }, builtin_skills: { expected_equal_across_all_arms: true, exact_visible_set_requires_prompt_input_audit: true } });
    expect(modelIsolation.path.browser_harness_advertised_or_available).toBe(false);
    expect(modelIsolation.path.forbidden).toEqual(["browser-harness", "curl", "wget", "open"]);
    expect(modelIsolation.path.allowlist).toEqual(expect.arrayContaining(["cat", "head", "tail", "sort", "wc", "cut", "printf", "touch", "ln", "basename", "dirname", "xargs", "python3"]));
    expect(modelIsolation.path.executables.every((item) => item.source.startsWith("/") && /^[a-f0-9]{64}$/.test(item.sha256))).toBe(true);
    expect(modelIsolation.path.login_shell_preflight).toMatchObject({ exact_path: modelIsolation.path.value, curl_available: false, browser_harness_available: false, network_calls: 0 });
    expect(modelIsolation.zprofile).toMatchObject({ path: expect.stringContaining("provider-home/.zprofile"), sha256: expect.stringMatching(/^[a-f0-9]{64}$/) });
    expect(JSON.parse(readFileSync(modelIsolation.prompt_input_skill_audit.path))).toMatchObject({ pass: true, builtin_skill_ids: ["imagegen", "openai-docs", "plugin-creator", "skill-creator", "skill-installer"], project_skills: [], provider_calls: 0, model_calls: 0 });
    expect(modelIsolation.auth.sha256).toBe(modelIsolation.auth.copy_sha256); expect(modelIsolation.model_catalog.sha256).toBe(modelIsolation.model_catalog.copy_sha256);
    expect(existsSync(modelIsolation.provider_home)).toBe(false); expect(modelResult.provider_runtime_cleanup).toBeDefined();
    const competitor = fixture({ variant: "anthropic-frontend-design" }); const competitorResult = execute(competitor); const competitorIsolation = JSON.parse(readFileSync(competitorResult.provider_runtime_isolation.path));
    expect(competitorIsolation.skills.project_skill_files.map((item) => item.path)).toEqual([".agents/skills/frontend-design/SKILL.md"]);
    expect(readFileSync(resolve("benchmarks/ui-resolve-bench/scripts/run-codex.mjs"), "utf8")).toContain('["--disable", "plugins", "--disable", "skill_search"]');
  });

  it("discloses one exact cell-local external staging root only to the OmD arm", () => {
    const omd = fixture({ variant: "omd-autopilot-v2" }); const result = execute(omd);
    const workspace = join(omd.materialized, "prepared-cells/cell-01/.benchmark/execution/workspace");
    const env = JSON.parse(readFileSync(join(workspace, ".benchmark/runtime-env.json")));
    expect(env.OMD_BENCH_EXTERNAL_STAGING_ROOT).toBe(join(realpathSync(join(omd.materialized, "prepared-cells/cell-01/.benchmark/execution")), "omd-external-staging"));
    expect(env.OMD_BENCH_COMPILED_CORE_PACKAGE).toBe(join(env.OMD_BENCH_EXTERNAL_STAGING_ROOT, "compiled-core")); expect(env.OMD_BENCH_CORE_CHECKPOINT).toBe(join(env.OMD_BENCH_EXTERNAL_STAGING_ROOT, "project-adoption-checkpoint.json"));
    expect(readFileSync(join(workspace, ".benchmark/PROMPT.md"), "utf8")).toContain(OMD_EXTERNAL_STAGING_ACTIVATION); expect(readFileSync(join(workspace, ".benchmark/PROMPT.md"), "utf8")).not.toContain(env.OMD_BENCH_EXTERNAL_STAGING_ROOT);
    expect(JSON.parse(readFileSync(result.external_staging.receipt.path))).toMatchObject({ variant_id: "omd-autopilot-v2", staging_root: env.OMD_BENCH_EXTERNAL_STAGING_ROOT, provider_calls: 0 });
    const authority = JSON.parse(readFileSync(join(realpathSync(join(omd.materialized, "prepared-cells/cell-01/.benchmark/execution")), "OMD-AUTHORITY-CONTROLLER.json")));
    expect(authority).toMatchObject({ kind: "omd-autopilot-external-authority-controller-activation", status: "active", authority: { role: "project-owner", identifier: "omd-luna-max-preregistered-authority-controller" }, scope: { single_deterministic_activation: true, review_approval: true, project_adoption_checkpoint: true }, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
    expect(authority.activation.sha256).toBe(sha256(OMD_EXTERNAL_STAGING_ACTIVATION));
    expect(JSON.parse(readFileSync(join(workspace, ".benchmark/argv.json")))).toEqual(expect.arrayContaining(["--additional-writable-root", env.OMD_BENCH_EXTERNAL_STAGING_ROOT]));

    const competitor = fixture({ variant: "anthropic-frontend-design" }); execute(competitor);
    const competitorWorkspace = join(competitor.materialized, "prepared-cells/cell-01/.benchmark/execution/workspace");
    const competitorEnv = JSON.parse(readFileSync(join(competitorWorkspace, ".benchmark/runtime-env.json")));
    expect(competitorEnv.OMD_BENCH_EXTERNAL_STAGING_ROOT).toBeUndefined();
    expect(readFileSync(join(competitorWorkspace, ".benchmark/PROMPT.md"), "utf8")).not.toContain("OMD_BENCH_EXTERNAL_STAGING_ROOT");
  });

  it("rejects staging traversal, symlinks, competitor access, and receipt tampering", () => {
    const base = mkdtempSync(join(tmpdir(), "omd-staging-adversarial-")); const execution = join(base, "cell/.benchmark/execution"); const workspace = join(execution, "workspace");
    mkdirSync(join(workspace, ".benchmark"), { recursive: true }); writeFileSync(join(workspace, ".benchmark/invocation-prompt.txt"), `Build\n${OMD_EXTERNAL_STAGING_ACTIVATION}`); writeFileSync(join(workspace, ".benchmark/PROMPT.md"), `Build\n${OMD_EXTERNAL_STAGING_ACTIVATION}`);
    const staging = prepareOmdExternalStaging({ execution, workspace, metadata: { arm: { variant_id: "omd-autopilot-v2" } } });
    symlinkSync(base, join(staging.root, "escape")); expect(auditOmdExternalStaging(staging)).toMatchObject({ pass: false, violations: [{ path: "escape", reason: "symlink-forbidden" }] });
    const telemetry = toolTelemetry([{ type: "item.completed", item: { id: "other-cell", type: "command_execution", command: "cat /private/tmp/another-materialized-cell/secret" } }], null, { workspace, providerHome: join(execution, "provider-home"), externalStagingRoot: staging.root });
    expect(telemetry.external_context_interventions).toBe(1);
    const originalReceiptSha = sha256(readFileSync(staging.receiptPath)); const receipt = JSON.parse(readFileSync(staging.receiptPath)); receipt.staging_root = join(base, "sibling-cell"); writeFileSync(staging.receiptPath, JSON.stringify(receipt));
    expect(sha256(readFileSync(staging.receiptPath))).not.toBe(originalReceiptSha);
  });

  it("classifies the preserved blank-shell adopter/workspace conflict as infrastructure-invalid evidence", () => {
    const message = "Blocked before product build: the receipt-gated design-system adopter rejects packages nested inside the project, while your workspace-only rule forbids staging outside it.";
    expect(detectNativeInfrastructureBlock({ variantId: "omd-autopilot-v2", blankShell: true, finalMessage: message })).toBe(true);
    expect(detectNativeInfrastructureBlock({ variantId: "model-only", blankShell: true, finalMessage: message })).toBe(false);
    expect(detectNativeInfrastructureBlock({ variantId: "omd-autopilot-v2", blankShell: false, finalMessage: message })).toBe(false);
    const fixtureRun = fixture({ variant: "omd-autopilot-v2", runnerMode: "native-block" }); const terminal = execute(fixtureRun);
    expect(terminal).toMatchObject({ status: "infrastructure-invalid", native_infrastructure_block: true, blank_shell: true, evaluator: { terminal_failure_projection: true } });
  });

  it("accepts a prompt-input fetched_at-only cache refresh and keeps rollout exact", () => {
    const f = fixture();
    const result = execute(f, { promptInputProbe: (args) => {
      const path = join(args.env.CODEX_HOME, "models_cache.json"); const cache = JSON.parse(readFileSync(path)); cache.fetched_at = "2026-08-13T01:02:03Z"; writeFileSync(path, JSON.stringify(cache));
      return defaultPromptInputProbe(args);
    } });
    const isolation = JSON.parse(readFileSync(result.provider_runtime_isolation.path));
    expect(result).toMatchObject({ status: "completed", rollout: { exact_luna_max_one_turn: true }, provider_calls: 1, model_calls: 1 });
    expect(isolation.model_catalog.sha256).toBe(f.catalogSha);
    expect(isolation.model_catalog.initial_copy_sha256).toBe(f.catalogSha);
    expect(isolation.model_catalog.observed_post_prompt_input_sha256).not.toBe(f.catalogSha);
    expect(isolation.model_catalog.observed_semantic_sha256).toBe(isolation.model_catalog.admitted_semantic_sha256);
    expect(isolation.model_catalog.model_profile_sha256).toBe(f.profileSha);
    expect(isolation.model_catalog.client_version).toBe("fixture-1");
  });

  it("fails before provider spawn on a semantic prompt-input cache mutation", () => {
    const f = fixture();
    const result = execute(f, { promptInputProbe: (args) => {
      const path = join(args.env.CODEX_HOME, "models_cache.json"); const cache = JSON.parse(readFileSync(path)); cache.models[0].tool_mode = "mutated"; writeFileSync(path, JSON.stringify(cache));
      return defaultPromptInputProbe(args);
    } });
    expect(result).toMatchObject({ status: "infrastructure-invalid", provider_calls: 0, model_calls: 0, browser_calls: 0, reason: "pre-provider-setup-failed" });
    expect(readFileSync(result.failure_artifact.path, "utf8")).toContain("semantic/profile/client mutation");
    expect(existsSync(join(f.materialized, "prepared-cells/cell-01/.benchmark/execution/workspace/.benchmark/argv.json"))).toBe(false);
  });

  it("creates an immutable provider-zero auth/catalog runtime snapshot bound to the static receipt", () => {
    const f = fixture(); const source = join(f.base, "snapshot-source"); mkdirSync(source); writeFileSync(join(source, "auth.json"), "new-auth"); writeFileSync(join(source, "models_cache.json"), readFileSync(join(f.runtimeHome, "models_cache.json")));
    const out = join(f.base, "fresh-runtime-snapshot"); const receipt = prepareRuntimeSnapshot({ sourceHome: source, out, staticRuntimeReceipt: f.admission.bindings.static_runtime.path, repoRoot: f.repo });
    expect(receipt).toMatchObject({ kind: "omd-luna-max-immutable-runtime-snapshot", models_cache_sha256: f.catalogSha, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
    expect(readFileSync(join(out, "auth.json"), "utf8")).toBe("new-auth"); expect(() => prepareRuntimeSnapshot({ sourceHome: source, out, staticRuntimeReceipt: f.admission.bindings.static_runtime.path, repoRoot: f.repo })).toThrow(/fresh/);
  });

  it("reads the live model/profile only from the admitted immutable runtime snapshot", () => {
    const f = fixture(); let observedHome = null;
    const result = execute(f, {
      runtimeObservation: undefined,
      runtimeInspector: (_model, env) => {
        observedHome = env.OMD_BENCH_AUTH_CODEX_HOME;
        return { model_id: "gpt-5.6-luna", cache_sha256: f.catalogSha, model_profile_sha256: f.profileSha };
      },
    });
    expect(result.status).toBe("completed");
    expect(observedHome).toBe(resolve(f.runtimeHome));
  });

  it("requires exactly one controller activation and rejects direct or alternate authority commands", () => {
    const ok = [{ type: "item.completed", item: { id: "a", type: "command_execution", command: "node scripts/activate-autopilot-design-system.cjs . .omd/runs/neighborhood-library" } }];
    expect(auditOmdControllerCommands(ok, ".omd/runs/neighborhood-library")).toMatchObject({ pass: true, exact_activation_count: 1, forbidden: [] });
    const external = "/execution/authority-controller-runtime/scripts/activate-autopilot-design-system.cjs";
    expect(auditOmdControllerCommands([{ type: "item.completed", item: { id: "env", type: "command_execution", command: "node $OMD_AUTHORITY_CONTROLLER_EXECUTABLE . $OMD_AUTHORITY_CONTROLLER_RUN_DIR" } }], ".omd/runs/neighborhood-library", external)).toMatchObject({ pass: true, exact_activation_count: 1 });
    expect(auditOmdControllerCommands([{ type: "item.completed", item: { id: "expanded", type: "command_execution", command: `node ${external} . .omd/runs/neighborhood-library`, exit_code: 0, status: "completed", aggregated_output: '{"status":"adopted-and-validated"}' } }], ".omd/runs/neighborhood-library", external)).toMatchObject({ pass: true, exact_activation_count: 1 });
    expect(auditOmdControllerCommands([{ type: "item.completed", item: { id: "mixed-a", type: "command_execution", command: "node $OMD_AUTHORITY_CONTROLLER_EXECUTABLE . .omd/runs/neighborhood-library" } }], ".omd/runs/neighborhood-library", external).pass).toBe(false);
    expect(auditOmdControllerCommands([{ type: "item.completed", item: { id: "mixed-b", type: "command_execution", command: `node ${external} . $OMD_AUTHORITY_CONTROLLER_RUN_DIR` } }], ".omd/runs/neighborhood-library", external).pass).toBe(false);
    expect(auditOmdControllerCommands([{ type: "item.completed", item: { id: "spoof", type: "command_execution", command: `OMD_AUTHORITY_CONTROLLER_EXECUTABLE=./scripts/activate-autopilot-design-system.cjs node $OMD_AUTHORITY_CONTROLLER_EXECUTABLE . .omd/runs/neighborhood-library` } }], ".omd/runs/neighborhood-library", external).pass).toBe(false);
    for (const command of [
      "OMD_AUTHORITY_CONTROLLER_INTERNAL_SHA256=abc node scripts/prepare-design-md-core-review.cjs --approve x --reviewer owner --authority-transition-approved",
      "node scripts/adopt-design-md-core.cjs pkg --prepare-checkpoint x --reviewer owner --authority-transition-approved",
      "node scripts/activate-autopilot-design-system.cjs . .omd/runs/alternate",
      "node scripts/activate-autopilot-design-system.cjs . .omd/runs/neighborhood-library && node scripts/activate-autopilot-design-system.cjs . .omd/runs/neighborhood-library",
      "node scripts/compile-design-md-core.cjs graph --out-dir package-v2",
    ]) expect(auditOmdControllerCommands([{ type: "item.completed", item: { id: "bad", type: "command_execution", command } }], ".omd/runs/neighborhood-library").pass).toBe(false);
    expect(auditOmdControllerCommands([{ type: "item.started", item: { id: "started", type: "command_execution", command: "node scripts/prepare-design-md-core-review.cjs --approve forged" } }], ".omd/runs/neighborhood-library").pass).toBe(false);
    expect(auditOmdControllerCommands([{ type: "item.failed", item: { id: "failed", type: "command_execution", command: "node scripts/adopt-design-md-core.cjs pkg --prepare-checkpoint forged" } }], ".omd/runs/neighborhood-library").pass).toBe(false);
    const literal = "node $OMD_AUTHORITY_CONTROLLER_EXECUTABLE . $OMD_AUTHORITY_CONTROLLER_RUN_DIR";
    for (const command of [
      `NODE_OPTIONS=--require=./evil ${literal}`,
      `NODE_PATH=./evil ${literal}`,
      `PATH=./evil ${literal}`,
      `${literal} || node forge-outputs.cjs`,
      `${literal}; node forge-outputs.cjs`,
      `${literal} > activation.json`,
      `node $(printf %s "$OMD_AUTHORITY_CONTROLLER_EXECUTABLE") . $OMD_AUTHORITY_CONTROLLER_RUN_DIR`,
    ]) expect(auditOmdControllerCommands([{ type: "item.completed", item: { id: "shell-injection", type: "command_execution", command, exit_code: 0 } }], ".omd/runs/neighborhood-library", external).pass).toBe(false);
    expect(auditOmdControllerCommands([{ type: "item.started", item: { id: "started-only", type: "command_execution", command: literal } }], ".omd/runs/neighborhood-library", external).pass).toBe(false);
    expect(auditOmdControllerCommands([{ type: "item.failed", item: { id: "failed-activation", type: "command_execution", command: literal, exit_code: 1 } }], ".omd/runs/neighborhood-library", external).pass).toBe(false);
    expect(auditOmdControllerCommands([{ type: "item.completed", item: { id: "nonzero", type: "command_execution", command: literal, exit_code: 7 } }], ".omd/runs/neighborhood-library", external).pass).toBe(false);
    expect(auditOmdControllerCommands([{ type: "item.completed", item: { id: "bad-output", type: "command_execution", command: literal, exit_code: 0, aggregated_output: "manual fallback" } }], ".omd/runs/neighborhood-library", external).pass).toBe(false);
    expect(auditOmdControllerCommands([
      { type: "item.started", item: { id: "lifecycle", type: "command_execution", command: literal } },
      { type: "item.completed", item: { id: "lifecycle", type: "command_execution", command: literal, exit_code: 0, aggregated_output: '{"status":"adopted-and-validated"}' } },
    ], ".omd/runs/neighborhood-library", external)).toMatchObject({ pass: true, exact_activation_count: 1 });
  });

  it("rejects missing, forged, or tampered activation and extra staging files", () => {
    const base = mkdtempSync(join(tmpdir(), "omd-controller-outcome-")); const execution = join(base, "execution"); const workspace = join(execution, "workspace");
    mkdirSync(join(workspace, ".benchmark"), { recursive: true }); writeFileSync(join(workspace, ".benchmark/PROMPT.md"), OMD_EXTERNAL_STAGING_ACTIVATION); writeFileSync(join(workspace, ".benchmark/invocation-prompt.txt"), OMD_EXTERNAL_STAGING_ACTIVATION);
    const staging = prepareOmdExternalStaging({ execution, workspace, metadata: { cell_id: "cell", task: { id: "neighborhood-library-landing" }, arm: { variant_id: "omd-autopilot-v2" } } });
    let audit = auditOmdControllerOutcome({ workspace, staging, authorityReceiptSha256: staging.authorityReceiptSha256, runDir: staging.controllerRunDir });
    expect(audit.pass).toBe(false); expect(audit.violations).toContain("activation-missing-or-invalid");
    mkdirSync(join(workspace, staging.controllerRunDir, "system"), { recursive: true }); writeFileSync(join(workspace, "DESIGN.md"), "design\n"); writeFileSync(join(workspace, staging.controllerRunDir, "system/proof.json"), JSON.stringify({ pass: true, status: "passed", design_md_sha256: sha256("design\n") }));
    writeFileSync(join(workspace, staging.controllerRunDir, "system/activation.json"), JSON.stringify({ schema_version: "0.1", kind: "omd-autopilot-deterministic-system-activation", status: "adopted-and-validated", authority_controller_receipt_sha256: "f".repeat(64), outputs: { design_md_sha256: sha256("design\n"), proof_sha256: sha256(readFileSync(join(workspace, staging.controllerRunDir, "system/proof.json"))) } }));
    audit = auditOmdControllerOutcome({ workspace, staging, authorityReceiptSha256: staging.authorityReceiptSha256, runDir: staging.controllerRunDir }); expect(audit.violations).toContain("activation-binding-invalid");
    writeFileSync(join(workspace, staging.controllerRunDir, "system/proof.json"), "{malformed");
    audit = auditOmdControllerOutcome({ workspace, staging, authorityReceiptSha256: staging.authorityReceiptSha256, runDir: staging.controllerRunDir }); expect(audit.violations).toEqual(expect.arrayContaining(["proof-json-invalid", "activation-project-proof-invalid"]));
    writeFileSync(join(workspace, "DESIGN.md"), "tampered\n");
    audit = auditOmdControllerOutcome({ workspace, staging, authorityReceiptSha256: staging.authorityReceiptSha256, runDir: staging.controllerRunDir }); expect(audit.violations).toContain("activation-binding-invalid");
    mkdirSync(staging.packageRoot, { recursive: true }); writeFileSync(join(staging.root, "extra-package-v2"), "forbidden");
    expect(auditOmdExternalStaging(staging)).toMatchObject({ pass: false });
  });

  it("records deleted controller receipts and forbidden authority attempts as infrastructure-invalid even after timeout", () => {
    const deleted = execute(fixture({ variant: "omd-autopilot-v2", deleteAuthorityReceipt: true }));
    expect(deleted).toMatchObject({ status: "infrastructure-invalid", authority_controller: { receipt: null, receipt_intact: false } });
    const contaminatedTimeout = execute(fixture({ variant: "omd-autopilot-v2", runnerMode: "timeout", forbiddenAuthorityCommand: true }));
    expect(contaminatedTimeout).toMatchObject({ status: "infrastructure-invalid", process: { timed_out: true }, authority_controller: { commands: { pass: false } } });
  });

  it("rejects execution-owned controller runtime tampering and never starts the evaluator", () => {
    const result = execute(fixture({ variant: "omd-autopilot-v2", tamperAuthorityRuntime: true }));
    expect(result).toMatchObject({ status: "infrastructure-invalid", evaluator: { process: null }, authority_controller: { runtime_closure: { intact: false } } });
  });

  it("fails before provider spawn when prompt-input exposes an extra global skill", () => {
    const f = fixture();
    const result = execute(f, { promptInputProbe: ({ env }) => { const lines = ["imagegen", "openai-docs", "plugin-creator", "skill-creator", "skill-installer"].map((id) => `- ${id}: builtin (file: ${join(env.CODEX_HOME, "skills/.system", id, "SKILL.md")})`).concat("- browser-harness: leaked (file: /Users/example/Developer/browser-harness/SKILL.md)"); return { status: 0, stdout: promptInputJson(lines.join("\n")) }; } });
    expect(result).toMatchObject({ status: "infrastructure-invalid", provider_calls: 0, model_calls: 0, browser_calls: 0 });
    const failure = JSON.parse(readFileSync(result.failure_artifact.path));
    expect(failure.error.prompt_input_failure).toMatchObject({ path: expect.stringContaining("PROMPT-INPUT-SKILL-AUDIT-FAILURE.json"), sha256: expect.stringMatching(/^[a-f0-9]{64}$/) });
    expect(readFileSync(result.raw_response.path, "utf8")).toContain("browser-harness leaked");
    expect(existsSync(join(f.materialized, "prepared-cells/cell-01/.benchmark/execution/workspace/.benchmark/argv.json"))).toBe(false);
  });

  it("preserves exact prompt-input timeout and nonzero evidence as provider-zero immutable terminals", () => {
    for (const observed of [
      { status: null, signal: "SIGTERM", stdout: "partial-timeout-output", stderr: "exact timeout stderr", error: Object.assign(new Error("spawnSync ETIMEDOUT"), { code: "ETIMEDOUT" }) },
      { status: 23, signal: null, stdout: "exact nonzero stdout", stderr: "exact nonzero stderr", error: null },
    ]) {
      const f = fixture(); let receivedTimeout = null;
      const result = execute(f, { promptInputProbe: ({ timeoutMs }) => { receivedTimeout = timeoutMs; return observed; } });
      expect(receivedTimeout).toBe(PROMPT_INPUT_AUDIT_TIMEOUT_MS);
      expect(result).toMatchObject({ status: "infrastructure-invalid", provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0, rerun_allowed: false });
      const execution = join(f.materialized, "prepared-cells/cell-01/.benchmark/execution");
      expect(readFileSync(join(execution, "PROMPT-INPUT-SKILL-AUDIT.stdout"), "utf8")).toBe(observed.stdout);
      expect(readFileSync(join(execution, "PROMPT-INPUT-SKILL-AUDIT.stderr"), "utf8")).toBe(observed.stderr);
      const failure = JSON.parse(readFileSync(join(execution, "PROMPT-INPUT-SKILL-AUDIT-FAILURE.json")));
      expect(failure).toMatchObject({ timeout_ms: 120_000, process: { status: observed.status, signal: observed.signal }, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
      expect(existsSync(join(execution, "PROVIDER-SPAWN-STARTED.json"))).toBe(false);
      expect(existsSync(join(execution, "workspace/.benchmark/argv.json"))).toBe(false);
      const bundle = collect(f); expect(bundle.slots[0].record_sha256).toBe(result.record_sha256);
    }
  });

  it("accepts an exact large project skill under the bounded prompt-input audit", () => {
    const f = fixture({ variant: "taste-eligible-scope-only" });
    replaceVariantSkill(f, `---\nname: frontend-design\n---\n# large frozen skill\n${"taste-rule: exact\n".repeat(5_000)}`);
    let receivedTimeout = null;
    const result = execute(f, { promptInputProbe: (args) => { receivedTimeout = args.timeoutMs; return defaultPromptInputProbe(args); } });
    expect(receivedTimeout).toBe(120_000);
    expect(result).toMatchObject({ status: "completed", provider_calls: 1, model_calls: 1 });
    const audit = JSON.parse(readFileSync(join(f.materialized, "prepared-cells/cell-01/.benchmark/execution/PROMPT-INPUT-SKILL-AUDIT.json")));
    expect(audit).toMatchObject({ pass: true, timeout_ms: 120_000, project_skills: [{ id: "frontend-design", sha256: expect.stringMatching(/^[a-f0-9]{64}$/) }] });
  });

  it("ignores a non-developer skills block and allows an exact OmD arm skill", () => {
    const f = fixture({ variant: "omd-autopilot-v2" });
    const skillPath = join(f.materialized, "prepared-cells/cell-01/.agents/skills/frontend-design/SKILL.md");
    writeFileSync(skillPath, "---\nname: omd:autopilot\n---\n# frozen OmD autopilot\n");
    for (const cell of f.cells) {
      const path = join(f.materialized, "prepared-cells", cell.id);
      const skill = join(path, ".agents/skills/frontend-design/SKILL.md");
      if (existsSync(skill) && skill !== skillPath) writeFileSync(skill, "---\nname: omd:autopilot\n---\n# frozen OmD autopilot\n");
      cell.workspace_tree = summary(path);
    }
    const materialization = JSON.parse(readFileSync(f.admission.bindings.materialization.path));
    materialization.cells = f.cells; json(f.admission.bindings.materialization.path, materialization);
    f.admission.bindings.materialization = bind(f.admission.bindings.materialization.path); json(f.admissionPath, f.admission);
    const result = execute(f, { promptInputProbe: ({ cwd, env }) => {
      const builtin = ["imagegen", "openai-docs", "plugin-creator", "skill-creator", "skill-installer"].map((id) => `- ${id}: builtin (file: ${join(env.CODEX_HOME, "skills/.system", id, "SKILL.md")})`);
      const block = [...builtin, `- omd:autopilot: exact (file: ${join(cwd, ".agents/skills/frontend-design/SKILL.md")})`].join("\n");
      return { status: 0, stdout: promptInputJson(block, [{ type: "message", role: "user", content: [{ type: "input_text", text: "<skills_instructions>\n- browser-harness: fake (file: /tmp/fake)\n</skills_instructions>" }] }]) };
    } });
    expect(result.status).toBe("infrastructure-invalid");
    expect(result.authority_controller.outcome.violations).toEqual(expect.arrayContaining(["activation-missing-or-invalid", "DESIGN-missing-or-invalid", "proof-missing-or-invalid"]));
  });

  it("counts and fails closed on raw provider-side browser-harness commands", () => {
    const f = fixture({ agentBrowserCall: true }); const result = execute(f);
    expect(result.status).toBe("infrastructure-invalid"); expect(result.telemetry.agent_browser_calls).toBe(1); expect(result.telemetry.telemetry_evidence.raw_browser_item_ids).toEqual(["browser-1"]); expect(result.browser_calls).toBe(1); expect(result.browser_call_split).toEqual({ agent_browser_calls: 1, evaluator_browser_calls: 0 });
  });

  it("does not classify command stdout text as a browser or network invocation", () => {
    const telemetry = toolTelemetry([{
      type: "item.completed",
      item: {
        id: "benign-output",
        type: "command_execution",
        command: "rg -n 'xmlns|menu' index.html",
        aggregated_output: "Open menu <svg xmlns=\"http://www.w3.org/2000/svg\">",
      },
    }], null, { workspace: "/private/tmp/workspace", providerHome: "/private/tmp/provider-home" });
    expect(telemetry).toMatchObject({ agent_browser_calls: 0, agent_network_attempts: 0, external_context_interventions: 0 });
  });

  it("does not classify the preserved item_16 local Node heredoc source as browser or network telemetry", () => {
    const command = [
      "/opt/homebrew/bin/zsh -lc \"node <<'NODE'",
      "const fs = require('fs');",
      "const html = fs.readFileSync('index.html', 'utf8');",
      "const tags = ['html','head','body','main','header','footer','section','form','script','style'];",
      "for (const tag of tags) {",
      "  const open = (html.match(new RegExp(`<${tag}\\\\b`, 'g')) || []).length;",
      "  const close = (html.match(new RegExp(`</${tag}>`, 'g')) || []).length;",
      "  console.log(`${tag}: ${open}/${close}`);",
      "}",
      "const script = html.match(/<script>([\\s\\S]*?)<\\/script>/)[1];",
      "new Function(script);",
      "console.log('inline script: OK');",
      "NODE\"",
    ].join("\n");
    const telemetry = toolTelemetry([{ type: "item.completed", item: { id: "item_16", type: "command_execution", command, aggregated_output: "head: 1/1\nscript: 1/1\ninline script: OK\n", exit_code: 0, status: "completed" } }], null, { workspace: "/private/tmp/workspace", providerHome: "/private/tmp/provider-home" });
    expect(telemetry).toMatchObject({ agent_browser_calls: 0, agent_network_attempts: 0, external_context_interventions: 0 });
    expect(telemetry.raw_browser_item_ids).toEqual([]); expect(telemetry.raw_network_item_ids).toEqual([]);
  });

  it("does not truncate observed OmD relative workspace tmp paths into absolute /tmp interventions", () => {
    const commands = [
      ["item_72", "/opt/homebrew/bin/zsh -lc 'node scripts/prepare-design-md-core-review.cjs .omd/runs/neighborhood-library-landing/system/graph.json --provenance .omd/runs/neighborhood-library-landing/system/provenance.json --coverage .omd/runs/neighborhood-library-landing/system/coverage.json --out-dir .benchmark/tmp/design-review'"],
      ["item_74", "/opt/homebrew/bin/zsh -lc \"sed -n '1,320p' .benchmark/tmp/design-review/review-request.json\""],
      ["item_75", "/opt/homebrew/bin/zsh -lc \"sed -n '1,360p' .benchmark/tmp/design-review/DESIGN.md\""],
      ["item_77", "/opt/homebrew/bin/zsh -lc 'node scripts/prepare-design-md-core-review.cjs --approve .benchmark/tmp/design-review/review-request.json --reviewer project-owner --out .benchmark/tmp/design-review/approval.json --authority-transition-approved'"],
      ["item_78", "/opt/homebrew/bin/zsh -lc 'node scripts/compile-design-md-core.cjs .benchmark/tmp/design-review/input-graph.json --provenance .benchmark/tmp/design-review/provenance.json --coverage .benchmark/tmp/design-review/coverage.json --review-receipt .benchmark/tmp/design-review/approval.json --out-dir .benchmark/tmp/design-compiled --adopt'"],
      ["item_79", "/opt/homebrew/bin/zsh -lc \"sed -n '1,320p' .benchmark/tmp/design-compiled/.omd/system/manifest.json\""],
      ["item_80", "/opt/homebrew/bin/zsh -lc 'find .benchmark/tmp/design-compiled -maxdepth 4 -type f -print | sort'"],
      ["item_81", "/opt/homebrew/bin/zsh -lc \"sed -n '1,80p' .benchmark/tmp/design-compiled/DESIGN.md\""],
      ["item_82", "/opt/homebrew/bin/zsh -lc \"sed -n '1,180p' .benchmark/tmp/design-compiled/.omd/system/graph.json\""],
      ["item_84", "/opt/homebrew/bin/zsh -lc 'node scripts/adopt-design-md-core.cjs .benchmark/tmp/design-compiled --prepare-checkpoint .benchmark/tmp/design-checkpoint.json --reviewer project-owner --authority-transition-approved'"],
    ].map(([id, command]) => ({ type: "item.completed", item: { id, type: "command_execution", command } }));
    const telemetry = toolTelemetry(commands, null, { workspace: "/private/tmp/workspace", providerHome: "/private/tmp/provider-home" });
    expect(telemetry.external_context_interventions).toBe(0);
    expect(telemetry.external_context_items).toEqual([]);
  });

  it("still fails closed on absolute /tmp, /private/tmp, and /Users paths in quoted and nested shell commands", () => {
    const commands = [
      ["absolute-tmp", "/opt/homebrew/bin/zsh -lc \"sed -n '1,360p' /tmp/design-review/DESIGN.md\""],
      ["absolute-private-tmp", "/opt/homebrew/bin/zsh -lc \"command sh -c 'cat /private/tmp/foreign/context.json'\""],
      ["absolute-users", "env NAME=value /bin/zsh -lc 'cat /Users/example/.codex/skills/secret/SKILL.md'"],
    ].map(([id, command]) => ({ type: "item.completed", item: { id, type: "command_execution", command } }));
    const telemetry = toolTelemetry(commands, null, { workspace: "/private/tmp/workspace", providerHome: "/private/tmp/provider-home" });
    expect(telemetry.external_context_interventions).toBe(3);
    expect(telemetry.external_context_items).toEqual([
      expect.objectContaining({ id: "absolute-tmp", forbidden_path: "/tmp/design-review/DESIGN.md" }),
      expect.objectContaining({ id: "absolute-private-tmp", forbidden_path: "/private/tmp/foreign/context.json" }),
      expect.objectContaining({ id: "absolute-users", forbidden_path: "/Users/example/.codex/skills/secret/SKILL.md" }),
    ]);
  });

  it("fails closed on real browser/network executables, package invocations, shell scripts, and structured tools", () => {
    const commands = [
      ["browser-cli", "browser-harness --doctor"],
      ["browser-package", "npx --yes browser-harness page_info"],
      ["browser-node-package", "node ./node_modules/browser-harness/bin/cli.js page_info"],
      ["curl-direct", "/usr/bin/curl https://example.invalid"],
      ["wget-shell", "/bin/zsh -lc 'wget https://example.invalid'"],
      ["open-direct", "open https://example.invalid"],
    ].map(([id, command]) => ({ type: "item.completed", item: { id, type: "command_execution", command } }));
    const structured = [
      { type: "item.completed", item: { id: "web-search", type: "web_search", query: "external" } },
      { type: "item.completed", item: { id: "computer-use", type: "computer_use", action: "open browser" } },
      { type: "item.completed", item: { id: "mcp-network", type: "mcp_tool_call", server: "remote", tool: "fetch", arguments: { url: "https://example.invalid" } } },
    ];
    const telemetry = toolTelemetry([...commands, ...structured], null, { workspace: "/private/tmp/workspace", providerHome: "/private/tmp/provider-home" });
    expect(telemetry.raw_browser_item_ids).toEqual(["browser-cli", "browser-node-package", "browser-package", "computer-use", "open-direct"]);
    expect(telemetry.raw_network_item_ids).toEqual(["browser-cli", "browser-node-package", "browser-package", "computer-use", "curl-direct", "mcp-network", "open-direct", "web-search", "wget-shell"]);
  });

  it("fails closed after unwrapping env, command, exec, timeout, nice, nohup, and sudo argv", () => {
    const wrapped = [
      ["env-curl", "/usr/bin/env /usr/bin/curl https://example.invalid"],
      ["env-options-curl", "env -i -u TOKEN NAME=value /usr/bin/curl https://example.invalid"],
      ["command-open", "command open https://example.invalid"],
      ["exec-browser", "exec browser-harness page_info"],
      ["timeout-wget", "timeout 5 wget https://example.invalid"],
      ["nice-curl", "nice -n 5 curl https://example.invalid"],
      ["nohup-browser", "nohup browser-harness --doctor"],
      ["sudo-open", "sudo -u root NAME=value open https://example.invalid"],
    ].map(([id, command]) => ({ type: "item.completed", item: { id, type: "command_execution", command } }));
    const telemetry = toolTelemetry(wrapped, null, { workspace: "/private/tmp/workspace", providerHome: "/private/tmp/provider-home" });
    expect(telemetry.raw_browser_item_ids).toEqual(["command-open", "exec-browser", "nohup-browser", "sudo-open"]);
    expect(telemetry.raw_network_item_ids).toEqual(["command-open", "env-curl", "env-options-curl", "exec-browser", "nice-curl", "nohup-browser", "sudo-open", "timeout-wget"]);
  });

  it("does not treat command executable lookup as execution", () => {
    const telemetry = toolTelemetry([
      { type: "item.completed", item: { id: "lookup-curl", type: "command_execution", command: "command -v curl" } },
      { type: "item.completed", item: { id: "lookup-browser", type: "command_execution", command: "command -V browser-harness" } },
    ], null, { workspace: "/private/tmp/workspace", providerHome: "/private/tmp/provider-home" });
    expect(telemetry).toMatchObject({ agent_browser_calls: 0, agent_network_attempts: 0 });
  });

  it("fails closed when raw provider commands read global skills or write external temporary context", () => {
    const f = fixture({ externalContextCall: true }); const result = execute(f);
    expect(result.status).toBe("infrastructure-invalid");
    expect(result.telemetry.external_context_interventions).toBe(1);
    expect(result.telemetry.telemetry_evidence.external_context_items).toEqual([expect.objectContaining({ id: "external-1" })]);
    expect(result.unplanned_interventions).toBe(1);
  });

  it("fails closed on absolute network commands and implicit network tool events", () => {
    const f = fixture({ networkAttempt: true }); const result = execute(f);
    expect(result.status).toBe("infrastructure-invalid"); expect(result.telemetry.agent_network_attempts).toBe(2);
    expect(result.telemetry.telemetry_evidence.raw_network_item_ids).toEqual(["network-1", "network-2"]); expect(result.unplanned_interventions).toBe(2);
  });

  it("refuses a skipped, ineligible, dirty, drifted-model, fallback, or arbitrarily admitted run before provider spawn", () => {
    for (const mutate of [
      (f) => ({ cellId: "cell-02" }),
      (f) => ({ cellId: "ineligible-0" }),
      (f) => { writeFileSync(join(f.repo, "dirty"), "x"); return {}; },
      (f) => { const p = join(f.materialized, "prepared-cells/cell-01/.benchmark/cell.json"); const v = JSON.parse(readFileSync(p)); v.runtime.effort = "high"; writeFileSync(p, JSON.stringify(v)); return {}; },
      (f) => { const v = JSON.parse(readFileSync(f.runtimePath)); v.runtime.fallback_calls = 1; writeFileSync(f.runtimePath, JSON.stringify(v)); f.admission.bindings.runtime_attribution = bind(f.runtimePath); json(f.admissionPath, f.admission); return {}; },
      (f) => { const p = f.admission.bindings.static_runtime.path; const v = JSON.parse(readFileSync(p)); v.runtime.model_profile_sha256 = "f".repeat(64); json(p, v); f.admission.bindings.static_runtime = bind(p); json(f.admissionPath, f.admission); return {}; },
      (f) => { const v = JSON.parse(readFileSync(f.admissionPath)); v.source_commit = "f".repeat(40); writeFileSync(f.admissionPath, JSON.stringify(v)); return {}; },
      (f) => { const v = JSON.parse(readFileSync(f.admissionPath)); v.reviewer_role = "self-authored"; writeFileSync(f.admissionPath, JSON.stringify(v)); return {}; },
    ]) {
      const f = fixture(); const overrides = mutate(f); expect(() => execute(f, overrides)).toThrow();
      expect(existsSync(join(f.materialized, "prepared-cells/cell-01/.benchmark/execution"))).toBe(false);
    }
  });

  it("writes failed and timeout attempts as immutable denominator records without evaluation or retry", () => {
    for (const mode of ["failed", "timeout"]) {
      const f = fixture({ runnerMode: mode }); const result = execute(f);
      expect(result.status).toBe(mode === "failed" ? "failed" : "timeout"); expect(result.retry_calls).toBe(0); expect(result.evaluator).toMatchObject({ deterministic: true, ui_resolved: false, objective_score: 0, terminal_failure_projection: true }); expect(result.browser_calls).toBe(0);
      const terminal = mode === "failed" ? "FAILED.json" : "TIMEOUT.json"; expect(existsSync(join(f.materialized, `prepared-cells/cell-01/.benchmark/execution/${terminal}`))).toBe(true);
    }
  }, 20_000);

  it("reconciles a started-without-terminal crash as infrastructure-invalid and never reruns it", () => {
    const f = fixture(); const execution = join(f.materialized, "prepared-cells/cell-01/.benchmark/execution"); mkdirSync(execution); json(join(execution, "STARTED.json"), { cell_id: "cell-01" });
    expect(reconcileCrashes(f.materialized, { cells: f.cells })).toEqual(["cell-01"]);
    const terminal = JSON.parse(readFileSync(join(execution, "INFRASTRUCTURE-INVALID.json")));
    expect(terminal).toMatchObject({ status: "infrastructure-invalid", provider_calls: 0, model_calls: 0, browser_calls: 0, rerun_allowed: false, process: { phase: "pre-provider-spawn" } });
    expect(terminal.record_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(() => execute(f)).toThrow(/exact next locked cell: cell-02/);

    const providerStarted = fixture(); const providerExecution = join(providerStarted.materialized, "prepared-cells/cell-01/.benchmark/execution"); mkdirSync(providerExecution);
    json(join(providerExecution, "STARTED.json"), { cell_id: "cell-01" }); json(join(providerExecution, "PROVIDER-SPAWN-STARTED.json"), { kind: "boundary" });
    expect(reconcileCrashes(providerStarted.materialized, { cells: providerStarted.cells })).toEqual(["cell-01"]);
    expect(JSON.parse(readFileSync(join(providerExecution, "INFRASTRUCTURE-INVALID.json"))).provider_calls).toBe("unknown");
    expect(JSON.parse(readFileSync(join(providerExecution, "INFRASTRUCTURE-INVALID.json"))).process.phase).toBe("provider-spawned-before-terminal");
  });

  it("collects terminal plus six immutable ineligible slots into the exact auditor bundle and leaves unstarted cells missing", () => {
    const f = fixture(); const result = execute(f); const bundle = collect(f);
    expect(bundle).toMatchObject({ kind: "omd-luna-max-wow-preview-execution-records", experiment_id: "omd-luna-test", source_commit: f.sourceCommit, scheduled_terminal_records: 1, scheduled_missing_records: 47, retained_ineligible_records: 6, collection_calls: { provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 } });
    expect(bundle.slots).toHaveLength(7); expect(bundle.slots[0].record_sha256).toBe(result.record_sha256); expect(bundle.slots.slice(1).every((slot) => slot.status === "retained-preregistered-ineligible-unexecuted" && slot.provider_calls === 0)).toBe(true);
    const inputBindings = { matrix: { ...bind(f.matrixPath), bytes: readFileSync(f.matrixPath).length }, preregistration: { ...bind(f.preregPath), bytes: readFileSync(f.preregPath).length }, materialization: { ...bind(f.materializationPath), bytes: readFileSync(f.materializationPath).length }, records: { path: join(f.base, "records.json"), sha256: sha256(readFileSync(join(f.base, "records.json"))), bytes: readFileSync(join(f.base, "records.json")).length }, human: { path: null, sha256: null, bytes: 0, present: false }, gate: { ...bind(defaultGatePath), bytes: readFileSync(defaultGatePath).length } };
    expect(() => auditWowPreview({ matrix: JSON.parse(readFileSync(f.matrixPath)), preregistration: JSON.parse(readFileSync(f.preregPath)), materialization: JSON.parse(readFileSync(f.materializationPath)), recordsBundle: bundle, humanReceipt: { present: false }, gate: JSON.parse(readFileSync(defaultGatePath)), inputBindings })).not.toThrow();
    expect(() => collect(f)).toThrow(/fresh/);
  });
});
