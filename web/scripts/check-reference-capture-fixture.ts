#!/usr/bin/env node
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { evaluateEvidenceFixture, type EvidenceFixtureExpectation } from "../src/lib/references/evidence-evaluation.ts";
import type { ReferenceEvidenceBundle } from "../src/lib/references/evidence.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = resolve(__dirname, "..");
const ROOT = resolve(WEB_ROOT, "..");
const fixtureRoot = join(WEB_ROOT, "__tests__", "fixtures", "reference-capture");
const expectedPath = join(fixtureRoot, "expected.json");
const output = resolve(ROOT, "artifacts", "reference-evidence", "fixture.json");
const reportOutput = resolve(ROOT, "artifacts", "reference-evidence", "fixture-report.json");
const expected = JSON.parse(readFileSync(expectedPath, "utf8")) as EvidenceFixtureExpectation & {
  interactions: { count: number; kinds: string[] };
  thresholds: { precision: number; recall: number; f1: number };
};

const contentTypes: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".woff2": "font/woff2",
};
const server = createServer((request, response) => {
  const pathname = new URL(request.url ?? "/", "http://fixture.test").pathname;
  const relative = pathname === "/" ? "index.html" : pathname.replace(/^\//, "");
  const path = resolve(fixtureRoot, relative);
  if (!path.startsWith(fixtureRoot) || relative === "fixture-declared.woff2") {
    response.writeHead(404).end();
    return;
  }
  try {
    const body = readFileSync(path);
    response.writeHead(200, { "content-type": contentTypes[extname(path)] ?? "application/octet-stream" });
    response.end(body);
  } catch {
    response.writeHead(404).end();
  }
});

await new Promise<void>((resolveListen, reject) => {
  server.once("error", reject);
  server.listen(0, "127.0.0.1", () => resolveListen());
});
const address = server.address();
if (!address || typeof address === "string") throw new Error("fixture server did not expose a TCP port");
const url = `http://127.0.0.1:${address.port}/`;

try {
  await new Promise<void>((resolveChild, reject) => {
    const child = spawn(process.execPath, [
      "--no-warnings",
      "--experimental-strip-types",
      join(WEB_ROOT, "scripts", "capture-reference-evidence.ts"),
      url,
      "--id", "reference-capture-fixture",
      "--max-routes", "1",
      "--out", output,
    ], { cwd: WEB_ROOT, stdio: "inherit" });
    child.once("error", reject);
    child.once("exit", (code) => code === 0 ? resolveChild() : reject(new Error(`capture fixture exited ${code}`)));
  });
} finally {
  await new Promise<void>((resolveClose) => server.close(() => resolveClose()));
}

const bundle = JSON.parse(readFileSync(output, "utf8")) as ReferenceEvidenceBundle;
const report = evaluateEvidenceFixture(bundle, expected);
mkdirSync(dirname(reportOutput), { recursive: true });
writeFileSync(reportOutput, `${JSON.stringify({ thresholds: expected.thresholds, ...report }, null, 2)}\n`, "utf8");
console.log(`[capture-fixture] precision ${report.overall.precision} · recall ${report.overall.recall} · f1 ${report.overall.f1}`);
console.log(`[capture-fixture] ${bundle.coverage.interactionCount} interactions · ${bundle.coverage.interactionKinds} kinds · report ${reportOutput}`);
const interactionKinds = [...new Set(bundle.interactions.map((interaction) => interaction.kind))].sort();
const expectedInteractionKinds = [...expected.interactions.kinds].sort();
if (
  bundle.coverage.interactionCount !== expected.interactions.count
  || JSON.stringify(interactionKinds) !== JSON.stringify(expectedInteractionKinds)
) {
  console.error(`[capture-fixture] interaction regression: expected ${expected.interactions.count} ${expectedInteractionKinds.join(",")}; observed ${bundle.coverage.interactionCount} ${interactionKinds.join(",")}`);
  process.exitCode = 1;
}
if (
  report.overall.precision < expected.thresholds.precision
  || report.overall.recall < expected.thresholds.recall
  || report.overall.f1 < expected.thresholds.f1
) {
  console.error(`[capture-fixture] missing: ${report.missing.join(", ") || "none"}`);
  console.error(`[capture-fixture] unexpected: ${report.unexpected.join(", ") || "none"}`);
  process.exitCode = 1;
}
