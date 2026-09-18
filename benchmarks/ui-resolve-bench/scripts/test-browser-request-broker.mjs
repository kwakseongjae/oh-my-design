#!/usr/bin/env node
import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createHash } from "node:crypto";
import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { BrowserRequestBroker } from "./browser-request-broker.mjs";

const brokerCli = fileURLToPath(new URL("./browser-request-broker.mjs", import.meta.url));

const cells = ["a", "b", "c", "d"].map((id) => ({ cellId: `cell-${id}`, ownerId: `worker-${id}` }));

function setup(options = {}) {
  const root = join(mkdtempSync(join(tmpdir(), "omd-browser-broker-")), "broker");
  const broker = new BrowserRequestBroker(root, options);
  broker.initialize(cells);
  return { root, broker };
}

function request(index, extra = {}) {
  const letter = ["a", "b", "c", "d"][index];
  return {
    schemaVersion: "0.1",
    transactionId: `tx-${letter}`,
    cellId: `cell-${letter}`,
    ownerId: `worker-${letter}`,
    operation: "inspect",
    payload: { url: `https://example.invalid/${letter}` },
    expectedDownloads: [],
    ...extra,
  };
}

test("four concurrent requests are leased in FIFO submission order", async () => {
  const { broker } = setup();
  const receipts = await Promise.all([0, 1, 2, 3].map((index) => broker.submit(request(index))));
  assert.deepEqual(receipts.map((item) => item.queuePosition), [1, 2, 3, 4]);
  for (const expected of ["tx-a", "tx-b", "tx-c", "tx-d"]) {
    const lease = await broker.leaseNext("root-cua");
    assert.equal(lease.transactionId, expected);
    await broker.complete({
      transactionId: lease.transactionId,
      cellId: lease.cellId,
      ownerId: lease.ownerId,
      operatorId: lease.operatorId,
      leaseToken: lease.leaseToken,
      result: { status: "completed", response: {}, downloads: [] },
    });
  }
  assert.equal((await broker.leaseNext("root-cua")).status, "idle");
});

test("active cancellation quarantines the owner and blocks reassignment until exact reconciliation", async () => {
  const { broker } = setup();
  await broker.submit(request(0));
  await broker.submit(request(1));
  const lease = await broker.leaseNext("root-cua");
  const cancelled = await broker.cancel({ transactionId: "tx-a", cellId: "cell-a", ownerId: "worker-a", reason: "user cancelled after timeout warning" });
  assert.equal(cancelled.status, "quarantined");
  assert.equal((await broker.leaseNext("root-cua")).status, "quarantined");
  await assert.rejects(() => broker.reconcile({ ...lease, leaseToken: "wrong", resolution: "terminated" }), /leaseToken mismatch/);
  const reconciled = await broker.reconcile({ ...lease, resolution: "terminated" });
  assert.equal(reconciled.status, "cancelled");
  assert.equal((await broker.leaseNext("root-cua")).transactionId, "tx-b");
});

test("active timeout remains quarantined and cannot consume a late result before reconciliation", async () => {
  const { broker } = setup();
  await broker.submit(request(0));
  const lease = await broker.leaseNext("root-cua");
  assert.equal((await broker.timeout({ transactionId: "tx-a", cellId: "cell-a", ownerId: "worker-a" })).status, "quarantined");
  await assert.rejects(() => broker.complete({ ...lease, result: { status: "completed", response: {}, downloads: [] } }), /requires reconciliation/);
  const result = await broker.reconcile({ ...lease, resolution: "terminated" });
  assert.equal(result.status, "timed_out");
});

test("a result for the wrong cell or owner is rejected without releasing the lease", async () => {
  const { broker } = setup();
  await broker.submit(request(0));
  const lease = await broker.leaseNext("root-cua");
  await assert.rejects(() => broker.complete({ ...lease, cellId: "cell-b", result: { status: "completed", response: {}, downloads: [] } }), /cellId mismatch/);
  assert.equal((await broker.poll({ transactionId: "tx-a", cellId: "cell-a", ownerId: "worker-a" })).status, "active");
});

test("polling is capability-scoped and never reveals another cell request or lease", async () => {
  const { broker } = setup();
  await broker.submit(request(0));
  await broker.submit(request(1));
  const lease = await broker.leaseNext("root-cua");
  const own = await broker.poll({ transactionId: "tx-a", cellId: "cell-a", ownerId: "worker-a" });
  assert.deepEqual(Object.keys(own).sort(), ["browserActiveMs", "queueBlockedMs", "schemaVersion", "status", "transactionId"]);
  assert.equal(own.status, "active");
  await assert.rejects(
    () => broker.poll({ transactionId: "tx-a", cellId: "cell-b", ownerId: "worker-b" }),
    /transaction ownership mismatch/,
  );
  const waiting = await broker.poll({ transactionId: "tx-b", cellId: "cell-b", ownerId: "worker-b" });
  assert.equal(waiting.status, "queued");
  assert.equal("request" in waiting, false);
  assert.equal("operatorId" in waiting, false);
  await broker.complete({ ...lease, result: { status: "completed", response: {}, downloads: [] } });
});

test("download admission is confined to the leased cell and records bytes and SHA-256", async () => {
  const { root, broker } = setup();
  await broker.submit(request(0, { expectedDownloads: [{ id: "hero", fileName: "hero.png", required: true }] }));
  const lease = await broker.leaseNext("root-cua");
  writeFileSync(join(root, "cells", "cell-b", "downloads", "hero.png"), "wrong-cell");
  await assert.rejects(() => broker.complete({ ...lease, result: { status: "completed", response: {}, downloads: [{ id: "hero", relativePath: "../cell-b/downloads/hero.png" }] } }), /owned name/);
  const bytes = Buffer.from("cell-a-owned-download");
  writeFileSync(join(lease.downloadDirectory, "hero.png"), bytes);
  const receipt = await broker.complete({ ...lease, result: { status: "completed", response: { service: "fixture" }, downloads: [{ id: "hero", relativePath: "hero.png" }] } });
  assert.equal(receipt.downloads[0].sha256, createHash("sha256").update(bytes).digest("hex"));
  assert.equal(receipt.downloads[0].bytes, bytes.length);
  assert.equal(JSON.parse(readFileSync(join(root, "cells", "cell-a", "results", "tx-a.json"))).cellId, "cell-a");
});

test("confirmed terminal service failure may omit required output and releases the lease", async () => {
  const { broker } = setup();
  await broker.submit(request(0, { expectedDownloads: [{ id: "hero", fileName: "hero.png", required: true }] }));
  await broker.submit(request(1, { expectedDownloads: [
    { id: "hero", fileName: "hero.png", required: true },
    { id: "clip", fileName: "clip.mp4", required: true },
  ] }));
  const lease = await broker.leaseNext("root-cua");
  const receipt = await broker.complete({
    ...lease,
    result: { status: "failed", response: { serviceError: "generation rejected" }, downloads: [] },
  });
  assert.equal(receipt.status, "failed");
  assert.deepEqual(receipt.downloads, []);
  const nextLease = await broker.leaseNext("root-cua");
  assert.equal(nextLease.transactionId, "tx-b");
  const partialBytes = Buffer.from("retained-partial-output");
  writeFileSync(join(nextLease.downloadDirectory, "hero.png"), partialBytes);
  const partial = await broker.complete({
    ...nextLease,
    result: { status: "failed", response: { serviceError: "video failed after poster" }, downloads: [{ id: "hero", relativePath: "hero.png" }] },
  });
  assert.equal(partial.downloads.length, 1);
  assert.equal(partial.downloads[0].sha256, createHash("sha256").update(partialBytes).digest("hex"));
  assert.equal((await broker.leaseNext("root-cua")).status, "idle");
});

test("same filename requires a transaction-owned write and preserves earlier artifacts", async () => {
  const { root, broker } = setup();
  const expectedDownloads = [{ id: "hero", fileName: "hero.png", required: true }];
  await broker.submit(request(0, { expectedDownloads }));
  const firstLease = await broker.leaseNext("root-cua");
  const repeatedBytes = Buffer.from("legitimate-identical-output");
  writeFileSync(join(firstLease.downloadDirectory, "hero.png"), repeatedBytes);
  const first = await broker.complete({ ...firstLease, result: { status: "completed", response: {}, downloads: [{ id: "hero", relativePath: "hero.png" }] } });

  await broker.submit(request(0, { transactionId: "tx-a-second", expectedDownloads }));
  const secondLease = await broker.leaseNext("root-cua");
  assert.notEqual(secondLease.downloadDirectory, firstLease.downloadDirectory);
  await assert.rejects(
    () => broker.complete({ ...secondLease, result: { status: "completed", response: {}, downloads: [{ id: "hero", relativePath: "hero.png" }] } }),
    /download is missing/,
  );
  writeFileSync(join(secondLease.downloadDirectory, "hero.png"), repeatedBytes);
  const second = await broker.complete({ ...secondLease, result: { status: "completed", response: {}, downloads: [{ id: "hero", relativePath: "hero.png" }] } });

  assert.equal(second.downloads[0].sha256, first.downloads[0].sha256);
  assert.equal(readFileSync(join(firstLease.downloadDirectory, "hero.png"), "utf8"), repeatedBytes.toString());
  assert.ok(existsSync(join(root, "cells", "cell-a", "results", "tx-a.json")));
  assert.ok(existsSync(join(root, "cells", "cell-a", "results", "tx-a-second.json")));
});

test("queued timeout is timed_out while cancellation stays cancelled regardless of reason text", async () => {
  const { broker } = setup();
  await broker.submit(request(0));
  await broker.submit(request(1));
  assert.equal((await broker.timeout({ transactionId: "tx-a", cellId: "cell-a", ownerId: "worker-a" })).status, "timed_out");
  assert.equal((await broker.cancel({ transactionId: "tx-b", cellId: "cell-b", ownerId: "worker-b", reason: "timeout-like user reason" })).status, "cancelled");
});

test("malformed completion emits no success event or receipt before a corrected retry", async () => {
  const { root, broker } = setup();
  await broker.submit(request(0));
  const lease = await broker.leaseNext("root-cua");
  await assert.rejects(
    () => broker.complete({ ...lease, result: { status: "completed", response: [], downloads: [] } }),
    /result response must be an object/,
  );
  let events = readFileSync(join(root, "events.jsonl"), "utf8").trim().split("\n").map(JSON.parse);
  assert.deepEqual(events.map((event) => event.type), ["request-queued", "lease-acquired"]);
  assert.equal(existsSync(join(root, "cells", "cell-a", "results", "tx-a.json")), false);

  await broker.complete({ ...lease, result: { status: "completed", response: {}, downloads: [] } });
  events = readFileSync(join(root, "events.jsonl"), "utf8").trim().split("\n").map(JSON.parse);
  assert.deepEqual(events.map((event) => event.sequence), [1, 2, 3]);
  assert.deepEqual(events.map((event) => event.type), ["request-queued", "lease-acquired", "result-completed"]);
});

test("timing separates FIFO wait from browser-active service time", async () => {
  let now = 100;
  const { broker } = setup({ clock: () => now });
  await broker.submit(request(0));
  now = 130;
  const lease = await broker.leaseNext("root-cua");
  now = 180;
  const receipt = await broker.complete({ ...lease, result: { status: "completed", response: {}, downloads: [] } });
  assert.equal(receipt.queueBlockedMs, 30);
  assert.equal(receipt.browserActiveMs, 50);
  const events = readFileSync(join(broker.root, "events.jsonl"), "utf8").trim().split("\n").map(JSON.parse);
  assert.deepEqual(events.map((event) => event.ownerId), ["worker-a", "root-cua", "root-cua"]);
  assert.ok(events.every((event, index) => index === 0 || event.atMonotonicMs > events[index - 1].atMonotonicMs));
});

test("generation prompt hash binds the exact prompt passed to the operator", async () => {
  const { broker } = setup();
  const prompt = "A quiet paper sculpture under one north-facing window.";
  const promptSha256 = createHash("sha256").update(prompt).digest("hex");
  const receipt = await broker.submit(request(0, { operation: "generate-image", payload: { prompt }, promptSha256 }));
  assert.equal(receipt.status, "queued");
  await assert.rejects(() => broker.submit(request(1, { operation: "generate-image", payload: { prompt }, promptSha256: "0".repeat(64) })), /does not match/);
});

test("CLI initializes, submits, leases, and keeps waiting request details private", () => {
  const parent = mkdtempSync(join(tmpdir(), "omd-browser-broker-cli-"));
  const root = join(parent, "broker");
  const cellsPath = join(parent, "cells.json");
  const requestPath = join(parent, "request.json");
  writeFileSync(cellsPath, JSON.stringify(cells));
  writeFileSync(requestPath, JSON.stringify(request(0)));
  const run = (...args) => {
    const result = spawnSync(process.execPath, [brokerCli, ...args], { encoding: "utf8" });
    assert.equal(result.status, 0, result.stderr);
    return JSON.parse(result.stdout);
  };
  assert.equal(run("init", "--root", root, "--cells", cellsPath).status, "ready");
  const queued = run("submit", "--root", root, "--request", requestPath);
  assert.deepEqual(Object.keys(queued).sort(), ["queuePosition", "schemaVersion", "status", "transactionId"]);
  assert.equal(queued.status, "queued");
  const leased = run("next", "--root", root, "--operator", "root-cua");
  assert.equal(leased.request.payload.url, "https://example.invalid/a");
  assert.equal(leased.operatorId, "root-cua");
});

test("four independent CLI workers contend through one lock and the operator still leases serially in recorded FIFO order", async () => {
  const parent = mkdtempSync(join(tmpdir(), "omd-browser-broker-processes-"));
  const root = join(parent, "broker");
  const cellsPath = join(parent, "cells.json");
  writeFileSync(cellsPath, JSON.stringify(cells));
  const initialized = spawnSync(process.execPath, [brokerCli, "init", "--root", root, "--cells", cellsPath], { encoding: "utf8" });
  assert.equal(initialized.status, 0, initialized.stderr);
  const requestPaths = cells.map((_, index) => {
    const path = join(parent, `request-${index}.json`);
    writeFileSync(path, JSON.stringify(request(index)));
    return path;
  });
  const submissions = await Promise.all(requestPaths.map((path) => new Promise((resolveChild, rejectChild) => {
    const child = spawn(process.execPath, [brokerCli, "submit", "--root", root, "--request", path], { stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => { stdout += chunk; });
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("error", rejectChild);
    child.on("close", (code) => code === 0 ? resolveChild(JSON.parse(stdout)) : rejectChild(new Error(stderr)));
  })));
  assert.deepEqual(submissions.map((item) => item.queuePosition).sort((a, b) => a - b), [1, 2, 3, 4]);
  const queuedEvents = readFileSync(join(root, "events.jsonl"), "utf8").trim().split("\n").map(JSON.parse).filter((event) => event.type === "request-queued");
  const broker = new BrowserRequestBroker(root);
  for (const event of queuedEvents) {
    const lease = await broker.leaseNext("fixture-operator");
    assert.equal(lease.transactionId, event.transactionId);
    assert.equal((await broker.leaseNext("fixture-operator")).status, "busy");
    await broker.complete({ ...lease, result: { status: "completed", response: { fixture: true }, downloads: [] } });
  }
  assert.equal((await broker.leaseNext("fixture-operator")).status, "idle");
});
