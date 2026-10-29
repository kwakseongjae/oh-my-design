#!/usr/bin/env node
/**
 * Capture MCP server for sandboxed workers (docs/WORKER_PLAN_2026-10-29.md §4).
 *
 * A Codex worker runs in a sandbox where Chrome cannot start. This stdio MCP server runs outside the sandbox and
 * opens exactly one fixed tool, `probe_page`, which runs web/scripts/probe-keyboard-states.mjs in the worker's own
 * Chrome (`--browser worker`: headed, a fresh temporary profile, never the owner's profile or logins). There is
 * deliberately no tool that runs arbitrary code: that would undo the sandbox.
 *
 * Output goes to artifacts/reference-evidence/visual/<id>/<timestamp>/ (local-only, never committed):
 * states.json, summary.txt, shots/<key>-<state>.png, viewport.png, full.png, scroll.webm.
 *
 * Wired by scripts/workers/spawn.sh --mcp capture. Uses the MCP SDK installed under packages/mcp.
 */
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const req = createRequire(path.join(REPO, 'packages/mcp/package.json'));
const { McpServer } = await import(req.resolve('@modelcontextprotocol/sdk/server/mcp.js'));
const { StdioServerTransport } = await import(req.resolve('@modelcontextprotocol/sdk/server/stdio.js'));
const { z } = await import(req.resolve('zod'));

const PROBE = path.join(REPO, 'web/scripts/probe-keyboard-states.mjs');
const ROOT = path.join(REPO, 'artifacts/reference-evidence/visual');
const stamp = () => new Date().toISOString().replace(/[-:]/g, '').replace(/\..+/, '').replace('T', '-');

function run(args, timeoutMs) {
  return new Promise((resolve) => {
    const p = spawn(process.execPath, [PROBE, ...args], { cwd: path.join(REPO, 'web') });
    let out = '', err = '';
    const t = setTimeout(() => p.kill('SIGTERM'), timeoutMs);
    p.stdout.on('data', (d) => (out += d));
    p.stderr.on('data', (d) => (err += d));
    p.on('close', (code) => { clearTimeout(t); resolve({ code, out, err }); });
  });
}

const server = new McpServer({ name: 'omd-capture', version: '0.1.0' });
server.registerTool('probe_page', {
  description:
    'Load one public page in the worker Chrome (headed, fresh profile, consent rejected) and measure it with probe-keyboard-states.mjs. ' +
    'mode "survey" lists interactive elements to choose from; mode "states" measures up to 6 controls (identity, rest, hover, pressed, keyboard focus) ' +
    'and saves a PNG crop of each control in each state, page screenshots (viewport, full) and a scroll video. Returns the summary and the output directory.',
  inputSchema: {
    url: z.string().regex(/^https?:\/\/[^\s]+$/),
    id: z.string().regex(/^[a-z0-9][a-z0-9-]{0,39}$/).describe('reference id, e.g. sbb'),
    locale: z.string().regex(/^[a-z]{2}(-[A-Z]{2})?$/).default('en-US'),
    mode: z.enum(['survey', 'states']).default('states'),
    controls: z.array(z.object({
      key: z.string().regex(/^[a-z0-9-]{1,30}$/),
      label: z.string().max(80).optional(),
      find: z.object({
        tag: z.string().max(20).optional(), text: z.string().max(120).optional(), exact: z.boolean().optional(),
        landmark: z.string().max(20).optional(), selector: z.string().max(300).optional(), minH: z.number().optional(),
        nth: z.number().int().min(0).max(50).optional(), href: z.string().max(300).optional(),
      }),
    })).max(6).optional().describe('required for mode "states": the controls to measure, in the probe cfg shape'),
  },
}, async ({ url, id, locale, mode, controls }) => {
  const dir = path.join(ROOT, id, stamp());
  fs.mkdirSync(dir, { recursive: true });
  const args = [url, '--browser', 'worker', '--locale', locale, '--out', path.join(dir, mode === 'survey' ? 'survey.json' : 'states.json'), '--quiet', '--summary'];
  if (mode === 'survey') args.push('--survey');
  else {
    if (!controls?.length) return { content: [{ type: 'text', text: 'mode "states" needs controls (run mode "survey" first)' }], isError: true };
    const cfg = path.join(dir, 'cfg.json');
    fs.writeFileSync(cfg, JSON.stringify({ controls }, null, 2));
    args.push('--cfg', cfg, '--shots', path.join(dir, 'shots'), '--visual', dir);
  }
  const r = await run(args, 15 * 60 * 1000);
  fs.writeFileSync(path.join(dir, 'summary.txt'), r.out + r.err);
  const files = fs.readdirSync(dir, { recursive: true }).filter((f) => /\.(png|webm|json|txt)$/.test(f)).sort();
  const text = [`exit ${r.code} · output ${dir}`, `files: ${files.join(', ')}`, '', (r.out + r.err).slice(-12000)].join('\n');
  return { content: [{ type: 'text', text }], isError: r.code !== 0 && r.code !== 3 };
});

await server.connect(new StdioServerTransport());
