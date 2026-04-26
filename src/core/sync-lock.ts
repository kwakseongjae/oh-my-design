import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { z } from 'zod';

export const SYNC_LOCK_VERSION = 1;
export const SYNC_LOCK_PATH = '.omd/sync.lock.json';

const TargetSchema = z.object({
  managed_hash: z.string(),
  last_synced: z.string(),
});

const SyncLockSchema = z.object({
  version: z.number().int().positive(),
  design_md_hash: z.string(),
  targets: z.record(z.string(), TargetSchema),
});

export type SyncTarget = z.infer<typeof TargetSchema>;
export type SyncLock = z.infer<typeof SyncLockSchema>;

function lockPath(projectRoot: string): string {
  return join(projectRoot, SYNC_LOCK_PATH);
}

export function readLock(projectRoot: string): SyncLock | null {
  const path = lockPath(projectRoot);
  if (!existsSync(path)) return null;
  const raw = readFileSync(path, 'utf8');
  const parsed = JSON.parse(raw);
  return SyncLockSchema.parse(parsed);
}

export function writeLock(projectRoot: string, lock: SyncLock): void {
  const validated = SyncLockSchema.parse(lock);
  const path = lockPath(projectRoot);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(validated, null, 2) + '\n', 'utf8');
}

export function createLock(designMdHash: string): SyncLock {
  return {
    version: SYNC_LOCK_VERSION,
    design_md_hash: designMdHash,
    targets: {},
  };
}

export function updateTarget(
  projectRoot: string,
  target: string,
  managedHash: string
): SyncLock {
  const existing = readLock(projectRoot) ?? createLock('');
  const next: SyncLock = {
    ...existing,
    targets: {
      ...existing.targets,
      [target]: {
        managed_hash: managedHash,
        last_synced: new Date().toISOString(),
      },
    },
  };
  writeLock(projectRoot, next);
  return next;
}

export function updateDesignMdHash(
  projectRoot: string,
  designMdHash: string
): SyncLock {
  const existing = readLock(projectRoot) ?? createLock(designMdHash);
  const next: SyncLock = { ...existing, design_md_hash: designMdHash };
  writeLock(projectRoot, next);
  return next;
}
