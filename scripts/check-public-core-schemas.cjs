#!/usr/bin/env node

const fs = require('node:fs');
const http = require('node:http');
const https = require('node:https');
const path = require('node:path');

const SCHEMA_FILES = Object.freeze([
  'design-md-core-manifest-v2.schema.json',
  'design-system-graph-v2.schema.json',
  'design-system-provenance-v2.schema.json',
  'design-system-coverage-v2.schema.json',
  'design-md-core-adoption-review-v2.schema.json',
  'design-md-core-adoption-receipt-v2.schema.json',
  'design-md-core-project-checkpoint-v2.schema.json',
]);

function parseArgs(argv) {
  let baseUrl = 'https://oh-my-design.kr';
  let schemaDir = path.resolve(__dirname, '..', 'web', 'public', 'schema');
  let timeoutMs = 10_000;
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--base-url') baseUrl = argv[++index];
    else if (arg === '--schema-dir') schemaDir = path.resolve(argv[++index]);
    else if (arg === '--timeout-ms') timeoutMs = Number(argv[++index]);
    else throw new Error(`unknown argument: ${arg}`);
  }
  if (!baseUrl || !Number.isFinite(timeoutMs) || timeoutMs <= 0) {
    throw new Error('invalid --base-url or --timeout-ms');
  }
  return { baseUrl: baseUrl.replace(/\/$/, ''), schemaDir, timeoutMs };
}

function requestBytes(url, timeoutMs) {
  return new Promise((resolve, reject) => {
    const transport = url.protocol === 'https:' ? https : http;
    const request = transport.get(url, {
      headers: { accept: 'application/json', 'user-agent': 'oh-my-design-schema-liveness/2.0' },
    }, (response) => {
      const chunks = [];
      response.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      response.on('end', () => resolve({
        status: response.statusCode ?? 0,
        contentType: response.headers['content-type'] ?? '',
        location: response.headers.location ?? null,
        bytes: Buffer.concat(chunks),
      }));
    });
    request.setTimeout(timeoutMs, () => request.destroy(new Error(`timeout after ${timeoutMs}ms`)));
    request.on('error', reject);
  });
}

async function checkPublicSchemas(options) {
  const findings = [];
  const checked = [];
  for (const name of SCHEMA_FILES) {
    const localPath = path.join(options.schemaDir, name);
    if (!fs.existsSync(localPath) || !fs.statSync(localPath).isFile()) {
      findings.push(`${name}: local-schema-missing`);
      continue;
    }
    const expected = fs.readFileSync(localPath);
    const url = new URL(`/schema/${name}`, `${options.baseUrl}/`);
    try {
      const response = await requestBytes(url, options.timeoutMs);
      if (response.status !== 200) findings.push(`${name}: http-${response.status}`);
      if (response.location) findings.push(`${name}: redirect-not-allowed:${response.location}`);
      if (!/^application\/(?:schema\+)?json(?:\s*;|$)/i.test(response.contentType)) {
        findings.push(`${name}: content-type:${response.contentType || 'missing'}`);
      }
      if (!response.bytes.equals(expected)) findings.push(`${name}: byte-mismatch`);
      checked.push({ name, status: response.status, bytes: response.bytes.length });
    } catch (error) {
      findings.push(`${name}: request-failed:${error instanceof Error ? error.message : String(error)}`);
    }
  }
  return { pass: findings.length === 0, checked, findings };
}

async function main(argv = process.argv.slice(2)) {
  let options;
  try {
    options = parseArgs(argv);
  } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    return 2;
  }
  const result = await checkPublicSchemas(options);
  if (!result.pass) {
    process.stderr.write(`public Core schema liveness failed:\n${result.findings.map((item) => `- ${item}`).join('\n')}\n`);
    return 1;
  }
  process.stdout.write(`public Core schemas current: ${result.checked.length}/${SCHEMA_FILES.length}\n`);
  return 0;
}

module.exports = { SCHEMA_FILES, checkPublicSchemas, main, parseArgs, requestBytes };

if (require.main === module) {
  main().then((status) => { process.exitCode = status; });
}
