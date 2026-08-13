import { createServer } from 'node:http';
import { mkdtempSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { afterEach, describe, expect, it } from 'vitest';

const require = createRequire(import.meta.url);
const { SCHEMA_FILES, checkPublicSchemas } = require('../../../scripts/check-public-core-schemas.cjs');

let server;

afterEach(async () => {
  if (server) await new Promise((resolve) => server.close(resolve));
  server = undefined;
});

async function fixture(responseFor) {
  const root = mkdtempSync(join(tmpdir(), 'omd-public-schema-'));
  const schemaDir = join(root, 'schema');
  const bodies = new Map();
  for (const name of SCHEMA_FILES) {
    const body = Buffer.from(JSON.stringify({ $id: name }));
    bodies.set(name, body);
    const target = join(schemaDir, name);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, body);
  }
  server = createServer((request, response) => responseFor(request, response, bodies));
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  return { baseUrl: `http://127.0.0.1:${address.port}`, schemaDir, timeoutMs: 2_000 };
}

describe('public Core schema liveness', () => {
  it('binds the liveness inventory to every exact-byte public schema mirror', () => {
    const specDir = resolve(process.cwd(), 'spec/schema');
    const publicDir = resolve(process.cwd(), 'web/public/schema');
    const jsonFiles = (directory) => readdirSync(directory)
      .filter((name) => name.endsWith('.schema.json'))
      .sort();

    expect([...SCHEMA_FILES].sort()).toEqual(jsonFiles(specDir));
    expect([...SCHEMA_FILES].sort()).toEqual(jsonFiles(publicDir));
    for (const name of SCHEMA_FILES) {
      const expected = readFileSync(join(specDir, name));
      const published = readFileSync(join(publicDir, name));
      expect(published, `${name} public mirror drifted`).toEqual(expected);
      expect(JSON.parse(published).$id).toBe(`https://oh-my-design.kr/schema/${name}`);
    }
  });

  it('requires all seven deployed schemas to be exact JSON bytes', async () => {
    const options = await fixture((request, response, bodies) => {
      const name = request.url.split('/').pop();
      response.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
      response.end(bodies.get(name));
    });
    const result = await checkPublicSchemas(options);
    expect(result.pass).toBe(true);
    expect(result.checked).toHaveLength(7);
  });

  it('fails closed on HTML 404, redirects, and byte drift', async () => {
    const options = await fixture((request, response, bodies) => {
      const name = request.url.split('/').pop();
      if (name === SCHEMA_FILES[0]) {
        response.writeHead(404, { 'content-type': 'text/html' });
        response.end('<h1>not found</h1>');
      } else if (name === SCHEMA_FILES[1]) {
        response.writeHead(302, { location: '/elsewhere', 'content-type': 'application/json' });
        response.end(bodies.get(name));
      } else if (name === SCHEMA_FILES[2]) {
        response.writeHead(200, { 'content-type': 'application/json' });
        response.end('{}');
      } else {
        response.writeHead(200, { 'content-type': 'application/json' });
        response.end(bodies.get(name));
      }
    });
    const result = await checkPublicSchemas(options);
    expect(result.pass).toBe(false);
    expect(result.findings).toEqual(expect.arrayContaining([
      `${SCHEMA_FILES[0]}: http-404`,
      `${SCHEMA_FILES[0]}: content-type:text/html`,
      `${SCHEMA_FILES[1]}: http-302`,
      `${SCHEMA_FILES[1]}: redirect-not-allowed:/elsewhere`,
      `${SCHEMA_FILES[2]}: byte-mismatch`,
    ]));
  });
});
