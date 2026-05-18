#!/usr/bin/env node
// Copy web/references/<id>/DESIGN.md into packages/mcp/data/references/<id>/DESIGN.md
// Runs at prepublish + build time. Output dir is gitignored.
import { mkdir, readdir, readFile, writeFile, stat, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = path.resolve(__dirname, '..');
const REPO_ROOT = path.resolve(PKG_ROOT, '..', '..');
const SRC = path.join(REPO_ROOT, 'web', 'references');
const DEST = path.join(PKG_ROOT, 'data', 'references');

async function main() {
  if (!existsSync(SRC)) {
    console.error(`[sync-data] source missing: ${SRC}`);
    process.exit(1);
  }
  // wipe and recreate (keep .gitkeep at data/)
  if (existsSync(DEST)) await rm(DEST, { recursive: true, force: true });
  await mkdir(DEST, { recursive: true });

  const entries = await readdir(SRC, { withFileTypes: true });
  let copied = 0;
  for (const ent of entries) {
    if (!ent.isDirectory()) continue;
    const designPath = path.join(SRC, ent.name, 'DESIGN.md');
    if (!existsSync(designPath)) continue;
    const dst = path.join(DEST, ent.name);
    await mkdir(dst, { recursive: true });
    const buf = await readFile(designPath);
    await writeFile(path.join(dst, 'DESIGN.md'), buf);
    copied++;
  }
  console.log(`[sync-data] copied ${copied} DESIGN.md files → ${path.relative(REPO_ROOT, DEST)}`);
}
main().catch((e) => { console.error(e); process.exit(1); });
