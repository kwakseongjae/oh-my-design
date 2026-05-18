import { defineConfig } from 'tsup';

export default defineConfig({
  entry: { index: 'src/index.ts' },
  format: ['esm'],
  clean: true,
  sourcemap: true,
  target: 'node18',
  banner: { js: '#!/usr/bin/env node' },
  shims: false,
});
