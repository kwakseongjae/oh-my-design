import * as p from '@clack/prompts';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { runPrompts } from './prompts.js';
import { applyOverrides } from '../core/customizer.js';
import { generatePreviewHtml } from '../core/preview-generator.js';

export async function run() {
  const { reference, overrides, outputMode } = await runPrompts();

  const s = p.spinner();
  s.start(`Building design system based on ${reference.name}...`);

  // Apply overrides to reference DESIGN.md
  const { designMd, shadcnCss, previewData } = applyOverrides(reference, overrides, outputMode);

  // Fill in the preview data with generated content
  previewData.shadcnCss = shadcnCss;
  previewData.designMd = designMd;

  // Generate preview HTML
  const html = generatePreviewHtml(previewData);

  // Write files
  const outputDir = process.cwd();
  const mdPath = resolve(outputDir, 'DESIGN.md');
  const htmlPath = resolve(outputDir, 'DESIGN.preview.html');

  writeFileSync(mdPath, designMd, 'utf-8');
  writeFileSync(htmlPath, html, 'utf-8');

  s.stop('Done!');

  p.log.success(`DESIGN.md       → ${mdPath}`);
  p.log.success(`Preview HTML    → ${htmlPath}`);
  p.outro('Open DESIGN.preview.html in your browser to explore your design system.');
}
