#!/usr/bin/env node

import { createHash, randomUUID } from 'node:crypto';
import { existsSync, lstatSync, mkdirSync, readFileSync, renameSync, statSync, writeFileSync } from 'node:fs';
import { dirname, isAbsolute, relative, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

export const RECEIPT_GROUPS = ['source', 'brief', 'assets', 'output', 'checkers'];
const DIAGNOSTIC_CLASSES = new Set(['hard', 'style']);
const DIAGNOSTIC_STATUSES = new Set(['pass', 'fail', 'pending', 'error']);

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

function atomicJson(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  const temp = `${path}.${process.pid}.${randomUUID()}.tmp`;
  writeFileSync(temp, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
  renameSync(temp, path);
}

function normalizedRelativePath(root, input, label) {
  if (typeof input !== 'string' || !input.trim()) throw new Error(`${label} path is required`);
  const absolute = resolve(root, input);
  const rel = relative(root, absolute);
  if (rel === '' || rel.startsWith('..') || isAbsolute(rel)) throw new Error(`${label} must be a file inside root: ${input}`);
  if (!existsSync(absolute)) throw new Error(`${label} is missing: ${rel}`);
  if (lstatSync(absolute).isSymbolicLink() || !statSync(absolute).isFile()) throw new Error(`${label} must be a regular non-symlink file: ${rel}`);
  return { absolute, relative: rel };
}

function hashEntry(root, input, label) {
  const path = normalizedRelativePath(root, input, label);
  const bytes = readFileSync(path.absolute);
  return { path: path.relative, sha256: sha256(bytes), bytes: bytes.length };
}

function normalizeSpec(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error('receipt spec must be an object');
  if (typeof raw.root !== 'string' || !raw.root.trim()) throw new Error('root is required');
  if (typeof raw.taskId !== 'string' || !raw.taskId.trim()) throw new Error('taskId is required');
  const root = resolve(raw.root);
  if (!existsSync(root) || !statSync(root).isDirectory()) throw new Error(`root is not a directory: ${root}`);
  const groups = {};
  const emptyReasons = {};
  for (const group of RECEIPT_GROUPS) {
    const values = raw.groups?.[group];
    if (!Array.isArray(values)) throw new Error(`groups.${group} must be an array`);
    if (values.length === 0) {
      const reason = typeof raw.emptyReasons?.[group] === 'string' ? raw.emptyReasons[group].trim() : '';
      if (group !== 'assets' || !reason) throw new Error(`groups.${group} must contain at least one file`);
      emptyReasons[group] = reason;
    }
    groups[group] = values;
  }
  if (!Array.isArray(raw.diagnostics) || raw.diagnostics.length === 0) throw new Error('diagnostics must contain at least one result');
  const diagnostics = raw.diagnostics.map((item, index) => {
    if (!item || typeof item !== 'object') throw new Error(`diagnostics[${index}] must be an object`);
    const id = String(item.id || '').trim();
    const scope = String(item.scope || '').trim();
    if (!id) throw new Error(`diagnostics[${index}].id is required`);
    if (!scope) throw new Error(`diagnostics[${index}].scope is required`);
    if (!DIAGNOSTIC_CLASSES.has(item.class)) throw new Error(`diagnostics[${index}].class must be hard or style`);
    if (!DIAGNOSTIC_STATUSES.has(item.status)) throw new Error(`diagnostics[${index}].status must be pass, fail, pending, or error`);
    return { id, scope, class: item.class, status: item.status, detail: item.detail ? String(item.detail) : null };
  });
  if (!diagnostics.some((item) => item.class === 'hard')) throw new Error('at least one hard diagnostic is required');
  if (!diagnostics.some((item) => item.class === 'style')) throw new Error('at least one style diagnostic is required');
  return { root, taskId: raw.taskId.trim(), groups, emptyReasons, diagnostics };
}

function gateFor(diagnostics, kind) {
  const selected = diagnostics.filter((item) => item.class === kind);
  const failed = selected.filter((item) => item.status !== 'pass').map((item) => item.id);
  return { pass: selected.length > 0 && failed.length === 0, total: selected.length, failed };
}

export function createArtifactReceipt(rawSpec) {
  const spec = normalizeSpec(rawSpec);
  const groups = Object.fromEntries(RECEIPT_GROUPS.map((group) => [
    group,
    spec.groups[group].map((path, index) => hashEntry(spec.root, path, `groups.${group}[${index}]`)),
  ]));
  return {
    schemaVersion: 1,
    kind: 'omd-execution-artifact-receipt',
    taskId: spec.taskId,
    root: spec.root,
    createdAt: new Date().toISOString(),
    groups,
    emptyReasons: spec.emptyReasons,
    diagnostics: spec.diagnostics,
    gates: {
      hard: gateFor(spec.diagnostics, 'hard'),
      style: gateFor(spec.diagnostics, 'style'),
    },
  };
}

export function verifyArtifactReceipt(receipt) {
  if (!receipt || receipt.kind !== 'omd-execution-artifact-receipt' || receipt.schemaVersion !== 1) {
    return { valid: false, mismatches: ['receipt identity is invalid'], gates: null };
  }
  const mismatches = [];
  if (typeof receipt.root !== 'string' || !receipt.root || typeof receipt.taskId !== 'string' || !receipt.taskId) {
    mismatches.push('receipt root or taskId is invalid');
  }
  if (!Array.isArray(receipt.diagnostics) || receipt.diagnostics.length === 0) {
    mismatches.push('diagnostics missing or empty');
  } else {
    const ids = new Set();
    for (const item of receipt.diagnostics) {
      if (!item || typeof item.id !== 'string' || !item.id || ids.has(item.id)) mismatches.push('diagnostic id missing or duplicate');
      else ids.add(item.id);
      if (typeof item.scope !== 'string' || !item.scope) mismatches.push(`diagnostic scope missing: ${item?.id || '<unknown>'}`);
      if (!DIAGNOSTIC_CLASSES.has(item.class)) mismatches.push(`diagnostic class invalid: ${item?.id || '<unknown>'}`);
      if (!DIAGNOSTIC_STATUSES.has(item.status)) mismatches.push(`diagnostic status invalid: ${item?.id || '<unknown>'}`);
    }
    if (!receipt.diagnostics.some((item) => item.class === 'hard')) mismatches.push('hard diagnostics missing');
    if (!receipt.diagnostics.some((item) => item.class === 'style')) mismatches.push('style diagnostics missing');
  }
  for (const group of RECEIPT_GROUPS) {
    if (!Array.isArray(receipt.groups?.[group])) {
      mismatches.push(`group missing: ${group}`);
      continue;
    }
    if (receipt.groups[group].length === 0) {
      if (group !== 'assets' || typeof receipt.emptyReasons?.assets !== 'string' || !receipt.emptyReasons.assets.trim()) {
        mismatches.push(`group empty without accepted reason: ${group}`);
      }
      continue;
    }
    for (const entry of receipt.groups[group]) {
      try {
        const observed = hashEntry(receipt.root, entry.path, `groups.${group}`);
        if (observed.sha256 !== entry.sha256 || observed.bytes !== entry.bytes) {
          mismatches.push(`content mismatch: ${group}/${entry.path}`);
        }
      } catch (error) {
        mismatches.push(error.message);
      }
    }
  }
  const structurallyValidDiagnostics = Array.isArray(receipt.diagnostics) ? receipt.diagnostics.filter((item) =>
    item && typeof item.id === 'string' && typeof item.scope === 'string' && DIAGNOSTIC_CLASSES.has(item.class) && DIAGNOSTIC_STATUSES.has(item.status)
  ) : [];
  const hard = gateFor(structurallyValidDiagnostics, 'hard');
  const style = gateFor(structurallyValidDiagnostics, 'style');
  if (JSON.stringify(hard) !== JSON.stringify(receipt.gates?.hard)) mismatches.push('hard gate summary mismatch');
  if (JSON.stringify(style) !== JSON.stringify(receipt.gates?.style)) mismatches.push('style gate summary mismatch');
  return { valid: mismatches.length === 0, mismatches, gates: { hard, style } };
}

async function main(argv) {
  const [command, firstFlag, firstValue, secondFlag, secondValue] = argv;
  if (command === 'create' && firstFlag === '--spec' && firstValue && secondFlag === '--out' && secondValue) {
    const receipt = createArtifactReceipt(JSON.parse(readFileSync(resolve(firstValue), 'utf8')));
    atomicJson(resolve(secondValue), receipt);
    process.stdout.write(`${JSON.stringify({ created: true, hardPass: receipt.gates.hard.pass, stylePass: receipt.gates.style.pass })}\n`);
    process.exitCode = receipt.gates.hard.pass ? 0 : 1;
    return;
  }
  if (command === 'verify' && firstFlag === '--receipt' && firstValue) {
    const verification = verifyArtifactReceipt(JSON.parse(readFileSync(resolve(firstValue), 'utf8')));
    process.stdout.write(`${JSON.stringify(verification)}\n`);
    process.exitCode = verification.valid && verification.gates?.hard.pass ? 0 : 1;
    return;
  }
  throw new Error('usage: artifact-receipt.mjs create --spec <json> --out <json> | verify --receipt <json>');
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main(process.argv.slice(2)).catch((error) => {
    process.stderr.write(`${error.stack || error.message}\n`);
    process.exitCode = 1;
  });
}
