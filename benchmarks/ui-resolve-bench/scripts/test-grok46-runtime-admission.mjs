#!/usr/bin/env node
import test from "node:test";
import assert from "node:assert/strict";
import { chmodSync, existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { auditInit, inspectProfile, prepareProfile, probeSeatbelt, runProbe } from "./grok46-runtime-admission.mjs";

function makeProfile(arm = "no-skill", inspect = true) {
  const parent = mkdtempSync(join(tmpdir(), "omd-grok46-profile-test-"));
  const root = join(parent, "profile");
  const manifest = prepareProfile({ out: root, arm });
  if (inspect) inspectProfile(root);
  return manifest;
}

function syntheticLogs(manifest, overrides = {}) {
  const stdoutPath = join(manifest.profileRoot, `synthetic-${Math.random()}.stdout.log`);
  const stderrPath = join(manifest.profileRoot, `synthetic-${Math.random()}.stderr.log`);
  const reads = [
    join(manifest.paths.workspace, ".grok", "skills", "benchmark-media-tools", "SKILL.md"),
    ...(manifest.arm === "no-skill" ? [] : [join(manifest.paths.workspace, {
      "uiux-pro-max": ".agents/skills/ui-ux-pro-max/SKILL.md",
      hallmark: ".agents/skills/hallmark/SKILL.md",
      omd: ".agents/skills/omd-autopilot/SKILL.md",
    }[manifest.arm])]),
  ];
  const events = [
    {
      type: "system",
      subtype: "init",
      model: manifest.expected.model,
      tools: manifest.expected.tools,
      mcp_servers: [],
      skills: manifest.expected.skills,
      slash_commands: [],
      ...(overrides.init ?? {}),
    },
    {
      type: "assistant",
      message: {
        content: (overrides.toolUses ?? reads.map((path, index) => ({ type: "tool_use", id: `read-${index}`, name: "read_file", input: { file_path: path } }))),
      },
    },
    { type: "result", result: overrides.marker ?? manifest.expected.marker },
  ];
  writeFileSync(stdoutPath, `${events.map(JSON.stringify).join("\n")}\n`);
  writeFileSync(stderrPath, overrides.stderr ?? "");
  return { stdoutPath, stderrPath };
}

test("provider-zero inspect discovers only neutral infrastructure plus the frozen product skills", () => {
  const expected = {
    "no-skill": ["benchmark-media-tools"],
    "uiux-pro-max": ["banner-design", "benchmark-media-tools", "brand", "design", "design-system", "slides", "ui-styling", "ui-ux-pro-max"],
    hallmark: ["benchmark-media-tools", "hallmark"],
    omd: ["benchmark-media-tools", "omd-autopilot"],
  };
  for (const arm of Object.keys(expected)) {
    const manifest = makeProfile(arm, false);
    const receipt = inspectProfile(manifest.profileRoot);
    assert.equal(receipt.status, "PASS");
    assert.deepEqual(receipt.discoveredSkills, expected[arm]);
    assert.deepEqual(receipt.activeMcpServers, []);
    assert.deepEqual(receipt.activePlugins, []);
    assert.equal(receipt.activeHooks, 0);
  }
});

test("valid init requires exact tools, no MCP, exact skills, read_file evidence, and marker", () => {
  const manifest = makeProfile("hallmark");
  const receipt = auditInit({ profile: manifest.profileRoot, ...syntheticLogs(manifest) });
  assert.equal(receipt.status, "PASS");
  assert.equal(receipt.taskLaunchAllowed, true);
  assert.deepEqual(receipt.toolUses.map((item) => item.name), ["read_file", "read_file"]);
});

test("unmappable tool fallback fails closed", () => {
  const manifest = makeProfile();
  const logs = syntheticLogs(manifest, { stderr: "WARN tools allowlist had unmappable entries; keeping full grok toolset" });
  assert.throws(() => auditInit({ profile: manifest.profileRoot, ...logs }), /tool allowlist fallback/);
  assert.equal(JSON.parse(readFileSync(join(manifest.profileRoot, "INIT-AUDIT.json"))).taskLaunchAllowed, false);
});

test("ambient MCP, bundled skill, and extra tools fail closed", () => {
  const manifest = makeProfile();
  const logs = syntheticLogs(manifest, { init: { tools: [...manifest.expected.tools, "search_tool", "use_tool"], mcp_servers: [{ name: "notion" }], skills: [...manifest.expected.skills, "bundled:imagine"] } });
  assert.throws(() => auditInit({ profile: manifest.profileRoot, ...logs }), /tools mismatch/);
  const reasons = JSON.parse(readFileSync(join(manifest.profileRoot, "INIT-AUDIT.json"))).reasons.join("\n");
  assert.match(reasons, /MCP servers advertised/);
  assert.match(reasons, /bundled skill/);
});

test("write cannot substitute for mandatory skill reads", () => {
  const manifest = makeProfile();
  const protectedPath = join(manifest.paths.workspace, ".grok", "skills", "benchmark-media-tools", "SKILL.md");
  const logs = syntheticLogs(manifest, { toolUses: [{ type: "tool_use", name: "write", input: { file_path: protectedPath, content: "x" } }] });
  assert.throws(() => auditInit({ profile: manifest.profileRoot, ...logs }), /mandatory skill was not read/);
  const reasons = JSON.parse(readFileSync(join(manifest.profileRoot, "INIT-AUDIT.json"))).reasons.join("\n");
  assert.match(reasons, /editing tool targeted protected skill root/);
});

test("skill bytes cannot change between inspection and init audit", () => {
  const manifest = makeProfile();
  const skillPath = join(manifest.paths.workspace, ".grok", "skills", "benchmark-media-tools", "SKILL.md");
  writeFileSync(skillPath, "tampered");
  const logs = syntheticLogs(manifest);
  assert.throws(() => auditInit({ profile: manifest.profileRoot, ...logs }), /neutral guide differs|neutral Grok skill tree drift/);
});

test("profile rejects binary, launch-tool, and neutral-guide drift", () => {
  for (const mutation of ["binary", "tools", "neutral"]) {
    const manifest = makeProfile("no-skill", false);
    if (mutation === "binary") {
      const path = join(manifest.profileRoot, "PROFILE.json");
      const changed = JSON.parse(readFileSync(path));
      changed.grok.binary = "/bin/echo";
      writeFileSync(path, `${JSON.stringify(changed, null, 2)}\n`);
      assert.throws(() => inspectProfile(manifest.profileRoot), /binary path lock mismatch/);
    } else if (mutation === "tools") {
      const path = join(manifest.profileRoot, "PROFILE.json");
      const changed = JSON.parse(readFileSync(path));
      changed.expected.tools.push("search_tool");
      writeFileSync(path, `${JSON.stringify(changed, null, 2)}\n`);
      assert.throws(() => inspectProfile(manifest.profileRoot), /model\/tool lock mismatch/);
    } else {
      const path = join(manifest.paths.workspace, ".grok", "skills", "benchmark-media-tools", "SKILL.md");
      writeFileSync(path, "changed neutral guide");
      assert.throws(() => inspectProfile(manifest.profileRoot), /neutral guide differs/);
    }
  }
});

test("invalid profile still removes the isolated auth copy before provider launch", async () => {
  const parent = mkdtempSync(join(tmpdir(), "omd-grok46-invalid-profile-cleanup-test-"));
  const auth = join(parent, "auth.json");
  writeFileSync(auth, "{}");
  const manifest = prepareProfile({ out: join(parent, "profile"), arm: "no-skill", authSource: auth });
  const path = join(manifest.profileRoot, "PROFILE.json");
  const changed = JSON.parse(readFileSync(path));
  changed.expected.tools.push("search_tool");
  writeFileSync(path, `${JSON.stringify(changed, null, 2)}\n`);
  await assert.rejects(() => runProbe(manifest.profileRoot), /model\/tool lock mismatch/);
  assert.equal(existsSync(join(manifest.paths.grokHome, "auth.json")), false);
  assert.equal(JSON.parse(readFileSync(join(manifest.profileRoot, "AUTH-CLEANUP.json"))).removed, true);
});

test("provider-zero Seatbelt denies nested protected writes while preserving workspace writes", () => {
  const manifest = makeProfile("no-skill");
  const receipt = probeSeatbelt(manifest.profileRoot);
  assert.equal(receipt.status, "PASS");
  assert.deepEqual(receipt.protectedWrites.map((item) => item.root), [join(manifest.paths.workspace, ".grok"), join(manifest.paths.workspace, ".agents")]);
  assert.ok(receipt.protectedWrites.every((item) => item.exit !== 0));
  assert.equal(receipt.writableWriteExit, 0);
});

test("probe launcher terminates immediately when Grok falls back to the full toolset", async () => {
  const parent = mkdtempSync(join(tmpdir(), "omd-grok46-fallback-test-"));
  const auth = join(parent, "auth.json");
  writeFileSync(auth, "{}");
  const manifest = prepareProfile({ out: join(parent, "profile"), arm: "no-skill", authSource: auth });
  inspectProfile(manifest.profileRoot);
  probeSeatbelt(manifest.profileRoot);
  const fake = join(parent, "fake-grok.sh");
  writeFileSync(fake, "#!/bin/sh\necho 'WARN tools allowlist had unmappable entries; keeping full grok toolset' >&2\nsleep 30\n");
  chmodSync(fake, 0o755);
  const started = Date.now();
  await assert.rejects(() => runProbe(manifest.profileRoot, { binaryOverride: fake }), /process group terminated/);
  assert.ok(Date.now() - started < 5_000, "fallback launcher did not terminate promptly");
  assert.equal(existsSync(join(manifest.paths.grokHome, "auth.json")), false);
  assert.equal(JSON.parse(readFileSync(join(manifest.profileRoot, "AUTH-CLEANUP.json"))).removed, true);
});

test("probe launcher terminates before tool use when first init advertises an unexpected surface", async () => {
  const parent = mkdtempSync(join(tmpdir(), "omd-grok46-init-kill-test-"));
  const auth = join(parent, "auth.json");
  writeFileSync(auth, "{}");
  const manifest = prepareProfile({ out: join(parent, "profile"), arm: "no-skill", authSource: auth });
  inspectProfile(manifest.profileRoot);
  probeSeatbelt(manifest.profileRoot);
  const fake = join(parent, "fake-grok.sh");
  const init = JSON.stringify({ type: "system", subtype: "init", model: "grok-4.6", tools: ["read_file", "image_gen", "write", "search_tool"], mcp_servers: [{ name: "notion" }], skills: ["benchmark-media-tools"], slash_commands: [] });
  writeFileSync(fake, `#!/bin/sh\nprintf '%s\\n' '${init}'\nsleep 30\n`);
  chmodSync(fake, 0o755);
  const started = Date.now();
  await assert.rejects(() => runProbe(manifest.profileRoot, { binaryOverride: fake }), /init surface mismatch/);
  assert.ok(Date.now() - started < 5_000, "init mismatch launcher did not terminate promptly");
  assert.equal(existsSync(join(manifest.paths.grokHome, "auth.json")), false);
});

test("valid probe path removes isolated auth after exact init and mandatory read evidence", async () => {
  const parent = mkdtempSync(join(tmpdir(), "omd-grok46-valid-probe-test-"));
  const auth = join(parent, "auth.json");
  writeFileSync(auth, "{}");
  const manifest = prepareProfile({ out: join(parent, "profile"), arm: "no-skill", authSource: auth });
  inspectProfile(manifest.profileRoot);
  probeSeatbelt(manifest.profileRoot);
  const fake = join(parent, "fake-grok.sh");
  const init = { type: "system", subtype: "init", model: manifest.expected.model, tools: manifest.expected.tools, mcp_servers: [], skills: manifest.expected.skills, slash_commands: [] };
  const assistant = { type: "assistant", message: { content: [{ type: "tool_use", name: "read_file", input: { file_path: join(manifest.paths.workspace, ".grok", "skills", "benchmark-media-tools", "SKILL.md") } }] } };
  const result = { type: "result", result: manifest.expected.marker };
  writeFileSync(fake, `#!/bin/sh\nprintf '%s\\n' '${JSON.stringify(init)}' '${JSON.stringify(assistant)}' '${JSON.stringify(result)}'\n`);
  chmodSync(fake, 0o755);
  const receipt = await runProbe(manifest.profileRoot, { binaryOverride: fake });
  assert.equal(receipt.status, "PASS");
  assert.equal(existsSync(join(manifest.paths.grokHome, "auth.json")), false);
  assert.equal(JSON.parse(readFileSync(join(manifest.profileRoot, "AUTH-CLEANUP.json"))).removed, true);
});
