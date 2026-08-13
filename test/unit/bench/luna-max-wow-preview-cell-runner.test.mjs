import { execFileSync } from "node:child_process";
import { chmodSync, cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  ADMISSION_GENERATOR_PATH, DEFAULT_EVALUATOR_PATH, PREREG_CONTROLLER_PATH, RUNNER_PATH, collectRecords, prepareRuntimeSnapshot, reconcileCrashes, runCell, sha256, tree,
} from "../../../benchmarks/ui-resolve-bench/scripts/run-luna-max-wow-preview-cell.mjs";
import { auditWowPreview, defaultGatePath } from "../../../benchmarks/ui-resolve-bench/scripts/audit-luna-max-wow-preview.mjs";

function git(root, ...args) { return execFileSync("git", ["-C", root, ...args], { encoding: "utf8" }).trim(); }
function json(path, value) { mkdirSync(dirname(path), { recursive: true }); writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`); return path; }
function bind(path) { return { path, sha256: sha256(readFileSync(path)) }; }
function summary(root) { const value = tree(root); return { files: value.files.length, bytes: value.files.reduce((n, f) => n + f.bytes, 0), sha256: value.sha256 }; }
function promptInputJson(block, extraMessages = []) {
  return JSON.stringify([
    { type: "message", role: "developer", content: [{ type: "input_text", text: `<skills_instructions>\n${block}\n</skills_instructions>` }] },
    { type: "message", role: "user", content: [{ type: "input_text", text: "- irrelevant: bullet (file: /tmp/not-a-skill)" }] },
    ...extraMessages,
  ]);
}

function fixture({ runnerMode = "success", designSystem = true, variant = "model-only", agentBrowserCall = false, externalContextCall = false, networkAttempt = false } = {}) {
  const base = mkdtempSync(join(tmpdir(), "omd-luna-cell-runner-")); const repo = join(base, "repo"); const materialized = join(base, "materialized");
  const runtimeHome = join(base, "runtime-home"); mkdirSync(runtimeHome); writeFileSync(join(runtimeHome, "auth.json"), "fixture-auth"); writeFileSync(join(runtimeHome, "models_cache.json"), JSON.stringify({ models: [{ slug: "gpt-5.6-luna" }] }));
  const catalogSha = sha256(readFileSync(join(runtimeHome, "models_cache.json"))); const profileSha = "a".repeat(64);
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
    writeFileSync(join(cell, "index.html"), `<main>${id}</main>\n`); writeFileSync(join(cell, ".benchmark/invocation-prompt.txt"), `Build ${id}`);
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
  const browserPath = json(join(base, "browser.json"), { kind: "existing-browser-harness-cdp-preflight", source_commit: sourceCommit, excluded_from_benchmark_denominator: true, browser: { transport: "local-existing-chrome-cdp", named_existing: true, launched_by_controller: false, navigation_calls: 0, url: "http://127.0.0.1:3100/fixture" }, provider_calls: 0, model_calls: 0, browser_calls: 1 });
  const runner = join(base, "fake-runner.mjs");
  const nativeSha = "e".repeat(64), cliVersion = "fixture-1";
  writeFileSync(runner, `import{createHash}from'node:crypto';import{readFileSync,writeFileSync}from'node:fs';import{join}from'node:path';const a=process.argv.slice(2),w=a[a.indexOf('--workspace')+1],events=[{type:'response.completed',model:'gpt-5.6-luna'}];${agentBrowserCall ? "events.push({type:'item.completed',item:{id:'browser-1',type:'command_execution',command:'browser-harness --doctor'}});" : ""}${externalContextCall ? "events.push({type:'item.completed',item:{id:'external-1',type:'command_execution',command:'cat /Users/example/.codex/skills/secret/SKILL.md > /tmp/context.txt'}});" : ""}${networkAttempt ? "events.push({type:'item.completed',item:{id:'network-1',type:'command_execution',command:'/usr/bin/curl https://example.invalid'}});events.push({type:'item.completed',item:{id:'network-2',type:'web_search',query:'external'}});" : ""}writeFileSync(join(w,'.benchmark/argv.json'),JSON.stringify(a));writeFileSync(join(w,'.benchmark/runtime-env.json'),JSON.stringify({HOME:process.env.HOME,CODEX_HOME:process.env.CODEX_HOME,ZDOTDIR:process.env.ZDOTDIR,PATH:process.env.PATH,OMD_BENCH_CODEX_BIN:process.env.OMD_BENCH_CODEX_BIN}));writeFileSync(join(w,'.benchmark/events.jsonl'),events.map(JSON.stringify).join('\\n')+'\\n');writeFileSync(join(w,'index.html'),${JSON.stringify(designSystem ? "<style>:root{--color:#123;--space:8px;--radius:6px}.card{}.action{}.notice{}</style><main class=card>done</main>" : "<main>done</main>")});writeFileSync(join(w,'.benchmark/run-result.json'),JSON.stringify({runtime:{agent_version:${JSON.stringify(cliVersion)},binary_sha256:createHash('sha256').update(readFileSync(process.argv[1])).digest('hex'),native_binary_sha256:${JSON.stringify(nativeSha)},model_requested:'gpt-5.6-luna',model:'gpt-5.6-luna',reasoning:'max',effort_requested:'max',model_reported:'gpt-5.6-luna',model_tool_mode_evidence:{model_profile_sha256:${JSON.stringify(profileSha)},cache_sha256:${JSON.stringify(catalogSha)},auth_source_before_run:{model_profile_sha256:${JSON.stringify(profileSha)},cache_sha256:${JSON.stringify(catalogSha)}}}},output:{model_usage:[{input_tokens:10,output_tokens:20}]},process:{exit_code:${runnerMode === "failed" ? 7 : 0},timed_out:${runnerMode === "timeout"}}}));${runnerMode === "failed" ? "process.exitCode=7" : ""}`);
  chmodSync(runner, 0o755);
  const actualRunnerSha = sha256(readFileSync(runner));
  const canonicalRunner = realpathSync(runner);
  const staticPath = json(join(base, "static.json"), { kind: "codex-luna-max-static-runtime-capability", pass: true, source_commit: sourceCommit, runtime: { catalog_sha256: catalogSha, model_profile_sha256: profileSha, codex_cli: { wrapper: { path: canonicalRunner, sha256: actualRunnerSha }, native: { path: canonicalRunner, sha256: nativeSha }, version: cliVersion } }, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  json(join(runtimeHome, "RUNTIME-SNAPSHOT.json"), { schema_version: "0.1", kind: "omd-luna-max-immutable-runtime-snapshot", static_runtime_receipt: bind(staticPath), auth_json_sha256: sha256(readFileSync(join(runtimeHome, "auth.json"))), models_cache_sha256: catalogSha, static_runtime_catalog_sha256: catalogSha, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  const evaluator = join(base, "fake-evaluator.mjs");
  const fakeChrome = join(base, "fake-chrome"); writeFileSync(fakeChrome, "fixture-browser");
  writeFileSync(evaluator, `import{createHash}from'node:crypto';import{mkdirSync,readFileSync,writeFileSync}from'node:fs';import{dirname,join}from'node:path';if(process.env.CHROME_PATH!==${JSON.stringify(fakeChrome)})process.exit(9);const a=process.argv.slice(2),o=a[a.indexOf('--out')+1],s=join(dirname(o),'screenshots');mkdirSync(s,{recursive:true});writeFileSync(join(s,'desktop-1440.png'),'png');writeFileSync(join(s,'mobile-390.png'),'png');const states={};for(const state of ['default','focus-visible','unavailable-information']){const file=state+'--desktop-1440.png';writeFileSync(join(s,file),state);states[state]=[{viewport_id:'desktop-1440',file,sha256:createHash('sha256').update(readFileSync(join(s,file))).digest('hex')}]}writeFileSync(join(s,'STATE-SCREENSHOTS.json'),JSON.stringify({schema_version:'0.1',kind:'omd-luna-max-evaluator-state-screenshots',task_id:'neighborhood-library-landing',states}));writeFileSync(o,JSON.stringify({ui_resolved:true,score:100,evidence:{protected_unknown_claims:[]}}));`);
  const evaluationRuntimePath = json(join(base, "evaluation-runtime.json"), { kind: "omd-luna-max-evaluation-runtime-receipt", pass: true, source_commit: sourceCommit, evaluation_authorities: { evaluator: { path: DEFAULT_EVALUATOR_PATH, sha256: sha256(readFileSync(join(repo, DEFAULT_EVALUATOR_PATH))) } }, browser: { executable_path: fakeChrome, executable_sha256: sha256(readFileSync(fakeChrome)), version: "Fixture 1" }, fonts: { sha256: "c".repeat(64) }, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 });
  const admission = { schema_version: "0.1", kind: "omd-luna-max-sol-xhigh-admission", decision: "admitted", reviewer_role: "sol-xhigh-planning-review", attestation: { type: "role-attestation", cryptographic_identity_verified: false, statement: "This admission records a Sol/xhigh planning-review attestation; it is not cryptographic identity verification." }, source_commit: sourceCommit, generator_authority: { path: ADMISSION_GENERATOR_PATH, sha256: sha256(readFileSync(join(repo, ADMISSION_GENERATOR_PATH))) }, controller_authority: { path: PREREG_CONTROLLER_PATH, sha256: sha256(readFileSync(join(repo, PREREG_CONTROLLER_PATH))) }, bindings: { matrix: bind(matrixPath), preregistration: bind(preregPath), materialization: bind(materializationPath), schema: bind(schemaPath), static_runtime: bind(staticPath), runtime_attribution: bind(runtimePath), browser_identity: bind(browserPath), evaluation_runtime: bind(evaluationRuntimePath) }, provider_calls: 0, model_calls: 0, browser_calls: 0, network_calls: 0 };
  const admissionPath = json(join(base, "ADMISSION.json"), admission);
  return { base, repo, materialized, sourceCommit, runtimePath, browserPath, admissionPath, admission, runner, evaluator, cells, matrixPath, preregPath, materializationPath, runtimeHome, catalogSha, profileSha };
}
function execute(f, overrides = {}) { return runCell({ repoRoot: f.repo, materializedRoot: f.materialized, cellId: "cell-01", admission: f.admissionPath, runtimeAttributionReceipt: f.runtimePath, browserReceipt: f.browserPath, sourceCommit: f.sourceCommit, runnerBin: f.runner, evaluatorBin: f.evaluator, runtimeHome: f.runtimeHome, runtimeEnv: { ...process.env, OMD_BENCH_CODEX_BIN: f.runner }, promptInputProbe: ({ cwd, env }) => { const builtin = ["imagegen", "openai-docs", "plugin-creator", "skill-creator", "skill-installer"].map((id) => `- ${id}: builtin (file: ${join(env.CODEX_HOME, "skills/.system", id, "SKILL.md")})`); const projectRoot = join(cwd, ".agents/skills/frontend-design/SKILL.md"); const block = [...builtin, ...(existsSync(projectRoot) ? [`- frontend-design: frozen (file: ${projectRoot})`] : [])].join("\n"); return { status: 0, stdout: promptInputJson(block) }; }, runtimeObservation: { model_id: "gpt-5.6-luna", cache_sha256: f.catalogSha, model_profile_sha256: f.profileSha }, ...overrides }); }
function collect(f, out = join(f.base, "records.json")) { return collectRecords({ repoRoot: f.repo, materializedRoot: f.materialized, admission: f.admissionPath, runtimeAttributionReceipt: f.runtimePath, browserReceipt: f.browserPath, sourceCommit: f.sourceCommit, out }); }

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
    expect(() => execute(f)).toThrow(/exact next locked cell: cell-02/);
  });

  it("uses a neutral reusable HTML/CSS package gate for every arm and keeps OmD Core proof additive", () => {
    const valid = fixture(); expect(execute(valid).proof.design_system_package).toMatchObject({ parsed: true, pass: true });
    const empty = fixture({ designSystem: false }); expect(execute(empty).proof.design_system_package).toMatchObject({ parsed: false, pass: false });
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

  it("fails before provider spawn when prompt-input exposes an extra global skill", () => {
    const f = fixture();
    expect(() => execute(f, { promptInputProbe: ({ env }) => { const lines = ["imagegen", "openai-docs", "plugin-creator", "skill-creator", "skill-installer"].map((id) => `- ${id}: builtin (file: ${join(env.CODEX_HOME, "skills/.system", id, "SKILL.md")})`).concat("- browser-harness: leaked (file: /Users/example/Developer/browser-harness/SKILL.md)"); return { status: 0, stdout: promptInputJson(lines.join("\n")) }; } })).toThrow(/browser-harness leaked/);
    expect(existsSync(join(f.materialized, "prepared-cells/cell-01/.benchmark/execution/workspace/.benchmark/argv.json"))).toBe(false);
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
    expect(result.status).toBe("completed");
  });

  it("counts and fails closed on raw provider-side browser-harness commands", () => {
    const f = fixture({ agentBrowserCall: true }); const result = execute(f);
    expect(result.status).toBe("infrastructure-invalid"); expect(result.telemetry.agent_browser_calls).toBe(1); expect(result.telemetry.telemetry_evidence.raw_browser_item_ids).toEqual(["browser-1"]); expect(result.browser_calls).toBe(1); expect(result.browser_call_split).toEqual({ agent_browser_calls: 1, evaluator_browser_calls: 0 });
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
    expect(readFileSync(join(execution, "INFRASTRUCTURE-INVALID.json"), "utf8")).toContain("rerun_allowed");
    expect(() => execute(f)).toThrow(/exact next locked cell: cell-02/);
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
