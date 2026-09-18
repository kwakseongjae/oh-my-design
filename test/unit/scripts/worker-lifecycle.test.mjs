import { afterEach, describe, expect, it } from 'vitest';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { runWorker } from '../../../scripts/execution/worker-lifecycle.mjs';

const roots = [];
afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

function fixture(source, { timeoutMs = 2_000, format = 'json', preexisting } = {}) {
  const root = mkdtempSync(join(tmpdir(), 'omd-worker-'));
  roots.push(root);
  const worker = join(root, 'worker.mjs');
  const output = join(root, 'result.json');
  writeFileSync(worker, source);
  if (preexisting !== undefined) writeFileSync(output, preexisting);
  return {
    root,
    output,
    spec: {
      taskId: 'fixture', provider: 'grok-build', model: 'grok-4.6',
      command: process.execPath, argv: [worker, output], cwd: root,
      attemptsDir: join(root, 'attempts'), timeoutMs,
      ownedOutputs: [{ path: 'result.json', format }],
    },
  };
}

describe('worker lifecycle', () => {
  it('admits only fresh valid output and records its exact hash', async () => {
    const item = fixture(`import{writeFileSync}from'node:fs';writeFileSync(process.argv[2],JSON.stringify({ok:true}));console.log(JSON.stringify({type:'result',model:'grok-4.6-build'}))`);
    const run = await runWorker(item.spec);
    expect(run.status.state).toBe('succeeded');
    expect(run.status.outputs[0]).toMatchObject({ exists: true, changedSinceStart: true, bytes: 11 });
    expect(run.status.outputs[0].sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(run.status.modelAttribution).toMatchObject({ requested: 'grok-4.6', reported: ['grok-4.6-build'] });
    expect(run.status.logs.stdout.sha256).toMatch(/^[a-f0-9]{64}$/);
  });

  it.each([
    ['missing output', `process.exit(0)`, undefined, 'missing output'],
    ['invalid JSON', `import{writeFileSync}from'node:fs';writeFileSync(process.argv[2],'{bad')`, undefined, 'invalid JSON'],
    ['nonzero exit', `import{writeFileSync}from'node:fs';writeFileSync(process.argv[2],'{}');process.exit(7)`, undefined, 'nonzero-exit'],
    ['unchanged preexisting output', `process.exit(0)`, '{}', 'not produced or changed'],
  ])('rejects %s', async (_name, source, preexisting, reason) => {
    const item = fixture(source, { preexisting });
    const run = await runWorker(item.spec);
    expect(run.status.state).toBe('failed');
    expect(JSON.stringify(run.status)).toContain(reason);
  });

  it('times out and kills the worker process group including its descendant', async () => {
    const source = `import{spawn}from'node:child_process';import{writeFileSync}from'node:fs';process.on('SIGTERM',()=>{});const c=spawn(process.execPath,['-e',"process.on('SIGTERM',()=>{});setInterval(()=>{},1000)"],{stdio:'ignore'});writeFileSync(process.argv[2],JSON.stringify({child:c.pid}));setInterval(()=>{},1000)`;
    const item = fixture(source, { timeoutMs: 150 });
    const run = await runWorker(item.spec, { killGraceMs: 100 });
    expect(run.status.state).toBe('timed-out');
    const { child } = JSON.parse(readFileSync(item.output, 'utf8'));
    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(() => process.kill(child, 0)).toThrow();
  });

  it('cleans up a descendant left behind by a normally exiting leader', async () => {
    const source = `import{spawn}from'node:child_process';import{writeFileSync}from'node:fs';const c=spawn(process.execPath,['-e',"process.on('SIGTERM',()=>{});setInterval(()=>{},1000)"],{stdio:'ignore'});c.unref();writeFileSync(process.argv[2],JSON.stringify({child:c.pid}))`;
    const item = fixture(source);
    const run = await runWorker(item.spec, { killGraceMs: 100 });
    expect(run.status.state).toBe('succeeded');
    expect(run.status.processGroupCleanup).toBe('dead');
    const { child } = JSON.parse(readFileSync(item.output, 'utf8'));
    expect(() => process.kill(child, 0)).toThrow();
  });

  it('cancels and kills the worker process group', async () => {
    const item = fixture(`import{writeFileSync}from'node:fs';writeFileSync(process.argv[2],'{}');setInterval(()=>{},1000)`, { timeoutMs: 5_000 });
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 100);
    const run = await runWorker(item.spec, { signal: controller.signal, killGraceMs: 100 });
    expect(run.status.state).toBe('cancelled');
    expect(run.status.terminalReason).toBe('cancelled');
  });

  it('recovers a dead running attempt into a lineage-linked new attempt', async () => {
    const item = fixture(`import{writeFileSync}from'node:fs';writeFileSync(process.argv[2],JSON.stringify({fresh:Date.now()}))`);
    const staleDir = join(item.spec.attemptsDir, 'attempt-0001');
    mkdirSync(staleDir, { recursive: true });
    writeFileSync(join(staleDir, 'status.json'), JSON.stringify({
      schemaVersion: 1, attemptId: 'attempt-0001', taskId: 'fixture', state: 'running',
      pid: 99999999, pgid: 99999999, processStartIdentity: 'stale', startedAt: new Date(0).toISOString(),
    }));
    const run = await runWorker(item.spec);
    expect(run.status).toMatchObject({ state: 'succeeded', attemptId: 'attempt-0002', previousAttemptId: 'attempt-0001' });
    expect(JSON.parse(readFileSync(join(staleDir, 'status.json'), 'utf8'))).toMatchObject({ state: 'abandoned', terminalReason: 'runner-or-worker-crash' });
  });

  it('refuses an active prior attempt instead of launching a duplicate', async () => {
    const item = fixture(`import{writeFileSync}from'node:fs';writeFileSync(process.argv[2],JSON.stringify({ok:true}));setInterval(()=>{},1000)`, { timeoutMs: 5_000 });
    const controller = new AbortController();
    const first = runWorker(item.spec, { signal: controller.signal, killGraceMs: 100 });
    while (!existsSync(join(item.spec.attemptsDir, 'attempt-0001/status.json'))) await new Promise((resolve) => setTimeout(resolve, 10));
    await expect(runWorker(item.spec)).rejects.toThrow('refusing duplicate start');
    controller.abort();
    await first;
  });

  it('does not launch when already aborted', async () => {
    const item = fixture(`process.exit(0)`);
    const controller = new AbortController();
    controller.abort();
    await expect(runWorker(item.spec, { signal: controller.signal })).rejects.toThrow('cancelled before launch');
    expect(existsSync(item.spec.attemptsDir)).toBe(false);
  });

  it('rejects output symlinks and spawn errors', async () => {
    const linked = fixture(`process.exit(0)`);
    const outside = join(linked.root, 'outside.json');
    writeFileSync(outside, '{}');
    symlinkSync(outside, linked.output);
    await expect(runWorker(linked.spec)).rejects.toThrow('symbolic link');

    const missing = fixture(`process.exit(0)`);
    missing.spec.command = join(missing.root, 'missing-executable');
    const run = await runWorker(missing.spec);
    expect(run.status).toMatchObject({ state: 'failed', spawnError: expect.stringContaining('ENOENT') });
  });

  it('refuses to join an attempt lineage owned by another task', async () => {
    const item = fixture(`process.exit(0)`);
    const staleDir = join(item.spec.attemptsDir, 'attempt-0001');
    mkdirSync(staleDir, { recursive: true });
    writeFileSync(join(staleDir, 'status.json'), JSON.stringify({
      attemptId: 'attempt-0001', taskId: 'other', state: 'failed', pid: 99999999, pgid: 99999999,
    }));
    await expect(runWorker(item.spec)).rejects.toThrow('belongs to task other');
  });
});
