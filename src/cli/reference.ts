import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import pc from 'picocolors';

function findRepoRoot(): string | null {
  let cur = dirname(fileURLToPath(import.meta.url));
  for (let i = 0; i < 8; i++) {
    if (existsSync(join(cur, 'references'))) return cur;
    const parent = dirname(cur);
    if (parent === cur) break;
    cur = parent;
  }
  return null;
}

export function runReferenceShow(refId: string): number {
  const root = findRepoRoot();
  if (!root) {
    console.error(pc.red('omd reference show: package data not found'));
    return 1;
  }
  const path = join(root, 'references', refId, 'DESIGN.md');
  if (!existsSync(path)) {
    console.error(pc.red(`omd reference show: reference not found: ${refId}`));
    return 1;
  }
  process.stdout.write(readFileSync(path, 'utf8'));
  return 0;
}

export function runReferenceList(): number {
  const root = findRepoRoot();
  if (!root) {
    console.error(pc.red('omd reference list: package data not found'));
    return 1;
  }
  const refDir = join(root, 'references');
  const ids = readdirSync(refDir)
    .filter((name) => statSync(join(refDir, name)).isDirectory())
    .filter((name) => existsSync(join(refDir, name, 'DESIGN.md')))
    .sort();
  for (const id of ids) process.stdout.write(id + '\n');
  return 0;
}
