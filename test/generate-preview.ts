/**
 * Quick script to generate a preview without the interactive CLI.
 * Usage: npx tsx test/generate-preview.ts
 */
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { loadReference, listReferences } from '../src/core/reference-parser.js';
import { applyOverrides } from '../src/core/customizer.js';
import { generatePreviewHtml } from '../src/core/preview-generator.js';

// Show available references
const refs = listReferences();
console.log(`Available references: ${refs.length}`);
for (const cat of [...new Set(refs.map((r) => r.category))]) {
  const catRefs = refs.filter((r) => r.category === cat);
  console.log(`  ${cat}: ${catRefs.map((r) => r.name).join(', ')}`);
}

// Generate with Stripe as base, customize primary color
const ref = loadReference('stripe');
console.log(`\nLoaded: ${ref.name}`);
console.log(`  Primary: ${ref.colors.primary} (${ref.colors.primaryName})`);
console.log(`  Font: ${ref.typography.primary}`);
console.log(`  Radius: ${ref.radius}`);

const { designMd, shadcnCss, previewData } = applyOverrides(ref, {
  primaryColor: '#6366f1', // override Stripe purple → Indigo
  darkMode: true,
}, 'customized');

previewData.shadcnCss = shadcnCss;
previewData.designMd = designMd;

const html = generatePreviewHtml(previewData);

const outDir = resolve(process.cwd());
writeFileSync(resolve(outDir, 'DESIGN.md'), designMd, 'utf-8');
writeFileSync(resolve(outDir, 'DESIGN.preview.html'), html, 'utf-8');

console.log(`\nGenerated:`);
console.log(`  DESIGN.md (${designMd.length} chars)`);
console.log(`  DESIGN.preview.html (${html.length} chars)`);
