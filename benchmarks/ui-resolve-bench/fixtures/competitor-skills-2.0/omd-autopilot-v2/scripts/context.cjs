#!/usr/bin/env node
// scripts/context.cjs — minimal, deterministic project scan invoked by the
// omd-harness skill / omd-master agent when they want a fast .omd/context.json
// without doing a full Glob+Read pass in prose.
//
// Output: writes .omd/context.json with { kind, framework, css_files,
// package_name, deps_summary, ts }, and prints the path to stdout.
//
// Pure node — no deps. ~80 lines. Optional helper, not load-bearing: master
// can also just Glob+Read inline, but this preserves determinism for repeat
// scans across runs.

const fs = require('node:fs');
const path = require('node:path');

const cwd = process.argv[2] || process.cwd();
const out = path.join(cwd, '.omd', 'context.json');

function safeRead(p) {
  try {
    return fs.readFileSync(p, 'utf8');
  } catch {
    return null;
  }
}

function listFiles(dir, exts, max = 50) {
  const found = [];
  function walk(d, depth) {
    if (depth > 4 || found.length >= max) return;
    let entries;
    try {
      entries = fs.readdirSync(d, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      if (e.name.startsWith('.') || e.name === 'node_modules' || e.name === 'dist') continue;
      const full = path.join(d, e.name);
      if (e.isDirectory()) walk(full, depth + 1);
      else if (exts.some((ext) => e.name.endsWith(ext))) {
        found.push(path.relative(cwd, full));
        if (found.length >= max) return;
      }
    }
  }
  walk(dir, 0);
  return found;
}

const pkgRaw = safeRead(path.join(cwd, 'package.json'));
const pkg = pkgRaw ? JSON.parse(pkgRaw) : null;
const deps = pkg ? Object.assign({}, pkg.dependencies, pkg.devDependencies) : {};

let framework = 'unknown';
if (deps['next']) framework = 'next';
else if (deps['vite']) framework = 'vite';
else if (deps['react']) framework = 'react';
else if (deps['vue']) framework = 'vue';
else if (deps['svelte']) framework = 'svelte';
else if (deps['solid-js']) framework = 'solid';

let kind = 'unknown';
if (pkg) kind = 'node';
if (fs.existsSync(path.join(cwd, 'index.html')) && !pkg) kind = 'static-html';

const cssFiles = listFiles(cwd, ['.css', '.scss', '.sass'], 20);
const componentFiles = listFiles(cwd, ['.tsx', '.jsx', '.vue', '.svelte'], 30);

const ctx = {
  kind,
  framework,
  package_name: pkg?.name ?? null,
  deps_summary: {
    has_tailwind: !!deps['tailwindcss'],
    has_shadcn: !!deps['@shadcn/ui'] || !!deps['shadcn-ui'],
    has_recharts: !!deps['recharts'],
    has_chartjs: !!deps['chart.js'] || !!deps['chartjs'],
    has_d3: !!deps['d3'],
    has_lucide: !!deps['lucide-react'] || !!deps['lucide-vue'] || !!deps['lucide'],
    has_heroicons: !!deps['@heroicons/react'] || !!deps['@heroicons/vue'],
    has_framer_motion: !!deps['framer-motion'],
  },
  css_files: cssFiles,
  component_files: componentFiles.slice(0, 10),
  ts: new Date().toISOString(),
};

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(ctx, null, 2), 'utf8');
process.stdout.write(out + '\n');
