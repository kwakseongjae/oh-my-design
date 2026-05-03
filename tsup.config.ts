import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: { 'bin/oh-my-design': 'bin/oh-my-design.ts' },
    format: ['esm'],
    clean: true,
    sourcemap: true,
    target: 'node18',
    banner: { js: '#!/usr/bin/env node' },
  },
]);
