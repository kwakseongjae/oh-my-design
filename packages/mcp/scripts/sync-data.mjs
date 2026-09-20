#!/usr/bin/env node
// Copy web/references/<id>/DESIGN.md into packages/mcp/data/references/<id>/DESIGN.md
// Runs at prepublish + build time. Output dir is gitignored.
//
// What gets copied is the *legacy* source, not the bytes on disk. `data.ts`
// reads a reference by parsing YAML frontmatter, and an adopted reference has
// none — its canonical is the Core v2 body and the frontmatter lives in the
// `.omd/` package. Copying raw bytes therefore shipped adopted references with
// an empty frontmatter map: measured 2026-09-20, MCP served `toss` with 0
// frontmatter keys against 12 for every unadopted peer, losing country,
// category, homepage, verified date and every token. Only the display name
// survived, and only because the portable AST carries it separately.
//
// `readReferenceSource` rebuilds those bytes from the package's migration
// extension and checks them against the hash the migration recorded, so this
// ships the original or fails — never a plausible reconstruction.
import { mkdir, readdir, readFile, writeFile, stat, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readReferenceSource } from '../../../web/scripts/lib/reference-source.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = path.resolve(__dirname, '..');
const REPO_ROOT = path.resolve(PKG_ROOT, '..', '..');
const SRC = path.join(REPO_ROOT, 'web', 'references');
const DEST = path.join(PKG_ROOT, 'data', 'references');
const MANIFEST = path.join(PKG_ROOT, 'data', 'reference-manifest.json');
const AST_SRC = path.join(REPO_ROOT, 'web', 'src', 'data', 'reference-ast.generated.json');
const AST_DEST = path.join(PKG_ROOT, 'data', 'reference-ast.json');

function sha256(buffer) {
  return createHash('sha256').update(buffer).digest('hex');
}

async function main() {
  if (!existsSync(SRC)) {
    console.error(`[sync-data] source missing: ${SRC}`);
    process.exit(1);
  }
  if (!existsSync(AST_SRC)) {
    console.error(`[sync-data] portable AST missing: ${AST_SRC}. Run npm --prefix web run build-reference-ast.`);
    process.exit(1);
  }
  // wipe and recreate (keep .gitkeep at data/)
  if (existsSync(DEST)) await rm(DEST, { recursive: true, force: true });
  await mkdir(DEST, { recursive: true });

  const entries = (await readdir(SRC, { withFileTypes: true }))
    .sort((a, b) => a.name.localeCompare(b.name));
  let copied = 0;
  const references = [];
  for (const ent of entries) {
    if (!ent.isDirectory()) continue;
    const designPath = path.join(SRC, ent.name, 'DESIGN.md');
    if (!existsSync(designPath)) continue;
    const dst = path.join(DEST, ent.name);
    await mkdir(dst, { recursive: true });
    const buf = Buffer.from(readReferenceSource(path.join(SRC, ent.name)).markdown, 'utf8');
    await writeFile(path.join(dst, 'DESIGN.md'), buf);
    references.push({ id: ent.name, sha256: sha256(buf), bytes: buf.byteLength });
    copied++;
  }

  const corpusHash = sha256(
    Buffer.from(references.map((entry) => `${entry.id}\0${entry.sha256}\0${entry.bytes}`).join('\n')),
  );
  const astBuffer = await readFile(AST_SRC);
  const astManifest = JSON.parse(astBuffer.toString('utf8'));
  const astIds = astManifest.references?.map((reference) => reference.identity?.id) ?? [];
  if (astManifest.count !== references.length || JSON.stringify(astIds) !== JSON.stringify(references.map((entry) => entry.id))) {
    throw new Error('[sync-data] portable AST ID/count drift — rebuild web reference AST first');
  }
  for (let index = 0; index < references.length; index++) {
    if (astManifest.references[index]?.contentHash !== references[index].sha256) {
      throw new Error(`[sync-data] portable AST content hash drift: ${references[index].id}`);
    }
  }
  await writeFile(AST_DEST, astBuffer);
  const manifest = {
    schemaVersion: 1,
    generatedFrom: 'web/references',
    count: references.length,
    corpusHash,
    astSchemaVersion: astManifest.schemaVersion,
    astSha256: sha256(astBuffer),
    references,
  };
  await writeFile(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  console.log(
    `[sync-data] copied ${copied} DESIGN.md files → ${path.relative(REPO_ROOT, DEST)} (${corpusHash.slice(0, 12)})`,
  );
}
main().catch((e) => { console.error(e); process.exit(1); });
