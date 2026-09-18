#!/usr/bin/env node
import { createHash, randomUUID } from "node:crypto";
import {
  appendFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  renameSync,
  rmdirSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { basename, dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const SCHEMA_VERSION = "0.1";
const OPERATIONS = new Set(["navigate", "inspect", "generate-image", "generate-video", "download"]);
const TERMINAL = new Set(["completed", "failed", "cancelled", "timed_out"]);

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function assertToken(value, label) {
  if (typeof value !== "string" || !/^[a-zA-Z0-9][a-zA-Z0-9._-]{0,127}$/.test(value)) {
    throw new Error(`${label} must be a non-empty portable token`);
  }
  return value;
}

function assertPlainObject(value, label) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${label} must be an object`);
  }
  return value;
}

function assertOnlyProperties(value, allowed, label) {
  for (const key of Object.keys(value)) {
    if (!allowed.has(key)) throw new Error(`${label} contains unsupported property: ${key}`);
  }
}

function cloneJsonObject(value, label) {
  assertPlainObject(value, label);
  try {
    return JSON.parse(JSON.stringify(value));
  } catch (error) {
    throw new Error(`${label} must be JSON-serializable: ${error.message}`);
  }
}

function assertInside(root, candidate, label) {
  const rel = relative(root, candidate);
  if (!rel || rel === ".." || rel.startsWith(`..${sep}`) || isAbsolute(rel)) {
    throw new Error(`${label} must be below ${root}`);
  }
  return candidate;
}

function atomicJson(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  const temporary = `${path}.${process.pid}.${randomUUID()}.tmp`;
  writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`, { flag: "wx" });
  renameSync(temporary, path);
}

function parseJsonFile(path, label) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    throw new Error(`${label} is unreadable or invalid JSON: ${error.message}`);
  }
}

function sleep(ms) {
  return new Promise((done) => setTimeout(done, ms));
}

export class BrowserRequestBroker {
  constructor(root, options = {}) {
    if (typeof root !== "string" || !root || !isAbsolute(root)) {
      throw new Error("broker root must be an explicit absolute path");
    }
    this.root = resolve(root);
    this.statePath = join(this.root, "state.json");
    this.eventsPath = join(this.root, "events.jsonl");
    this.lockPath = join(this.root, ".state-lock");
    this.clock = options.clock ?? (() => Number(process.hrtime.bigint()) / 1e6);
    this.lockPollMs = options.lockPollMs ?? 5;
    this.lockTimeoutMs = options.lockTimeoutMs ?? 5000;
  }

  initialize(cells) {
    if (!Array.isArray(cells) || cells.length < 1) throw new Error("cells must be a non-empty array");
    if (existsSync(this.root)) throw new Error(`refusing to overwrite broker root: ${this.root}`);
    mkdirSync(this.root, { recursive: false });
    const registry = {};
    for (const raw of cells) {
      const cellId = assertToken(raw?.cellId, "cellId");
      const ownerId = assertToken(raw?.ownerId, "ownerId");
      if (registry[cellId]) throw new Error(`duplicate cellId: ${cellId}`);
      const cellRoot = join(this.root, "cells", cellId);
      const resultRoot = join(cellRoot, "results");
      const downloadRoot = join(cellRoot, "downloads");
      mkdirSync(resultRoot, { recursive: true });
      mkdirSync(downloadRoot, { recursive: true });
      registry[cellId] = { cellId, ownerId, cellRoot, resultRoot, downloadRoot };
    }
    const state = {
      schemaVersion: SCHEMA_VERSION,
      status: "ready",
      nextSequence: 1,
      lastMonotonicMs: 0,
      cells: registry,
      queue: [],
      activeLease: null,
      quarantine: null,
      transactions: {},
    };
    atomicJson(this.statePath, state);
    writeFileSync(this.eventsPath, "", { flag: "wx" });
    return { schemaVersion: SCHEMA_VERSION, status: "ready", cells: Object.keys(registry).sort() };
  }

  async #withLock(fn) {
    const started = this.clock();
    while (true) {
      try {
        mkdirSync(this.lockPath);
        writeFileSync(join(this.lockPath, "owner.json"), JSON.stringify({ pid: process.pid }));
        break;
      } catch (error) {
        if (error.code !== "EEXIST") throw error;
        if (this.clock() - started >= this.lockTimeoutMs) {
          throw new Error("broker state lock is occupied; explicit operator reconciliation is required");
        }
        await sleep(this.lockPollMs);
      }
    }
    try {
      const state = parseJsonFile(this.statePath, "broker state");
      if (state.schemaVersion !== SCHEMA_VERSION) throw new Error("unsupported broker state schema");
      const outcome = await fn(state);
      atomicJson(this.statePath, state);
      return outcome;
    } finally {
      try {
        const ownerPath = join(this.lockPath, "owner.json");
        if (existsSync(ownerPath)) {
          // The lock directory is private to this holder.
          writeFileSync(ownerPath, "");
          const tombstone = `${ownerPath}.${process.pid}.done`;
          renameSync(ownerPath, tombstone);
          unlinkSync(tombstone);
        }
        rmdirSync(this.lockPath);
      } catch {
        // A retained lock fails closed on the next operation.
      }
    }
  }

  #event(state, type, ownerId, details = {}) {
    let at = Number(this.clock());
    if (!Number.isFinite(at) || at < 0) throw new Error("monotonic clock returned an invalid value");
    if (at <= state.lastMonotonicMs) at = state.lastMonotonicMs + 0.001;
    state.lastMonotonicMs = at;
    const event = {
      schemaVersion: SCHEMA_VERSION,
      sequence: state.nextSequence++,
      atMonotonicMs: at,
      type,
      ownerId,
      ...details,
    };
    appendFileSync(this.eventsPath, `${JSON.stringify(event)}\n`);
    return event;
  }

  #cell(state, cellId, ownerId) {
    const cell = state.cells[assertToken(cellId, "cellId")];
    if (!cell || cell.ownerId !== assertToken(ownerId, "ownerId")) {
      throw new Error("cell ownership mismatch");
    }
    return cell;
  }

  #validateRequest(state, raw) {
    assertPlainObject(raw, "request");
    if (raw.schemaVersion !== SCHEMA_VERSION) throw new Error("request schemaVersion must be 0.1");
    const transactionId = assertToken(raw.transactionId, "transactionId");
    const cellId = assertToken(raw.cellId, "cellId");
    const ownerId = assertToken(raw.ownerId, "ownerId");
    this.#cell(state, cellId, ownerId);
    if (state.transactions[transactionId]) throw new Error(`duplicate transactionId: ${transactionId}`);
    if (!OPERATIONS.has(raw.operation)) throw new Error(`unsupported browser operation: ${raw.operation}`);
    const payload = structuredClone(assertPlainObject(raw.payload, "payload"));
    let promptSha256 = null;
    if (raw.operation === "generate-image" || raw.operation === "generate-video") {
      if (typeof payload.prompt !== "string" || payload.prompt.length < 1) {
        throw new Error("generation request payload.prompt must be non-empty");
      }
      promptSha256 = sha256(Buffer.from(payload.prompt));
      if (raw.promptSha256 !== promptSha256) {
        throw new Error("generation promptSha256 does not match the exact prompt bytes");
      }
    } else if (raw.promptSha256 != null) {
      throw new Error("promptSha256 is only valid for generation requests");
    }
    const expectedDownloads = raw.expectedDownloads ?? [];
    if (!Array.isArray(expectedDownloads)) throw new Error("expectedDownloads must be an array");
    const seen = new Set();
    const downloads = expectedDownloads.map((item) => {
      assertPlainObject(item, "expected download");
      const id = assertToken(item.id, "download id");
      if (seen.has(id)) throw new Error(`duplicate expected download id: ${id}`);
      seen.add(id);
      if (typeof item.fileName !== "string" || basename(item.fileName) !== item.fileName || !item.fileName) {
        throw new Error("expected download fileName must be a basename");
      }
      return { id, fileName: item.fileName, required: item.required !== false };
    });
    return { schemaVersion: SCHEMA_VERSION, transactionId, cellId, ownerId, operation: raw.operation, payload, promptSha256, expectedDownloads: downloads };
  }

  async submit(raw) {
    return this.#withLock((state) => {
      const request = this.#validateRequest(state, raw);
      const event = this.#event(state, "request-queued", request.ownerId, {
        transactionId: request.transactionId,
        cellId: request.cellId,
      });
      const record = {
        request,
        status: "queued",
        queuedSequence: event.sequence,
        requestedAtMonotonicMs: event.atMonotonicMs,
        acquiredAtMonotonicMs: null,
        terminalAtMonotonicMs: null,
        resultPath: null,
      };
      state.transactions[request.transactionId] = record;
      state.queue.push(request.transactionId);
      return { schemaVersion: SCHEMA_VERSION, transactionId: request.transactionId, status: "queued", queuePosition: state.queue.length };
    });
  }

  async leaseNext(operatorId) {
    assertToken(operatorId, "operatorId");
    return this.#withLock((state) => {
      if (state.quarantine || state.activeLease) {
        return { schemaVersion: SCHEMA_VERSION, status: state.quarantine ? "quarantined" : "busy", transactionId: state.activeLease?.transactionId ?? null };
      }
      const transactionId = state.queue[0];
      if (!transactionId) return { schemaVersion: SCHEMA_VERSION, status: "idle" };
      const record = state.transactions[transactionId];
      if (!record || record.status !== "queued") throw new Error("queue points to an invalid transaction");
      const cell = this.#cell(state, record.request.cellId, record.request.ownerId);
      const downloadDirectory = assertInside(cell.downloadRoot, join(cell.downloadRoot, transactionId), "transaction download directory");
      try {
        mkdirSync(downloadDirectory, { recursive: false });
      } catch (error) {
        if (error.code === "EEXIST") {
          throw new Error(`transaction download directory already exists: ${transactionId}; explicit operator reconciliation is required`);
        }
        throw error;
      }
      state.queue.shift();
      const leaseToken = randomUUID();
      const event = this.#event(state, "lease-acquired", operatorId, { transactionId, cellId: record.request.cellId });
      record.status = "active";
      record.acquiredAtMonotonicMs = event.atMonotonicMs;
      state.activeLease = { transactionId, cellId: record.request.cellId, ownerId: record.request.ownerId, operatorId, leaseToken, status: "active", downloadDirectory };
      const operatorPath = join(this.root, "operator", "active-request.json");
      atomicJson(operatorPath, { ...state.activeLease, request: record.request });
      return { schemaVersion: SCHEMA_VERSION, status: "leased", ...state.activeLease, request: record.request, operatorPath };
    });
  }

  #validateDownloads(state, record, supplied, requireDeclaredOutputs) {
    if (!Array.isArray(supplied)) throw new Error("result downloads must be an array");
    const cell = this.#cell(state, record.request.cellId, record.request.ownerId);
    const downloadDirectory = assertInside(cell.downloadRoot, join(cell.downloadRoot, record.request.transactionId), "transaction download directory");
    if (!existsSync(downloadDirectory)) throw new Error("transaction download directory is missing");
    const directoryInfo = lstatSync(downloadDirectory);
    if (directoryInfo.isSymbolicLink() || !directoryInfo.isDirectory()) {
      throw new Error("transaction download directory must be an owned directory");
    }
    const expected = new Map(record.request.expectedDownloads.map((item) => [item.id, item]));
    const seen = new Set();
    const receipts = supplied.map((item) => {
      assertPlainObject(item, "download result");
      assertOnlyProperties(item, new Set(["id", "relativePath"]), "download result");
      const id = assertToken(item.id, "download result id");
      if (!expected.has(id)) throw new Error(`undeclared download id: ${id}`);
      if (seen.has(id)) throw new Error(`duplicate download result id: ${id}`);
      seen.add(id);
      const spec = expected.get(id);
      if (item.relativePath !== spec.fileName) throw new Error(`download path does not match owned name for ${id}`);
      const path = assertInside(downloadDirectory, resolve(downloadDirectory, item.relativePath), "download");
      if (!existsSync(path)) throw new Error(`download is missing: ${item.relativePath}`);
      const info = lstatSync(path);
      if (info.isSymbolicLink() || !info.isFile()) throw new Error(`download must be an owned regular file: ${item.relativePath}`);
      const real = realpathSync(path);
      assertInside(realpathSync(downloadDirectory), real, "download realpath");
      const bytes = readFileSync(real);
      return { id, relativePath: item.relativePath, bytes: bytes.length, sha256: sha256(bytes) };
    });
    for (const spec of expected.values()) {
      if (requireDeclaredOutputs && spec.required && !seen.has(spec.id)) throw new Error(`required download missing: ${spec.id}`);
    }
    return receipts;
  }

  #assertLease(state, input, allowQuarantine = false) {
    const lease = state.activeLease;
    if (!lease) throw new Error("there is no active lease");
    for (const field of ["transactionId", "cellId", "ownerId", "operatorId", "leaseToken"]) {
      if (input[field] !== lease[field]) throw new Error(`active lease ${field} mismatch`);
    }
    if (!allowQuarantine && lease.status !== "active") throw new Error("active lease requires reconciliation");
    return lease;
  }

  #recordCompletion(state, input, eventType = "result-completed") {
    const lease = this.#assertLease(state, input, true);
    const record = state.transactions[lease.transactionId];
    const result = assertPlainObject(input.result, "result");
    assertOnlyProperties(result, new Set(["status", "response", "downloads"]), "result");
    if (!new Set(["completed", "failed"]).has(result.status)) throw new Error("result status must be completed or failed");
    const response = cloneJsonObject(result.response, "result response");
    const downloads = this.#validateDownloads(state, record, result.downloads, result.status === "completed");
    const event = this.#event(state, eventType, lease.operatorId, { transactionId: lease.transactionId, cellId: lease.cellId, status: result.status });
    const cell = state.cells[lease.cellId];
    const resultPath = join(cell.resultRoot, `${lease.transactionId}.json`);
    const receipt = {
      schemaVersion: SCHEMA_VERSION,
      transactionId: lease.transactionId,
      cellId: lease.cellId,
      ownerId: lease.ownerId,
      operatorId: lease.operatorId,
      requestPromptSha256: record.request.promptSha256,
      status: result.status,
      response,
      downloads,
      requestedAtMonotonicMs: record.requestedAtMonotonicMs,
      acquiredAtMonotonicMs: record.acquiredAtMonotonicMs,
      terminalAtMonotonicMs: event.atMonotonicMs,
      queueBlockedMs: record.acquiredAtMonotonicMs - record.requestedAtMonotonicMs,
      browserActiveMs: event.atMonotonicMs - record.acquiredAtMonotonicMs,
    };
    atomicJson(resultPath, receipt);
    record.status = result.status;
    record.terminalAtMonotonicMs = event.atMonotonicMs;
    record.resultPath = resultPath;
    state.activeLease = null;
    state.quarantine = null;
    atomicJson(join(this.root, "operator", "active-request.json"), { schemaVersion: SCHEMA_VERSION, status: "idle" });
    return receipt;
  }

  async complete(input) {
    return this.#withLock((state) => {
      this.#assertLease(state, input, false);
      return this.#recordCompletion(state, input);
    });
  }

  async #interrupt({ transactionId, cellId, ownerId, reason }, terminalStatus) {
    return this.#withLock((state) => {
      this.#cell(state, cellId, ownerId);
      const record = state.transactions[transactionId];
      if (!record || record.request.cellId !== cellId || record.request.ownerId !== ownerId) throw new Error("transaction ownership mismatch");
      if (record.status === "queued") {
        state.queue = state.queue.filter((id) => id !== transactionId);
        const eventType = terminalStatus === "timed_out" ? "request-timed-out" : "request-cancelled";
        const event = this.#event(state, eventType, ownerId, { transactionId, cellId, reason });
        record.status = terminalStatus;
        record.terminalAtMonotonicMs = event.atMonotonicMs;
        return { schemaVersion: SCHEMA_VERSION, status: terminalStatus, transactionId };
      }
      if (record.status === "active") {
        const event = this.#event(state, "active-owner-quarantined", ownerId, { transactionId, cellId, reason });
        record.status = "quarantined";
        state.activeLease.status = "quarantined";
        state.quarantine = { transactionId, cellId, ownerId, reason, terminalStatus, sinceMonotonicMs: event.atMonotonicMs };
        return { schemaVersion: SCHEMA_VERSION, status: "quarantined", transactionId, requiresOperatorReconciliation: true };
      }
      throw new Error(`cannot cancel transaction in status ${record.status}`);
    });
  }

  async cancel({ transactionId, cellId, ownerId, reason = "owner-cancelled" }) {
    return this.#interrupt({ transactionId, cellId, ownerId, reason }, "cancelled");
  }

  async timeout({ transactionId, cellId, ownerId, reason = "owner-timeout" }) {
    return this.#interrupt({ transactionId, cellId, ownerId, reason }, "timed_out");
  }

  async reconcile(input) {
    return this.#withLock((state) => {
      const lease = this.#assertLease(state, input, true);
      if (!state.quarantine || state.quarantine.transactionId !== lease.transactionId) throw new Error("lease is not quarantined");
      if (input.resolution === "completed") {
        return this.#recordCompletion(state, input, "quarantine-reconciled-completed");
      }
      if (input.resolution !== "terminated") throw new Error("resolution must be completed or terminated");
      const record = state.transactions[lease.transactionId];
      if (!new Set(["cancelled", "timed_out"]).has(state.quarantine.terminalStatus)) {
        throw new Error("quarantine terminal status is missing; explicit operator reconciliation is required");
      }
      const event = this.#event(state, "quarantine-reconciled-terminated", lease.operatorId, { transactionId: lease.transactionId, cellId: lease.cellId });
      record.status = state.quarantine.terminalStatus;
      record.terminalAtMonotonicMs = event.atMonotonicMs;
      state.activeLease = null;
      state.quarantine = null;
      atomicJson(join(this.root, "operator", "active-request.json"), { schemaVersion: SCHEMA_VERSION, status: "idle" });
      return { schemaVersion: SCHEMA_VERSION, status: record.status, transactionId: lease.transactionId, browserActiveMs: event.atMonotonicMs - record.acquiredAtMonotonicMs };
    });
  }

  async poll({ transactionId, cellId, ownerId }) {
    return this.#withLock((state) => {
      this.#cell(state, cellId, ownerId);
      const record = state.transactions[transactionId];
      if (!record || record.request.cellId !== cellId || record.request.ownerId !== ownerId) throw new Error("transaction ownership mismatch");
      const response = {
        schemaVersion: SCHEMA_VERSION,
        transactionId,
        status: record.status,
        queueBlockedMs: record.acquiredAtMonotonicMs == null ? null : record.acquiredAtMonotonicMs - record.requestedAtMonotonicMs,
        browserActiveMs: record.terminalAtMonotonicMs == null || record.acquiredAtMonotonicMs == null ? null : record.terminalAtMonotonicMs - record.acquiredAtMonotonicMs,
      };
      if (TERMINAL.has(record.status) && record.resultPath) response.result = parseJsonFile(record.resultPath, "cell result");
      return response;
    });
  }
}

function argsMap(argv) {
  const map = new Map();
  for (let index = 0; index < argv.length; index += 2) {
    if (!argv[index]?.startsWith("--") || argv[index + 1] == null) throw new Error(`invalid argument: ${argv[index] ?? "<missing>"}`);
    map.set(argv[index].slice(2), argv[index + 1]);
  }
  return map;
}

async function cli() {
  const [command, ...tail] = process.argv.slice(2);
  const args = argsMap(tail);
  const root = args.get("root");
  if (!command || !root) throw new Error("usage: browser-request-broker.mjs <init|submit|next|complete|cancel|timeout|reconcile|poll> --root <absolute-path> ...");
  const broker = new BrowserRequestBroker(root);
  let output;
  if (command === "init") output = broker.initialize(parseJsonFile(args.get("cells"), "cells file"));
  else if (command === "submit") output = await broker.submit(parseJsonFile(args.get("request"), "request file"));
  else if (command === "next") output = await broker.leaseNext(args.get("operator"));
  else if (command === "complete") output = await broker.complete(parseJsonFile(args.get("result"), "completion file"));
  else if (command === "cancel" || command === "timeout") output = await broker[command]({ transactionId: args.get("transaction"), cellId: args.get("cell"), ownerId: args.get("owner"), reason: args.get("reason") });
  else if (command === "reconcile") output = await broker.reconcile(parseJsonFile(args.get("reconciliation"), "reconciliation file"));
  else if (command === "poll") output = await broker.poll({ transactionId: args.get("transaction"), cellId: args.get("cell"), ownerId: args.get("owner") });
  else throw new Error(`unknown command: ${command}`);
  process.stdout.write(`${JSON.stringify(output, null, 2)}\n`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  cli().catch((error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}
