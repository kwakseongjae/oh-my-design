#!/usr/bin/env node

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const generated = path.join(root, 'web/src/generated/core-verifier');
const system = path.join(root, '.omd/system');
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'omd-web-core-verifier-'));

function packagePayload() {
  const read = (file) => fs.readFileSync(file, 'utf8');
  return {
    designMd: read(path.join(root, 'DESIGN.md')),
    graphBytes: read(path.join(system, 'graph.json')),
    provenanceBytes: read(path.join(system, 'provenance.json')),
    coverageBytes: read(path.join(system, 'coverage.json')),
    manifestBytes: read(path.join(system, 'manifest.json')),
    adoptionReceiptBytes: read(path.join(system, 'adoption-receipt.json')),
  };
}

try {
  fs.cpSync(generated, path.join(temp, 'verifier'), { recursive: true });
  const payload = packagePayload();
  fs.writeFileSync(path.join(temp, 'cases.json'), JSON.stringify({
    valid: payload,
    noncanonical: { ...payload, designMd: payload.designMd.replace('oh-my-design', 'forged-system') },
    sidecarDrift: { ...payload, provenanceBytes: `${payload.provenanceBytes} ` },
  }));
  const child = `
    const fs = require('node:fs');
    const path = require('node:path');
    const Module = require('node:module');
    const root = process.cwd();
    const originalResolve = Module._resolveFilename;
    Module._resolveFilename = function(request, parent, ...rest) {
      const resolved = originalResolve.call(this, request, parent, ...rest);
      if (typeof resolved === 'string' && path.isAbsolute(resolved) && !resolved.startsWith(root + path.sep)) {
        throw new Error('verifier escaped isolated web closure: ' + resolved);
      }
      return resolved;
    };
    const verifier = require('./verifier/web-core-verifier.cjs');
    const cases = JSON.parse(fs.readFileSync('./cases.json', 'utf8'));
    const parse = (item) => ({
      designMd: item.designMd,
      graphBytes: item.graphBytes,
      graph: JSON.parse(item.graphBytes),
      provenanceBytes: item.provenanceBytes,
      provenance: JSON.parse(item.provenanceBytes),
      coverageBytes: item.coverageBytes,
      coverage: JSON.parse(item.coverageBytes),
      manifestBytes: item.manifestBytes,
      manifest: JSON.parse(item.manifestBytes),
      adoptionReceiptBytes: item.adoptionReceiptBytes,
      adoptionReceipt: JSON.parse(item.adoptionReceiptBytes),
    });
    const results = Object.fromEntries(Object.entries(cases).map(([name, value]) => [name, verifier.validateAdoptedPackage(parse(value))]));
    if (!results.valid.valid || results.noncanonical.valid || results.sidecarDrift.valid) process.exit(2);
    process.stdout.write(JSON.stringify({ valid: results.valid.valid, noncanonical: results.noncanonical.valid, sidecarDrift: results.sidecarDrift.valid }));
  `;
  const result = spawnSync(process.execPath, ['-e', child], { cwd: temp, encoding: 'utf8' });
  if (result.status !== 0) throw new Error(result.stderr || result.stdout || `child exit ${result.status}`);
  process.stdout.write(`${result.stdout}\n`);
} catch (error) {
  process.stderr.write(`web-only core verifier smoke: ${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
} finally {
  fs.rmSync(temp, { recursive: true, force: true });
}
