#!/usr/bin/env node
import { randomUUID } from "node:crypto";
import { execFileSync, spawn, spawnSync } from "node:child_process";
import {
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  realpathSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { homedir } from "node:os";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { benchRoot, parseArgs, sha256, treeManifest } from "./_lib.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../../..");
const profileSchema = "grok46-runtime-admission-v0.1";
const probeModel = "grok-4.6";
const arms = {
  "no-skill": { bundle: null, productSkills: [], primarySkillPath: null },
  "uiux-pro-max": {
    bundle: "ui-ux-pro-max",
    productSkills: ["banner-design", "brand", "design", "design-system", "slides", "ui-styling", "ui-ux-pro-max"],
    primarySkillPath: ".agents/skills/ui-ux-pro-max/SKILL.md",
  },
  hallmark: { bundle: "hallmark", productSkills: ["hallmark"], primarySkillPath: ".agents/skills/hallmark/SKILL.md" },
  omd: { bundle: "omd-autopilot-v2", productSkills: ["omd-autopilot"], primarySkillPath: ".agents/skills/omd-autopilot/SKILL.md" },
};
const probeTools = ["read_file", "image_gen", "write"];
const ambientNames = new Set(["agent-browser", "ouroboros", "notion", "chrome-devtools", "aside"]);

function currentGrokBinary() {
  return realpathSync(execFileSync("sh", ["-c", "command -v grok"], { encoding: "utf8" }).trim());
}

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function writeExclusive(path, bytes, mode = 0o644) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, bytes, { flag: "wx", mode });
}

function jsonExclusive(path, value) {
  writeExclusive(path, `${JSON.stringify(value, null, 2)}\n`);
}

function quoteToml(value) {
  return JSON.stringify(String(value));
}

function isInside(root, candidate) {
  const rel = relative(root, candidate);
  return rel === "" || (!rel.startsWith(`..${sep}`) && rel !== ".." && !isAbsolute(rel));
}

function profileConfig(grokHome, actualHome) {
  const ignored = [
    join(grokHome, "bundled"),
    join(actualHome, ".agents"),
    join(actualHome, ".claude"),
    join(actualHome, ".cursor"),
    join(actualHome, ".codex"),
    join(actualHome, ".grok"),
  ];
  return `[skills]\nignore = [${ignored.map(quoteToml).join(", ")}]\n\n[plugins]\ndisabled = []\n\n[memory]\nenabled = false\n\n[subagents]\nenabled = false\n\n[workflows]\nenabled = false\n\n[managed_mcps]\nenabled = false\ngateway_tools_enabled = false\n\n[compat.claude]\nskills = false\nrules = false\nagents = false\nmcps = false\nhooks = false\nsessions = false\n\n[compat.cursor]\nskills = false\nrules = false\nagents = false\nmcps = false\nhooks = false\nsessions = false\n\n[compat.codex]\nsessions = false\n\n[cli]\nuse_leader = false\n\n[features]\nimage_gen = true\nvideo_gen = false\n\n[tools.media_gen]\nmax_parallel_image_gen_calls = 1\nmax_parallel_video_gen_calls = 0\n`;
}

function profileSandbox(workspace, actualHome) {
  const protectedRoots = [join(workspace, ".grok"), join(workspace, ".agents")];
  const deniedRoots = [join(actualHome, ".agents"), join(actualHome, ".claude"), join(actualHome, ".cursor"), join(actualHome, ".codex"), join(actualHome, ".grok")];
  return {
    protectedRoots,
    deniedRoots,
    text: `[profiles.benchmark-cell]\nextends = "strict"\nrestrict_network = true\nread_only = [${protectedRoots.map(quoteToml).join(", ")}]\ndeny = [${deniedRoots.map(quoteToml).join(", ")}]\n`,
  };
}

function seatbeltPolicy(workspace) {
  return `(version 1)\n(deny default)\n(allow process*)\n(allow file-read*)\n(allow file-write* (subpath ${JSON.stringify(workspace)}))\n(deny file-write* (subpath ${JSON.stringify(join(workspace, ".grok"))}))\n(deny file-write* (subpath ${JSON.stringify(join(workspace, ".agents"))}))\n`;
}

function probePrompt(arm) {
  const armSpec = arms[arm];
  const activation = armSpec.primarySkillPath
    ? `Read ${armSpec.primarySkillPath} with read_file and report only its declared skill name.`
    : "This is the no-skill control; do not look for or claim a product-design skill.";
  return `Runtime admission probe for arm ${arm}. Read .grok/skills/benchmark-media-tools/SKILL.md with read_file. ${activation} Do not call image_gen. Do not write or edit any file. Respond with exactly RUNTIME_ADMISSION_OK:${arm}`;
}

function copyTree(source, destination) {
  const sourceRoot = realpathSync(source);
  let count = 0;
  const visit = (current) => {
    for (const name of readdirSync(current).sort()) {
      const path = join(current, name);
      const info = lstatSync(path);
      invariant(!info.isSymbolicLink(), `source symlink is forbidden: ${path}`);
      const rel = relative(sourceRoot, path);
      const target = join(destination, rel);
      if (info.isDirectory()) {
        mkdirSync(target, { recursive: true });
        visit(path);
      } else if (info.isFile()) {
        writeExclusive(target, readFileSync(path), info.mode & 0o111 ? 0o755 : 0o644);
        count += 1;
      }
    }
  };
  visit(sourceRoot);
  return count;
}

function childEnvironment(manifest) {
  const env = {};
  for (const name of ["PATH", "TMPDIR", "LANG", "LC_ALL", "TERM", "USER", "SHELL"]) {
    if (process.env[name]) env[name] = process.env[name];
  }
  return {
    ...env,
    HOME: manifest.paths.home,
    GROK_HOME: manifest.paths.grokHome,
    GROK_MEMORY: "0",
    GROK_SUBAGENTS: "0",
    GROK_MANAGED_MCPS_ENABLED: "false",
    GROK_MANAGED_MCP_GATEWAY_TOOLS_ENABLED: "false",
    GROK_CLAUDE_SKILLS_ENABLED: "false",
    GROK_CURSOR_SKILLS_ENABLED: "false",
    DISABLE_TELEMETRY: "1",
    DO_NOT_TRACK: "1",
    CI: "1",
  };
}

function readProfile(profile) {
  invariant(typeof profile === "string" && profile && isAbsolute(profile), "--profile must be an explicit absolute path");
  const root = realpathSync(profile);
  const manifest = JSON.parse(readFileSync(join(root, "PROFILE.json"), "utf8"));
  invariant(manifest.schemaVersion === profileSchema && manifest.profileRoot === root, "runtime profile identity mismatch");
  invariant(arms[manifest.arm], "runtime arm lock mismatch");
  const expectedPaths = {
    workspace: join(root, "workspace"),
    home: join(root, "home"),
    grokHome: join(root, "home", ".grok"),
  };
  invariant(manifest.paths.workspace === expectedPaths.workspace && manifest.paths.home === expectedPaths.home && manifest.paths.grokHome === expectedPaths.grokHome, "runtime profile path lock mismatch");
  invariant(manifest.expected.model === probeModel && JSON.stringify(manifest.expected.tools) === JSON.stringify(probeTools), "runtime model/tool lock mismatch");
  invariant(JSON.stringify(manifest.expected.skills) === JSON.stringify(["benchmark-media-tools", ...arms[manifest.arm].productSkills].sort()), "runtime expected skill lock mismatch");
  const installedGrok = currentGrokBinary();
  invariant(manifest.grok.binary === installedGrok, "Grok binary path lock mismatch");
  const binaryInfo = lstatSync(installedGrok);
  invariant(binaryInfo.isFile() && !binaryInfo.isSymbolicLink() && sha256(readFileSync(installedGrok)) === manifest.grok.sha256, "Grok binary lock mismatch");
  const actualHome = homedir();
  invariant(readFileSync(manifest.paths.config, "utf8") === profileConfig(manifest.paths.grokHome, actualHome), "runtime config bytes drift");
  invariant(readFileSync(manifest.paths.sandbox, "utf8") === profileSandbox(manifest.paths.workspace, actualHome).text, "sandbox profile bytes drift");
  invariant(readFileSync(manifest.paths.prompt, "utf8") === probePrompt(manifest.arm), "probe prompt bytes drift");
  const neutralSource = join(benchRoot, "fixtures", "four-arm-runtime", "neutral-media-tools", "SKILL.md");
  const neutralTarget = join(manifest.paths.workspace, ".grok", "skills", "benchmark-media-tools", "SKILL.md");
  invariant(sha256(readFileSync(neutralTarget)) === sha256(readFileSync(neutralSource)), "neutral guide differs from frozen source");
  invariant(treeManifest(manifest.paths.workspaceSkillRoots.grok).sha256 === manifest.skillTrees.grok.sha256, "neutral Grok skill tree drift");
  invariant(treeManifest(manifest.paths.workspaceSkillRoots.agents).sha256 === manifest.skillTrees.agents.sha256, "product skill tree drift");
  invariant(sha256(readFileSync(manifest.paths.config)) === manifest.locks.configSha256, "runtime config drift");
  invariant(sha256(readFileSync(manifest.paths.sandbox)) === manifest.locks.sandboxSha256, "sandbox profile drift");
  invariant(sha256(readFileSync(manifest.paths.prompt)) === manifest.locks.promptSha256, "probe prompt drift");
  return manifest;
}

export function prepareProfile({ out, arm, authSource = null }) {
  invariant(arms[arm], `unknown arm: ${arm}`);
  invariant(typeof out === "string" && out && isAbsolute(out), "--out must be an explicit absolute path");
  const requestedProfileRoot = resolve(out);
  invariant(!existsSync(requestedProfileRoot), `refusing to overwrite profile: ${requestedProfileRoot}`);
  invariant(!isInside(repoRoot, requestedProfileRoot), "runtime profile must be outside the repository to prevent parent-rule discovery");
  mkdirSync(requestedProfileRoot, { recursive: false });
  const profileRoot = realpathSync(requestedProfileRoot);
  const actualHome = homedir();
  const workspace = join(profileRoot, "workspace");
  const home = join(profileRoot, "home");
  const grokHome = join(home, ".grok");
  mkdirSync(workspace, { recursive: true });
  mkdirSync(grokHome, { recursive: true });

  const neutralSource = join(benchRoot, "fixtures", "four-arm-runtime", "neutral-media-tools", "SKILL.md");
  const neutralTarget = join(workspace, ".grok", "skills", "benchmark-media-tools", "SKILL.md");
  writeExclusive(neutralTarget, readFileSync(neutralSource));

  const armSpec = arms[arm];
  if (armSpec.bundle) {
    const source = join(benchRoot, "fixtures", "competitor-skills-2.0", armSpec.bundle);
    invariant(copyTree(source, workspace) > 0, `${arm} product bundle is empty`);
  } else {
    mkdirSync(join(workspace, ".agents", "skills"), { recursive: true });
  }

  const config = profileConfig(grokHome, actualHome);
  const configPath = join(grokHome, "config.toml");
  writeExclusive(configPath, config, 0o600);

  const { protectedRoots, deniedRoots, text: sandbox } = profileSandbox(workspace, actualHome);
  const sandboxPath = join(grokHome, "sandbox.toml");
  writeExclusive(sandboxPath, sandbox, 0o600);

  if (authSource) {
    const info = lstatSync(authSource);
    invariant(info.isFile() && !info.isSymbolicLink(), "auth source must be a regular non-symlink file");
    const source = realpathSync(authSource);
    writeExclusive(join(grokHome, "auth.json"), readFileSync(source), 0o600);
  }

  const prompt = probePrompt(arm);
  const promptPath = join(profileRoot, "probe-prompt.txt");
  writeExclusive(promptPath, prompt);

  const grokBin = currentGrokBinary();
  const version = execFileSync(grokBin, ["--version"], { encoding: "utf8" }).trim();
  const manifest = {
    schemaVersion: profileSchema,
    profileRoot,
    arm,
    status: "prepared-provider-zero-inspection-required",
    grok: { binary: grokBin, version, sha256: sha256(readFileSync(grokBin)) },
    paths: {
      workspace,
      home,
      grokHome,
      config: configPath,
      sandbox: sandboxPath,
      prompt: promptPath,
      workspaceSkillRoots: { grok: join(workspace, ".grok", "skills"), agents: join(workspace, ".agents", "skills") },
    },
    expected: {
      model: probeModel,
      tools: probeTools,
      mcpServers: [],
      skills: ["benchmark-media-tools", ...armSpec.productSkills].sort(),
      marker: `RUNTIME_ADMISSION_OK:${arm}`,
    },
    skillTrees: {
      grok: treeManifest(join(workspace, ".grok", "skills")),
      agents: treeManifest(join(workspace, ".agents", "skills")),
    },
    locks: {
      configSha256: sha256(Buffer.from(config)),
      sandboxSha256: sha256(Buffer.from(sandbox)),
      promptSha256: sha256(Buffer.from(prompt)),
      authCopied: Boolean(authSource),
      authSha256: authSource ? sha256(readFileSync(join(grokHome, "auth.json"))) : null,
    },
    isolation: {
      osSandbox: "benchmark-cell extends strict",
      immutableSkillRoots: protectedRoots,
      deniedAmbientRoots: deniedRoots,
      homeAndGrokHomeBothIsolated: true,
      launchAllowed: false,
    },
  };
  jsonExclusive(join(profileRoot, "PROFILE.json"), manifest);
  return manifest;
}

function enabled(items) {
  return (items ?? []).filter((item) => item.disabled !== true && item.compatibilityStatus !== "disabled");
}

function initSurfaceReasons(init, manifest) {
  const reasons = [];
  const tools = Array.isArray(init?.tools) ? init.tools : [];
  const mcpServers = Array.isArray(init?.mcp_servers) ? init.mcp_servers : [];
  const skills = Array.isArray(init?.skills) ? init.skills : [];
  const slashCommands = Array.isArray(init?.slash_commands) ? init.slash_commands : [];
  if (init?.model !== manifest.expected.model) reasons.push(`model mismatch: ${init?.model ?? "missing"}`);
  if (JSON.stringify([...tools].sort()) !== JSON.stringify([...manifest.expected.tools].sort())) reasons.push(`tools mismatch: ${JSON.stringify(init?.tools ?? null)}`);
  if (mcpServers.length) reasons.push(`MCP servers advertised: ${mcpServers.map((item) => item?.name ?? "<invalid>").join(",")}`);
  if (JSON.stringify([...skills].sort()) !== JSON.stringify(manifest.expected.skills)) reasons.push(`skills mismatch: ${JSON.stringify(init?.skills ?? null)}`);
  if (skills.some((name) => typeof name === "string" && name.startsWith("bundled:")) || slashCommands.some((name) => typeof name === "string" && name.startsWith("bundled:"))) reasons.push("bundled skill or command advertised");
  if (mcpServers.some((server) => ambientNames.has(server?.name))) reasons.push("ambient MCP server advertised");
  return reasons;
}

export function inspectProfile(profile) {
  const manifest = readProfile(profile);
  const result = spawnSync(manifest.grok.binary, ["inspect", "--json"], {
    cwd: manifest.paths.workspace,
    env: childEnvironment(manifest),
    encoding: "utf8",
    timeout: 30_000,
  });
  invariant(result.status === 0, `grok inspect failed: ${result.stderr}`);
  const inspection = JSON.parse(result.stdout);
  const discoveredSkills = (inspection.skills ?? []).map((skill) => skill.name).sort();
  const unexpectedSkill = (inspection.skills ?? []).find((skill) => !isInside(manifest.paths.workspace, resolve(skill.source?.path ?? "/")));
  const activeMcps = enabled(inspection.mcpServers);
  const activePlugins = enabled(inspection.plugins);
  const activeHooks = enabled(inspection.hooks);
  const reasons = [];
  if (JSON.stringify(discoveredSkills) !== JSON.stringify(manifest.expected.skills)) reasons.push(`skills mismatch: ${JSON.stringify(discoveredSkills)}`);
  if (unexpectedSkill) reasons.push(`skill source escapes workspace: ${unexpectedSkill.name}`);
  if (activeMcps.length) reasons.push(`active MCP servers discovered: ${activeMcps.map((item) => item.name).join(",")}`);
  if (activePlugins.length) reasons.push(`active plugins discovered: ${activePlugins.map((item) => item.name).join(",")}`);
  if (activeHooks.length) reasons.push(`active hooks discovered: ${activeHooks.length}`);
  if ((inspection.projectInstructions ?? []).length) reasons.push("project instructions discovered");
  const receipt = {
    schemaVersion: profileSchema,
    phase: "provider-zero-inspect",
    status: reasons.length ? "FAIL" : "PASS",
    reasons,
    grokVersion: inspection.grokVersion,
    discoveredSkills,
    activeMcpServers: activeMcps.map((item) => item.name),
    activePlugins: activePlugins.map((item) => item.name),
    activeHooks: activeHooks.length,
    configSources: inspection.configSources,
    externalCompat: inspection.externalCompat,
  };
  writeFileSync(join(manifest.profileRoot, "inspect.raw.json"), result.stdout, { flag: "wx" });
  jsonExclusive(join(manifest.profileRoot, "INSPECTION.json"), receipt);
  invariant(receipt.status === "PASS", `profile inspection rejected: ${reasons.join("; ")}`);
  return receipt;
}

export function probeSeatbelt(profile) {
  const manifest = readProfile(profile);
  invariant(process.platform === "darwin" && existsSync("/usr/bin/sandbox-exec"), "macOS sandbox-exec is required for runtime admission");
  const protectedRoots = [join(manifest.paths.workspace, ".grok"), join(manifest.paths.workspace, ".agents")];
  const protectedSentinels = protectedRoots.map((root) => join(root, `sandbox-sentinel-${randomUUID()}.txt`));
  const writableSentinel = join(manifest.paths.workspace, `sandbox-writable-sentinel-${randomUUID()}.txt`);
  const original = `protected:${randomUUID()}\n`;
  for (const sentinel of protectedSentinels) writeExclusive(sentinel, original);
  const policy = seatbeltPolicy(manifest.paths.workspace);
  const attempt = (path) => spawnSync("/usr/bin/sandbox-exec", ["-p", policy, "/bin/sh", "-c", "printf changed > \"$1\"", "omd-seatbelt-probe", path], {
    cwd: manifest.paths.workspace,
    env: childEnvironment(manifest),
    encoding: "utf8",
    timeout: 10_000,
  });
  let protectedResults;
  let writableResult;
  try {
    protectedResults = protectedSentinels.map(attempt);
    protectedSentinels.forEach((sentinel, index) => {
      invariant(readFileSync(sentinel, "utf8") === original, `Seatbelt allowed mutation of protected runtime skill root: ${protectedRoots[index]}`);
      invariant(protectedResults[index].status !== 0, `Seatbelt protected-root write unexpectedly exited successfully: ${protectedRoots[index]}`);
    });
    writableResult = attempt(writableSentinel);
    invariant(writableResult.status === 0 && readFileSync(writableSentinel, "utf8") === "changed", `Seatbelt blocked the cell workspace write grant: ${writableResult.stderr ?? ""}`);
  } finally {
    for (const sentinel of protectedSentinels) if (existsSync(sentinel)) unlinkSync(sentinel);
    if (existsSync(writableSentinel)) unlinkSync(writableSentinel);
  }
  const receipt = {
    schemaVersion: profileSchema,
    phase: "provider-zero-seatbelt-probe",
    status: "PASS",
    protectedRoots,
    writableRoot: manifest.paths.workspace,
    protectedWrites: protectedResults.map((result, index) => ({
      root: protectedRoots[index],
      exit: result.status,
      signal: result.signal,
      stderrSha256: sha256(Buffer.from(result.stderr ?? "")),
    })),
    writableWriteExit: writableResult.status,
    policySha256: sha256(Buffer.from(policy)),
  };
  jsonExclusive(join(manifest.profileRoot, "SEATBELT.json"), receipt);
  return receipt;
}

export function cleanupAuth(profile, reason = "operator-cleanup") {
  const manifest = readProfile(profile);
  const authPath = join(manifest.paths.grokHome, "auth.json");
  if (existsSync(authPath)) unlinkSync(authPath);
  const receipt = {
    schemaVersion: profileSchema,
    phase: "isolated-auth-cleanup",
    reason,
    authPath,
    removed: !existsSync(authPath),
  };
  const cleanupPath = join(manifest.profileRoot, "AUTH-CLEANUP.json");
  if (existsSync(cleanupPath)) unlinkSync(cleanupPath);
  jsonExclusive(cleanupPath, receipt);
  return receipt;
}

export function auditInit({ profile, stdoutPath, stderrPath }) {
  const manifest = readProfile(profile);
  const inspection = JSON.parse(readFileSync(join(manifest.profileRoot, "INSPECTION.json"), "utf8"));
  invariant(inspection.status === "PASS", "provider-zero inspection must pass before init audit");
  const stdout = readFileSync(stdoutPath, "utf8");
  const stderr = readFileSync(stderrPath, "utf8");
  const lines = stdout.split("\n").filter(Boolean);
  const events = lines.map((line) => {
    try { return JSON.parse(line); } catch { return null; }
  }).filter(Boolean);
  const initEvents = events.filter((event) => event.type === "system" && event.subtype === "init");
  const init = initEvents[0];
  const result = events.findLast((event) => event.type === "result");
  const toolUses = events.flatMap((event) => event.type === "assistant" && Array.isArray(event.message?.content)
    ? event.message.content.filter((block) => block?.type === "tool_use")
    : []);
  const reasons = [];
  if (initEvents.length !== 1) reasons.push(`expected one init event, got ${initEvents.length}`);
  if (init) reasons.push(...initSurfaceReasons(init, manifest));
  if (/unmappable entries|keeping full grok toolset/i.test(stderr)) reasons.push("tool allowlist fallback detected");
  if (/sandbox.*(?:warning|failed|cannot|unsupported)/i.test(stderr)) reasons.push("OS sandbox enforcement warning detected");
  const protectedRoots = manifest.isolation.immutableSkillRoots;
  const usedReadPaths = toolUses.filter((use) => use.name === "read_file")
    .map((use) => resolve(manifest.paths.workspace, use.input?.file_path ?? use.input?.path ?? "<missing>"));
  const requiredReadPaths = [
    join(manifest.paths.workspace, ".grok", "skills", "benchmark-media-tools", "SKILL.md"),
    ...(arms[manifest.arm].primarySkillPath ? [join(manifest.paths.workspace, arms[manifest.arm].primarySkillPath)] : []),
  ];
  for (const required of requiredReadPaths) {
    if (!usedReadPaths.includes(required)) reasons.push(`mandatory skill was not read with read_file: ${relative(manifest.paths.workspace, required)}`);
  }
  for (const use of toolUses) {
    const candidate = use.input?.file_path ?? use.input?.path;
    if (["write", "search_replace"].includes(use.name) && typeof candidate === "string") {
      const absolute = resolve(manifest.paths.workspace, candidate);
      if (protectedRoots.some((root) => isInside(root, absolute))) reasons.push(`editing tool targeted protected skill root: ${use.name}`);
    }
    if (use.name === "image_gen") reasons.push("neutral init probe invoked image_gen");
  }
  const finalText = typeof result?.result === "string" ? result.result.trim() : "";
  if (finalText !== manifest.expected.marker) reasons.push(`marker mismatch: ${JSON.stringify(finalText)}`);
  const receipt = {
    schemaVersion: profileSchema,
    phase: "live-neutral-init-probe",
    status: reasons.length ? "FAIL" : "PASS",
    reasons,
    init: init ? { model: init.model, tools: init.tools, mcpServers: init.mcp_servers, skills: init.skills, slashCommands: init.slash_commands } : null,
    stdoutSha256: sha256(Buffer.from(stdout)),
    stderrSha256: sha256(Buffer.from(stderr)),
    resultMarker: finalText,
    toolUses: toolUses.map((use) => ({ name: use.name, inputPath: use.input?.file_path ?? use.input?.path ?? null })),
    taskLaunchAllowed: reasons.length === 0,
  };
  jsonExclusive(join(manifest.profileRoot, "INIT-AUDIT.json"), receipt);
  invariant(receipt.status === "PASS", `runtime init rejected: ${reasons.join("; ")}`);
  return receipt;
}

export async function runProbe(profile, options = {}) {
  invariant(typeof profile === "string" && profile && isAbsolute(profile), "--profile must be an explicit absolute path");
  const profileRoot = realpathSync(profile);
  const authPath = join(profileRoot, "home", ".grok", "auth.json");
  let manifest;
  try {
    manifest = readProfile(profileRoot);
    const inspection = JSON.parse(readFileSync(join(manifest.profileRoot, "INSPECTION.json"), "utf8"));
    invariant(inspection.status === "PASS", "run inspect and obtain PASS before a provider probe");
    const seatbelt = JSON.parse(readFileSync(join(manifest.profileRoot, "SEATBELT.json"), "utf8"));
    const expectedProtectedRoots = [join(manifest.paths.workspace, ".grok"), join(manifest.paths.workspace, ".agents")];
    invariant(
      seatbelt.status === "PASS"
        && JSON.stringify(seatbelt.protectedRoots) === JSON.stringify(expectedProtectedRoots)
        && seatbelt.protectedWrites?.length === 2
        && seatbelt.protectedWrites.every((item, index) => item.root === expectedProtectedRoots[index] && item.exit !== 0)
        && seatbelt.writableRoot === manifest.paths.workspace
        && seatbelt.writableWriteExit === 0
        && seatbelt.policySha256 === sha256(Buffer.from(seatbeltPolicy(manifest.paths.workspace))),
      "run the provider-zero Seatbelt probe before a provider probe",
    );
    invariant(manifest.locks.authCopied, "provider probe profile has no isolated auth copy");
    invariant(existsSync(authPath) && sha256(readFileSync(authPath)) === manifest.locks.authSha256, "isolated auth copy is missing or drifted");
    const stdoutPath = join(manifest.profileRoot, "probe.stdout.log");
    const stderrPath = join(manifest.profileRoot, "probe.stderr.log");
    const args = [
      "--cwd", manifest.paths.workspace,
      "--model", probeModel,
      "--reasoning-effort", "high",
      "--no-subagents",
      "--disable-web-search",
      "--sandbox", "benchmark-cell",
      "--permission-mode", "dontAsk",
      "--max-turns", "3",
      "--tools", probeTools.join(","),
      "--output-format", "streaming-messages-json",
      "--prompt-file", manifest.paths.prompt,
    ];
    const child = spawn(options.binaryOverride ?? manifest.grok.binary, args, {
      cwd: manifest.paths.workspace,
      env: childEnvironment(manifest),
      detached: true,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    let fatalAllowlistFallback = false;
    let fatalInitMismatch = null;
    let initAccepted = false;
    let pendingStdout = "";
    let timedOut = false;
    let killTimer = null;
    const terminate = () => {
      if (killTimer) return;
      try { process.kill(-child.pid, "SIGTERM"); } catch { try { child.kill("SIGTERM"); } catch {} }
      killTimer = setTimeout(() => {
        try { process.kill(-child.pid, "SIGKILL"); } catch { try { child.kill("SIGKILL"); } catch {} }
      }, 2_000);
      killTimer.unref();
    };
    child.stdout.on("data", (chunk) => {
      const text = chunk.toString();
      stdout += text;
      pendingStdout += text;
      while (pendingStdout.includes("\n")) {
        const boundary = pendingStdout.indexOf("\n");
        const line = pendingStdout.slice(0, boundary).trim();
        pendingStdout = pendingStdout.slice(boundary + 1);
        if (!line.startsWith("{")) continue;
        let event;
        try { event = JSON.parse(line); } catch { continue; }
        if (event.type === "system" && event.subtype === "init" && !initAccepted && !fatalInitMismatch) {
          const mismatches = initSurfaceReasons(event, manifest);
          if (mismatches.length) {
            fatalInitMismatch = mismatches;
            terminate();
          } else {
            initAccepted = true;
          }
        } else if (event.type === "assistant" && !initAccepted && !fatalInitMismatch) {
          fatalInitMismatch = ["assistant event arrived before an accepted init surface"];
          terminate();
        }
      }
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
      if (!fatalAllowlistFallback && /unmappable entries|keeping full grok toolset/i.test(stderr)) {
        fatalAllowlistFallback = true;
        terminate();
      }
    });
    const timeout = setTimeout(() => {
      timedOut = true;
      terminate();
    }, 180_000);
    const exit = await new Promise((done) => {
      child.on("error", (error) => done({ code: null, signal: null, error }));
      child.on("close", (code, signal) => done({ code, signal, error: null }));
    });
    clearTimeout(timeout);
    if (killTimer) clearTimeout(killTimer);
    writeExclusive(stdoutPath, stdout);
    writeExclusive(stderrPath, stderr);
    if (fatalAllowlistFallback) {
      try { auditInit({ profile: manifest.profileRoot, stdoutPath, stderrPath }); } catch {}
      throw new Error(`Grok tool allowlist fallback detected and process group terminated: see ${stderrPath}`);
    }
    if (fatalInitMismatch) {
      try { auditInit({ profile: manifest.profileRoot, stdoutPath, stderrPath }); } catch {}
      throw new Error(`Grok init surface mismatch and process group terminated: ${fatalInitMismatch.join("; ")}`);
    }
    invariant(!timedOut, `Grok probe timed out and process group was terminated: see ${stderrPath}`);
    invariant(!exit.error, `Grok probe spawn failed: ${exit.error?.message}`);
    invariant(exit.code === 0, `Grok probe exited ${exit.code ?? exit.signal}: see ${stderrPath}`);
    return auditInit({ profile: manifest.profileRoot, stdoutPath, stderrPath });
  } finally {
    if (existsSync(authPath)) unlinkSync(authPath);
    const cleanupPath = join(profileRoot, "AUTH-CLEANUP.json");
    if (existsSync(cleanupPath)) unlinkSync(cleanupPath);
    jsonExclusive(cleanupPath, {
      schemaVersion: manifest?.schemaVersion ?? profileSchema,
      phase: "isolated-auth-cleanup",
      reason: manifest ? "probe-finally" : "invalid-profile-probe-finally",
      authPath,
      removed: !existsSync(authPath),
    });
  }
}

function usage() {
  return "usage: grok46-runtime-admission.mjs prepare --out <absolute-new-root> --arm <no-skill|uiux-pro-max|hallmark|omd> [--auth-source <auth.json>] | inspect --profile <root> | os-probe --profile <root> | cleanup-auth --profile <root> [--reason <text>] | probe --profile <root> | audit-init --profile <root> --stdout <path> --stderr <path>";
}

async function main() {
  const [command] = process.argv.slice(2);
  const args = parseArgs(process.argv.slice(3));
  let output;
  if (command === "prepare") output = prepareProfile({ out: args.get("out"), arm: args.get("arm"), authSource: args.get("auth-source") ?? null });
  else if (command === "inspect") output = inspectProfile(args.get("profile"));
  else if (command === "os-probe") output = probeSeatbelt(args.get("profile"));
  else if (command === "cleanup-auth") output = cleanupAuth(args.get("profile"), args.get("reason") ?? "operator-cleanup");
  else if (command === "probe") output = await runProbe(args.get("profile"));
  else if (command === "audit-init") output = auditInit({ profile: args.get("profile"), stdoutPath: args.get("stdout"), stderrPath: args.get("stderr") });
  else throw new Error(usage());
  process.stdout.write(`${JSON.stringify(output, null, 2)}\n`);
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}
